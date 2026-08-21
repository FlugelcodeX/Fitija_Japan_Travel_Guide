/* =========================================
   FITIJA
   FIRST TIME JAPAN
========================================= */

/* =========================================
   JAPAN PHOTO ALBUM
========================================= */

const japanPhotoAlbum = [
  {
    image:
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mt. Fuji",
  },

  {
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "TMt. Fuji Fall",
  },

  {
    image:
      "https://plus.unsplash.com/premium_photo-1690749740487-01bbb8e51e71?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mt. Fuji Sakura",
  },

  {
    image:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mt. Fuji Winter",
  },

  {
    image:
      "https://images.unsplash.com/photo-1542931287-023b922fa89b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Your Name",
  },

  {
    image:
      "https://images.unsplash.com/photo-1519056894482-50b7093ce330?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Akihabara",
  },

  {
    image:
      "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Tsushima",
  },

  {
    image:
      "https://images.unsplash.com/photo-1618897037073-5edb010d92f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Fukuoka",
  },

  {
    image:
      "https://images.unsplash.com/photo-1724593911127-54c2e80258a7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "USJ",
  },

  {
    image:
      "https://images.unsplash.com/photo-1725162949746-99574c13007c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mt. Fuji close",
  },
];

let currentPhotoIndex = 0;
/* =========================================
   SAKURA PETALS — HOME / SHOWCASE ONLY
========================================= */

function initializeSakuraPetals() {
  const showcase = document.querySelector(".japan-showcase");

  if (!showcase) return;

  /*
    Prevent duplicate initialization.
  */
  if (document.getElementById("sakuraPetals")) {
    return;
  }

  /*
    Create the petal container.
  */
  const container = document.createElement("div");

  container.id = "sakuraPetals";
  container.setAttribute("aria-hidden", "true");

  showcase.appendChild(container);

  /*
    Sakura petal styles.
  */
  const style = document.createElement("style");

  style.id = "fitiijaSakuraPetalStyles";

  style.textContent = `
    /*
      =========================================
      SAKURA PETALS
      ONLY VISIBLE INSIDE THE SHOWCASE / HOME
      =========================================
    */

    #sakuraPetals {
      position: absolute;
      inset: 0;

      width: 100%;
      height: 100%;

      overflow: hidden;

      pointer-events: none;

      z-index: 1;
    }

    .sakura-petal {
      position: absolute;

      top: -40px;

      width: 10px;
      height: 7px;

      background: #f7b7c8;

      border-radius:
        100% 0 100% 0;

      opacity: 0.75;

      transform: rotate(25deg);

      filter: blur(0.15px);

      animation:
        sakuraFall linear infinite,
        sakuraSway ease-in-out infinite;
    }

    /*
      Main falling animation.
    */
    @keyframes sakuraFall {
      0% {
        top: -40px;
      }

      100% {
        top: 105%;
      }
    }

    /*
      Gentle horizontal movement.
    */
    @keyframes sakuraSway {
      0% {
        margin-left: 0;
      }

      25% {
        margin-left: 35px;
      }

      50% {
        margin-left: -25px;
      }

      75% {
        margin-left: 30px;
      }

      100% {
        margin-left: -10px;
      }
    }

    /*
      Different petal shapes.
    */
    .sakura-petal:nth-child(3n) {
      width: 8px;
      height: 6px;

      opacity: 0.6;

      background: #f3a9bd;
    }

    .sakura-petal:nth-child(4n) {
      width: 12px;
      height: 8px;

      opacity: 0.8;

      background: #f9c5d3;
    }

    .sakura-petal:nth-child(5n) {
      width: 7px;
      height: 5px;

      opacity: 0.5;

      background: #f5a8bd;
    }

    /*
      Smaller petals on mobile.
    */
    @media (max-width: 768px) {
      .sakura-petal {
        width: 7px;
        height: 5px;

        opacity: 0.65;
      }

      .sakura-petal:nth-child(4n) {
        width: 9px;
        height: 6px;
      }
    }

    /*
      Respect reduced-motion accessibility.
    */
    @media (prefers-reduced-motion: reduce) {
      .sakura-petal {
        animation: none;
        opacity: 0;
      }
    }
  `;

  document.head.appendChild(style);

  /*
    Number of petals.
    Change this number if you want more/fewer.
  */
  const petalCount = 28;

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("span");

    petal.className = "sakura-petal";

    /*
      Random horizontal position.
    */
    petal.style.left = `${Math.random() * 100}%`;

    /*
      Random falling duration.
      Lower = faster.
    */
    const fallDuration = 8 + Math.random() * 9;

    /*
      Random sway duration.
    */
    const swayDuration = 2.5 + Math.random() * 3;

    /*
      Random delay so they don't all
      start falling together.
    */
    const delay = -Math.random() * 12;

    petal.style.animationDuration = `${fallDuration}s, ${swayDuration}s`;

    petal.style.animationDelay = `${delay}s, ${delay / 2}s`;

    /*
      Slight random rotation.
    */
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;

    container.appendChild(petal);
  }
}

/* =========================================
   START SAKURA PETALS
========================================= */

document.addEventListener("DOMContentLoaded", function () {
  initializeSakuraPetals();
});
/* =========================================
   PHOTO ALBUM INITIALIZATION
========================================= */

function initializePhotoAlbum() {
  const albumPhoto = document.querySelector(".hero-frame img");

  if (!albumPhoto) return;

  /*
    Prevent duplicate initialization.
  */
  if (albumPhoto.dataset.albumInitialized === "true") {
    return;
  }

  albumPhoto.dataset.albumInitialized = "true";

  /*
    Make the first image the requested background image.
  */
  albumPhoto.src = japanPhotoAlbum[0].image;
  albumPhoto.alt = japanPhotoAlbum[0].alt;

  /*
    Make the image clickable.
  */
  albumPhoto.style.cursor = "pointer";

  /*
    Accessibility.
  */
  albumPhoto.setAttribute("role", "button");
  albumPhoto.setAttribute("aria-label", "Click to view the next Japan photo");
  albumPhoto.setAttribute("tabindex", "0");

  /*
    Add album transition.
  */
  albumPhoto.style.transition = "opacity 0.35s ease, transform 0.45s ease";

  /*
    Click = next image.
  */
  albumPhoto.addEventListener("click", nextAlbumPhoto);

  /*
    Keyboard support.
  */
  albumPhoto.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      nextAlbumPhoto();
    }
  });

  /*
    Add album indicator.
  */
  createPhotoCounter();

  /*
    Set the showcase background.
  */
  initializeShowcaseBackground();
}

/* =========================================
   NEXT ALBUM PHOTO
========================================= */

function nextAlbumPhoto() {
  const albumPhoto = document.querySelector(".hero-frame img");

  if (!albumPhoto) return;

  /*
    Fade image out.
  */
  albumPhoto.style.opacity = "0";
  albumPhoto.style.transform = "scale(1.025)";

  setTimeout(() => {
    /*
      Move to next image.
    */
    currentPhotoIndex++;

    /*
      Loop back after the 10th photo.
    */
    if (currentPhotoIndex >= japanPhotoAlbum.length) {
      currentPhotoIndex = 0;
    }

    /*
      Change image.
    */
    albumPhoto.src = japanPhotoAlbum[currentPhotoIndex].image;
    albumPhoto.alt = japanPhotoAlbum[currentPhotoIndex].alt;

    /*
      Update indicator.
    */
    updatePhotoCounter();

    /*
      Bring image back.
    */
    requestAnimationFrame(() => {
      albumPhoto.style.opacity = "1";
      albumPhoto.style.transform = "scale(1)";
    });
  }, 180);
}

/* =========================================
   PHOTO COUNTER
========================================= */

