(ns santorini.game-test
  (:require
   [cljs.test :refer-macros [deftest is]]
   [santorini.game :refer [one]]))
  
(deftest a-test
  (is 1 (one)))