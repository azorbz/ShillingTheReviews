document.addEventListener('DOMContentLoaded', function() {
    const resultsContainer = document.getElementById('results-container');

    fetch('reviews.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(reviews => {
            if (!Array.isArray(reviews) || reviews.length === 0) {
                throw new Error('Reviews data is not valid or empty');
            }

            reviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.classList.add('review', 'bubble');

                const titleElement = document.createElement('h2');
                const titleLink = document.createElement('a');
                titleLink.textContent = review.title;
                titleLink.href = review.link;
                titleLink.target = '_blank'; // Open link in a new tab
                titleElement.appendChild(titleLink);

                const summaryElement = document.createElement('p');
                summaryElement.textContent = review.summary;

                reviewElement.appendChild(titleElement);
                reviewElement.appendChild(summaryElement);

                resultsContainer.appendChild(reviewElement);
            });
        })
        .catch(error => {
            console.error('Error fetching or processing reviews:', error);
            if (resultsContainer) {
                resultsContainer.innerHTML = '<p>Failed to load reviews. Please try again later.</p>';
            } else {
                console.error('resultsContainer is null');
            }
        });
});
