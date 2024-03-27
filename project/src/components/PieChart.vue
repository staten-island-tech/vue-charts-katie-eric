<template>
<br><br>
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
    
   

    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ 'Malignant Neoplasms', 'Accidents Except Drug Posioning', 'Alzheimers Disease', 'Septicemia',  'Respritory', 'Suicide', 'Influenza', 'Liver Diesease' ],
          datasets: [ { data: [ this.malneoCountProp, this.accexceptdrugCountProp, this.alzCountProp, this.septicCountProp, this.respritoryCountProp, this.suicideCountProp, this.fluCountProp, this.liverCountProp] } ]
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
      respritoryCountProp: Number,
      suicideCountProp: Number,
      fluCountProp: Number,
      liverCountProp: Number
      },
      
    }

  
  </script>
<style scoped>
  h1{
    text-align: center;
  }
</style>
  <!-- malneo 87, acc 71, alz 30, septic 12 -->