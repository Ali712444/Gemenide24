<template>
  <div>
    <div class="background">
      <div class="row q-pl-xl  q-py-xl">
        <div class="col-6 q-pr-300 ">

          <!--  <================>NEWS<======================>-->

          <div class=" font-size-56 text-white">News</div>
          <div
            class=" card bg-white font-size-30 q-px-xl q-py-lg "
          >
            Blood donations on September 6, 2023 in Oberwölz
          </div>
          <button1 :btns="btns1"/>

          <!--  <================>EVENTS<======================>-->

          <div class="text-white font-size-56 q-pt-xl">
            Events
          </div>
          <div

            class="bg-white card  font-size-30 q-px-xl q-py-lg text-weight-light"
          >
            City tours through historic Oberwölz
          </div>
          <button1 :btns="btns2"/>
        </div>

        <div class="col-6 q-pr-300 ">

          <!--  <================>NOTICE BOARD<======================>-->

          <div class="text-white font-size-56 ">notice Board</div>
          <div class=" card bg-white text-black q-px-xl q-py-lg">
            <div
              class=" textcolor text-weight-light font-size-33 "
            >
              Federal housing and heating subsidy
            </div>
            <div class=" textcolor font-size-20">Announcement</div>
            <div class=" textcolor text-weight-light font-size-20 ">
              The federal housing and heating subsidy can be applied for online
              between August 7, 2023 and October 31, 2023. The online form will
              be available from August 7, 2023 on the social server at <br/>
              www.soziales.steiermark.at. People without internet access can
              apply for this at the citizens' service of the municipality of
              Oberwölz.
            </div>
          </div>

          <div class=" card bg-white text-black q-mt-lg q-px-xl q-py-lg">
            <div
              class=" textcolor text-weight-thin font-size-30"
            >
              Job advertisement - administrative assistant for the elementary
              school and middle school in Oberwölz
            </div>
            <div class="font-size-20 textcolor ">Announcement</div>
          </div>
          <button1 :btns="btns3"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import button1 from "components/button1.vue";

export default {
  components: {button1},
  data() {
    return {
      btns1: [
        {
          to: '../news',
          label: "show more",
          class: " style q-my-md text-capitalize text-weight-bolder"
        },
      ],
      btns2: [
        {
          to: '../events',
          label: "show more",
          class: " style q-my-md text-capitalize text-weight-bolder",
        },
      ],
      btns3: [
        {
          to: '../noticeboard',
          label: "show more",
          class: " style q-my-md text-capitalize text-weight-bolder",
        },
      ],
    };
  },
};
</script>

<style>
.style {
  font-size: 22px;
  line-height: 66px;
  width: 300px;
  color: white;
  background: linear-gradient(180deg, #76b500 0, #6fab00);
}
.card {
  border-radius: 5px;
  width: 472px;
  color: #454545;
}
.textcolor {
  color: #454545;
}
.background {
  background-color: #454545
}
</style>
