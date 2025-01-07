// Increase/Decrease Quantity
function decreaseQty() {
    const qtyInput = document.getElementById('qty-input');
    if (qtyInput.value > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
    }
}
function increaseQty() {
    const qtyInput = document.getElementById('qty-input');
    qtyInput.value = parseInt(qtyInput.value) + 1;
}

// Tab Switching
const tabButtons = document.querySelectorAll('.tabs-nav li');
const tabContents = document.querySelectorAll('.tab-content');
const tabWrapper = document.querySelector('.tab-contents-wrapper');

let maxHeight = 0;
tabContents.forEach(content => {
    // Temporarily show to measure
    content.style.display = 'block';
    const height = content.offsetHeight;
    if (height > maxHeight) maxHeight = height;
    content.style.display = 'none';
});
// Set the wrapper's min-height
tabWrapper.style.minHeight = maxHeight + 'px';

// Show the first tab by default
document.getElementById('details').style.display = 'block';

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove "active" from all tabs
        tabButtons.forEach(b => b.classList.remove('active'));
        // Hide all contents
        tabContents.forEach(content => (content.style.display = 'none'));

        // Add "active" to clicked tab
        btn.classList.add('active');
        // Show the corresponding content
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).style.display = 'block';
    });
});
