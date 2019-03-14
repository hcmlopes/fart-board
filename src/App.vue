<template>
  <div id="app">
    <Header/>
    <SoundButtons v-bind:sounds="sounds"/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SoundButtons from "./components/SoundButtons.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
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
  height: 100%;
}

footer {
  margin-top: 1rem;
  background: #32393f;
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  width: 100%;
}

footer * {
  color: #b3c2cc;
  font-style: none;
  font-size: 0.6rem;
  margin: 0.2rem 0;
}
</style>
