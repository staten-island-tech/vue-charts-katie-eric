<template>
<h1>MALIGNANT COUNT IS:{{ this.malneoCountProp }}</h1>
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
    
    props: {
      malneoCountProp: Number,
      accexceptdrugCountProp: Number,
      alzCountProp: Number,
      septicCountProp: Number,
      },

    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ 'Malignant Neoplasms', 'Accidents Except Drug Posioning', 'Alzheimers Disease', 'Septicemia'  ],
          datasets: [ { data: [this.malneoCountProp, this.accexceptdrugCountProp, this.alzCountProp, this.septicCountProp] } ]
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
  <!-- malneo 87, acc 71, alz 30, septic 12 -->