<!-- this is actually for the pie chart -->


<template>
  <div class="container">
    <Pie :options="chartOptions"
      :data="chartData" />

  </div>
  
</template>

<script>

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from '../components/BarChart.vue'

ChartJS.register(ArcElement, Tooltip, Legend)

export default { 
  name: 'PieChart',
    components: { Pie },
  data() {
      return { chartConfig, 
        chartData: {
          labels: [ 'Malignant Neoplasms', 'Accidents Except Drug Posioning', 'Alzheimers Disease', 'Septicemia'  ],
          datasets: [ { data: [ this.malneoCountProp, this.accexceptdrugCountProp, this.alzCountProp, this.septicCountProp] } ]
        },
        chartOptions: {
          responsive: true
        }
      }
      },
      props: {
      malneoCountProp: Number,
      accexceptdrugCountProp: Number,
      alzCountProp: Number,
      septicCountProp: Number,
      },
}
export const options = {
  responsive: true,
  maintainAspectRatio: true
}
</script>

<style>

data{
  aspect-ratio: 1/12;
}

</style>