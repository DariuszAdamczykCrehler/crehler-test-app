<template>
  <TopMenu />
  <SearchBar />
  <ProductsCard />
</template>

<script>
import TopMenu from './components/TopMenu.vue'
import SearchBar from './components/SearchBar.vue'
import ProductsCard from './components/ProductsCard.vue'

export default {
  name: 'App',
  components: {
    TopMenu,
    SearchBar,
    ProductsCard
  }
}
</script>
