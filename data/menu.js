const menu = [
  {
    "id": 1,
    "name": "Bimbo Thins",
    "description": "Exquisito Bimbo Thins de queso mozzarella y pimiento verde.",
    "price": 30,
    "ingredients": [
      "Bimbo Thins",
      "Queso Mozzarella",
      "Pimiento verde"
    ],
    "image": require('../assets/images/panini.png')
  },
  {
    "id": 2,
    "name": "Panini Queso manchego y manzana",
    "description": "Exquisito panini de queso manchego y manzana.",
    "price": 35,
    "ingredients": [
      "Pan Chapata",
      "Queso manchego",
      "Mermelada de higo",
      "Manzana",
      "Jamón"
    ],
    "image": require('../assets/images/panini2.png')
  },
  {
    "id": 3,
    "name": "Panini de jamón de pavo ahumado",
    "description": "Exquisito panini de jamón de pavo ahumado.",
    "price": 36,
    "ingredients": [
      "Bolillo",
      "Mantequilla",
      "Jamón de pavo",
      "Queso manchego",
      "Lechuga",
      "Jitomate deshidratado",
      "Aguacate"
    ],
    "image": require('../assets/images/panini3.png')
  },
  {
    "id": 4,
    "name": "Panini clásico",
    "description": "Exquisito panini clásico de jamón",
    "price": 40,
    "ingredients": [
      "Pan chapata",
      "Jamón",
      "Tomate",
      "Queso gruyere",
      "Lechuga",
      "Aceite de olvia"
    ],
    "image": require('../assets/images/panini4.png')
  },
  {
    "id": 5,
    "name": "Panini de jamón serrano y cebolla al vino tinto",
    "description": "Exquisito panini de jamón serrano con cebolla morada",
    "price": 50,
    "ingredients": [
      "Cebolla morada",
      "Miel",
      "Pan chapata",
      "Jamón serrano",
      "Queso manchego",
      "Vino tinto",
      "Queso chihuahua",
      "Pimientos",
      "Arúgula"
    ],
    "image": require('../assets/images/panini5.png')
  },
  {
    "id": 6,
    "name": "Panini de queso crema y salmón",
    "description": "Exquisito panini de queso crema con salmón",
    "price": 55,
    "ingredients": [
      "Pan chapata",
      "Salmón ahumado",
      "Queso philadelphia",
      "Limón"
    ],
    "image": require('../assets/images/panini6.png')
  },
  {
    "id": 7,
    "name": "Panini de berenjena y queso mozzarella",
    "description": "Exquisito panini de berenjena con queso mozzarella",
    "price": 60,
    "ingredients": [
      "Pan chapata",
      "Albahaca",
      "Queso mozzarella"
    ],
    "image": require('../assets/images/panini7.png')
  },
  {
    "id": 8,
    "name": "Panini de queso e higo",
    "description": "Exquisito panini de queso con higo",
    "price": 60,
    "ingredients": [
      "Pan chapata",
      "Mermelada de higo",
      "Queso manchego",
      "Jamón de pavo",
      "Higo",
      "Romero"
    ],
    "image": require('../assets/images/panini8.png')
  },
  {
    "id": 9,
    "name": "Panini de espárragos y queso",
    "description": "Exquisito panini de espárragos con queso vegetal",
    "price": "70",
    "ingredients": [
      "Espárrago",
      "Queso vegetal",
      "Aceite de oliva",
      "Pan chapata"
    ],
    "image": require('../assets/images/panini9.png')
  },
  {
    "id": 10,
    "name": "Sandwich de queso y chipotle",
    "description": "Exquisito sandwich con una variedad de quesos y chipotle",
    "price": 110,
    "ingredients": [
      "Pan blanco",
      "Espinaca baby",
      "Jamón",
      "Jitomate",
      "Queso manchego",
      "Queso brie",
      "Queso gruyere",
      "Mayonesa de chipotle"
    ],
    "image": require('../assets/images/panini10.png')
  },
  {
    "id": 11,
    "name": "Ensalada César",
    "description": "Deliciosa ensalada César",
    "price": 75,
    "ingredientes": [
      "Mayonesa",
      "Salsa césar",
      "Croutons",
      "Queso parmesano",
      "Lechuga romana",
      "Pechuga de pollo"
    ],
    "image": require('../assets/images/panini11.png')
  },
  {
    "id": 12,
    "name": "Ensalada de pasta",
    "description": "Deliciosa ensalada de pasta con topping de kiwi y fresa",
    "price": 80,
    "ingredients": [
      "Pasta de colores",
      "Topping de kiwi y fresa",
      "Atún",
      "Papa"
    ],
    "image": require('../assets/images/panini12.png')
  },
  {
    "id": 13,
    "name": "Ensalada de col",
    "description": "Deliciosa ensalada de col y salchichas con yogurt",
    "price": 80,
    "ingredients": [
      "Col",
      "Salchicha",
      "Durazno en almíbar",
      "Queso panela",
      "Yogurt natural",
      "Eneldo"
    ],
    "image": require('../assets/images/panini13.png')
  },
  {
    "id": 14,
    "name": "Ensalada de cucús en palillos",
    "description": "Deliciosa ensalada de cucús en palillos",
    "price": 85,
    "ingredients": [
      "Cucús",
      "Tomate",
      "Pepino",
      "Cebolla",
      "Pechuga de pollo",
      "Limón"
    ],
    "image": require('../assets/images/panini14.png')
  },
  {
    "id": 15,
    "name": "Ensalada de pasta y atún",
    "description": "Deliciosa ensalada de lucitos de pasta y atún",
    "price": 90,
    "ingredients": [
      "Lucitos de pasta",
      "Queso panela",
      "Tomates cherry",
      "Huevo de codorniz",
      "Atún"
    ],
    "image": require('../assets/images/panini15.png')
  },
  {
    "id": 16,
    "name": "Ensalada de pollo a la mostaza",
    "description": "Deliciosa ensalada de pollo a la mostaza",
    "price": 95,
    "ingredients": [
    "Mostaza",
    "Pechuga de pollo",
    "Lechuga italiana",
    "Pepino",
    "Queso panela",
    "Aderezo"
    ],
    "image": require('../assets/images/panini16.png')
  },
  {
    "id": 17,
    "name": "Ensalada de patata alemana",
    "description": "Deliciosa ensalada de patata y salchicha estilo alemán",
    "price": 110,
    "ingredients": [
      "Patata",
      "Salchicha estilo alemán",
      "Perejil",
      "Apio",
      "Huevo",
      "Pimiento amarillo",
      "Condimiento para ensalada",
      "Mayonesa",
      "Crema agria"
    ],
    "image": require('../assets/images/panini17.png')
  },
  {
    "id": 18,
    "name": "Ensalada de atún y garbanzos",
    "description": "Deliciosa ensalada de garbanzos",
    "price": 125,
    "ingredients": [
      "Pepino",
      "Queso panela",
      "Aderezo",
      "garbanzos",
      "atún"
    ],
    "image": require('../assets/images/panini18.png')
  }
]

module.exports = menu
