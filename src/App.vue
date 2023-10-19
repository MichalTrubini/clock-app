<template>
  <div class="overlay bg-day bg-cover bg-top relative w-full h-screen">
    <main class="px-6 pt-8 pb-10 relative z-10 flex flex-col justify-between">
      <quote></quote>
      <p class="text-white">Hello</p>
    </main>
    <!-- <img :src=" dayImg " alt="hero" class="absolute top-0 object-contain h-[1600px] w-[2800px] "/> -->
  </div>
</template>

<script>
import imgDay from "./assets/bg-day.jpg";
import Quote from "./components/Quote.vue";

export default {
  components: {
    Quote,
  },
  data() {
    return {
      dayImg: imgDay,
    };
  },
};
</script>

<style>
html {
  font-family: "Inter", sans-serif;
}

.overlay::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
