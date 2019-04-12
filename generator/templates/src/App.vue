<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If ElementUp is successfully added to this project, you'll see an
        <code
          v-text="'<up-radio>'"
        ></code>
        below
      </p>
      <up-radio :data="data"></up-radio>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data () {
    return {
      data: [
        { key: '🍌', value: 1, size: 'medium' },
        { key: '🍎', value: 2, size: 'small' },
        { key: '🍊', value: 3, size: 'mini' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
