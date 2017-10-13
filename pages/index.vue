<template>
  <div class="container">
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
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 40px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  margin-bottom: 20px;
}

.dotted {
  border-style: dotted;
}
</style>
