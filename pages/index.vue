<template>
  <div class="section background-gradient">
    <h1 class="title dotted">
      shiai
    </h1>
    <h2 class="subtitle dotted">
      Web kendo tournament bracket generator.
    </h2>
    <score-card/>
    <round-robin/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ScoreCard from '~/components/ScoreCard.vue'
import RoundRobin from '~/components/RoundRobin.vue'

export default {
  components: {
    Logo,
    ScoreCard,
    RoundRobin
  }
}
</script>

<style scoped>
.background {
  background-color: Cornsilk;
}

.background-gradient {
  background: royalblue;
  /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(left, royalblue, darkblue);
  /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(right, royalblue, darkblue);
  /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(right, royalblue, darkblue);
  /* For Firefox 3.6 to 15 */
  background: linear-gradient(to right, royalblue, darkblue);
  /* Standard syntax */
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: black;
  letter-spacing: 1px;
  margin-bottom: 40px;
  padding-left: 10px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: black;
  word-spacing: 5px;
  margin-bottom: 20px;
  padding-left: 10px;
}

.dotted {
  border-style: dotted;
}
</style>
