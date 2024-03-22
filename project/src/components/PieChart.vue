<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
    <h2>{{ msg || 'No props passed yet' }}</h2>
  </template>
  <!-- bar chart -->
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
  msg: Number
});

  export default {
    name: 'BarChart',
    components: { Bar },
    data() {


      return {
      malneo : msg,
      accexceptdrug: 13,
      alz: 12,
        chartData: {
          labels: [ 'Malignant Neoplasms', 'Accidents Except Drug Posioning', 'Alzheimers Disease', 'Septicemia'  ],
          datasets: [ { data: [msg, accexceptdrug, alz, 10] } ]
        },
        chartOptions: {
          responsive: true
        }
      }

      }
      
    }
  
  </script>