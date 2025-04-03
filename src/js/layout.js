document.addEventListener("DOMContentLoaded", () => {
    // Load header
    fetch("partials/header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load header");
            }
            return response.text();
        })
        .then(data => {
            document.querySelector("header").innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading header:", error);
        });

    // Load footer
    fetch("partials/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load footer");
            }
            return response.text();
        })
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading footer:", error);
        });
});
