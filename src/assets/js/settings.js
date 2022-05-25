$(document).ready(function () {
    $("#main-nav ul li .submenu-opt").click(function () {
        $(".sub-menu").slideUp(200);
        if (
            $(this)
                .parent()
                .hasClass("open")
        ) {
            $("#main-nav ul li").removeClass("open");
            $(this)
                .parent()
                .removeClass("open");
        } else {
            $("#main-nav ul li").removeClass("open");
            $(this)
                .next(".sub-menu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("open");
        }
    });

    $("#main-nav ul li ul li .sub-menu-a").click(function () {
        $(".sub-sub-menu").slideUp(200);
        if (
            $(this)
                .parent()
                .hasClass("open")
        ) {
            $("#main-nav ul li ul li").removeClass("open");
            $(this)
                .parent()
                .removeClass("open");
        } else {
            $("#main-nav ul li ul li").removeClass("open");
            $(this)
                .next(".sub-sub-menu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("open");
        }
    });
});