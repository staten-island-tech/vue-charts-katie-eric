<template>
    <div>
    </div>
</template>

<script>
import BarChart from '../components/optionsChart.vue'
import {ref} from "vue";

export default {
  name: 'App',
  components: { BarChart },

    data(){
        return {
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
                
                const count = ref('0');
                data
                .filter(element => element.leading_cause.includes ('Malignant'))
                .forEach(element => (count.value++));
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