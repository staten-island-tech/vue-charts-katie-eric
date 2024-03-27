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

          labels: [ 'Malignant Neoplasms', 'Accidents Except Drug Posioning', 'Alzheimers Disease', 'Septicemia',  'Respiratory', 'Suicide', 'Influenza', 'Liver Diesease' ],
          datasets: [ 
            { 
            backgroundColor: ['#23263b', '#36395a', '#484c7a', '#5a5e9a', '#777aaf', '#9698c3', '#b6b7d5', '#d6d6e7'],
            data: [ this.malneoCountProp, this.accexceptdrugCountProp, this.alzCountProp, this.septicCountProp, this.respritoryCountProp, this.suicideCountProp, this.fluCountProp, this.liverCountProp] 
          } 
        ]

        },
        chartOptions: {
          responsive: true,
          plugins:{
            legend: {
             display: true,
                labels: {
                  text: ['Number of Occurences'],
                  color: '#23263b',
                }
            }
          }
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