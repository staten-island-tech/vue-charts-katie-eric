<template>
  <Pie :data="data" :options="options" />
  <ChildComp :msg="number"/>
</template>
<!-- this is actually for pie chart -->
<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import {ref} from 'vue'
import * as chartConfig from '../components/BarChart.vue'

ChartJS.register(ArcElement, Tooltip, Legend)

const number = ref('10')
export default {
  name: 'App',
  components: {
    Pie
  },
  data() {
    return chartConfig
  }, 
  
}
</script>
