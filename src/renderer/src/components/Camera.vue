<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useConfigStore } from '../store/useConfigStore'
const { config } = useConfigStore()
const videoRef = ref<HTMLVideoElement | null>(null)
onMounted(() => {
  const constraints = {
    audio: false,
    video: { deviceId: config.deviceId }
  } as MediaStreamConstraints
  if (videoRef.value) {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        videoRef.value!.srcObject = stream
        videoRef.value!.play()
      })
      .catch((err) => {
        console.log(err)
      })
  }
})
</script>

<template>
  <main
    class="camera"
    :style="{
      border: `${config.borderWidth} solid ${config.borderColor}`,
      borderRadius: `${config.isCircular ? '50%' : '0'}`
    }"
  >
    <video ref="videoRef" class="video-camera"></video>
  </main>
</template>

<style scoped lang="less">
.camera {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  //border-radius: 50%;
  display: flex;
}
.video-camera {
  object-fit: cover;
}
</style>
