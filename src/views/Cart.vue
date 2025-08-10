

 <template>
  <button @click="router.push({ name: 'Catalog' })"></button>

  <div v-if="!store.cart.length" style="text-align: center">
    <h1>🛒 Your Shopping Cart is Empty</h1>
   
    <!-- recommended section for Cart -->
    <div class="recommended-section mt-10">
    <h2>✨ You may like ✨</h2>
    <div class="recommended-products">
      <div
        v-for="product in store.products.slice(0, 12)"
        :key="product.id"
         cols="12" sm="6" md="3" class="d-flex justify-center" >
        
        <div class="recommended-item">

     
        <img :src="product.image" alt="Product Image" />
        <h3>{{ product.brand }}</h3>
        <p>Rs{{  $formatPrice(product.price )}}</p>
        <v-btn color="primary" @click="store.addToCart(product)">
          Add to Cart
        </v-btn>
        </div>
      </div>
    </div>
  </div>

  </div>
<!-- Add to cart items -->
  <div class="cart-items" v-else>
    <div
        class="cart-item"
        v-for="item in store.cart"
        :key="item.id"
    >
    
      <div class="item-details">
        <img :src="item.image" alt="Product Image">   
        <div> {{ item.brand }}</div>
        <div> Rs.{{ $formatPrice( item.price) }}</div>
        <div>{{ item.description }}</div>
        <div>   
           <button @click="removeFromCart(item.id)">❌</button>
        </div>
      </div>

          

    </div>


    <!-- cart Total -->
    <div class="cart-total">
      <h3>Price Details</h3>
      <hr dotted>
      <div><p>Subtotal: Rs.{{$formatPrice( total) }}</p>
      <p>GST (18%): Rs.{{ $formatPrice(gst) }}</p>
      <h3 style="color: green;">Total Amount: Rs.{{ $formatPrice( totalWithGST) }}</h3></div>
      
    </div>

  </div>

 <!-- recommended section for Empty Cart-->
    <div class="recommended-section ">
    <h2 >✨ You may also like ✨</h2>
    <div class="recommended-products">
      <div
        v-for="product in store.products.slice(0, 8)"
        :key="product.id"
         cols="12" sm="6" md="3" class="d-flex justify-center" >
        
        <div class="recommended-item">

     
        <img :src="product.image" alt="Product Image" />
        <h3>{{ product.brand }}</h3>
        <p>Rs{{ product.price }}</p>
        <v-btn color="primary" @click="store.addToCart(product)">
          Add to Cart
        </v-btn>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'CartView'
  })
</script>

<script setup>
  import { productsStore } from "@/stores/products";
  import { useRouter } from "vue-router";
   import { computed } from 'vue' 

  const router = useRouter()
  const store = productsStore()


  const removeFromCart = (id) => {
    store.removeFromCart(id)
  }

const total = computed(() =>
  store.cart.reduce((sum, item) => sum + item.price, 0)
)

const gst = computed(() => (total.value * 0.18).toFixed(2))
const totalWithGST = computed(() => (total.value * 1.18).toFixed(2))

</script>


<style scoped>
h1{
  font-size: 4rem;
  color:red;
}
h2{
  text-align: center;
  font-style: oblique;
 padding: 30px;
 font-size: 90px;
}
.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  border-radius: 8px;
  padding: 16px;
  width:100%;
}
.item-details img {
  width: 10rem;
}
.cart-total {
  margin-top: 20px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width:120%;
}
.cart-total p {
  margin: 5px 0;
  font-size: 1.3rem;
  color: #333;
  height: 2.4rem;
}
.cart-total h3 {
  margin-top: 10px;
  color: #000;
  font-size: 1.4rem;
  font-weight: bold;
}

/* Responsive Design */
@media (max-width: 768px) {
  .item-details {
    flex-direction: column;
    text-align: center;
  }

  .item-info {
    margin-left: 0;
    margin-top: 10px;
  }

  .item-details img {
    width: 100px;
  }
}

@media (max-width: 480px) {
  .cart-total {
    font-size: 0.9rem;
  }
}

/* Recommended Section */
.recommended-section {
  margin-top: 40px;
}
.recommended-section h2 {
  font-size: 1.6rem;
  margin-bottom: 20px;
}
.recommended-products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.recommended-item {
  width: 400px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 0 10px #e0e0e0;
  border-radius: 8px;
  background-color: white;
}
.recommended-item img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.recommended-item:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
.recommended-item:hover img {
  transform: scale(1.05);
}

</style> 