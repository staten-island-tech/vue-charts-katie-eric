<template>
    <div>
    </div>
</template>

<script>
import BarChart from '../components/optionsChart.vue'

export default {
  name: 'App',
  components: { BarChart },

    data(){
        return {
            LeadingCause:[ ],
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
                
                data
                .filter(element => element.leading_cause.includes ('Influenza'))
                .forEach(element => console.log(element.year));
                // console.log(data.leading_cause.includes("Malignant"));
                console.log(data);
            } catch(error){
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>

</style>