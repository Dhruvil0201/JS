const products = [
  {
    id: 1,
    name: "Airpods Pro",
    price: 24900,
    description:
      "AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparancy mode so much can hear your surroundings.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU",
  },
  {
    id: 2,
    name: "Apple Watch",
    price: 40900,
    description:
      "The most advanced Apple Watch yet, featuring the Always-On Retina display, the ECG app, international emergency calling.",
    imageSrc: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
  },
  {
    id: 3,
    name: "Macbook Pro",
    price: 199900,
    description:
      "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made.",
    imageSrc: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
  },
  {
    id: 4,
    name: "iPhone 11 pro",
    price: 106600,
    description:
      "A mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
  },
  {
    id: 5,
    name: "iPad Pro",
    price: 71900,
    description:
      "It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad.",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
  },
];

let cartItemsArray = JSON.parse(localStorage.getItem("cartItems")) || [];

const addToCart = (productIndex) => {
  const product = products[productIndex];

  const existingCartItem = cartItemsArray.find(
    (item) => item.id === product.id
  );

  if (existingCartItem) {
    existingCartItem.quantity = (existingCartItem.quantity || 1) + 1;
  } else {
    product.quantity = 1;
    cartItemsArray.push(product);
  }
  updateLocalStorage();
  updateCartModal();
};

const updateLocalStorage = () => {
  localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));
};

const updateCartModal = () => {
  const cartItemsContainer = document.getElementById("cartItems");
  cartItemsContainer.innerHTML = "";

  cartItemsArray.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
        <div class="col-xxl-12 mt-5">
          <div class="d-flex">
            <div class="col-3">
              <img src="${
                item.imageSrc
              }" class="img-fluid" alt="Product Image" />
            </div>
            <div class="col-9">
              <div class="cart-product-details">
                <h4>${item.price.toFixed(2)}</h4>
                <p>${item.description}</p>
                <button class="delete-btn" onclick="deleteFromCart(${
                  item.id
                })">Delete</button>
                <button onclick="return updateQuantityAndPrice(${
                  item.id
                }, 1)" class="pm">+</button>
                <span id="quantity-${item.id}">${item.quantity}</span>
                <button onclick="return updateQuantityAndPrice1(${
                  item.id
                }, -1)" class="pm">-</button>
              </div>
            </div>
          </div>
        </div>`;
    cartItemsContainer.appendChild(cartItem);
  });
};

const updateQuantityAndPrice = (id) => {
  const existingCartItem = cartItemsArray.filter((item) => item.id === id);
  if (existingCartItem[0].quantity >= 1) {
    existingCartItem[0].quantity += 1;
    updateLocalStorage();
    updateCartModal();
  }
};

const updateQuantityAndPrice1 = (id) => {
  const existingCartItem = cartItemsArray.filter((item) => item.id === id);
  if (existingCartItem[0].quantity >= 2) {
    existingCartItem[0].quantity -= 1;
    updateLocalStorage();
    updateCartModal();
  }
};

const deleteFromCart = (productId) => {
  cartItemsArray = cartItemsArray.filter((item) => item.id !== productId);
  updateLocalStorage();
  updateCartModal();
};

const generateProductCards = () => {
  const productContainer = document.getElementById("productContainer");

  products.forEach((product, index) => {
    const col = document.createElement("div");
    const productCard = document.createElement("div");
    col.className = "col-3";
    productCard.className = "card";
    productCard.style = "height: 530px; margin-bottom:20px;";

    productCard.innerHTML = `
        <img src="${product.imageSrc}" class="card-img-top" alt="...">
        <div class="card-body">
          <div class="mb-3">
            <h4 class="card-title">₹${product.price.toFixed(2)}</h4>
            <p class="card-text">${product.description}</p>

            <div>
            <button class="btn btn2 btn-primary" onclick="addToCart(${index})">Add TO Cart</button>
          </div>
          </div>
          
        </div>`;

    col.appendChild(productCard);
    productContainer.appendChild(col);
  });
};

window.addEventListener("DOMContentLoaded", () => {
  generateProductCards();
  cartItemsArray = JSON.parse(localStorage.getItem("cartItems")) || [];
  updateCartModal();
});
