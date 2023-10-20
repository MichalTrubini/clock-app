<template>
  <div
    class="overlay bg-day bg-cover bg-top bg-no-repeat relative w-full h-screen overflow-hidden md:bg-center"
  >
    <main
      :style="
        'height: ' +
        heightMain +
        '; transform: translateY(' +
        translateValue +
        ')'
      "
      class="transition relative z-10 flex flex-col justify-between"
    >
      <quote></quote>
      <main-panel @toggle-showPanel="toggleShowPanel" @height-element="setHeight"></main-panel>
    </main>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import TimePanel from "./components/TimePanel.vue";
import MainPanel from "./components/MainPanel.vue";

export default {
  components: {
    Quote,
    TimePanel,
    MainPanel,
  },
  computed: {
    translateValue() {
      return this.togglePanel ? '-' + this.panelHeight  + 'px': "0px";
    },
    heightMain() {
      return this.windowHeight + this.panelHeight  + 'px';
    },
  },

  data() {
    return {
      windowHeight: window.innerHeight,
      panelHeight: 0,
      togglePanel: false,
    };
  },
  methods: {
    toggleShowPanel(showPanel) {
      this.togglePanel = showPanel;
    },
    handleResize() {
      this.windowHeight = window.innerHeight;
    },
    setHeight(height) {
      this.panelHeight = height
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style>
html {
  font-family: "Inter", sans-serif;
  color: white;
}

.overlay::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.transition {
  transition: all 0.3s ease-in-out;
}
</style>
