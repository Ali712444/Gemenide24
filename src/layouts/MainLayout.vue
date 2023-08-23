<template>
  <div class="row">
    <div style="width:1536px;" class="col-10">
      <div
        class="q-pt-lg q-pb-xl text-weight-bolder"
        style="color: #454545;font-size: 45px; padding-left: 64px; height: 152px"
      >
        OBERWÖLZ
      </div>
      <div style="background-color: #454545;">
        <q-layout view="lHh Lpr lFf">
          <q-page-container>
            <router-view/>
          </q-page-container>
        </q-layout>
      </div>
    </div>
    <div class="col-2">
      <button1 :btns="btns5"/>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import EssentialLink from "components/EssentialLink.vue";
import button1 from "components/button1.vue";

const linksList = [
  {

    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",
  components: {
    EssentialLink,
    button1,
  },

  data() {
    const leftDrawerOpen = ref(false);

    return {
      btns5: [
        {
          class: ' aaa text-capitalize text-weight-bold  ',
          to: '../worlz',
          icon: "img:/images/Home.svg",
          label: "Home page",
        },
        {
          class: ' aaa text-capitalize text-weight-bold',
          to: '../news',
          icon: "img:/images/speaker2.svg",
          label: "News"
        },
        {
          class: ' aaa text-capitalize text-weight-bold',
          to: '../events',
          icon: "img:/images/calander2.svg",
          label: "Events",
        },
        {
          class: ' aaa text-capitalize text-weight-bold',
          to: '../newspaper',
          icon: "img:/images/aaa2.svg",
          label: "NewsPaper",
        },
        {
          class: ' aaa text-capitalize text-weight-bold',
          to: '../noticeboard',
          icon: "img:/images/bbb2.svg",
          label: "Notice Board",
        },
      ],

      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style>
.aaa {
  border: 1px solid #198653;
  font-size: 25px;
  line-height: 66px;
  color: white;
  background: linear-gradient(180deg, #76b500 0, #6fab00);
  padding-top: 50px;
  padding-bottom: 50px;
  width: 384px;
  height: 211;

}
</style>



