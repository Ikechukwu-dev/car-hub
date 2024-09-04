// Car data for comparison
const carData = {
    1: { model: "Tesla Model S", price: "$75,000", type: "New" },
    2: { model: "BMW 3 Series", price: "$35,000", type: "Used" },
    3: { model: "Audi A4", price: "$45,000", type: "New" },
    4: { model: "Honda Civic", price: "$18,000", type: "Used" },
    5: { model: "Lamborghini Huracán", price: "$230,000", type: "New" },
    6: { model: "Audi Q5", price: "$40,000", type: "Used" },
    7: { model: "Mercedes-Benz GLE", price: "$62,000", type: "New" },
    8: { model: "Mazda3", price: "$13,500", type: "Used" }
};

// Function to select a car for comparison
function selectCar(slot) {
    const selectedCar = document.getElementById(`compare-select-${slot}`).value;

    if (selectedCar) {
        document.getElementById(`car${slot}-model`).innerText = carData[selectedCar].model;
        document.getElementById(`car${slot}-price`).innerText = carData[selectedCar].price;
        document.getElementById(`car${slot}-type`).innerText = carData[selectedCar].type;
    } else {
        document.getElementById(`car${slot}-model`).innerText = '';
        document.getElementById(`car${slot}-price`).innerText = '';
        document.getElementById(`car${slot}-type`).innerText = '';
    }
}
// Function to submit a review
function submitReview() {
    const name = document.getElementById('reviewer-name').value;
    const model = document.getElementById('car-model').value;
    const reviewText = document.getElementById('review-text').value;
    const rating = document.getElementById('rating').value;

    if (name && model && reviewText && rating) {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');

        reviewItem.innerHTML = `
            <h4>${name}</h4>
            <p><strong>Car Model:</strong> ${model}</p>
            <p><strong>Rating:</strong> ${rating} Stars</p>
            <p>"${reviewText}"</p>
        `;

        document.getElementById('reviews-list').appendChild(reviewItem);

        // Clear the form fields after submission
        document.getElementById('reviewer-name').value = '';
        document.getElementById('car-model').value = '';
        document.getElementById('review-text').value = '';
        document.getElementById('rating').value = '5';

        alert('Thank you for your review!');
    } else {
        alert('Please fill out all fields.');
    }
}