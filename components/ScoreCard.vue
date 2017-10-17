<template>
  <div class="container is-fluid background separation dotted">
    <div class="has-text-white">ScoreCard</div>
    <div class="has-text-white" v-for="(participant, key) in $store.state.participants" :key="key">
      <div v-if="key > 0">{{participant}}</div>
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

</style>