function createPhotoCounter() {
  const albumFrame = document.querySelector(".hero-frame");

  if (!albumFrame) return;

  /*
    Don't create it twice.
  */
  if (document.getElementById("photoCounter")) {
    return;
  }

  const indicator = document.createElement("div");

  indicator.id = "photoCounter";

  indicator.innerHTML = `
    <span class="photo-counter-current">01</span>
    <span class="photo-counter-divider">/</span>
    <span class="photo-counter-total">10</span>
  `;

  albumFrame.appendChild(indicator);

  /*
    Inject only the styles needed for the album.
  */
  const style = document.createElement("style");

  style.id = "fitijaPhotoAlbumStyles";

  style.textContent = `
    #photoCounter {
      position: absolute;
      right: 22px;
      bottom: 20px;
      z-index: 20;

      display: flex;
      align-items: center;
      gap: 7px;

      padding: 9px 13px;

      background: rgba(255, 255, 255, 0.88);
      backdrop-filter: blur(8px);

      border: 1px solid rgba(181, 18, 27, 0.15);
      border-radius: 999px;

      color: #b5121b;

      font-size: 11px;
      font-weight: 900;
      letter-spacing: 2px;

      pointer-events: none;

      box-shadow:
        0 8px 25px rgba(181, 18, 27, 0.12);
    }

    #photoCounter .photo-counter-current {
      font-size: 13px;
    }

    #photoCounter .photo-counter-divider {
      opacity: 0.45;
    }

    #photoCounter .photo-counter-total {
      opacity: 0.55;
    }

    .hero-frame img {
      transition:
        opacity 0.35s ease,
        transform 0.45s ease !important;
    }

    .hero-frame img:hover {
      transform: scale(1.015);
    }

    @media (max-width: 768px) {
      #photoCounter {
        right: 12px;
        bottom: 12px;
        padding: 7px 10px;
        font-size: 9px;
      }

      #photoCounter .photo-counter-current {
        font-size: 11px;
      }
    }
  `;

  document.head.appendChild(style);
}

/* =========================================
   UPDATE PHOTO COUNTER
========================================= */

function updatePhotoCounter() {
  const current = document.querySelector(
    "#photoCounter .photo-counter-current",
  );

  if (!current) return;

  current.textContent = String(currentPhotoIndex + 1).padStart(2, "0");
}

/* =========================================
   SHOWCASE BACKGROUND
========================================= */

function initializeShowcaseBackground() {
  const albumContainer = document.querySelector(".photo-album-container");

  if (!albumContainer) return;

  /*
    The image requested by the user.
  */
  const showcaseBackgroundImage =
    "https://images.unsplash.com/photo-1574236170878-f66e35f83207?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  /*
    Find the actual showcase section.
  */
  const showcaseWrapper =
    albumContainer.closest(".japan-showcase") ||
    albumContainer.closest("section") ||
    albumContainer.parentElement;

  if (!showcaseWrapper) return;

  /*
    Prevent duplicate styles.
  */
  if (document.getElementById("fitijaShowcaseBackgroundStyles")) {
    return;
  }

  const style = document.createElement("style");

  style.id = "fitijaShowcaseBackgroundStyles";

  style.textContent = `
    /*
      FITIJA SHOWCASE BACKGROUND
    */

    .japan-showcase {
      position: relative;
      overflow: hidden;

      background:
        linear-gradient(
          180deg,
          rgba(255, 250, 244, 0.08) 0%,
          rgba(255, 250, 244, 0.18) 20%,
          rgba(255, 250, 244, 0.58) 58%,
          #fffaf4 100%
        ),
        url("${showcaseBackgroundImage}");

      background-size: cover;
      background-position: center top;
      background-repeat: no-repeat;

      isolation: isolate;
    }

    /*
      Soft overlay to keep text readable.
    */
    .japan-showcase::before {
      content: "";

      position: absolute;
      inset: 0;

      background:
        linear-gradient(
          90deg,
          rgba(255, 250, 244, 0.98) 0%,
          rgba(255, 250, 244, 0.86) 27%,
          rgba(255, 250, 244, 0.48) 55%,
          rgba(255, 250, 244, 0.12) 100%
        );

      pointer-events: none;
      z-index: -1;
    }

    /*
      Stronger fade toward the bottom.
      This makes the image naturally disappear
      into the existing FITIJA background.
    */
    .japan-showcase::after {
      content: "";

      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;

      height: 42%;

      background:
        linear-gradient(
          to bottom,
          rgba(255, 250, 244, 0) 0%,
          rgba(255, 250, 244, 0.38) 38%,
          #fffaf4 100%
        );

      pointer-events: none;
      z-index: -1;
    }

    /*
      Keep showcase content above the background.
    */
    .japan-showcase > * {
      position: relative;
      z-index: 2;
    }

    /*
      The showcase image remains a separate album
      above the background.
    */
    .photo-album-container {
      position: relative;
      z-index: 3;
    }

    /*
      Prevent the album image from disappearing
      behind the background.
    */
    .hero-frame {
      position: relative;
      z-index: 4;
    }

    @media (max-width: 768px) {
      .japan-showcase {
        background-position: center top;
      }

      .japan-showcase::before {
        background:
          linear-gradient(
            180deg,
            rgba(255, 250, 244, 0.72) 0%,
            rgba(255, 250, 244, 0.82) 55%,
            rgba(255, 250, 244, 0.96) 100%
          );
      }
    }
  `;

  document.head.appendChild(style);
}

/* =========================================
   INITIALIZE SHOWCASE
========================================= */

document.addEventListener("DOMContentLoaded", function () {
  initializePhotoAlbum();
});

/* =========================================
   CITY DATABASE
========================================= */

