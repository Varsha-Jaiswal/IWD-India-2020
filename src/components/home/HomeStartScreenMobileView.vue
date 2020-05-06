<template>
  <div>
  <br>
  <v-card
    flat
    class="mx-auto my-1 elevation-0"
    max-width="374"
    height="90%"
    style="border:1px solid #EEEEEE;border-radius:8px"
  >
    <!-- <v-img
      height="250"
      :src="require('@/assets/img/main.webp')"
      :lazy-src="require('@/assets/img/main.webp')"
    ></v-img> -->
                <v-img
                    :src="require('@/assets/img/logo.png')"
                    :lazy-src="require('@/assets/img/logo.png')"
                    width="10vh" class="ml-3 mt-5">
                    <v-layout
                        slot="placeholder"
                        fill-height
                        align-center
                        justify-center
                        ma-0
                    >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                </v-img>

    <v-card-title class="google-font">International Women's Day 2020</v-card-title>
    <v-card-text>
      <div class="my-0 subtitle-1 black--text google-font">
        GDG Jalandhar
      </div>

      <div class="google-font">International Women's day have been celebrated since years. With devotion to women, we Women Techmakers, Jalandhar along with Google Developers Group, Jalandhar want to accomplish a huge tech revolution with growing women in tech. Since, the era of rationalised culture impacted doting together in the work field.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text class="google-font">
      <div class="subtitle-1 text--primary">More Details - Coming Soon...</div>
      <!-- <div class="subtitle-2 text--primary">The LaLit, Chandigarh</div> -->
      <v-chip-group
        small
      >
        <v-chip href="https://twitter.com/hashtag/devfestpunjab" target="_blank">#IWDJalandhar</v-chip>
        <v-chip href="https://twitter.com/hashtag/devfest" target="_blank">#IWD</v-chip>
        <!-- <v-chip small outlined>#GDGJalandhar</v-chip>
        <v-chip small outlined>#GDGChandigarh</v-chip> -->
      </v-chip-group>
    </v-card-text>

    <v-card-actions class="text-center px-4 mb-5">
        <!-- <p class="google-font">Registration Comming Soon...</p> -->
      <v-btn
        dark
        disabled
        target="_blank"
        color="primary"
        aria-label="Registration Button"
      >
        Registration Closed 
      </v-btn>
      <!-- <v-btn
        text
        color="deep-purple accent-4"
      >
        Learn More
      </v-btn> -->
    </v-card-actions>
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
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>
