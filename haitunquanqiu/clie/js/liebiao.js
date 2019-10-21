$(() => {
    new Promise(function(resolve, reject) {
        $.ajax({
            type: "get",
            url: "../../../server/liebiaoCount.php",
            dataType: "json",
            success: (data) => {
                let res = "";
                // let g;


                for (let i = 0; i < data.count; i++) {
                    res += `<a href="javascript:;">${i + 1}</a>`;
                    // g += i;
                    // console.log(g);
                    // /

                }
                $("#page").html(res);
                $("#page").children().eq(0).addClass("active");

                resolve();
            }
        });
    }).then(function() {
        getDataWithPage(1, 0);
    })


    /* type ==0 默认排序  id */
    /* type ==1 升序排列  价格 */
    /* type ==2 降序排列  价格 */
    function getDataWithPage(page, type) {
        $.ajax({
            type: "get",
            url: "../../../server/liebiaodata.php",
            data: `page=${page}&sortType=${type}`,
            dataType: "json",
            success: (data) => renderUI(data)
        });
    }

    // new Promise(function(resolve, reject) {
    //         $.ajax({
    //             type: "get",
    //             url: "../../../server/liebiaodata.php",
    //             dataType: "json",
    //             success: (data) => {
    //                 let res = "";
    //                 // for (let i = 0; i < data.count; i++) {
    //                 //     res += `<a href="javascript:;">${i + 1}</a>`
    //                 // }
    //                 // $("#page").html(res);
    //                 // $("#page").children().eq(0).addClass("active");

    //                 // resolve();
    //                 console.log(data);

    //                 renderUI(data)
    //             }
    //         });
    //     })
    // .then(function() {
    //     getDataWithPage(1, 0);
    // })

    function renderUI(data) {
        // console.log(data);

        let html = data.map((ele, index) => {
            return `
            <li class="gl-item" data-id=${index+1}>
            <div class="p-cnt" presaletype="0">
                <div class="item hasComment" skuid="J_1950749" hasprice=>
                    <div class="p-img">
                        <a href="" target="_blank">
                            <img src="${ele.src}" class="" loaded="true" style="opacity: 1;">
                        </a>
                    </div>
                    <div class="price-icons">
                        <div class="price">
                            <span psitemsku="J_1950749"><b>¥</b>${ele.price}</span>
                            <div class="sam"></div>
                        </div>
                    </div>
                    <div class="p-name" ischoose="" isfarfetch="">
                        <a href="//item.jd.hk/1950749.html" target="_blank">
                            <em><i class="name-icon-glo">海囤全球</i>${ele.titile}<i class="name-other">${ele.name}
                                  </i></em>
                        </a>
                    </div>
                    <div class="p-conduct">
                        <em></em>
                    </div>
                    <div class="p-buy">
                        <div class="assess">
                            <a href="//item.jd.hk/1950749.html#comments-list" target="_blank" class="comment"><span class="cNum"><b class="comment_num">${ele.criterion}</b> 条评价</span></a>
                        </div>
                    </div>

                    <div class="p-shop-name" isselfdd="true">
                        <p>
                            <a class="p-shop-name-text" href="l" target="_blank">
                                   ${ele.shopName}
                                </a>
                            <a class="p-shop-name-icon shop-icon-new" href="" target="_blank"></a>
                        </p>
                    </div>
                    <div class="p-icons" style="max-width: 200px">
                        <i class="icons serch_zy" data-tips="京东自营，品质保障">
                                    自营
                                </i>

                        <i class="icons serch_pz" data-tips="好品质，看得见">
                                        品质溯源
                                </i>


                    </div>
                    <div class="other">
                        <div class="cj-concern">
                            <i></i>
                            <em>关注</em>
                        </div>
                        <div class="p-operate">
                            <a href="" skuid="1950749" class="p-o-btn contrast J_contrast"><i></i>对比</a>
                        </div>
                        <div class="addCart"><i></i><em>加入购物车</em></div>
                    </div>
                </div>
            </div>
        </li>
            `
        }).join("");
        $(".gl-warp").html(html);
    }
    $("#page").on("click", "a", function() {
            console.log("+++++++");

            getDataWithPage($(this).text(), 1);
            $(this).addClass("active").siblings().removeClass("active");
        })
        // 
    $("#typeBtn").click(function(e) {
        e.stopPropagation();
        getDataWithPage(1, $(this).index());
    })


    // 
    // $("#typeBtn").click(function(e) {
    //     e.stopPropagation()
    //     console.log(11);

    //     getDataWithPage(1, $(this).index());
    // })
    $(".gl-warp").on('click', 'li', function(e) {
        console.log(11111);

        console.log(this);
        location.href = "http://127.0.0.1/haitunquanqiu/clie/html/xiangqingye/xiangqingye.html?" + this.dataset.id;
        e.preventDefault()
    })

    $(".gl-warp").on("click", ".addCart", function(e) {
        e.stopPropagation()
        let good_id = $(this).parents("li").data().id;
        console.log(good_id);
        $.ajax({
            url: "../../../server/cart.php",
            data: { type: "add", good_id: good_id },
            dataType: "json",
            success: function(response) {
                console.log(0000000000);
                if (response.status == "success") {
                    $(".cart_total").text($(".cart_total").text() * 1 + 1);
                }
            }
        });

    })

    $.ajax({
        url: "../../../server/getTotalCount.php",
        dataType: "json",
        success: function({ total }) {
            console.log(total);
            $(".cart_total").text(total);
        }
    });

    $(".cart").click(() => window.location.href = "http://127.0.0.1/haitunquanqiu/clie/html/cat/cart.html");

    $("a").click(function() {
        return false;
    })

})