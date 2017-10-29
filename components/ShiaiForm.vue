<template>
  <div class="background separation modifiers">
    <!-- <div class="field form-margins">
      <label class="label has-text-white">Tournament Name</label>
      <div class="control">
        <input class="input" type="text" v-model="tournament_name" placeholder="Name of the tournament">
      </div>
    </div> -->
    <div class="field form-margins">
      <label class="label has-text-white">Type</label>
      <div class="control">
        <div class="select">
          <select v-model="type">
            <option selected>Round Robin</option>
          </select>
        </div>
      </div>
    </div>
    <div class="field form-margins">
      <label class="label has-text-white">Participants</label>
      <ul class="has-text-white">
        <li>One per line</li>
      </ul>
      <div class="control">
        <textarea v-model="participants_string" rows="10" class="textarea" placeholder="Partcipants"></textarea>
      </div>
    </div>
    <div class="field form-margins">
      <div class="control padding-bottom">
        <button class="button" v-on:click="submit({tournament_name: tournament_name, type: type, participants: splitParticipantsByNewLine})">Submit</button>
      </div>
    </div>
    <!-- <p class="has-text-white">
      {{tournament_name}} {{type}} {{participants}}
    </p> -->
  </div>
</template>
<script>
import { SUBMIT_SHIAI } from '../store/round_robin'
import { ROUNDROBIN } from '../store/shiai_constants'
import * as _ from 'underscore'

export default {
  data: () => {
    return {
      tournament_name: '',
      type: ROUNDROBIN,
      participants_string: 'Takumi\nMing\nKirk\nJames\nKevin\nWilson\n',
      participants: ''
    }
  },
  methods: {
    submit (data) {
      this.$store.commit(`round_robin/${SUBMIT_SHIAI}`, data)
    }
  },
  computed: {
    splitParticipantsByNewLine () {
      this.participants = _.compact(this.participants_string.split('\n'))
      this.participants.splice(0, 0, 'Round Robin')
      return (this.participants) ? this.participants : ''
    }
  }
}
</script>

</script>
<style scoped>
ul {
  list-style-position: inside;
  margin-left: 10px;
  list-style-type: circle;
  margin-bottom: 10px;
}

.separation {
  margin-bottom: 40px;
}

.modifiers {
  max-width: 400px;
}

.background {
  background-color: #373a3d;
}

.form-margins {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.padding-bottom {
  padding-bottom: 5px;
}

</style>
