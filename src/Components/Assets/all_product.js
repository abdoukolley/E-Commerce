import p1_img from "../Assets/Men's Section/201551413-2.webp";
import p2_img from "../Assets/Men's Section/205994977-1-grey.webp";
import p3_img from "../Assets/Men's Section/1538427612_1_1_1.jpg";
import p4_img from "../Assets/Men's Section/2553311251_1_1_1.jpg";
import p5_img from "../Assets/Men's Section/3046310400_2_1_1.jpg";
import p6_img from "../Assets/Men's Section/3992311629_2_1_1.jpg";
import p7_img from "../Assets/Men's Section/4087330707_2_1_1.jpg";
import p8_img from "../Assets/Men's Section/6368390064_2_1_1.jpg";
import p9_img from "../Assets/Men's Section/6917320505_1_1_1.jpg";
import p10_img from "../Assets/Men's Section/8281469800_2_1_1.jpg";
import p11_img from "../Assets/Men's Section/5755305700_2_1_1.jpg";
import p12_img from "../Assets/Men's Section/6917309708_1_1_1.jpg";
import p13_img from "../Assets/Women's Section/7901898712_2_1_1.jpg";
import p14_img from "../Assets/Women's Section/8246380756_1_1_1.jpg";
import p15_img from "../Assets/Women's Section/7957707806_1_1_1.jpg";
import p16_img from "../Assets/Women's Section/1014848423_2_1_1.jpg";
import p17_img from "../Assets/Women's Section/9878225800_1_1_1.jpg";
import p18_img from "../Assets/Women's Section/6427121800_2_1_1.jpg";
import p19_img from "../Assets/Women's Section/9598163743_2_1_1.jpg";
import p20_img from "../Assets/Women's Section/8c1149372fd584517589116d1acf46ec22609c63_cnf7129_1.webp";
import p21_img from "../Assets/Women's Section/204945343-2.webp";
import p22_img from "../Assets/Women's Section/205510499-2.webp";
import p23_img from "../Assets/Women's Section/0108048406_1_1_1.jpg";
import p24_img from "../Assets/Women's Section/5862151712_2_1_1.jpg";
import p25_img from "../Assets/Kids Section/0485553630_1_1_1.jpg";
import p26_img from "../Assets/Kids Section/1213684427_1_1_1.jpg";
import p27_img from "../Assets/Kids Section/2187550505_1_1_1.jpg";
import p28_img from "../Assets/Kids Section/6201711450_1_1_1.jpg";
import p29_img from "../Assets/Kids Section/5854704800_1_1_1.jpg";
import p30_img from "../Assets/Kids Section/5644709306_1_1_1.jpg";
import p31_img from "../Assets/Kids Section/6508096926_1_1_1.jpg";
import p32_img from "../Assets/Kids Section/3183661710_1_1_1.jpg";
import p33_img from "../Assets/Kids Section/5475565730_1_1_1.jpg";
import p34_img from "../Assets/Kids Section/0377634506_1_1_1.jpg";
import p35_img from "../Assets/Kids Section/0562744800_1_1_1.jpg";
import p36_img from "../Assets/Kids Section/2187714800_1_1_1.jpg";

