<template>
  <div>
    <button v-on:click="fart" class="icon" v-bind:class="sound.fartName">
      <audio ref="audio" preload="auto">
        <source v-bind:src="sound.fartFile" type="audio/mp3">
      </audio>
    </button>
  </div>
</template>

<script>
export default {
  name: "SoundButton",
  props: ["sound"],
  methods: {
    fart() {
      this.$refs.audio.play();
    }
  }
};
</script>

<style scoped>
button {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 50%;
  position: relative;
  -webkit-box-shadow: 8px 8px 20px 0 rgba(0, 0, 0, 0.25),
    0 0 10px 0 rgba(0, 0, 0, 0.25);
  box-shadow: 8px 8px 20px 0 rgba(0, 0, 0, 0.25), 0 0 10px 0 rgba(0, 0, 0, 0.25);
  display: block;
  padding: 0 0 100% 0;
}

button:active {
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.45);
}
</style>
