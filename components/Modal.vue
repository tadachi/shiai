<template>
  <div class="has-text-white">
    test
    <transition name="modal">
      <div class="modal-container">
        This is a modal
      </div>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.modal-container {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
</style>
