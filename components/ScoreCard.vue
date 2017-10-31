<template>
  <div class="container is-fluid background separation dotted">
    <div class="has-text-white">ScoreCard</div>
    <div class="names has-text-white" v-for="(participant, key) in $store.state.participants" :key="key">
      <div v-if="key > 0">{{participant}}</div>
      <div v-if="key > 0">{{$store.state.score_card[key].wins}}-{{$store.state.score_card[key].losses}}-{{$store.state.score_card[key].ties}} / {{$store.state.score_card[key].points}}P</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
    }
  },
  methods: {
  },
  computed: {
    team_match_card () { return this.$store.state.team_match.team_match_card },
    team_red_participants () { return this.$store.state.team_match.team_red_participants },
    team_white_participants () { return this.$store.state.team_match.team_white_participants },
    round_robin_card () { return this.$store.state.round_robin.round_robin_card },
    participants () { return this.$store.state.round_robin.participants },
    score_card () { return this.$store.state.round_robin.score_card }
  }
}
</script>

<style scoped>
.separation {
  margin-bottom: 40px;
}

.background {
  background-color: #373a3d;
}

.names {
  width: 100px;
}

.scores {
  width: 100px;
}
</style>