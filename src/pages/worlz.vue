<template>
  <div>
    <div class="row">
      <div class="col-10">
        <div
          class="q-py-xl text-weight-bold text-h3 q-pl-xl"
          style="color: #454545"
        >
          UPPER WÖLZ
        </div>
        <div style="background-color: #454545; padding-bottom:182px; ">
          <div class="row q-pl-xl q-py-xl">
            <div style="padding-right: 300px" class="col-6">
              <div class="text-white text-h2 text-weight-medium">news</div>
              <div
                style="font-size: 32px; line-height: 36px"
                class="bg-white text-black q-mt-lg q-px-xl q-py-lg text-weight-light"
              >
                Be careful when disposing of hot ashes in the residual waste
                <br />
                Ashes can be disposed of with household waste, ...
                <br />Continue reading
              </div>
              <button1 :btns="btns" />
              <div class="text-white text-h2 q-pt-xl text-weight-medium">Events</div>
              <div
                style="font-size: 32px; line-height: 36px"
                class="bg-white text-black q-mt-lg q-px-xl q-py-lg text-weight-light"
              >
               City tours through historic Oberwölz
              </div>
              <button1 :btns="btns" />
            </div>
            

            <div style="padding-right: 300px" class="col-6">
               <div class="text-white text-h2 text-weight-medium">Notice Board</div>
              <div class="bg-white text-black q-mt-lg q-px-xl q-py-lg">
                <div
                  style="font-size: 33px; line-height: 36px"
                  class="text-weight-light"
                >
                  Federal housing and heating subsidy
                </div>
                <div style="font-size: 20px ">Announcement</div>
                <div style="font-size: 20px" class="text-weight-light">
                  The federal housing and heating subsidy can be applied for
                  online between August 7, 2023 and October 31, 2023. The online
                  form will be available from August 7, 2023 on the social
                  server at <br> www.soziales.steiermark.at. People without internet
                  access can apply for this at the citizens' service of the
                  municipality of Oberwölz.
                </div>
              </div>

              <div class="bg-white text-black q-mt-lg q-px-xl q-py-lg">
                <div
                  style="font-size: 30px; line-height: 36px"
                  class="text-weight-light"
                >
                  Job advertisement - administrative assistant for the
                  elementary school and middle school in Oberwölz
                </div>
                <div style="font-size: 20px">Announcement</div>
              </div>
              <button1 :btns="btns" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-2">
        <button1 :btns="btns5"/>
      </div>
    </div>
  </div>
</template>

<script>
import button1 from 'components/button1.vue'
export default {
  components:{button1},
  data(){
    return{
      btns:[
        {
          label:'show more',
          class:'q-my-md',
           style:' font-size: 22px;line-height: 66px;width: 300px;color: white;background: linear-gradient(180deg, #76b500 0, #6fab00);'
        }
      ],
      btns5:[
        {
          icon:'home',
          label:'Home',
          style:' font-size: 28px;line-height: 66px;width: 300px;color: white;background: linear-gradient(180deg, #76b500 0, #6fab00); padding-top:50px;padding-bottom:50px;'
        },
         {
          icon:'campaign',
          label:'News',
          style:' font-size: 28px;line-height: 66px;width: 300px;color: white;background: linear-gradient(180deg, #76b500 0, #6fab00); padding-top:50px;padding-bottom:50px;'
        },
         {
          icon:'calendar_month',
          label:'Events',
          style:' font-size: 28px;line-height: 76px;width: 300px;color: white;background: linear-gradient(180deg, #76b500 0, #6fab00); padding-top:50px;padding-bottom:50px;'
        },
         {
          icon:'photo_camera',
          label:'NewsPaper',
          style:' font-size: 28px;line-height: 66px;width: 300px;color: white;background: linear-gradient(180deg, #76b500 0, #6fab00); padding-top:50px;padding-bottom:50px;'
        },
         {
          icon:'foundation',
          label:'Notice Board',
          style:' font-size: 28px;line-height: 66px;width: 300px;color: white;background: linear-gradient(180deg, #76b500 0, #6fab00); padding-top:50px;padding-bottom:50px;'
        },
      ],
    }
  }
};
</script>
