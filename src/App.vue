<template>
  <div class="container my-5 text-start">
    <div class="row text-center">
      <div class="col">
        <button class="btn btn-primary" v-on:click="changeState">
          Change State
        </button>
      </div>
    </div>
    <div v-if="parkingSystemState === false">
      <!-- We Can Modificate value property here even value from sub component-->
      <RadioButtonOption optionName="radioButton" value="1" optionId="option1">
        <!-- We can put custom sub component here -->
        <p>Option 1</p>
      </RadioButtonOption>
      <RadioButtonOption optionName="radioButton" value="2" optionId="option2">
        <p>Option 2</p>
      </RadioButtonOption>
      <RadioButtonOption optionName="radioButton" value="3" optionId="option3">
        <p>Option 3</p>
      </RadioButtonOption>
      <RadioButtonOption optionName="radioButton" value="4" optionId="option4">
        <p>Option 4</p>
      </RadioButtonOption>
    </div>
    <ParkingSystem v-if="parkingSystemState === true" />
  </div>
</template>

<script>
import RadioButtonOption from "./components/RadioButtonOption.vue";
import ParkingSystem from "./components/ParkingSystem.vue";

export default {
  name: "App",
  components: {
    RadioButtonOption,
    ParkingSystem,
  },
  data() {
    return {
      parkingSystemState: false,
    };
  },
  methods: {
    changeState() {
      this.parkingSystemState = !this.parkingSystemState;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
