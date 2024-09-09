  // carousel 
  document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#carouselExampleAutoplaying');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 1500, 
        ride: 'carousel'
    });
});

// trigger

document.getElementById("whatsappButton").addEventListener("click", function () {
  var phoneNumber = "+918778019356"; 
  var message = "Hi there, here is the blue horizon ";
  window.open(
    "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      
      encodeURIComponent(message),
    "_blank"
  );
});

document.getElementById("whatsappButton1").addEventListener("click", function () {
  var phoneNumber = "+918778019356"; 
  var message = "Are you Looking for your dream home? We're here to help you find the perfect place.";
  window.open(
    "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message),
    "_blank"
  );
});

document.getElementById("whatsappButton2").addEventListener("click", function () {
  var phoneNumber = "+918778019356"; 
  var message = "I’m thinking of joining S.V.G Tuition Center and was wondering if you know anything about it.Do you have any details or tips on how to get started? I’d really appreciate any info you can share! ";
  window.open(
    "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message),
    "_blank"
  );
});


document.getElementById("whatsappButton3").addEventListener("click", function () {
  var phoneNumber = "+918778019356"; 
  var message = "I’m thinking of joining S.V.G Tuition Center and was wondering if you know anything about it. Do you have any details or tips on how to get started? I’d really appreciate any info you can share! ";
  window.open(
    "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message),
    "_blank"
  );
});

document.getElementById("whatsappButton4").addEventListener("click", function () {
  var phoneNumber = "+918778019356"; 
  var message = "I’m thinking of joining S.V.G Tuition Center and was wondering if you know anything about it. Do you have any details or tips on how to get started? I’d really appreciate any info you can share! ";
  window.open(
    "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message),
    "_blank"
  );
});

document.getElementById("whatsappButton5").addEventListener("click", function () {
  var phoneNumber = "+918778019356"; 
  var message = "I’m thinking of joining S.V.G Tuition Center and was wondering if you know anything about it. Do you have any details or tips on how to get started? I’d really appreciate any info you can share! ";
  window.open(
    "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message),
    "_blank"
  );
});

document.getElementById("whatsappButton6").addEventListener("click", function () {
  var phoneNumber = "+918778019356"; 
  var message = "I’m thinking of joining S.V.G Tuition Center and was wondering if you know anything about it. Do you have any details or tips on how to get started? I’d really appreciate any info you can share! ";
  window.open(
    "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message),
    "_blank"
  );
});

document.getElementById("whatsappButton7").addEventListener("click", function () {
  var phoneNumber = "+918778019356"; 
  var message = "I’m thinking of joining S.V.G Tuition Center and was wondering if you know anything about it. Do you have any details or tips on how to get started? I’d really appreciate any info you can share! ";
  window.open(
    "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message),
    "_blank"
  );
});

document.getElementById("whatsappButton8").addEventListener("click", function () {
  var phoneNumber = "+918778019356"; 
  var message = "I’m thinking of joining S.V.G Tuition Center and was wondering if you know anything about it. Do you have any details or tips on how to get started? I’d really appreciate any info you can share! ";
  window.open(
    "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message),
    "_blank"
  );
});


document.getElementById("whatsappButton9").addEventListener("click", function () {
  var phoneNumber = "+918778019356"; 
  var message = "I’m thinking of joining S.V.G Tuition Center and was wondering if you know anything about it. Do you have any details or tips on how to get started? I’d really appreciate any info you can share! ";
  window.open(
    "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message),
    "_blank"
  );
});

document.getElementById("whatsappButton10").addEventListener("click", function () {
  var phoneNumber = "+918778019356"; 
  var message = "Hi there, here is the blue horizon ";
  window.open(
    "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message),
    "_blank"
  );
});


document.getElementById("whatsappButton11").addEventListener("click", function () {
  var phoneNumber = "+918778019356"; 
  var message = "Hi there, here is the blue horizon ";
  window.open(
    "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message),
    "_blank"
  );
});


document.getElementById("whatsappButton12").addEventListener("click", function () {
  var phoneNumber = "+918778019356"; 
  var message = "Hi there, here is the blue horizon ";
  window.open(
    "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message),
    "_blank"
  );
});

document.getElementById("whatsappButton13").addEventListener("click", function () {
  var phoneNumber = "+918778019356"; 
  var message = "Hi there, here is the blue horizon ";
  window.open(
    "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message),
    "_blank"
  );
});




// top button

const button2 = document.getElementById("button1");

const displayButton = () => {
  window.addEventListener('scroll', () => {

    if (window.scrollY > 100) {
      button2.style.display = "block";
    } else {
      button2.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button2.addEventListener("click", (event) => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    console.log(event);
  });
};

displayButton();
scrollToTop();