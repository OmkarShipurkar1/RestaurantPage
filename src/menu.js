import "./styles.css";

class Recipe {
  constructor(name, price, aboutus, imglink) {
    this.name = name;
    this.price = price;
    this.aboutus = aboutus;
    this.imglink = imglink;
  }
}

const recipe1 = new Recipe(
  "Paneer Tikka Masala",
  599,
  "Grilled cubes of cottage cheese simmered in a creamy, spiced tomato sauce",
  "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka-500x500.jpg",
);
const recipe2 = new Recipe(
  "Vegetable Biryani",
  499,
  "Fragrant basmati rice cooked with mixed vegetables and aromatic spices. Served with raita.",
  "https://pipingpotcurry.com/wp-content/uploads/2019/09/Vegetable-Biryani-Instant-Pot-Piping-Pot-Curry-4-500x500.jpg",
);
const recipe3 = new Recipe(
  "Palak Paneer",
  499,
  "Fresh cottage cheese cubes in a velvety spinach gravy.",
  "https://www.indianveggiedelight.com/wp-content/uploads/2017/10/palak-paneer-recipe-featured.jpg",
);
const recipe4 = new Recipe(
  "Dal Makhani",
  649,
  "Creamy black lentils slow-cooked overnight with butter and cream.",
  "https://rainbowplantlife.com/wp-content/uploads/2021/06/Dal-Makhani-edited-photos-5-of-6.jpg",
);

const recipe5 = new Recipe(
  "Vegetable Jalfrezi",
  649,
  "A colorful medley of vegetables stir-fried with bell peppers in a tangy tomato-based sauce.",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0CJMwy_9vUAMjdw0ebb1djR_B0tCUijF5A&s",
);
const recipe6 = new Recipe(
  "Gajar ka Halwa",
  799,
  "A sweet dessert made from grated carrots slow-cooked in milk and ghee. Garnished with nuts.",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDa6Oz_axWLCnoKIfQkWJ-N4f9alvsT-H3vg&s",
);
const recipe7 = new Recipe(
  "Malai Kofta",
  549,
  "Soft dumplings made from potato and paneer, served in a rich cashew and tomato gravy.",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTjHp8G7dXhcjGbGGUw5bvaxwAIefV9oQHQ&s",
);
const recipe8 = new Recipe(
  "Gulab Jamun",
  199,
  "Golden-fried milk dough balls soaked in rose-scented syrup. ",
  "https://talodfoods.com/cdn/shop/files/Gulab-Jamun-Creative_img_4f2bd570-4f11-4dba-8386-fa5a26392cd0.webp?v=1725262395&width=1500",
);

const recipes = [
  recipe1,
  recipe2,
  recipe3,
  recipe4,
  recipe5,
  recipe6,
  recipe7,
  recipe8,
];

let menu = "";
let menuItems = "";

for (let i = 0; i < recipes.length; i++) {
  menuItems += `
  <div class="recipe-card">
    <img src="${recipes[i].imglink}" >
    <div>
      <h1> ${recipes[i].name} </h1>
    <span>Price: ₹${recipes[i].price} </span>
    <p> ${recipes[i].aboutus} </p>
    </div>
  </div>
  `;
}

menu = `
  <div class="grid-layout">
    ${menuItems}
  </div>
`;

export { menu };
