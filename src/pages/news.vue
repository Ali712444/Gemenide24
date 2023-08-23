<template>
  <div>
    <div class="text-white font-size-56  q-pt-xl  q-pl-xl text-weight-medium ">
      News
    </div>
    <q-scroll-area class="scrollarea">
      <div class="q-py-xs">
        <div class="row q-pl-lg">
          <card :carddata="carddata" @click="this.$router.push('../worlz')"/>
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>
<script>
import card from 'components/card.vue'

export default {
  components: {card},
  data() {
    return {
      carddata: [
        {
          src: 'images/imgg.png',
          heading: 'Be careful when disposing of hot ashes in the residual waste Wed 16-08-2023',
          para: 'Ashes can be disposed of with household waste...Continue reading',
        },
        {
          src: 'images/imgg.png',
          heading: 'Be careful when disposing of hot ashes in the residual waste Wed 16-08-2023',
          para: 'Ashes can be disposed of with household waste...Continue reading',
        },
        {
          src: 'images/imgg.png',
          heading: 'Be careful when disposing of hot ashes in the residual waste Wed 16-08-2023',
          para: 'Ashes can be disposed of with household waste...Continue reading',
        },
      ]
    }
  },
  methods: {
    move() {
      console.log("dfsdfds")
    }
  },
}
</script>

<style>
.scrollarea {
  height: 700px;
  max-width: 100%;
}
</style>
