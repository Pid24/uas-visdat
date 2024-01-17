(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Sidebar Toggler
  $(".sidebar-toggler").click(function () {
    $(".sidebar, .content").toggleClass("open");
    return false;
  });

  // Progress Bar
  $(".pg-bar").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Calender
  $("#calender").datetimepicker({
    inline: true,
    format: "L",
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
    nav: false,
  });

  // Chart Global Color
  Chart.defaults.color = "#6C7293";
  Chart.defaults.borderColor = "#000000";

  // Worldwide Sales Chart
  var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
  var myChart1 = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: ["0-4", "5-9", "10-14", "15-19", "20-24", "25-29", "30-34"],
      datasets: [
        {
          label: "LAKI-LAKI",
          data: [64, 76, 74, 34, 16, 8, 3],
          backgroundColor: "rgba(235, 22, 22, .7)",
        },
        {
          label: "PEREMPUAN",
          data: [62, 70, 72, 55, 53, 64, 52],
          backgroundColor: "rgba(235, 22, 22, .3)",
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Salse & Revenue Chart
  var ctx2 = $("#salse-revenue").get(0).getContext("2d");
  var myChart2 = new Chart(ctx2, {
    type: "line",
    data: {
      labels: ["0-4", "5-9", "10-14", "15-19", "20-24", "25-29", "30-34"],
      datasets: [
        {
          label: "LAKI-LAKI",
          data: [64, 76, 74, 34, 16, 8, 3],
          backgroundColor: "rgba(235, 22, 22, .7)",
          fill: true,
        },
        {
          label: "PEREMPUAN",
          data: [62, 70, 72, 55, 53, 64, 52],
          backgroundColor: "rgba(235, 22, 22, .5)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Single Line Chart
  var ctx3 = $("#line-chart").get(0).getContext("2d");
  var myChart3 = new Chart(ctx3, {
    type: "line",
    data: {
      labels: ["0-4", "5-9", "10-14", "15-19", "20-24", "25-29", "30-34"],
      datasets: [
        {
          label: "LAKI-LAKI",
          fill: false,
          backgroundColor: "rgba(235, 22, 22, .7)",
          data: [64, 76, 74, 34, 16, 8, 3],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Single Bar Chart
  var ctx4 = $("#bar-chart").get(0).getContext("2d");
  var myChart4 = new Chart(ctx4, {
    type: "bar",
    data: {
      labels: ["0-4", "5-9", "10-14", "15-19", "20-24", "25-29", "30-34"],
      datasets: [
        {
          label: "PEREMPUAN",
          backgroundColor: ["rgba(235, 22, 22, .7)", "rgba(235, 22, 22, .6)", "rgba(235, 22, 22, .5)", "rgba(235, 22, 22, .4)", "rgba(235, 22, 22, .3)"],
          data: [62, 70, 72, 55, 53, 64, 52],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
})(jQuery);
