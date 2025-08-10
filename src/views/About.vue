<template>
  <section  class="about-us-section">
    <div class="about-us-container">
      <!-- Left Side -->
      <div class="about-left">
        <h2 class="section-subtitle">About Us</h2>
        <h1 class="section-title">Everything Electronic, Expertly Delivered.</h1>
        <p class="section-description">
                   Welcome to <strong>ElectroCraze</strong>, your trusted store for the latest mobile phones,
          laptops, and smart gadgets. Since 2024, we’ve aimed to deliver top-tier tech at unbeatable prices.

        </p>

        <div class="features">
          <ul>
            <li> Original Products with Warranty</li>
            <li> Fast & Secure Nationwide Delivery</li>
            <li> 24/7 Customer Support</li>
            <li> Remote support and diagnostics</li>
            <li> Easy 7-Day Return Policy</li>
          </ul>
        </div>

        <p class="bold-text">
         We believe technology should enhance your life, not complicate it.
        </p>

      </div>

      <!-- Right Side -->
      <div class="about-right">
        <div class="image-box">
          <img src="/public/images/abt.jpg" alt="" />
       
        </div>

        <div class="testimonial">
          <p class="quote">
            ElectroCraze isn’t just a store. It’s a place where cutting-edge meets customer care. From the latest devices to seamless delivery, they make buying tech feel effortless.”
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUs"
};
</script>

<style scoped>

.about-us-section {
  
  padding: 70px 30px;
  background-color: rgb(244, 241, 239);
  font-family: 'Segoe UI', sans-serif;
}

.about-us-container {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  gap: 40px;
  align-items: center;
}

.about-left {
  flex: 1;
}

.section-subtitle {
  color: black;
  font-weight: bold;
  font-size: 50px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  margin-top: 50px;
  color:rgb(59, 62, 66)
}

.section-description {
  margin: 30px 0;
  line-height: 1.6;
  color: #444;
  font-size: 1.3rem;
}

.features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  font-size: 1.5rem;
}

.features li::before {
  content: "✔";
  position: absolute;
  left: 0;
  color: #28a745;
}

.bold-text {
  font-weight: 600;
  margin: 20px 0;
  font-size: 20px;
}

.about-right {
  flex: 1;
  min-width: 300px;
}

/* .image-box {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
} */

.image-box img {
  width: 90%;
  border-radius: 16px;
  object-fit: cover;
  height: auto;
}
.testimonial {
  margin-top: 40px;
}

.quote {
  font-style: italic;
  color: #444;
  font-size: 20px;
  position: relative;
  padding-left: 30px;
}

.quote::before {
  content: "❝";
  font-size: 34px;
  position: absolute;
  left: 0;
  top: -5px;
  color: #43b9f8;
}


</style>
