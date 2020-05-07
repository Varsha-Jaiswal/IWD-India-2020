<template>
  <div>
    <br />
    <v-card flat class="mx-auto my-0 elevation-0 text-center" max-width height="90%">
      <v-img
        :src="require('@/assets/img/home2.png')"
        :lazy-src="require('@/assets/img/home2.png')"
        width="100%"
      >
        <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-layout>
      </v-img>

      <v-card-title
        class="google-font"
        style="font-size:190%;color:#0097a7;margin-top:-10px"
      >International Women's Day 2020</v-card-title>
      <v-card-text>
        <div
          class="my-0 black--text google-font mb-5"
          style="font-size:150%"
        >By Women Techmakers India</div>
        <div
          class="google-font"
          style="font-size:120%"
        >International Women's Day (IWD) is marked on March 8th every year. In different regions, the focus of celebrations ranges from general respect and appreciation for women to a celebration of women's economic, political, and social achievements.</div>

          <p class="google-font my-5">
          <span
            style="font-size:120%;background:#0097a7;color:white;border:1px solid #0097a7;border-radius:7px;padding: 8px 70px"
            class
          >#TogetherWeRise</span>
        </p>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
    </v-card>

    <v-flex xs12>
      <v-img
        height="1x50"
        :src="require('@/assets/img/svg/footer.svg')"
        :lazy-src="require('@/assets/img/svg/footer.svg')"
      ></v-img>
    </v-flex>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>
