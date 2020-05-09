<template>
  <v-container class="mx-5">
    <v-flex v-for="(day,index) in scheduleData" :key="index" class="pa-3">
      <b class="google-font" style="font-size:140%">Day {{day.day}} | {{day.date}}</b>
      <v-layout
        row
        wrap
        v-for="(item,index) in day.schedule"
        :key="index"
        style="border-radius: 0px; border:1px solid #E0E0E0;border-left:0px;border-right:0px"
      >
        <v-flex xs2 md3 class="text-right pa-3">
          <p style="font-size:210%" class="mb-0">{{item.startTime}}</p>
          <p style="font-size:100%" class="ma-0">{{item.endTime}}</p>
        </v-flex>
        <v-flex xs10 md9 class="pa-3">
          <div v-for="(sdata,key) in sessionsData" :key="key">
            <div v-if="item.session == sdata.id" class="py-3 pa-3">
              <v-layout row wrap>
                <v-flex xs12 class="px-3" style="border-left:2px solid black">
                  <p class="google-font mb-0" style="font-size:130%">{{sdata.title}}</p>
                  <p style="font-size:80%">
                    <span v-for="(sd,j) in sdata.speakers" :key="j">
                      <span v-for="(sp,i) in speakerData" :key="i">
                        <span v-if="sp.id == sd" class="google-font mb-0" style="font-size:110%">
                          {{ sp.name }}
                          <span v-if="j < sdata.speakers.length-1">|</span>
                        </span>
                      </span>
                    </span>
                  </p>

                  <v-chip class="ml-1 mr-1" dark color="#4285F4" small label>{{sdata.track}}</v-chip>
                  <v-chip class="ml-1 mr-1" dark color="#00BFA5" small label>{{sdata.format}}</v-chip>
                </v-flex>
              </v-layout>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
import scheduleData from "@/assets/data/schedule.json";
import sessionsData from "@/assets/data/sessions.json";
import speakerData from "@/assets/data/speaker.json";
export default {
  data: () => ({
    scheduleData: scheduleData,
    sessionsData: sessionsData,
    speakerData: speakerData,
    speakers: []
  }),
  methods: {
    getImgUrl(pic) {
      if (pic > 0) {
        return require("@/assets/img/speakers/" + pic);
      } else {
        return require("@/assets/img/common/avatar.png");
      }
    }
  },
  filters: {
    summary: (val, num) => {
      if (val.length > num) {
        return val.substring(0, num) + "...";
      } else {
        return val;
      }
    }
  }
};
</script>
