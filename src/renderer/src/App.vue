<script setup lang="ts">
import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'
import { useConfigStore } from './store/useConfigStore'
import { storeToRefs } from 'pinia'

const { config } = storeToRefs(useConfigStore())
</script>

<template>
  <Suspense>
    <main class="drag">
      <section class="se-setting no-drag">
        <div v-if="config.page === 'camera'" class="sys-setting" @click="config.page = 'setting'">
          设置
        </div>
        <div v-else class="sys-setting no-drag" @click="config.page = 'camera'">摄像头</div>
      </section>
      <section class="page-container">
        <Camera v-if="config.page === 'camera'" />
        <Setting v-else-if="config.page === 'setting'" />
      </section>
    </main>
  </Suspense>
</template>

<style scoped>
.se-setting {
  position: absolute;
  height: 30px;
  width: 100%;
  .sys-setting {
    opacity: 0;
    cursor: pointer;
    position: absolute;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
  }

  &:hover .sys-setting {
    opacity: 1;
  }
}
.page-container {
  position: relative;
  z-index: 1;
}
</style>
