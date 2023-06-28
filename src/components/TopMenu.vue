<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container pr-0">
      <div class="row w-100">
        <div class="col col-sm-7 col-lg-8 col-xl-9 col-xxl-10">
          <a class="navbar-brand" href="#" aria-label="Shopware Listing" alt="Shopware Listing">Shopware Listing</a>
        </div>
        <div class="col col-sm-5 col-lg-4 col-xl-3 col-xxl-2 pr-0">          
          <select @change="changeSorting($event.target.value)" class="form-select bg-dark link-light" aria-label="Metoda sortowania">
            <option value="price-asc">Najtańsze</option>
            <option value="price-desc">Najdroższe</option>
          </select>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useMainStore } from '@/store/store'

export default {
  setup() {
    const store = useMainStore()
    const changeSorting = (val) => {
      store.setOrder(val)
      store.$state.search ? store.searchProducts() : store.getProducts()
    }
    return {
      changeSorting: changeSorting
    }
  },
  name: 'topMenu'
}
</script>

<style scoped lang="scss">
  .pr-0 {
    padding-right: 0;
  }
</style>
