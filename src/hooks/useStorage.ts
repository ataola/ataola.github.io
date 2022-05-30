import { ref, watchEffect } from 'vue'
import { TStorageValue } from '@/types/global/types'

export default function useStorage<T>(name: string, value: TStorageValue<T> = []) {
  const data = ref(JSON.parse(localStorage.getItem(name) as string) || value)

  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value))
  })

  return data
}
