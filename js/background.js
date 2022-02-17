const backgroundImages = [
  "wallpaper-1.jpeg",
  "wallpaper-2.jpeg",
  "wallpaper-3.jpeg",
  "wallpaper-4.jpeg",
  "wallpaper-5.jpeg",
];

const chosenBackgroundImage =
  backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

console.log(chosenBackgroundImage);

const backgroundImage = document.createElement("img");

backgroundImage.src = `/img/${chosenBackgroundImage}`;

document.body.appendChild(backgroundImage);
