<template>
    <header>
        <img src="../../assets/logo.svg" class="header-logo">
        <!-- <div class="logo">网关管理系统</div> -->
        <el-menu class="nav" mode="horizontal" router>
            <el-menu-item index="home" class="nav-item">
                <router-link to="home">Home</router-link>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的</template>
                <el-menu-item index="2-1">退出</el-menu-item>
            </el-submenu>
            <!--                 <el-dropdown trigger="click" @command="handleCommand">

                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="loginout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown> -->

        </el-menu>
    </header>
</template>
<script>
export default {

    name: 'Header',

    data() {
        return {
            name: 'linxin'
        };
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    methods: {
        handleCommand(command) {
            if (command == 'loginout') {
                localStorage.removeItem('ms_username')
                this.$router.push('/login');
            }
        }
    }
};
</script>
<style lang="css" scoped>
/*.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    line-height: 70px;
    color: #fff;
}*/

header {
    height: 80px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0px;
    background-color: rgb(68, 182, 219);
    padding: 0 20px;
    z-index: 1;
    box-sizing: border-box;
}

.nav {
    display: inline-block;
    float: right;
    padding-right: 30px;
    height: 100%;
    background-color: transparent;
}

.nav-item {
    margin-top: 0px;
    float: left;
    list-style: none;
    position: relative;
    cursor: pointer;
    margin-left: 20px;
    height: 80px;
    background-color: transparent;
}

.nav-item a {
    text-decoration: none;
    color: #fff;
    display: block;
    padding: 0 20px;
    opacity: .8;
    height: 80px;
    margin: 10px;
    font-size: 20px;
}

.nav-item:hover {
    /* background-color: rgb(209, 222, 229); */
    border-bottom: 5px solid #b2ebf2;
}
.nav-item:hover a{
    /* background-color: rgb(209, 222, 229); */
    color: #000;
}
.nav-item.is-active {
    /*background-color: rgb(68, 182, 219);*/
    color: #fff;
    /*opacity: 1;*/
    /*display: block;*/
    padding: 0 20px;

}

/*.el-submenu {
    height: 80px;
}
div.el-submenu__title {
    color: #fff;
    margin-top: 20px;
    height: 80px;
    line-height: 60px;
    border-bottom: 5px solid transparent;
}*/

.nav-item a.router-link-active{
    opacity: 1;
    font-weight: 700;
}
.nav-item a.router-link-active:before{

        content: "";
    display: block;
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 5px;
    background: #b2ebf2;
}


.header-logo {
    display: inline-block;
    vertical-align: middle;
    padding-top: 20px;
}

.logo {
    display: inline-block;
    vertical-align: middle;
    /*padding-top: 40px;*/
}


/*.user-info {
    float: right;
    padding-right: 50px;
    font-size: 16px;
    color: #fff;
}*/


/*.user-info .el-dropdown-link {
    position: relative;
    display: inline-block;
    padding-left: 50px;
    color: #fff;
    cursor: pointer;
    vertical-align: middle;
}

.user-info .user-logo {
    position: absolute;
    left: 0;
    top: 15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.el-dropdown-menu__item {
    text-align: center;
}*/
</style>
