// window.onload = function() {
//   // Get references to the button and input field
//   var lookupButton = document.getElementById('lookup');
//   var countryInput = document.getElementById('country');
//   var resultDiv = document.getElementById('result');

//   // Add click event listener to the Lookup button
//   lookupButton.addEventListener('click', function() {
//     // Get the country name from the input field
//     var country = countryInput.value.trim();

//     // Create a new XMLHttpRequest object
//     var xhr = new XMLHttpRequest();

//     // Build the URL with the country parameter
//     var url = 'world.php?country=' + encodeURIComponent(country);

//     // Configure the request
//     xhr.open('GET', url, true);

//     // Set up the callback function for when the request completes
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         // Display the data in the result div using innerHTML
//         resultDiv.innerHTML = xhr.responseText;
//       } else if (xhr.readyState === 4) {
//         // Handle error case
//         resultDiv.innerHTML = '<p>An error occurred while fetching data.</p>';
//       }
//     };

//     // Send the request
//     xhr.send();
//   });
// };





// document.addEventListener('DOMContentLoaded', function() {
//     const lookupButton = document.getElementById('lookup');
//     const lookupCitiesButton = document.getElementById('lookup-cities');
//     const countryInput = document.getElementById('country');
//     const resultDiv = document.getElementById('result');

//     // Handle country lookup
//     lookupButton.addEventListener('click', function(e) {
//         e.preventDefault();
//         const country = countryInput.value.trim();
        
//         fetch(`world.php?country=${encodeURIComponent(country)}`)
//             .then(response => response.text())
//             .then(data => {
//                 resultDiv.innerHTML = data;
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 resultDiv.innerHTML = '<p>An error occurred while fetching data.</p>';
//             });
//     });

//     // Handle cities lookup
//     lookupCitiesButton.addEventListener('click', function(e) {
//         e.preventDefault();
//         const country = countryInput.value.trim();
        
//         fetch(`world.php?country=${encodeURIComponent(country)}&lookup=cities`)
//             .then(response => response.text())
//             .then(data => {
//                 resultDiv.innerHTML = data;
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 resultDiv.innerHTML = '<p>An error occurred while fetching data.</p>';
//             });
//     });

//     });

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

            // Allow Enter key to trigger country lookup
            countryInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    lookupButton.click();
                }
            });
        });