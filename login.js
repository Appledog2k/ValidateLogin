$(document).ready(function () {
  $("button").click(function () {
    validate();
    checkLogin();
  });
  function validate() {
    $.validator.addMethod(
      "rulePassword",
      function (value) {
        return /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
          value
        );
      },
      "Mật khẩu phải chứa ít nhất một chữ cái in hoa, một kí tự đặc biệt và một chữ số."
    ),
      $("#form-login").validate({
        rules: {
          myEmail: {
            required: true,
            email: true,
          },
          myPassword: {
            required: true,
            minlength: 12,
            rulePassword: true,
          },
        },
        highlight: function (element) {
          $(element).addClass("show-highlight");
        },
        unhighlight: function (element) {
          $(element).removeClass("show-highlight");
          $(element).addClass("showSuccess");
        },

        messages: {
          myEmail: {
            required: "Email không được để trống.",
            email: "Yêu cầu nhập đúng định dạng email.",
          },
          myPassword: {
            required: "Mật khẩu không được để trống.",
            minlength: "Mật khẩu có độ dài ít nhất 12 kí tự.",
          },
        },
      });
  }

  function checkLogin() {
    var emailValue = $("#email").val();
    var passwordValue = $("#pass").val();
    var messError = $(".error").val();
    if (emailValue == "sdc.vdi@gmail.com" && passwordValue == "12345678@Abc") {
      alert("Đăng nhập thành công");
    } else {
      alert("Tài khoản hoặc mật khẩu không chính xác");
    }
  }
});
