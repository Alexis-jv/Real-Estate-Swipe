export let testProperties = [
  {
    id: 1,
    label: "Student appartement",
    address: "Kamtjatka 7, 3rd floor, 42",
    city: "Horsens",
    country: "Denmark",
    description:
      "Cozy and affordable apartment suitable for students. This apartment features 4 rooms, providing ample space for studying and relaxation. Its convenient location makes it easily accessible to nearby universities, public transportation, and local amenities. The apartment offers a comfortable living environment for students seeking a convenient and budget-friendly housing option.",
    surface: 42,
    nbrRoom: 4,
    price: 667.76,
    isRental: true,
    idUser: 1,
    photos: [
      require("./assets/images/1/1.jpg"),
      require("./assets/images/1/2.jpg"),
    ],
  },
  {
    id: 2,
    label: "Cosy appartement",
    address: "Mejlgade 8, 2nd floor, 234",
    city: "Aarhus",
    country: "Denmark",
    description:
      "Charming apartment with a cozy atmosphere. This apartment is perfect for individuals or couples looking for a comfortable and welcoming living space. It offers 3 well-appointed rooms, including a spacious bedroom and a cozy living room. Located in a vibrant neighborhood, it provides easy access to local shops, restaurants, and cultural attractions. Experience the charm of city living in this lovely apartment.",
    surface: 36,
    nbrRoom: 3,
    price: 210123,
    isRental: false,
    idUser: 1,
    photos: [
      require("./assets/images/2/3.jpg"),
      require("./assets/images/2/4.jpg"),
    ],
  },
  {
    id: 3,
    label: "Vacation villa",
    address: "Strandvejen 48",
    city: "Vejle",
    country: "Denmark",
    description:
      "Luxurious villa for a perfect vacation getaway. This exquisite villa offers a spacious and elegant retreat for relaxation and enjoyment. With 10 beautifully designed rooms, including multiple bedrooms, a gourmet kitchen, a private pool, and stunning views of the surrounding landscape, it provides the ultimate luxury experience. Escape from the daily routine and indulge in the tranquility and beauty of this remarkable vacation villa.",
    surface: 240,
    nbrRoom: 10,
    price: 999999.99,
    isRental: false,
    idUser: 2,
    photos: [
      require("./assets/images/3/5.jpg"),
      require("./assets/images/3/6.jpg"),
    ],
  },
  {
    id: 4,
    label: "Family house",
    address: "Vibevej 15",
    city: "Aalborg",
    country: "Denmark",
    description:
      "Spacious family house with a beautiful garden. This inviting house offers a comfortable and spacious living environment for families. Featuring 5 well-proportioned rooms, including a cozy living room, a modern kitchen, and a large backyard, it is an ideal home for creating cherished family memories. Located in a family-friendly neighborhood with nearby schools and parks, this house provides the perfect setting for a happy and fulfilling family life.",
    surface: 120,
    nbrRoom: 5,
    price: 280000,
    isRental: false,
    idUser: 3,
    photos: [
      require("./assets/images/4/7.jpg"),
      require("./assets/images/4/8.jpg"),
    ],
  },
  {
    id: 5,
    label: "The perfect premises",
    address: "Vibevej 15",
    city: "Horsens",
    country: "Denmark",
    description:
      "Ideal premises for starting your business venture. This commercial space offers a prime location for entrepreneurs and businesses. With 50 square meters of flexible floor space, it provides ample room for various business activities. Whether you're opening a retail store, a restaurant, or an office, this premises offers versatility and a professional environment. Located in the heart of Horsens, it benefits from high foot traffic and easy accessibility for customers and clients. Take advantage of this opportunity to establish your business in this perfect premises.",
    surface: 50,
    nbrRoom: 5,
    price: 2222,
    isRental: true,
    idUser: 4,
    photos: [
      require("./assets/images/5/9.jpg"),
      require("./assets/images/5/10.jpg"),
    ],
  },
];
