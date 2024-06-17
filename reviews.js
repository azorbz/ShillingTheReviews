document.addEventListener('DOMContentLoaded', function() {
    const reviewContainer = document.getElementById('review-previews');

    // Replace with actual URL or local path to your JSON file
    const reviewsUrl = 'reviews.json';

    fetch(reviewsUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(review => {
                // Create review preview element
                const reviewPreview = document.createElement('div');
                reviewPreview.classList.add('review', 'bubble');

                // Create title and link
                const titleLink = document.createElement('a');
                titleLink.textContent = review.title;
                titleLink.href = review.link;
                titleLink.classList.add('review-title');

                // Create preview content
                const previewParagraph = document.createElement('p');
                previewParagraph.textContent = review.summary;
                previewParagraph.classList.add('preview-text');

                // Append title and preview to review preview
                reviewPreview.appendChild(titleLink);
                reviewPreview.appendChild(previewParagraph);

                // Append review preview to container
                reviewContainer.appendChild(reviewPreview);
            });
        })
        .catch(error => {
            console.error('Error fetching or processing reviews:', error);
        });
});
