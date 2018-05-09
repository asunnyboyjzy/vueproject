<script>
import Vue from 'vue'
import Hammer from 'hammerjs'
const directs = ['tap', 'press', 'panstart', 'panmove', 'panend', 'pancancel', 'panleft', 'panright', 'panup', 'pandown', 'pinchstart', 'pinchmove', 'pinchend', 'pinchcancel', 'pinchin', 'pinchout', 'pressup', 'rotatestart', 'rotatemove', 'rotateend', 'rotatecancel', 'swipeleft', 'swiperight', 'swipeup', 'swipedown']
for (var direct in directs) {
  Vue.directive(direct, {
    bind (el, binding) {
      const hammer = new Hammer(el)
      hammer.on(direct, binding.value)
    }
  })
}
export default {
  name: 'touch'
}
</script>
