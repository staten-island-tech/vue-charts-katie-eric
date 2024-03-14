<template>
    <Pie
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
    <h1>Bar</h1>
  </template>
  
  <script>
  import { Pie } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import {ref} from "vue";
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  export default {
    name: 'PieChart',
     components: { Pie },
    data() {
      // const count = ref('0');
      // function increaseCount(){

      // }
      
      // let malneo = increaseCount(MalignantNeoplasms);
      let malneo = 10;
      let accexceptdrug = 13;
      let alz = 12;
      return {
        chartData: {
          labels: [ 'Malignant Neoplasms', 'Accidents Except Drug Posioning', 'Alzheimers Disease', 'Septicemia',  ],
          datasets: [ { data: [malneo, accexceptdrug, alz] } ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>