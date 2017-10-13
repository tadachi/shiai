<template>
  <div class="container is-fluid background separation">
    ScoreCard
    <img class="dotted edit" src="~/assets/edit-pencil.svg" width="40px">
    <div v-for="(ippon, key, index) in $store.state.ippons" :key="key">
      <div class="wrap">
        <img class="dotted close" src="~/assets/delete.svg" width="20px" height="20px">
        <img class="dotted ippon" src="~/assets/men.svg" width="60px">
      </div>
    </div>
    <div class="dotted box"></div>
  </div>
</template>

<script>
</script>

<style scoped>
.separation {
  margin-bottom: 40px;
}

.background {
  background-color: Cornsilk;
}

.dotted {
  border-style: dotted;
}

.ippon {
  display: inline-block;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 0;
}

/* .ippon:hover {
  transform: scale(1.6, 1.6);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
} */

/* Create a simple white box, and add the shadow for the initial state */
.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.box::after {
  border-radius: 5px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  opacity: 0;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

/* Scale up the box */
.box:hover {
  transform: scale(1.6, 1.6);
}

/* Fade in the pseudo-element with the bigger shadow */
.box:hover::after {
  opacity: 1;
}

.wrap {
    position: relative;
    display: inline-block;
}

.wrap .close {
    position: absolute;
    top: 2px; /* Moves to to the right corner of image */
    right: 2px;
    z-index: 100;
    font-weight: bold;
    cursor: pointer;
    opacity: 0;
}

.wrap .edit {
    position: absolute;
    top: -2px; /* Moves to to the right corner of image */
    right: -20px;
    z-index: 100;
    font-weight: bold;
    cursor: pointer;
    opacity: 1;
}


.wrap:hover .close {
    opacity: 1;
}

</style>