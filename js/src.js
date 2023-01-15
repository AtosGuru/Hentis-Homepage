$(document).ready(function () {
  // $("#token_selected_swap_form").hide();

  $("#close_notifi").click(function () {
    $("#notifi").hide();
  });

  $("#close_token_2").click(function () {
    $("#token_select_modal").hide();
  });

  $("#close_setting_btn").click(function () {
    $("#setting_modal").hide();
  });

  $("#swap_success_close").click(function () {
    $("#swap_success_modal").hide();
  });

  $("#swap_btn_fail").click(function () {
    $("#swap_fail_modal").show();
  });

  $("#swap_fail_close").click(function () {
    $("#swap_fail_modal").hide();
  });

  $(".common-1").click(function () {
    $(".common-1").removeClass("active");
    $(this).addClass("active");
  });

  $(".common-2").click(function () {
    $(".common-2").removeClass("active");
    $(this).addClass("active");
    $(".slippage_percent").html($(this).html());
  });

  $("#changeSelectorOrder_1").click(function () {
    $("#token_selector_111").toggleClass("hidden");
    $("#token_selector_112").toggleClass("hidden");
    $("#token_selector_121").toggleClass("hidden");
    $("#token_selector_122").toggleClass("hidden");
  });

  $("#changeSelectorOrder_2").click(function () {
    $("#token_selector_211").toggleClass("hidden");
    $("#token_selector_212").toggleClass("hidden");
    $("#token_selector_221").toggleClass("hidden");
    $("#token_selector_222").toggleClass("hidden");
  });

  $("#max_3").click(function () {
    $("#amount_3").val("2.508298");
  });

  $("#max_111").click(function () {
    $("#amount_111").val("2.508");
  });
  $("#max_121").click(function () {
    $("#amount_121").val("2.508");
  });

  $("#max_211").click(function () {
    $("#amount_211").val("2.508");
  });
  $("#max_212").click(function () {
    $("#amount_212").val("159.02");
  });
  $("#max_221").click(function () {
    $("#amount_221").val("159.02");
  });
  $("#max_222").click(function () {
    $("#amount_222").val("2.508");
  });
});

function tokenSelected() {
  $("#token_select_modal").hide();
  $("#select_token_form").hide();
  $("#token_selected_swap_form").removeClass("hidden");
}

function openSettingModal() {
  $("#setting_modal").show();
}

function openSelectTokenModal() {
  $("#token_select_modal").show();
}

function openSwapSuccessModal() {
  $("#swap_success_modal").show();
}

function closeSwapSuccessModal() {
  $("#swap_success_modal").hide();
}
