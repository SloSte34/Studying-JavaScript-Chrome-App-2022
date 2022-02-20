const backgroundImages = [
  "wallpaper-1.jpeg",
  "wallpaper-2.jpeg",
  "wallpaper-3.jpeg",
  "wallpaper-4.jpeg",
  "wallpaper-5.jpeg",
  "wallpaper-6.jpeg",
  "wallpaper-7.jpeg",
];

const chosenBackgroundImage =
  backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${chosenBackgroundImage}`;

document.body.appendChild(backgroundImage);
