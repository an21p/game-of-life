(ns ^:figwheel-hooks life.control
  (:require
   [life.game :as game]))

(def min-timeout 100)
(def max-timeout 1000)

(defn reset 
  [history state new-state]
  (reset! history '())
  (reset! state new-state))

(defn step 
  [history state]
  (swap! history conj state)
  (swap! state game/next-state))

(defn slider [param state value min max]
  [:div.timeout "Timeout: " (:timeout @state)
   [:input {:type "range" :value value :min min :max max
            :on-change #(swap! state assoc param (.. % -target -value))}]])

(defn time-updater
  [history state]
  (js/setInterval
   #(step history state)
   (:timeout @state)))

(defn toggle-timer
  [history state]
  (let [timer (:timer @state)]
    (if (not (= timer nil))
      (js/clearInterval timer)
      (time-updater history state))))

(defn get-controls
  [history state new-state]
  [:div.controls
   [:div
    [:input {:type "button" :value (if (:timer @state) "Pause" "Play")
             :on-click #(swap! state assoc :timer (toggle-timer history state))}]
    [:input {:type "button" :value "Next Round"
             :on-click #(step history state)}]
    [:input {:type "button" :value "Reset"
             :on-click #(reset history state new-state)}]]
   [:div 
    [slider :timeout state (:timeout @state) min-timeout max-timeout]]])
