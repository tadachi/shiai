<template>
  <div class="section background-gradient">
    <h1 class="title">
      shiai
    </h1>
    <h2 class="subtitle">
      Web Kendo tournament bracket generator.
    </h2>
    <score-card/>
    <shiai-form />
    <round-robin />
    <team-match />
    <!-- <tournament /> -->
  </div>
</template>

<script>
import ScoreCard from '~/components/ScoreCard.vue'
import RoundRobin from '~/components/RoundRobin.vue'
import ShiaiForm from '~/components/ShiaiForm.vue'
import Tournament from '~/components/Tournament.vue'
import TeamMatch from '~/components/TeamMatch.vue'

export default {
  components: {
    ScoreCard,
    RoundRobin,
    ShiaiForm,
    Tournament,
    TeamMatch
  }
}
</script>

<style scoped>
.background {
  background-color: Cornsilk;
}

.background-gradient {
  background: #313233;
  /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(left, black, #313233);
  /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(right, black, #313233);
  /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(right, black, #313233);
  /* For Firefox 3.6 to 15 */
  background: linear-gradient(to right, black, #313233);
  /* Standard syntax */
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: white;
  letter-spacing: 1px;
  margin-bottom: 40px;
  padding-left: 10px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: white;
  word-spacing: 5px;
  margin-bottom: 20px;
  padding-left: 10px;
}

.dotted {
  border-style: dotted;
}
</style>
