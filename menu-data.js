// menu-data.js - Premium QR Menu Dataset

const menuCategories = [
  {
    id: "signature",
    name: { tr: "Signature Drinks", en: "Signature Drinks" },
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
  },
  {
    id: "cold-coffees",
    name: { tr: "Soğuk Kahveler", en: "Cold Coffees" },
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`
  },
  {
    id: "hot-coffees",
    name: { tr: "Sıcak Kahveler", en: "Hot Coffees" },
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z"/><path d="M6 1v3"/><path d="M10 1v3"/><path d="M14 1v3"/></svg>`
  },
  {
    id: "teas",
    name: { tr: "Çay & Bitki Çayları", en: "Tea & Herbal Teas" },
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M3 8c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0"/></svg>`
  },
  {
    id: "smoothies",
    name: { tr: "Smoothies", en: "Smoothies" },
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7V6H5v9a7 7 0 0 0 7 7Z"/><path d="M12 2v4"/><path d="M16 3l-4 3"/></svg>`
  },
  {
    id: "ny-rolls",
    name: { tr: "New York Rolls", en: "New York Rolls" },
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
  },
  {
    id: "croissants",
    name: { tr: "Kruvasanlar", en: "Croissants" },
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16c4-6 10-6 14 0"/><path d="M7 14c2.5-3.5 7.5-3.5 10 0"/><path d="M12 12c1.5-2 4.5-2 6 0"/><path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3"/><path d="M5 6H2v10"/></svg>`
  },
  {
    id: "sandwiches",
    name: { tr: "Sandviçler", en: "Sandwiches" },
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>`
  },
  {
    id: "juices",
    name: { tr: "Cold-Pressed Juice", en: "Cold-Pressed Juices" },
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"/><path d="M12 2v4"/><path d="M9 12h6"/></svg>`
  },
  {
    id: "savory",
    name: { tr: "Tuzlu & Atıştırmalık", en: "Savory & Snacks" },
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
  },
  {
    id: "desserts",
    name: { tr: "Patisserie & Tatlı", en: "Patisserie & Dessert" },
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20M12 2a10 10 0 0 1 10 10M12 2a10 10 0 0 0-10 10M12 22a10 10 0 0 0 10-10M12 22a10 10 0 0 1-10-10"/></svg>`
  },
  {
    id: "healthy",
    name: { tr: "Sağlıklı & Vegan", en: "Healthy & Vegan" },
    icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/></svg>`
  }
];

const menuItems = [
  // 1. SIGNATURE DRINKS (8 items)
  {
    id: "sig_lavender_latte",
    categoryId: "signature",
    name: { tr: "Lavanta Çiçeği Latte", en: "Lavender Bloom Latte" },
    description: {
      tr: "Espresso, taze lavanta özü, kurutulmuş lavanta tanecikleri ve kremsi süt köpüğü.",
      en: "Espresso combined with fresh lavender extract, dried lavender buds, and velvety milk foam."
    },
    price: 135,
    calories: 210,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["hot", "popular"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: true, hasSweetness: true, hasSyrups: true }
  },
  {
    id: "sig_strawberry_matcha",
    categoryId: "signature",
    name: { tr: "Buzlu Çilekli Matcha Latte", en: "Iced Strawberry Matcha Latte" },
    description: {
      tr: "Özel Uji Matcha yeşil çayı, taze çilek püresi, süt ve buzun muhteşem katmanlı uyumu.",
      en: "Layered premium Uji Matcha, fresh strawberry puree, milk, and ice."
    },
    price: 165,
    calories: 220,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["cold", "popular"],
    image: "33745144-a54a-4bd5-9f0d-c6410833b34c.png",
    options: { hasMilk: true, hasSweetness: true, hasSyrups: false }
  },
  {
    id: "sig_salted_caramel_cold",
    categoryId: "signature",
    name: { tr: "Tuzlu Karamel Cold Foam", en: "Salted Caramel Cold Foam" },
    description: {
      tr: "24 saat demlenmiş soğuk kahve üzerine ev yapımı tuzlu karamel aromalı soğuk süt köpüğü.",
      en: "24-hour slow-steeped cold brew topped with house-made salted caramel cold foam."
    },
    price: 140,
    calories: 160,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["cold", "popular"],
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "sig_gold_dust",
    categoryId: "signature",
    name: { tr: "24K Altın Tozlu Cortado", en: "24K Gold Dust Cortado" },
    description: {
      tr: "Çift shot espresso, sıcak süt, kadifemsi mikro köpük ve yenilebilir 24 ayar altın tozu.",
      en: "Double shot espresso, warm milk, microfoam, dusted with edible 24K gold flakes."
    },
    price: 180,
    calories: 90,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["hot"],
    image: "https://images.unsplash.com/photo-151097252790b-a638d6211a2c?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: true, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "sig_coconut_cold_brew",
    categoryId: "signature",
    name: { tr: "Hindistan Cevizli Cold Brew", en: "Coconut Tonic Cold Brew" },
    description: {
      tr: "Cold Brew, tonik suyu, taze misket limonu suyu ve organik hindistan cevizi sütü katmanı.",
      en: "Cold Brew layered with tonic water, fresh lime juice, and organic coconut milk."
    },
    price: 135,
    calories: 80,
    allergens: { tr: "Yok", en: "None" },
    tags: ["cold", "vegan"],
    image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: true, hasSyrups: false }
  },
  {
    id: "sig_pistachio_rose",
    categoryId: "signature",
    name: { tr: "Fıstıklı Antep Rüyası Latte", en: "Pistachio Dream Latte" },
    description: {
      tr: "Doğal Antep fıstığı ezmesi şurubu, çift shot espresso, badem sütü ve Antep fıstığı kırıkları.",
      en: "Natural pistachio paste syrup, double shot espresso, almond milk, and crushed pistachios."
    },
    price: 155,
    calories: 260,
    allergens: { tr: "Antep Fıstığı, Badem Sütü", en: "Pistachio, Almond" },
    tags: ["hot", "popular"],
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: true, hasSweetness: true, hasSyrups: true }
  },
  {
    id: "sig_smoked_hazelnut",
    categoryId: "signature",
    name: { tr: "Füme Fındık Latte Macchiato", en: "Smoked Hazelnut Latte" },
    description: {
      tr: "Kavrulmuş füme fındık aroması, espresso, karamelize esmer şeker ve buharda ısıtılmış süt.",
      en: "Toasted smoked hazelnut flavor, espresso, caramelized brown sugar, and steamed milk."
    },
    price: 140,
    calories: 230,
    allergens: { tr: "Süt, Fındık", en: "Dairy, Hazelnut" },
    tags: ["hot"],
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: true, hasSweetness: true, hasSyrups: true }
  },
  {
    id: "sig_butterfly_pea",
    categoryId: "signature",
    name: { tr: "Mavi Kelebek Limonata", en: "Blue Butterfly Lemonade" },
    description: {
      tr: "Mavi Kelebek Sarmaşığı çayı (Butterfly Pea Tea), taze sıkılmış limonata ve lavanta şurubu.",
      en: "Butterfly Pea Tea, fresh-squeezed lemonade, and lavender syrup. Watch it turn purple!"
    },
    price: 130,
    calories: 110,
    allergens: { tr: "Yok", en: "None" },
    tags: ["cold", "vegan"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: true, hasSyrups: false }
  },

  // 2. COLD COFFEES (8 items)
  {
    id: "cc_iced_latte",
    categoryId: "cold-coffees",
    name: { tr: "Iced Latte", en: "Iced Latte" },
    description: {
      tr: "Klasik espresso shot, soğuk süt ve buz küpleri.",
      en: "Classic espresso shot over cold milk and ice cubes."
    },
    price: 110,
    calories: 120,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["cold"],
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: true, hasSweetness: true, hasSyrups: true }
  },
  {
    id: "cc_iced_americano",
    categoryId: "cold-coffees",
    name: { tr: "Iced Americano", en: "Iced Americano" },
    description: {
      tr: "Espresso shotları ve soğuk suyun buzla serinletici uyumu.",
      en: "Espresso shots and cold water served refreshingly over ice."
    },
    price: 95,
    calories: 5,
    allergens: { tr: "Yok", en: "None" },
    tags: ["cold", "vegan"],
    image: "https://images.unsplash.com/photo-1516248847035-7799a09a56b4?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: true }
  },
  {
    id: "cc_iced_mocha",
    categoryId: "cold-coffees",
    name: { tr: "Iced Mocha", en: "Iced Mocha" },
    description: {
      tr: "Espresso, çikolata sosu, soğuk süt ve buz.",
      en: "Espresso combined with rich chocolate sauce, cold milk, and ice."
    },
    price: 125,
    calories: 290,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["cold"],
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: true, hasSweetness: true, hasSyrups: true }
  },
  {
    id: "cc_iced_white_mocha",
    categoryId: "cold-coffees",
    name: { tr: "Iced White Chocolate Mocha", en: "Iced White Chocolate Mocha" },
    description: {
      tr: "Beyaz çikolata sosu, espresso, soğuk süt ve buz.",
      en: "White chocolate sauce, espresso, cold milk, and ice."
    },
    price: 130,
    calories: 310,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["cold", "popular"],
    image: "https://images.unsplash.com/photo-1589476993333-f55b84301219?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: true, hasSweetness: true, hasSyrups: true }
  },
  {
    id: "cc_cold_brew_classic",
    categoryId: "cold-coffees",
    name: { tr: "Klasik Cold Brew", en: "Classic Cold Brew" },
    description: {
      tr: "24 saat soğuk suda demlenmiş, yumuşak içimli, asiditesi düşük filtre kahve.",
      en: "24-hour cold-water steeped filter coffee, naturally sweet, smooth, and low acidity."
    },
    price: 110,
    calories: 3,
    allergens: { tr: "Yok", en: "None" },
    tags: ["cold", "vegan", "popular"],
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "cc_shakerato",
    categoryId: "cold-coffees",
    name: { tr: "Espresso Shakerato", en: "Espresso Shakerato" },
    description: {
      tr: "Çift shot espresso, hafif şeker şurubu ve buzun shaker'da çalkalanmasıyla oluşan yoğun köpüklü İtalyan klasiği.",
      en: "Double shot espresso shaken with ice and simple syrup, resulting in a rich frothy finish."
    },
    price: 105,
    calories: 40,
    allergens: { tr: "Yok", en: "None" },
    tags: ["cold"],
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: true, hasSyrups: false }
  },
  {
    id: "cc_iced_flat_white",
    categoryId: "cold-coffees",
    name: { tr: "Iced Flat White", en: "Iced Flat White" },
    description: {
      tr: "Double shot ristretto espresso ve soğuk sütün ince köpüklü buzlu sunumu.",
      en: "Double shot ristretto espresso combined with chilled milk and ice."
    },
    price: 120,
    calories: 110,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["cold"],
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: true, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "cc_iced_caramel_macchiato",
    categoryId: "cold-coffees",
    name: { tr: "Iced Caramel Macchiato", en: "Iced Caramel Macchiato" },
    description: {
      tr: "Vanilya şurubu, soğuk süt, buz, üstünde espresso katmanı ve karamel sos.",
      en: "Vanilla syrup, cold milk, ice, layered with espresso and topped with rich caramel drizzle."
    },
    price: 125,
    calories: 220,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["cold", "popular"],
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: true, hasSweetness: true, hasSyrups: false }
  },

  // 3. HOT COFFEES (8 items)
  {
    id: "hc_espresso",
    categoryId: "hot-coffees",
    name: { tr: "Espresso (Single / Double)", en: "Espresso (Single / Double)" },
    description: {
      tr: "Özenle seçilmiş Arabica çekirdeklerinden yoğun aromalı İtalyan kahvesi.",
      en: "Rich and intense Italian coffee brewed from carefully selected Arabica beans."
    },
    price: 75,
    calories: 2,
    allergens: { tr: "Yok", en: "None" },
    tags: ["hot"],
    image: "b5c3c01c-106d-4f69-93c3-3d01a5b0e89c.jpg",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "hc_americano",
    categoryId: "hot-coffees",
    name: { tr: "Caffe Americano", en: "Caffe Americano" },
    description: {
      tr: "Double shot espresso üzerine eklenen sıcak su ile yumuşatılmış içim.",
      en: "Double shot espresso diluted with hot water for a smooth finish."
    },
    price: 90,
    calories: 5,
    allergens: { tr: "Yok", en: "None" },
    tags: ["hot"],
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: true }
  },
  {
    id: "hc_latte",
    categoryId: "hot-coffees",
    name: { tr: "Caffe Latte", en: "Caffe Latte" },
    description: {
      tr: "Espresso shot, buharla ısıtılmış süt ve üzerindeki ince kadifemsi köpük katmanı.",
      en: "Espresso shot, steamed milk, and a thin layer of velvety microfoam."
    },
    price: 105,
    calories: 150,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["hot", "popular"],
    image: "b5c3c01c-106d-4f69-93c3-3d01a5b0e89c.jpg",
    options: { hasMilk: true, hasSweetness: true, hasSyrups: true }
  },
  {
    id: "hc_cappuccino",
    categoryId: "hot-coffees",
    name: { tr: "Cappuccino", en: "Cappuccino" },
    description: {
      tr: "Eşit oranlarda espresso, sıcak süt ve yoğun süt köpüğünün mükemmel dengesi.",
      en: "An espresso shot topped with equal parts steamed milk and thick, creamy milk foam."
    },
    price: 105,
    calories: 130,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["hot"],
    image: "b5c3c01c-106d-4f69-93c3-3d01a5b0e89c.jpg",
    options: { hasMilk: true, hasSweetness: true, hasSyrups: true }
  },
  {
    id: "hc_flat_white",
    categoryId: "hot-coffees",
    name: { tr: "Flat White", en: "Flat White" },
    description: {
      tr: "Double ristretto shot üzerine dökülen ince mikro köpüklü kadife süt.",
      en: "Double shot of ristretto espresso with steamed milk and a thin layer of microfoam."
    },
    price: 115,
    calories: 120,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["hot"],
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: true, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "hc_cortado",
    categoryId: "hot-coffees",
    name: { tr: "Cortado", en: "Cortado" },
    description: {
      tr: "Eşit miktarda espresso ve sıcak süt karışımıyla espresso sertliğini yumuşatan İspanyol klasiği.",
      en: "Espresso cut with an equal amount of warm, steamed milk to reduce acidity."
    },
    price: 100,
    calories: 70,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["hot"],
    image: "https://images.unsplash.com/photo-151097252790b-a638d6211a2c?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: true, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "hc_mocha",
    categoryId: "hot-coffees",
    name: { tr: "Caffe Mocha", en: "Caffe Mocha" },
    description: {
      tr: "Espresso, yoğun çikolata sosu ve sıcak sütün krema ile tatlı buluşması.",
      en: "Espresso combined with rich chocolate syrup and steamed milk, topped with whipped cream."
    },
    price: 125,
    calories: 320,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["hot"],
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: true, hasSweetness: true, hasSyrups: true }
  },
  {
    id: "hc_turkish_coffee",
    categoryId: "hot-coffees",
    name: { tr: "Geleneksel Türk Kahvesi", en: "Traditional Turkish Coffee" },
    description: {
      tr: "Bakır cezvede yavaş demlenmiş, lokum ve su ile servis edilen geleneksel lezzet.",
      en: "Slow-brewed in a traditional copper pot, served with Turkish delight and water."
    },
    price: 80,
    calories: 15,
    allergens: { tr: "Yok", en: "None" },
    tags: ["hot", "popular"],
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },

  // 4. TEA & HERBAL TEAS (8 items)
  {
    id: "tea_turkish",
    categoryId: "teas",
    name: { tr: "Rize Harmanı Demleme Çay", en: "Brewed Turkish Tea" },
    description: {
      tr: "Doğu Karadeniz'in seçkin çay yapraklarından demlenen geleneksel tavşan kanı çay.",
      en: "Traditional rich amber Turkish tea brewed from premium Black Sea tea leaves."
    },
    price: 45,
    calories: 0,
    allergens: { tr: "Yok", en: "None" },
    tags: ["hot"],
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "tea_earl_grey",
    categoryId: "teas",
    name: { tr: "Premium Earl Grey", en: "Premium Earl Grey" },
    description: {
      tr: "Bergamot aromalı özel harman Seylan çayı.",
      en: "Black Ceylon tea scented with natural bergamot citrus oil."
    },
    price: 85,
    calories: 0,
    allergens: { tr: "Yok", en: "None" },
    tags: ["hot"],
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "tea_matcha",
    categoryId: "teas",
    name: { tr: "Matcha Latte", en: "Matcha Latte" },
    description: {
      tr: "Saf yeşil çay tozunun sıcak yulaf sütü ile zenginleştirilmiş dengeli içimi.",
      en: "Pure stone-ground green tea powder whisked with steamed oat milk."
    },
    price: 135,
    calories: 140,
    allergens: { tr: "Yok", en: "None" },
    tags: ["hot", "vegan", "popular"],
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: true, hasSweetness: true, hasSyrups: false }
  },
  {
    id: "tea_chai_latte",
    categoryId: "teas",
    name: { tr: "Chai Tea Latte", en: "Chai Tea Latte" },
    description: {
      tr: "Kakule, tarçın, zencefil ve karanfil gibi aromatik baharatların sütle enfes uyumu.",
      en: "Aromatic black tea infused with cardamom, cinnamon, ginger, cloves, and steamed milk."
    },
    price: 125,
    calories: 210,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["hot", "popular"],
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: true, hasSweetness: true, hasSyrups: false }
  },
  {
    id: "tea_boba_milk",
    categoryId: "teas",
    name: { tr: "Klasik Boba Bubble Tea", en: "Classic Boba Bubble Tea" },
    description: {
      tr: "Klasik siyah sütlü çay, esmer şeker ve ev yapımı çiğnenebilir tapiyoka incileri.",
      en: "Classic black milk tea infused with brown sugar and house-made chewy tapioca pearls."
    },
    price: 140,
    calories: 340,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["cold", "popular"],
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: true, hasSweetness: true, hasSyrups: false }
  },
  {
    id: "tea_hibiscus",
    categoryId: "teas",
    name: { tr: "Ekinezya Hibisküs Soğuk Demleme", en: "Hibiscus Echinacea Iced Brew" },
    description: {
      tr: "Hibisküs çiçeği, ekinezya, taze nane yaprakları ve çilek dilimleriyle serinletici soğuk çay.",
      en: "Brewed hibiscus flower, echinacea, fresh mint leaves, and strawberry slices served cold."
    },
    price: 110,
    calories: 45,
    allergens: { tr: "Yok", en: "None" },
    tags: ["cold", "vegan"],
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: true, hasSyrups: false }
  },
  {
    id: "tea_jasmine",
    categoryId: "teas",
    name: { tr: "Yaseminli Yeşil Çay", en: "Jasmine Green Tea" },
    description: {
      tr: "Kurutulmuş taze yasemin çiçekleri ile kokulandırılmış organik yeşil çay yaprakları.",
      en: "Organic green tea leaves scented with fresh jasmine blossoms."
    },
    price: 90,
    calories: 0,
    allergens: { tr: "Yok", en: "None" },
    tags: ["hot", "vegan"],
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "tea_chamomile",
    categoryId: "teas",
    name: { tr: "Papatya & Limon Otu Çayı", en: "Chamomile Lemongrass Tea" },
    description: {
      tr: "Sakinleştirici mayıs papatyası, kurutulmuş limon kabuğu ve taze limon otu yaprakları.",
      en: "Soothing German chamomile blossoms, dried lemon peel, and fresh lemongrass."
    },
    price: 90,
    calories: 0,
    allergens: { tr: "Yok", en: "None" },
    tags: ["hot", "vegan"],
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },

  // 5. SMOOTHIES (8 items)
  {
    id: "sm_berry_blast",
    categoryId: "smoothies",
    name: { tr: "Orman Meyveleri Smoothie", en: "Forest Berry Blast" },
    description: {
      tr: "Yaban mersini, çilek, ahududu, muz, yoğurt ve organik elma suyu ile.",
      en: "Blueberry, strawberry, raspberry, banana blended with yogurt and organic apple juice."
    },
    price: 140,
    calories: 220,
    allergens: { tr: "Yoğurt (Süt)", en: "Yogurt (Dairy)" },
    tags: ["cold", "popular"],
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: true, hasSyrups: false }
  },
  {
    id: "sm_green_cleanse",
    categoryId: "smoothies",
    name: { tr: "Yeşil Detoks / Green Cleanse", en: "Green Cleanse Detox" },
    description: {
      tr: "Ispanak, kereviz sapı, yeşil elma, zencefil, limon, chia tohumu ve hindistan cevizi suyu.",
      en: "Baby spinach, celery sticks, green apple, ginger, lemon, chia seeds, and coconut water."
    },
    price: 145,
    calories: 140,
    allergens: { tr: "Kereviz", en: "Celery" },
    tags: ["cold", "vegan", "popular"],
    image: "https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "sm_mango_passion",
    categoryId: "smoothies",
    name: { tr: "Tropikal Mango Smoothie", en: "Tropical Mango Smoothie" },
    description: {
      tr: "Taze mango dilimleri, taze portakal ve ananas aromalarıyla pürüzsüz ve serinletici tropikal lezzet.",
      en: "Fresh mango slices, orange, and pineapple notes, blended to refreshing perfection."
    },
    price: 160,
    calories: 210,
    allergens: { tr: "Yok", en: "None" },
    tags: ["cold", "vegan", "popular"],
    image: "f884b9ef-6745-4803-a79f-580db804e109.jpg",
    options: { hasMilk: false, hasSweetness: true, hasSyrups: false }
  },
  {
    id: "sm_peanut_butter",
    categoryId: "smoothies",
    name: { tr: "Fıstık Ezmeli Protein Smoothie", en: "Peanut Butter Protein Blast" },
    description: {
      tr: "Fıstık ezmesi, vegan protein tozu, muz, yulaf ezmesi ve badem sütü.",
      en: "Creamy peanut butter, vegan protein powder, banana, rolled oats, and almond milk."
    },
    price: 160,
    calories: 380,
    allergens: { tr: "Yer Fıstığı, Badem", en: "Peanut, Almond" },
    tags: ["cold", "vegan", "popular"],
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "sm_acaibowl_drink",
    categoryId: "smoothies",
    name: { tr: "Sıvı Acai Bowl", en: "Liquid Acai Superfood" },
    description: {
      tr: "Dondurulmuş organik acai püresi, yaban mersini, chia, kenevir tohumu ve badem sütü.",
      en: "Frozen organic acai berry puree, blueberries, chia seeds, hemp seeds, and almond milk."
    },
    price: 165,
    calories: 240,
    allergens: { tr: "Badem", en: "Almond" },
    tags: ["cold", "vegan"],
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "sm_avocado_shake",
    categoryId: "smoothies",
    name: { tr: "Avokadolu Ballı Enerji", en: "Honey Avocado Cream Shake" },
    description: {
      tr: "Yarım avokado, ham süzme bal, taze muz dilimleri ve kremsi tam yağlı süt.",
      en: "Half a fresh avocado, raw local honey, sliced bananas, blended with rich whole milk."
    },
    price: 155,
    calories: 310,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["cold"],
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: true, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "sm_strawberry_dream",
    categoryId: "smoothies",
    name: { tr: "Çilekli Beyaz Çikolata", en: "Strawberry Silk Smoothie" },
    description: {
      tr: "Taze çilek püresi, beyaz çikolata sosu, Hindistan cevizi sütü ve vanilyalı süzme yoğurt.",
      en: "Sweet strawberry puree, white chocolate drizzle, coconut milk, and vanilla Greek yogurt."
    },
    price: 145,
    calories: 280,
    allergens: { tr: "Süt", en: "Dairy" },
    tags: ["cold"],
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: true, hasSyrups: false }
  },
  {
    id: "sm_cacao_reishi",
    categoryId: "smoothies",
    name: { tr: "Reishi Mantarlı Kakao Koruyucu", en: "Reishi Cacao Adaptogen" },
    description: {
      tr: "Organik çiğ kakao, adaptojenik reishi mantarı tozu, muz, hurma püresi ve hindistan cevizi sütü.",
      en: "Raw organic cacao, adaptogenic reishi mushroom powder, banana, dates, and coconut milk."
    },
    price: 170,
    calories: 210,
    allergens: { tr: "Yok", en: "None" },
    tags: ["cold", "vegan"],
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },

  // 6. NEW YORK ROLLS (8 items)
  {
    id: "nyr_salted_caramel",
    categoryId: "ny-rolls",
    name: { tr: "Tuzlu Karamel & Fıstık NY Roll", en: "Salted Caramel & Pistachio NY Roll" },
    description: {
      tr: "Çıtır kat kat New York roll içinde ev yapımı tuzlu karamel dolgusu, üstünde Antep fıstıklı ganaj.",
      en: "Crispy layered NY Roll stuffed with salted caramel, glazed with pistachio white ganache."
    },
    price: 155,
    calories: 420,
    allergens: { tr: "Gluten, Süt, Yumurta, Antep Fıstığı", en: "Gluten, Dairy, Egg, Pistachio" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "nyr_belgian_chocolate",
    categoryId: "ny-rolls",
    name: { tr: "Belçika Çikolatalı NY Roll", en: "Belgian Chocolate NY Roll" },
    description: {
      tr: "İçi yoğun Belçika çikolatalı pastacı kreması dolgulu, dışı sütlü çikolata kaplı çıtır roll.",
      en: "Flaky circular croissant filled with dark chocolate custard, glazed in rich milk chocolate."
    },
    price: 150,
    calories: 440,
    allergens: { tr: "Gluten, Süt, Yumurta, Soya", en: "Gluten, Dairy, Egg, Soy" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "nyr_raspberry_white",
    categoryId: "ny-rolls",
    name: { tr: "Ahududulu & Beyaz Çikolatalı", en: "Raspberry & White Chocolate Roll" },
    description: {
      tr: "Ekşi ahududu jölesi ve beyaz çikolatalı krema dolgusu, kurutulmuş çilek parçacıklı kaplama.",
      en: "Tangy raspberry coulis and white chocolate pastry cream, glazed and topped with freeze-dried berries."
    },
    price: 160,
    calories: 395,
    allergens: { tr: "Gluten, Süt, Yumurta", en: "Gluten, Dairy, Egg" },
    tags: [],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "nyr_hazelnut_praline",
    categoryId: "ny-rolls",
    name: { tr: "Fındık Pralinli Altın Roll", en: "Hazelnut Praline Gold Roll" },
    description: {
      tr: "Kavrulmuş fındıklı pralin kreması dolgusu, sütlü çikolata kaplama ve kavrulmuş fındık parçaları.",
      en: "Loaded with creamy hazelnut praline, dipped in milk chocolate, covered with toasted hazelnuts."
    },
    price: 165,
    calories: 470,
    allergens: { tr: "Gluten, Süt, Yumurta, Fındık", en: "Gluten, Dairy, Egg, Hazelnut" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "nyr_lemon_meringue",
    categoryId: "ny-rolls",
    name: { tr: "Limon Kremalı & Beze Roll", en: "Lemon Meringue NY Roll" },
    description: {
      tr: "Ferahlatıcı limon kreması (lemon curd) dolgusu, üstünde hafifçe fırınlanmış beze/mereng tepesi.",
      en: "Tangy house lemon curd filling, crowned with toasted fluffy meringue fluff."
    },
    price: 155,
    calories: 360,
    allergens: { tr: "Gluten, Süt, Yumurta", en: "Gluten, Dairy, Egg" },
    tags: [],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "nyr_lotus_biscoff",
    categoryId: "ny-rolls",
    name: { tr: "Lotus Biscoff Kremalı", en: "Lotus Biscoff Cream Roll" },
    description: {
      tr: "Lotus kreması dolgulu çıtır hamur, üstünde eritilmiş Lotus ezmesi ve Lotus bisküvi kırıntısı.",
      en: "Stuffed with caramelized cookie butter pastry cream, topped with melted Biscoff spread and cookie crumbs."
    },
    price: 160,
    calories: 460,
    allergens: { tr: "Gluten, Süt, Yumurta, Soya", en: "Gluten, Dairy, Egg, Soy" },
    tags: [],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "nyr_passion_coconut",
    categoryId: "ny-rolls",
    name: { tr: "Çarkıfelek & Hindistan Cevizli", en: "Passion Coconut NY Roll" },
    description: {
      tr: "Çarkıfelek meyvesi dolgulu beyaz çikolatalı ganaj krema, hindistan cevizi rendesi kaplaması.",
      en: "Exotic passion fruit curd layered with white chocolate coconut ganache, rolled in coconut flakes."
    },
    price: 155,
    calories: 410,
    allergens: { tr: "Gluten, Süt, Yumurta", en: "Gluten, Dairy, Egg" },
    tags: [],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "nyr_tiramisu",
    categoryId: "ny-rolls",
    name: { tr: "Kahveli Tiramisu Roll", en: "Espresso Tiramisu NY Roll" },
    description: {
      tr: "Espresso şuruplu mascarpone kreması dolgusu, üstünde kakao tozu ve kahve çekirdeği.",
      en: "Rich mascarpone cheese custard infused with espresso syrup, dusted with premium cocoa."
    },
    price: 165,
    calories: 430,
    allergens: { tr: "Gluten, Süt, Yumurta", en: "Gluten, Dairy, Egg" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },

  // 7. CROISSANTS (8 items)
  {
    id: "cr_butter_plain",
    categoryId: "croissants",
    name: { tr: "Fransız Sade Tereyağlı Kruvasan", en: "French Butter Croissant" },
    description: {
      tr: "Fransa'dan ithal AOP tereyağı ile hazırlanmış, içi gözenekli çıtır sade klasik kruvasan.",
      en: "Classic flaky French croissant made with premium AOP butter, crispy shell, airy center."
    },
    price: 85,
    calories: 290,
    allergens: { tr: "Gluten, Süt, Yumurta", en: "Gluten, Dairy, Egg" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "cr_almond_frangipane",
    categoryId: "croissants",
    name: { tr: "Bademli & Franjipan Kruvasan", en: "Almond Frangipane Croissant" },
    description: {
      tr: "Ev yapımı badem kreması (frangipane) dolgulu, üstü file badem ve pudra şekeri kaplı.",
      en: "Twice-baked butter croissant filled with almond frangipane, topped with sliced almonds."
    },
    price: 125,
    calories: 440,
    allergens: { tr: "Gluten, Süt, Yumurta, Badem", en: "Gluten, Dairy, Egg, Almond" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "cr_chocolate_pain",
    categoryId: "croissants",
    name: { tr: "Pain au Chocolat (Çikolatalı)", en: "Pain au Chocolat" },
    description: {
      tr: "İçinde çift sıra çikolata çubuğu bulunan klasik Fransız çikolatalı kruvasanı.",
      en: "Traditional French puff pastry rolled with two bars of rich semi-sweet chocolate."
    },
    price: 105,
    calories: 340,
    allergens: { tr: "Gluten, Süt, Yumurta, Soya", en: "Gluten, Dairy, Egg, Soy" },
    tags: [],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "cr_pistachio_glaze",
    categoryId: "croissants",
    name: { tr: "Fıstık Ganajlı Kruvasan", en: "Pistachio Glazed Croissant" },
    description: {
      tr: "İçi fıstıklı krema dolgulu, üzeri fıstıklı ganaj ve öğütülmüş fıstık süslemeli.",
      en: "Stuffed with sweet pistachio paste cream, glazed with white pistachio chocolate."
    },
    price: 135,
    calories: 460,
    allergens: { tr: "Gluten, Süt, Yumurta, Antep Fıstığı", en: "Gluten, Dairy, Egg, Pistachio" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "cr_turkey_cheese",
    categoryId: "croissants",
    name: { tr: "Füme Hindili & Peynirli Kruvasan", en: "Turkey & Cheese Croissant" },
    description: {
      tr: "Dilimlenmiş füme hindi göğsü, eritilmiş cheddar peyniri, taze marul ve hardal sosu ile sıcak sandviç kruvasan.",
      en: "Smoked turkey breast, melted cheddar cheese, lettuce, and honey mustard sauce."
    },
    price: 135,
    calories: 390,
    allergens: { tr: "Gluten, Süt, Yumurta, Hardal", en: "Gluten, Dairy, Egg, Mustard" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "cr_caprese_savory",
    categoryId: "croissants",
    name: { tr: "Caprese Kruvasan (Sıcak)", en: "Warm Caprese Croissant" },
    description: {
      tr: "Taze mozzarella, kurutulmuş domates, pesto sosu ve balzamik glaze ile fırınlanmış.",
      en: "Filled with fresh mozzarella, sundried tomatoes, nut-free pesto sauce, and balsamic glaze."
    },
    price: 130,
    calories: 360,
    allergens: { tr: "Gluten, Süt, Yumurta", en: "Gluten, Dairy, Egg" },
    tags: [],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "cr_smoked_salmon",
    categoryId: "croissants",
    name: { tr: "Füme Somonlu Kruvasan", en: "Smoked Salmon Croissant" },
    description: {
      tr: "Norveç somon füme, krem peynir, kapari, taze dereotu ve ince salatalık dilimleri.",
      en: "Cold-smoked Norwegian salmon, herb cream cheese, capers, fresh dill, and cucumber."
    },
    price: 175,
    calories: 410,
    allergens: { tr: "Gluten, Süt, Yumurta, Balık", en: "Gluten, Dairy, Egg, Fish" },
    tags: [],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "cr_vegan_croissant",
    categoryId: "croissants",
    name: { tr: "Vegan Karadut Reçelli", en: "Vegan Black Mulberry Croissant" },
    description: {
      tr: "Organik bitkisel margarin ile hazırlanan vegan kruvasan içi ekşi karadut marmeladı dolgulu.",
      en: "Vegan croissant made with plant-based butter, filled with tart organic black mulberry marmalade."
    },
    price: 95,
    calories: 270,
    allergens: { tr: "Gluten", en: "Gluten" },
    tags: ["vegan"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },

  // 8. SANDWICHES (8 items)
  {
    id: "snd_sourdough_avocado",
    categoryId: "sandwiches",
    name: { tr: "Ekşi Mayalı Avokado & Ezine", en: "Sourdough Avocado & Feta" },
    description: {
      tr: "Ekşi mayalı çavdar ekmeği üzerine ezilmiş avokado, Ezine beyaz peyniri, çörek otu ve zeytinyağı.",
      en: "Crushed avocado, Turkish white feta cheese, black cumin, and olive oil on toasted artisan sourdough."
    },
    price: 135,
    calories: 310,
    allergens: { tr: "Gluten, Süt", en: "Gluten, Dairy" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "snd_truffle_roast",
    categoryId: "sandwiches",
    name: { tr: "Trüf Soslu Roastbeef (Sıcak)", en: "Warm Truffle Roast Beef" },
    description: {
      tr: "İnce dilim rozbif, karamelize soğan, İsviçre gravyer peyniri, roka ve trüflü mayonez soslu baget.",
      en: "Thinly sliced roast beef, caramelized onions, melted Swiss Gruyere, arugula, and truffle mayo on a baguette."
    },
    price: 170,
    calories: 490,
    allergens: { tr: "Gluten, Süt, Yumurta", en: "Gluten, Dairy, Egg" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "snd_pesto_mozzarella",
    categoryId: "sandwiches",
    name: { tr: "Pesto Caprese Ciabatta", en: "Pesto Caprese Ciabatta" },
    description: {
      tr: "Ciabatta ekmeğinde ev yapımı cevizsiz fesleğen pesto, taze mozzarella, kurutulmuş domates ve roka.",
      en: "Homemade nut-free pesto, fresh mozzarella, sundried tomatoes, and arugula on rustic Italian ciabatta."
    },
    price: 130,
    calories: 370,
    allergens: { tr: "Gluten, Süt", en: "Gluten, Dairy" },
    tags: [],
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "snd_smoked_turkey_bagel",
    categoryId: "sandwiches",
    name: { tr: "Füme Hindi & Krem Peynir Bagel", en: "Turkey & Cream Cheese Bagel" },
    description: {
      tr: "Susamlı bagel ekmeği arasında taze otlu krem peynir, füme hindi göğsü ve marul yaprakları.",
      en: "Herbed cream cheese, smoked turkey breast, and butterhead lettuce on a toasted sesame bagel."
    },
    price: 115,
    calories: 340,
    allergens: { tr: "Gluten, Süt, Susam", en: "Gluten, Dairy, Sesame" },
    tags: [],
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "snd_brioche_egg",
    categoryId: "sandwiches",
    name: { tr: "Tırnaklı Brioche Yumurta (Sıcak)", en: "Warm Brioche Egg & Cheddar" },
    description: {
      tr: "Brioche çöreğinde kremamsı çırpılmış yumurta, eriyen İngiliz cheddar peyniri ve sriracha mayonez.",
      en: "Fluffy scrambled eggs, melted mature cheddar, and mild sriracha mayo on a toasted brioche bun."
    },
    price: 125,
    calories: 430,
    allergens: { tr: "Gluten, Süt, Yumurta", en: "Gluten, Dairy, Egg" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "snd_vegan_hummus",
    categoryId: "sandwiches",
    name: { tr: "Humuslu Izgara Sebze (Vegan)", en: "Hummus & Grilled Veggies" },
    description: {
      tr: "Çavdarlı ekmek arasında fesleğenli humus, közlenmiş patlıcan, kapya biber, kabak dilimleri ve roka.",
      en: "Spiced basil hummus, roasted eggplant, bell peppers, grilled zucchini, and arugula in dark rye."
    },
    price: 120,
    calories: 280,
    allergens: { tr: "Gluten, Susam", en: "Gluten, Sesame" },
    tags: ["vegan"],
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "snd_club_classic",
    categoryId: "sandwiches",
    name: { tr: "Kafe to Go Klasik Club", en: "Cafe to Go Classic Club" },
    description: {
      tr: "Üç katlı tost ekmeğinde ızgara tavuk fileto, dana jambon, cheddar, haşlanmış yumurta, domates ve mayonez.",
      en: "Triple-decker toast with grilled chicken breast, beef ham, cheddar, boiled egg, tomato, and mayo."
    },
    price: 165,
    calories: 520,
    allergens: { tr: "Gluten, Süt, Yumurta", en: "Gluten, Dairy, Egg" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "snd_tuna_jalapeno",
    categoryId: "sandwiches",
    name: { tr: "Jalapeno Soslu Ton Balığı", en: "Spicy Jalapeno Tuna Melt" },
    description: {
      tr: "Zeytinli ekmekte ton balığı ezmesi, hafif jalapeno biberi, dereotu, salatalık turşusu ve süzme süzme yoğurt sosu.",
      en: "Tuna salad, pickled jalapenos, fresh dill, corn, and Greek yogurt dressing on olive ciabatta."
    },
    price: 140,
    calories: 350,
    allergens: { tr: "Gluten, Balık, Süt", en: "Gluten, Fish, Dairy" },
    tags: [],
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },

  // 9. COLD-PRESSED JUICES (8 items)
  {
    id: "jc_detox_green",
    categoryId: "juices",
    name: { tr: "Green Glow Soğuk Sıkım", en: "Green Glow Juice" },
    description: {
      tr: "Yeşil elma, ıspanak, salatalık, taze zencefil, nane ve limon suyu. Katkısız, 100% doğal.",
      en: "Cold-pressed green apple, spinach, cucumber, ginger, mint, and lemon. No sugar added."
    },
    price: 110,
    calories: 90,
    allergens: { tr: "Yok", en: "None" },
    tags: ["cold", "vegan", "popular"],
    image: "https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "jc_citrus_kick",
    categoryId: "juices",
    name: { tr: "Citrus Booster Soğuk Sıkım", en: "Citrus Booster Juice" },
    description: {
      tr: "Portakal, greyfurt, taze zerdeçal kökü, havuç ve limon suyunun C vitamini deposu patlaması.",
      en: "Orange, grapefruit, fresh turmeric, carrot, and lemon. Loaded with Vitamin C."
    },
    price: 110,
    calories: 115,
    allergens: { tr: "Yok", en: "None" },
    tags: ["cold", "vegan"],
    image: "https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "jc_beet_root",
    categoryId: "juices",
    name: { tr: "Red Energy Pancar Karışımı", en: "Red Beet Energy Juice" },
    description: {
      tr: "Kırmızı pancar, kereviz sapı, nar, kırmızı elma ve taze zencefil ile hücre yenileyici.",
      en: "Red beetroot, celery stalks, pomegranate, red apple, and fresh ginger root."
    },
    price: 115,
    calories: 105,
    allergens: { tr: "Kereviz", en: "Celery" },
    tags: ["cold", "vegan"],
    image: "https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "jc_ginger_shot",
    categoryId: "juices",
    name: { tr: "Zencefil & Limon Bağışıklık Shot", en: "Ginger Lemon Immune Shot" },
    description: {
      tr: "Yoğun taze zencefil suyu, limon ve cayenne biberi. 60ml konsantre enerji.",
      en: "Concentrated fresh ginger juice, lemon, and a pinch of cayenne pepper. 60ml boost."
    },
    price: 65,
    calories: 25,
    allergens: { tr: "Yok", en: "None" },
    tags: ["cold", "vegan", "popular"],
    image: "https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "jc_turmeric_shot",
    categoryId: "juices",
    name: { tr: "Zerdeçal & Karabiber Antioksidan Shot", en: "Turmeric Gold Shot" },
    description: {
      tr: "Taze sıkılmış kök zerdeçal, hindistan cevizi suyu, portakal suyu ve karabiber özü. 60ml.",
      en: "Cold-pressed turmeric root, coconut water, orange, and a touch of black pepper. 60ml."
    },
    price: 65,
    calories: 30,
    allergens: { tr: "Yok", en: "None" },
    tags: ["cold", "vegan"],
    image: "https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "jc_pomegranate",
    categoryId: "juices",
    name: { tr: "100% Doğal Sıkma Nar Suyu", en: "Pure Squeezed Pomegranate" },
    description: {
      tr: "Mevsiminde toplanmış narların soğuk pres yöntemiyle elde edilen katkısız saf suyu.",
      en: "Cold-pressed pure juice from locally sourced autumn pomegranates."
    },
    price: 120,
    calories: 130,
    allergens: { tr: "Yok", en: "None" },
    tags: ["cold", "vegan"],
    image: "https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "jc_apple_celery",
    categoryId: "juices",
    name: { tr: "Elmalı Kereviz Sapı Suyu", en: "Celery & Apple Hydrate" },
    description: {
      tr: "Bağışıklık dostu 100% saf kereviz sapı suyu ve hafif tatlandırmak için yeşil elma özü.",
      en: "Purifying cold-pressed celery juice blended with sweet green apple."
    },
    price: 110,
    calories: 75,
    allergens: { tr: "Kereviz", en: "Celery" },
    tags: ["cold", "vegan"],
    image: "https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "jc_watermelon_mint",
    categoryId: "juices",
    name: { tr: "Karpuzlu & Naneli Yaz Rüzgarı", en: "Watermelon Mint Cooler" },
    description: {
      tr: "Taze karpuz ve nane yapraklarının buz gibi soğuk pres sıkımı. Yaz favorisi.",
      en: "Cold-pressed fresh watermelon and wild mint leaves. A seasonal summer treat."
    },
    price: 110,
    calories: 85,
    allergens: { tr: "Yok", en: "None" },
    tags: ["cold", "vegan", "popular"],
    image: "https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },

  // 10. SAVORY & SNACKS (8 items)
  {
    id: "sv_spinach_quiche",
    categoryId: "savory",
    name: { tr: "Ispanaklı & Keçi Peynirli Kiş", en: "Spinach & Goat Cheese Quiche" },
    description: {
      tr: "Tereyağlı çıtır tart hamurunda taze bebek ıspanak, keçi peyniri ve krema dolgusu.",
      en: "Buttery pastry tart loaded with baby spinach, local goat cheese, and egg cream custard."
    },
    price: 120,
    calories: 320,
    allergens: { tr: "Gluten, Süt, Yumurta", en: "Gluten, Dairy, Egg" },
    tags: ["hot"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "sv_olives_muffin",
    categoryId: "savory",
    name: { tr: "Zeytinli Kurutulmuş Domatesli Kek", en: "Savory Olive & Herb Cake" },
    description: {
      tr: "Siyah dilim zeytinler, fesleğen, kurutulmuş domates ve beyaz peynirle fırınlanmış tuzlu muffin.",
      en: "Savory muffin baked with black olives, dried tomatoes, feta cheese, and Mediterranean herbs."
    },
    price: 80,
    calories: 240,
    allergens: { tr: "Gluten, Süt, Yumurta", en: "Gluten, Dairy, Egg" },
    tags: [],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "sv_pretzel_plain",
    categoryId: "savory",
    name: { tr: "Bavyera Pretzel (Tuzlu Çörek)", en: "Bavarian Salted Pretzel" },
    description: {
      tr: "Dışı sert ve tuzlu, içi yumuşacık Alman klasiği pretzel. Krem peynirle servis edilir.",
      en: "Traditional soft German pretzel sprinkled with coarse sea salt. Served with a side of cream cheese."
    },
    price: 75,
    calories: 280,
    allergens: { tr: "Gluten, Süt", en: "Gluten, Dairy" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "sv_parmesan_cookie",
    categoryId: "savory",
    name: { tr: "Parmesanlı & Biberiyeli Tuzlu Kurabiye", en: "Parmesan & Rosemary Cookies" },
    description: {
      tr: "Parmesan peyniri ve taze biberiye otuyla ağızda dağılan tuzlu kurabiye (5 adet).",
      en: "Crumbly savory cookies baked with aged parmesan and fresh rosemary (5 pcs)."
    },
    price: 85,
    calories: 290,
    allergens: { tr: "Gluten, Süt, Yumurta", en: "Gluten, Dairy, Egg" },
    tags: [],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "sv_three_cheese_toast",
    categoryId: "savory",
    name: { tr: "Üç Peynirli Sıcak Tost", en: "Three Cheese Grilled Toast" },
    description: {
      tr: "Ekşi mayalı ekmekte cheddar, mozzarella ve kaşar peyniri erimesi, yanında domates dilimi.",
      en: "Toasted sourdough loaded with melted cheddar, mozzarella, and local kashar cheese."
    },
    price: 110,
    calories: 380,
    allergens: { tr: "Gluten, Süt", en: "Gluten, Dairy" },
    tags: ["hot", "popular"],
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "sv_bagel_avocado",
    categoryId: "savory",
    name: { tr: "Avokadolu Bagel Tost (Sıcak)", en: "Warm Avocado Bagel Toast" },
    description: {
      tr: "Ortadan bölünmüş susamlı bagel üzerine avokado ezmesi, labne, kurutulmuş domates ve pul biber.",
      en: "Toasted sesame bagel topped with seasoned avocado mash, labneh, and red pepper flakes."
    },
    price: 115,
    calories: 320,
    allergens: { tr: "Gluten, Süt, Susam", en: "Gluten, Dairy, Sesame" },
    tags: ["hot"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "sv_sausage_roll",
    categoryId: "savory",
    name: { tr: "Milföylü Sosisli Roll (Sıcak)", en: "Crispy Sausage Roll" },
    description: {
      tr: "Tereyağlı milföy hamuruna sarılı dana sosis, kekik ve hardal sosu ile fırınlanmış.",
      en: "All-beef sausage wrapped in golden puff pastry, baked with thyme and a touch of mustard."
    },
    price: 115,
    calories: 395,
    allergens: { tr: "Gluten, Süt, Yumurta, Hardal", en: "Gluten, Dairy, Egg, Mustard" },
    tags: ["hot", "popular"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "sv_vegan_lentil_roll",
    categoryId: "savory",
    name: { tr: "Mercimekli Vegan Börek (Sıcak)", en: "Vegan Green Lentil Pastry" },
    description: {
      tr: "İnce el açması yufka içinde baharatlı yeşil mercimek ve karamelize soğan dolgusu.",
      en: "Hand-rolled phyllo pastry filled with spiced green lentils and caramelized onions."
    },
    price: 90,
    calories: 260,
    allergens: { tr: "Gluten", en: "Gluten" },
    tags: ["hot", "vegan"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },

  // 11. PATISSERIE & DESSERTS (8 items)
  {
    id: "ds_san_sebastian",
    categoryId: "desserts",
    name: { tr: "Çikolatalı San Sebastian Cheesecake", en: "San Sebastian Cheesecake with Chocolate" },
    description: {
      tr: "Dışı hafif yanık, içi akışkan kremamsı Bask cheesecake'i. Sıcak Belçika çikolatası ile servis edilir.",
      en: "Creamy Basque burnt cheesecake served with a rich pour-over of warm Belgian milk chocolate."
    },
    price: 145,
    calories: 460,
    allergens: { tr: "Süt, Yumurta, Gluten", en: "Dairy, Egg, Gluten" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "ds_carrot_cake",
    categoryId: "desserts",
    name: { tr: "Cevizli Havuçlu Tarçınlı Kek", en: "Carrot Walnut & Cinnamon Cake" },
    description: {
      tr: "Bol cevizli, havuç ve tarçınlı nemli kek dilimi, üzerinde hafif labneli krema kaplaması ile.",
      en: "Spiced moist carrot cake loaded with walnuts, topped with silky cream cheese frosting."
    },
    price: 110,
    calories: 340,
    allergens: { tr: "Gluten, Süt, Yumurta, Ceviz", en: "Gluten, Dairy, Egg, Walnut" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1508737804141-4c3b688e2546?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "ds_pistachio_tart",
    categoryId: "desserts",
    name: { tr: "Fıstıklı Franbuazlı Tart", en: "Pistachio Raspberry Tart" },
    description: {
      tr: "Çıtır tart hamuru, fıstık kremalı dolgu, üzerinde taze ahududular ve toz Antep fıstığı.",
      en: "Crispy sweet pastry base filled with pistachio paste cream, topped with fresh raspberries."
    },
    price: 135,
    calories: 380,
    allergens: { tr: "Gluten, Süt, Yumurta, Antep Fıstığı", en: "Gluten, Dairy, Egg, Pistachio" },
    tags: [],
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "ds_brownie_salted",
    categoryId: "desserts",
    name: { tr: "Tuzlu Karamel Fudge Brownie", en: "Salted Caramel Fudge Brownie" },
    description: {
      tr: "İçi ıslak yoğun çikolatalı brownie üzerinde deniz tuzu tanecikli karamel sos katmanı.",
      en: "Fudgy dark chocolate brownie topped with homemade sea salt caramel swirl."
    },
    price: 115,
    calories: 410,
    allergens: { tr: "Gluten, Süt, Yumurta, Soya", en: "Gluten, Dairy, Egg, Soy" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "ds_lemon_poppy",
    categoryId: "desserts",
    name: { tr: "Limonlu Haşhaşlı Dilim Kek", en: "Lemon Poppyseed Slice" },
    description: {
      tr: "Mavi haşhaş tanecikleri ve taze limon kabuğu ile hazırlanan, limon glase soslu kek dilimi.",
      en: "Zesty lemon loaf slice baked with blue poppyseeds, finished with a sweet lemon glaze."
    },
    price: 95,
    calories: 280,
    allergens: { tr: "Gluten, Süt, Yumurta", en: "Gluten, Dairy, Egg" },
    tags: [],
    image: "https://images.unsplash.com/photo-1508737804141-4c3b688e2546?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "ds_tiramisu_classic",
    categoryId: "desserts",
    name: { tr: "İtalyan Usulü Kup Tiramisu", en: "Italian Tiramisu Cup" },
    description: {
      tr: "Kedi dili bisküvileri, espresso şurubu, mascarpone kreması ve kakao tozu.",
      en: "Traditional tiramisu in a cup. Espresso-soaked ladyfingers, velvety mascarpone cream."
    },
    price: 130,
    calories: 320,
    allergens: { tr: "Gluten, Süt, Yumurta", en: "Gluten, Dairy, Egg" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "ds_apple_crumble",
    categoryId: "desserts",
    name: { tr: "Elmalı & Tarçınlı Crumble Tart", en: "Apple Cinnamon Crumble" },
    description: {
      tr: "Karamelize tarçınlı elma küpleri, kıtır unlu tereyağlı hamur kırıntıları ile fırınlanmış tart.",
      en: "Sweet caramelized apples baked under a crispy, buttery cinnamon oat crumble."
    },
    price: 115,
    calories: 330,
    allergens: { tr: "Gluten, Süt, Yumurta", en: "Gluten, Dairy, Egg" },
    tags: [],
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "ds_vegan_chocolate_cake",
    categoryId: "desserts",
    name: { tr: "Glutensiz & Vegan Avokadolu Çikolatalı Kek", en: "GF Vegan Chocolate Avocado Cake" },
    description: {
      tr: "Unsuz ve hayvansal gıdasız; avokado ve ham kakao kremalı, hurmayla tatlandırılmış nemli pasta.",
      en: "Gluten-free, sugar-free, vegan chocolate cake sweetened with dates and rich avocado cacao fudge."
    },
    price: 140,
    calories: 290,
    allergens: { tr: "Yok", en: "None" },
    tags: ["vegan"],
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },

  // 12. HEALTHY & VEGAN ALTERNATIVES (8 items)
  {
    id: "hl_chia_pudding",
    categoryId: "healthy",
    name: { tr: "Hindistan Cevizli Chia Puding", en: "Coconut Mango Chia Pudding" },
    description: {
      tr: "Hindistan cevizi sütü ile demlenmiş chia tohumları, mango püresi ve taze yaban mersinleri.",
      en: "Chia seeds soaked in coconut milk, layered with organic mango puree and fresh blueberries."
    },
    price: 110,
    calories: 180,
    allergens: { tr: "Yok", en: "None" },
    tags: ["vegan", "popular"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "hl_granola_bowl",
    categoryId: "healthy",
    name: { tr: "Fırınlanmış Granola & Yoğurt Kasesi", en: "Artisan Granola & Yogurt Bowl" },
    description: {
      tr: "Süzme yoğurt, ev yapımı şekersiz fırınlanmış granola, çilek, muz dilimleri ve ham bal.",
      en: "Creamy Greek yogurt, house-made sugar-free baked granola, fresh fruit, and raw honey."
    },
    price: 115,
    calories: 260,
    allergens: { tr: "Süt, Yulaf, Ceviz", en: "Dairy, Oat, Walnut" },
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "hl_vegan_porridge",
    categoryId: "healthy",
    name: { tr: "Fıstık Ezmeli Sıcak Yulaf Lapası", en: "Warm Peanut Butter Oatmeal" },
    description: {
      tr: "Badem sütünde pişmiş glütensiz yulaf ezmesi, muz dilimleri, fıstık ezmesi ve kakao tanecikleri.",
      en: "Gluten-free oats simmered in almond milk, topped with banana, peanut butter, and cacao nibs."
    },
    price: 110,
    calories: 290,
    allergens: { tr: "Badem, Yer Fıstığı, Yulaf", en: "Almond, Peanut, Oat" },
    tags: ["hot", "vegan"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "hl_matcha_pudding",
    categoryId: "healthy",
    name: { tr: "Matchalı Avokado Mousse (Şekersiz)", en: "Sugar-Free Matcha Avocado Mousse" },
    description: {
      tr: "Avokado, törensel yeşil çay tozu (matcha), agave şurubu ve hindistan cevizi kreması çırpması.",
      en: "Silky avocado whipped with organic ceremonial matcha, agave nectar, and coconut cream."
    },
    price: 135,
    calories: 220,
    allergens: { tr: "Yok", en: "None" },
    tags: ["vegan"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "hl_protein_balls",
    categoryId: "healthy",
    name: { tr: "Hurmalı Kakaolu Protein Topları (3 adet)", en: "Hazelnut Date Protein Balls" },
    description: {
      tr: "Medine hurması, ham kakao, bezelye proteini, yulaf ve kavrulmuş fındık parçacıklı toplar.",
      en: "Raw date bites rolled in dark cacao, pea protein powder, oats, and crushed hazelnuts (3 pcs)."
    },
    price: 75,
    calories: 190,
    allergens: { tr: "Fındık, Yulaf", en: "Hazelnut, Oat" },
    tags: ["vegan", "popular"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "hl_raw_lemon_bar",
    categoryId: "healthy",
    name: { tr: "Pişmeyen Limonlu & Kaju Bar", en: "Raw Lemon & Cashew Tart Slice" },
    description: {
      tr: "Badem ve hurma tabanlı, limon özü ve kaju kremasından oluşan çiğ sağlıklı dilim.",
      en: "Gluten-free almond date crust topped with citrusy cashew nut fudge cream."
    },
    price: 125,
    calories: 230,
    allergens: { tr: "Badem, Kaju", en: "Almond, Cashew" },
    tags: ["vegan"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "hl_quinoa_breakfast",
    categoryId: "healthy",
    name: { tr: "Meyveli Kinoa Lapası (Sıcak)", en: "Warm Superfood Quinoa Porridge" },
    description: {
      tr: "Hindistan cevizi sütünde haşlanmış organik beyaz kinoa, tarçın, fırınlanmış elma ve ceviz.",
      en: "Organic quinoa simmered in coconut milk, cinnamon, baked apple compote, and walnuts."
    },
    price: 125,
    calories: 240,
    allergens: { tr: "Ceviz", en: "Walnut" },
    tags: ["hot", "vegan"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  },
  {
    id: "hl_berry_chia_jar",
    categoryId: "healthy",
    name: { tr: "Ahududulu Vegan Kefir Kasesi", en: "Raspberry Vegan Kefir Jar" },
    description: {
      tr: "Fermente hindistan cevizi kefiri, chia tohumu, taze ahududu püresi ve yaban mersinleri.",
      en: "Probiotic coconut milk kefir layered with chia seeds, wild raspberry coulis, and berries."
    },
    price: 125,
    calories: 150,
    allergens: { tr: "Yok", en: "None" },
    tags: ["vegan"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  }
];

// Export standard JS object for browser loading
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { menuCategories, menuItems };
} else {
  window.menuData = { menuCategories, menuItems };
}
