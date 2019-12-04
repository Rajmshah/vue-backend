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

// Setting
import ViewSetting from "./views/Setting/ViewSetting.vue";
import CreateSetting from "./views/Setting/CreateSetting.vue";
import EditSetting from "./views/Setting/EditSetting";

import global from "@/service/global.js";

Vue.use(Router);

function guard(to, from, next) {
  const userConfig = global.getUser();
  if (Vue._.isNull(userConfig) && Vue._.isEqual(to.name, "Login")) {
    next();
  } else if (!Vue._.isNull(userConfig) && Vue._.isEqual(to.name, "Login")) {
    next("/view-user");
  } else if (Vue._.isNull(userConfig) && !Vue._.isEqual(to.name, "Login")) {
    next("/");
  } else {
    next();
  }
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/view-team",
      name: "View Team",
      beforeEnter: guard,
      component: ViewTeam
    },
    {
      path: "/view-team-detail/:id",
      name: "View TeamDetail",
      beforeEnter: guard,
      component: ViewTeamDetail
    },
    {
      path: "/create-user",
      name: "CreateUser",
      beforeEnter: guard,
      component: CreateUser
    },
    {
      path: "/view-user",
      name: "ViewUser",
      beforeEnter: guard,
      component: ViewUser
    },
    {
      path: "/edit-user/:id",
      name: "EditUser",
      beforeEnter: guard,
      component: EditUser
    },
    {
      path: "/create-setting",
      name: "CreateSetting",
      beforeEnter: guard,
      component: CreateSetting
    },
    {
      path: "/view-setting",
      name: "ViewSetting",
      beforeEnter: guard,
      component: ViewSetting
    },
    {
      path: "/edit-setting/:id",
      name: "EditSetting",
      beforeEnter: guard,
      component: EditSetting
    }
  ]
});
