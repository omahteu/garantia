//Mobile Menu Script
function openNav() {
  document.getElementById("myNav").style.width = "85%";
  document.getElementById("menu-content").style.display = "initial";
  $("#side-menu-nav").css({ display: "block" });
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("menu-content").style.display = "none";
  $("#side-menu-nav").css({ display: "none" });
}

function closeBubble() {
  document.getElementById("btnBubble").style.display = "none";
  $("#btnBubble").css({ display: "none" });
}

//Navbar Animation
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("#logo").css({ transform: "scale(0.8)", transition: "0.2s" });
    $(".nav-effect").css({ transform: "scale(0.9)", color: "#fff" });
    $(".nav-effect").css({ transition: "0.3s" });
  } else {
    $("#logo").css({ transform: "scale(1.0)", transition: "0.2s" });
    $(".nav-effect").css({ transform: "scale(1.0)" });
    $(".nav-effect").css({ transition: "0.3s" });
  }

  if ($(window).scrollTop() <= 500) {
    $("#btntop").css({ display: "none", transition: "0.5s" });
    $("#btn-fixed-style").css({ opacity: "0.7" });
  } else {
    $("#btntop").css({ display: "flex", transition: "0.5s" });
    $("#btn-fixed-style").css({ opacity: "0.7" });
  }
});
