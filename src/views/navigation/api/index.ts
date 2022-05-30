import Request from '@/utils/request'

const NAVIGATION_API = {
  getNavigation: '/v1/getNavigation',
}

Request.init()

class NavigationService {
  static getNavigation() {
    return Request.axiosInstance({
      url: NAVIGATION_API.getNavigation,
      method: 'get',
      desc: '获取导航标签列表',
      isJSON: false,
    })
      .then((res) => {
        return res
      })
      .catch((e: Error) => {
        console.log(e)
      })
  }
}

export default NavigationService
