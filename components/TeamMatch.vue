<template>
  <div v-if="show" class="section background modifiers">
    <div class="table-container">
      <div class="table-cells-container" v-for="(n, key) in count" :key="key">
        <div class="player-cell header-size">{{team_red_participants[key]}}</div>
        <div class="points-cell standard-size"></div>
        <div class="points-cell standard-size"></div>
        <div class="player-cell header-size">{{team_white_participants[key]}}</div>
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
  margin: 10px;
}

.points-cell {
  display: flex;
  background-color: #e3e5e8;
  margin: 10px;
}

.empty-cell {
  display: flex;
  background-color: black;
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
    width: 30px;
    height: auto;
  }

  .small-icon {
    width: 25px;
    height: auto;
  }

  .medium-icon {
    width: 60px;
    height: auto;
  }

  .big-icon {
    width: 70px;
    height: auto;
  }

  .super {
    width: 11px;
    height: 11px;
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
    width: 20px;

  }

  .small-icon {
    width: 13px;
  }

  .medium-icon {
    width: 32px;
  }

  .big-icon {
    width: 42px;
  }

  .super {
    width: 8px;
    height: 8px;
  }

}

</style>