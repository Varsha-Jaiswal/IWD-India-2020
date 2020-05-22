<template>
  <v-container>
    <div
      style="border-radius: 5px;border: 1px solid rgb(224, 224, 224);max-height: 170px;min-height:170px;border-left: 8px solid rgb(66, 133, 244) !important;box-shadow: 0px 3px 8px #e9e9e9;"
      class="ma-1 hidden-sm-and-down mb-0"
    >
      <div class="pa-3 card-light" style="cursor: pointer;">
        <p class="google-font mt-2 mb-0" style="font-size: 90%;">
          {{data.vdata.date}}
          <br />02:00 - 05:00 PM IST
        </p>
        <p class="google-font ma-0 mt-2 mb-5" style="font-size: 110%;">{{data.vdata.track}}</p>
        <v-btn
          :href="data.vdata.link"
          target="_blank"
          rounded
          outlined
          style="text-transform: capitalize;border-radius:5px;color: #FF0000;font-size:15px;"
          class="ml-0 google-font"
        >
          <v-icon size="25px" class="mr-2">mdi-access-point</v-icon>Watch Now
        </v-btn>
      </div>
    </div>
    <div
      style="border-radius: 5px; border:1px solid #e0e0e0;min-height:auto;text-align: center"
      class="ma-1 pa-5 d-md-none d-lg-none d-xl-none"
    >
      <div class="pa-0 card-light" style="cursor: pointer;">
        <p class="google-font mt-2 mb-0" style="font-size: 90%;">
          {{data.vdata.date}}
          <br />02:00 - 05:00 PM IST
        </p>
        <p class="google-font ma-0 mt-2 mb-5" style="font-size: 110%;">{{data.vdata.track}}</p>
        <v-btn
          :href="data.vdata.link"
          target="_blank"
          rounded
          outlined
          style="text-transform: capitalize;border-radius:5px;color: #FF0000;font-size:15px;"
          class="ml-0 google-font"
        >
          <v-icon size="25px" class="mr-2">mdi-access-point</v-icon>Watch Now
        </v-btn>
      </div>
    </div>
  </v-container>
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
