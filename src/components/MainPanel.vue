<template>
  <div>
    <time-panel @toggle-showPanel="toggleShowPanel"></time-panel>
    <info-panel @height-element="heightElement"></info-panel>
  </div>
</template>

<script>
import TimePanel from "./TimePanel.vue";
import InfoPanel from "./InfoPanel.vue";
export default {
  components: {
    TimePanel,
    InfoPanel,
  },
  methods: {
    toggleShowPanel(showPanel) {
      this.$emit("toggle-showPanel", showPanel);
    },
    heightElement(height) {
      this.$emit("height-element", height);
    },
  },
};
</script>
