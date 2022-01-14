<template>
  <div>
    <label>1. Vehicle</label>
    <div>
      <RadioButtonOption optionName="vehicleOption" value="Motor" optionId="motorOption" v-on:valueChanged="onVehicleChange">
        <p>Motor</p>
      </RadioButtonOption>
      <RadioButtonOption optionName="vehicleOption" value="Mobil" optionId="mobilOption" v-on:valueChanged="onVehicleChange">
        <p>Mobil</p>
      </RadioButtonOption>
    </div>

    {{startTime}}
    <label class="mt-3">2. Start Time</label>
    <DateTimePicker
      format="YYYY-MM-DD H:i:s"
      width="300px"
      v-model="startTime"
    ></DateTimePicker>
    {{endTime}}
    <label class="mt-3">3. End Time</label>
    <DateTimePicker
      format="YYYY-MM-DD H:i:s"
      width="300px"
      v-model="endTime"
    ></DateTimePicker>

    <p class="text-danger">{{ errorMessage }}</p>

    <p v-if="price !== ''" class="fw-bold">{{ price }}</p>
    <button class="mt-3" v-on:click="calculatePrice">Calculate Price</button>
  </div>
</template>

<script>
import RadioButtonOption from "./RadioButtonOption.vue";
import DateTimePicker from "vuejs-datetimepicker";
import { DateTime } from "luxon";

export default {
  name: "Parking System",
  components: {
    RadioButtonOption,
    DateTimePicker,
  },
  data() {
    return {
      vehicle: "",
      startTime: "",
      endTime: "",
      price: "",
      errorMessage: "",
    };
  },
  methods: {
    onVehicleChange(value) {
      this.vehicle = value;
    },
    calculatePrice() {
      if(this.vehicle === ""){
        this.errorMessage = "Please choose Vehicle Type";
        return;
      }else if(this.startTime === "" || this.endTime === ""){
        this.errorMessage = "Please Insert a Valid DateTime";
        return;
      }

      const startDateTime = DateTime.fromFormat(
        this.startTime,
        "yyyy-MM-dd HH:mm:ss"
      );

      const endDateTime = DateTime.fromFormat(
        this.endTime,
        "yyyy-MM-dd HH:mm:ss"
      );

      let secondSpan = endDateTime
        .diff(startDateTime, "seconds")
        .toObject().seconds;
      let dayCount = 0;
      let hourCount = 0;

      dayCount = Math.floor(secondSpan / 86400);
      if (dayCount < 0) {
        this.errorMessage = "Invalid Date";
        return;
      }

      secondSpan -= 86400 * dayCount;
      hourCount = Math.floor(secondSpan / 3600);

      if (secondSpan % 3600 > 60) {
        hourCount += 1;
      }

      if (this.vehicle === "Motor") {
        this.price = dayCount * 40000 + hourCount * 2000;
      } else if (this.vehicle === "Mobil") {
        this.price = dayCount * 80000 + hourCount * 5000;
      }
      this.errorMessage = "";
    },
  },
};
</script>