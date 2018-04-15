 <?php
									
								
								$servername = "localhost";
								$username = "shnwo2bp_Admin";
								$password = "\$hnCM2018";
								$dbname = "shnwo2bp_SHN";
								
								//$conn = mysql_connect($servername, $username, $password);
//$db   = mysql_select_db($dbname);
$mysqli = new mysqli($servername, $username, $password, $dbname);
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

  $users_firstname = $_POST['firstname'];
  $users_lastname = $_POST['lastname'];
  $users_email = $_POST['email'];
  $users_phone = $_POST['phone'];

//$sql = "INSERT INTO SHN_Leads(FirstName, LastName, Email, PhoneNumber) VALUES ('$users_firstname', '$users_lastname', '$users_email', //'$users_phone')";
  
$stmt = $mysqli->prepare("INSERT INTO SHN_Leads(FirstName, LastName, Email, PhoneNumber,InsertedTime) VALUES (?, ?, ?, ?,CURRENT_TIMESTAMP())");
$stmt->bind_param('ssss', $users_firstname, $users_lastname, $users_email, $users_phone);
//$stmt->bind_param(`sssi`, `bharath`, `elluru`, `ellurubharath29@gmail.com`, $users_phone);
$stmt->execute();
$stmt->close();
//if ($mysqli->query($sql) === TRUE) {
//    echo "New record created successfully";
//} else {
//    echo "Error: " . $sql . "<br>" . $mysqli->error;
//}

$mysqli->close();
header ('Location: /index.php')

        ?>