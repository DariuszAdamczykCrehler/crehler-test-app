<template>
  <div class="w-100 bg-grey py-4">
    <div class="container">
      <div class="row g-2" v-if="!state.loading">
          <ProductCard 
            v-for="product in state.products"
            :key="product._uniqueIdentifier" 
            :name="product.translated.name"
            :description="product.translated.description"
            :price="product.calculatedPrice.totalPrice"
          />
      </div>
      <div v-else class="d-flex justify-content-center py-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
     </div>
  </div>
</template>
 
 <script>
  import { useMainStore } from '@/store/store'
  import { onMounted } from 'vue'
  import ProductCard from './ProductCard.vue'

  export default {
    setup() {
        const store = useMainStore()
        onMounted(async () => {
            await store.getProducts()
        });
        return {
            state: store.$state,
        };
    },
    name: 'ProductsCard',
    components: { ProductCard }
}
 </script>
 
 <style scoped lang="scss">
  .bg-grey {
    background-color: #e9ecef;
  }
 </style>
 