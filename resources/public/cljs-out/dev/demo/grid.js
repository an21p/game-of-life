// Compiled by ClojureScript 1.10.520 {}
goog.provide('demo.grid');
goog.require('cljs.core');
goog.require('clojure.set');
demo.grid.add_cell = (function demo$grid$add_cell(state,key){
var new_state = cljs.core.update_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822)], null),cljs.core.conj,key);
return cljs.core.reset_BANG_.call(null,state,new_state);
});
demo.grid.remove_cell = (function demo$grid$remove_cell(state,key){
var new_state = cljs.core.update_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822)], null),cljs.core.disj,key);
return cljs.core.reset_BANG_.call(null,state,new_state);
});
demo.grid.get_cell = (function demo$grid$get_cell(state,key){
if(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([key]),new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cell","span.cell",-564624425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return demo.grid.add_cell.call(null,state,key);
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cell.alive","span.cell.alive",477957583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return demo.grid.remove_cell.call(null,state,key);
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
}
});
demo.grid.get_historical_cell = (function demo$grid$get_historical_cell(cells,key){
if(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([key]),cells))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cell","span.cell",-564624425)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cell.alive","span.cell.alive",477957583)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
}
});
demo.grid.get_cells = (function demo$grid$get_cells(state,current){
return cljs.core.doall.call(null,(function (){var iter__4523__auto__ = (function demo$grid$get_cells_$_iter__24817(s__24818){
return (new cljs.core.LazySeq(null,(function (){
var s__24818__$1 = s__24818;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24818__$1);
if(temp__5457__auto__){
var s__24818__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24818__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__24818__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__24820 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__24819 = (0);
while(true){
if((i__24819 < size__4522__auto__)){
var row = cljs.core._nth.call(null,c__4521__auto__,i__24819);
cljs.core.chunk_append.call(null,b__24820,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (i__24819,row,c__4521__auto__,size__4522__auto__,b__24820,s__24818__$2,temp__5457__auto__){
return (function demo$grid$get_cells_$_iter__24817_$_iter__24821(s__24822){
return (new cljs.core.LazySeq(null,((function (i__24819,row,c__4521__auto__,size__4522__auto__,b__24820,s__24818__$2,temp__5457__auto__){
return (function (){
var s__24822__$1 = s__24822;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__24822__$1);
if(temp__5457__auto____$1){
var s__24822__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24822__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__24822__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__24824 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__24823 = (0);
while(true){
if((i__24823 < size__4522__auto____$1)){
var col = cljs.core._nth.call(null,c__4521__auto____$1,i__24823);
cljs.core.chunk_append.call(null,b__24824,(cljs.core.truth_(current)?demo.grid.get_cell.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)):demo.grid.get_historical_cell.call(null,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))));

var G__24829 = (i__24823 + (1));
i__24823 = G__24829;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24824),demo$grid$get_cells_$_iter__24817_$_iter__24821.call(null,cljs.core.chunk_rest.call(null,s__24822__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24824),null);
}
} else {
var col = cljs.core.first.call(null,s__24822__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(current)?demo.grid.get_cell.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)):demo.grid.get_historical_cell.call(null,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))),demo$grid$get_cells_$_iter__24817_$_iter__24821.call(null,cljs.core.rest.call(null,s__24822__$2)));
}
} else {
return null;
}
break;
}
});})(i__24819,row,c__4521__auto__,size__4522__auto__,b__24820,s__24818__$2,temp__5457__auto__))
,null,null));
});})(i__24819,row,c__4521__auto__,size__4522__auto__,b__24820,s__24818__$2,temp__5457__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)));

var G__24830 = (i__24819 + (1));
i__24819 = G__24830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24820),demo$grid$get_cells_$_iter__24817.call(null,cljs.core.chunk_rest.call(null,s__24818__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24820),null);
}
} else {
var row = cljs.core.first.call(null,s__24818__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (row,s__24818__$2,temp__5457__auto__){
return (function demo$grid$get_cells_$_iter__24817_$_iter__24825(s__24826){
return (new cljs.core.LazySeq(null,((function (row,s__24818__$2,temp__5457__auto__){
return (function (){
var s__24826__$1 = s__24826;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__24826__$1);
if(temp__5457__auto____$1){
var s__24826__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24826__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__24826__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__24828 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__24827 = (0);
while(true){
if((i__24827 < size__4522__auto__)){
var col = cljs.core._nth.call(null,c__4521__auto__,i__24827);
cljs.core.chunk_append.call(null,b__24828,(cljs.core.truth_(current)?demo.grid.get_cell.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)):demo.grid.get_historical_cell.call(null,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))));

var G__24831 = (i__24827 + (1));
i__24827 = G__24831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24828),demo$grid$get_cells_$_iter__24817_$_iter__24825.call(null,cljs.core.chunk_rest.call(null,s__24826__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24828),null);
}
} else {
var col = cljs.core.first.call(null,s__24826__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(current)?demo.grid.get_cell.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)):demo.grid.get_historical_cell.call(null,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))),demo$grid$get_cells_$_iter__24817_$_iter__24825.call(null,cljs.core.rest.call(null,s__24826__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__24818__$2,temp__5457__auto__))
,null,null));
});})(row,s__24818__$2,temp__5457__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)),demo$grid$get_cells_$_iter__24817.call(null,cljs.core.rest.call(null,s__24818__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
})());
});
demo.grid.get_grid = (function demo$grid$get_grid(var_args){
var G__24833 = arguments.length;
switch (G__24833) {
case 1:
return demo.grid.get_grid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return demo.grid.get_grid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

demo.grid.get_grid.cljs$core$IFn$_invoke$arity$1 = (function (state){
return demo.grid.get_grid.call(null,state,true);
});

demo.grid.get_grid.cljs$core$IFn$_invoke$arity$2 = (function (state,current){
var round = new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.round","div.round",-33949817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),round,new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(round)].join('')], null),"Round: ",round], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),demo.grid.get_cells.call(null,state,current)], null)], null);
});

demo.grid.get_grid.cljs$lang$maxFixedArity = 2;

demo.grid.get_step = (function demo$grid$get_step(history,step){
if((step < cljs.core.count.call(null,cljs.core.deref.call(null,history)))){
return demo.grid.get_grid.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,history),step),false);
} else {
return null;
}
});

//# sourceMappingURL=grid.js.map
