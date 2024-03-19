<template>
  <Pie :data="data" :options="options" />
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from '../components/BarChart.vue'
import {ref} from "vue"
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Pie
  },
  data() {
    return {
      chartConfig,
          LeadingCause:[ ],
              count: 0,
        };

  }, 
  
    mounted: function(){
        this.fetchData();
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
