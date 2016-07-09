var images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg', 'bg7.jpg'];
$('#header').css({'background-image': 'url(../img/' + images[Math.floor(Math.random() * images.length)] + ')'});
console.log("Attached script.js");

//'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), '