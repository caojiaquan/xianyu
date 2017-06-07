import Vue from 'vue'
import Router from 'vue-router'
import UserSend from '@/components/UserSend'
import UserSell from '@/components/UserSell'
import UserBuy from '@/components/UserBuy'
import UserLike from '@/components/UserLike'
import UserInfo from '@/components/UserInfo'
import UserPortrait from '@/components/UserPortrait'
import UserBrief from '@/components/UserBrief'
import Nav from '@/components/Nav'
import User from '@/components/User'
import Push from '@/components/Push'

import index from '@/components/index'
import classes from '@/components/classes'
import news from '@/components/news'
import chat from '@/components/chat'



Vue.use(Router)
//console.log(UserSend);
export default new Router({
    routes: [
        {
          path: '/',
          name: 'index',
          component: index
        },
        {
            path: '/user',
            name: 'User',
            component: User
        },
        {
            path : '/push',
            name : 'push',
            component:Push
        },
        {
            path: '/user_send',
            name: 'UserSend',
            component: UserSend
        },
        {
            path: '/user_sell',
            name: 'UserSell',
            component: UserSell
        },
        {
            path: '/user_buy',
            name: 'UserBuy',
            component: UserBuy
        },
        {
            path: '/user_like',
            name: 'UserLike',
            component: UserLike
        },
        {
            path: '/user_info',
            name: 'UserInfo',
            component: UserInfo,
        },
        {
            path: '/user_info/user_brief',
            name: 'UserBrief',
            component: UserBrief,
        },
        {
            path: '/classes',
            name: 'classes',
            component: classes
        }, {
            path: '/news',
            name: 'news',
            component: news
        }, {
            path: '/chat',
            name: 'chat',
            component: chat
        }
    ]
})
