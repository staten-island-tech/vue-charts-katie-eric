<template>
  <PieChart :malneoCountProp = 'malcount' :accexceptdrugCountProp = 'accexdrugcount' :alzCountProp = 'alzcount' :septicCountProp = 'septiccount'/>
</template>
<!-- this is actually for bar graph -->
<script>
import PieChart from '../components/PieChart.vue'


export default {
  name: 'pie',
  components: { 
    PieChart
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
                this.LeadingCause = data.results;

                let malcountarray = data.filter(element => element.leading_cause.includes ('Malignant'))
                console.log(malcountarray.length);

                let accexdrugcountarray = data.filter(element => element.leading_cause.includes ('Accidents'))
                console.log(accexdrugcountarray.length);

                let alzcountarray = data.filter(element => element.leading_cause.includes ('Alzheimer'))
                console.log(alzcountarray.length);

                let septiccountarray = data.filter(element => element.leading_cause.includes ('Septicemia'))
                console.log(septiccountarray.length);

                console.log(data);
            } catch(error){
                console.log(error);
            }
        },
        
        data(){
        return {
            malcount: malcountarray,
            accexdrugcount: accexdrugcountarray,
            alzcount: alzcountarray,
            septiccount: septiccountarray,
        };
    },

  },
}

</script>