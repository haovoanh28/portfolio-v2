import Vue from 'vue'
import Ripple from 'vue-ripple-directive'

Ripple.color = 'rgba(255, 255, 255, 0.7)'
Ripple.zIndex = 55

Vue.directive('ripple', Ripple)
