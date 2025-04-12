

document.addEventListener("DOMContentLoaded", function () {
  
  // العناصر المشتركة
  const errorNotification = document.getElementById("errorNotification");
  const closeNotification = document.getElementById("closeNotification");
  const progressBar = document.getElementById("progressBar");
  const errorHeading = document.querySelector(".error-prompt-heading");
  const errorList = document.querySelector(".error-prompt-list");


  
  // إعدادات النماذج
  const formsConfig = {
    login: {
      form: document.getElementById("loginContainer"),
      fields: {
        username: document.getElementById("username"),
        password: document.getElementById("password")
      },
      messages: {
        heading: "الحقول المطلوبة فارغة!",
        errors: [
          "يرجى إدخال اسم المستخدم",
          "يرجى إدخال كلمة المرور"
        ]
      }
    },
    signup: {
      form: document.getElementById("signupContainer"),
      fields: {
        password: document.getElementById("signupPassword")
      },
      messages: {
        heading: "كلمة المرور غير صالحة!",
        errors: [
          "يجب أن تكون 8 أحرف على الأقل",
          "يجب أن تحتوي على رمز خاص",
          "يجب أن تحتوي على رقم"
        ]
      }
    }
  };

  let timeoutId;



  // دوال مساعدة
  function showNotification(heading, errors) {
    const progressBar = document.getElementById("progressBar");
    // إعادة تعيين الشريط
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';


    void progressBar.offsetWidth;

    

    // تحديث المحتوى
    errorHeading.textContent = heading;
    errorList.innerHTML = errors.map(msg => `<li>${msg}</li>`).join('');
    


    // عرض التنبيه
    errorNotification.classList.remove("hidden");
    

    // بدء التحريك بعد تأخير بسيط
    setTimeout(() => {
      progressBar.style.transition = 'width 15s linear';
      progressBar.style.width = '100%';
    }, 10);


    // إدارة المهلة
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(hideNotification, 15000);
  }

  function hideNotification() {
    errorNotification.classList.add("hidden");
    progressBar.style.width = '0%';
    if (timeoutId) clearTimeout(timeoutId);
  }

  function markInvalid(field) {
    field.style.border = "2px solid #ff4444";
    field.classList.add("invalid");
  }

  function resetFieldStyles(field) {
    field.style.border = "";
    field.classList.remove("invalid");
  }




  // أحداث نموذج تسجيل الدخول
formsConfig.login.form.addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target; // الحصول على النموذج من الحدث
  
  let errors = [];
  if (!form.username.value.trim()) {
    errors.push("يرجى إدخال اسم المستخدم");
    markInvalid(form.username);
  }
  if (!form.password.value.trim()) {
    errors.push("يرجى إدخال كلمة المرور");
    markInvalid(form.password);
  }

  if (errors.length > 0) {
    showNotification("الحقول المطلوبة فارغة!", errors);
  } else {
    form.submit(); 
  }
});


  
  // أحداث نموذج إنشاء الحساب
  formsConfig.signup.form.addEventListener("submit", function(e) {
    e.preventDefault();
    const password = formsConfig.signup.fields.password.value;
    let errors = [];
    


    // التحقق من كلمة المرور
    if (password.length < 8) {
      errors.push(formsConfig.signup.messages.errors[0]);
    }
    
    if (!/[!@#$%^&*<>=+""'':;/,.{}]/.test(password)) {
      errors.push(formsConfig.signup.messages.errors[1]);
    }
    
    if (!/\d/.test(password)) {
      errors.push(formsConfig.signup.messages.errors[2]);
    }
    


    // إدارة الأنماط
    if (errors.length > 0) {
      markInvalid(formsConfig.signup.fields.password);
      showNotification(formsConfig.signup.messages.heading, errors);
    } else {
      resetFieldStyles(formsConfig.signup.fields.password);
      form.submit();
    }
  });



  // أحداث مشتركة
  closeNotification.addEventListener("click", hideNotification);



  // إعادة تعيين الحقول عند التركيز
  document.querySelectorAll("input").forEach(input => {
    input.addEventListener("focus", () => {
      resetFieldStyles(input);
    });
  });
});








