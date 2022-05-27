import { TPage } from '@/types/global/types'
import { reactive } from 'vue'

export default function (initData: TPage) {
  const state = reactive<TPage>(initData)

  const isCurrentPage = (page: string): boolean => state.page === page

  const toPage = (data: TPage): TPage => Object.assign(state, data)

  return {
    state,
    isCurrentPage,
    toPage,
  }
}
