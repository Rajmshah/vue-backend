import Vue from "vue";
import Router from "vue-router";
// import Home from './views/Home.vue';

// import Dashboard from './views/dashboard/Dashboard.vue';

import Login from "./views/Login.vue";

// Brand
import ViewBrand from "./views/brand/ViewBrand.vue";
import CreateBrand from "./views/brand/CreateBrand.vue";
import EditBrand from "./views/brand/EditBrand.vue";

// Cars
import ViewCar from "./views/cars/ViewCar.vue";
import CreateCar from "./views/cars/CreateCar.vue";
import EditCar from "./views/cars/EditCar.vue";

// Faq
import ViewFaq from "./views/faq/ViewFaq.vue";
import CreateFaq from "./views/faq/CreateFaq.vue";
import EditFaq from "./views/faq/EditFaq.vue";

// HowItWorks
import ViewHowItWorks from "./views/how-it-works/ViewHowItWorks.vue";
import CreateHowItWorks from "./views/how-it-works/CreateHowItWorks.vue";
import EditHowItWorks from "./views/how-it-works/EditHowItWorks.vue";

// Location
import ViewLocation from "./views/location/ViewLocation.vue";
import CreateLocation from "./views/location/CreateLocation.vue";
import EditLocation from "./views/location/EditLocation.vue";

// Pricing Structure
import ViewPricing from "./views/pricingstructure/ViewPricing.vue";
import CreatePricing from "./views/pricingstructure/CreatePricing.vue";
import EditPricing from "./views/pricingstructure/EditPricing.vue";

// Service
import ViewServicing from "./views/service/ViewService.vue";
import CreateServicing from "./views/service/CreateService.vue";
import EditServicing from "./views/service/EditService.vue";

// ServiceInfo
import ViewServiceInfo from "./views/serviceinfo/ViewServiceInfo.vue";
import CreateServiceInfo from "./views/serviceinfo/CreateServiceInfo.vue";
import EditServiceInfo from "./views/serviceinfo/EditServiceInfo.vue";

// ServicePlan
import ViewServicePlan from "./views/ServicePlan/ViewServicePlan.vue";
import CreateServicePlan from "./views/ServicePlan/CreateServicePlan.vue";
import EditServicePlan from "./views/ServicePlan/EditServicePlan.vue";

// ServiceProcess
import ViewServiceProcess from "./views/serviceprocess/ViewServiceProcess..vue";
import CreateServiceProcess from "./views/serviceprocess/CreateServiceProcess..vue";
import EditServiceProcess from "./views/serviceprocess/EditServiceProcess.vue";

// Testimonials
import ViewTestimonial from "./views/testimonial/ViewTestimonial.vue";
import CreateTestimonial from "./views/testimonial/CreateTestimonial.vue";
import EditTestimonial from "./views/testimonial/EditTestimonial.vue";

// Warranty
import ViewWarranty from "./views/Warranty/ViewWarranty.vue";
import CreateWarranty from "./views/Warranty/CreateWarranty.vue";
import EditWarranty from "./views/Warranty/EditWarranty.vue";

// TermsAndCondition
import ViewTermsAndCondition from "./views/TermsAndCondition/ViewTermsAndCondition.vue";
import CreateTermsAndCondition from "./views/TermsAndCondition/CreateTermsAndCondition.vue";
import EditTermsAndCondition from "./views/TermsAndCondition/EditTermsAndCondition.vue";

// User Service
import ViewUserService from "./views/UserService/ViewUserService.vue";
import CreateUserService from "./views/UserService/CreateUserService.vue";
import EditUserService from "./views/UserService/EditUserService.vue";

// AfterBefore
import ViewAfterBefore from "./views/AfterBefore/ViewAfterBefore.vue";
import EditAfterBefore from "./views/AfterBefore/EditAfterBefore.vue";
import CreateAfterBefore from "./views/AfterBefore/CreateAfterBefore.vue";

// blog
import ViewBlog from "./views/Blog/ViewBlog.vue";
import EditBlog from "./views/Blog/EditBlog.vue";
import CreateBlog from "./views/Blog/CreateBlog.vue";

// AllHeader
import ViewAllHeader from "./views/AllHeader/ViewAllHeader.vue";
import createAllHeader from "./views/AllHeader/createAllHeader.vue";
import EditAllHeader from "./views/AllHeader/EditAllHeader.vue";

