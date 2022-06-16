$("#search-bar").keyup(function () {
  let value = $(this).val().toLowerCase();
  $("#list li").each(function () {
    let search = $(this).text().toLowerCase();
    if (search.indexOf(value) > -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});

$("textarea").on("input", function () {
  let number = $("textarea").val().length;
  $("#count")[0].innerHTML = number + " " + `<em>Characters</em>`;
});

$(".mail-card").hide();
$(".jacob").click(function () {
  $(".ali").hide();
  $(".burhan").hide();
  $(".duff").hide();
  $("#messages").hide();
  $(".mail-card").show();
});

$(".duff").hide();
$(".zoe").click(function () {
  $(".ali").hide();
  $(".burhan").hide();
  $("#messages").hide();
  $(".ndirangu").hide();
  $(".mail-card").hide();
  $(".duff").show();
});

$(".burhan").hide();
$(".yahya").click(function () {
  $(".ali").hide();
  $(".mohamed").hide();
  $(".duff").hide();
  $("#messages").hide();
  $(".mail-card").hide();
  $(".burhan").show();
});

$(".ali").hide();
$(".osman").click(function () {
  $(".duff").hide();
  $(".burhan").hide();
  $("#messages").hide();
  $(".mail-card").hide();
  $(".ali").show();
});

$(".mohamed").hide();
$(".abdi").click(function () {
  $(".ali").hide();
  $(".duff").hide();
  $(".burhan").hide();
  $("#messages").hide();
  $(".mail-card").hide();
  $(".mohamed").show();
});

$(".john").hide();
$(".doe").click(function () {
  $(".mohamed").hide();
  $(".ali").hide();
  $(".duff").hide();
  $(".burhan").hide();
  $("#messages").hide();
  $(".mail-card").hide();
  $(".john").show();
});

$(".smith").hide();
$(".steve").click(function () {
  $(".john").hide();
  $(".mohamed").hide();
  $(".ali").hide();
  $(".sadik").hide();
  $(".duff").hide();
  $(".burhan").hide();
  $("#messages").hide();
  $(".mail-card").hide();
  $(".smith").show();
});

$(".jane").hide();
$(".stones").click(function () {
  $(".smith").hide();
  $(".john").hide();
  $(".mohamed").hide();
  $(".ali").hide();
  $(".duff").hide();
  $(".burhan").hide();
  $("#messages").hide();
  $(".mail-card").hide();
  $(".jane").show();
});

$(".sydny").hide();
$(".more").click(function () {
  $(".jane").hide();
  $(".smith").hide();
  $(".john").hide();
  $(".mohamed").hide();
  $(".ali").hide();
  $(".duff").hide();
  $(".burhan").hide();
  $("#messages").hide();
  $(".mail-card").hide();
  $(".sydny").show();
});

$(".sadik").hide();
$(".moha").click(function () {
  $(".sydny").hide();
  $(".jane").hide();
  $(".smith").hide();
  $(".john").hide();
  $(".mohamed").hide();
  $(".ali").hide();
  $(".duff").hide();
  $(".burhan").hide();
  $("#messages").hide();
  $(".mail-card").hide();
  $(".sadik").show();
});

$(".ndirangu").hide();
$(".kawati").click(function () {
  $(".sadik").hide();
  $(".sydny").hide();
  $(".jane").hide();
  $(".smith").hide();
  $(".john").hide();
  $(".mohamed").hide();
  $(".ali").hide();
  $(".duff").hide();
  $(".burhan").hide();
  $("#messages").hide();
  $(".mail-card").hide();
  $(".ndirangu").show();
});

// [
//   {
//     name: "John",
//     messages: [
//       {
//         text: "Hi",
//         timeSent: "20032",
//       },
//       {
//         text: "Hi",
//         timeSent: "20032",
//       },
//     ],
//   },
//   {
//     name: "Ali",
//     messages: [
//       {
//         text: "Hello",
//         timeSent: "20032",
//       },
//       {
//         text: "Hi",
//         timeSent: "20032",
//       },
//     ],
//   },
// ];
