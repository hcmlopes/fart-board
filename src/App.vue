<template>
  <div id="app">
    <img id="logo" alt="Fart PWA logo - bottle of poinson" src="./assets/poison.svg">
    <SoundButtons v-bind:sounds="sounds"/>
  </div>
</template>

<script>
import SoundButtons from "./components/SoundButtons.vue";
export default {
  name: "app",
  components: {
    SoundButtons
  },
  data() {
    return {
      sounds: [
        {
          fartName: "fart-01",
          fartFile: "./sounds/fart-01.mp3"
        },
        {
          fartName: "fart-02",
          fartFile: "./sounds/fart-02.mp3"
        },
        {
          fartName: "fart-03",
          fartFile: "./sounds/fart-03.mp3"
        },
        {
          fartName: "fart-04",
          fartFile: "./sounds/fart-04.mp3"
        },
        {
          fartName: "fart-05",
          fartFile: "./sounds/fart-05.mp3"
        },
        {
          fartName: "fart-06",
          fartFile: "./sounds/fart-06.mp3"
        },
        {
          fartName: "fart-07",
          fartFile: "./sounds/fart-07.mp3"
        },
        {
          fartName: "fart-08",
          fartFile: "./sounds/fart-08.mp3"
        },
        {
          fartName: "fart-09",
          fartFile: "./sounds/fart-09.mp3"
        },
        {
          fartName: "fart-10",
          fartFile: "./sounds/fart-10.mp3"
        },
        {
          fartName: "fart-11",
          fartFile: "./sounds/fart-11.mp3"
        },
        {
          fartName: "fart-12",
          fartFile: "./sounds/fart-12.mp3"
        }
      ]
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  background: #575f64;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 30px;
  height: 100vh;
}

#logo {
  width: 160px;
  margin-bottom: 3rem;
}

footer {
  margin-top: 3rem;
  background: #32393f;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  width: 100%;
}

footer * {
  color: #b3c2cc;
  font-style: none;
  font-size: 0.7rem;
  margin: 0.6rem 0;
}
</style>
