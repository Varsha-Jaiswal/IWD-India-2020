<template>
  <v-container>
    <v-layout class="px-3">
      <v-row class="align-center justify-center">
        <v-col cols="12">
          <h1 class="google-font mb-2" style="color:#4285F4;">Blogs:</h1>
        </v-col>
        <v-col cols="4" class="hidden-md-and-down" v-for="(item,i) in blogData" :key="i">
          <v-card style="box-shadow: 0px 3px 3px 3px #e0e0e0; min-height:120px; max-height:120px;">
            <v-card-title class="google-font" style="word-break:normal;">
              <a
                :href="item.link"
                target="_blank"
                class="mt-1 mb-0"
                style="text-decoration:none;"
              >{{item.blogTitle}}</a>
            </v-card-title>
            <v-card-subtitle>{{item.date}}</v-card-subtitle>
            <v-card-text style="font-size:90%;">
              - by
              <a
                :href="item.authorProfileURL"
                target="_blank"
                class="ma-0 mt-2"
                style="text-decoration:none;"
              >{{item.authorName}}</a>
              <span style="font-size: 80%;"></span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="hidden-lg-and-up" v-for="(item,i) in blogData" :key="i">
          <v-card style="box-shadow: 0px 3px 3px #e0e0e0;">
            <v-card-title class="google-font" style="word-break:normal;">
              <a
                :href="item.link"
                target="_blank"
                class="mt-1 mb-0"
                style="text-decoration:none;"
              >{{item.blogTitle}}</a>
            </v-card-title>
            <v-card-subtitle>{{item.date}}</v-card-subtitle>
            <!-- <br /> -->
            <v-card-text style="font-size:90%;">
              - by
              <a
                :href="item.authorProfileURL"
                target="_blank"
                class="ma-0 mt-2"
                style="text-decoration:none;"
              >{{item.authorName}}</a>
              <span style="font-size: 80%;"></span>
              <br />
            </v-card-text>
            <!-- </div> -->
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
    <v-layout class="px-3">
      <v-row class="align-center justify-center">
        <v-col cols="12" class="mt-5">
          <h1 class="google-font mb-2" style="color:#4285F4;">Tweets:</h1>
        </v-col>
        <v-col cols="10" class="text-center">
          <v-carousel hide-delimiters cycle interval="6000">
            <v-carousel-item v-for="(item,j) in tweetData" :key="j" :src="getImgUrl(item.image)">
              <v-layout fill-height align-end>
                <v-flex xs12>
                  <v-card color="slider-wrapper" class="pa-2">
                    <a
                      :href="item.link"
                      target="_blank"
                      class="google-font headline white--text"
                      style="font-size:180%"
                    >{{item.authorName}}</a>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import TestimonialsData from "@/assets/data/testimonials.json";

export default {
  data() {
    return {
      blogData: TestimonialsData.blogs,
      tweetData: TestimonialsData.tweets
    };
  },
  methods: {
    getImgUrl(pic) {
      if (pic.length > 0) {
        return require("@/assets/img/tweet/" + pic);
      } else {
        return require("@/assets/img/common/avatar.png");
      }
    }
  }
};
</script>

