<template>
  <PieChart :malneoCount = 'malcount' :accexceptdrugCount = 'accexdrugcount' :alzCount = 'alzcount' :septicCount = 'septiccount'/>
</template>
<!-- this is actually for bar graph -->
<script>
import PieChart from '../components/PieChart.vue'
import {ref} from "vue";

export default {
  name: 'App',
  components: { PieChart},
  
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

                let accexdrugcount = ref('0');
                data
                .filter(element => element.leading_cause.includes ('Accidents'))
                .forEach(() => console.log(accexdrugcount.value++));

                const alzcount = ref('0');
                data
                .filter(element => element.leading_cause.includes ('Alzheimer'))
                .forEach(() => console.log(alzcount.value++));

                const septiccount = ref('0');
                data
                .filter(element => element.leading_cause.includes ('Septicemia'))
                .forEach(() => console.log(septiccount.value++));

                console.log(data);
            } catch(error){
                console.log(error);
            }
        },
  data(){
        return {
            LeadingCause:[ ],
            count: 0,
            malcount: ref(''),
            accexdrugcount: ref(''),
            alzcount: ref(''),
            septiccount: ref(''),
        };
    },
  },
  components: {PieChart}
}

</script>