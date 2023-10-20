<template>
  <section
    class="px-6 py-12 flex flex-col gap-4 sm:px-16 md:grid md:grid-cols-2 md:py-[120px] md:gap-x-40 md:gap-y-14 dt:px-[165px] dt:gap-y-10 dt:py-[74px]"
    ref="bottomPanel"
  >
    <div
      class="line relative flex items-center justify-between md:flex-col md:items-start"
    >
      <p
        class="text-blackish uppercase text-xs tracking-[2px] pt-1 md:text-[13px] md:tracking-[2.6px] dt:text-base"
      >
        current timezone
      </p>
      <p
        class="text-blackish text-xl font-bold md:text-[40px] md:leading-normal dt:text-[56px]"
      >
        {{dataIP.timezone}}
      </p>
    </div>
    <div class="flex items-center justify-between md:flex-col md:items-start">
      <p
        class="text-blackish uppercase text-xs tracking-[2px] pt-1 md:text-[13px] md:tracking-[2.6px] dt:text-base"
      >
        day of the year
      </p>
      <p
        class="text-blackish text-xl font-bold md:text-[40px] md:leading-normal dt:text-[56px]"
      >
        {{dataIP.dayOfYear}}
      </p>
    </div>
    <div class="flex items-center justify-between md:flex-col md:items-start">
      <p
        class="text-blackish uppercase text-xs tracking-[2px] pt-1 md:text-[13px] md:tracking-[2.6px] dt:text-base"
      >
        day of the week
      </p>
      <p
        class="text-blackish text-xl font-bold md:text-[40px] md:leading-normal dt:text-[56px]"
      >
      {{dataIP.dayOfWeek}}
      </p>
    </div>
    <div class="flex items-center justify-between md:flex-col md:items-start">
      <p
        class="text-blackish uppercase text-xs tracking-[2px] pt-1 md:text-[13px] md:tracking-[2.6px] dt:text-base"
      >
        week number
      </p>
      <p
        class="text-blackish text-xl font-bold md:text-[40px] md:leading-normal dt:text-[56px]"
      >
      {{dataIP.weekNumber}}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentHeight: 0, // Initialize currentHeight
    };
  },
  props: {
    dataIP: Object,
  },
  mounted() {
    this.currentHeight = this.$refs.bottomPanel.clientHeight;
    this.$emit("height-element", this.currentHeight);
  },
  watch: {
    currentHeight(newHeight) {
      this.$emit("height-element", newHeight);
    },
  },
};
</script>

<style scoped>
section {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
}

@media screen and (min-width: 1440px) {
  .line::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: -85px;
    width: 1px;
    height: 248px;
    background: rgba(48, 48, 48, 0.25);
  }
}
</style>
