(ns ^:figwheel-hooks demo.game
  (:require
   [clojure.set :as s]))

(def transformations
  (->
   (into #{} (for [x [-1 0 1] y [-1 0 1]] [x y]))
   (s/difference #{[0 0]})))

(defn alive?
  "Checks whether the key is in the cells"
  [cells key]
  (if (empty? (s/intersection #{key} cells))
    false
    true))

(defn get-neighbours
  "Returns the keys of nearby cells"
  [key] 
  (map #(mapv + key %) transformations))

(defn possible-alive
  "Given the current state it returns a list of candidates that could posiibly be alive in the next iteration"
  [cells]
  (let [neighbour-lists (map get-neighbours cells)
        neighbours (into #{} (apply concat neighbour-lists))]
    (s/union cells neighbours)))

;; conway rules
(defn should-live?
  "Using the key and the state this function checks whether the cell should be alive or dead in the next iteration"
  [state key]
  (if (or (< (first key) 0)
          (< (second key) 0)
          (> (first key) (- (:size state) 1))
          (> (second key) (- (:size state) 1)))
    false
    (let [cells (:cells state)
          neighbours (get-neighbours key)
          alive-neighbours (filter #(alive? cells %) neighbours)]
      (or
       (= (count alive-neighbours) 3)
       (and (alive? cells key) (= (count alive-neighbours) 2))))))

(defn update-cells
  [state possible]
  (into #{} (filter #(should-live? state %) possible)))

(defn next-state
  "Produces the next state"
  [state]
  (let [possible (possible-alive (:cells state))
        new-cells (update-cells state possible)
        new-state (assoc state :round (inc (:round state)))]
    (assoc new-state :cells new-cells)))
