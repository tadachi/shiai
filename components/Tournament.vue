<template>
  <div class="section background modifiers">
    {{getRounds}}
    <div class="table-container">
      <div class="table-cells-container">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      <div class="table-cells-container">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      count: 8
    }
  },
  methods: {
  },
  computed: {
    getRounds () {
      if (this.count % 2 > 0) { // odd
        return (this.count + 1) / 2
      }
      return this.count / 2
    },
    getRows () {
      if (this.count % 2 > 0) { // odd
        return (this.count + 1) * 2
      }
      return this.count * 2
    }
  }
}
</script>

<style scoped>
.background {
  background-color: white;
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

.cell {
  display: flex;
  width: 100px;
  height: 100px;
  background-color: blue;
  margin: 10px;
}

.empty-cell {
  display: flex;
  width: 100px;
  height: 100px;
  background-color: black;
  margin: 10px;
}

</style>