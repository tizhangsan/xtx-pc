<template>
  <div>

    <p>{{$store.state.name}}</p>
    <button @click="cli">点击</button>

    <hr>
    <p>{{$store.getters['modulesB/setname']}}</p>
      <p>{{$store.state.modulesB.name}}</p>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'// 拿到vuex的总仓库

export default {
  setup () {
    const name = reactive(useStore().state.name)
    const store = useStore()
    const cli = () => {
      console.log(20)
      store.commit('setname')
    }

    return { name, cli }
  }
}
</script>

<style>

</style>
