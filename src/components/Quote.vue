<template>
  <section>
    <p class="text-white text-xs leading-6 mb-2">{{ quote }}</p>
    <p class="text-white font-bold text-xs">{{ author }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      quote:
        "“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”",
      author: "Ada Lovelace",
    };
  },
};
</script>
