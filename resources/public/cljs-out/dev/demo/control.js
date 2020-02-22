// Compiled by ClojureScript 1.10.520 {}
goog.provide('demo.control');
goog.require('cljs.core');
goog.require('demo.game');
demo.control.min_timeout = (100);
demo.control.max_timeout = (1000);
demo.control.reset = (function demo$control$reset(history,state,new_state){
cljs.core.reset_BANG_.call(null,history,cljs.core.List.EMPTY);

return cljs.core.reset_BANG_.call(null,state,new_state);
});
demo.control.step = (function demo$control$step(history,state){
cljs.core.swap_BANG_.call(null,history,cljs.core.conj,state);

return cljs.core.swap_BANG_.call(null,state,demo.game.next_state);
});
demo.control.slider = (function demo$control$slider(param,state,value,min,max){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.timeout","div.timeout",1893861324),"Timeout: ",new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25183_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,param,p1__25183_SHARP_.target.value);
})], null)], null)], null);
});
demo.control.time_updater = (function demo$control$time_updater(history,state){
return setInterval((function (){
return demo.control.step.call(null,history,state);
}),new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});
demo.control.toggle_timer = (function demo$control$toggle_timer(history,state){
var timer = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var new_timer = (((!(cljs.core._EQ_.call(null,timer,null))))?clearInterval(timer):demo.control.time_updater.call(null,history,state));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"timer","timer",-1266967739),new_timer);
});
demo.control.get_controls = (function demo$control$get_controls(history,state,new_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls","div.controls",1658515593),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?"Pause":"Play"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return demo.control.toggle_timer.call(null,history,state);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Next Round",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return demo.control.step.call(null,history,state);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Reset",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return demo.control.reset.call(null,history,state,new_state);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.control.slider,new cljs.core.Keyword(null,"timeout","timeout",-318625318),state,new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),demo.control.min_timeout,demo.control.max_timeout], null)], null)], null);
});

//# sourceMappingURL=control.js.map
