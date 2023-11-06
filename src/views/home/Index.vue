<template>
  <div>
    <div>{{ aaa }}</div>
    <keep-alive>
      <template v-for="(a, index) in aaa" :key="index">
        <component :is="a.value" />
      </template>
    </keep-alive>
    <div class="flex flex-col">
      <button @click="function_addAComponent">add A</button>
      <button @click="function_addBComponent">add B</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, shallowRef } from 'vue'
/** import components */
import AVue from '@/components/A.vue';
import BVue from '@/components/B.vue';

const aaa = ref([shallowRef(AVue), shallowRef(BVue)])

const function_addAComponent = () => {
  aaa.value.push(shallowRef(AVue));
};

const function_addBComponent = () => {
  aaa.value.push(shallowRef(BVue));
};
</script>
<style scoped lang="scss"></style>
