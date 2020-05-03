//style for input and label
let lbl = document.querySelector('.my-label');
let i1 = document.getElementById('my-input');
let blcKey = document.getElementById('my-keyboard');
let btn = document.querySelectorAll('.btn');
let shiftRight = document.querySelector('.btn-symbol-shift-rigth');


i1.onkeypress = () => {
    lbl.classList.add('active-input');
    i1.style.borderBottomColor = 'rgb(183, 155, 93)';
}

i1.oninput = () => {
    if (i1.value == '') {
        lbl.classList.remove('active-input');
        i1.style.borderBottomColor = 'rgb(73, 74, 82)';
    }
}

i1.onfocus = () => {
    blcKey.style.display = 'flex';
}

i1.onkeydown = () => {
    addClassAction(event);
    eventCTRL(event);
}

i1.onkeyup = () => {
    removeClassAction(event);
}

i1.addEventListener('keyup', function (event) {
    let capsLock = document.querySelector('.btn-Caps-Lock');
    let sp = document.querySelector('.btn-Caps-Lock span');

    if (event.getModifierState("CapsLock")) {
        capsLock.classList.add('button-presed');
        capsLock.classList.add('active-capsLock');

    } else {
        capsLock.classList.remove('button-presed');
        capsLock.classList.remove('active-capsLock');

    }
});

i1.addEventListener('keydown', function (event) {
    let shiftLeft = document.querySelector('.btn-symbol-shift-left');
    let shiftRight = document.querySelector('.btn-symbol-shift-rigth');

    if (event.getModifierState("Shift")) {
        shiftLeft.classList.add('button-presed');
        shiftRight.classList.add('button-presed');

    } else {
        shiftLeft.classList.remove('button-presed');
        shiftRight.classList.remove('button-presed');

    }
});

i1.addEventListener('focusout', function (event) {
    setTimeout(() => {
        let tab = document.querySelector('.btn-symbol-tab');
        tab.classList.remove('button-presed');
    }, 100);

    blcKey.style.display = 'none';
});


function addClassAction(event) {
    console.log(event)
    for (let data of btn) {
        let dKey = data.getAttribute('data-keycode');
        if (event.keyCode == dKey) {
            data.classList.add('button-presed');
        }
    }
}

function removeClassAction() {
    for (let data of btn) {
        let dKey = data.getAttribute('data-keycode');
        data.classList.remove('button-presed');
    }
}

function eventCTRL(event) {
    let ctrl = document.querySelectorAll('.btn-symbol-ctrl');
    if (event.ctrlKey == true) {
        for (let item of ctrl) {
            item.classList.add('button-presed');
        }
    }
}

function eventALT(event) {
    let alt = document.querySelectorAll('.btn-symbol-alt');
    if (event.altKey == true) {
        for (let item of alt) {
            item.classList.add('button-presed');
        }
    }
}

