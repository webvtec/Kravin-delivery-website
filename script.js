const sheetId = "1PDF8T0lX7yGDxxbZMu1JuMQrhBVputNSkFdzMSYnxIA";
const sheetName = "Sheet1"; // Rename if needed
const sheetUrl = `https://opensheet.elk.sh/${sheetId}/${sheetName}`;

fetch(sheetUrl)
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then((products) => {
    const container = document.getElementById("product-list");
    container.innerHTML = "";

    products.forEach((item) => {
      const product = document.createElement("div");
      product.className = "product";

      product.innerHTML = `
        <img src="${item.Image}" alt="${item.Name}" />
        <h3>${item.Name}</h3>
        <p>${item.Description}</p>
        <p>$${item.Price}</p>
        <button class="snipcart-add-item"
          data-item-id="${item.Name}"
          data-item-name="${item.Name}"
          data-item-price="${item.Price}"
          data-item-url="https://webvtec.github.io/Kravin-delivery-website/menu.html"
          data-item-description="${item.Description}"
          data-item-image="${item.Image}">
          Add to Cart
        </button>
      `;
      container.appendChild(product);
    });
  })
  .catch((error) => {
    console.error("Failed to load menu:", error);
    document.getElementById("product-list").innerHTML =
      "<p>Failed to load menu.</p>";
  });
