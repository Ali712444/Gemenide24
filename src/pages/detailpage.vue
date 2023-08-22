<template>
  <div>
    <div class="text-white text-h2 q-pt-xl q-pb-lg q-pl-xl text-weight-medium ">
      Events
    </div>
    <q-card class="my-card q-pt-sm">
      <img src="/images/imgg.png">
      <q-card-section class="q-px-xl q-pt-lg q-pb-xl">
        <div class="text-h6">Be careful when disposing of hot ashes in the residual waste</div>
        <div class="text-h4 text-weight-thin">
          Ash can be disposed of with household waste, but if the hot ash is simply thrown into the garbage can without the appropriate cooling period, there is an acute risk of fire. As was the case recently at the garbage collection point in Lachtal. Although most consumers are well aware that there is a risk associated with the hot ash, the time it takes for the ash to cool completely is usually underestimated. Experts advise a period of 48 hours for the ashes to cool. The container also plays a role. The safest way is to keep hot ashes in a fireproof metal bucket and keep them there until they have completely cooled down. Also, be careful where you store your ashes at home. Larger fires have repeatedly broken out in the past, caused by improper storage of the ashes.
        </div>
        <div>
          <q-btn label="PDF" color="green" @click="alert = true" />

          <q-dialog v-model="alert">
            <q-card>
              <div>
                <PDFViewer
                  :source="url"
                  style="height: 700px; width: 550px"
                  @download="handleDownload"
                />
              </div>
              <q-card-actions align="right">
                <q-btn flat label="Cancel" color="green" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>


        </div>
      </q-card-section>
    </q-card>
    <div class="row justify-between q-mx-xl ">
      <div>
        <button1 :btns="btns" />
      </div>
      <div>
        <button1 :btns="btns1" />
      </div>
    </div>
  </div>
</template>

<script>
import button1 from "components/button1.vue";
import PDFViewer from "pdf-viewer-vue";

export default {
  components:{PDFViewer, button1},
  data(){
    return {
      alert: false,
      url: 'http://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf',
      btns:[
        {
          label: "back",
          class: "q-my-md",
          style:
            " font-size: 22px;line-height: 66px;width: 300px;color: white;background: linear-gradient(180deg, #76b500 0, #6fab00);",
        },
      ],
      btns1:[
        {
          label: "before",
          label: "before",
          class: "q-my-md",
          style:
            " font-size: 22px;line-height: 66px;width: 300px;color: white;background: linear-gradient(180deg, #76b500 0, #6fab00);",
        },
      ]
    }
  }
}

</script>