const cities = {
  tokyo: {
    name: "TOKYO",
    japanese: "東京",

    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1400&q=90",

    tagline: "The city where ancient Japan and the future somehow coexist.",

    description:
      "Tokyo is probably the easiest place to start your first Japan adventure. It is enormous, incredibly connected, and packed with everything from historic temples and quiet neighborhoods to anime stores, arcades, luxury shopping, themed cafés, nightlife, and some of the best food in the country. The trick is not trying to see everything in one day.",

    foods: [
      {
        name: "Sushi",

        image:
          "https://images.unsplash.com/photo-1563612116625-3012372fccce?q=80&w=741&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "Tokyo is one of the best places to experience sushi because you can find everything from inexpensive conveyor-belt sushi to highly specialized sushi counters. First-timers don't need to start with the expensive places. A casual sushi restaurant is perfectly fine and often much easier to enjoy.",

        price: "¥1,000–¥3,000 per person",

        php: "≈ ₱380–₱1,150",
      },

      {
        name: "Ramen",

        image:
          "https://images.unsplash.com/photo-1638866281450-3933540af86a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "Ramen is one of the easiest meals for travelers because it is filling, relatively inexpensive, and available almost everywhere. Try different styles such as shoyu, miso, shio, or tonkotsu depending on the shop.",

        price: "¥800–¥1,500 per bowl",

        php: "≈ ₱300–₱570",
      },
    ],

    places: [
      {
        name: "Shibuya Crossing",

        image:
          "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=900&q=85",

        description:
          "One of Tokyo's most recognizable locations. The famous crossing is surrounded by shopping centers, cafés, restaurants, arcades, and nightlife. Go around sunset and stay into the evening to experience the area when the neon lights come alive.",

        price: "Free",

        php: "₱0",
      },

      {
        name: "Senso-ji Temple",

        image:
          "https://images.unsplash.com/photo-1713346643669-ab7793501846?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "Located in Asakusa, Senso-ji is one of Tokyo's most famous temples. Walk through Kaminarimon Gate, explore Nakamise shopping street, and take your time around the temple grounds.",

        price: "Temple grounds: Free",

        php: "₱0",
      },
    ],

    activities: [
      {
        name: "Akihabara Anime Hunt",

        image:
          "https://images.unsplash.com/photo-1676902944837-37695b5378c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "If you're an anime or gaming fan, Akihabara deserves at least half a day. Explore arcades, figure shops, electronics stores, manga shops, and themed cafés. Set a shopping budget before entering because your wallet may mysteriously disappear.",

        price: "¥500+ depending on activity",

        php: "≈ ₱190+",
      },
    ],

    tips: [
      {
        name: "Don't Treat Tokyo as One Neighborhood",

        image:
          "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=836&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "Tokyo is huge. Instead of jumping randomly between places, group attractions by area. For example, explore Shibuya, Harajuku, and Shinjuku together rather than spending half the day traveling between opposite sides of the city.",

        price: "Planning tip",

        php: "Saves both time and transportation costs.",
      },
    ],
  },

  kyoto: {
    name: "KYOTO",
    japanese: "京都",

    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=90",

    tagline: "For when you want to experience the Japan from the postcards.",

    description:
      "Kyoto is the place to slow down. Formerly Japan's imperial capital, the city is famous for temples, shrines, traditional architecture, gardens, tea culture, and historic districts. Kyoto can become extremely busy around popular attractions, so waking up early is one of the best travel hacks you can learn.",

    foods: [
      {
        name: "Matcha",

        image:
          "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=900&q=85",

        description:
          "Kyoto is strongly associated with Japanese tea culture, especially matcha. You can find matcha desserts, tea ceremonies, drinks, soft serve, and traditional sweets throughout the city.",

        price: "¥500–¥1,500",

        php: "≈ ₱190–₱570",
      },

      {
        name: "Kaiseki",

        image:
          "https://images.unsplash.com/photo-1766582931800-fd79665257fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "Kaiseki is a traditional multi-course Japanese dining experience focused on seasonal ingredients, presentation, and balance. It can be expensive, but it offers a very different experience from ordinary Japanese meals.",

        price: "¥5,000–¥20,000+",

        php: "≈ ₱1,900–₱7,600+",
      },
    ],

    places: [
      {
        name: "Fushimi Inari Shrine/Taisha",

        image:
          "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=900&q=85",

        description:
          "Famous for its thousands of vermilion torii gates climbing Mount Inari. The lower section gets crowded, but walking farther up the mountain can become much quieter.",

        price: "Free",

        php: "₱0",
      },

      {
        name: "Arashiyama Bamboo Grove",

        image:
          "https://images.unsplash.com/photo-1702564492961-3643703480c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "One of Kyoto's most recognizable landscapes. The bamboo grove itself is relatively small, so combine it with nearby temples, gardens, and the surrounding Arashiyama area.",

        price: "Bamboo Grove: Free",

        php: "₱0",
      },
    ],

    activities: [
      {
        name: "Traditional Tea Experience",

        image:
          "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "Participating in a tea experience gives first-time visitors a chance to understand the cultural importance of matcha preparation, hospitality, and traditional Japanese aesthetics.",

        price: "¥2,000–¥5,000",

        php: "≈ ₱760–₱1,900",
      },
    ],

    tips: [
      {
        name: "Start Early",

        image:
          "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "Kyoto's most famous attractions can become extremely crowded later in the morning. Starting early gives you a better chance of enjoying the atmosphere and taking photos without enormous crowds.",

        price: "Free travel strategy",

        php: "Your alarm clock is the real admission fee.",
      },
    ],
  },

  osaka: {
    name: "OSAKA",
    japanese: "大阪",

    image:
      "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1400&q=90",

    tagline:
      "Come for the food. Stay because Osaka won't let you leave hungry.",

    description:
      "Osaka has a reputation for being relaxed, friendly, energetic, and obsessed with food. The city is particularly famous for street food and entertainment. Dotonbori is the obvious first stop, but neighborhoods such as Shinsekai and Umeda offer completely different experiences.",

    foods: [
      {
        name: "Takoyaki",

        image:
          "https://images.unsplash.com/photo-1738681335816-8e0df0aa9824?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "These small octopus-filled batter balls are one of Osaka's signature foods. They are usually topped with sauce, mayonnaise, seaweed, and bonito flakes. Be careful on your first bite—the inside can be extremely hot.",

        price: "¥500–¥800",

        php: "≈ ₱190–₱300",
      },

      {
        name: "Okonomiyaki",

        image:
          "https://images.unsplash.com/photo-1700324675741-f79f5bad651c?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "Often described as a Japanese savory pancake, okonomiyaki can contain cabbage, meat, seafood, and various toppings. Osaka-style okonomiyaki is one of the city's must-try dishes.",

        price: "¥800–¥1,500",

        php: "≈ ₱300–₱570",
      },
    ],

    places: [
      {
        name: "Dotonbori",

        image:
          "https://images.unsplash.com/photo-1710026546567-a6e356693b3d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "Osaka's famous entertainment district is packed with giant signs, restaurants, street food, shops, and nightlife. Visit in the evening when the area becomes a sea of neon.",

        price: "Free to explore",

        php: "₱0",
      },

      {
        name: "Osaka Castle",

        image:
          "https://images.unsplash.com/photo-1547647496-b2d16f4fdb69?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "One of Osaka's most recognizable landmarks. The surrounding park is especially pleasant during cherry blossom season.",

        price: "Park: Free | Castle museum: paid admission",

        php: "Approximately ₱200–₱300 for admission",
      },
    ],

    activities: [
      {
        name: "Dotonbori Food Crawl",

        image:
          "https://images.unsplash.com/photo-1724227656171-e5d7959fa476?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "Instead of having one giant meal, try several smaller dishes around Dotonbori. This lets you sample takoyaki, okonomiyaki, kushikatsu, desserts, and other Osaka specialties.",

        price: "¥2,000–¥5,000",

        php: "≈ ₱760–₱1,900",
      },
    ],

    tips: [
      {
        name: "Eat Like Osaka",

        image:
          "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=900&q=85",

        description:
          "Osaka is famous for kuidaore, roughly associated with eating until you drop. Don't spend your entire food budget on the first restaurant. Leave room for street food and random discoveries.",

        price: "Food budget suggestion: ¥3,000–¥6,000/day",

        php: "≈ ₱1,150–₱2,300",
      },
    ],
  },

  sapporo: {
    name: "SAPPORO",
    japanese: "札幌",

    image:
      "https://images.unsplash.com/photo-1619338360476-37195f14909e?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    tagline:
      "Snow, seafood, ramen, mountains—and a completely different Japan.",

    description:
      "Sapporo is the capital of Hokkaido and a fantastic choice for travelers who want a colder, more spacious side of Japan. It is especially popular during winter because of snow activities and the Sapporo Snow Festival, while summer offers pleasant weather and access to Hokkaido's natural scenery.",

    foods: [
      {
        name: "Miso Ramen",

        image:
          "https://plus.unsplash.com/premium_photo-1694708455249-992010f9db32?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "Sapporo is famous for miso ramen. The richer broth is particularly satisfying in cold weather and is commonly associated with Hokkaido's food culture.",

        price: "¥900–¥1,500",

        php: "≈ ₱340–₱570",
      },

      {
        name: "Hokkaido Seafood",

        image:
          "https://images.unsplash.com/photo-1709459992101-c90777285adb?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "Hokkaido is famous for fresh seafood. Depending on the season, you may encounter crab, sea urchin, salmon roe, scallops, and other regional specialties.",

        price: "¥1,500–¥5,000+",

        php: "≈ ₱570–₱1,900+",
      },
    ],

    places: [
      {
        name: "Odori Park",

        image:
          "https://images.unsplash.com/photo-1763814026127-e3149acb3ac5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "A long park stretching through central Sapporo. It becomes particularly spectacular during major seasonal festivals and is an excellent starting point for exploring the city.",

        price: "Free",

        php: "₱0",
      },

      {
        name: "Mt. Moiwa",

        image:
          "https://images.unsplash.com/photo-1696818852814-7085864c2cd0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "One of the best spots around Sapporo for panoramic city views. The night view is particularly popular, although weather conditions can affect visibility.",

        price: "Transportation / ropeway varies",

        php: "Budget around ₱500–₱1,000+",
      },
    ],

    activities: [
      {
        name: "Sapporo Snow Festival",

        image:
          "https://images.unsplash.com/photo-1738246903414-79643a0c9b9e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "One of Sapporo's most famous winter events, featuring enormous snow and ice sculptures. If you're planning specifically around the festival, reserve accommodation early because demand can become very high.",

        price: "Festival areas generally free",

        php: "₱0",
      },
    ],

    tips: [
      {
        name: "Winter Needs Preparation",

        image:
          "https://images.unsplash.com/photo-1529664876179-6d4aa5a02ae3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description:
          "Hokkaido winters are significantly colder than Tokyo or Osaka. Proper winter shoes, warm layers, gloves, and protection from icy sidewalks are important if you visit during the snowy season.",

        price: "Winter gear varies",

        php: "Plan an additional ₱2,000–₱10,000+ if you need clothing or equipment.",
      },
    ],
  },
};

/* =========================================
   TIP DATABASE
========================================= */

const tips = {
  train: {
    icon: "🚆",
    title: "Trains Are Serious Business",

    text: "Japanese trains are famous for their punctuality. Stations can also be much larger and more confusing than they appear on a map. Give yourself extra time, especially when transferring between lines. If you're using Google Maps, pay attention to the train line, platform number, train type, and direction—not just the station name.",
  },

  cash: {
    icon: "💴",
    title: "Bring Some Cash",

    text: "Japan accepts cards in many places, especially major cities, but smaller restaurants, temples, local shops, and some rural businesses may still prefer cash. Keeping a reasonable amount of yen with you gives you flexibility without requiring you to search for an ATM every few hours.",
  },

  walking: {
    icon: "👟",
    title: "You Will Walk. A Lot.",

    text: "A Japan itinerary that looks small on Google Maps can still involve thousands of steps. Stations can have long underground passages, attractions can be spread across neighborhoods, and exploring side streets is part of the fun. Comfortable shoes are one of the best things you can pack.",
  },

  trash: {
    icon: "🗑️",
    title: "Where Are The Trash Cans?",

    text: "You may notice that public trash cans are less common than you expect. Convenience stores and vending-machine areas may have places to dispose of certain items, but don't rely on finding a public bin immediately. A small reusable plastic bag is surprisingly useful during a day of sightseeing.",
  },

  "train-etiquette": {
    icon: "🤫",
    title: "Quiet On The Train",

    text: "Public transportation in Japan tends to have a calm atmosphere. Keep conversations reasonably quiet, avoid blocking doors, let passengers exit before entering, and avoid taking up multiple seats. Phone calls on trains are generally discouraged.",
  },

  onsen: {
    icon: "♨️",
    title: "Onsen Has Rules",

    text: "Traditional hot springs usually require guests to wash thoroughly before entering the communal bath. The bath itself is for soaking rather than washing. Rules concerning tattoos, towels, photography, and swimwear can vary by facility, so check the specific onsen before visiting.",
  },
};

