<template>
  <div>
    <div
      class="form-check text-start"
    >
      <input
        class="form-check-input"
        type="radio"
        :name="optionName"
        :id="optionId"
        :value="value"
        v-on:change="onChange"
      />
      <label class="form-check-label" :for="optionId">
        <slot/>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioButtonOption",
  props: {
    optionName: {
      type: String,
    },
    optionId: {
      type: String,
    },
    value: {
      type: String,
    }
  },
  methods: {
    onChange(e) {
      this.$emit("valueChanged", e.target.value);
    },
  },
};
</script>