$(document).ready(function () {

    let count = $(".counter .counting")
    $(count).click(function(){
        console.log("aue");
    })
    var counter = 0

    $(".minus").click(function () {
        console.log("aue");
        if (
            counter > 0
        ) {
            counter--
            $(count).html(counter)
        }
        else {
            alert("You cant buy less than 0")
        }

    })

    $(".plus").click(function () {
        counter++
        $(count).html(counter)
    })

    console.log($(".littleimage img"));
    $(".littleimage img").click((e) => {
        $(".bigImage img").attr("src", e.target.src);
    })

    let titles = document.querySelectorAll("#tabs .titles .title")

    let paragraphs = document.querySelectorAll(".paragraphs div")

    let buttons = document.querySelectorAll("#tabs .titles .title button")



    
    $(buttons[0]).addClass("activeTab")

    $(".powerofflower").addClass("active")
    titles.forEach(title => {

        $(title).click(function () {
            let dataid = $(title).attr("data-id")
            paragraphs.forEach(paragraph => {
                $(paragraph).removeClass("active")
            })
            buttons.forEach(b=>{
                $(b).removeClass("activeTab")
            })

            let paragraph = Array.from(document.getElementsByClassName(dataid))
            paragraph.forEach(p=>{
                
                $(p).addClass("active")
            })
            let thisbtn = $(this).children()
            $(thisbtn).addClass("activeTab")
            
            
            
            



        })
    });
    // $(titles).each((title)=>{
    //     $(title).click(function(){
    //         console.log(title);
    //     })
    // })


})