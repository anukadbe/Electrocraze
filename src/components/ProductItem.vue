<template>
  <div >  
  
  <v-sheet class="ma-2 pa-2">
    <v-card
        class="product d-flex flex-column"
    >
      <v-img class="mx-auto"
          :src="props.productData.image"
          height="180px" width="170px"
          cover
      />

        <v-card-title>
        {{ props.productData.brand }}
      </v-card-title>

      <v-card-subtitle>
        Rs.{{ props.productData.price }}
      </v-card-subtitle>

      <v-card-text>
        {{ props.productData.description }}
      </v-card-text>

      <v-card-actions>
        <v-btn @click="goToProductPage(props.productData.id)">
          Add to cart
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-sheet>
   </div>
</template>

<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'ProductItem',
  })
</script>

<script setup>
  import { defineProps, defineEmits } from 'vue'
  const props = defineProps({
    productData: {
      type: Object,
      required: true,
    }
  })

  const emit = defineEmits(['item-clicked'])

  const goToProductPage = (productId) => {
    emit('item-clicked', productId)
  }
</script>

<style scoped>
  .product{
    height: 450px;
    width: 300px;
    border: 1px solid rgb(225, 222, 222);
    box-shadow: 4px grey;
  }
  .product:hover{
    cursor: pointer;
    border: 1px solid #ccc;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-6px);
    
  }
  .product-image {
  margin-right: 24px;
  max-width: 300px;
}
.product-image img:hover {
  transform: scale(1.05); /* zoom on hover */
}
.product-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>