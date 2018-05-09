/* jshint esversion: 6 */
/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import Cartgroy from '@/components/Cartgroy'
import Myfavorite from '@/components/Myfavorite'
import Me from '@/components/Me'
import User from '@/components/User'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/Cart',
        component: Cart
    }, {
        path: '/Cartgroy',
        component: Cartgroy
    }, {
        path: '/Myfavorite',
        component: Myfavorite,
        children: [{
            path: '',
            component: Me
        }, {
            path: '/:userid',
            component: User
        }]
    }]
})