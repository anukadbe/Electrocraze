#  E-Commerce Website -ElectroCraze 
ElectroCraze is a responsive e-commerce web application built with Vue.js and Vuetify, featuring product listing, shopping cart, responsive layouts, and a modern UI.  
It is designed to showcase a seamless online shopping experience for electronics and gadgets.

# Features
- Responsive UI — Optimized for mobile, tablet, and desktop devices
- Product Catalog — Browse products with images, titles, prices, and descriptions
- Product Details Page — View enlarged product image and detailed specs
- Shopping Cart — Add/remove items, adjust quantity, and view total price
- Navigation — Smooth routing between Home, Products, About, and Contact pages
- Vuetify Components — Modern UI components for a polished look
- State Management — Vuex store to handle cart operations


# Tech Stack
- Frontend Framework:
- UI Library:
- Routing: Vue Router
- State Management: Vuex
- Styling: CSS + Vuetify + Responsive Media Queries


# Folder Structure
ElectroCraze/
│
├── src/
│ ├── assets/ # Images, global styles
│ ├── components/ # Reusable Vue components
│ ├── pages/ # Page-level Vue components
│ ├── store/ # Vuex store (cart state)
│ ├── router/ # Vue Router configuration
│ ├── App.vue # Root Vue component
│ ├── main.js # Entry point
│
├── public/ # Static assets
├── package.json # Dependencies and scripts
└── README.md # Project documentation


# Installation & Setup

1. Clone the repository
      bash
      git clone https://github.com/<your-username>/ElectroCraze.git
      cd ElectroCraze

2. Install dependencies
      npm install

3. Run Development Server
       npm run serve


# Build for Production

npm run build
This will generate a /dist folder with production-ready files.


# Responsive Design
Mobile (≤ 600px) — Stacked product cards and centered cart details

Tablet (601px – 1024px) — Two-column product layout

Desktop (≥ 1025px) — Multi-column product layout with side cart
