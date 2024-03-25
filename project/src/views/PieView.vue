<template>
  <PieChart :malneoCountProp = 'malcount.length' :accexceptdrugCountProp = 'accexdrugcount.length' :alzCountProp = 'alzcount.length' :septicCountProp = 'septiccount.length'/>
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
            malcount: [],
            accexdrugcount: [],
            alzcount: [],
            septiccount:[],
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
               let LeadingCause = data.results;

                this.malcount = data.filter(element => element.leading_cause.includes ('Malignant'))
                

                this.accexdrugcount = data.filter(element => element.leading_cause.includes ('Accidents'))
           

                this.alzcount = data.filter(element => element.leading_cause.includes ('Alzheimer'))
               

                this.septiccount = data.filter(element => element.leading_cause.includes ('Septicemia'))
          

                console.log(data);
            } catch(error){
                console.log(error);
            }
        },
        

  },
 
}

</script>