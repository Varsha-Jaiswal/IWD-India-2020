<template>
  <v-slide-y-reverse-transition>
    <v-container fluid class="mt-5" v-show="show">
      <v-layout wrap align-center justify-center row fill-height class="pa-3">
        <v-flex xs12 md2 lg2 class="pa-3 hidden-sm-and-down">
          <v-img
            width="100%"
            :src="require('@/assets/img/team-header.png')"
            :lazy-src="require('@/assets/img/team-header.png')"
          >
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
        </v-flex>
        <v-flex xs12 md8 lg8 class>
          <p
            class="google-font mt-2"
            style="color:#37474F;font-size:150%"
          >Our goal as a team is to empower women to thrive in tech and nurture communities.</p>
          <p class="mt-0 google-font subheading">
           We know that when women support each other, incredible things happen. We volunteer to encourage, elevate and support women and underrepresented groups in the tech industry.
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
