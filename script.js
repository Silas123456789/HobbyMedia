function openPopup() {
    document.getElementById('standortPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('standortPopup').style.display = 'none';
}

window.openPopup = openPopup;
window.closePopup = closePopup;


document.addEventListener('click', function (event) {
    var popup = document.getElementById('standortPopup');
    if (event.target === popup) {
        closePopup();
    }
});


var popupImage = document.getElementById('popupImage');
if (popupImage) {
    popupImage.addEventListener('click', function () {
        closePopup();
    });
}

function showAlert() {
    alert("Die Registrierung ist für Dich nicht freigeschalten.")
}

function showAlert2() {
    alert("Nur von verifizierten Geräten möglich")
}

function openPopup2() {
    document.getElementById('infosPopup').style.display = 'block';
}

function closePopup2() {
    document.getElementById('infosPopup').style.display = 'none';
}

function openPopup3() {
    document.getElementById('standortPopup2').style.display = 'block';
}

function closePopup3() {
    document.getElementById('standortPopup2').style.display = 'none';
}


document.addEventListener('click', function (event) {
    var popup = document.getElementById('standortPopup2');
    if (event.target === popup) {
        closePopup3();
    }
});


var popupImage = document.getElementById('popupImage');
if (popupImage) {
    popupImage.addEventListener('click', function () {
        closePopup3();
    });
}

function openPopup4() {
    document.getElementById('standortPopup3').style.display = 'block';
}

function closePopup4() {
    document.getElementById('standortPopup3').style.display = 'none';
}


document.addEventListener('click', function (event) {
    var popup = document.getElementById('standortPopup3');
    if (event.target === popup) {
        closePopup4();
    }
});


var popupImage = document.getElementById('popupImage');
if (popupImage) {
    popupImage.addEventListener('click', function () {
        closePopup4();
    });
}