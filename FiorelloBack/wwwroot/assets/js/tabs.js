$(document).ready(function () {
    $(".top-tabs .topLeftTab .titles").children().first().children("button").addClass("activeTab")
    $(".top-tabs .topLeftTab .articles").children().first().addClass("activeArticle")

    $(".top-tabs .topRightTab .titles").children().first().children("button").addClass("activeTab")
    $(".top-tabs .topRightTab .articles").children().first().addClass("activeArticle")

    $(".mid-tabs .midTab .articles").children().first().addClass("activeArticle")
    $(".mid-tabs .midTab .titles").children().first().children("button").addClass("activeFilter")
   
    $(".bottom-tabs .botTab .titles").children().first().children("button").addClass("activeTab")
    $(".bottom-tabs .botTab .articles").children().first().addClass("activeArticle")
   


    $(".top-tabs .topLeftTab .titles .title").click(function(){
        let dataid = $(this).attr("data-id")

        

        let btn = $(this).children().first()
        let article = document.querySelector(`.topLeftTab .${dataid}`)
        $(".top-tabs .topLeftTab .titles .title button").not(btn).removeClass("activeTab")
        $(btn).addClass("activeTab")
        $(".top-tabs .topLeftTab .articles .article").not(article).removeClass("activeArticle")
        $(article).addClass("activeArticle")


    })

    $(".top-tabs .topRightTab .titles .title").click(function(){
        let dataid = $(this).attr("data-id")

        

        let btn = $(this).children().first()
        let article = document.querySelector(`.topRightTab .${dataid}`)
        $(".top-tabs .topRightTab .titles .title button").not(btn).removeClass("activeTab")
        $(btn).addClass("activeTab")
        $(".top-tabs .topRightTab .articles .article").not(article).removeClass("activeArticle")
        $(article).addClass("activeArticle")


    })

    $(".mid-tabs .midTab .titles .title").click(function(){
        let dataid = $(this).attr("data-id")
        let btn = $(this).children().first()
        let article = document.querySelector(`.midTab .${dataid}`)
        $(".mid-tabs .midTab .titles .title button").not(btn).removeClass("activeFilter")
        $(btn).addClass("activeFilter")
        $(".mid-tabs .midTab .articles .article").not(article).removeClass("activeArticle")
        $(article).addClass("activeArticle")


    })

    $(".bottom-tabs .botTab .titles .title").click(function(){
        let dataid = $(this).attr("data-id")
        let btn = $(this).children().first()
        let article = document.querySelector(`.botTab .${dataid}`)
        console.log(article);
            $(".bottom-tabs .botTab .titles .title button").not(btn).removeClass("activeTab")
            $(btn).addClass("activeTab")
        $(".botTab .articles .article").not(article).removeClass("activeArticle")
        $(article).addClass("activeArticle")
    })

    



})