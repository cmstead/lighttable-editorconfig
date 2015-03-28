if(!lt.util.load.provided_QMARK_('lt.plugins.editorconfig')) {
goog.provide('lt.plugins.editorconfig');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.tabs');
goog.require('lt.objs.context');
goog.require('lt.objs.context');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.command');
/**
* Allow for node-style requires from the local node_modules directory
*/
lt.plugins.editorconfig.js_require = (function js_require(module_path){return require(lt.objs.files.join.call(null,lt.objs.plugins.user_plugins_dir,module_path));
});
lt.plugins.editorconfig.editorconfig = lt.plugins.editorconfig.js_require.call(null,"editorconfig/node_modules/editorconfig");
lt.plugins.editorconfig.parse = (function parse(file_path){return lt.plugins.editorconfig.editorconfig.parse(file_path);
});
/**
* Applies tab settings
*/
lt.plugins.editorconfig.apply_indent = (function apply_indent(indent_settings){var temp__4090__auto__ = new cljs.core.Keyword(null,"indent-size","indent-size",2951516148).cljs$core$IFn$_invoke$arity$1(indent_settings);if(cljs.core.truth_(temp__4090__auto__))
{var index_size = temp__4090__auto__;return lt.objs.editor.tab_settings.call(null,false,lt.plugins.editorconfig.indent_size,lt.plugins.editorconfig.indent_size);
} else
{if(cljs.core._EQ_.call(null,"tab",new cljs.core.Keyword(null,"indent-style","indent-style",950658242).cljs$core$IFn$_invoke$arity$1(indent_settings)))
{return lt.objs.editor.tab_settings.call(null,true);
} else
{return null;
}
}
});
/**
* Apply the settings from the editorconfig file to the editor environment
*/
lt.plugins.editorconfig.apply_config = (function apply_config(config){return lt.plugins.editorconfig.apply_indent.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"indent_size","indent_size",2997692198).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"indent_style","indent_style",2382115792).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"indent-size","indent-size",2951516148),new cljs.core.Keyword(null,"indent-style","indent-style",950658242)], true));
});
/**
* Main execution for editorconfig behavior
*/
lt.plugins.editorconfig.editorconfig_main = (function editorconfig_main(info,client_path){var ecpromise = client_path;return ecpromise.then(lt.plugins.editorconfig.apply_config);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.editorconfig","eval!","lt.plugins.editorconfig/eval!",3034938654),new cljs.core.Keyword("lt.plugins.editorconfig","reaction","lt.plugins.editorconfig/reaction",1783229954),(function (p1__7860_SHARP_){return lt.plugins.editorconfig.editorconfig_main.call(null,p1__7860_SHARP_);
}),new cljs.core.Keyword("lt.plugins.editorconfig","triggers","lt.plugins.editorconfig/triggers",1494517656),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null,new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.editorconfig","editorconfig","lt.plugins.editorconfig/editorconfig",3669379276),new cljs.core.Keyword(null,"tags","tags",1017456523),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.editorconfig","eval!","lt.plugins.editorconfig/eval!",3034938654)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.plugins.editorconfig.editorconfig = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.editorconfig","editorconfig","lt.plugins.editorconfig/editorconfig",3669379276));
}

//# sourceMappingURL=editorconfig_compiled.js.map