<template>
    <div>
      <div class="text-white text-h2 q-pt-xl q-pb-lg q-pl-xl text-weight-medium ">
        Events
      </div>
      <div class="row q-pl-xl">
        <card :carddata="carddata"/>
      </div>
    </div>
</template>

<script>
import card from 'components/card.vue'
export default {
  components:{card},
  data(){
    return{
      carddata:[
        {
          src:'images/imgg.png',
          heading:'Be careful when disposing of hot ashes in the residual waste Wed 16-08-2023',
          para:'Ashes can be disposed of with household waste...Continue reading',
        },
        {
          src:'images/imgg.png',
          heading:'Be careful when disposing of hot ashes in the residual waste Wed 16-08-2023',
          para:'Ashes can be disposed of with household waste...Continue reading',
        },
        {
          src:'images/imgg.png',
          heading:'Be careful when disposing of hot ashes in the residual waste Wed 16-08-2023',
          para:'Ashes can be disposed of with household waste...Continue reading',
        },
        
       
      ]

    }
  }
}
</script>