<template>
  <v-container fluid class="home-container pa-0">
    <!-- Hero Section -->
    <div class="hero-section" >
      
      <div class="overlay">
        <div class="content">
          <h1>Empowering Digital Living</h1>
          <p>Discover top-notch electronics at unbeatable prices.</p>
          <v-btn color="primary" class="mt-4" @click="$router.push('/products')">Shop Now</v-btn>
        </div>
      </div>
    </div>

  
  <v-container class="offer-banner py-12">
  <v-row  justify="center" align="center" dense>
    <v-col cols="12" class="text-center">
      <h1 class="offer-title">🔥 Special Offers</h1>
      <p class="offer-subtitle">Grab the hottest deals on electronics – limited time only!</p>
    </v-col>

    <v-col cols="12" md="5">
      <div class="offer-card success">
        🎉 Flat 20% Off on Laptops – Limited Time Offer!
      </div>
    </v-col>

    <v-col cols="12" md="5">
      <div class="offer-card info">
        🛍️ Festive Sale: Buy 1 Get 1 Free on Smart Accessories!
      </div>
    </v-col>

    <!-- <v-col cols="12" class="text-center mt-6">
      <v-btn color="secondary" large @click="$router.push('/products')">
        View All Products
      </v-btn>
    </v-col> -->
  </v-row>
</v-container>

 </v-container>
<!-- <Home/> -->
<About/>
<Product/>
<Contact/>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<script setup>
import About from './About.vue';
import Product from './Product.vue';
import Contact from './Contact.vue';

</script>

<style scoped>
/* ===== HERO SECTION ===== */

.hero-section {
  position: relative;
  text-align: center;
  color: rgb(165, 17, 181);
  font-size: 20px;
  padding: 100px 20px;
  background: url('/public/images//home.avif') center/cover no-repeat ;
}
h1{
  color: rgb(153, 6, 133);
}

.section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.home-section {
  background: url('/images/home-bg.jpg') center/cover no-repeat;
  color: white;
}


.hero-section h1 {
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  animation: fadeInDown 1s ease-in-out;
}

.hero-section p {
  font-size: 1.2rem;
  margin-top: 10px;
  animation: fadeInUp 1.2s ease-in-out;
}

.hero-section .btn {
  margin-top: 20px;
  background: #007bff;
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: bold;
  letter-spacing: 0.5px;
  transition: background 0.3s ease, transform 0.3s ease;
}

.hero-section .btn:hover {
  background: #0056b3;
  transform: scale(1.05);
}

/* ===== SPECIAL OFFERS ===== */

.special-offers {
   
  margin-top: -50px;
  padding: 30px;
  border-radius: 20px;
  background: linear-gradient(135deg, #89f7fe, #66a6ff);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
  animation: fadeIn 1.5s ease-in-out;
  
}

.special-offers h2 {
  font-size: 2rem;
  font-weight: bold;
  color: white;
}
.offer-title{
  font-size: 3rem;
}
.offer-subtitle{
  font-size: 30px;
}

.special-offers p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  margin-bottom: 20px;
}

.offer-card {
  display: inline-block;
  margin: 10px;
  padding: 15px 25px;
  background: rgb(214, 237, 124);
  border-radius: 12px;
  font-weight: 500;
  font-size: 2rem;
  box-shadow: 0 4px 15px rgba(0, 1, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.offer-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* ===== ANIMATIONS ===== */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  .special-offers {
    margin-top: 0;
    padding: 20px;
  }
  .offer-card {
    display: block;
    margin: 10px auto;
    max-width: 90%;
  }
}

.overlay {
  height: 100%;
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
}

.slogan {
  color: #fff;
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
}
</style> 
