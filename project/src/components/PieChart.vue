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
          
          labels: [ 'Malignant Neoplasms', 'Accidents Except Drug Posioning', 'Alzheimers Disease', 'Septicemia'  ],
          datasets: [ 
            { 
              backgroundColor: ['#23263b', '#36395a', '#484c7a', '#5a5e9a'],
              data: [ this.malneoCountProp, this.accexceptdrugCountProp, this.alzCountProp, this.septicCountProp] 
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
      },
      
    }

  
  </script>
<style scoped>
  h1{
    text-align: center;
  }
</style>
  <!-- malneo 87, acc 71, alz 30, septic 12 -->