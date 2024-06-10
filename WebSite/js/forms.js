const messageDialog = new bootstrap.Modal('#messageDialog');
const messageDialogText = document.getElementById("messageDialogText");
const image = document.getElementById('image');
const imagePreview = document.getElementById('imagePreview');

image.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) { //перевірка - чи не undifined або ""
        if (file.type.startsWith('image/')) {
            // console.log(`Selected file: `, URL.createObjectURL(file));
            imagePreview.src=URL.createObjectURL(file);
        }
        else {
            messageDialogText.innerHTML="Оберіть фото. Ви хочете нас обманути :(.";
            // console.log("Оберіть фото");
            image.value="";
            messageDialog.show();
        }
    } else {
        console.log('No file selected');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    //console.log("Load DOM");
    var phoneInput = document.getElementById('phone');
    var maskOptions = {
        mask: '+00(000) 00-00-000'
    };
    var mask = IMask(phoneInput, maskOptions);
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Begin load app");
    const form = document.getElementById('needs-validation');
    form.addEventListener('submit', event => {

        event.preventDefault(); //підміна стандатної повіденки
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            const email = document.getElementById("email").value;
            const lastName = document.getElementById("lastName").value;
            const name = document.getElementById("name").value;
            const exampleInputPassword1 = document.getElementById("exampleInputPassword1").value;
            const phone = document.getElementById('phone').value;
            const image = document.getElementById('image');


            if (image.files && image.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imageDataUrl = e.target.result;
                    let user = {
                        email,
                        lastName,
                        name,
                        password: exampleInputPassword1,
                        phone,
                        image: imageDataUrl
                    };

                    // let users = JSON.parse(localStorage.getItem("users")) || [];
                    let users = JSON.parse(localStorage.users) || [];
                    users.push(user);
                    localStorage.users = JSON.stringify(users);
                    window.location.href="/";

                    //alert("Registration successful!");
                }
                reader.readAsDataURL(image.files[0]);
            } else {
                alert("Please select a profile picture.");
            }
        }
        form.classList.add('was-validated');

    }, false);
});

