<!-- this is actually for the pie chart -->


<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
  
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export const data = {
  labels: ['Malignant Neoplasms', 'Accidents Except Drug Posioning', 'Alzheimers Disease', 'Septicemia','Cerebrovascular Disease', 'Influenza', 'Diabetes Mellitus', 'Diseases of Heart', 'All Other Causes', ''],
  datasets: [
    {
      backgroundColor: ['#41B882', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
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