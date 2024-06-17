document.addEventListener('DOMContentLoaded', function() {
    const reviewContainer = document.getElementById('review-previews');

    // Replace with actual URL or local path to your JSON file
    const reviewsUrl = 'reviews.json';

    fetch(reviewsUrl)
        .then(response => response.json())
        .then(data => {
            // Get the first three reviews
            const firstThreeReviews = data.slice(0, 3);

            // Display the first three reviews like search results
            firstThreeReviews.forEach(review => {
                const reviewPreview = document.createElement('article');
                reviewPreview.classList.add('review-preview');

                // Create title and link
                const titleLink = document.createElement('a');
                titleLink.textContent = review.title;
                titleLink.href = review.link;
                titleLink.classList.add('review-title');

                // Create title element
                const titleElem = document.createElement('h3');
                titleElem.appendChild(titleLink);

                // Create preview content
                const previewParagraph = document.createElement('p');
                previewParagraph.textContent = review.summary;
                previewParagraph.classList.add('preview-text');

                // Append title and preview to review preview
                reviewPreview.appendChild(titleElem);
                reviewPreview.appendChild(previewParagraph);

                // Append review preview to container
                reviewContainer.appendChild(reviewPreview);
            });
        })
        .catch(error => {
            console.error('Error fetching or processing reviews:', error);
        });
});
