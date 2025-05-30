document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('widgetForm');

    if (!form) return; // Only run this on contact.html

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const usePost = document.getElementById('uploadToggle').checked;
        const formData = new FormData(form);

        // Simulate vulnerability: log sensitive form data
        console.log("🚨 FORM SUBMITTED");
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        const endpoint = '/api/widgets'; // Django will eventually handle this

        if (usePost) {
            fetch(endpoint, {
                method: 'POST',
                body: formData,
            })
                .then(response => response.text()) // text to simulate raw/unsafe handling
                .then(data => {
                    console.log("✅ POST Response:", data);
                    alert("POST request sent.");
                })
                .catch(error => {
                    console.error("❌ POST Error:", error);
                });
        } else {
            const params = new URLSearchParams();
            for (let [key, value] of formData.entries()) {
                if (key !== 'file') {
                    params.append(key, value);
                }
            }

            fetch(`${endpoint}?${params.toString()}`, {
                method: 'GET',
            })
                .then(response => response.text())
                .then(data => {
                    console.log("✅ GET Response:", data);
                    alert("GET request sent.");
                })
                .catch(error => {
                    console.error("❌ GET Error:", error);
                });
        }
    });
});
