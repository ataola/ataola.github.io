import Request from '@utils/request'

const API = {
  getVersion: '/v1/getVersion',
}

Request.init()

class Service {
  static getVersion() {
    return Request.axiosInstance({
      url: API.getVersion,
      method: 'get',
      desc: '获取系统信息版本号',
      isJSON: false,
    })
      .then((res) => {
        console.log(res)
      })
      .catch((e: Error) => {
        console.log(e)
      })
  }
}

export default Service
