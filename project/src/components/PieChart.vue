<template>
<h1>MALIGNANT COUNT IS:{{ this.malneoCount }}</h1>
<br>

    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>

  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  export default {
    
    props: ['malneoCount', 'accexceptdrugCount', 'alzCount', 'septicCount'],
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ 'Malignant Neoplasms', 'Accidents Except Drug Posioning', 'Alzheimers Disease', 'Septicemia'  ],
          datasets: [ { data: [this.malneoCount, this.accexceptdrugCount, this.alzCount, this.septicCount] } ]
        },
        chartOptions: {
          responsive: true
        }
      }

      }
      
    }
  
  </script>
<style scoped>
  h1{
    text-align: center;
  }
</style>
  <!-- malneo 70,acc 29, alz 11,septic 11 -->