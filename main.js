const vid1 = document.getElementById("vid1");
const vid2 = document.getElementById("vid2");
const vid3 = document.getElementById("vid3");
const vid4 = document.getElementById("vid4");
const vids = document.querySelectorAll(".content--vid");
let header = document.getElementById("header");

window.onscroll = function () {
  scroll();
};

function setVideoToBegin() {
    vids.forEach(function (e) {
      e.currentTime = 0;
    });
}

function scroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.style.height = "70px";
    header.classList.add("have-background");
    header.classList.remove("have-no-background");
    console.log("80");
  } else {
    header.style.height = "100px";
    header.classList.remove("have-background");
    header.classList.add("have-no-background");
  }

  if (
    (document.documentElement.scrollTop >= 2700 &&
      document.documentElement.scrollTop < 3400) ||
    (document.body.scrollTop == 2700 && document.body.scrollTop < 3400)
  ) {
    vid1.play();
  } else if (
    (document.documentElement.scrollTop >= 3400 &&
      document.documentElement.scrollTop < 4100) ||
    (document.body.scrollTop >= 3400 && document.body.scrollTop < 4100)
  ) {
    vid2.play();
  } else if (
    (document.documentElement.scrollTop >= 4100 &&
      document.documentElement.scrollTop < 4800) ||
    (document.body.scrollTop >= 4100 && document.body.scrollTop < 4800)
  ) {
    vid3.play();
  } else if (
    (document.documentElement.scrollTop >= 4800 &&
      document.documentElement.scrollTop < 5500) ||
    (document.body.scrollTop >= 4800 && document.body.scrollTop < 5500)
  ) {
    vid4.play();
  } else {
    setVideoToBegin();
  }
}

