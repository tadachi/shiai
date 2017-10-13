<template>
  <div class="container background">
    <div>Round Robin</div>
    <div v-for="(participant, index, key) in $store.state.participants" :key="key">
      <div class="columns is-mobile is-multiline">
        <div v-for="(participant, index, key) in $store.state.participants" :key="key">
          <div class="column dotted">
            <div v-if="index == 0">
              xxxx
            </div>
            <div v-else>
              xxxxxxx
            </div>
            
          </div>
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