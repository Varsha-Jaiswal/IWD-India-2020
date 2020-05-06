<template>
    <v-container fluid class="my-4">
        <v-layout wrap align-center justify-center row fill-height class="py-0">
            <v-flex xs12 sm12 md7 lg7 xl7 class="px-5 py-3">
                <v-img
                    :src="require('@/assets/img/logo.png')"
                    :lazy-src="require('@/assets/img/logo.png')"
                    width="10vh">
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
                <!-- <p class="google-font mb-1" style="font-weight: 350;color: #616161;font-size:300%"><b>DevFest  
                    <span style="color: #1a73e8;">Punjab</span>.</b> 
                </p> -->
               
                <p class="google-font mt-5 mb-0" style="font-size:300%;color:#0097a7;font-weight:300">International Women's Day 2020</p>
                <p class="google-font mb-3" style="font-size:140%;margin-top:-12px">By GDG WTM Jalandhar</p>

                <p class="google-font mb-0" style="font-size:110%">International Women's day have been celebrated since years. With devotion to women, we Women Techmakers, Jalandhar along with Google Developers Group, Jalandhar want to accomplish a huge tech revolution with growing women in tech. Since, the era of rationalised culture impacted doting together in the work field. </p>

                <p class="google-font my-0 my-3 mt-5" >
                    <span style="font-size:120%;background:#0097a7;color:white;border:1px solid #0097a7;border-radius:7px;padding: 8px 70px" class="">
                        #TogetherWeRise
                    </span>
                </p> 
                <br>
                
                
                <p class="google-font mt-5 mb-0" style="font-size:200%;color:#0097a7;font-weight:300">March 29, 2020</p>
                <p class="google-font mb-3" style="font-size:140%;margin-top:-12px">Pyramid College Of Business & Technology</p>


                <p class="google-font mt-5" style="font-size:110%;color:#9e9e9e">
                    <span v-for="(item,i) in chapterDetails.ChapterHashTags" :key="i">
                        #{{item}} &nbsp;
                    </span>
                </p>

                <!-- <v-btn aria-label="Registration Button" disabled  target="_blank" class="ma-0 google-font elevation-1" color="#1a73e8" style="text-transform: capitalize;border-radius:5px;color:white">Registration Closed</v-btn> -->

                
            </v-flex>
           <v-flex xs12 sm12 md3 lg5 xl5 class="text-xs-center d-none d-sm-block" >
                <v-img
                    :src="require('@/assets/img/home2.png')"
                    :lazy-src="require('@/assets/img/home2.png')"
                    width="100%">
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
            </v-flex> 
        </v-layout>
    </v-container>
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails
        }
    },
}
</script>