/* =========================================
   FIRST-TIMER SURVIVAL TIP DATABASE
========================================= */

const survivalTips = {
  "ic-card": {
    number: "01",
    icon: "💳",
    title: "Get an IC Card",

    image:
      "https://images.unsplash.com/photo-1722192966983-763c33412758?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    intro:
      "An IC card can make everyday transportation and small purchases much easier.",

    description:
      "For a first-time traveler, an IC card is one of those small things that removes a surprising amount of stress. Instead of buying a separate paper ticket for every eligible journey, you can generally tap your card when entering and leaving the system. Depending on the card and location, IC cards can also be useful for vending machines, convenience stores, lockers, and other small purchases.",

    needed: [
      "An eligible IC card such as Suica, PASMO, or another compatible card",
      "A small amount of Japanese yen for topping up when necessary",
      "A phone wallet or physical card holder",
    ],

    steps: [
      "Obtain an IC card through an available official sales/recharge channel.",
      "Load enough balance before starting a busy sightseeing day.",
      "Tap the card when entering and exiting compatible transit gates.",
      "Check your remaining balance occasionally.",
    ],

    warning:
      "Do not assume every train, bus, or shop accepts every type of IC card. Check compatibility, especially when traveling outside major urban areas.",

    cost: "The card itself may involve a refundable deposit or other purchase conditions depending on the card and current availability. Transportation fares are charged separately.",
  },

  maps: {
    number: "02",
    icon: "🗺️",
    title: "Use Google Maps",

    image:
      "https://images.unsplash.com/photo-1706984524145-aa4e502d6f96?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    intro:
      "Google Maps is more than a map in Japan—it can become your navigation assistant.",

    description:
      "Japan's rail network can look intimidating because multiple companies and train lines operate in the same metropolitan areas. Before leaving your hotel, check your route and identify the train line, direction, platform, transfer station, and destination. Also pay attention to station exits because choosing the wrong exit can put you several blocks away from where you actually want to be.",

    needed: [
      "A smartphone",
      "Google Maps installed",
      "Mobile data, eSIM, pocket Wi-Fi, or another internet connection",
      "A portable power bank",
    ],

    steps: [
      "Search for the destination before leaving.",
      "Check the recommended route and train line.",
      "Look at the station name and direction of travel.",
      "Check the platform and transfer information.",
      "Save important locations such as your hotel.",
    ],

    warning:
      "Don't blindly follow the blue walking line. Large stations can have multiple levels and exits, so use station signs alongside your map.",

    cost: "Google Maps itself is free. Your internet connection may have a separate cost depending on whether you use roaming, an eSIM, pocket Wi-Fi, or another service.",
  },

  convenience: {
    number: "03",
    icon: "🏪",
    title: "Know Convenience Stores",

    image:
      "https://images.unsplash.com/photo-1753598738028-8b0f5d2d0876?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    intro:
      "Convenience stores are one of the easiest places for a first-time traveler to solve small problems.",

    description:
      "Japan's convenience stores can be incredibly useful during a trip. Depending on the store and location, you can find ready-to-eat meals, snacks, drinks, toiletries, ATM services, printing services, charging accessories, and other everyday necessities. They are especially useful when you arrive late, need a quick breakfast, or suddenly realize you forgot something.",

    needed: [
      "A payment method",
      "A small reusable shopping bag if you want to avoid carrying loose items",
      "Your hotel address saved on your phone",
    ],

    steps: [
      "Look for major chains such as 7-Eleven, FamilyMart, and Lawson.",
      "Check the ready-to-eat section for meals and snacks.",
      "Look for ATMs if you need cash.",
      "Ask staff politely if you need help.",
    ],

    warning:
      "Not every service is available at every branch. ATMs, seating, restrooms, and other services can vary by location.",

    cost: "Prices vary by item. Convenience stores are useful for both inexpensive snacks and emergency purchases.",
  },

  packing: {
    number: "04",
    icon: "🧳",
    title: "Don't Overpack",

    image:
      "https://images.unsplash.com/photo-1499419819507-77191b8ec46e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    intro: "Your suitcase is going to come home heavier than it left.",

    description:
      "First-time visitors often underestimate how much they will purchase in Japan. Snacks, souvenirs, clothes, cosmetics, anime merchandise, stationery, figures, and regional products can quickly fill your luggage. Packing light also makes moving through train stations and transferring between hotels much easier.",

    needed: [
      "A suitcase with some empty space",
      "Packing cubes",
      "A foldable reusable bag",
      "A small day bag",
    ],

    steps: [
      "Leave approximately 20–30% of your luggage space empty.",
      "Pack versatile clothing instead of too many outfits.",
      "Use packing cubes to organize your belongings.",
      "Bring a foldable bag for shopping.",
      "Keep important documents and electronics accessible.",
    ],

    warning:
      "Large luggage can be difficult to maneuver through crowded stations. If your itinerary involves many hotel changes, smaller luggage can make the trip much easier.",

    cost: "Packing cubes, travel bags, and luggage accessories vary widely in price. The biggest money-saving strategy is simply leaving enough room before shopping.",
  },

  power: {
    number: "05",
    icon: "🔌",
    title: "Prepare Your Electronics",

    image:
      "https://images.unsplash.com/photo-1681562951682-e7f8f556dbd0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    intro:
      "Your phone is your map, translator, camera, ticket wallet, and emergency tool. Keep it alive.",

    description:
      "A dead phone can turn a simple navigation problem into a major headache. Before traveling, check the charging requirements of your devices and bring the cables and adapters you actually need. A power bank is particularly useful on long sightseeing days when navigation, photos, translation, and mobile data can drain your battery.",

    needed: [
      "Phone charger",
      "Charging cables",
      "Power bank",
      "Travel adapter if required for your devices",
      "Optional multi-port charger",
    ],

    steps: [
      "Charge your phone before leaving your accommodation.",
      "Keep your power bank charged overnight.",
      "Carry one charging cable in your day bag.",
      "Check your device's voltage requirements before using adapters.",
    ],

    warning:
      "Do not assume a plug adapter automatically converts voltage. Adapters and voltage converters serve different purposes.",

    cost: "A basic power bank and travel adapter can range from inexpensive to premium depending on capacity and brand.",
  },

  wifi: {
    number: "06",
    icon: "📱",
    title: "Get Mobile Internet",

    image:
      "https://images.unsplash.com/photo-1683296990966-31b9210d07a3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    intro:
      "Internet access makes navigation, translation, reservations, and emergencies much easier.",

    description:
      "Having mobile internet available throughout the day means you can check train routes, translate signs, contact your accommodation, search restaurants, make reservations, and look up information without constantly searching for public Wi-Fi. Depending on your phone and travel needs, options may include an eSIM, physical SIM, roaming, or pocket Wi-Fi.",

    needed: [
      "An unlocked compatible phone",
      "A mobile data plan, eSIM, SIM, roaming plan, or pocket Wi-Fi",
      "Your important travel information saved offline",
    ],

    steps: [
      "Check whether your phone supports eSIM before traveling.",
      "Choose a data option appropriate for your trip.",
      "Install or activate it according to the provider's instructions.",
      "Save hotel addresses and important information offline.",
    ],

    warning:
      "Check compatibility and activation requirements before leaving your home country. Some phones or plans may have restrictions.",

    cost: "Mobile internet costs depend on the provider, data allowance, trip length, and connection method.",
  },

  shoes: {
    number: "07",
    icon: "👟",
    title: "Wear Comfortable Shoes",

    image:
      "https://images.unsplash.com/photo-1471991750293-5fc0e377b550?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    intro:
      "Japan can turn a normal sightseeing day into a 15,000-step adventure without warning.",

    description:
      "Walking is one of the biggest hidden parts of traveling around Japan. You may walk between attractions, through shopping streets, inside enormous stations, around temples, and through neighborhoods simply because something interesting caught your eye. Shoes that look great but hurt after several hours can ruin an otherwise amazing day.",

    needed: [
      "Comfortable walking shoes",
      "Moisture-wicking socks",
      "Optional blister patches",
      "Optional lightweight second pair",
    ],

    steps: [
      "Break in your shoes before your trip.",
      "Test them during long walks before departure.",
      "Pack blister protection.",
      "Rotate shoes if your trip involves many walking days.",
    ],

    warning:
      "Do not bring brand-new shoes and expect them to magically become comfortable during your first full sightseeing day.",

    cost: "You don't need expensive shoes. Comfort and fit matter more than brand or appearance.",
  },

  trash: {
    number: "08",
    icon: "🗑️",
    title: "Carry a Small Trash Bag",

    image:
      "https://images.unsplash.com/photo-1591610413036-5aaaa8a72b21?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    intro:
      "A tiny reusable bag can solve one of the strangest first-time Japan problems.",

    description:
      "You may buy a snack from a convenience store, finish a drink, and then discover that a public trash can isn't immediately available. Instead of carrying loose wrappers around your bag, keep a small reusable plastic or waterproof pouch with you. When you find an appropriate disposal point, you can empty it properly.",

    needed: [
      "Small reusable plastic bag",
      "Small waterproof pouch or zip bag",
      "Hand sanitizer",
      "Tissues or pocket tissues",
    ],

    steps: [
      "Keep the small bag inside your day bag.",
      "Use it temporarily for your own small trash.",
      "Keep food waste sealed if necessary.",
      "Dispose of the contents at an appropriate location.",
      "Never leave trash beside vending machines or on the street.",
    ],

    warning:
      "The bag is meant to temporarily carry your own trash—not to replace proper waste disposal.",

    cost: "Essentially free if you reuse a small shopping bag or bring a reusable pouch.",
  },
};

