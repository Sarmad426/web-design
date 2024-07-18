// Number Formatter (Internationalization API)

const formatter = Intl.NumberFormat("en", { notation: "compact" });
let totalSaleProduct1 = formatter.format(5_551_231);
let totalSaleProduct2 = formatter.format(3_221_568);
const product1 = document.querySelector(".sale-product1");
const product2 = document.querySelector(".sale-product2");
product1.innerHTML = totalSaleProduct1;
product2.innerHTML = totalSaleProduct2;

//   Currency Formatter Javascript
const priceFormatter = Intl.NumberFormat("en", {
  notation: "compact",
  style: "currency",
  currency: "PKR",
});

const productPrice1 = priceFormatter.format(5_678);
const productPrice2 = priceFormatter.format(1_578);
const priceElement1 = document.querySelector(".product-price-1");
const priceElement2 = document.querySelector(".product-price-2");

priceElement1.innerHTML = productPrice1;
priceElement2.innerHTML = productPrice2;
