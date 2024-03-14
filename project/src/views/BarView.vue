<template>
  <BarChart />
</template>

<script>
import BarChart from '../components/BarChart.vue'
import {ref, onMounted} from "vue";

export default {
  name: 'App',
  components: { BarChart }
}

// const leadingCauses = ref("");
// async function getCauses(){
//   let res = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
//   let data = await res.json();
//   leadingCauses.value = data;
//   console.log(data);
// }

// onMounted(() => {
//   getCauses();
// });

</script>
