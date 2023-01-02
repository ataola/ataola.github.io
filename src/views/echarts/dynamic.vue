<script lang="ts" setup>
import { ref, reactive, onMounted, watch, Ref } from 'vue'
import * as echarts from 'echarts'
import axios from 'axios'

// adcode	该省份或城市的id，可以用于JSON API获取
// name	地区的名称
// center	应该是省份中心城市位置
// childrenNum	代表下面有多少地区，如果为0，则不进行下钻
// parent.adcode	上一级父区域的id

let myChart: any = null
let allMap: Map<string | number, any> = new Map()
allMap.set(100000, {
  name: '中国',
  adcode: 100000,
  url: 'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json',
  childrenNum: 34,
  center: [0, 0],
  hasRegister: true,
})

let currentadcode: Ref<number | string> = ref(100000)
let currentMap: Ref<null | any> = ref(null)
const chart = ref()

function registerMap(currentName: string, mapData: any) {
  echarts.registerMap(currentName, mapData)
}

const getCurrentadcodeData = async (currentadcode: number | string) => {
  return (await axios.get(`https://geo.datav.aliyun.com/areas_v3/bound/${currentadcode}_full.json`)).data
}

function getCurrentadcode(mapData: any) {
  let resMap: Map<string | number, any> = new Map()
  for (const item of mapData.features) {
    const {
      properties: { name, adcode, childrenNum, center },
    } = item
    allMap.set(adcode, {
      name,
      adcode,
      url: `https://geo.datav.aliyun.com/areas_v3/bound/${adcode}_full.json`,
      childrenNum,
      center,
      hasRegister: false,
    })
  }
  return resMap
}

function renderChart(currentName: string) {
  let option = {
    title: {
      text: `${currentName}地图`,
      left: 'center',
      top: '2%',
      textStyle: {
        color: '#fff',
      },
    },
    backgroundColor: '#070d18',
    series: [
      {
        name: `${currentName}地图`,
        //使用上面注册的地图
        map: currentName,
        //初始化类型写地图
        type: 'map',
        roam: true, //鼠标滚轮缩放
        selectedMode: false, // 点击选中区域
        // 区块文字样式
        label: {
          normal: {
            formatter: '{b}',
            show: true,
            textStyle: {
              color: '#fff',
            },
          },
          emphasis: {
            show: true,
            textStyle: {
              color: '#05C3F9',
            },
          },
        },
        // 区块样式
        itemStyle: {
          normal: {
            areaColor: '#0C356C',
            borderColor: '#3B5077',
            borderWidth: 1,
          },
          emphasis: {
            areaColor: '#0C356C',
            shadowColor: '#1773c3',
            shadowBlur: 20,
          },
        },
        select: {
          // 地图选中区域样式
        },
        data: [],
      },
    ],
  }
  myChart.setOption(option)
}

async function renderChart2(map: any) {
  const mapData = await getCurrentadcodeData(map.adcode)
  if (!map?.hasRegister) {
    registerMap(map.name, mapData)
    // 当前地图下的地区信息
    let currentCityMap: Map<string | number, any> = getCurrentadcode(mapData)

    allMap = new Map([...allMap, ...currentCityMap])
    ;(allMap.get(map?.adcode as string | number) as any).hasRegister = true
  }
  renderChart(map.name)
}

const getMapKey = (value: string, map: Map<string | number, any>): number | string => {
  let arriterator = map.values(),
    res: number | string = 0
  for (const iterator of arriterator) {
    if (iterator.name == value) {
      res = iterator.adcode
      break
    }
  }

  return res
}

// 返回上级地图
const returnLastMap = (adcode: string | number) => {
  currentadcode.value = adcode
}

onMounted(async () => {
  myChart = echarts.init(chart.value)
  myChart.on('click', (params: any) => {
    let n = getMapKey(params.name, allMap)
    if (allMap.get(n)?.childrenNum == 0) return
    ;(currentadcode.value as number | string) = n
  })
  // 根据map中数值，获取key
  const mapInfo = allMap.get(currentadcode.value)
  const { data } = await axios.get(mapInfo.url)
  registerMap('中国', data)
  renderChart('中国')
  getCurrentadcode(data)
})

watch(currentadcode, (newval, oldval) => {
  // 根据adcode，从allMap中获取该地图信息
  let nextMap = allMap.get(newval) as any

  // 如果存在子节点
  if (nextMap?.childrenNum && nextMap.childrenNum > 0) {
    currentMap.value = nextMap

    // 如果出现意外，没呀父节点
    if (currentMap.value.parentadcode == undefined) {
      currentMap.value.parentadcode = oldval
    }
    // 获取地图json, 绘制地图
    renderChart2(nextMap)
  }
})
</script>

<template>
  <div
    class="backParent"
    v-show="currentadcode != 100000"
    @click="returnLastMap(currentMap?.parentadcode as string | number)"
  >
    返回
  </div>
  <div ref="chart" style="width: 100%; height: 100%"></div>
</template>

<style lang="scss" scoped>
.backParent {
  position: absolute;
  right: 0;
  top: 0;
  color: #fff;
  z-index: 10;
  font-size: 0.2rem;
}
</style>
