;; This test runner is intended to be run from the command line
(ns life.test-runner
  (:require
    ;; require all the namespaces that you want to test
    [life.game-test]
    [figwheel.main.testing :refer [run-tests-async]]))

(defn -main [& args]
  (println args)
  (run-tests-async 5000))
