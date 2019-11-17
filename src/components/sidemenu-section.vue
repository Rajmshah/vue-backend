<template>
  <!-- sidemneu -->
  <div class="sidemenu">
    <div class="list-group bg-blue">
      <router-link
        class="list-group-item list-group-item-action rounded-0 text-capitalize list-group-item-dark text-white"
        v-for="navigation in navigations"
        v-bind:key="navigation.name"
        v-bind:to="navigation.link"
      >{{ navigation.name }}</router-link>
    </div>
  </div>
</template>

<script>
import headerLogo from "@/assets/logo.svg";

export default {
  Logo: headerLogo,
  name: "sidemenu",
  data() {
    return {
      Logo: headerLogo,
      navigations: [
        // {
        //   name: 'Dashboard',
        //   link: '/Dashboard',
        // },
        {
          name: "Brand",
          link: "/view-brand"
        },
        // {
        //   name: "AfterBefore",
        //   link: "/view-afterbefore"
        // },
        {
          name: "Cars",
          link: "/view-car"
        },
        {
          name: "Faq",
          link: "/view-faq"
        },
        {
          name: "how-it-works",
          link: "/view-how-it-works"
        },
        {
          name: "Location",
          link: "/view-location"
        },
        {
          name: "Pricing Structure",
          link: "/view-pricing"
        },
        {
          name: "Service",
          link: "/view-servicing"
        },
        {
          name: "Service Process",
          link: "/view-service-process"
        },
        {
          name: "Service-info",
          link: "/view-serviceinfo"
        },
        {
          name: "Service-Plan",
          link: "/view-serviceplan"
        },
        {
          name: "Features",
          link: "/view-features"
        },
        
        {
          name: "Testimonial",
          link: "/view-testimonial"
        },
        {
          name: " Lead Generated",
          link: "/view-user-service"
        },
        {
          name: "Warranty",
          link: "/view-warranty"
        },
        {
          name: "TermsAndCondition",
          link: "/view-TermsAndCondition"
        },
        {
          name: "AfterBefore",
          link: "/view-afterbefore"
        },
        {
          name: "Blog",
          link: "/view-blog"
        },
        {
          name: "AllHeader",
          link: "/view-allHeader"
        },
        {
          name: "ContactUs",
          link: "/edit-config"
        },
        {
          name: "ThankYou",
          link: "/ThankYou"
        },
        {
          name: "User",
          link: "/View-user"
        }

        // {
        //   name: "My Referrals",
        //   link: "/my-referrals"
        // },
        // {
        //   name: "Referral Income",
        //   link: "/referral-income"
        // },
        // {
        //   name: 'Scripts',
        //   link: '/scripts',
        // },
        // {
        //   name: 'Tokens',
        //   link: '/tokens',
        // },
        // {
        //   name: 'Deposits',
        //   link: '/deposits',
        // },
        // {
        //   name: 'Withdraws',
        //   link: '/withdraws',
        // },
      ]
    };
  }
};
</script>
<style lang="scss">
@import "~@/scss/import";
</style>
