
document.addEventListener('DOMContentLoaded', function() {
            const lookupButton = document.getElementById('lookup');
            const lookupCitiesButton = document.getElementById('lookup-cities');
            const countryInput = document.getElementById('country');
            const resultDiv = document.getElementById('result');

            // Handle country lookup
            lookupButton.addEventListener('click', function(e) {
                e.preventDefault();
                const country = countryInput.value.trim();
                
                fetch(`world.php?country=${encodeURIComponent(country)}`)
                    .then(response => response.text())
                    .then(data => {
                        resultDiv.innerHTML = data;
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        resultDiv.innerHTML = '<p>An error occurred while fetching data.</p>';
                    });
            });

            // Handle cities lookup
            lookupCitiesButton.addEventListener('click', function(e) {
                e.preventDefault();
                const country = countryInput.value.trim();
                
                fetch(`world.php?country=${encodeURIComponent(country)}&lookup=cities`)
                    .then(response => response.text())
                    .then(data => {
                        resultDiv.innerHTML = data;
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        resultDiv.innerHTML = '<p>An error occurred while fetching data.</p>';
                    });
            });

            //
        });