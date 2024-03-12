<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted () {
    this.loaded = false
    try { 
       const response = await fetch ('https://data.cityofnewyork.us/resource/jb7j-dtam.json');
       if (response.status !)
    // try {
    //   const { userlist } = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
    //   this.chartdata = userlist

    //   this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>



<!-- <template>
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
          labels: [ 'January', 'February', 'March' ],
          datasets: [ { data: [30, 20, 12] } ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script> -->