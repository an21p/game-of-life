(ns ^:figwheel-hooks demo.core
  (:require
   [clojure.string]
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [demo.control :as control]
   [demo.grid :as grid]))

;; initial state used for reset
(def initial-state {:timer nil
                    :timeout 350
                    :round 0
                    :size 20 
                    :cells #{}})

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom initial-state))
(defonce history (atom '()))

(defn get-app-element []
  (gdom/getElement "app"))

(defn app-component []
  [:div 
   [:h1 "Game of Life"]
   [control/get-controls history app-state initial-state]
   [:div.current
    [grid/get-grid app-state]]
   [:div.rules
    [:h3 "Rules"]
    [:ol
     [:li "Any live cell with fewer than two live neighbours dies, as if by underpopulation."]
     [:li "Any live cell with two or three live neighbours lives on to the next generation."]
     [:li "Any live cell with more than three live neighbours dies, as if by overpopulation."]
     [:li "Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
"]]]
   [:div.old 
    (for [n (range 0 4)]
      ^{:key n}  [grid/get-step history n])]])

(defn mount [el]
  (reagent/render-component [app-component] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))


;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element))