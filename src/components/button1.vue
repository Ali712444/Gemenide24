<template>
  <div>
    <q-btn
      :to="item.to"
      v-for="item in btns"
      stack
      :key="item"
      :label="item.label"
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







