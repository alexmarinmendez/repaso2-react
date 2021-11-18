const products = [
    {
      id: 30,
      name: "Agua Con Gas 1,5 lts",
      stock: 0,
      cost: 140,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1500,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316114/BodegasDelSur/01_1619706181.webp"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Sin Alcohol",
        id: 9
      },
      brand: {
        id: 95,
        name: "Eco de los Andes"
      },
      reviews: []
    },
    {
      id: 29,
      name: "Agua Sin Gas 1,5 lts",
      stock: 100,
      cost: 140,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1500,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316114/BodegasDelSur/01_1619706076.webp"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Sin Alcohol",
        id: 9
      },
      brand: {
        id: 95,
        name: "Eco de los Andes"
      },
      reviews: [
        {
          "comment": "Muy rico y refrescante",
          "rating": "4"
        }
      ]
    },
    {
      id: 76,
      name: "Alambrado Chardonnay 750 ml",
      stock: 92,
      cost: 575,
      description: "Se muestra con tonos amarillo verdoso de intensidad media. En la nariz encontramos frutas blancas maduras, peras, manzanas y banana, frutas tropicales, con notas de la maduración en barricas sobre las borras como vainilla, manteca y miel. Buen volumen, complejo, maduro, con una entrada untuosa en la boca, buen desarrollo y largo final. Se repiten las notas frutales del aroma.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316095/BodegasDelSur/01_1605541215.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 10,
        name: "Alambrado"
      },
      reviews: []
    },
    {
      id: 170,
      name: "Alambrado Malbec 750ml",
      stock: 100,
      cost: 575,
      description: "Rojo violáceo, profundo y vivaz con visos azulados. Nariz de frutos rojos y negros como cerezas, cassis, ciruelas y moras, integrados con los aromas de maduración en barrica como vainilla, tabaco y chocolate. Entrada en boca sedosa, buena estructura, con una marcada presencia de frutas rojas, taninos amables y dulces, concluyendo en un largo final de boca.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316095/BodegasDelSur/01_1605540337.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 10,
        name: "Alambrado"
      },
      reviews: []
    },
    {
      id: 233,
      name: "Alambrado Malbec 750 ml con Estuche",
      stock: 100,
      cost: 765,
      description: "La linea Alambrado esta compuesta por vinos elegantes y de estilo moderno, donde se destacan claramente las características frutales de las variedades que los componen. Su paso por madera les otorgan una complejidad muy particular, acompañando de manera armónica y sutil la calidad obtenida desde el viñedo. Poseen un potencial de guarda de entre 4 y 6 años.\nAlambrado Malbec fue elaborado a partir de una cuidosa selección de uvas cosechadas de forma manual y criado en barricas de roble francés durante 10 meses.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316116/BodegasDelSur/01_1621366255.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.031Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 10,
        name: "Alambrado"
      },
      reviews: []
    },
    {
      id: 139,
      name: "Altos del Plata Cabernet Sauvignon 750 ml",
      stock: 100,
      cost: 490,
      description: "Color: Rojo rubí con sutiles reflejos terracota. Aroma: Se destacan los aromas a frutas negras como higos, ciruelas y confitura de moras, armónicamente acompañados por notas de pimiento rojo, regaliz y tostado. Boca: Se percibe la untuosidad de la fruta madura junto a una elegante estructura tánica y persistencia en boca.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316118/BodegasDelSur/01_1623090927.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 68,
      name: "Altos del Plata Chardonnay 750 ml",
      stock: 89,
      cost: 490,
      description: "Altos del Plata Chardonnay pertenece a la bodega Terrazas de los Andes. Su vino es de color amarillo dorado con destellos verdes. Su perfil fresco y frutado revela notas a flores blancas como jazmín y aromas a pera, durazno blanco y ananá. Acompañan sutiles notas tostadas y dulces como vainilla y miel. Presenta ligeros toques tostados y una acidez persistente.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316117/BodegasDelSur/01_1623084032.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 222,
      name: "Altos del Plata Malbec 375 ml",
      stock: 100,
      cost: 300,
      description: "Altos del Plata Malbec pertenece a la bodega Terrazas de los Andes. Su vino es de color rojo con destellos morados. Predomina la presencia de aromas a fruta negra como ciruela y mora en armonía con un toque tostado. Se distinguen notas especiadas a pimienta blanca.",
      capacity: 375,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316127/BodegasDelSur/01_1626713403.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 135,
      name: "Altos del Plata Malbec 750 ml",
      stock: 100,
      cost: 490,
      description: "Altos del Plata Malbec pertenece a la bodega Terrazas de los Andes. Su vino es de color rojo con destellos morados. Predomina la presencia de aromas a fruta negra como ciruela y mora en armonía con un toque tostado. Se distinguen notas especiadas a pimienta blanca.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316098/BodegasDelSur/01_1605808301.png"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 31,
      name: "Amareto Disaronno 700 ml",
      stock: 100,
      cost: 3150,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 700,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316082/BodegasDelSur/01_1600449560.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T11:08:17.792Z",
      categoryId: 5,
      brandId: 17,
      packingId: null,
      category: {
        name: "Licores",
        id: 5
      },
      brand: {
        id: 17,
        name: "Amareto Disaronno"
      },
      reviews: []
    }
  ];

  module.exports = {
    products,
  }