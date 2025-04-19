document.addEventListener("DOMContentLoaded", function () {
    const defaultPfp = "./Images/taibah_logo.png";

    document.querySelector(".profile-picture-container").addEventListener("click", function () {
        document.getElementById("profileInput").click();
    });

    document.getElementById("profileInput").addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("profilePicture").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById("deletePfp").addEventListener("click", function () {
        document.getElementById("profilePicture").src = defaultPfp;
    });
});

let today = new Date();
let minAge = 18;
let maxDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());

document.getElementById('dob').setAttribute('max', maxDate.toISOString().split('T')[0]);

function goBack() {
    window.history.back();
}

function logoutUser() {
    if (confirm("Are you sure you want to log out?")) {
        window.location.href = "logout.php";
    }
}