/* =========================================
   SCROLL FUNCTIONS
========================================= */

function scrollToJapan() {
  document.getElementById("japan").scrollIntoView({
    behavior: "smooth",
  });
}

function scrollToKnow() {
  document.getElementById("know").scrollIntoView({
    behavior: "smooth",
  });
}

/* =========================================
   OPEN CITY
========================================= */

function openCity(cityName) {
  const city = cities[cityName];

  if (!city) return;

  const modal = document.getElementById("cityModal");

  const content = document.getElementById("cityModalContent");

  content.innerHTML = `
    <div class="city-detail-showcase">

      <img
        src="${city.image}"
        alt="${city.name}"
      >

      <div class="city-detail-title">

        <small>${city.japanese}</small>

        <h2>${city.name}</h2>

        <p>
          ${city.tagline}
        </p>

      </div>

    </div>

    <div class="city-detail-body">

      <h3>Welcome to ${city.name}</h3>

      <p class="city-introduction">
        ${city.description}
      </p>

      <div class="explore-buttons">

        <button
          class="explore-button active"
          onclick="showCategory('${cityName}', 'foods', this)"
        >
          <span>🍜</span>
          Explore Foods
          <small>What should I eat?</small>
        </button>

        <button
          class="explore-button"
          onclick="showCategory('${cityName}', 'places', this)"
        >
          <span>📍</span>
          Explore Places
          <small>Where should I go?</small>
        </button>

        <button
          class="explore-button"
          onclick="showCategory('${cityName}', 'activities', this)"
        >
          <span>🎌</span>
          Things To Do
          <small>What should I experience?</small>
        </button>

        <button
          class="explore-button"
          onclick="showCategory('${cityName}', 'tips', this)"
        >
          <span>💡</span>
          Travel Tips
          <small>What should I know?</small>
        </button>

      </div>

      <div
        id="detailArea"
        class="detail-area"
      ></div>

    </div>
  `;

  modal.classList.add("active");

  document.body.style.overflow = "hidden";

  showCategory(cityName, "foods", document.querySelector(".explore-button"));
}

/* =========================================
   CATEGORY
========================================= */

function showCategory(cityName, category, button) {
  const city = cities[cityName];

  const area = document.getElementById("detailArea");

  if (!city || !area) return;

  document.querySelectorAll(".explore-button").forEach((btn) => {
    btn.classList.remove("active");
  });

  if (button) {
    button.classList.add("active");
  }

  const items = city[category] || [];

  const titles = {
    foods: "🍜 What To Eat",

    places: "📍 Places You Shouldn't Miss",

    activities: "🎌 Experiences Worth Trying",

    tips: "💡 Things To Know",
  };

  area.innerHTML = `
    <h3>
      ${titles[category]}
    </h3>

    <div class="detail-grid">

      ${items
        .map(
          (item) => `
            <article class="detail-card">

              <div class="detail-card-image">

                <img
                  src="${item.image}"
                  alt="${item.name}"
                  loading="lazy"
                >

              </div>

              <div class="detail-card-content">

                <h4>
                  ${item.name}
                </h4>

                <p>
                  ${item.description}
                </p>

                <div class="price-box">

                  <strong>
                    ESTIMATED COST
                  </strong>

                  <span>
                    ${item.price}
                  </span>

                  <br>

                  <span>
                    ${item.php}
                  </span>

                </div>

              </div>

            </article>
          `,
        )
        .join("")}

    </div>
  `;
}

/* =========================================
   CLOSE CITY
========================================= */

function closeCity() {
  const modal = document.getElementById("cityModal");

  modal.classList.remove("active");

  document.body.style.overflow = "";
}

/* =========================================
   OPEN TIP
========================================= */

function openTip(tipName) {
  const tip = tips[tipName];

  if (!tip) return;

  const modal = document.getElementById("tipModal");

  const content = document.getElementById("tipModalContent");

  content.innerHTML = `
    <div style="
      padding: 55px;
      max-width: 800px;
    ">

      <div style="
        font-size: 50px;
        margin-bottom: 20px;
      ">
        ${tip.icon}
      </div>

      <span style="
        color: #b5121b;
        font-size: 11px;
        font-weight: 900;
        letter-spacing: 3px;
      ">
        FIRST-TIMER TIP
      </span>

      <h2 style="
        font-size: 42px;
        margin-top: 10px;
        line-height: 1.1;
      ">
        ${tip.title}
      </h2>

      <p style="
        color: #6f6660;
        line-height: 2;
        margin-top: 25px;
        font-size: 15px;
      ">
        ${tip.text}
      </p>

      <div style="
        margin-top: 30px;
        padding: 20px;
        background: #fff0e6;
        border-left: 4px solid #e85b24;
        color: #790b12;
        font-weight: 700;
        line-height: 1.7;
      ">
        ✦ FITIJA TIP:
        Take screenshots of useful tips before your trip.
        Future-you will thank you.
      </div>

    </div>
  `;

  modal.classList.add("active");

  document.body.style.overflow = "hidden";
}

/* =========================================
   CLOSE TIP
========================================= */

function closeTip() {
  const modal = document.getElementById("tipModal");

  modal.classList.remove("active");

  document.body.style.overflow = "";
}

/* =========================================
   OPEN SURVIVAL TIP
========================================= */

function openSurvivalTip(tipName) {
  const tip = survivalTips[tipName];

  if (!tip) return;

  const modal = document.getElementById("survivalModal");

  const content = document.getElementById("survivalModalContent");

  content.innerHTML = `
    <div class="survival-detail-showcase">

      <div class="survival-detail-image">
        <img
          src="${tip.image}"
          alt="${tip.title}"
        >
      </div>

      <div class="survival-detail-intro">

        <div class="survival-detail-number">
          SURVIVAL GUIDE ${tip.number}
        </div>

        <div class="survival-detail-icon">
          ${tip.icon}
        </div>

        <h2>
          ${tip.title}
        </h2>

        <p>
          ${tip.intro}
        </p>

      </div>

    </div>

    <div class="survival-detail-body">

      <h3>
        Why You Should Know This
      </h3>

      <p class="survival-detail-description">
        ${tip.description}
      </p>

      <div class="survival-info-grid">

        <div class="survival-info-box">

          <h4>
            🎒 What You Need
          </h4>

          <ul>
            ${tip.needed
              .map(
                (item) => `
                  <li>${item}</li>
                `,
              )
              .join("")}
          </ul>

        </div>

        <div class="survival-info-box">

          <h4>
            ✅ What To Do
          </h4>

          <ul>
            ${tip.steps
              .map(
                (item) => `
                  <li>${item}</li>
                `,
              )
              .join("")}
          </ul>

        </div>

      </div>

      <div class="survival-warning">

        <strong>
          ⚠️ FIRST-TIMER WARNING
        </strong>

        <p>
          ${tip.warning}
        </p>

      </div>

      <div class="survival-cost">

        <strong>
          💴 COST / PLANNING NOTE
        </strong>

        <span>
          ${tip.cost}
        </span>

      </div>

    </div>
  `;

  modal.classList.add("active");

  document.body.style.overflow = "hidden";
}

