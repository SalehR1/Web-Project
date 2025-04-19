<?php
//go to line 29 to 32
?>

<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>إعادة تعيين كلمة المرور</title>
  <link rel="stylesheet" href="login.css"/>
</head>
<body>

  <div class="modal-overlay" style="display: block;"></div>
  <div class="modal-content" style="display: block;">
    <button class="butto" onclick="window.location.href='./login.php'"><span class="X">&times;</span></button>

    <div class="container active">
      <form class="login-form">
        <div class="images-container">
          <img src="DF.png" alt="Logo">
          <div class="separator"></div>
          <img src="logo-taibah.png" alt="Logo">
        </div>

        <h2>إعادة تعيين كلمة المرور</h2>
        <h4>سيتم إرسال رمز تأكيد مكون من 4 أرقام إلى رقم الجوال المدخل</h4>
        <input type="text" name="phonenumber"  placeholder="📞 أدخل رقم الجوال" required>
        <input type="text" name="StdId"  placeholder="ادخل رقمك الجامعي" required>
        <input type="password" name="password"  placeholder="🔒 أدخل كلمة المرور الجديدة" required>
        <input type="password" name="Re-password"  placeholder="🔒 إعادة إدخال كلمة المرور" required>

        <button class="btn-login" type="submit">إرسال</button>

        <div class="links">
          <a href="login.php">عودة لتسجيل الدخول</a>
        </div>
      </form>
    </div>
  </div>

</body>

<script>

    document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('forgotForm');
  const errorNotification = document.getElementById('errorNotification');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = form.querySelector('#email').value.trim();

    if (!email) {
      errorNotification.classList.remove('hidden');
      errorNotification.textContent = 'يرجى إدخال البريد الإلكتروني.';
    } else {
      console.log('Password reset requested for:', email);
      // Send reset request here
    }
  });
});

    </script>
</html>
