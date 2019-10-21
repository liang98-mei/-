// $(() => {
// $.ajax({
//     type: "post",
//     url: "../../server/shouye.jsonrl",
//     // data: "data",
//     // dataType: "dataType",
//     success(function(data) {
//         let
//     })
// });
$(() => {


    var data = {
        "title": ["全球购自营", "自营个护美妆", "自营服饰箱包", "自营数码电器"],
        "logo": [

            "https://img13.360buyimg.com/cms/jfs/t6019/217/7533625822/30320/7327c3a1/597ecd8cN669999f2.jpg!q90",
            "https://img13.360buyimg.com/cms/jfs/t6019/217/7533625822/30320/7327c3a1/597ecd8cN669999f2.jpg!q90"
        ],
        "src": [
            "http://img13.360buyimg.com/cms/jfs/t6019/217/7533625822/30320/7327c3a1/597ecd8cN669999f2.jpg",
            "https://img10.360buyimg.com/cms/jfs/t1/21097/7/9193/29345/5c7c8391E7ea9ed1c/9998dd0e9d8d0a1b.jpg!q90",
            "https://img10.360buyimg.com/n1/jfs/t1/30372/28/10216/44326/5cadbfbaEc82b8490/359d2623e1f41d0c.jpg!q90",
            "https://img10.360buyimg.com/n1/jfs/t7831/132/289431591/335838/456933a0/599123c9N494d9d9f.jpg!q90",
            "https://img10.360buyimg.com/n1/jfs/t1/3509/8/13672/55735/5bd905f1E64a6c879/57fca54d8bc548f7.jpg!q90",
            "https://img10.360buyimg.com/n1/jfs/t1/9293/12/15984/489708/5c74f00cEe7dd0d8d/f0f70411a7319829.jpg!q90"
        ],
        "sr": [

            "https://img10.360buyimg.com/cms/jfs/t1/21097/7/9193/29345/5c7c8391E7ea9ed1c/9998dd0e9d8d0a1b.jpg!q90",
            "https://img10.360buyimg.com/n1/jfs/t1/30372/28/10216/44326/5cadbfbaEc82b8490/359d2623e1f41d0c.jpg!q90",
            "https://img10.360buyimg.com/n1/jfs/t7831/132/289431591/335838/456933a0/599123c9N494d9d9f.jpg!q90",
            "https://img10.360buyimg.com/n1/jfs/t1/3509/8/13672/55735/5bd905f1E64a6c879/57fca54d8bc548f7.jpg!q90",
            "https://img10.360buyimg.com/n1/jfs/t1/9293/12/15984/489708/5c74f00cEe7dd0d8d/f0f70411a7319829.jpg!q90"
        ],
        "desc": [
            "飞利浦（PHILIPS）S7370/12 电动剃须刀 5向三刀头干湿两用",
            "戴森 DYSON Supersonic HD01智能电吹风 吹风机 风筒 紫红色",
            "戴森 DYSON V8 Absolute 家用手持无线大功率强力 除螨吸尘器 6吸头",
            "日本进口 乐敦（ROHTO）Melano CC 药用美白精华液 20ml/支 淡斑淡痘印祛黄美白",
            "韩国进口 VIDIVICI女神蚕丝洗面奶 120ml/支 温和补水 滋润保湿",
            "日本 肌美精（Kracie）立体3D高浸透胶原蛋白保湿弹力面膜（玫红）4片（新版）"
        ],
        "price": [
            "¥715",
            "¥2350",
            "￥2343",
            "¥119",
            "¥142",
            "¥68"
        ],
        "commit": [
            "9300+",
            "6600+",
            "1100+",
            "25万+",
            "6.4万+",
            "14万+"
        ]
    }


    function fn() {
        var res = "";
        // console.log(data);


        for (var i = 0, len = data.title.length; i < len; i++) {
            // console.log(data.title);
            res += `<li>
        <span class="tWrapper">
            <span class="txt">${data.title[i]}</span>
        <i></i>
        <span class="arror-up"></span>
        </span>
        </li>`;

        }
        // var oul = document.getElementById("ghg");
        $("#ghg").append(res);
        var res1 = "";
        // console.log(data.logo);
        for (let j = 0, len = data.logo.length; j < len; j++) {
            // const element = array[j];
            res1 += ` <a href="" class="item hasComment">
            <img src="https://img13.360buyimg.com/cms/jfs/t6019/217/7533625822/30320/7327c3a1/597ecd8cN669999f2.jpg!q90" alt="" class="itemBg">
            <span class="details">
                    <span class="area">
                       
                        <span class="brandName">a2</span>
            <span class="split"></span>
            <span class="from">广州保税区发货</span>
            </span>
            <span class="itemName">澳洲a2 Platinum 白金版婴幼儿奶粉3段900g（1-3岁）新西兰原装进口</span>
            <span class="comment">
                       
            
            <span class="tips">为了获取珍贵的a2蛋白质，每一头奶牛，都刚经过DNA的检测，造就了奶粉中的黄金贵族~</span>
            <span class="price">
                        <span><b>¥</b>210</span>
            <del>¥288</del>
            </span>
            </span>
        </a>`
            console.log(res1);



        }
        // console.log(111111111111);

        $("#top1").append(res1)
        var res3 = "";
        for (var r = 0; r < 6; r++) {
            data.src[r];
            data.desc[r];
            data.price[r];
            data.commit[r];
            res3 += `<li>
            <a href="">
                <img src=${data.src[r]} class="itemImg" style="opacity: 1;">

                <span class="name">${data.desc[r]}</span>
                <span class="price">
                        <span>${data.price[r]}</span>
                </span>
                <span class="comment"><span class="cNum"><b class="comment_num">${ data.commit[r]}</b> 条评价</span></span>
            </a>
        </li>`

            // console.log(res3);



        }

        $("#ghg1").append(res3)

    }

    fn()



})












// /* 001-先发送网络请求获取数据 */
// $.getJSON("../../server/shouye.json", (data) => {
//     // console.log("data", data);

//     /* 002-根据数据来渲染页面(面向对象-设计Class) */
//     var manager1 = new Manager(data);
//     manager1.init();
//     // console.}     
// })
// })