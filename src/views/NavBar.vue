
<template>
  
  <v-app-bar app color="primary" dark class="navbar">

    <v-spacer />
  
    <v-btn text to="/home" class="nav-link">Home</v-btn>
    <v-btn text to="/product" class="nav-link">Products</v-btn>
    <v-btn text to="/about" class="nav-link">About Us</v-btn>
    <v-btn text to="/contact" class="nav-link">Contact</v-btn>
  </v-app-bar>
  
</template>

<script>
export default {
  name: "NavBar",
};
</script> 
 <style scoped>
.navbar {
  font-weight: 30px;
}

.nav-link {
  color: #fff !important;
  transition: all 0.3s ease;
  margin-left: 10px;
}
</style> 
