let phoneHideWrap = document.getElementById('phone-hide-wrap');
let phoneWrap = document.getElementById('phone-wrap');
let phoneContentWrap = document.getElementById('phone-content-wrap');
let hidePhoneButton = document.getElementById('hide-phone');
let muteButton = document.getElementById('mute-button');
let ringtone = document.getElementById('ringtone');

let documentInteraction = false;
let phoneUp = false;
let phoneRinging = false;

let shouldPhoneRingTimeout = null;

let phoneConfig = {
    show: '30px',
    hide: '-900px',
    timeout_min: 5000,
    timeout_max: 10000
};

let contentPosition = 0;

let contentArray = [
    {
        id: 'banano',
        src: 'banano.jpg',
        type: 'img',
        class_name: 'phone-content-img'
    },
    {
        id: 'pump',
        src: 'pump.jpg',
        type: 'img',
        class_name: 'phone-content-img'
    },
    {
        id: 'charlie',
        src: 'charlie.gif',
        type: 'img',
        class_name: 'phone-content-img'
    },
    {
        id: 'diamond',
        src: 'diamond.gif',
        type: 'img',
        class_name: 'phone-content-img'
    },
    {
        id: 'dog_vom',
        src: 'dog_vom.mp4',
        type: 'video',
        class_name: 'phone-content-vid'
    },
    {
        id: 'gun',
        src: 'gun.gif',
        type: 'img',
        class_name: 'phone-content-img'
    },
    {
        id: 'paris_die',
        src: 'paris_die.jpg',
        type: 'img',
        class_name: 'phone-content-img'
    },
    {
        id: 'drone_gun',
        src: 'drone_gun.mp4',
        type: 'video',
        class_name: 'phone-content-vid'
    },
    {
        id: 'paris_wax',
        src: 'paris_wax.gif',
        type: 'img',
        class_name: 'phone-content-img'
    },
    {
        id: 'opinion',
        src: 'opinion.mp4',
        type: 'video',
        class_name: 'phone-content-vid'
    },
    {
        id: 'rizo',
        src: 'rizo.jpg',
        type: 'img',
        class_name: 'phone-content-img'
    },
    {
        id: 'puke',
        src: 'puke.gif',
        type: 'img',
        class_name: 'phone-content-img'
    },
    {
        id: 'tobi',
        src: 'tobi.MOV',
        type: 'video',
        class_name: 'phone-content-vid'
    },
    {
        id: 'milk',
        src: 'milk.gif',
        type: 'img',
        class_name: 'phone-content-img'
    }
];

function rando(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function showPhone() {
    phoneWrap.classList.add('ringing');
    muteButton.style.opacity = 1;
    phoneRinging = true;
    ringtone.play();
    cycleContent();
    setTimeout(() => {
        phoneHideWrap.style.right = phoneConfig.show;
        phoneUp = true;
        if (contentArray[contentPosition].type === 'video') {
            document.getElementById('content-node').muted = false;
            document.getElementById('content-node').play();
        };
    }, 2500);
    setTimeout(() => {
        hidePhoneButton.style.opacity = 1;
        hidePhoneButton.style.pointerEvents = 'all';
    }, 5000);
};

function hidePhone() {
    phoneHideWrap.style.right = phoneConfig.hide;
    phoneUp = false;
    muteRingtone();
    hidePhoneButton.style.opacity = 0;
    hidePhoneButton.style.pointerEvents = 'none';
    setTimeout(() => {
        if (contentArray[contentPosition].type === 'video') {
            document.getElementById('content-node').muted = true;
        };
    }, 1000);
    setTimeout(() => {
        shouldPhoneRingTimeout = returnPhoneInterval();
        contentPosition++;
        contentPosition = contentPosition === contentArray.length ? 0 : contentPosition;
    }, 2000);
};

function muteRingtone() {
    phoneWrap.classList.remove('ringing');
    phoneRinging = false;
    ringtone.pause();
    ringtone.currentTime = 0;
    muteButton.style.opacity = 0;
};

function returnPhoneInterval() {
    return setInterval(() => {
        if (!phoneUp) {
            showPhone();
            window.clearInterval(shouldPhoneRingTimeout);
        };
    }, rando(phoneConfig.timeout_min, phoneConfig.timeout_max));
};

function cycleContent() {
    let contentToRemove = document.getElementById('content-node');
    contentToRemove.parentNode.removeChild(contentToRemove);
    let content = document.createElement(contentArray[contentPosition].type);
    content.setAttribute('id', 'content-node');
    content.classList.add(contentArray[contentPosition].class_name);
    content.setAttribute('src', './assets/content/' + contentArray[contentPosition].src);
    if (contentArray[contentPosition].type === 'video') {
        content.muted = true;
        content.setAttribute('autoplay', true);
        content.setAttribute('loop', true);
    };
    phoneContentWrap.appendChild(content);
};

document.addEventListener('click', e => {
    if (!documentInteraction) {
        shouldPhoneRingTimeout = returnPhoneInterval();
        documentInteraction = true;
    };
});

muteButton.addEventListener('click', e => {
    if (phoneRinging) {
        muteRingtone();
    };
});

hidePhoneButton.addEventListener('click', hidePhone);
