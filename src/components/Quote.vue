<template>
  <section class="px-6 pt-8 flex items-start gap-2 sm:px-16 sm:pt-14 md:pt-20 md:gap-4 dt:px-[165px] dt:pt-14">
    <div>
      <p class="text-xs leading-6 mb-2 sm:text-base sm:mb-4 md:text-lg md:leading-7 md:w-[540px] ">{{ quote }}</p>
      <p class="font-bold text-xs sm:text-base md:text-lg" >{{ author }}</p>
    </div>
    <img :src="iconPath" alt="refresh quote" class="mt-2 cursor-pointer"/>
  </section>
</template>

<script>
import refreshIcon from "../assets/refresh.svg";

export default {
  data() {
    return {
      quote:
        "“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”",
      author: "Ada Lovelace",
      iconPath: refreshIcon,
    };
  },
};
</script>
