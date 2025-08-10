import { defineStore } from 'pinia'


export const productsStore = defineStore('products', {
  state: () => ({
    products: [{
        id: 1,
        brand: 'Oppo Mobile',
        price: 14000,
        image: '/public/images/oppoMob.png',
        description:'Oppo A3 Pro 5G (Moonlight Purple, 8Gb Ram, 128Gb Storage)'
      },
    {
        id: 2,
        brand: 'HP Laptop',
        price: 73550,
        image: '/public/images/HP.jpg',
        description:'HP 15.6 FHD Laptop, AMD Ryzen 5, 8GB RAM, 256GB SSD, Pale Rose Gold, Windows 11 Home'
      },
    {
        id: 3,
        brand: 'Lenovo ThinkBook ',
        price: 68958.00,
        image: '/public/images/lenovo thinkbook.jpg',
        description:'ThinkBook 14 Gen 7 (14, Intel)'
      },
    {
        id: 4,
        brand: 'Dell Laptop',
        price: 81889.99,
        image: '/public/images/dell2.avif',
        description:'35.56 cm (14-inch) Copilot+ PC featuring Snapdragon® X Series processors'
      },
    {
        id: 5,
        brand: 'Vivo Mobile',
        price: 25000,
        image: '/public/images/vivo.jpg',
        description:'Vivo Mobile Phone, 7.38mm Ultra Smooth Body, 170g Light, 2.5d Adjusted Outline For A Great Hold'
      },
    {
        id: 6,
        brand: 'MacBook Air',
        price: 99900,
        image: '/public/images/MacBook.jpg',
        description:'10-Core CPU8-Core GPU 16GB Unified Memory 256GB SSD Storage footnote '
      },
    {
        id: 7,
        brand: 'SmartWatch',
        price: 3000,
        image: '/public/images/smartwatch.jpg',
        description:'SHARAV M1 Smart Watch for Men - Smart Watches for Men Women, Bluetooth Smartwatch Touch Screen Wrist Phone Watch, Women - Royal Black ID116 Smart Watch'
      },
    {
        id: 8,
        brand: 'Apple AirPods Pro',
        price: 24900,
        image: '/public/images/apple airpods.jpg',
        description:'Apple AirPods Pro (2nd Generation-USB C) TWS Earbuds with Active Noise Cancellation, MagSafe Case, White)'
      },
    {
        id: 9,
        brand: 'Mivi DuoPods A550 ',
        price: 1000,
        image: '/public/images/miviAirpods.jpg',
        description:'Mivi DuoPods A550 Truly Wireless in Ear Earbuds with Quad Mic ENC(Environmental Noise Cancellation), 13mm Powerful Bass Drivers, 50+ Hours of Playtime, High Audio Quality, Metallic Design (Blue)'
      },
    {
        id: 10,
        brand: 'Apple iPad Air (64GB)',
        price: 49000,
        image: '/public/images/Apple iPad Air (64GB).webp',
        description:'A larger tablet from Apple with a 10.9-inch screen and running on the iOS 15.4 operating system at time of test. The Apple App Store is included for downloading additional apps. Tested with 64GB of storage.'
      },
    {
        id: 11,
        brand: 'Macbook Air Apple M1',
        price: 89900,
        image: '/public/images/Macbook air.jpg',
        description:'Apple 2020 Macbook Air Apple M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)'
      },
    {
        id: 12,
        brand: 'boAt Rockerz 430 ',
        price: 12800,
        image: '/public/images/boatHeadphone.webp',
        description:'boAt Rockerz 430 w/ Beast Mode(40ms Low Latency),40HRS Playback & 40MM Drivers Bluetooth  (Bold Blue, On the Ear)'
      },
    {
        id: 13,
        brand: 'OnePlus Nord CE',
        price:  25998,
        image: '/public/images/onpeplus2.jpg',
        description:'OnePlus Nord CE 4 5G 256 GB (Celadon Marble, 8 GB RAM)'
      },
      
    {
        id: 14,
        brand: 'Whirlpool Washing Machine',
        price:31990.00,
        image: '/public/images/WhirlpoolWM.webp',
        description:'Whirlpool Xpert Care 7kg 5 Star Front Load Washing Machine (33010)'
      },

    {
        id: 15,
        brand: 'Galaxy Buds 3 Pro',
        price: 4399,
        image: '/public/images/earphone.avif',
        description:'Galaxy Buds 3 Pro Silver with Galaxy Ai | Adaptive ANC | Real-Time Interpreter | 24-Bit Hi-Fi Audio | Up to 37H Battery | Ip57 Silver'
      },
      {
        id: 16,
        brand: 'Mivi Play',
        price: 799,
        image: '/public/images/speaker3.jpg',
        description:'Mivi Play Bluetooth Speaker with 12 Hours Playtime. Wireless Speaker Made in India with Exceptional Sound Quality, Portable and Built in Mic-Black'
      },
      {
        id: 17,
        brand: 'boAt Airdopes 131',
        price: 17999,
        image: '/public/images/airdopes 2.webp',
        description:'Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case'
      },
      {
        id: 18,
        brand: 'Akai Top Load',
        price: 11999,
        image: '/public/images/WM2.webp',
        description:'Akai 10.5KG Top Load Black Semi-Automatic Washing Machine( AKSA-105WGBFG)'
      },
      {
        id: 19,
        brand: 'Lenovo Tab',
        price: 1349,
        image: '/public/images/speaker.webp',
        description:'MI Outdoor Bluetooth Speaker (5W) Up to 20 Hours Battery Life, Dynamic Sound Effect, Bluetooth 5.0, IPX5 Splash Proof, Compact & Premium Mesh Design , seal pack'
      },
      {
        id: 20,
        brand: 'boAt Stone ',
        price: 1199,
        image: '/public/images/speaker2.jpg',
        description:'boAt Stone 352/358 Bluetooth Speaker with 10W RMS Stereo Sound, IPX7 Water Resistance, TWS Feature, Up to 12H Total Playtime, Multi-Compatibility Modes and Type-C Charging(Raging Black)'
      },
      {
        id: 21,
        brand: 'Bluetooth Headphones',
        price: 17999,
        image: '/public/images/earphone2.jpg',
        description:'Bluetooth Headphones Metal for Xiaomi Redmi Note 6 Wireless Smartphone Hands Sound Remote Control In-Ear Univ (Pink)'
      },
       {
        id: 22,
        brand: 'iQOO Z10x 5G',
        price: 13498,
        image: '/public/images/mobile.jpg',
        description:'iQOO Z10x 5G (Ultramarine, 6GB RAM, 128GB Storage) | 6500 mAh Large Capacity Battery | Dimensity 7300 Processor | Military-Grade Durability'
      },
       {
        id: 23,
        brand: 'boAt Storm Smart watch ',
        price: 2799,
        image: '/public/images/smartwatch4.webp',
        description:'boAt Storm Smart watch 3.3 cms (1.3 inches) Full Touch Screen Curved Display 24×7 Heart Rate Monitor, Sleep monitor'
      },
       {
        id: 24,
        brand: 'Luyiilo Kids Smart Watch ',
        price: 789,
        image: '/public/images/smartwatch3.jpg',
        description:'Luyiilo Kids Smart Watch with 26 Puzzle Games, HD Camera, and Learning Functions | Perfect Gift for Boys and Girls Ages 4-12'
      },
       {
        id: 25,
        brand: 'Realme 14x 5G',
        price: 17999,
        image: '/public/images/Mobile.webp',
        description:'8 GB RAM | 128 GB ROM | Expandable Upto 2 TB 16.94 cm (6.67 inch) HD+ Display 50MP Rear Camera | 8MP Front Camera 6000 mAh Battery Density 6300 Processor'
      },
       {
        id: 26,
        brand: 'EOS R50 V (RF-S14-30mm f/4-6.3 IS STM PZ)',
        price: 79999,
        image: '/public/images/camera.png',
        description:'Internal 10-bit 4K 60p recording & Canon Log 3 Dual Pixel CMOS AF II & 24.2MP APS-C CMOS Sensor with up to 15FPS False Colour, Zebra Display & Real-time Customisable LUT Preview'
      },
       {
        id: 27,
        brand: 'Apple iPhone 16 | 128 GB',
        price: 80000,
        image: '/public/images/iphone.png',
        description:'128GB ROM 15.49 cm (6.1 inch) Super Retina  XDR Display 48MP + 12MP | 12MP Front Camera A18 Chip, 6 Core Processor Processor'
      },
       {
        id: 28,
        brand: 'Bluetooth Headphones',
        price: 17999,
        image: '/public/images/laptop.jpg',
        description:'Latest Laptop - Sleek Design, High Performance , Advanced Features for Enhanced Productivity'
      },
       {
        id: 29,
        brand: 'Zebronics Unbeatable (Zeb FIT480CH)',
        price: 7499,
        image: '/public/images/smartwatch2.webp',
        description:'Calling Function (Via BT)  Built-in  Menu UI Heart Rate, SpO2, Blood pressure Monitor, Water Proof 2.5D Curved Display '
      },
       {
        id: 30,
        brand: 'ThinkBook 16 Gen 7 (16, AMD)',
        price: 35881,
        image: '/public/images/thinkbook2.avif',
        description:'Huge 16 (40.64 cms) SMB laptop with ergonomic keyboard & numeric pad Multitasks with ease thanks to superfast memory & storage'
      },
      {
        id: 31,
        brand: 'Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X82L (Black)',
        price: 129990,
        image: '/public/images/tv.jpg',
        description:'4K Ultra HD (3840 x 2160) | Refresh Rate: 60 Hertz,4 HDMI ports,Built In Mic,4K HDR Processor X1'
      },
      {
        id: 32,
        brand: 'Samsung 80 cm (32 inches) HD Ready Smart LED TV',
        price: 13990,
        image: '/public/images/tv2.webp',
        description:'LED Panel,Mega Contrast,PurColor,HD Picture Quality, Slim & Stylish Design,2 HDMI ports to connect set top box, Blu Ray players, gaming console'
      },
      
    ],
      cart: []
  }),

  actions: {
    

    addToCart(product) {
      this.cart.push(product)
    },

    removeFromCart(id) {
      console.log('>>>>> ID', id)
      this.cart = this.cart.filter((item) => item.id !== id)
    }
  }
})

