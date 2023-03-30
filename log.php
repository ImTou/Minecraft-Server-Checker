<?php

// Replace with your database credentials
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Insert data from form into database
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $ip_address = $_POST["ip_address"];
  $server_name = $_POST["server_name"];
  $query = "INSERT INTO server_logs (ip_address, server_name) VALUES ('$ip_address', '$server_name')";

  if (mysqli_query($conn, $query)) {
    echo "Data inserted successfully";
  } else {
    echo "Error inserting data: " . mysqli_error($conn);
  }
}

mysqli_close($conn);

?>
