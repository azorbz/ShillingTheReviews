// Select the container where results will be displayed
const resultsContainer = document.getElementById('results-container');

// Fetch reviews.json and process the data
fetch('reviews.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(reviews => {
        // Check if reviews is an array and not empty
        if (!Array.isArray(reviews) || reviews.length === 0) {
            throw new Error('Reviews data is not valid or empty');
        }

        // Process each review
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');

            const titleElement = document.createElement('h2');
            titleElement.textContent = review.title;

            const summaryElement = document.createElement('p');
            summaryElement.textContent = review.summary;

            reviewElement.appendChild(titleElement);
            reviewElement.appendChild(summaryElement);

            resultsContainer.appendChild(reviewElement);
        });
    })
    .catch(error => {
        console.error('Error fetching or processing reviews:', error);
        resultsContainer.innerHTML = '<p>Failed to load reviews. Please try again later.</p>';
    });
