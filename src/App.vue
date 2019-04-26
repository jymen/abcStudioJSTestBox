<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/TopViolin.png">
    <AbcStudioWelcome
      title="Abc WebXml studio score panel"
      message="This Panel will be used to display Abc and WebXml scores"
    />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import AbcStudioWelcome from "./components/AbcStudioWelcome.vue";

export default {
  name: "App",
  components: {
    AbcStudioWelcome
  }
};
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
