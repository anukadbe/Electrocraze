
<template>
  <header>

     <v-toolbar color="primary" dark>
      <!-- Title  -->
      <v-toolbar-title style="cursor: pointer" @click="scrollToSection('home')">
        ElectroCraze
      </v-toolbar-title>

       <!-- Navigation Buttons -->
      <v-btn text @click="router.push('/')">Home</v-btn>
      <v-btn text @click="router.push('/about')">About Us</v-btn>
      <v-btn text @click="router.push('/products')">Products</v-btn>      
      <v-btn text @click="router.push('/contact')">Contact</v-btn>

    

      <v-spacer />
 
      <v-btn
        @click="router.push({ name: 'CartView' })"
        color="white"
        class="cart-btn"
        elevation="4"
      >
        🛒: {{ store.cart.length }}
      </v-btn> 
    </v-toolbar>
  </header>


  <main >
  <v-app>
     <RouterView />

    <Footer/> 
    
   
</v-app>
    
  </main>
  
</template>

<script setup>
  import { useRouter } from "vue-router";
  import { productsStore } from "@/stores/products";
  import Footer from "./views/Footer.vue"



  const router = useRouter()
  const store = productsStore()

  // Smooth scroll to section
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
.cart-items {
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}

.v-toolbar {
  height: 80px !important; 
}
.v-toolbar-title {
  font-size: 2.5rem;
  line-height: 80px;
}
.nav-btn {
  font-size: 1.4rem; 
  padding: 0 20px;      
}

.cart-btn {
  font-size: 1.6rem;
  font-weight: bold;
  color: white;           
}

.v-toolbar {
  height: 80px !important; 
}
</style> 
