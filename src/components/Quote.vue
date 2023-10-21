<template>
  <section
    class="px-6 pt-8 flex items-start gap-2 sm:px-16 sm:pt-14 md:pt-20 md:gap-4 dt:px-[165px] dt:pt-14"
  >
    <div>
      <p
        class="text-xs leading-6 mb-2 sm:text-base sm:mb-4 md:text-lg md:leading-7 md:w-[540px]"
      >
        {{ quoteData.quote }}
      </p>
      <p class="font-bold text-xs sm:text-base md:text-lg">
        {{ quoteData.author }}
      </p>
    </div>
    <img
      :src="iconPath"
      alt="refresh quote"
      class="mt-2 cursor-pointer w-[18px] h-[18px]"
      :class="{ rotate: loading }"
      @click="refreshQuote"
    />
  </section>
</template>

<script>
import refreshIcon from "../assets/refresh2.svg";

export default {
  data() {
    return {
      iconPath: refreshIcon,
    };
  },
  props: {
    quoteData: Object,
    loading: Boolean,
  },
  methods: {
    refreshQuote() {
      this.$emit("refresh-quote");
    },
  },
};
</script>

<style scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotate {
  animation: rotate 1s linear infinite;
}
</style>
