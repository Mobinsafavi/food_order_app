const DUMMY_DATA = [
  {
    id: "S1",
    name: "رستوران احسان",
    description: "ایرانی، کباب، پیش‌غذای ایرانی",
    rate: "۴.۲",
    address: "بلوار پیروزی، بین پیروزی ۸ و ۱۰، رستوران احسان (پیروزی)",
    type: "restaurant",
    back_img: "ehasanBack",
    profile_img: "ehsanProfile",
    sending_price: 5000,
    product: [
      {
        id: "f1",
        name: "چلو کباب کوبیده",
        price: 120000,
        recipe:
          "۲ سیخ کباب کوبیده مخلوط گوشت گوساله و گوسفندی ۲۰۰ گرمی، ۳۵۰ گرم برنج ایرانی، دورچین: کره، لیمو، کلم قرمز، هویج، خیارشور",
        img: "ehsan_kebab",
      },
      {
        id: "f2",
        name: " چلو خورشت قورمه سبزی",
        price: 84500,
        recipe:
          "۲۵۰ تا ۳۰۰ گرم خورشت قورمه سبزی، ۳۰ گرم گوشت گوسفندی، ۳۵۰ گرم برنج ایرانی",
        img: "ehsan_qhorme",
      },
      {
        id: "f3",
        name: "چلو مرغ سرخ شده (ران)",
        price: 110000,
        recipe:
          "۴۰۰ گرم ران مرغ سرخ شده، ۳۵۰ گرم برنج ایرانی، دورچین: پیاز سرخ کرده، سیر، فلفل دلمه ای، خیارشور، کره",
        img: "ehsan_Chicken",
      },
    ],
  },
  {
    id: "S2",
    name: "پیتزا روگن",
    description: "فست‌فود، پیتزا، ساندویچ",
    rate: "۴.۳",
    address: "بلوار پیروزی، بین پیروزی ۹ و ۱۱، پیتزا روگن",
    type: "restaurant",
    back_img: "rogenBack",
    profile_img: "rogenProfile",
    sending_price: 10000,
    product: [
      {
        id: "f1",
        name: "پیتزا مخصوص (آمریکایی)",
        price: 115000,
        recipe:
          "خمیر دو پخت، ژامبون گوشت و مرغ، گوشت رست شده، سینه مرغ، هات داگ، سس مخصوص، قارچ، پنیر موزارلا، فلفل دلمه ، ۳ عدد سس",
        img: "rogen_pizza",
      },
      {
        id: "f2",
        name: " چیز برگر",
        price: 83000 ,
        recipe:
          "یک عدد برگر ۱۵۰ گرمی دستی، پنیر پیتزا، ژامبون، کاهو، گوجه، خیارشور، نان مک، ۲ عدد سس",
        img: "rogen_burger",
      },
      {
        id: "f3",
        name: "ساندویچ هات داگ ویژه",
        price: 69000 ,
        recipe: "هات داگ، قارچ، ذرت، پنیر پیتزا، کاهو، گوجه، خیارشور، نان باگت",
        img: "rogen_hotdog",
      },
    ],
  },
  {
    id: "S3",
    name: "کافی شاپ احرا    ",
    description: "فست‌فود، پیتزا، ساندویچ",
    rate: "۴.۵",
    address:
      "خیابان راهنمایی، داخل راهنمایی ۱، نبش راهنمایی ۱/۲، کافی شاپ احرا",
    type: "coffeeshop",
    back_img: "ahraBack",
    profile_img: "ahraProfile",
    sending_price: 8000 ,
    product: [
      {
        id: "f1",
        name: "اسپرسو",
        price: 16000,
        recipe: "۹۰ روبوستا-۱۰ عربیکا",
        img: "ahra_espresso",
      },
      {
        id: "f2",
        name: "دونات",
        price: 22500,
        recipe: "یک عدد دونات",
        img: "ahra_doughnut",
      },
      {
        id: "f3",
        name: "شیک ویژه",
        price: 50000,
        recipe: "نوتلا و بادام زمینی",
        img: "ahra_shake",
      },
    ],
  },
];

export default DUMMY_DATA;