/* =========================================
   CLOSE SURVIVAL TIP
========================================= */

function closeSurvivalTip() {
  const modal = document.getElementById("survivalModal");

  modal.classList.remove("active");

  document.body.style.overflow = "";
}

/* =========================================
   CLOSE WHEN CLICKING OUTSIDE
========================================= */

document
  .getElementById("cityModal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeCity();
    }
  });

document.getElementById("tipModal").addEventListener("click", function (event) {
  if (event.target === this) {
    closeTip();
  }
});

document
  .getElementById("survivalModal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeSurvivalTip();
    }
  });

/* =========================================
   KEYBOARD ACCESSIBILITY
========================================= */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeCity();

    closeTip();

    closeSurvivalTip();
  }

  /*
    Allows keyboard users to open survival cards
    with Enter or Space.
  */

  if (
    (event.key === "Enter" || event.key === " ") &&
    document.activeElement.classList.contains("survival-card")
  ) {
    event.preventDefault();

    const onclickValue = document.activeElement.getAttribute("onclick");

    if (onclickValue) {
      const match = onclickValue.match(/openSurvivalTip\('([^']+)'\)/);

      if (match) {
        openSurvivalTip(match[1]);
      }
    }
  }
});
/* =========================================
   FITIJA NIGHT MODE + JAPANESE LANTERNS
   JS ONLY
========================================= */

