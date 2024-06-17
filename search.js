document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
    const searchQueryElem = document.getElementById('search-query');
    const resultsContainer = document.getElementById('results');

    if (query && searchQueryElem && resultsContainer) {
        searchQueryElem.textContent = query;

        fetch('reviews.json')
            .then(response => response.json())
            .then(reviews => {
                const filteredReviews = reviews.filter(review =>
                    review.title.toLowerCase().includes(query.toLowerCase()) ||
                    review.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
                );

                if (filteredReviews.length > 0) {
                    filteredReviews.forEach(review => {
                        const reviewElem = document.createElement('article');
                        reviewElem.innerHTML = `<h3><a href="${review.link}">${review.title}</a></h3><p>${review.summary}</p>`;
                        resultsContainer.appendChild(reviewElem);
                    });
                } else {
                    resultsContainer.innerHTML = '<p>No results found</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching reviews:', error);
                resultsContainer.innerHTML = '<p>Failed to load reviews</p>';
            });
    }
});
