import Vue from 'vue';
import Router from 'vue-router';
import GeneralUsage from '@/components/GeneralUsage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GeneralUsage',
      component: GeneralUsage,
    },
  ],
});
