import Vue from 'vue'
import Ripple from 'vue-ripple-directive'

Ripple.color = 'rgba(236, 236, 236, 0.5)'
Ripple.zIndex = 55

Vue.directive('ripple', Ripple)
