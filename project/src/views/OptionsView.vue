<template>
    <div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            leading_cause:[ ],
        };
    },
    mounted: function(){
        this.fetchData();
    },
    methods: {
        fetchData: async function(){
            try{
                const URL = 'https://data.cityofnewyork.us/resource/jb7j-dtam.json';
                const response = await fetch(URL);
                const datapoints = await response.json();
                console.log(datapoints);
                return (datapoints);
            } catch(error){
                console.log(error);
            }
            
        }
    }
}
</script>

<style scoped>

</style>