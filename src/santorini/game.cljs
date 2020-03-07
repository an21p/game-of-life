(ns ^:figwheel-hooks santorini.game
  (:require
   [clojure.set :as s]))

;; How do I note the players?
;; - key: name value: #{[x,y]}
;; - validation for:
;; ---- out of bounds
;; ---- invalid locations on level 4
;; ---- winning condition on level 3 / or god power override
;; ---- number of pawns per player
;; How do I note the cells / buildings?
;; - key: 1/2/3/4 value: #{[x,y]}
;; - validation for:
;; ---- out of bounds
;; ---- invalide levels
;; How do I note the player super powers?

(def size 5)
(def state {:players {:p1 #{[1,1] [3,3]}
                      :p2 #{[0,0] [2,2]}}
            :cells {1 #{}
                    2 #{}
                    3 #{}
                    4 #{}}})

