<!-- this is actually for the pie chart -->


<template>
  <div class="container">
    <Bar :options="chartOptions"
      :data="chartData" />

  </div>
  
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default { 
 
  data() {
      return {
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