<template>
  <div class="wrapper">
    <!--<v-head></v-head>-->
    <div class="el-row container">
      <!--<v-sidebar></v-sidebar>-->
      <div class="content el-col el-col-24">
        <v-head></v-head>

        <div class="app-container">

          <transition name="fade" mode="out-in">
            <div>
              <h2>{{$route.name}}</h2>
              <router-view></router-view>
            </div>
          </transition>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import vHead from './common/Navbar.vue';
  import vSidebar from './common/Sidebar.vue';
  export default {

    name: 'Home',

    data() {
      return {};
    },

    components: {
      vHead,
      vSidebar
    },
    methods: {},

  };
</script>
<style lang="scss" scoped>
  h2 {

    padding-bottom: 10px;
    border-bottom: 1px solid #efefef;
  }
  .wrapper {
    height: 100%;
  }

  .container {
    padding-top: 0px;
    height: 100%;
  }

  .content {
    /*padding: 25px;*/
    height: 100%;
    overflow: auto;
  }

  .app-container {
    padding: 40px 150px;
    /*padding-top: 0px;*/

    height: 100%;

    /*overflow: auto; */

  }
  .app-container h2, .app-container h3, .app-container h4, .app-container h5, .app-container div {
    font-weight: 400;
    color: #1f2f3d;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
  {
    opacity: 0
  }





</style>
