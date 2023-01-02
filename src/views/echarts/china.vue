<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import chinaMap from '@static/geojson/china.json'
import distanceMap from '@static/geojson/distance.json'

const chart = ref()
// https://blog.csdn.net/x311609001028/article/details/125049456
function init() {
  var myChart = echarts.init(chart.value)
  echarts.registerMap('china', chinaMap)
  echarts.registerMap('distance', distanceMap)

  var option = {
    title: {
      text: 'Echart 入门示例',
    },
    series: [
      {
        type: 'map',
        map: 'china',
        roam: false,
        label: {
          show: false,
          color: '#0484a5',
        },
        itemStyle: {
          borderColor: '#3b89ac',
          borderWidth: 1,
          areaColor: 'rgba(9, 40, 77, 0.5)',
        },
      },
      {
        type: 'map',
        map: 'distance',
        silent: true, // 图形是否不响应和触发鼠标事
        roam: false, // 鼠标缩放
        zoom: 1.01,
        itemStyle: {
          borderColor: '#14edfc',
          borderWidth: 5,
          areaColor: 'rgba(0,0,0,0)',
        },
      },
    ],
  }

  myChart.setOption(option)
}

onMounted(() => {
  init()
})
</script>

<template>
  <div ref="chart" style="width: 1024px; height: 600px"></div>
</template>
