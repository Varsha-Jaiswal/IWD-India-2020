<template>
  <v-content class="pa-0">
    <!-- <comingSoon/> -->
    <!-- <card /> -->
    <v-container fluid class="my-0 py-0 hidden-sm-and-up" >
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10 >
          <HomeStartScreenMobileView />
        </v-flex>
      </v-layout>
    </v-container>

    <!-- <v-container fluid class="my-0 py-0 hidden-sm-and-up mt-3" >
      <v-layout wrap align-center justify-center row fill-height class="mx-0">
        <v-flex xs12 md10 >
          <mobileAnnouncement />
        </v-flex>
      </v-layout>
    </v-container> -->

    <!-- mobileAnnouncement -->
    <!-- :style="{'background-image':'url('+require('@/assets/img/svg/footer.svg')+')'}" style="background-size:800px;background-position: right bottom" -->

    <v-container fluid class="my-0 py-5 d-none d-sm-block" >
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10 >
          <HomeStartScreen />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="d-none d-sm-block grey lighten-4 py-5">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <stats />
        </v-flex>
      </v-layout>
    </v-container>


    <v-container fluid class="my-0 py-3 d-none d-sm-block">
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10 >
          <whatToDo />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="my-0 py-3 d-none d-sm-block">
      <v-layout wrap align-center justify-center row fill-height class="mt-0">
        <v-flex xs12 md10 >
          <pastEvents />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
  
</template>

<script>
  import HomeStartScreen from '@/components/home/HomeStartScreen'
  import whatToDo from '@/components/home/whatToDo'
  import stats from '@/components/home/stats'
  import pastEvents from '@/components/home/pastEvents'
  import HomeStartScreenMobileView from '@/components/home/HomeStartScreenMobileView'

  export default {
    components: {
      HomeStartScreen,
      whatToDo,
      stats,
      pastEvents,
      HomeStartScreenMobileView,
    }
  }
</script>
