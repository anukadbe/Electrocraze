<!-- src/views/Products.vue -->
<template>
  <div class="container">
    <h2 class="text-center my-5" styl> Products</h2>

    <v-container class="container">
      <v-row>
        <!-- Display limited products or all based on showAll flag -->
        <v-col
          v-for="product in displayedProducts"
          :key="product.id + product.brand"
          cols="12"
          sm="6"
          md="3"
        >
          <ProductItem :productData="product" @item-clicked="addToCart" />
        </v-col>
      </v-row>
    </v-container>

      <!-- Show More / Show Less Button -->
      <div class="text-center my-4">
        <v-btn
          color="primary"
          variant="elevated"
          @click="showAll = !showAll"
        >
          {{ showAll ? 'Show Less' : 'Show More' }}
        </v-btn>
      </div>
    
  </div>
</template>

<script setup>
import { productsStore } from '@/stores/products'
import ProductItem from '@/components/ProductItem.vue'
import { ref, computed } from 'vue'


const store = productsStore()
const showAll = ref(false)



// Computed list of products based on showAll 
const displayedProducts = computed(() => {
  return showAll.value ? store.products : store.products.slice(0, 8)
})
const addToCart = (productId) => {
  const product = store.products.find(p => p.id === productId)
  if (product) {
    store.addToCart(product)
  }
}
</script>

<style>
.container{
  background-color:rgb(250, 248, 246);
}
</style>
