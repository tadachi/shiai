<template>
  <div class="section background modifiers">
    <div class="table-container">
      <div class="table-cells-container">
        <div class="player-cell"></div>
        <div class="points-cell"></div>
        <div class="points-cell"></div>
        <div class="player-cell"></div>
      </div>
      <div class="table-cells-container">
        <div class="player-cell"></div>
        <div class="points-cell"></div>
        <div class="points-cell"></div>
        <div class="player-cell"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      count: 5
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>
.background {
  background-color: #161616;;
}

.background-black-fill {
  background-color: black;
  width: 100%;
  height: 100%;
}

.table-container {
  display: flex;
  flex-direction: row;
}

.table-cells-container {
  display: flex;
  flex-direction: column
}

.player-cell {
  display: flex;
  width: 100px;
  height: 20px;
  background-color: grey;
  margin: 10px;
}

.points-cell {
  display: flex;
  width: 100px;
  height: 20px;
  background-color: blue;
  margin: 10px;
}

.empty-cell {
  display: flex;
  width: 100px;
  height: 20px;
  background-color: black;
  margin: 10px;
}
</style>