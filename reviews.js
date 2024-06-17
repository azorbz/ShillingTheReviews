document.addEventListener("DOMContentLoaded", function () {
    const reviewsContainer = document.getElementById('review-previews');

    fetch('reviews.json')
        //.then(response => response.json())
        .then(reviews => {
            reviews.forEach(review => {
                const reviewElem = document.createElement('article');
                reviewElem.innerHTML = `
                    <h3><a href="${review.link}">${review.title}</a></h3>
                    <p>${review.summary}</p>
                    <a href="${review.link}">Read more</a>
                `;
                reviewsContainer.appendChild(reviewElem);
            });
        })
        .catch(error => {
            console.error('Error fetching reviews:', error);
            reviewsContainer.innerHTML = '<p>Failed to load reviews</p>';
        });
});
