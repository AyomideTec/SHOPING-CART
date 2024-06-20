document.addEventListener('DOMContentLoaded', function () {
    // Function to update the total price
    function updateTotal() {
        const totalElement = document.getElementById('total');
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.getAttribute('data-price'));
            const quantity = parseInt(item.querySelector('input').value);
            total += price * quantity;
        });
        totalElement.textContent = total.toFixed(2);
    }

    // Adding event listeners to all cart items
    document.querySelectorAll('.cart-item').forEach(item => {
        const plusBtn = item.querySelector('.plus-btn');
        const minusBtn = item.querySelector('.minus-btn');
        const deleteBtn = item.querySelector('.delete-btn');
        const likeBtn = item.querySelector('.like-btn');
        const quantityInput = item.querySelector('input');

        // Event listener for the plus button
        plusBtn.addEventListener('click', function () {
            quantityInput.value = parseInt(quantityInput.value) + 1;
            updateTotal();
        });

        // Event listener for the minus button
        minusBtn.addEventListener('click', function () {
            if (quantityInput.value > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
                updateTotal();
            }
        });

        // Event listener for the delete button
        deleteBtn.addEventListener('click', function () {
            item.remove();
            updateTotal();
        });

        // Event listener for the like button
        likeBtn.addEventListener('click', function () {
            likeBtn.classList.toggle('liked');
        });

        // Event listener for the quantity input
        quantityInput.addEventListener('change', function () {
            if (quantityInput.value < 1) {
                quantityInput.value = 1;
            }
            updateTotal();
        });
    });

    // Initial total price update
    updateTotal();
});
