var menu = {

    menuGroupTopList : {

    },
    init : function(){
        // 初始化active
        if($("#shopmenu-category li.active").length == 0){
            $("#shopmenu-category li:nth-child(1)").addClass('active');

        }

        //初始化高度 菜单高度
        $(".shopmenu-list ul.listgroup").each(function (index, item) {
            var top = $(item).offset().top;
            var groupIndex = $(item).data("id");
            if(index == 0){ top = 0;}

            menu.menuGroupTopList['group'+groupIndex] = top;
        });
        //最初将菜单移动到最高高度
        $('html,body').animate({scrollTop: 0+'px'}, 300);
        //事件
        menu.event();

    },
    event : function(){
        //点击菜单
        $("ul.list-group").on('touchstart','.list-item', function (e) {
            e.stopPropagation();
            var btn = $(this);
            $("ul.list-group .list-item.active").removeClass('active');
            btn.addClass('active');
            //显示本类菜品
            var index = btn.data("index");
            //var menuList = $(".shopmenu-list .listgroup[data-id="+index+"]");
            //var currentMenuTop = menuList.offset().top;
            var currentMenuTop = menu.menuGroupTopList['group'+index];
            $('html,body').animate({scrollTop: currentMenuTop+'px'}, 300);
        });

        //滚动条滚动
        /*
        $(window).scroll(function(e) {
            e.stopPropagation();
            $(".shopmenu-list ul.listgroup").each(function (index, item) {
                //alert(index);
                var groupId = $(item).data("id");
                var groupTop = menu.menuGroupTopList['group'+index];
                var top = $(window).scrollTop();
                if(top == groupTop){
                    //菜单栏改为active
                    $("ul.list-group .active").removeClass('active');
                    $("ul.list-group .list-item[data-index="+groupId+"]").addClass('active');
                }
            });
        });
        */
        //$('.actGotop').click(function(){
        //$('html,body').animate({scrollTop: '0px'}, 800);});
    }
}