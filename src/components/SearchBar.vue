<template>
 <div class="container">
    <div class="row w-100">
      <div class="col col-md-6 offset-md-3 col-xxl-4 offset-xxl-4">
        <input 
          @keyup="changeSearch($event.target.value)"
          type="text"
          value=""
          id="search"
          class="form-control my-5"
          placeholder="Szukaj..."
          aria-label="Szukaj..."
        >
      </div>
    </div>
 </div>
</template>

<script>
import { useMainStore } from '@/store/store'

export default {
  setup() {
    const store = useMainStore()
    const changeSearch = (val) => {
      store.setSearch(val)
      val ? store.searchProducts() : store.getProducts()
    } 
    return {
        state: store.$state,
        changeSearch: changeSearch
    }
  },
  name: 'SearchBar'
}
</script>
