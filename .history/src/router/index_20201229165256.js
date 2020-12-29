import en from "../i18n/lang/en"
import Vue from "vue"
import Router from "vue-router"
import Login from "@/views/login/index"
import Layout from "@/views/layout/layout"
import HomeMain from "@/views/index/mainIndex"
// import HaveRead from "@/views/message/haveread"
// 不是必须加载的组件使用懒加载

const NotFound = () => import("@/views/page404")

const UserFond = () => import("@/views/foundchart/userfont")
const EasyFond = () => import("@/views/foundchart/easyfont")

const Handin = () => import("@/views/summary/handin")

// const msgRead = () => import("@/views/message/msgRead")
const HaveRead = () => import("@/views/message/haveread")
const NotRead = () => import("@/views/message/notread")
const Update = () => import("@/views/useraccount/update")



/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)
let routeName = en.routeName
let defaultRouter = [
  { path: "/",
    redirect: "/index",
    hidden:true,
    children: []
  },
  {
    path: "/login",
    component: Login,
    name: "",
    hidden: true,
    children: []
  },
  {
    path: "/index",
    iconCls: "fa fa-dashboard", // 图标样式class
    name: routeName.home,
    component: Layout,
    alone: true,
    children: [
      {
        path: "/index",
        iconCls: "fa fa-dashboard", // 图标样式class
        name: "主页",
        component: HomeMain,
        children: []
      }
    ]
  },
  {
    path: "/detafond",
    iconCls: "fa fa-wpforms", // 图标样式class
    name: routeName.detafond,
    component: Layout,
    hidden: this.$store.getters.checkState != 2,
    alone: true,
    children: [
      {
        path: "/detafond",
        name: routeName.detafond,
        component: UserFond,
        hidden: true,
        children: [],
      }
    ]

  },
  {
    path: "/easyfond",
    iconCls: "fa fa-leanpub", // 图标样式class
    name:  routeName.easyfond,
    component: Layout,
    hidden: this.$store.getters.checkState == 2,
    alone: true,
    children: [
      {
        path: "/easyfond",
        name:  routeName.easyfond,
        component: EasyFond,
        hidden: true,
        children: [],
      }
    ]

  },
  
  {
    path: "/handin",
    iconCls: "fa fa-file-word-o", // 图标样式class
    name: routeName.summary,
    component: Layout,
    alone: true,
    children: [
      {
        path: "/handin",
        name: routeName.summary,
        component: Handin,
        hidden: true,
        children: [],
      }

    ]
  },

  {
    path: "/404",
    component: NotFound,
    name: "404",
    hidden: true,
    children: []
  }
]

let addRouter = [

  // {
  //   path: "/",
  //   iconCls: "fa fa-check-square-o", // 图标样式class
  //   name: routeName.userfond,
  //   component: Layout,
  //   children: [
  //     {
  //       path: "/detafond",
  //       iconCls: "fa fa-wpforms", // 图标样式class
  //       name: routeName.detafond,
  //       component: UserFond,
  //       children: [],
  //     },
  //     {
  //       path: "/easyfond",
  //       iconCls: "fa fa-leanpub", // 图标样式class
  //       name: routeName.easyfond,
  //       component: EasyFond,
  //       children: []
  //     },
  //   ]
  // },

  // {
  //   path: "/",
  //   iconCls: "fa fa-file-word-o", // 图标样式class
  //   name: routeName.summary,
  //   component: Layout,
  //   children: [
  //     {
  //       path: "/handin",
  //       iconCls: "fa fa-caret-square-o-up", // 图标样式class
  //       name: routeName.handIn,
  //       component: Handin,
  //       children: [],
  //     },

  //   ]
  // },

  {
    path: "/",
    iconCls: "fa fa-file-text", // 图标样式class
    name: routeName.message,
    component: Layout,
    children: [
      {
        path: "/haveread",
        iconCls: "fa fa-envelope-open", // 图标样式class
        name: routeName.haveRead,
        component: HaveRead,
        children: [],
      },
      {
        path: "/notread",
        iconCls: "fa fa-envelope-o", // 图标样式class
        name: routeName.notRead,
        component: NotRead,
        children: []
      },
      // {
      //   path: "/msgRead",
      //   iconCls: "fa fa-envelope-open", // 图标样式class
      //   name: routeName.haveRead,
      //   component: msgRead,
      //   hidden: true,
      //   children: [],
      // },
    ]
  },





  { path: "*",
    redirect: "/404",
    hidden: true,
    component: NotFound
  }

]




export default new Router({
  routes: defaultRouter
})
export {defaultRouter, addRouter}
