<?php

session_start();

include("connection.php");
include("functions.php");


if($_SERVER['REQUEST_METHOD'] == "POST") {

$username = $_POST['StdId'];
$password = $_POST['Password'];

if(!empty($username) && !empty($password)) {

  $query = "select * from student where StdId = '$username' limit 1";

  $result = mysqli_query($con,$query);

  if($result) {

    if($result && mysqli_num_rows ($result) > 0) {

        $user_data = mysqli_fetch_assoc($result);
        
        if($user_data['Password'] === $password) {
            
            $_SESSION['Id'] = $user_data['Id'];
            header("Location:index.php");
            die;

        }
        
    }
    
  }
  echo "Wrong Username or Password";

} else {
  echo "Please Enter Valid Info";
}
}

?>


<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>تسجيل الدخول</title>
  <link rel="stylesheet" href="login.css"/>
</head>
<body>

   <!-- زر فتح النافذة -->
   <button id="openModalBtn" class="Btn">
    <div class="sign">
      <svg viewBox="0 0 512 512">
        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 
        27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 
        9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 
        0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 
        0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 
        96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 
        32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 
        0 32 14.3 32 32s-14.3 32-32 32z"></path>
      </svg>
    </div>
    <div class="text">Log in</div>
  </button>

  <!-- نافذة تسجيل الدخول -->
  <div id="modalOverlay" class="modal-overlay"></div>
  <div id="loginModal" class="modal-content">
    <button class="butto" id="closeModalBtn"><span class="X">&times;</span></button>

    <div class="container active">
      <form class="login-form" id="loginForm" method="post">
        <div class="images-container">
          <img src="HG.gif" alt="Logo">
          <div class="separator"></div>
          <img src="logo-taibah.png" alt="Logo">
        </div>

        <h2>تسجيل الدخول</h2>
        <h3 class="h3">مرحبًا بعودتك!</h3>

        <input type="text" id="username" name="username" placeholder="اسم المستخدم" autofocus>
        <input type="password" id="password" name="Password" placeholder="كلمة المرور">
        <button class="btn-login" type="submit">تسجيل الدخول</button>
        <br><br>

        <!-- Display errors dynamically -->
        <?php if (!empty($error)): ?>
            <div class="php-error" style="color: red; text-align: center; font-weight: bold;">
                <?= $error ?>
            </div>
        <?php endif; ?>

        <div class="links">
          <a href="forgotPass.php">نسيت كلمة المرور؟</a> |
          <a href="signup.php">إنشاء حساب</a>
        </div>
      </form>
    </div>
  </div>
</body>





<script>
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const errorNotification = document.getElementById('errorNotification');
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalOverlay = document.getElementById('modalOverlay');
  const loginModal = document.getElementById('loginModal');

  // ✅ Function to open the modal
  function openModal() {
    modalOverlay.style.display = 'block';
    loginModal.style.display = 'block';
  }

  // ✅ Function to close the modal
  function closeModal() {
    modalOverlay.style.display = 'none';
    loginModal.style.display = 'none';
  }

  // ✅ Automatically open modal on page load
  openModal();

  // ✅ Open modal on button click
  openModalBtn.addEventListener('click', openModal);

  // ✅ Close modal on close button click
  closeModalBtn.addEventListener('click', closeModal);

  // ✅ Close modal if user clicks outside the modal
  modalOverlay.addEventListener('click', closeModal);

  // ✅ Handle login form submission
  form.addEventListener('submit', function (e) {
    

    const username = form.querySelector('#username').value.trim();
    const password = form.querySelector('#password').value.trim();

    if (!username || !password) {
      errorNotification.classList.remove('hidden');
      errorNotification.textContent = 'يرجى إدخال اسم المستخدم وكلمة المرور.';
    } else {
      console.log('Login submitted:', { username });
      // You can redirect or submit the form here
    }
  });
});
</script>

</html>


