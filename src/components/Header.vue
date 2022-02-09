<template>
  <div data-vue-component="Header"> 
    <div class="header-intro">
      <div class="header-logo">
        <router-link to="/"><img src="../assets/logo.png" alt="Лого"/></router-link> | 
      </div>
      <div class="header-right">
        <nav class="header-nav">
          <ul class="nav-list">
            <li><router-link to="/" :class="{active: activePath === '/'}" @click="$router.push('/')">Главная</router-link></li>
            <li><router-link to="/about" :class="{active: activePath === '/about'}" @click="$router.push('/about')">О нас</router-link></li>
            <li><router-link to="/services" :class="{active: activePath === '/services'}" @click="$router.push('/services')">Услуги</router-link></li>
            <li><router-link to="/reviews" :class="{active: activePath === '/reviews'}" @click="$router.push('/reviews')">Отзывы</router-link></li>
            <li><router-link to="/new_reviews" v-if="$store.getters['user/isAuth']" :class="{active: activePath === '/new_reviews'}" @click="$router.push('/new_reviews')">Добавить отзыв</router-link></li>
            <li><router-link to="/contacts" :class="{active: activePath === '/contacts'}" @click="$router.push('/contacts')">Контакты</router-link></li>
          </ul>
        </nav>
        <div class="header-enter">
          <router-link to="/signin" :class="{active: activePath === '/signin'}" @click="$router.push('/signin')">Авторизация /</router-link>
          <router-link to="/authorize" :class="{active: activePath === '/authorize'}" @click="$router.push('/authorize')"> Регистрация</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isAuth } from '@/App.vue';
export default {
  name: "Header",
  data() {
    return {
      activePath: "/",
      isAuth,
    };
  },
  watch: {
    $route() {
      this.activePath = this.$route.path;
    },
  },
  methods: {
    goto(route) {
      this.$router.push(route);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-logo {
        text-align: left;
        padding-left: 15px;
        margin-top: 15px;
    }
    .header-logo img {
        width: 100px;
        margin-bottom: 15px;
    }
    .header-right {
        display:flex;
        justify-content: space-around;
        padding-top: 25px;
        width: 100%;
    }
    a {
        text-decoration: none;
        color: white;
        font-weight: bold;
    }
    a:hover {
        color: #555;
    }
    li {
        margin-left: 25px;
    }
    .nav_list {
        list-style: none;
        display: flex;
        justify-content: space-between;
    }
    .header_nav {
        align-items: center;
        display: table-cell;
        vertical-align: bottom;
    }
    .header-intro {
        display: flex;
        justify-content: space-between;
        background-image: url(../assets/fon.png);
        height: 100%;
        background-size: cover;
    }
    .header-enter {
        text-align: right;
        margin-top: 15px;
        margin-left: 80px;
        margin-right: 15px;
    }
    .active {
        color: rgb(114, 116, 126);
    }
</style>