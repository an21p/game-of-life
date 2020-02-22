// Compiled by ClojureScript 1.10.520 {}
goog.provide('demo.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('demo.control');
goog.require('demo.grid');
demo.core.initial_state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"timer","timer",-1266967739),null,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(350),new cljs.core.Keyword(null,"round","round",2009433328),(0),new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.PersistentHashSet.EMPTY], null);
if((typeof demo !== 'undefined') && (typeof demo.core !== 'undefined') && (typeof demo.core.app_state !== 'undefined')){
} else {
demo.core.app_state = reagent.core.atom.call(null,demo.core.initial_state);
}
if((typeof demo !== 'undefined') && (typeof demo.core !== 'undefined') && (typeof demo.core.history !== 'undefined')){
} else {
demo.core.history = reagent.core.atom.call(null,cljs.core.List.EMPTY);
}
demo.core.get_app_element = (function demo$core$get_app_element(){
return goog.dom.getElement("app");
});
demo.core.app_component = (function demo$core$app_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Game of Life"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.control.get_controls,demo.core.history,demo.core.app_state,demo.core.initial_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current","div.current",1656511896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.grid.get_grid,demo.core.app_state], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.old","div.old",1282872418),(function (){var iter__4523__auto__ = (function demo$core$app_component_$_iter__25186(s__25187){
return (new cljs.core.LazySeq(null,(function (){
var s__25187__$1 = s__25187;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25187__$1);
if(temp__5457__auto__){
var s__25187__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25187__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25187__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25189 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25188 = (0);
while(true){
if((i__25188 < size__4522__auto__)){
var n = cljs.core._nth.call(null,c__4521__auto__,i__25188);
cljs.core.chunk_append.call(null,b__25189,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.grid.get_step,demo.core.history,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__25190 = (i__25188 + (1));
i__25188 = G__25190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25189),demo$core$app_component_$_iter__25186.call(null,cljs.core.chunk_rest.call(null,s__25187__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25189),null);
}
} else {
var n = cljs.core.first.call(null,s__25187__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.grid.get_step,demo.core.history,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),demo$core$app_component_$_iter__25186.call(null,cljs.core.rest.call(null,s__25187__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(4)));
})()], null)], null);
});
demo.core.mount = (function demo$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.core.app_component], null),el);
});
demo.core.mount_app_element = (function demo$core$mount_app_element(){
var temp__5457__auto__ = demo.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return demo.core.mount.call(null,el);
} else {
return null;
}
});
demo.core.mount_app_element.call(null);
demo.core.on_reload = (function demo$core$on_reload(){
return demo.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
