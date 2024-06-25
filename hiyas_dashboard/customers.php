<?php
include 'db.php';

// Total Revenue Calculation
$totalRevenueQuery = "SELECT SUM(total_price) AS total_revenue FROM paymentcheckout";
$totalRevenueResult = $conn->query($totalRevenueQuery);
$totalRevenue = 0;  // Default value if no data found

if ($totalRevenueResult->num_rows > 0) {
    $revenueRow = $totalRevenueResult->fetch_assoc();
    $totalRevenue = $revenueRow['total_revenue'];
}

// Total Users Calculation
$totalUsersQuery = "SELECT COUNT(id) AS total_users FROM customer";
$totalUsersResult = $conn->query($totalUsersQuery);
$totalUsers = 0;  // Default value if no data found

if ($totalUsersResult->num_rows > 0) {
    $usersRow = $totalUsersResult->fetch_assoc();
    $totalUsers = $usersRow['total_users'];
}

// Fetch latest order_number
$latestOrderNumberQuery = "SELECT order_number FROM paymentcheckout ORDER BY order_number DESC LIMIT 1";
$latestOrderNumberResult = $conn->query($latestOrderNumberQuery);
$latestOrderNumber = 0;  // Default value if no data found

if ($latestOrderNumberResult->num_rows > 0) {
    $orderNumberRow = $latestOrderNumberResult->fetch_assoc();
    $latestOrderNumber = $orderNumberRow['order_number'];
}

// Fetching customer details
$sql = "SELECT id, user_id, email, username, date FROM customer";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <title>Admin Dashboard Panel</title>
</head>
<body>
    <nav>
        <div class="logo-name">
            <div class="logo-image">
                <img src="logo.png" alt="">
            </div>
            <span class="logo_name">Hiyas Flowershop</span>
        </div>
        <div class="menu-items">
            <ul class="nav-links">
                <li><a href="admin dashboard.php">
                    <i class="uil uil-estate"></i>
                    <span class="link-name">Dashboard</span>
                </a></li>
                <li><a href="customers.php">
                    <i class="fa fa-users"></i>
                    <span class="link-name">Users</span>
                </a></li>
                <li><a href="employee.php">
                <i class="fa-solid fa-user-tie"></i>
                    <span class="link-name">Employees</span>
                </a></li>
                <li class="mode">
                    <a href="#">
                        <i class="uil uil-moon"></i>
                        <span class="link-name">Dark Mode</span>
                    </a>
                    <div class="mode-toggle">
                        <span class="switch"></span>
                    </div>
                </li>
                <li><a href="#">
                    <i class="uil uil-signout"></i>
                    <span class="link-name">Logout</span>
                </a></li>
            </ul>
        </div>
    </nav>

    <section class="dashboard">
        <div class="top">
            <i class="uil uil-bars sidebar-toggle"></i>
            <div class="search-box">
                <i class="uil uil-search"></i>
                <input type="text" placeholder="Search here...">
            </div>
            <img src="logo.png" alt="">
        </div>

        <div class="dash-content">
            <div class="overview">
                <div class="title">
                    <i class="uil uil-tachometer-fast-alt"></i>
                    <span class="text">Dashboard</span>
                </div>
                <div class="boxes">
                    <div class="box box1">
                        <i class="fa fa-users"></i>
                        <span class="text">Total Users</span>
                        <span class="number"><?php echo number_format($totalUsers); ?></span>
                    </div>
                    <div class="box box2">
                        <i class="fa fa-sack-dollar"></i>
                        <span class="text">Total Revenue</span>
                        <span class="number"><?php echo number_format($totalRevenue); ?></span>
                    </div>
                    <div class="box box3">
                        <i class="fa fa-bag-shopping"></i>
                        <span class="text">Total Orders</span>
                        <span class="number"><?php echo $latestOrderNumber; ?></span>
                    </div>
                </div>
            </div>

            <div class="activity">
                <div class="title">
                    <i class="uil uil-clock-three"></i>
                    <span class="text">Recent Registrations</span>
                </div>
                <?php
                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        echo "<div class='activity-data'>";
                        echo "<div class='data id'><span class='data-title'>ID</span><span class='data-list'>" . htmlspecialchars($row["id"]) . "</span></div>";
                        echo "<div class='data user_id'><span class='data-title'>User ID</span><span class='data-list'>" . htmlspecialchars($row["user_id"]) . "</span></div>";
                        echo "<div class='data email'><span class='data-title'>Email</span><span class='data-list'>" . htmlspecialchars($row["email"]) . "</span></div>";
                        echo "<div class='data username'><span class='data-title'>Username</span><span class='data-list'>" . htmlspecialchars($row["username"]) . "</span></div>";
                        echo "<div class='data date'><span class='data-title'>Date</span><span class='data-list'>" . htmlspecialchars($row["date"]) . "</span></div>";
                        echo "</div>";
                    }
                } else {
                    echo "0 results";
                }
                $conn->close();
                ?>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>
