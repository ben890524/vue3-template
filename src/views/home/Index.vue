<template>
  <div>
    <div>{{ aaa }}</div>
    <template v-for="(a, index) in aaa" :key="index">
      <keep-alive>
        <component :is="a.value" v-if="data_targetIndex === index" />
      </keep-alive>
    </template>
    <div class="flex flex-col">
      <button @click="function_addAComponent">add A</button>
      <button @click="function_addBComponent">add B</button>
    </div>
    <div>
      <div>
        {{ data_targetIndex }}
      </div>
      <template v-for="(a, index) in aaa" :key="index">
        <button class="px-2.5" @click="function_setTargetIndex(index)">{{ index }}</button>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, shallowRef } from 'vue';
/** import components */
import AVue from '@/components/A.vue';
import BVue from '@/components/B.vue';

const aaa = ref([shallowRef(AVue), shallowRef(BVue)]);
const data_targetIndex = ref(0);
const function_addAComponent = () => {
  aaa.value.push(shallowRef(AVue));
};

const function_addBComponent = () => {
  aaa.value.push(shallowRef(BVue));
};
const function_setTargetIndex = (data_index: number) => {
  data_targetIndex.value = data_index;
};
</script>
<style scoped lang="scss"></style>
