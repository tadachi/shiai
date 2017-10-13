<template>
  <div class="container is-fluid background separation">
    <!-- <div class="columns is-mobile">
      <div class="column dotted">
        Round Robin
      </div>
      <div class="column dotted">
        Round Robin
      </div>
      <div class="column dotted">
        Round Robin
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column dotted">
        Round Robin
      </div>
      <div class="column dotted">
        Round Robin
      </div>
      <div class="column dotted">
        Round Robin
      </div>
      <div class="column dotted">
        Round Robin
      </div>    
    </div> -->
    <div class="columns is-mobile" v-for="(participant, n) in $store.state.participants" :key="n">
      <div class="column dotted" v-for="(participant, m) in $store.state.participants" :key="m" >
        <div v-if="n <= 0">
          {{participant}}
        </div>
        <div v-else-if="m <= 0">
          {{$store.state.participants[n]}}
        </div>
        <div v-else-if="m == n">
          xxxx
        </div>
        <div v-else>
          xxxxxxxxx
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // data: () => ({
  //   count: 8,
  //   length: 8
  // })
}
</script>

<style scoped>
.background {
  background-color: lavenderblush;
}

.dotted {
  border-style: dotted;
}
</style>