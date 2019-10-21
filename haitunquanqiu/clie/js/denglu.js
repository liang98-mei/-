$(() => {
    /* 实现切换的功能 */
    $(".login-tab").click(function() {
        console.log(1);
        $(this).addClass(".login-tab-l").siblings().removeClass(".login-tab-l")
            /* 设置当前标签选中，并且排它处理 */
        $(this).addClass("active").siblings().removeClass("active");
        $(this).addClass("login-tab-l").siblings().removeClass("login-tab-l");


    })


    $("#we").click(function() {
        $(".form-y").hide()
        $(".er").show()
    })
    $("#zh").click(function() {
        $(".er").hide()
        $(".form-y").css("display", "block")

    })

    $(".login-btn").click(function() {
        // console.log(2);

        // console.log($(".form-y").find("#loginname"), "++++");

        let usernameVal = $("#loginname").val();
        let passwordVal = $("#nloginpwd").val();
        console.log(usernameVal, $("#loginname"));
        console.log(passwordVal, $("#nloginpwd"));
        console.log(1111);


        $.ajax({
            type: "post",
            url: "../../../server/denglu.php",
            data: `username=${usernameVal}&password=${passwordVal}`,
            dataType: "json",
            success: function(response) {
                /* 登录成功 */
                if (response.status == "success") {
                    /* 跳转到首页 */
                    window.location.href = "http://127.0.0.1/haitunquanqiu/clie/html";
                } else {
                    /* 注册失败： */
                    alert(response.msg);
                }

                /* 登录失败 */
            }
        });

    })



})