<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <h2>ElectroCraze</h2>
        <p>Empowering Digital Living</p>
      </div>

      <div class="footer-links">
        <a href="#home" @click.prevent="scrollTo('home')">Home</a>
        <a href="#products" @click.prevent="scrollTo('products')">Products</a>
        <a href="#about" @click.prevent="scrollTo('about')">About Us</a>
      </div>
      
    </div>
    <p class="footer-copy">© {{ new Date().getFullYear() }} ElectroCraze. All Rights Reserved.</p>
  </footer>
</template>

<script setup>
const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
.footer {
  background: #222;
  color: #ccc;
  padding: 30px 20px;
  text-align: center;
}
.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  max-width: 1000px;
  margin: auto;
}
.footer-logo h2 {
  color: #fff;
}
.footer-links a {
  display: block;
  color: #ccc;
  text-decoration: none;
  margin: 5px 0;
}
.footer-links a:hover {
  color: #fff;
}
.footer-social a {
  color: #ccc;
  margin: 0 10px;
  font-size: 20px;
}
.footer-social a:hover {
  color: #fff;
}
.footer-copy {
  margin-top: 20px;
  font-size: 14px;
  color: #777;
}
</style>
