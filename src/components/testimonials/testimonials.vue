<template>
  <v-container fluid class="ma-0">
    <v-row align-center justify-center class="px-0 mx-0">
      <v-col cols="12">
        <h1 class="google-font mb-1 mt-0" style="color:#4285F4;">Blogs:</h1>
      </v-col>
      <v-col cols="4" class="hidden-md-and-down" v-for="(item) in blogData" :key="item.link">
        <v-card style="min-height:150px; max-height:150px;">
          <v-card-title class="google-font" style="word-break:normal;">
            <a
              :href="item.link"
              rel="noreferrer"
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
              rel="noreferrer"
              target="_blank"
              class="ma-0 mt-2"
              style="text-decoration:none;"
            >{{item.authorName}}</a>
            <span style="font-size: 80%;"></span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="hidden-lg-and-up px-0 mx-0" v-for="(item,i) in blogData" :key="i">
        <v-card style="box-shadow: 0px 3px 3px #e0e0e0;">
          <v-card-title
            class="google-font"
            style="word-break:normal;font-size:120%;line-height:20px"
          >
            <a
              :href="item.link"
              rel="noreferrer"
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
              rel="noreferrer"
              target="_blank"
              class="ma-0 mt-2"
              style="text-decoration:none;"
            >{{item.authorName}}</a>
            <span style="font-size: 80%;"></span>
            <br />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="align-center justify-center px-0 mx-0">
      <v-col cols="12" md="6" class="px-0 mx-0">
        <h1 class="google-font my-2" style="color:#4285F4;">Tweets:</h1>
        <v-container fluid class="px-0 mx-0">
          <v-row class="px-0 mx-0">
            <v-col class="hidden-md-and-down">
              <v-carousel hide-delimiters cycle interval="6000" height="auto">
                <v-carousel-item
                  eager
                  v-for="(item) in tweetData"
                  :key="item.image"
                  :src="getImgUrl(item.image)"
                >
                  <v-layout fill-height align-end>
                    <v-flex>
                      <v-card color="slider-wrapper" class="pa-2 text-center">
                        <a
                          :href="item.link"
                          rel="noreferrer"
                          target="_blank"
                          class="google-font headline white--text"
                          style="font-size:180%;text-decoration: none;"
                        >{{item.authorName}}</a>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-carousel-item>
              </v-carousel>
            </v-col>
            <v-col cols="12" class="hidden-lg-and-up">
              <v-carousel hide-delimiters cycle interval="6000" height="auto" :show-arrows="false">
                <v-carousel-item
                  eager
                  v-for="(item) in tweetData"
                  :key="item.image"
                  :src="getImgUrl(item.image)"
                >
                  <v-layout fill-height align-end>
                    <v-flex>
                      <v-card color="slider-wrapper" class="pa-0 text-center">
                        <a
                          :href="item.link"
                          rel="noreferrer"
                          target="_blank"
                          class="google-font headline white--text"
                          style="font-size:90%;text-decoration: none;"
                        >{{item.authorName}}</a>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" md="6" class="px-0 mx-0">
        <h1 class="google-font my-2" style="color:#4285F4;">Posts:</h1>
        <v-container fluid class="px-0 mx-0">
          <v-row class="px-0 mx-0">
            <v-col class="hidden-md-and-down">
              <v-carousel hide-delimiters cycle interval="6000" height="auto">
                <v-carousel-item
                  eager
                  v-for="(item) in postData"
                  :key="item.image"
                  :src="getPostImgUrl(item.image)"
                >
                  <v-layout fill-height align-end>
                    <v-flex>
                      <v-card color="slider-wrapper" class="pa-2 text-center">
                        <a
                          :href="item.link"
                          rel="noreferrer"
                          target="_blank"
                          class="google-font headline white--text"
                          style="font-size:180%;text-decoration: none;"
                        >{{item.authorName}}</a>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-carousel-item>
              </v-carousel>
            </v-col>
            <v-col cols="12" class="hidden-lg-and-up">
              <v-carousel hide-delimiters cycle interval="6000" height="auto" :show-arrows="false">
                <v-carousel-item
                  eager
                  v-for="(item) in postData"
                  :key="item.image"
                  :src="getPostImgUrl(item.image)"
                >
                  <v-layout fill-height align-end>
                    <v-flex>
                      <v-card color="slider-wrapper" class="pa-0 text-center">
                        <a
                          :href="item.link"
                          rel="noreferrer"
                          target="_blank"
                          class="google-font headline white--text"
                          style="font-size:90%;text-decoration: none;"
                        >{{item.authorName}}</a>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TestimonialsData from "@/assets/data/testimonials.json";

export default {
  data() {
    return {
      blogData: TestimonialsData.blogs,
      tweetData: TestimonialsData.tweets,
      postData: TestimonialsData.posts
    };
  },
  methods: {
    getImgUrl(pic) {
      if (pic.length > 0) {
        return require("@/assets/img/tweet/" + pic);
      } else {
        return require("@/assets/img/common/avatar.png");
      }
    },
    getPostImgUrl(pic) {
      if (pic.length > 0) {
        return require("@/assets/img/post/" + pic);
      } else {
        return require("@/assets/img/common/avatar.png");
      }
    }
  }
};
</script>

