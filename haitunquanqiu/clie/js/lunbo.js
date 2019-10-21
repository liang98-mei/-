document.writeln("<div class=\'c-box\'>");
document.writeln("<div class=\'c-banner\'>");
document.writeln("        <div class=\'banner\'>");
document.writeln("            <ul>");
document.writeln("                <li><img src=\'https://img12.360buyimg.com/cms/jfs/t1/78038/5/12427/158128/5d9e88dfE66f6e841/9eb0209da7b5c418.jpg\'></li>");
document.writeln("                <li><img src=\'https://img10.360buyimg.com/cms/jfs/t1/67507/37/9707/195044/5d777eebE0a107847/009bf3737fa08d04.jpg\'></li>");
document.writeln("                <li><img src=\'https://img12.360buyimg.com/cms/jfs/t1/77648/13/13002/130812/5da45827E185d26f5/758b1b4d4d0d9e67.jpg\'></li>");
document.writeln("                <li><img src=\'https://img11.360buyimg.com/cms/jfs/t1/66024/36/9965/188261/5d76fe49E1e946e5a/fdbbca2d087a9725.jpg\' alt=\'\'></li>");
document.writeln("                <li><img src=\'https://img11.360buyimg.com/cms/jfs/t1/61877/9/10904/89004/5d84d833Ee841c303/3267c862352575be.jpg\' alt=\'\'></li>");
document.writeln("");
document.writeln("            </ul>");
document.writeln("        </div>");
document.writeln("        <div class=\'nexImg\'>");
document.writeln("            <img src=\'../html/img/nexImg.png\' />");
document.writeln("        </div>");
document.writeln("        <div class=\'preImg\'>");
document.writeln("            <img src=\'../html/img/preImg.png\' />");
document.writeln("        </div>");
document.writeln("        <div class=\'jumpBtn\'>");
document.writeln("            <ul>");
document.writeln("                <li jumpImg=\'0\'></li>");
document.writeln("                <li jumpImg=\'1\'></li>");
document.writeln("                <li jumpImg=\'2\'></li>");
document.writeln("                <li jumpImg=\'3\'></li>");
document.writeln("                <li jumpImg=\'4\'></li>");
document.writeln("            </ul>");
document.writeln("        </div>");
document.writeln("    </div>");
document.writeln("    </div>");
//定时器返回值
var time = null;
//记录当前位子
var nexImg = 0;
//用于获取轮播图图片个数
var imgLength = $(".c-banner .banner ul li").length;
var col = ["rgb(138, 14, 4)", "rgb(109, 53, 240)", "rgb(228, 209, 156)", "rgb(214, 56, 124)", "rgb(208, 44, 80)"]
    //当时动态数据的时候使用,上面那个删除
    // var imgLength =0;
    //设置底部第一个按钮样式
$(".c-banner .jumpBtn ul li[jumpImg=" + nexImg + "]").css("background-color", "black");

//页面加载
$(document).ready(function() {
    // dynamicData();
    //启动定时器,设置时间为3秒一次
    //intervalImg()
    $(".banner li:eq(0)").css({ opacity: 1, display: "block" })
    time = setInterval(intervalImg, 3000);
});

//点击上一张
$(".preImg").click(function() {
    //清楚定时器
    clearInterval(time);
    var nowImg = nexImg;
    nexImg = nexImg - 1;
    console.log(nexImg);
    if (nexImg < 0) {
        nexImg = imgLength - 1;
    }
    //底部按钮样式设置
    $(".c-banner .jumpBtn ul li").css("background-color", "white");
    $(".c-banner .jumpBtn ul li[jumpImg=" + nexImg + "]").css("background-color", "black");

    //将当前图片试用绝对定位,下一张图片试用相对定位
    $(".c-banner .banner ul img").eq(nowImg).css("position", "absolute");
    $(".c-banner .banner ul img").eq(nexImg).css("position", "relative");

    //轮播淡入淡出
    $(".c-banner .banner ul li").eq(nexImg).css("display", "block");
    $(".c-banner .banner ul li").eq(nexImg).stop().animate({
        "opacity": 1
    }, 1000);
    $(".c-banner .banner ul li").eq(nowImg).stop().animate({
        "opacity": 0
    }, 1000, function() {
        $(".c-banner ul li").eq(nowImg).css("display", "none");
    });

    //启动定时器,设置时间为3秒一次
    time = setInterval(intervalImg, 3000);
})

//点击下一张
$(".nexImg").click(function() {
    clearInterval(time);
    intervalImg();
    time = setInterval(intervalImg, 3000);
})

//轮播图
function intervalImg() {
    if (nexImg < imgLength - 1) {
        nexImg++;
    } else {
        nexImg = 0;
    }
    $(".c-box").css({ background: col[nexImg] })
        //将当前图片试用绝对定位,下一张图片试用相对定位
    $(".c-banner .banner ul img").eq(nexImg - 1).css("position", "absolute");
    $(".c-banner .banner ul img").eq(nexImg).css("position", "relative");

    $(".c-banner .banner ul li").eq(nexImg).css("display", "block");
    $(".c-banner .banner ul li").eq(nexImg).stop().animate({
        "opacity": 1
    }, 1000);
    $(".c-banner .banner ul li").eq(nexImg - 1).stop().animate({
        "opacity": 0
    }, 1000, function() {
        $(".c-banner .banner ul li").eq(nexImg - 1).css("display", "none");
    });
    $(".c-banner .jumpBtn ul li").css("background-color", "white");
    $(".c-banner .jumpBtn ul li[jumpImg=" + nexImg + "]").css("background-color", "black");
}

//轮播图底下按钮
//动态数据加载的试用应放在请求成功后执行该代码,否则按钮无法使用
$(".c-banner .jumpBtn ul li").each(function() {
    //为每个按钮定义点击事件
    $(this).click(function() {
        clearInterval(time);
        $(".c-banner .jumpBtn ul li").css("background-color", "white");
        jumpImg = $(this).attr("jumpImg");
        if (jumpImg != nexImg) {
            var after = $(".c-banner .banner ul li").eq(jumpImg);
            var befor = $(".c-banner .banner ul li").eq(nexImg);

            //将当前图片试用绝对定位,下一张图片试用相对定位
            $(".c-banner .banner ul img").eq(nexImg).css("position", "absolute");
            $(".c-banner .banner ul img").eq(jumpImg).css("position", "relative");

            after.css("display", "block");
            after.stop().animate({
                "opacity": 1
            }, 1000);
            befor.stop().animate({
                "opacity": 0
            }, 1000, function() {
                befor.css("display", "none");
            });
            nexImg = jumpImg;
        }
        $(this).css("background-color", "black");
        time = setInterval(intervalImg, 3000);
    });
});