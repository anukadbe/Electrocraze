<template>

  <v-btn
      @click="router.push({ name: 'Catalog' })"
      color="primary"
      variant="elevated">
    🔙

  </v-btn>

  <div class="product">
    <div class="product-image">
      <img :src="selectedProduct.image" alt="">
    </div>
    <div class="product-details">
      <p>Brand: {{ selectedProduct.brand }}</p>
      <p>Description: {{ selectedProduct.description }}</p>
      <h2>Price: Rs.{{  selectedProduct.price }}</h2>
      <v-btn
          variant="elevated"
          color="indigo-lighten-3"
          @click="addToCart"
      >  Add to cart</v-btn>
    </div>
  </div>
</template>


<script>
  import { defineComponent } from "vue";
  import { formatPrice } from "@/utils/formatPrice";

  export default defineComponent({
    name: 'ProductDetails'
  })
</script>

<script setup>
  import { computed } from "vue";
  import { productsStore } from "@/stores/products";
  import { useRoute, useRouter } from "vue-router";

  const store = productsStore()
  const router = useRouter()
  const route = useRoute()

  const selectedProduct = computed(() => {
    return store.products.find((item) => item.id === Number(route.params.id))
  })

  const addToCart = () => {
    store.addToCart(selectedProduct.value)
    router.push({ name: 'CartView' })
  }
</script>

<style scoped>

.product {

  display: flex;
  flex-wrap: wrap;
  /* grid-template-columns: auto; */
  margin-top: 30px;
  padding: 20px;  
}
.product-image {
  margin-right: 10px;
  
}


</style>