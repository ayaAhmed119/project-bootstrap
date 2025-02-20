const productsContainer = document.getElementById('products-container');
const pagination = document.getElementById('pagination');
let currentPage = 1;
const productsPerPage = 8;

fetch('products.json')
  .then(res => res.json())
  .then(products => renderProducts(products));

function renderProducts(products) {
  const totalPages = Math.ceil(products.length / productsPerPage);
  const start = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(start, start + productsPerPage);

  productsContainer.innerHTML = currentProducts.map(product => `
    <div class="col-md-3 col-sm-6 mb-4">
      <div class="card h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.title}" />
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title">${product.title}</h5>
          <p class="fw-bold text-success">$${product.price}</p>
          <button class="btn btn-warning w-100">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');

  pagination.innerHTML = Array.from({ length: totalPages }, (_, i) => `
    <li class="page-item ${currentPage === i + 1 ? 'active' : ''}">
      <button class="page-link" onclick="changePage(${i + 1})">${i + 1}</button>
    </li>
  `).join('');
}

function changePage(page) {
  currentPage = page;
  fetch('products.json').then(res => res.json()).then(renderProducts);
}