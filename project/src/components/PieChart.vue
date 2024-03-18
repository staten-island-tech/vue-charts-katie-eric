<template>
    <Pie
     type="pie
" :data="chartData" 
:options="chartOptions" />
    />
    <h1>Bar</h1>
  </template>
  
  <script>
  import { Pie } from 'vue-chartjs'
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import {ref} from "vue";
  ChartJS.register(ChartJS, ArcElement, Tooltip, Legend )
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