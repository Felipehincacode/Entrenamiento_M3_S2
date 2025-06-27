// ===== DATA STRUCTURES =====
// Main object with hardcoded products - no user interaction needed
let products = {
    1: {
        id: 1,
        name: "Apple",
        price: 1000,
        category: "Fruits"
    },
    2: {
        id: 2,
        name: "Banana",
        price: 500,
        category: "Fruits"
    },
    3: {
        id: 3,
        name: "Shirt",
        price: 2500,
        category: "Clothing"
    },
    4: {
        id: 4,
        name: "Pants",
        price: 3000,
        category: "Clothing"
    },
    5: {
        id: 5,
        name: "Shoes",
        price: 5000,
        category: "Footwear"
    }
};

// Set to store unique product names (no duplicates allowed)
let uniqueProductsSet = new Set();

// Map to store categories as keys and product names as values
let categoriesMap = new Map();

// ===== SIMPLE FUNCTIONS =====
// Function to populate Set and Map from products object
function populateDataStructures() {
    // Loop through the products object to fill Set and Map
    for (let productId in products) {
        let currentProduct = products[productId];
        
        // Add product name to Set (Set automatically handles duplicates)
        uniqueProductsSet.add(currentProduct.name);
        
        // Add to Map: category as key, product names as array values
        if (categoriesMap.has(currentProduct.category)) {
            // If category exists, add product name to existing array
            let existingProducts = categoriesMap.get(currentProduct.category);
            existingProducts.push(currentProduct.name);
            categoriesMap.set(currentProduct.category, existingProducts);
        } else {
            // If category doesn't exist, create new array with product name
            categoriesMap.set(currentProduct.category, [currentProduct.name]);
        }
    }
}

// Function to display all information on the page
function displayAllInformation() {
    // ===== DISPLAY PRODUCTS TABLE =====
    let tableBody = document.getElementById('productosBody');

    // Use for...in loop to iterate through object properties (product IDs)
    for (let productId in products) {
        let product = products[productId];
        
        // Create new table row
        let row = document.createElement('tr');
        
        // Fill row with product data
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>${product.category}</td>
        `;
        
        // Add row to table
        tableBody.appendChild(row);
    }

    // ===== DISPLAY UNIQUE PRODUCTS (SET) =====
    let setContainer = document.getElementById('productosSet');
    setContainer.innerHTML = '<p><strong>Unique Products (no duplicates):</strong></p>';

    // Use for...of loop to iterate through Set values (unique product names)
    for (let productName of uniqueProductsSet) {
        let item = document.createElement('div');
        item.className = 'producto-item';
        item.textContent = productName;
        setContainer.appendChild(item);
    }

    // ===== DISPLAY CATEGORIES (MAP) =====
    let mapContainer = document.getElementById('categoriasMap');
    mapContainer.innerHTML = '<p><strong>Categories and their products:</strong></p>';

    // Use forEach method to iterate through Map entries (categories and products)
    categoriesMap.forEach((productNames, category) => {
        let item = document.createElement('div');
        item.className = 'categoria-item';
        item.innerHTML = `
            <span class="categoria-nombre">${category}:</span>
            <span class="producto-nombre">${productNames.join(', ')}</span>
        `;
        mapContainer.appendChild(item);
    });

    // ===== DISPLAY LOOPS INFORMATION =====
    let loopsContainer = document.getElementById('buclesInfo');
    loopsContainer.innerHTML = '<p><strong>Loop information used:</strong></p>';

    // Information about for...in loop
    let forInInfo = document.createElement('div');
    forInInfo.className = 'bucle-info';
    forInInfo.textContent = 'for...in: Iterates through object properties (product IDs)';
    loopsContainer.appendChild(forInInfo);

    // Information about for...of loop
    let forOfInfo = document.createElement('div');
    forOfInfo.className = 'bucle-info';
    forOfInfo.textContent = 'for...of: Iterates through Set values (unique product names)';
    loopsContainer.appendChild(forOfInfo);

    // Information about forEach method
    let forEachInfo = document.createElement('div');
    forEachInfo.className = 'bucle-info';
    forEachInfo.textContent = 'forEach: Iterates through Map entries (categories and products)';
    loopsContainer.appendChild(forEachInfo);

    // Display statistics
    let stats = document.createElement('div');
    stats.className = 'bucle-info';
    stats.innerHTML = `
        <strong>Statistics:</strong><br>
        - Total products: ${Object.keys(products).length}<br>
        - Unique products: ${uniqueProductsSet.size}<br>
        - Categories: ${categoriesMap.size}
    `;
    loopsContainer.appendChild(stats);
}

// ===== MAIN EXECUTION =====
// Populate data structures first
populateDataStructures();

// Then display all information
displayAllInformation();