<template> 
  <div id="contact" class="contact-section">
    <v-container class="contact-container" fluid>
      <v-row justify="center">
        <v-col cols="12" md="6" class="form-card">
          <h2 class="text-center mb-6 contact-title">📩 Contact Us</h2>

          <v-form ref="form" v-model="valid">
            <v-text-field
              label="Name"
              v-model="form.name"
              :rules="[v => !!v || 'Name is required']"
              outlined dense
              required
            />

            <v-text-field
              label="Email"
              v-model="form.email"
              :rules="[v => /.+@.+\..+/.test(v) || 'Valid email is required']"
              outlined dense
              required
            />

            <v-text-field
              label="Subject"
              v-model="form.subject"
              :rules="[v => !!v || 'Subject is required']"
              outlined dense
              required
            />

            <v-textarea
              label="Message"
              v-model="form.message"
              :rules="[v => !!v || 'Message is required']"
              outlined dense
              required
            />

            <v-btn
              class="submit-btn" style="background-color: blue; color: white;"
              large
              block
              @click="submitForm"
              :disabled="!valid"
            >
              Send Message
            </v-btn>
          </v-form>

          <!-- Social Media Links -->
        <div class="social-links mt-8 text-center">
  <h3>Connect With Us</h3>
  <a href="https://web.whatsapp.com/" target="_blank" title="WhatsApp">
    <v-icon color="green" size="36">mdi-whatsapp</v-icon>
  </a>
  <a href="https://facebook.com/" target="_blank" title="Facebook">
    <v-icon color="#4267B2" size="36">mdi-facebook</v-icon>
  </a>
  <a href="https://twitter.com/" target="_blank" title="Twitter">
    <v-icon color="#1DA1F2" size="36">mdi-twitter</v-icon>
  </a>
  <a href="https://instagram.com/" target="_blank" title="Instagram">
    <v-icon color="#C13584" size="36">mdi-instagram</v-icon>
  </a>
</div>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template> 


 <script>
export default {
  name: "ContactPage",
  data() {
    return {
      valid: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        console.log("Form Submitted:", this.form);
        alert("Message sent successfully!");
        this.$refs.form.reset();
      }
    }
  }
};
</script>

<style> 

 h2{
  font-size: 30px;
}
h3{
  font-size: 25px;
}

.social-links a {
  
  margin: 0 8px;
  display: inline-block;
  transition: transform 0.2s ease;
}

.social-links a:hover {
  transform: scale(1.2);
}

</style>







 
