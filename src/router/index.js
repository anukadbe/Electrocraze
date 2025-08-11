import { createRouter, createWebHistory } from 'vue-router'


import Catalog from "@/views/Catalog.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue';
import Contact from '@/views/Contact.vue';
import About from '@/views/About.vue';
import Cart from "@/views/Cart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/products', component: Product },
    { path: '/contact', component: Contact },
    { path: '/', name: 'Catalog',component: Catalog},
    { path: '/product/:id',name: 'ProductView',component: ProductDetail},
    {path: '/cart',name: 'CartView',component: Cart}
  ]
})

export default router