<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
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

      },
      methods: {
        fetchData: async function(){
            try{
                const results = await fetch(
                    'https://data.cityofnewyork.us/resource/jb7j-dtam.json'
                );
                const data = await results.json();
                this.LeadingCause = data.results
                
                const MalignantCount = ref('0');
                data
                .filter(element => element.leading_cause.includes ('Malignant'))
                .forEach(element => console.log(MalignantCount.value++));
                console.log(data);
            } catch(error){
                console.log(error);
            }
        },
  }
    }
  
  </script>