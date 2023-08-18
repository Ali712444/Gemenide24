<template>
  <div>
    <q-btn
      v-for="item in btns"
       stack
      :key="item"
      :label="item.label"
      @click="$emit(item.event)"
      :class="item.class"
      :icon="item.icon"
      :style='item.style'
    />
  </div>
</template>


<script>
export default {
  name: "button1",
  props: ["btns"],
};
</script>
