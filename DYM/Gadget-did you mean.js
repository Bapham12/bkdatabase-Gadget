/**
 * Tự động đổi hướng đến trang được liên kết trong thông báo “Có phải bạn muốn xem?”
 */
$(function () {
    // Đổi hướng từ
    if (window.location.href.indexOf("rdfrom=") >= 0 ) {
        var wpDYMfrom = mw.util.getParamValue("rdfrom");
        var link = mw.html.element("a", {
            href: mw.util.getUrl(wpDYMfrom, {action: "edit", redlink: 1}),
            "class": "new"
        }, wpDYMfrom.replace(/_/g, " "));
        var contentSub = $("<div id='contentSub'>(Tự động đổi hướng từ </div>");
        contentSub.append(link).append(")");
        $("#siteSub").after(contentSub);
        return;
    }
    
    // Có phải bạn muốn xem?
    var target = $("#did-you-mean a:not(.mw-headline-anchor)").first().html();
    var pagetitle = $.trim($("h1").first().text());
    
    if (target && target != pagetitle &&
        mw.util.getParamValue("redirect") != "no" &&
        mw.config.get("wgAction") == "view" &&
        mw.config.get("wgArticleId") === 0 &&
        !mw.config.get("wgRedirectedFrom")) {
        document.location = mw.util.getUrl(target, {
        	rdfrom: pagetitle.replace(/ /g, "_")
        });
    }
});
