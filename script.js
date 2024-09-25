var currentIndex = 0;
var cardWidth = $(".item-card").outerWidth(true); // Includes margin
var gallery = $(".product-gallery");
var totalCards = $(".item-card").length;

function updateActiveCard() {
  $(".item-card").each(function (index) {
    $(this).css({
      transform: index === currentIndex ? "scale(1.2)" : "scale(1)",
      zIndex: index === currentIndex ? "10" : "1",
    });
  });
}

function scrollGallery(direction) {
  var scrollAmount = cardWidth; // Adjusted for spacing

  // Update current index
  currentIndex = (currentIndex + direction + totalCards) % totalCards;

  // Center the gallery on the current card
  gallery.css(
    "transform",
    `translateX(${
      -currentIndex * scrollAmount + (gallery.width() / 2 - cardWidth / 2)
    }px)`
  );

  updateActiveCard();
}

$(document).ready(function () {
  // Center the gallery on the initial card
  gallery.css(
    "transform",
    `translateX(${
      -currentIndex * cardWidth + (gallery.width() / 2 - cardWidth / 2)
    }px)`
  );
  updateActiveCard();
});

$(document).ready(function () {
  $(".video-container").hover(
    function () {
      $(this).find("video")[0].play();
    },
    function () {
      $(this).find("video")[0].pause();
      $(this).find("video")[0].currentTime = 0;
    }
  );
});


document.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    // 50px kaydırma miktarı
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


window.addEventListener("scroll", function () {
  var rascalsLogo = document.querySelector(".rascals-logo");
  if (window.scrollY > 50) {
    rascalsLogo.classList.add("scrolled");
  } else {
    rascalsLogo.classList.remove("scrolled");
  }
});