let all_product = [
    {
      id: 1,
      name: "stretch slim fit shirt",
      category: "men",
      image: p1_img,
      new_price: 12.0,
      old_price: 18.0,
    },

    {
      id: 2, 
      name: "hoodie in washed grey",
      category: "men",
      image: p2_img,
      new_price: 36.0,
      old_price: 40.0,
    },

    {
      id: 3, 
      name: "pink oversized t-shirt with slogan print",
      category: "men",
      image: p3_img,
      new_price: 9.99,
      old_price: 22.99,
    },

    {
      id: 4, 
      name: "contrast topstitching cargo pants",
      category: "men",
      image: p4_img,
      new_price: 29.99,
      old_price: 60.0,
    },

    {
      id: 5, 
      name: "blue leather jacket",
      category: "men",
      image: p5_img,
      new_price: 34.99,
      old_price: 49.99,
    },

    {
      id: 6, 
      name: "embroidered text t-shirt",
      category: "men",
      image: p6_img,
      new_price: 15.99,
      old_price: 29.99,
    },

    {
      id: 7, 
      name: "cotton button up shirt",
      category: "men",
      image: p7_img,
      new_price: 20.0,
      old_price: 30.0,
    },

    {
      id: 8, 
      name: "herringbone wool blend coat",
      category: "men",
      image: p8_img,
      new_price: 89.99,
      old_price: 249.99,
    },

    {
      id: 9, 
      name: "loose fit jeans",
      category: "men",
      image: p9_img,
      new_price: 32.99,
      old_price: 45.00,
    },

    {
      id: 10, 
      name: "faux suede jacket",
      category: "men",
      image: p10_img,
      new_price: 29.99,
      old_price: 80.99,
    },

    {
      id: 11, 
      name: "structured oversized knit polo",
      category: "men",
      image: p11_img,
      new_price: 19.99,
      old_price: 59.99,
    },

    {
      id: 12, 
      name: "lightweight cotton trousers",
      category: "men",
      image: p12_img,
      new_price: 19.99,
      old_price: 49.99,
    },

    {
      id: 13, 
      name: "rhinestone soft crop top",
      category: "women",
      image: p13_img,
      new_price: 15.99,
      old_price: 45.99,
    },

    {
      id: 14, 
      name: "chino trousers",
      category: "women",
      image: p14_img,
      new_price: 19.99,
      old_price: 45.99,
    },

    {
      id: 15, 
      name: "pyjama style trousers",
      category: "women",
      image: p15_img,
      new_price: 19.99,
      old_price: 89.99,
    },

    {
      id: 16, 
      name: "faux fur sweater",
      category: "women",
      image: p16_img,
      new_price: 15.99,
      old_price: 45.99,
    },


    {
      id: 17, 
      name: "braided strap jumpsuit",
      category: "women",
      image: p17_img,
      new_price: 15.99,
      old_price: 45.99,
    },

    {
      id: 18, 
      name: "fitted knit dress",
      category: "women",
      image: p18_img,
      new_price: 16.99,
      old_price: 28.99,
    },

    {
      id: 19, 
      name: "wool and alpaca blend knit",
      category: "women",
      image: p19_img,
      new_price: 19.99,
      old_price: 39.99,
    },

    {
      id: 20, 
      name: "black half zip cropped sweatshirt",
      category: "women",
      image: p20_img,
      new_price: 24.99,
      old_price: 49.99,
    },

    {
      id: 21, 
      name: "hooded puffer coat in stone",
      category: "women",
      image: p21_img,
      new_price: 69.99,
      old_price: 89.99,
    },

    {
      id: 22, 
      name: "baggy light blue jeans",
      category: "women",
      image: p22_img,
      new_price: 22.99,
      old_price: 35.00,
    },

    {
      id: 23, 
      name: "denim mini skirt",
      category: "women",
      image: p23_img,
      new_price: 15.99,
      old_price: 35.99,
    },

    {
      id: 24, 
      name: "belted baggy denim shorts",
      category: "women",
      image: p24_img,
      new_price: 19.99,
      old_price: 45.99,
    },

    {
      id: 25, 
      name: "textured gingham top",
      category: "kid",
      image: p25_img,
      new_price: 9.99,
      old_price: 17.99,
    },

    {
      id: 26, 
      name: "fleece Trimmed Denim Jacket",
      category: "kid",
      image: p26_img,
      new_price: 19.99,
      old_price: 45.99,
    },

    {
      id: 27, 
      name: "fluid twill shorts",
      category: "kid",
      image: p27_img,
      new_price: 12.99,
      old_price: 22.99,
    },

    {
      id: 28, 
      name: "ribbed t-shirt with cold shoulders",
      category: "kid",
      image: p28_img,
      new_price: 6.99,
      old_price: 17.99,
    },

    {
      id: 29, 
      name: "faux leather washed jacket",
      category: "kid",
      image: p29_img,
      new_price: 29.99,
      old_price: 49.99,
    },

    {
      id: 30, 
      name: "removable collar puffer jacket",
      category: "kid",
      image: p30_img,
      new_price: 25.99,
      old_price: 55.99,
    },

    {
      id: 31, 
      name: "patchwork dress",
      category: "kid",
      image: p31_img,
      new_price: 15.99,
      old_price: 29.99,
    },

    {
      id: 32, 
      name: "nylon cargo pants",
      category: "kid",
      image: p32_img,
      new_price: 17.99,
      old_price: 35.99,
    },

    {
      id: 33, 
      name: "contrast quilted jacket",
      category: "kid",
      image: p33_img,
      new_price: 22.99,
      old_price: 29.99,
    },

    {
      id: 34, 
      name: "animal t shirt",
      category: "kid",
      image: p34_img,
      new_price: 4.99,
      old_price: 9.99,
    },

    {
      id: 35, 
      name: "faux leather bomber jacket",
      category: "kid",
      image: p35_img,
      new_price: 24.99,
      old_price: 49.99,
    },

    {
      id: 36, 
      name: "denim jumpsuit",
      category: "kid",
      image: p36_img,
      new_price: 19.99,
      old_price: 39.99,
    },

]

export default all_product;