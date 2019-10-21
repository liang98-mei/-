$(() => {
    $("#usernameID").keyup(function() {
        let val = $(this).val().trim();
        // $("#usernameID").val("ddd");
        $("#phoneID").val("18689429781");
        $("#passwordA,#passwordB").val("123456");

        $("#msgCode").val("999");
        // console.log(val);
        if (/^[a-zA-Z]{2,6}$/.test(val)) {
            // $ $(this).siblings(".form-group__message").addClass("")

            $(this).siblings(".form-group__message").text("");
        } else {
            $(this).parents(".username").addClass("form-group-error");
            $(this).siblings(".form-group__message").text("用户名不规范！");
        }
    })



    $("#phoneID").keyup(function() {
        let val = $(this).val().trim();
        console.log(val);

        if (/^1[3-9]\d{9}$/.test(val)) {
            $(this).parents(".username").removeClass("form-group-error");
            $(this).siblings(".form-group__message").text("")
        } else {
            $(this).siblings(".form-group__message").text("手机号码不正确")
        }

    });
    console.log("#passwordA");

    $("#passwordA").keyup(function() {
        console.log(1);

        let val = $(this).val().trim()
        console.log(val);
        if (/^[0-9a-zA-Z]{6,10}$/.test(val)) {
            $(this).siblings(".form-group__message").text("")
        } else {
            $(this).siblings(".form-group__message").text("密码不符合规范");
        }
    });
    $("#passwordB").blur(function() {
        let val = $(this).val().trim();
        let targetval = $("#passwordA").val().trim()
        console.log(val);

        if (targetval == val) {
            $(this).siblings(".form-group__message").text("");

        } else {
            $(this).siblings(".form-group__message").text("密码不一致");
        }
    });

    let captcha1 = new CaptchaMini({
        fontSize: 30,
        length: 5,
        content: "adshdfsnf234j35uetege5",
        lineNum: 3,
        dotNum: 20
    });
    let imgCode;
    console.log("#captcha");

    captcha1.draw(document.querySelector('#captcha'), r => {
        console.log("验证码 = " + r);
        imgCode = r;
        //$("#imageCode").val(imgCode);
        console.log($("#imageCode"), );

        $("#imageCode").on("input", function() {
            if ($("#imageCode").val() == r) {
                console.log(1111);
                $(this).siblings(".form-group__message").text("");

            } else {
                console.log(2222);
                $(this).siblings(".form-group__message").text("图形验证码不正确!");

            }

        })
    });

    // 
    let randomNumber;

    function getRandom(min, max) {
        return parseInt(Math.random() * (max - min + 1)) + min
    }
    randomNumber = 999;
    $("#msgCodeBtn").click(function() {
        console.log(1);

        $("#phoneID").trigger("keyup");
        let flag = $(".phone").hasClass("form-group-error");

        if (flag) return;
        // randomNumber = getRandom(1000, 9999);
        // randomNumber = 999;
        $.ajax({
            type: 'post',
            url: 'http://route.showapi.com/28-1',
            dataType: 'json',
            data: {
                "showapi_appid": '91032', //这里需要改成自己的appid
                "showapi_sign": 'd57b19c8d2d44aef94aee464768a38d8', //这里需要改成自己的应用的密钥secret
                "mobile": $("#phoneID").val(),
                "content": `{"name":"文顶顶","code":${randomNumber},"minute":"3","comName":"脑子进水集团"}`,
                "tNum": "T150606060601",
            },
            success: (result) => console.log(result)
        });
    });

    // 
    $("#registerBtn").click(function() {

        $("#usernameID").trigger("keyup");
        $("#phoneID").trigger("keyup");
        $("#passwordA").trigger("keyup");
        $("#passwordB").trigger("blur");

        if ($(".form-group-error").length != 0) return;
        if ($("#imageCode").val() != imgCode) {
            console.log(imgCode);
            alert("图形验证码不正确!");
            return;
        }

        console.log($("#msgCode").val(), "++", randomNumber);

        if ($("#msgCode").val() != randomNumber + "") {
            alert("手机验证码不正确!");
            return;
        }
        // 
        $.ajax({
            type: "post",
            url: "../../../server/zhuce.php",
            data: `username=${$("#usernameID").val()}&password=${$("#passwordA").val()}&phone=${$("#phoneID").val()}`,
            dataType: "json",
            success: function(response) {
                /* 注册成功： */
                console.log(response, response.status, "+++++++");

                if (response.status == "ok") {
                    console.log("++++");

                    /* 跳转到首页 */

                    window.location.href = "http://127.0.0.1/haitunquanqiu/clie/html/login/denglu.html";
                } else {
                    /* 注册失败： */
                    alert(response.msg);
                }
            }
        });


    })















})