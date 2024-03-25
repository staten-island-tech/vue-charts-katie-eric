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
  labels: ['Malignant Neoplasms', 'Accidents Except Drug Posioning', 'Alzheimers Disease', 'Septicemia'],
  datasets: [
    {
      backgroundColor: ['#084C61', '#DB504A', '#E3B505', '#56A3A6'],
      data: [25, 25, 25, 25]
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