(function initializeNightMode() {
  function setupNightMode() {
    /* =========================================
       NIGHT MODE STYLES
    ========================================= */

    if (!document.getElementById("fitiijaNightModeStyles")) {
      const style = document.createElement("style");

      style.id = "fitiijaNightModeStyles";

      style.textContent = `

        /* =========================================
           MAIN NIGHT MODE
           LIGHT JAPANESE PAPER BACKGROUND
        ========================================= */

        body.fitiija-night {
          background-image:
            linear-gradient(
              135deg,
              rgba(0, 0, 0, 0.88) 0%,
              rgba(20, 0, 0, 0.82) 50%,
              rgba(0, 0, 0, 0.9) 100%
            ),
            url("https://images.unsplash.com/photo-1525635569544-610f9540664a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") !important;

          background-size: cover !important;
          background-position: center !important;
          background-attachment: fixed !important;
          background-repeat: no-repeat !important;

          color: #e20000 !important;

          transition:
            background 0.6s ease,
            color 0.6s ease;
        }
body.fitiija-night nav a {
  color: #ffffff !important;
}

body.fitiija-night nav a:hover {
  color: #ff0000 !important;
}

        /* =========================================
           SHOWCASE
        ========================================= */

        body.fitiija-night .japan-showcase {
          background-color: rgba(95, 0, 0, 0.72) !important;
          color: #e20000 !important;

          transition:
            background 0.6s ease;
        }

        body.fitiija-night .japan-showcase::before {
          background:
            linear-gradient(
              90deg,
              rgba(59, 0, 0, 0.96) 0%,
              rgba(29, 3, 3, 0.8) 30%,
              rgba(19, 3, 3, 0.42) 60%,
              rgba(244, 232, 232, 0.15) 100%
            ) !important;
        }

        body.fitiija-night .japan-showcase::after {
          background:
            linear-gradient(
              to bottom,
              rgba(233, 232, 244, 0) 0%,
              rgba(0, 0, 0, 0.35) 40%,
              #080808 100%
            ) !important;
        }


        /* =========================================
           SHOWCASE TEXT
        ========================================= */

        body.fitiija-night .japan-showcase h1,
        body.fitiija-night .japan-showcase h2,
        body.fitiija-night .japan-showcase h3 {
          color: #000000 !important;
        }

        body.fitiija-night .japan-showcase p {
          color: #faf9f9 !important;
        }

        body.fitiija-night .japan-showcase .eyebrow,
        body.fitiija-night .japan-showcase .showcase-label,
        body.fitiija-night .japan-showcase small {
          color: #f10000 !important;
        }


        /* =========================================
           ALL SECTIONS
        ========================================= */

        body.fitiija-night section {
          background: rgba(2, 2, 2, 0.8) !important;
          color: #ffffff !important;

          transition:
            background 0.6s ease,
            color 0.6s ease;
        }
body.fitiija-night .price-box {
  background: #0a0a0a !important;
  border-left: 4px solid #b51f25 !important;
}

body.fitiija-night .price-box strong,
body.fitiija-night .price-box span {
  color: #e53935 !important;
}
  body.fitiija-night .survival-detail-intro {
  background: #0a0a0a !important;
}

body.fitiija-night .survival-detail-intro h2 {
  color: #e53935 !important;
}

body.fitiija-night .survival-detail-intro > p {
  color: #cccccc !important;
}

body.fitiija-night .survival-detail-body {
  background: #0a0a0a !important;
  color: #ffffff !important;
}

body.fitiija-night .survival-detail-description {
  color: #cccccc !important;
}

body.fitiija-night .survival-info-box {
  background: #0a0a0a !important;
  border: 1px solid #b32020 !important;
}

body.fitiija-night .survival-info-box h4 {
  color: #e53935 !important;
}

body.fitiija-night .survival-info-box li {
  color: #cccccc !important;
}

body.fitiija-night .survival-warning {
  background: #1a0f0a !important;
  border-left: 5px solid #e85b24 !important;
}

body.fitiija-night .survival-warning strong {
  color: #e53935 !important;
}

body.fitiija-night .survival-warning p {
  color: #cccccc !important;
}

        /* =========================================
           BLACK CONTENT BOXES
           
           Covers:
           - City cards
           - Japan cards
           - Detail cards
           - Survival cards
           - Food cards
           - Info cards
           - Destination cards
           - Any class containing "card"
        ========================================= */

        body.fitiija-night .card,
        body.fitiija-night .detail-card,
        body.fitiija-night .survival-card,
        body.fitiija-night .city-card,
        body.fitiija-night .destination-card,
        body.fitiija-night .info-card,
        body.fitiija-night .food-card,
        body.fitiija-night .tip-card,
        body.fitiija-night .feature-card,
        body.fitiija-night .guide-card,
        body.fitiija-night .stat-card,
        body.fitiija-night .japan-card,
        body.fitiija-night .content-card,

        body.fitiija-night [class*="card"],
        body.fitiija-night [class*="Card"] {
          background: #080808 !important;

          color: #f30606 !important;

          border-color: #a71919 !important;

          transition:
            background 0.6s ease,
            color 0.6s ease,
            border-color 0.6s ease;
        }


        /* =========================================
           TEXT INSIDE BLACK BOXES
        ========================================= */

        body.fitiija-night .card h1,
        body.fitiija-night .card h2,
        body.fitiija-night .card h3,
        body.fitiija-night .card h4,
        body.fitiija-night .card h5,
        body.fitiija-night .card p,
        body.fitiija-night .card span,

        body.fitiija-night .detail-card h1,
        body.fitiija-night .detail-card h2,
        body.fitiija-night .detail-card h3,
        body.fitiija-night .detail-card h4,
        body.fitiija-night .detail-card p,
        body.fitiija-night .detail-card span,

        body.fitiija-night .city-card h1,
        body.fitiija-night .city-card h2,
        body.fitiija-night .city-card h3,
        body.fitiija-night .city-card h4,
        body.fitiija-night .city-card p,
        body.fitiija-night .city-card span,

        body.fitiija-night .survival-card h1,
        body.fitiija-night .survival-card h2,
        body.fitiija-night .survival-card h3,
        body.fitiija-night .survival-card h4,
        body.fitiija-night .survival-card p,
        body.fitiija-night .survival-card span,

        body.fitiija-night [class*="card"] h1,
        body.fitiija-night [class*="card"] h2,
        body.fitiija-night [class*="card"] h3,
        body.fitiija-night [class*="card"] h4,
        body.fitiija-night [class*="card"] h5,
        body.fitiija-night [class*="card"] p,
        body.fitiija-night [class*="card"] span {
          color: #ffffff !important;
        }


        /* =========================================
           RED ACCENT TEXT
        ========================================= */

        body.fitiija-night .card small,
        body.fitiija-night .card .label,
        body.fitiija-night .card .eyebrow,

        body.fitiija-night .detail-card small,
        body.fitiija-night .detail-card .label,
        body.fitiija-night .detail-card .eyebrow,

        body.fitiija-night .city-card small,
        body.fitiija-night .city-card .label,

        body.fitiija-night .survival-card small,
        body.fitiija-night .survival-card .label,

        body.fitiija-night [class*="card"] small,
        body.fitiija-night [class*="card"] .label,
        body.fitiija-night [class*="card"] .eyebrow {
          color: #e53935 !important;
        }


        /* =========================================
           KNOW JAPAN BEFORE YOU GO
        ========================================= */

        body.fitiija-night #know-japan,
        body.fitiija-night #knowJapan,
        body.fitiija-night .know-japan,
        body.fitiija-night .knowJapan {
          background: #ebe8f4 !important;
          color: #171717 !important;
        }

        body.fitiija-night #know-japan h1,
        body.fitiija-night #know-japan h2,
        body.fitiija-night #know-japan h3,
        body.fitiija-night .know-japan h1,
        body.fitiija-night .know-japan h2,
        body.fitiija-night .know-japan h3 {
          color: #171717 !important;
        }


        /* =========================================
           KNOW JAPAN BOXES
        ========================================= */

        body.fitiija-night #know-japan .card,
        body.fitiija-night #know-japan .detail-card,
        body.fitiija-night #know-japan .info-card,

        body.fitiija-night .know-japan .card,
        body.fitiija-night .know-japan .detail-card,
        body.fitiija-night .know-japan .info-card {
          background: #080808 !important;

          color: #ffffff !important;

          border:
            1px solid #a71919 !important;
        }


        /* =========================================
           ALL LINKS INSIDE BOXES
        ========================================= */

        body.fitiija-night .card a,
        body.fitiija-night .detail-card a,
        body.fitiija-night .city-card a,
        body.fitiija-night .survival-card a,
        body.fitiija-night [class*="card"] a {
          color: #e53935 !important;
        }


 /* =========================================
   FORCE ALL BOXES TO BLACK
========================================= */

body.fitiija-night .destination-card,
body.fitiija-night .card,
body.fitiija-night .city-card,
body.fitiija-night .place-card,
body.fitiija-night .detail-card,
body.fitiija-night .survival-card,
body.fitiija-night .food-card,
body.fitiija-night .transport-card,
body.fitiija-night .tip-card {
    background: #111 !important;
    color: #ffffff !important;
    border: 1px solid rgba(180,30,30,0.8) !important;
}

/* Tag buttons */
body.fitiija-night .tag,
body.fitiija-night .chip,
body.fitiija-night .badge,
body.fitiija-night .category,
body.fitiija-night .city-tag,
body.fitiija-night .destination-tag {
    background: #181818 !important;
    color: #ffffff !important;
    border: 1px solid #b32020 !important;
}

/* View button area */
body.fitiija-night .view-btn,
body.fitiija-night .explore-btn,
body.fitiija-night .destination-btn,
body.fitiija-night .card-button,
body.fitiija-night button {
    background: #111111 !important;
    color: white !important;
    border: 1px solid #b32020 !important;
}

/* Remove all white backgrounds */
body.fitiija-night .modal-box,
body.fitiija-night .tip-modal-box,
body.fitiija-night .survival-modal-box {
  background: #0a0a0a !important;
  border: 1px solid #b51f25 !important;
}
body.fitiija-night .tip-modal-box p {
  color: #ffffff !important;
}
body.fitiija-night .city-tags span {
  background: #181818 !important;
  color: #ffffff !important;
  border: 1px solid #b32020 !important;
}
body.fitiija-night .tag,
body.fitiija-night .chip,
body.fitiija-night .badge,
body.fitiija-night .view-btn,
body.fitiija-night button,
body.fitiija-night .destination-card,
body.fitiija-night .card {
    background-color: #111 !important;
}
body.fitiija-night .navbar {
  background: rgba(10, 10, 10, 0.92) !important;
  border-bottom: 1px solid #a71919 !important;
}
  body.fitiija-night .nav-button:hover,
body.fitiija-night .nav-button:active {
  background: #b51f25 !important;
  color: #ffffff !important;
  border-color: #b51f25 !important;
}

        /* =========================================
           BOX BUTTONS
        ========================================= */

        body.fitiija-night .card button,
        body.fitiija-night .detail-card button,
        body.fitiija-night .city-card button,
        body.fitiija-night .survival-card button,

        body.fitiija-night .card .btn,
        body.fitiija-night .detail-card .btn,
        body.fitiija-night .city-card .btn,

        body.fitiija-night [class*="card"] button,
        body.fitiija-night [class*="card"] .btn {
          background: #080808 !important;

          color: #ffffff !important;

          border:
            1px solid #b51f25 !important;
        }


        body.fitiija-night .card button:hover,
        body.fitiija-night .detail-card button:hover,
        body.fitiija-night .city-card button:hover,
        body.fitiija-night [class*="card"] button:hover {
          background: #b51f25 !important;

          color: #ffffff !important;
        }


        /* =========================================
           SHOWCASE BUTTONS
        ========================================= */

        body.fitiija-night .japan-showcase button,
        body.fitiija-night .japan-showcase .btn {
          background: #080808 !important;

          color: #ff0000 !important;

          border:
            1px solid #b51f25 !important;
        }

        body.fitiija-night .japan-showcase button:hover,
        body.fitiija-night .japan-showcase .btn:hover {
          background: #b51f25 !important;

          color: #ffffff !important;
        }


        /* =========================================
           STAT BOXES
        ========================================= */

        body.fitiija-night .stat,
        body.fitiija-night .stat-item,
        body.fitiija-night .quick-stat {
          background: #080808 !important;

          color: #ffffff !important;

          border:
            1px solid #a71919 !important;
        }

        body.fitiija-night .stat strong,
        body.fitiija-night .stat-number,
        body.fitiija-night .stat-value {
          color: #e53935 !important;
        }


        /* =========================================
           BOX IMAGES
        ========================================= */

        body.fitiija-night .card img,
        body.fitiija-night .detail-card img,
        body.fitiija-night .city-card img,
        body.fitiija-night .survival-card img,
        body.fitiija-night [class*="card"] img {
          filter: none !important;
        }


        /* =========================================
           DIVIDERS
        ========================================= */

        body.fitiija-night hr {
          border-color: #b51f25 !important;
        }


        /* =========================================
           NIGHT MODE BUTTON
        ========================================= */

        #fitiijaNightToggle {
          position: fixed;

          top: 13px;
          right: 22px;

          width: 52px;
          height: 52px;

          border:
            1px solid #a71919 !important;

          border-radius: 50%;

          background:
            rgba(18, 18, 18, 0.94) !important;

          color: #ffd98a !important;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 22px;

          cursor: pointer;

          z-index: 99999;

          backdrop-filter: blur(10px);

          box-shadow:
            0 0 20px rgba(255, 170, 60, 0.18);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }

        #fitiijaNightToggle:hover {
          transform: scale(1.08);

          box-shadow:
            0 0 30px rgba(255, 170, 60, 0.35);
        }


        /* =========================================
           LANTERN CONTAINER
        ========================================= */

        #fitiijaLanterns {
          position: fixed;

          inset: 0;

          width: 100%;
          height: 100%;

          pointer-events: none;

          z-index: 5;

          overflow: hidden;
        }


        /* =========================================
           INDIVIDUAL LANTERN
        ========================================= */

        .fitiija-lantern {
          position: absolute;

          top: -15px;

          width: 72px;
          height: 110px;

          transform-origin: top center;

          opacity: 0;

          transition:
            opacity 0.7s ease,
            filter 0.7s ease;

          filter:
            drop-shadow(
              0 0 0 rgba(255, 170, 70, 0)
            );
        }


        /* =========================================
           HANGING STRING
        ========================================= */

        .fitiija-lantern-string {
          position: absolute;

          top: 0;
          left: 50%;

          width: 2px;
          height: 42px;

          transform: translateX(-50%);

          background:
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.15),
              rgba(255,255,255,0.55)
            );
        }


        /* =========================================
           LANTERN TOP
        ========================================= */

        .fitiija-lantern-top {
          position: absolute;

          top: 38px;
          left: 50%;

          width: 66px;
          height: 10px;

          transform: translateX(-50%);

          background:
            linear-gradient(
              to right,
              #64131b,
              #a7272f,
              #64131b
            );

          border-radius: 5px;

          box-shadow:
            0 0 5px rgba(255, 170, 70, 0.2);
        }


        /* =========================================
           LANTERN BODY
        ========================================= */

        .fitiija-lantern-body {
          position: absolute;

          top: 43px;
          left: 50%;

          width: 68px;
          height: 76px;

          transform: translateX(-50%);

          background:
            radial-gradient(
              circle at 50% 45%,
              #ffd36e 0%,
              #ffb83f 25%,
              #d93435 58%,
              #82151d 100%
            );

          border-radius:
            12px 12px 18px 18px;

          border:
            2px solid rgba(255, 208, 115, 0.75);

          box-shadow:
            inset 0 0 15px rgba(255, 230, 150, 0.5),
            0 0 12px rgba(255, 160, 50, 0.45);

          overflow: hidden;
        }


        /* =========================================
           LANTERN RIBS
        ========================================= */

        .fitiija-lantern-body::before {
          content: "";

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              transparent 15%,
              rgba(80, 10, 15, 0.4) 17%,
              transparent 19%,
              transparent 47%,
              rgba(80, 10, 15, 0.4) 50%,
              transparent 53%,
              transparent 81%,
              rgba(80, 10, 15, 0.4) 83%,
              transparent 85%
            );
        }


        /* =========================================
           LANTERN GLOW
        ========================================= */

        .fitiija-lantern-body::after {
          content: "";

          position: absolute;

          inset: 8px;

          border-radius: 10px;

          background:
            radial-gradient(
              circle,
              rgba(255, 238, 170, 0.8),
              rgba(255, 168, 40, 0.25) 45%,
              transparent 72%
            );

          opacity: 0.8;

          animation:
            fitiijaLanternGlow 2.8s ease-in-out infinite;
        }

        @keyframes fitiijaLanternGlow {
          0%,
          100% {
            opacity: 0.65;
          }

          50% {
            opacity: 1;
          }
        }


        /* =========================================
           LANTERN BOTTOM
        ========================================= */

        .fitiija-lantern-bottom {
          position: absolute;

          top: 116px;
          left: 50%;

          width: 48px;
          height: 8px;

          transform: translateX(-50%);

          background:
            #72151c;

          border-radius:
            0 0 8px 8px;
        }


        /* =========================================
           LANTERN TASSEL
        ========================================= */

        .fitiija-lantern-tassel {
          position: absolute;

          top: 123px;
          left: 50%;

          width: 2px;
          height: 24px;

          transform: translateX(-50%);

          background: #d89a45;
        }

        .fitiija-lantern-tassel::after {
          content: "";

          position: absolute;

          bottom: -4px;
          left: 50%;

          width: 15px;
          height: 7px;

          transform: translateX(-50%);

          background: #d89a45;

          clip-path:
            polygon(
              0 0,
              100% 0,
              75% 100%,
              50% 70%,
              25% 100%
            );
        }


        /* =========================================
           NIGHT MODE ACTIVE LANTERNS
        ========================================= */

        body.fitiija-night .fitiija-lantern {
          opacity: 1;

          filter:
            drop-shadow(
              0 0 16px rgba(255, 164, 54, 0.42)
            );
        }


        /* =========================================
           DAY MODE
        ========================================= */

        body:not(.fitiija-night) #fitiijaLanterns {
          opacity: 0;
        }

        body.fitiija-night #fitiijaLanterns {
          opacity: 1;
        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 768px) {

          #fitiijaNightToggle {
            top: 14px;
            right: 14px;

            width: 44px;
            height: 44px;

            font-size: 18px;
          }

          .fitiija-lantern {
            width: 55px;
            height: 90px;
          }

          .fitiija-lantern-top {
            width: 50px;
          }

          .fitiija-lantern-body {
            width: 52px;
            height: 62px;
          }

          .fitiija-lantern-bottom {
            top: 100px;
            width: 38px;
          }

          .fitiija-lantern-tassel {
            top: 107px;
          }
        }


        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {

          .fitiija-lantern-body::after {
            animation: none;
          }
        }

      `;

      document.head.appendChild(style);
    }

    /* =========================================
       CREATE NIGHT MODE BUTTON
    ========================================= */

    if (!document.getElementById("fitiijaNightToggle")) {
      const button = document.createElement("button");

      button.id = "fitiijaNightToggle";

      button.type = "button";

      button.innerHTML = "☾";

      button.setAttribute("aria-label", "Toggle FITIJA night mode");

      button.title = "Toggle Night Mode";

      document.body.appendChild(button);

      button.addEventListener("click", toggleFitiijaNightMode);
    }

    /* =========================================
       CREATE LANTERN CONTAINER
    ========================================= */

    if (!document.getElementById("fitiijaLanterns")) {
      const lanternContainer = document.createElement("div");

      lanternContainer.id = "fitiijaLanterns";

      lanternContainer.setAttribute("aria-hidden", "true");

      document.body.appendChild(lanternContainer);

      createFitiijaLanterns();
    }

    /* =========================================
       RESTORE NIGHT MODE
    ========================================= */

    const savedMode = localStorage.getItem("fitiijaNightMode");

    if (savedMode === "true") {
      document.body.classList.add("fitiija-night");

      updateNightButton(true);
    }
  }

  /* =========================================
     CREATE 6 LANTERNS
  ========================================= */

  function createFitiijaLanterns() {
    const container = document.getElementById("fitiijaLanterns");

    if (!container) return;

    /* =========================================
       EXACTLY 6 LANTERNS
       3 LEFT + 3 RIGHT
    ========================================= */

    const positions = [
      {
        side: "left",
        top: "8%",
        offset: "2%",
        rotation: "-4deg",
        delay: "0s",
      },

      {
        side: "left",
        top: "38%",
        offset: "1%",
        rotation: "3deg",
        delay: "0.8s",
      },

      {
        side: "left",
        top: "68%",
        offset: "3%",
        rotation: "-3deg",
        delay: "1.5s",
      },

      {
        side: "right",
        top: "14%",
        offset: "2%",
        rotation: "4deg",
        delay: "0.4s",
      },

      {
        side: "right",
        top: "45%",
        offset: "1%",
        rotation: "-3deg",
        delay: "1.1s",
      },

      {
        side: "right",
        top: "74%",
        offset: "3%",
        rotation: "3deg",
        delay: "1.8s",
      },
    ];

    positions.forEach((position, index) => {
      const lantern = document.createElement("div");

      lantern.className = "fitiija-lantern";

      lantern.dataset.lantern = String(index + 1);

      lantern.style.top = position.top;

      if (position.side === "left") {
        lantern.style.left = position.offset;
      } else {
        lantern.style.right = position.offset;
      }

      lantern.style.transform = `rotate(${position.rotation})`;

      lantern.style.animation = `fitiijaLanternSwing 4s ease-in-out ${position.delay} infinite`;

      lantern.innerHTML = `
          <div class="fitiija-lantern-string"></div>

          <div class="fitiija-lantern-top"></div>

          <div class="fitiija-lantern-body"></div>

          <div class="fitiija-lantern-bottom"></div>

          <div class="fitiija-lantern-tassel"></div>
        `;

      container.appendChild(lantern);
    });

    /* =========================================
       LANTERN SWING
    ========================================= */

    if (!document.getElementById("fitiijaLanternSwingStyles")) {
      const swingStyle = document.createElement("style");

      swingStyle.id = "fitiijaLanternSwingStyles";

      swingStyle.textContent = `

        @keyframes fitiijaLanternSwing {

          0%,
          100% {
            margin-top: 0;
          }

          50% {
            margin-top: 8px;
          }

        }

      `;

      document.head.appendChild(swingStyle);
    }
  }

  /* =========================================
     TOGGLE NIGHT MODE
  ========================================= */

  function toggleFitiijaNightMode() {
    const isNight = document.body.classList.toggle("fitiija-night");

    localStorage.setItem("fitiijaNightMode", isNight);

    updateNightButton(isNight);
  }

  /* =========================================
     UPDATE BUTTON
  ========================================= */

  function updateNightButton(isNight) {
    const button = document.getElementById("fitiijaNightToggle");

    if (!button) return;

    button.innerHTML = isNight ? "☀" : "☾";

    button.title = isNight ? "Switch to Day Mode" : "Switch to Night Mode";

    button.setAttribute(
      "aria-label",
      isNight ? "Switch to Day Mode" : "Switch to Night Mode",
    );
  }

  /* =========================================
     START
  ========================================= */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupNightMode);
  } else {
    setupNightMode();
  }
})();
