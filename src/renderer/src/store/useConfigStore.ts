import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref({
      page: 'camera',
      deviceId: '',
      borderWidth: '10px',
      borderColor: 'red',
      isCircular: true
    })

    const updateDeviceId = (deviceId: string) => {
      config.value.deviceId = deviceId
    }

    return { config, updateDeviceId }
  },
  {
    persist: true
  }
)
