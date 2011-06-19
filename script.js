if (window.location.pathname.indexOf("browse.php") != -1) {
    ajaxTorrentsPage();
}

function ajaxTorrentsPage() {
    $("#tabela1").next().find("a").click(function () {
        var link = $(this).attr("href");
        $.ajax({
            url: link,
            success: function (data) {
                $("#tabela1").html($(data).find("#tabela1").html());
                $("#tabela1").next().html($(data).find("#tabela1").next().html());
                ajaxTorrentsPage();
            }
        });
        return false;
    });
}