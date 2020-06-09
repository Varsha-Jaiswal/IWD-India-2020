<template>
  <v-app>
     <v-snackbar
        v-model="snackWithButtons"
        :timeout="timeout"
        bottom
        left
        class="snack"
      >
        {{ snackWithBtnText }}
        <v-spacer />
        <v-btn
          dark
          text
          color="#00f500"
          @click.native="refreshApp"
        >
          {{ snackBtnText }}
        </v-btn>
        <v-btn
          icon
          @click="snackWithButtons = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
    </v-snackbar>
    <CoreToolbar :color="$route.meta.color" name="Toolbar"/>
    <CoreDrawer/>
    <CoreView />
    <CoreFooter class="pa-0"/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    CoreToolbar:()=>import('@/components/common/toolbar'),
    CoreView:()=>import('@/components/common/view'),
    CoreFooter:()=>import('@/components/common/footer'),
    CoreDrawer:()=> import('@/components/common/drawer')
  },
  data: () => ({
    refreshing: false,
    registration: null,
    snackBtnText: '',
    snackWithBtnText: '',
    snackWithButtons: false,
    timeout: 6000,
  }),
   created() {
    // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true });
    // Refresh all open app tabs when a new service worker is installed.
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return;
        this.refreshing = true;
      window.location.reload();
    });
  },
  methods:{
    showRefreshUI(e) {
      this.registration = e.detail;
      this.snackBtnText = 'Refresh';
      this.snackWithBtnText = 'New version available!';
      this.snackWithButtons = true;
    },
    refreshApp() {
      this.snackWithButtons = false;
      if (!this.registration || !this.registration.waiting) { return; }
      this.registration.waiting.postMessage('skipWaiting');
    }
  }
}
</script>

<style scoped>
.snack >>> .v-snack__content {
  padding-right: 16px;
}
</style>