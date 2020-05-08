<template>
  <v-slide-y-reverse-transition>
    <v-container fluid class="mt-5" v-show="show">
      <v-layout wrap align-center justify-center row fill-height class="pa-3">
        <v-flex xs12 md2 lg2 class="pa-3 hidden-sm-and-down">
          <v-img
            width="100%"
            :src="require('@/assets/img/svg/getting-started_bg.svg')"
            :lazy-src="require('@/assets/img/svg/getting-started_bg.svg')"
          >
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
        </v-flex>
        <v-flex xs12 md8 lg8 class>
          <span
            class="pa-2 google-font"
            style="border-radius:8px;background-color:#FFEBEE;color:#B71C1C;font-size:150%"
          >Team</span>
          <p
            class="google-font mt-2"
            style="color:#37474F;font-size:150%"
          >Our goal as a team is to see every single woman flourish in whatever technology they wish.</p>
          <p class="mt-0 google-font subheading">
            We know that
            <b>when women support each other, incredible things happen,</b> so our major objective is to encourage,elevate and support each and every woman in technology and boost the amount of female participation.
            We have this dedicated core team, competent enough, to take the responsibility for the accomplishment of this event.
          </p>
          <v-divider></v-divider>
        </v-flex>
        <v-flex xs12 md10 lg10 wrap row fill-height class="ma-0 pa-0 mt-3 hidden-sm-and-up">
          <mobileTeam />
        </v-flex>

        <v-flex
          xs12
          md10
          lg10
          wrap
          align-center
          justify-center
          row
          fill-height
          class="mt-3 d-none d-sm-block"
        >
          <organizingTeam />
        </v-flex>
      </v-layout>
    </v-container>
  </v-slide-y-reverse-transition>
</template>

<script>
export default {
  components: {
    organizingTeam: () => import("@/components/team/organizingTeam"),
    mobileTeam: () => import("@/components/team/mobileTeam")
  },
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
  }
};
</script>
