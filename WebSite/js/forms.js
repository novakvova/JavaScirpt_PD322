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

        if (!form.checkValidity()) {
            event.preventDefault(); //підміна стандатної повіденки
            event.stopPropagation();
        } else {
            event.preventDefault(); ////підміна стандатної повіденки
        }
        form.classList.add('was-validated');

    }, false);
});

