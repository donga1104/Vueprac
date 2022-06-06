<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <button @click="setLogin">ログイン名表示</button>
    {{ $store.state.count }}
    <br>
    <ul>
      <li v-for="user in visibleUsers" :key="user.id">
        {{ user.id }} : {{ user.name }} : {{ user.isVisible }}
      </li>
    </ul>
    <br>
    {{ getUserById }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default ({
  methods:{
    ...mapActions('auth', ['setLoginUser']),  // 名前空間、[アクション名]
    setLogin(){
      this.setLoginUser({name:'小生隊長隊長'})
    }
  },
  // gettersは基本的にcomputedの中に記述する
  computed:{
    visibleUsers(){
      return this.$store.getters.visibleUsers
    },
    getUserById(){
      return this.$store.getters.getUserById(2)
    }
  }
})
</script>
