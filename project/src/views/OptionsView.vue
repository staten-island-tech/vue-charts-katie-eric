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
                const results = await fetch(
                    'https://data.cityofnewyork.us/resource/jb7j-dtam.json'
                );
                const data = await results.json();
                this.LeadingCause = data.results
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