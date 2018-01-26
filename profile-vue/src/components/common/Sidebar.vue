<template>
  <div class="sidemenu el-col el-col-4">
    <el-menu default-active="2" mode="vertical" theme="dark" class="el-menu-vertical-demo" router>
      <template v-for="item in $router.options.routes[3].children">
        <template v-if="item.children!=null">
          <template v-if="(user.userLevel>=item.meta.role)">
            <el-submenu :index="item.name" >
              <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
              <template v-for="child in item.children">
                <el-menu-item :index="'/home/'+item.path+'/'+child.path" >{{child.name}}</el-menu-item>
              </template>
            </el-submenu>
          </template>


        </template>

        <template v-else>
          <el-menu-item :index="'/home/'+item.path" v-if="item.meta.isNeed"><i :class="item.icon"/>{{item.name}}</el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import ElSubmenu from "../../../node_modules/element-ui/packages/menu/src/submenu";
  export default {

    components: {ElSubmenu},
    name: 'Sidebar',

    data() {
      return {};
    },
    computed: {
      ...mapState(['user'])
    },
    created(){
      console.log(this.$router)
      console.log("fasdfsa")
      console.log(this.user.userLevel)
    }
  };
</script>
<style lang="scss" scoped>
  .sidemenu {
    min-height: 100%;
    background-color: rgb(50, 71, 87);
  }
</style>
