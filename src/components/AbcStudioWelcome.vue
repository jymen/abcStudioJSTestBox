<template>
  <div class="AbcStudioWelcome">
    <h1 class='title is-3'>{{ title }}</h1>
    <p> {{message}}</p>
    <h3 class='subtitle is-4'>Show sample scores</h3>
    <div class="buttons is-centered">
      <span class="button is-light">Show abc score</span>
      <span class="button is-dark">Show MusicXml score</span>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

export default {
  name: 'AbcStudioWelcome',
  props: {
    title: String ,
    message: String ,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
