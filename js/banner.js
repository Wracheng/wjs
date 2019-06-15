//需求:在640px以下的屏幕,切换小屏图片,并且宽高比自适应
$(function () {
    var imgs = document.querySelectorAll('.item img');
    function respone() {
        imgs.forEach(function (value,index) {
            var msrc = $(value).data('msrc');
            var psrc = $(value).data('psrc');
            var src = window.innerWidth < 640 ? msrc : psrc;
            $(value).attr('src', src);
        })
    }
    window.addEventListener('resize',respone);
    //运行一次防止刷新还是根据静态布局来,注意$(window)并没有绑定事件,所以就没有调用一说,用调用函数的办法
    respone();
}) 