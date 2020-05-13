<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <input type="file" @change="selectFile" />
      </v-col>
      <v-col cols="4">
        <div v-if="cropping" ref="cropperdiv" :style="cropperDivStyle">
          <canvas
            ref="canvas"
            :width="canvasWidth"
            :height="canvasHeight"
            @mousemove="moveMouse"
            @mousedown="startDrag"
            @mouseup="stopDrag"
            @dragover="stopDrag"
          ></canvas>
        </div>
      </v-col>
      <v-col cols="4">
        <img v-bind:src="croppedImage" :style="roundCorners" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cropperDivWidth: 300,
      cropperDivHeight: false,
      cropperDivMaxHeight: 300,
      cropping: false,
      image: false,
      imageWidth: 0,
      imageHeight: 0,
      canvasWidth: 200,
      canvasHeight: 200,
      ctx: false,
      mainStroke: "rgba(255,255,255,0.99)",
      lineDash: [1, 1],
      overlayStyle: "rgba(0,0,0,0.4)",
      fillStyle: "rgba(0,0,0,0.7)",
      strokeStyle: "rgba(255,255,255,0.7)",
      hoverFillStyle: "rgba(255,255,255,0.4)",
      hoverStrokeStyle: "white",
      x: 20,
      y: 20,
      w: 100,
      h: 100,
      markerSize: 20,
      deltaX: 0,
      deltaY: 0,
      dragged: false,
      aspectRatio: 1,
      croppedWidth: 200,
      croppedHeight: 200,
      minWidth: 10,
      minHeight: 10,
      croppedImage: false,
      circle: false
    };
  },
  computed: {
    cropperDivStyle: function() {
      return {
        width: this.cropperDivWidth + "px",
        height: this.cropperHeight + "px",
        textAlign: "center"
      };
    },
    cropperHeight: function() {
      return this.cropperDivHeight
        ? this.cropperDivHeight
        : this.cropperDivMaxHeight;
    },
    cropperWidth: function() {
      return this.cropping && this.$refs.cropperdiv.offsetWidth;
    },
    cropperDivRatio: function() {
      return this.cropperWidth / this.cropperHeight;
    },
    imageRatio: function() {
      return this.imageWidth / this.imageHeight;
    },
    markers: function() {
      return {
        nw: {
          x: this.x - this.markerSize / 2,
          y: this.y - this.markerSize / 2
        },
        ne: {
          x: this.x + this.w - this.markerSize / 2,
          y: this.y - this.markerSize / 2
        },
        sw: {
          x: this.x - this.markerSize / 2,
          y: this.y + this.h - this.markerSize / 2
        },
        se: {
          x: this.x + this.w - this.markerSize / 2,
          y: this.y + this.h - this.markerSize / 2
        }
      };
    },
    cw: function() {
      return this.croppedWidth || this.w;
    },
    ch: function() {
      return this.croppedHeight || this.h;
    },
    roundCorners: function() {
      if (this.circle) {
        return { borderRadius: "100%" };
      } else return false;
    }
  },
  methods: {
    selectFile: function(evt) {
      var file = evt.currentTarget.files[0];
      var reader = new FileReader();
      var cropper = this;
      reader.onload = function(evt) {
        cropper.cropping = true;
        if (cropper.circle) {
          cropper.aspectRatio = 1;
          cropper.h = cropper.w;
        }
        var image = new Image();
        image.src = evt.target.result;
        image.onload = function() {
          cropper.image = image;
          cropper.drawing = true;
          cropper.imageWidth = image.width;
          cropper.imageHeight = image.height;
          cropper.canvasWidth = cropper.cropperWidth;
          cropper.canvasHeight = cropper.cropperHeight;
          if (cropper.imageRatio < cropper.cropperDivRatio) {
            cropper.canvasWidth = cropper.canvasHeight * cropper.imageRatio;
          }
          if (cropper.imageRatio > cropper.cropperDivRatio) {
            cropper.canvasHeight = cropper.canvasWidth / cropper.imageRatio;
          }

          var canvas = cropper.$refs.canvas;
          cropper.ctx = canvas.getContext("2d");
          cropper.ctx.drawImage(
            cropper.image,
            0,
            0,
            cropper.canvasWidth,
            cropper.canvasHeight
          );
        };
      };
      reader.readAsDataURL(file);
    },
    moveMouse: function(event) {
      if (event === undefined) return false;
      var doc = document.documentElement;
      var scrollLeft =
        (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
      var scrollTop =
        (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      var x = event.clientX - event.target.offsetLeft + scrollLeft;
      var y = event.clientY - event.target.offsetTop + scrollTop;
      var ctx = this.ctx;

      //draw the image
      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      ctx.drawImage(this.image, 0, 0, this.canvasWidth, this.canvasHeight);

      //update coords
      if (this.dragged) this.updateCoords(x, y);

      //draw crop area and handles
      this.drawSelection(ctx, x, y);

      //crop image
      var scaleX = this.imageWidth / this.canvasWidth;
      var scaleY = this.imageHeight / this.canvasHeight;
      let resultCanvas = document.createElement("canvas");
      resultCanvas.width = this.cw;
      resultCanvas.height = this.ch;
      resultCanvas
        .getContext("2d")
        .drawImage(
          this.image,
          this.x * scaleX,
          this.y * scaleY,
          this.w * scaleX,
          this.h * scaleY,
          0,
          0,
          this.cw,
          this.ch
        );
      this.croppedImage = resultCanvas.toDataURL();
    },
    drawSelection: function(ctx, x, y) {
      this.drawOverlay(ctx);
      this.$refs.canvas.style.cursor = "default";

      ctx.beginPath();
      if (!this.circle) {
        ctx.rect(this.x, this.y, this.w, this.h);
      } else {
        ctx.arc(
          this.x + this.w / 2,
          this.y + this.h / 2,
          this.w / 2,
          0,
          2 * Math.PI
        );
      }
      if (ctx.isPointInPath(x, y)) {
        this.$refs.canvas.style.cursor = "move";
      }
      ctx.setLineDash(this.lineDash);
      ctx.strokeStyle = this.mainStroke;
      ctx.stroke();
      ctx.setLineDash([]);

      for (var p in this.markers) {
        var rectangle = this.markers[p];
        ctx.beginPath();
        ctx.rect(rectangle.x, rectangle.y, this.markerSize, this.markerSize);
        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;
        if (ctx.isPointInPath(x, y)) {
          ctx.fillStyle = this.hoverFillStyle;
          ctx.strokeStyle = this.hoverStrokeStyle;
          this.$refs.canvas.style.cursor = p + "-resize";
        }
        ctx.fill();
        ctx.stroke();
      }
    },
    drawOverlay: function(ctx) {
      ctx.fillStyle = this.overlayStyle;
      ctx.fillRect(0, 0, this.canvasWidth, this.y);
      ctx.fillRect(0, this.y, this.x, this.h);
      ctx.fillRect(
        this.x + this.w,
        this.y,
        this.canvasWidth - (this.x + this.w),
        this.h
      );
      ctx.fillRect(
        0,
        this.y + this.h,
        this.canvasWidth,
        this.canvasHeight - (this.y + this.h)
      );
    },
    startDrag: function(event) {
      var doc = document.documentElement;
      var scrollLeft =
        (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
      var scrollTop =
        (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      var x = event.clientX - event.target.offsetLeft + scrollLeft;
      var y = event.clientY - event.target.offsetTop + scrollTop;
      var ctx = this.ctx;

      for (var p in this.markers) {
        var rectangle = this.markers[p];
        ctx.beginPath();
        ctx.rect(rectangle.x, rectangle.y, this.markerSize, this.markerSize);
        if (ctx.isPointInPath(x, y)) {
          this.dragged = p;
          this.deltaX = x - rectangle.x;
          this.deltaY = y - rectangle.y;
          return;
        }
      }
      ctx.beginPath();
      if (ctx.isPointInPath(x, y)) {
        this.dragged = "all";
        this.deltaX = x - this.x;
        this.deltaY = y - this.y;
        return;
      }
    },
    stopDrag: function() {
      this.dragged = false;
      this.deltaX = 0;
      this.deltaY = 0;
    },
    updateCoords: function(x, y) {
      var newX, newY, newW, newH;
      if (this.dragged == "all") {
        newX = x - this.deltaX;
        newY = y - this.deltaY;
        newW = this.w;
        newH = this.h;
      } else {
        var ox = this.dragged[1] == "w" ? "e" : "w";
        var oy = this.dragged[0] == "n" ? "s" : "n";
        var oppositeIdx = oy + ox;
        if (ox == "e") {
          newX = x - this.deltaX + this.markerSize / 2;
          newW = this.markers[oppositeIdx].x - newX + this.markerSize / 2;
        } else {
          newX = this.x;
          newW = x - this.deltaX - this.markers[oppositeIdx].x;
        }
        if (oy == "s") {
          newY = y - this.deltaY + this.markerSize / 2;
          newH = this.markers[oppositeIdx].y - newY + this.markerSize / 2;
        } else {
          newY = this.y;
          newH = y - this.deltaY - this.markers[oppositeIdx].y;
        }
      }

      if (this.aspectRatio) {
        newH = newW / this.aspectRatio;
      }

      if (newX < 0) newX = 0;
      if (newY < 0) newY = 0;
      if (newX + newW > this.canvasWidth) {
        newW = this.canvasWidth - newX;
        if (this.aspectRatio) {
          newH = newW / this.aspectRatio;
        }
      }
      if (newY + newH > this.canvasHeight) {
        newH = this.canvasHeight - newY;
        if (this.aspectRatio) {
          newW = newH * this.aspectRatio;
        }
      }
      if (newW < this.minWidth) {
        newW = this.minWidth;
        newH = newW / this.aspectRatio;
      }
      if (newH < this.minHeight) {
        newH = this.minHeight;
        newW = newH * this.aspectRatio;
      }

      this.x = newX;
      this.y = newY;
      this.w = newW;
      this.h = newH;
    }
  }
};
</script>