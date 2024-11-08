// Task 1
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2 + 3
function clickArrayData() {
    document.addEventListener("DOMContentLoaded", function() {
        for(let product of products) {
            let addLine = document.createElement("p");
            addLine.innerHTML = `Name: ${product.name} Price: ${product.price} Description: ${product.description}`;
            document.getElementById("container").appendChild(addLine);
        }
    })
};

clickArrayData();