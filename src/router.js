import Vue from "vue";
import Router from "vue-router";
// import Home from './views/Home.vue';

// import Dashboard from './views/dashboard/Dashboard.vue';

import Login from "./views/Login.vue";

// User Service
import ViewTeam from "./views/Team/ViewTeam.vue";
import ViewTeamDetail from "./views/Team/ViewTeamDetail.vue";

// user
import ViewUser from "./views/User/ViewUser.vue";
import CreateUser from "./views/User/CreateUser.vue";
import EditUser from "./views/User/EditUser";

import global from "@/service/global.js";

Vue.use(Router);

// function guard(to, from, next) {
//   const userConfig = global.getUser();
//   if (Vue._.isNull(userConfig) && Vue._.isEqual(to.name, 'Login')) {
//     next();
//   } else if (!Vue._.isNull(userConfig) && Vue._.isEqual(to.name, 'Login')) {
//     next('/view-brand');
//   } else if (Vue._.isNull(userConfig) && !Vue._.isEqual(to.name, 'Login')) {
//     next('/');
//   } else {
//     next();
//   }
// }

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/view-user"
    },
    {
      path: "/view-team",
      name: "View Team",
      component: ViewTeam
    },
    {
      path: "/view-team-detail/:id",
      name: "View TeamDetail",
      component: ViewTeamDetail
    },
    // {
    //   path: '/edit-user-service/:id',
    //   name: 'Edit UserService',
    //   component: EditUserService,
    // },
    {
      path: "/create-user",
      name: "CreateUser",
      component: CreateUser
    },
    {
      path: "/view-user",
      name: "ViewUser",
      component: ViewUser
    },
    {
      path: "/edit-user/:id",
      name: "EditUser",
      component: EditUser
    }
  ]
});
