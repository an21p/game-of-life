(ns ^:figwheel-hooks santorini.core
  (:require
   [clojure.string]
   [goog.dom :as gdom]
   [life.core :as life]
   [reagent.core :as reagent :refer [atom]]))

;; initial state used for reset
(def initial-state {})

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom initial-state))
(defonce history (atom '()))

(defn get-app-element []
  (gdom/getElement "santorini"))

(defn app-component []
  [:div
   [:h1 "Santorini"]])

(defn mount [el]
  (reagent/render-component [app-component] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)
(life/mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  (life/mount-app-element))