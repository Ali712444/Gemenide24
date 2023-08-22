<template>
<div v-for="item in carddata" :key="item" class="col-4 q-px-lg  q-pt-xl" >
     <q-card @click="this.$router.push('../detailpage')" class="my-card q-pt-sm">
      <img :src="item.src">
      <q-card-section class="q-px-xl q-pt-lg q-pb-xl">
        <div class="text-h6">{{item.heading}}</div>
        <div class="text-h4 text-weight-thin">{{item.para}}</div>
      </q-card-section>
    </q-card>
</div>
</template>

<script>
export default {
    name:'card',
    props:['carddata']
}
</script>
