<template>
  <div v-if="show" class="section background modifiers">
    <div class="table-container">
      <div class="table-cells-container" v-for="(n, key) in (count/2)" :key="key">
        <div class="player-cell dotted header-size">{{team_red_participants[key]}} {{key}}</div>
        <div class="points-cell dotted standard-size" v-for="(n, k) in 2" :key="k">
          <div else class="menu-right dotted">
            <div class="wrap menu-item">
              <img class="top-right super" src="~/static/add.svg">
              <img class="icon" src="~/static/men.svg">
            </div>
            <div class="wrap menu-item">
              <img class="top-right super" src="~/static/add.svg">
              <img class="icon" src="~/static/kote.svg">
            </div>
            <div class="wrap menu-item">
              <img class="top-right super" src="~/static/add.svg">
              <img class="icon" src="~/static/dou.svg">
            </div>
            <div class="wrap menu-item">
              <img class="top-right super" src="~/static/add.svg">
              <img class="icon" src="~/static/tsuki.svg">
            </div>
            <div class="wrap menu-item">
              <img class="top-right super" src="~/static/add.svg">
              <img class="icon" src="~/static/penalty.svg">
            </div>
            <div class="wrap menu-item">
              <img class="icon" src="~/static/win.svg">
            </div>
            <div class="wrap menu-item">
              <img class="icon" src="~/static/lose.svg">
            </div>
            <div class="wrap menu-item">
              <img class="icon" src="~/static/tie.svg">
            </div>
            <div class="wrap menu-item">
              <img class="icon" src="~/static/clear.svg">
            </div>
          </div>
        </div>
        <div class="player-cell dotted header-size">{{team_white_participants[key]}}</div>
      </div>
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
    count () { return this.$store.state.team_match.count },
    show () { return this.$store.state.team_match.show }
  }
}
</script>

<style scoped>
.danger {
  color: red;
  font-size: 50px;
}

.dotted {
  border-style: dotted;
}

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
  background-color: grey;
}

.points-cell {
  display: flex;
  background-color: #e3e5e8;
}

.empty-cell {
  display: flex;
  background-color: black;
}

.menu-right {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  background-color: grey;
  z-index: 9999;
  opacity: 0;
  left: 100%;
  width: 50%;
}

.points-cell:hover {
  background-color: grey;
}

.points-cell:hover .menu-right {
  opacity: 1;
}

.points-cell:hover .menu-left {
  opacity: 1;
}

.menu-item {
  display: flex;
  width: 50%;
  height: 50px;
  /* border-style: solid; */
  border: 1px red solid;
}

.wrap {
  position: relative;
  cursor: pointer;
  margin: 0px;
  padding: 0px;
}

.wrap .top-right {
  position: absolute;
  /* Moves to to the right corner of image */
  left: 70%;
  top: 3%;
  z-index: inherit;
}

.wrap .top-right-hidden {
  position: absolute;
  /* Moves to to the right corner of image */
  left: 70%;
  top: 3%;
  z-index: inherit;
  opacity: 0;
}

.wrap:hover .top-right-hidden {
  opacity: 1;
}

@media screen and (min-width: 1024px) {
  .header-size {
    min-width: 175px;
    max-width: 175px;
    min-height: 50px;
    max-height: 550px;
  } 

  .standard-size {
    min-width: 175px;
    max-width: 175px;
    min-height: 225px;
    max-height: 550px;
  }

  .icon {
    width: auto;
    height: auto;
  }

  .super {
    width: 25%;
    height: 25%;
  }

}

@media screen and (max-width: 1023px) {
  .header-size {
    min-width: 60px;
    max-width: 60px;
    min-height: 50px;
    max-height: 550px;
  } 

  .is-mobile-font-size {
    font-size: 9px;
  }

  .standard-size {
    min-width: 60px;
    max-width: 60px;
    min-height: 155px;
    max-height: 550px;
  }

  .icon {
    width: auto;
    height: auto;
  }

  .super {
    width: 25%;
    height: 25%;
  }
}

</style>