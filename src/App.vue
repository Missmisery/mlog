<template>
  <div class="mobile-container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import store from '@/store/index';
import { loginStatus } from "@/api/user";

export default {
  name: "netMusic-App",
  setup () {
    interface ILogin {
      account: object;
      profile: object;
    }

    checkLogin();
    function checkLogin () {
      loginStatus().then(({ data }: {data: ILogin}) => {
        if (data.account && data.profile) {
          store.commit("setUserLogin", true);
          store.commit("setUserInfo", data.profile);
          store.commit("setAccount", data.account);
        }
      }).catch((e: Error) => {
        console.error(e);
      })
    }
  }
};
</script>

<style>
:root {
  --mainTheme: #dd0000;
  --textTheme: #dd001b;
}
#app {
  height: 100vh;
  overflow-y: auto;
  padding-bottom: env(safe-area-inset-bottom);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  text-decoration: none;
  /* 长按 a 标签，会出现背景色 仅限于移动端 */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

ul {
  list-style: none;
}

.mobile-container {
  max-width: 1024px;
  margin: auto;
}
</style>
