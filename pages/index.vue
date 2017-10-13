<template>
  <section class="container-nuxt">
    <div>
      <logo/>
      <h1 class="title">
        shiai
      </h1>
      <h2 class="subtitle">
        Web kendo tournament bracket generator.
      </h2>
      <score-card/>
      <round-robin/>
    </div>
  </section>
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
.container-nuxt {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.dotted {
  border-style: dotted;
}
</style>
