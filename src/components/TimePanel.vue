<template>
  <section
    class="px-6 pb-10 sm:px-16 md:pb-16 lg:flex lg:items-end lg:justify-between dt:px-[165px] dt:pb-[98px]"
  >
    <div>
      <div class="flex items-center gap-4 mb-4 md:mb-0">
        <img :src="dataIP.day ? sunIcon : moonIcon" alt="sun" class="w-8 h-8" />
        <p class="text-base uppercase tracking-[3px] md:text-lg dt:text-xl">
          {{ dataIP.greet }}
        </p>
      </div>
      <div>
        <p
          class="font-bold text-[100px] leading-[70px] md:text-[175px] md:leading-[175px] dt:text-[200px] dt:leading-[200px]"
        >
          {{ dataIP.hour }}:{{ dataIP.minute
          }}<span class="text-base font-light md:text-3xl dt:text-[40px] dt:pl-4">{{
            dataIP.abbreviation
          }}</span>
        </p>
        <p
          class="uppercase text-base font-bold tracking-[3px] mb-12 md:text-[28px] md:mb-20 lg:mb-0 dt:text-2xl"
        >
          in {{ dataIP.city }}, {{ dataIP.countryCode }}
        </p>
      </div>
    </div>
    <div
      class=" cursor-pointer flex items-center justify-between bg-white w-[115px] rounded-3xl p-[3px] md:p-2 dt:w-[146px]"
      @click="toggle"
    >
      <span
        class="uppercase text-blackLight pl-4 text-sm font-bold md:text-[16px] md:pl-2 dt:pl-4 dt:tracking-[5px]"
        >{{ showPanel ? "less" : "more" }}</span
      ><img :src="arrowIcon" alt="arrow" class="rotateInit" :class="{ rotate: showPanel }" />
    </div>
  </section>
</template>

<script>
import sunIcon from "../assets/sun.svg";
import arrowIcon from "../assets/arrow.svg";
import moonIcon from "../assets/moon.svg";

export default {
  data() {
    return {
      sunIcon: sunIcon,
      arrowIcon: arrowIcon,
      moonIcon: moonIcon,
      showPanel: false,
    };
  },
  props: {
    dataIP: Object,
  },
  methods: {
    toggle() {
      this.showPanel = !this.showPanel;
      this.$emit("toggle-showPanel", this.showPanel);
    },
  },
};
</script>
<style scoped>

.rotateInit {
    transform: rotate(0deg); 
    transition: all 0.5s ease-in-out;
}
.rotate {
  transform: rotate(180deg);
  transition: all 0.5s ease-in-out;
}

</style>
