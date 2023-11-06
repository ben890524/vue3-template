<template>
  <div class="border-b-2">
    <div>test A</div>
    <div>data_count: {{ data_count }}</div>
    <button class="border-2 rounded bg-slate-100" @click="function_addCount">Add</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const data_count = ref(1);

const function_addCount = () => {
  data_count.value = data_count.value + 1;
};
</script>

<script lang="ts">
export default {
  name: 'A',
};
</script>

<style scoped lang="scss"></style>
