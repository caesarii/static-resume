<template>
  <div class="navbar">


    <img src="../../assets/logo.png" class="logo">
    <el-breadcrumb class="app-levelbar" separator="/">


      <el-breadcrumb-item v-for="(item, index) in $route.matched" key="index" :to="item.path">
        {{item.name}}
      </el-breadcrumb-item>


    </el-breadcrumb>
    <el-dropdown @command="handleCommand" menu-align='start' class="app-leveldropdown">
  <span class="app-leveldropdown2">
    <img src="../../assets/avator.jpg" class="avator">
    <!--{{this.user.name}}-->
    <i class="el-icon-caret-bottom el-icon--right"></i>
  </span>

      <el-dropdown-menu slot="dropdown" class="dropdown">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="singout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

  </div>

</template>

<script>
  //  import {mapState} from 'vuex'
  export default {

    name: 'Navbar',

    created() {
      this.test()
    },
    data() {
      return {
        levelList: null
      }
    },
    computed: {
//        ...mapState(['user'])
    },
    methods: {
      test() {
        console.log(this.$route)
        console.log(this.user)
      },
      handleCommand(command) {
        if (command == 'home') {
          this.$router.push('/home/about');
        } else if (command == 'singout') {
          this.$store.dispatch('LogOut')
        }
      }
    }
//      computed:{
//            routeList:function () {
//              return this.$route.matched.filter(item => item.name);
//            }
//      }
  };
</script>

<style lang="scss" scoped>
  .el-breadcrumb__item__inner {
    font-size: 18px;
  }
  .logo {

    display: flex;
    width: 36px;
    height: 36px;
    /*border-radius: 100%;*/
    margin-left: 140px;

  }
  .navbar {
    background-color: #eef0f6;
    height: 75px;
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .app-levelbar.el-breadcrumb {
    /*justify-content: flex-start;*/
    font-size: 16px;
    line-height: 60px;
    margin-left: 70px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }

  .app-leveldropdown {
    display: flex;
    font-size: 14px;
    line-height: 60px;
    margin-left: 80px;
    margin-right: 30px;

  }

  .app-leveldropdown2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    line-height: 60px;
    margin-left: 10px;
    margin-right: 120px;

  }

  .dropdown {
    margin-left: 20px;
  }

  .avator {
    display: flex;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 15px;

  }

  .el-dropdown-menu__item {
    text-align: center;
  }
</style>
