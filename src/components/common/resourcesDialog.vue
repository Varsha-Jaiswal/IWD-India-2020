<template>
  <v-dialog v-model="dialog" width="600">
    <template v-slot:activator="{ on }">
      <div v-on="on" style="cursor: pointer;">
        <div
          style="border-radius: 5px;border: 1px solid rgb(224, 224, 224);max-height: 200px;border-left: 8px solid rgb(66, 133, 244) !important;box-shadow: 0px 3px 5px #e9e9e9;"
          class="ma-1 hidden-sm-and-down"
        >
          <div class="pa-3 card-light" style="cursor: pointer;">
            <p class="google-font mt-2 mb-0" style="font-size: 90%;">{{data.vdata.date}}</p>
            <p class="google-font ma-0 mt-0" style="font-size: 120%;">{{data.vdata.track}}</p>
            <p class="mb-0 mt-2 google-font" style="color: rgb(26, 115, 232);">See More</p>
          </div>
        </div>
        <div
          style="border-radius: 5px; border:1px solid #e0e0e0;min-height:auto;"
          class="ma-1 pa-5 d-md-none d-lg-none d-xl-none"
        ></div>
      </div>
    </template>
    <v-card color v-if="dialog">
      <v-card-title
        class="px-5 py-5 grey lighten-4 google-font"
        style="color:#4285F4;word-break:normal;font-size:150%"
      >{{data.vdata.track}}</v-card-title>
      <v-card-text class="pa-5">
        Day {{data.vdata.day}} - {{data.vdata.date}}
        <p class="google-font mt-3" style="font-size:105%">{{data.vdata.description}}</p>
        <v-btn
          :href="data.vdata.link"
          target="_blank"
          rounded
          color="#fff"
          style="text-transform: capitalize;border-radius:5px;color: white;font-size:15px;background-color:#4285F4"
          class="ml-0 google-font"
        >Youtube Livestream</v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import SpeakersDetails from "@/assets/data/speaker.json";
export default {
  props: {
    data: {
      vdata: []
    }
  },
  data() {
    return {
      dialog: false,
      date: "",
      SpeakersDetails: SpeakersDetails
    };
  },
  methods: {
    getImgUrl(pic) {
      if (pic.length > 0) {
        return require("@/assets/img/speakers/" + pic);
      } else {
        return require("@/assets/img/common/avatar.png");
      }
    }
  },
  filters: {
    summary: (val, num) => {
      if (val.length > num) {
        return val.substring(0, num) + "..";
      } else {
        return val;
      }
    }
  }
};
</script>
