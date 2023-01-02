<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import kechengMap from '@static/geojson/kecheng.json'

const chart = ref()

function init() {
  var myChart = echarts.init(chart.value)
  echarts.registerMap('kecheng', kechengMap)

  var option = {
    title: {
      text: 'Echart 入门示例',
    },
    series: [
      {
        type: 'map',
        map: 'kecheng',
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
