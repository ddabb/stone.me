//单击显示随机文字
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array(
          "若是不专一，生活把你欺",
          "活得有点二，倾慕大白菜",
          "爱好只有三，辣和甜和酸",
          "生日九月四，吃鱼得吐刺",
          "广州年有五，喜欢吃排骨", 
          "绰号为十六，断烟不断肉", 
          "年龄二十七，就懂零和一", 
          "身高一米八，身边缺个她",
          "体重一百九，木有女朋友",
          "二五得一十，爱就得一世", 
          "智商不够百，不怕有人怼", 
          "弱水有三千，一瓢可成仙", 
          "打赏没过万，可悲又可叹",
          "赚它一个亿，回家去种地"
                );
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#FF69B4"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
			3000,
			function() {
			    $i.remove();
			});
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}