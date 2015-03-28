(ns lt.plugins.editorconfig
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.context :as ctxt]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.objs.plugins :as plugins])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn js-require
  "Allow for node-style requires from the local node_modules directory"
  [module-path]
  (js/require (files/join plugins/user-plugins-dir module-path)))


;;Require editorconfig like we would in any node program
(def editorconfig (js-require "editorconfig/node_modules/editorconfig"))


;;For better or worse this returns a promise which we will have to deal with
(defn parse [file-path] (.parse editorconfig file-path))


(defn apply-indent
  "Applies tab settings"
  [indent-settings]
  (if-let [index-size (:indent-size indent-settings)]
    (editor/tab-settings false indent-size indent-size)
    (when (= "tab" (:indent-style indent-settings))
      (editor/tab-settings true))))


;;Currently Light Table only supports indent size and style
(defn apply-config
  "Apply the settings from the editorconfig file to the editor environment"
  [config]
  (apply-indent #{:indent-style (:indent_style config)
                  :indent-size (:indent_size config)}))


;;TODO: Figure out how to get the correct path if it isn't (:pwd this)
;;I get stuck here because I don't know how to get the current directory
(defn editorconfig-main
  "Main execution for editorconfig behavior"
  [info client-path]
  (let [ecpromise client-path]
    (.then ecpromise apply-config)))



(behavior ::eval!
          ::triggers #{:eval :eval.one}
          ::reaction #(editorconfig-main %))


(object/object* ::editorconfig
                :tags #{}
                :behaviors [::eval!]
                :triggers #{:eval!})


(def editorconfig (object/create ::editorconfig))
