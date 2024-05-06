var desktopBackgroundImages = [ 
    'https://c.wallhere.com/photos/0c/25/1920x1080_px_Adventure_Time-535174.jpg!d',
    'https://images.alphacoders.com/829/829612.jpg',
    'https://c.wallhere.com/photos/bb/b2/cartoon_The_Simpsons-1444039.jpg!d',
    'https://images5.alphacoders.com/840/840878.jpg',
    'https://images7.alphacoders.com/133/thumb-1920-1334906.jpeg'
];

var mobileBackgroundImages = [
    'https://i.pinimg.com/originals/76/dc/06/76dc060c910071887ae37f1beba3c594.jpg',
    'https://wallpapersmug.com/download/1080x1920/3a8464/rick-and-morty-season-4-2019.jpg',
    'https://i.pinimg.com/1200x/c6/3a/5f/c63a5fef3df5ecb22b6ddea21e8f2a35.jpg',
    'https://mfiles.alphacoders.com/602/602504.jpg',
    'https://wallpaper.forfun.com/fetch/90/90cfe0da6206a9a125a75d1f33af1aa9.jpeg?h=900&r=0.5'
];

function changeBackground() {
    var currentImageIndex = 0;

    function setBackground(images) {
        document.body.style.transition = 'background-image 1s ease-in-out';
        document.body.style.backgroundImage = 'url(' + images[currentImageIndex] + ')';
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    if (!isMobile()) {
        setBackground(desktopBackgroundImages);
    } else {
        setBackground(mobileBackgroundImages);
    }

    setInterval(function() {
        if (!isMobile()) {
            setBackground(desktopBackgroundImages);
        } else {
            setBackground(mobileBackgroundImages);
        }
    }, 5000);
}

function isMobile() {
    return window.innerWidth <= 600; // Ajusta este valor según tus necesidades
}

changeBackground();
