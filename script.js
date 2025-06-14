const sheetId = "1En6VDJfoG0eG7JlabNspYP7Cqc3PzZVU-87kwJdZjgQ";
const sheetName = "Sheet1"; // Change if your sheet tab name is different

const menuContainer = document.getElementById("menu-container");

async function fetchMenu() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=AIzaSyBzL1oenc86BspfTE8tsFfiOHrP0wnu6Co`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.values) {
      menuContainer.innerHTML = "<p>Failed to load menu data.</p>";
      return;
    }

    const headers = data.values[0];
    const rows = data.values.slice(1);

    rows.forEach(row => {
      // Map row data by headers
      const product = {};
      headers.forEach((h, i) => {
        product[h] = row[i];
      });

      addProduct(product);
    });

  } catch (error) {
    console.error("Error fetching menu:", error);
    menuContainer.innerHTML = "<p>Error loading menu.</p>";
  }
}

function addProduct(product) {
  const div = document.createElement("div");
  div.className = "product";

  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="product-details">
      <h3>${product.name}</h3>
      <p class="description">${product.description}</p>
      <p class="price">$${product.price}</p>
      <button 
        class="snipcart-add-item"
        data-item-id="${product.id}"
        data-item-price="${product.price}"
        data-item-url="https://yourdomain.com/menu.html"
        data-item-name="${product.name}">
        Add to Cart
      </button>
    </div>
  `;

  menuContainer.appendChild(div);
}

fetchMenu();
