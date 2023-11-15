// Define the API endpoint URL
const apiUrl = 'https://occhl977el.execute-api.eu-west-1.amazonaws.com/Prod/rss/';

// Get a reference to the HTML img element
const productImage = document.getElementById('productImage');

// Add an event listener to the form for when it's submitted
document.getElementById('productForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Get the product ID from the input field
    const productId = document.getElementById('productId').value;
    console.log(productId)

    try {
        const response = await fetch(`${apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mpn: productId })
        });
        console.log(response)

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            // Check if the JSON response contains the "image_url" field
            if (data.hasOwnProperty('image_url')) {
                // Update the src attribute of the image element with the received image URL
                productImage.src = data.image_url;
                productImage.alt = 'Product Image'; // You can set the alt text as needed
            } else {
                console.error('API response does not contain "image_url" field');
            }

        } else {
            console.error('Request failed with status:', response.status);
        }
    } catch (error) {
        console.error('Error occurred:', error);
    }
});