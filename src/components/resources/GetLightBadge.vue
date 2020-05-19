<template>
  <v-container id="light" class="text-center">
    <v-row>
      <v-col md6 lg6 xs12 class="google-font" style="font-size:130%;">Light Theme</v-col>
    </v-row>
    <v-row class="pa-0">
      <canvas id="canvas2"></canvas>
      <div style="display:none;">
        <img id="source2" src="@/assets/img/light attendee filter.png" width="500px" height="500px" />
      </div>
      <div style="width:100%" v-if="!image">
        <p
          class="pt-3"
          style="font-size: 12px;color: rgba(0, 0, 0, 0.87);"
        >Please provide an image in which you are in the center.</p>
      </div>
    </v-row>
    <br />
    <v-row>
      <v-col>
        <v-btn
          color="#4285F4"
          outlined
          @click="uploadImage()"
          class="ma-0 google-font elevation-0 mr-2"
          style="text-transform: capitalize;border-radius: 5px;color: #4285F4; font-size:15px; padding: 7px;"
        >{{ image ? 'Upload Another' : 'Upload'}}</v-btn>
        <input id="image1" type="file" accept="image/*" @change="upload($event)" hidden />
        <v-btn
          v-if="image"
          @click="download()"
          outlined
          color="#00BFA5"
          class="ma-0 google-font elevation-0"
          style="text-transform: capitalize;border-radius: 5px;color: #00BFA5;font-size:15px; padding: 7px;"
        >Download</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      image: "",
      shape: "original"
    };
  },
  mounted() {
    this.lightCanvas = document.getElementById("canvas2");
    this.lightctx = this.lightCanvas.getContext("2d");
    this.draw();
  },
  beforeMount() {},
  methods: {
    download() {
      const a = document.createElement("a");
      const url = this.lightCanvas.toDataURL("image/png;base64");
      a.download = "IWD-India-Badge Light-Filter.png";
      a.href = url;
      a.click();
    },
    draw() {
      if (this.image) {
        this.lightCanvas.width = 500;
        this.lightCanvas.height = 500;
        const hRatio = this.lightCanvas.width / this.image.width;
        const vRatio = this.lightCanvas.height / this.image.height;
        const ratio = Math.max(hRatio, vRatio);
        const x = (this.lightCanvas.width - this.image.width * ratio) / 2;
        const y = (this.lightCanvas.height - this.image.height * ratio) / 2;
        this.lightctx.drawImage(
          this.image,
          0,
          0,
          this.image.width,
          this.image.height,
          x,
          y,
          this.image.width * ratio,
          this.image.height * ratio
        );
        const image = document.getElementById("source2");
        this.lightctx.drawImage(image, 0, 0, image.width, image.height);
      } else {
        this.lightctx.canvas.width = 500;
        this.lightctx.canvas.height = 500;
        this.lightctx.fillStyle = "#e0e0e0";
        this.lightctx.fillRect(
          0,
          0,
          this.lightCanvas.width,
          this.lightCanvas.height
        );
        const image = document.getElementById("source2");
        image.addEventListener("load", () => {
          this.lightctx.drawImage(image, 0, 0, image.width, image.height);
        });
      }
    },
    upload(e) {
      if (e && e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = event => {
          const img = new Image();
          img.onload = () => {
            this.image = img;
            this.draw();
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
        this.draw();
      }
    },
    uploadImage() {
      document.getElementById("image1").click();
    }
  }
};
</script>

<style scoped>
canvas {
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  height: 350px;
}
@media only screen and (max-width: 1024px) {
  canvas {
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: 300px;
  }
}
@media only screen and (max-width: 400px) {
  canvas {
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    height: 250px;
  }
}
</style>
