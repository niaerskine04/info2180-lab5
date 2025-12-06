<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

// Get the country parameter from the query string
$country =  $_GET['country'] ?? ''; 
$lookup = $_GET['lookup'] ?? '';


if ($lookup === 'cities') {
    // Query for cities in the specified country
    $stmt = $conn->query("
        SELECT cities.name, cities.district, cities.population 
        FROM cities 
        JOIN countries ON cities.country_code = countries.code 
        WHERE countries.name LIKE '%$country%'
    ");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    if (count($results) > 0) {
        echo '<table>';
        echo '<thead>';
        echo '<tr>';
        echo '<th>Name</th>';
        echo '<th>District</th>';
        echo '<th>Population</th>';
        echo '</tr>';
        echo '</thead>';
        echo '<tbody>';
        
        foreach ($results as $row) {
            echo '<tr>';
            echo '<td>' . htmlspecialchars($row['name']) . '</td>';
            echo '<td>' . htmlspecialchars($row['district']) . '</td>';
            echo '<td>' . htmlspecialchars($row['population']) . '</td>';
            echo '</tr>';
        }
        
        echo '</tbody>';
        echo '</table>';
    } else {
        echo '<p>No cities found.</p>';
    }
} else {
    // Query for country information
    $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    if (count($results) > 0) {
        ?>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Continent</th>
                    <th>Independence</th>
                    <th>Head of State</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($results as $row): ?>
                <tr>
                    <td><?= htmlspecialchars($row['name']); ?></td>
                    <td><?= htmlspecialchars($row['continent']); ?></td>
                    <td><?= $row['independence_year'] ? htmlspecialchars($row['independence_year']) : 'N/A'; ?></td>
                    <td><?= htmlspecialchars($row['head_of_state']); ?></td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
        <?php
    } else {
        echo '<p>No countries found.</p>';
    }
}
?>