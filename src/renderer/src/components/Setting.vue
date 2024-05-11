<script setup lang="ts">
import { useConfigStore } from '../store/useConfigStore'
import { storeToRefs } from 'pinia'

const { config } = storeToRefs(useConfigStore())
const devices = await navigator.mediaDevices.enumerateDevices()
const cameras = devices.filter((d) => d.kind.includes('video'))
</script>

<template>
  <div class="setting" :style="{ borderRadius: `${config.isCircular ? '50%' : '0'}` }">
    <el-form>
      <el-select
        v-model="config.deviceId"
        class="no-drag"
        placeholder="请选择摄像头"
        clearable
        filterable
      >
        <el-option
          v-for="camera in cameras"
          :key="camera.deviceId"
          class="no-drag"
          :label="camera.label"
          :value="camera.deviceId"
        ></el-option>
      </el-select>
      <el-input
        v-model="config.borderColor"
        class="no-drag"
        placeholder="请输入边框颜色"
      ></el-input>
      <el-input
        v-model="config.borderWidth"
        class="no-drag"
        placeholder="请输入边框大小"
      ></el-input>
      <el-select v-model="config.isCircular" class="no-drag" style="margin-top: 10px">
        <el-option class="no-drag" label="圆形" :value="true"></el-option>
        <el-option class="no-drag" label="方形" :value="false"></el-option>
      </el-select>
    </el-form>
  </div>
</template>

<style scoped lang="less">
.setting {
  min-width: 250px;
  min-height: 250px;
  border-radius: 5%;
  padding: 30px;
  background: #000000;
  overflow: hidden;
}
.el-input {
  margin-top: 10px;
}
</style>
