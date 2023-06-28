import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  
  id: 'mainStore',
    
  state: () => ({
    loading: false,
    order: 'price-asc',
    products: [],
    search: ''
  }),
  
  actions: {
    async getProducts() {
        this.loading = true
        const response = await fetch('https://demo.crehler.dev/store-api/product-listing/e435c9763b0d44fcab67ea1c0fdb3fa0', 
          {
            method: 'POST',
            headers: {'content-type': 'application/json;charset=UTF-8', 'Accept': 'application/json', 'sw-access-key': 'SWSCMDV3N2DIOUNZTKNNCTBBCW'},
            body: JSON.stringify({order: this.order})
          })
        if (response.status === 200) {
            const data = await response.json()
            this.products = data.elements                       
        } else {
          alert('Błąd połączenia z API')
        }
        this.loading = false
      },
    async searchProducts() {
        this.loading = true
        const response = await fetch('https://demo.crehler.dev/store-api/search', 
          {
            method: 'POST',
            headers: {'content-type': 'application/json;charset=UTF-8', 'Accept': 'application/json', 'sw-access-key': 'SWSCMDV3N2DIOUNZTKNNCTBBCW'},
            body: JSON.stringify({search: this.search, order: this.order})
          })
        if (response.status === 200) {
            const data = await response.json()
            this.products = data.elements                       
        } else {
          alert('Błąd połączenia z API')
        }
        this.loading = false
      },
    setOrder(val) {
      this.order = val
    },
    setSearch(val) {
      this.search = val
    },
  },
})
