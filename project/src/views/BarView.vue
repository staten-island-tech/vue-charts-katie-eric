<template>
  <Pie v-if="loaded" :malneoCountProp = 'malcount.length' :accexceptdrugCountProp = 'accexdrugcount.length' :alzCountProp = 'alzcount.length' :septicCountProp = 'septiccount.length'/>
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from '../components/BarChart.vue'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Pie
  },
  data() {
    return chartConfig

  }, 
  mounted: function(){
        this.fetchData();
    },
  methods: {
        fetchData: async function() {
          this.loaded = false

            try{
                const results = await fetch(
                    'https://data.cityofnewyork.us/resource/jb7j-dtam.json'
                );
                const data = await results.json();
               let LeadingCause = data.results;

                this.malcount = data.filter(element => element.leading_cause.includes ('Malignant'))
                

                this.accexdrugcount = data.filter(element => element.leading_cause.includes ('Accidents'))
           

                this.alzcount = data.filter(element => element.leading_cause.includes ('Alzheimer'))
               

                this.septiccount = data.filter(element => element.leading_cause.includes ('Septicemia'))
          

                this.septiccount = data.filter(element => element.leading_cause.includes ('Septicemia'))
              
                console.log(data);
                this.loaded=true
            } catch(error){
                console.log(error);
            }
        },
        
  },
}
</script>
