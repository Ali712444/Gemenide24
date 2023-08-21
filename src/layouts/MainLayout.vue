<template>
  <div class="row">
    <div class="col-10">
      <div
        class="q-py-xl text-weight-bold text-h3 q-pl-xl"
        style="color: #454545"
      >
        UPPER WÖLZ
      </div>
      <div style="background-color: #454545;">
        <q-layout view="lHh Lpr lFf">
          <q-page-container>
            <router-view />
          </q-page-container>
        </q-layout>
      </div>
    </div>
    <div class="col-2">
      <button1 :btns="btns5" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
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
          to:'../worlz',
          icon: "home",
          label: "Home",
          style:
            " font-size: 28px;line-height: 66px;width: 300px;color: white;background: linear-gradient(180deg, #76b500 0, #6fab00); padding-top:50px;padding-bottom:50px;",
        },
        {
           to:'../news',
          icon: "campaign",
          label: "News",
          style:
            " font-size: 28px;line-height: 66px;width: 300px;color: white;background: linear-gradient(180deg, #76b500 0, #6fab00); padding-top:50px;padding-bottom:50px;",
        },
        {
           to:'../events',
          icon: "calendar_month",
          label: "Events",
          style:
            " font-size: 28px;line-height: 76px;width: 300px;color: white;background: linear-gradient(180deg, #76b500 0, #6fab00); padding-top:50px;padding-bottom:50px;",
        },
        {
           to:'../newspaper',
          icon: "photo_camera",
          label: "NewsPaper",
          style:
            " font-size: 28px;line-height: 66px;width: 300px;color: white;background: linear-gradient(180deg, #76b500 0, #6fab00); padding-top:50px;padding-bottom:50px;",
        },
        {
           to:'../noticeboard',
          icon: "foundation",
          label: "Notice Board",
          style:
            " font-size: 28px;line-height: 66px;width: 300px;color: white;background: linear-gradient(180deg, #76b500 0, #6fab00); padding-top:50px;padding-bottom:50px;",
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
