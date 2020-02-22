// Compiled by ClojureScript 1.10.520 {}
goog.provide('demo.game');
goog.require('cljs.core');
goog.require('clojure.set');
demo.game.transformations = clojure.set.difference.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,(function (){var iter__4523__auto__ = (function demo$game$iter__24456(s__24457){
return (new cljs.core.LazySeq(null,(function (){
var s__24457__$1 = s__24457;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24457__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4519__auto__ = ((function (s__24457__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function demo$game$iter__24456_$_iter__24458(s__24459){
return (new cljs.core.LazySeq(null,((function (s__24457__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__24459__$1 = s__24459;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__24459__$1);
if(temp__5457__auto____$1){
var s__24459__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24459__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__24459__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__24461 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__24460 = (0);
while(true){
if((i__24460 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__24460);
cljs.core.chunk_append.call(null,b__24461,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__24462 = (i__24460 + (1));
i__24460 = G__24462;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24461),demo$game$iter__24456_$_iter__24458.call(null,cljs.core.chunk_rest.call(null,s__24459__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24461),null);
}
} else {
var y = cljs.core.first.call(null,s__24459__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),demo$game$iter__24456_$_iter__24458.call(null,cljs.core.rest.call(null,s__24459__$2)));
}
} else {
return null;
}
break;
}
});})(s__24457__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__24457__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,demo$game$iter__24456.call(null,cljs.core.rest.call(null,s__24457__$1)));
} else {
var G__24463 = cljs.core.rest.call(null,s__24457__$1);
s__24457__$1 = G__24463;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
})()),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)]));
/**
 * Checks whether the key is in the cells
 */
demo.game.alive_QMARK_ = (function demo$game$alive_QMARK_(cells,key){
if(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([key]),cells))){
return false;
} else {
return true;
}
});
/**
 * Returns the keys of nearby cells
 */
demo.game.get_neighbours = (function demo$game$get_neighbours(key){
return cljs.core.map.call(null,(function (p1__24464_SHARP_){
return cljs.core.mapv.call(null,cljs.core._PLUS_,key,p1__24464_SHARP_);
}),demo.game.transformations);
});
/**
 * Given the current state it returns a list of candidates that could posiibly be alive in the next iteration
 */
demo.game.possible_alive = (function demo$game$possible_alive(cells){
var neighbour_lists = cljs.core.map.call(null,demo.game.get_neighbours,cells);
var neighbours = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.apply.call(null,cljs.core.concat,neighbour_lists));
return clojure.set.union.call(null,cells,neighbours);
});
/**
 * Using the key and the state this function checks whether the cell should be alive or dead in the next iteration
 */
demo.game.should_live_QMARK_ = (function demo$game$should_live_QMARK_(state,key){
if((((cljs.core.first.call(null,key) < (0))) || ((cljs.core.second.call(null,key) < (0))) || ((cljs.core.first.call(null,key) > (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state) - (1)))) || ((cljs.core.second.call(null,key) > (new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state) - (1)))))){
return false;
} else {
var cells = new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(state);
var neighbours = demo.game.get_neighbours.call(null,key);
var alive_neighbours = cljs.core.filter.call(null,((function (cells,neighbours){
return (function (p1__24465_SHARP_){
return demo.game.alive_QMARK_.call(null,cells,p1__24465_SHARP_);
});})(cells,neighbours))
,neighbours);
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,alive_neighbours),(3))) || (((demo.game.alive_QMARK_.call(null,cells,key)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,alive_neighbours),(2))))));
}
});
demo.game.update_cells = (function demo$game$update_cells(state,possible){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (p1__24466_SHARP_){
return demo.game.should_live_QMARK_.call(null,state,p1__24466_SHARP_);
}),possible));
});
/**
 * Produces the next state
 */
demo.game.next_state = (function demo$game$next_state(state){
var possible = demo.game.possible_alive.call(null,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(state));
var new_cells = demo.game.update_cells.call(null,state,possible);
var new_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"round","round",2009433328),(new cljs.core.Keyword(null,"round","round",2009433328).cljs$core$IFn$_invoke$arity$1(state) + (1)));
return cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"cells","cells",-985166822),new_cells);
});

//# sourceMappingURL=game.js.map
