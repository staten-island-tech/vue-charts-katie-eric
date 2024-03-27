<template>
  <PieChart v-if="loaded" :malneoCountProp = 'malcount.length' :accexceptdrugCountProp = 'accexdrugcount.length' :alzCountProp = 'alzcount.length' :septicCountProp = 'septiccount.length' 
  :respritoryCountProp="respritorycount.length" :suicideCountProp="suicidecount.length" :fluCountProp="flucount.length" :liverCountProp="livercount.length"/>
</template>
<!-- this is actually for bar graph -->
<script>
import PieChart from '../components/PieChart.vue'

export default {
  name: 'pie',
  components: { 
    PieChart
  },
  
  data(){
        return {
            loaded: false,
            malcount: [],
            accexdrugcount: [],
            alzcount: [],
            septiccount:[],
            respritorycount:[],
            suicidecount: [],
            flucount: [],
            livercount: [],
        };
    },
    mounted: function(){
        this.fetchData();
    },
  methods: {
        fetchData: async function(){
          this.loaded = false

            try{
                const results = await fetch(
                    'https://data.cityofnewyork.us/resource/jb7j-dtam.json'
                );
                const data = await results.json();
               let LeadingCause = data.results;

                this.malcount = data.filter(element => element.leading_cause.includes ('Malignant'))
                this.respritorycount = data.filter(element => element.leading_cause.includes ('Respiratory'))
                this.accexdrugcount = data.filter(element => element.leading_cause.includes ('Accidents'))
                this.suicidecount = data.filter(element => element.leading_cause.includes ('Self-Harm'))
                this.alzcount = data.filter(element => element.leading_cause.includes ('Alzheimer'))
                this.flucount = data.filter(element => element.leading_cause.includes ('Influenza'))
                this.livercount = data.filter(element => element.leading_cause.includes ('Liver'))
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