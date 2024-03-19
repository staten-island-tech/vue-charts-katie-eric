<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
    <h1>this is supposed to be pie</h1>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import {ref} from "vue";
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  export default {
    name: 'BarChart',
    components: { Bar },
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
          datasets: [ { data: [malneo, accexceptdrug, alz, 10] } ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>