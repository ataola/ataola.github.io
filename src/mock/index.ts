import Mock from 'mockjs'
import { version } from '../../package.json'
import navigation from '../data/navigation.json'

Mock.setup({
  timeout: '100',
})

const getVersion = () => ({
  code: 0,
  data: {
    author: 'ataola(zjt613@gmail.com)',
    website: 'https://zhengjiangtao.cn',
    version,
  },
  message: '请求成功',
})

const getNavigation = () => ({
  code: 0,
  data: navigation,
  message: '请求成功',
})

Mock.mock('/api/v1/getVersion', 'get', getVersion)
Mock.mock('/api/v1/getNavigation', 'get', getNavigation)
