<template>
  <div>
    <div style="background-color: #454545">
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
          <button1 :btns="btns1" />
          <div class="text-white text-h2 q-pt-xl text-weight-medium">
            Events
          </div>
          <div
            style="font-size: 32px; line-height: 36px"
            class="bg-white text-black q-mt-lg q-px-xl q-py-lg text-weight-light"
          >
            City tours through historic Oberwölz
          </div>
          <button1 :btns="btns2" />
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
            <div style="font-size: 20px">Announcement</div>
            <div style="font-size: 20px" class="text-weight-light">
              The federal housing and heating subsidy can be applied for online
              between August 7, 2023 and October 31, 2023. The online form will
              be available from August 7, 2023 on the social server at <br />
              www.soziales.steiermark.at. People without internet access can
              apply for this at the citizens' service of the municipality of
              Oberwölz.
            </div>
          </div>

          <div class="bg-white text-black q-mt-lg q-px-xl q-py-lg">
            <div
              style="font-size: 30px; line-height: 36px"
              class="text-weight-light"
            >
              Job advertisement - administrative assistant for the elementary
              school and middle school in Oberwölz
            </div>
            <div style="font-size: 20px">Announcement</div>
          </div>
          <button1 :btns="btns3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import button1 from "components/button1.vue";
export default {
  components: { button1 },
  data() {
    return {
      btns1: [
        {
          to:'../news',
          label: "show more",
          class: "q-my-md",
          style:
            " font-size: 22px;line-height: 66px;width: 300px;color: white;background: linear-gradient(180deg, #76b500 0, #6fab00);",
        },
      ],
       btns2: [
        {
          to:'../events',
          label: "show more",
          class: "q-my-md",
          style:
            " font-size: 22px;line-height: 66px;width: 300px;color: white;background: linear-gradient(180deg, #76b500 0, #6fab00);",
        },
      ],
       btns3: [
        {
          to:'../noticeboard',
          label: "show more",
          class: "q-my-md",
          style:
            " font-size: 22px;line-height: 66px;width: 300px;color: white;background: linear-gradient(180deg, #76b500 0, #6fab00);",
        },
      ],
    };
  },
};
</script>
