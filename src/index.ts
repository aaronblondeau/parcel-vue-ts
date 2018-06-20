import Vue from 'vue';
import Thing from './Thing.vue';
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
  components: {
    Thing,
  },
});