// config
import ViewConfig from "./views/Config/ViewConfig.vue";
import EditConfig from "./views/Config/EditConfig.vue";

// thankyou
import ThankYou from "./views/ThankYou/ThankYou.vue";

// features
import ViewFeatures from "./views/Features/ViewFeatures.vue";
import CreateFeatures from "./views/Features/CreateFeatures.vue";
import EditFeatures from "./views/Features/EditFeatures";

// user
import ViewUser from "./views/User/ViewUser.vue";
import CreateUser from "./views/User/CreateUser.vue";
import EditUser from "./views/User/EditUser";

import global from "@/service/global.js";


Vue.use(Router);

function guard(to, from, next) {
  const userConfig = global.getUser();
  if (Vue._.isNull(userConfig) && Vue._.isEqual(to.name, "Login")) {
    next();
  } else if (!Vue._.isNull(userConfig) && Vue._.isEqual(to.name, "Login")) {
    next("/view-brand");
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
      path: "/form",
      name: "Form",
      component: () => import(/* webpackChunkName: "about" */ "./views/Form.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    {
      path: "/",
      name: "Login",
      beforeEnter: guard,
      component: Login,
    },
    {
      path: "/create-brand",
      name: "Create Brand",
      component: CreateBrand,
    },
    {
      path: "/edit-brand/:_id",
      name: "Edit Brand",
      component: EditBrand,
    },
    {
      path: "/view-brand",
      beforeEnter: guard,
      name: "View Brand",

      component: ViewBrand,
    },
    {
      path: "/view-car",
      name: "View car",
      beforeEnter: guard,
      component: ViewCar,
    },
    {
      path: "/create-car",
      name: "Create car",
      component: CreateCar,
    },
    {
      path: "/edit-car/:_id",
      name: "Edit Car",
      component: EditCar,
    },
    {
      path: "/view-faq",
      name: "View faq",
      beforeEnter: guard,
      component: ViewFaq,
    },
    {
      path: "/create-faq",
      name: "Create faq",
      component: CreateFaq,
    },
    {
      path: "/edit-faq/:_id",
      name: "Edit Faq",
      component: EditFaq,
    },
    {
      path: "/view-how-it-works",
      name: "View HowItWorks",
      beforeEnter: guard,
      component: ViewHowItWorks,
    },
    {
      path: "/create-how-it-works",
      name: "Create HowItWorks",
      component: CreateHowItWorks,
    },
    {
      path: "/edit-how-it-works",
      name: "Edit HowItWorks",
      component: EditHowItWorks,
    },
    {
      path: "/view-location",
      name: "View Location",
      beforeEnter: guard,
      component: ViewLocation,
    },
    {
      path: "/create-location",
      name: "Create Location",
      component: CreateLocation,
    },
    {
      path: "/edit-location/:_id",
      name: "Edit Location",
      component: EditLocation,
    },
    {
      path: "/view-pricing",
      name: "View Pricing",
      beforeEnter: guard,
      component: ViewPricing,
    },
    {
      path: "/create-pricing",
      name: "Create Pricing",
      component: CreatePricing,
    },
    {
      path: "/edit-pricing/:_id",
      name: "Edit Pricing",
      component: EditPricing,
    },
    {
      path: "/view-servicing",
      name: "View Servicing",
      beforeEnter: guard,
      component: ViewServicing,
    },
    {
      path: "/create-servicing",
      name: "Create Servicing",
      component: CreateServicing,
    },
    {
      path: "/edit-servicing/:_id",
      name: "Edit Servicing",
      component: EditServicing,
    },
    {
      path: "/view-serviceinfo",
      name: "View Serviceinfo",
      beforeEnter: guard,
      component: ViewServiceInfo,
    },
    {
      path:"/create-serviceplan",
      name:"Create ServicePlan",
      beforeEnter:guard,
      component:CreateServicePlan,
    },
    {
      path: "/edit-serviceplan/:_id",
      name: "Edit ServicePlan",
      beforeEnter: guard,
      component: EditServicePlan,
    },
    {
      path: "/view-serviceplan",
      name: "View ServicePlan",
      beforeEnter: guard,
      component: ViewServicePlan,
    },
    {
      path:"/create-features",
      name:"Create Features",
      beforeEnter:guard,
      component:CreateFeatures,
    },
    {
      path: "/edit-features/:_id",
      name: "Edit Features",
      beforeEnter: guard,
      component: EditFeatures,
    },
    {
      path: "/view-features",
      name: "View Features",
      beforeEnter: guard,
      component: ViewFeatures, 
    },

    {
      path: "/create-service-process",
      name: "Create ServiceProcess",
      component: CreateServiceProcess,
    },
    {
      path: "/edit-service-process/:_id",
      name: "Edit ServiceProcess",
      component: EditServiceProcess,
    },
    {
      path: "/view-service-process",
      name: "View ServiceProcess",
      beforeEnter: guard,
      component: ViewServiceProcess,
    },
    {
      path: "/create-serviceinfo",
      name: "Create Serviceinfo",
      component: CreateServiceInfo,
    },
    {
      path: "/edit-serviceinfo/:_id",
      name: "Edit Serviceinfo",
      component: EditServiceInfo,
    },
    {
      path: "/view-testimonial",
      name: "View Testimonial",
      beforeEnter: guard,
      component: ViewTestimonial,
    },
    {
      path: "/create-testimonial",
      name: "Create Testimonial",
      component: CreateTestimonial,
    },
    {
      path: "/edit-testimonial/:id",
      name: "Edit Testimonial",
      component: EditTestimonial,
    },
    {
      path: "/view-user-service",
      name: "View UserService",
      component: ViewUserService,
    },
    {
      path: "/create-user-service",
      name: "Create UserService",
      beforeEnter: guard,
      component: CreateUserService,
    },
    {
      path: "/edit-user-service/:id",
      name: "Edit UserService",
      component: EditUserService,
    },
    {
      path: "/view-warranty",
      name: "View Warranty",
      beforeEnter: guard,
      component: ViewWarranty,
    },
    {
      path: "/view-TermsAndCondition",
      name: "View TermsAndCondi",
      beforeEnter: guard,
      component: ViewTermsAndCondition,
    },
    {
      path: "/create-warranty",
      name: "Create Warranty",
      component: CreateWarranty,
    },
    {
      path: "/create-terms-condition",
      name: "Create TermsAndCondition",
      component: CreateTermsAndCondition,
    },
    {
      path: "/create-user",
      name: "CreateUser",
      component: CreateUser,
    },
    {
      path: "/View-user",
      name: "ViewUser",
      beforeEnter: guard,
      component: ViewUser,
    },
    {
      path: "/view-afterbefore",
      name: "viewafterbefore",
      beforeEnter: guard,
      component: ViewAfterBefore,
    },

    {
      path: "/view-blog",
      name: "viewBlog",
      beforeEnter: guard,
      component: ViewBlog,
    },
    {
      path: "/view-allHeader",
      name: "ViewAllHeader",
      beforeEnter: guard,
      component: ViewAllHeader,
    },
    {
      path: "/view-config",
      name: "ViewConfig",
      beforeEnter: guard,
      component: ViewConfig,
    },

    {
      path: "/edit-config",
      name: "Edit Config",
      component: EditConfig,
    },
    {
      path: "/ThankYou",
      name: "ThakYou",
      beforeEnter: guard,
      component: ThankYou,
    },
    {
      path: "/create-AllHeader",
      name: "createAllHeader",
      component: createAllHeader,
    },
    {
      path: "/create-blog",
      name: "CreateBlog",
      component: CreateBlog,
    },
    {
      path: "/edit-blog/:id",
      name: "EditBlog",
      component: EditBlog,
    },
    {
      path: "/edit-user/:id",
      name: "EditUser",
      component: EditUser,
    },
    {
      path: "/edit-Header/:id",
      name: "EditAllHeader",
      component: EditAllHeader,
    },
    {
      path: "/create-AfterBefore",
      name: "Create AfterBefore",
      component: CreateAfterBefore,
    },
    {
      path: "/edit-AfterBefore/:id",
      name: "EditAfterBefore",
      component: EditAfterBefore,
    },
    {
      path: "/:_id",
      name: "Edit Warranty",
      component: EditWarranty,
    },
    {
      path: "/:_id",
      name: "Edit TermsAndCondtion",
      component: EditTermsAndCondition,
    },
  ],
});
