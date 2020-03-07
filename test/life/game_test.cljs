(ns life.game-test
  (:require
   [cljs.test :refer-macros [deftest is]]
   [life.game :refer [alive? get-neighbours should-live?]]))
  
(deftest alive-test
  (let [cells #{[0 0]}
        key [0 0]]
    (is true (alive? cells key))))
  
(deftest dead-test
  (let [cells #{}
        key [0 0]]
    (is true (not (alive? cells key)))))

(deftest neighbours
  (is #{[0 1] [1 0] [1 1]} (into #{} (get-neighbours [0 0])))
  (is #{[0 0] [0 1] [0 2] [1 0] [1 2] [2 0] [2 1] [2 2]} (into #{} (get-neighbours [1 1]))))

(deftest rules
  (let [state {:size 4 
               :cells #{[0 0] [0 1] [1 0] [1 1] [2 2]}}]
    (is true (should-live? state [0 0]))
    (is true (should-live? state [0 1]))
    (is true (should-live? state [1 0]))
    (is true (not (should-live? state [1 1])))
    (is true (should-live? state [1 2]))
    (is true (should-live? state [2 1]))
    (is true (not (should-live? state [2 2])))))