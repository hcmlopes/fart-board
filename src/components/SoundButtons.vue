<template>
  <div class="buttons-grid">
    <SoundButton v-bind:sound="sound" v-bind:key="sound.fartName" v-for="sound in sounds"/>
  </div>
</template>

<script>
import SoundButton from "../components/SoundButton";

export default {
  name: "SoundButtons",
  components: { SoundButton },
  props: ["sounds"]
};
</script>

<style>
.buttons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 60px);
  grid-auto-rows: 1fr;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  grid-gap: 2.5rem;
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 400px;
}

.fart-01 {
  background: url("../assets/fart-01.svg");
}

.fart-02 {
  background: url("../assets/fart-02.svg");
}

.fart-03 {
  background: url("../assets/fart-03.svg");
}

.fart-04 {
  background: url("../assets/fart-04.svg");
}

.fart-05 {
  background: url("../assets/fart-05.svg");
}

.fart-06 {
  background: url("../assets/fart-06.svg");
}

.fart-07 {
  background: url("../assets/fart-07.svg");
}

.fart-08 {
  background: url("../assets/fart-08.svg");
}

.fart-09 {
  background: url("../assets/fart-09.svg");
}

.fart-10 {
  background: url("../assets/fart-10.svg");
}

.fart-11 {
  background: url("../assets/fart-11.svg");
}

.fart-12 {
  background: url("../assets/fart-12.svg");
}

.icon {
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
}

.icon:active {
  filter: invert(1) hue-rotate(20deg);
}
</style>
