<template>
  <div class="col-12 col-lg-6 col-xl-4">
    <div class="bg-white p-3 shadow-sm border rounded">
      <strong>{{ name }}</strong>
      <p>{{ description }}</p>
      <strong>Cena</strong> {{ price }} zł              
    </div>
  </div>
</template>
 
 <script>
  export default {
    props: ['name', 'description', 'price']
  }
 </script>
 
 <style scoped lang="scss">
  .bg-grey {
    background-color: #e9ecef;
  }
 </style>
 