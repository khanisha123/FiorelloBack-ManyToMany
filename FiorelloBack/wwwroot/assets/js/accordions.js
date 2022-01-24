$(document).ready(function(){

    $(".topRightAccordion .accordion:first-child").children().first().addClass("activeTab")
    $(".topRightAccordion .accordion:first-child").children().last().slideDown()
    $(".topRightAccordion .accordion:first-child").children().first().children().first().children().first().addClass("activeIcon")

    $(".topLeftAccordion .accordion:first-child").children().first().addClass("activeTab")
    $(".topLeftAccordion .accordion:first-child").children().last().slideDown()
    $(".topLeftAccordion .accordion:first-child").children().first().children().first().children().first().addClass("activeIcon")

    

    $(".topRightAccordion .title-icon").click(function(){
        let next = $(this).next()
        
        let icon = $(this).children(".icon").children("i")
        
        $(".topRightAccordion .title-icon").not(this).removeClass("activeTab")
        $(".topRightAccordion .article").not(next).slideUp()
        $(".topRightAccordion .title-icon .icon i").not(icon).removeClass("activeIcon")



        $(next).slideToggle()
        $(icon).toggleClass("activeIcon")
        $(this).toggleClass("activeTab")
    })

    $(".topLeftAccordion .title-icon").click(function(){
        let next = $(this).next()
        
        let icon = $(this).children(".icon").children("i")
        
        $(".topLeftAccordion .title-icon").not(this).removeClass("activeTab")
        $(".topLeftAccordion .article").not(next).slideUp()
        $(".topLeftAccordion .title-icon .icon i").not(icon).removeClass("activeIcon")



        $(next).slideToggle()
        $(icon).toggleClass("activeIcon")
        $(this).toggleClass("activeTab")
    })

    $(".bottomLeftAccordion .title-icon").click(function(){
        let next = $(this).next()
        
        let icon = $(this).children(".icon").children("i")
        
        $(".bottomLeftAccordion .title-icon").not(this).removeClass("activeTab")
        $(".bottomLeftAccordion .article").not(next).slideUp()
        $(".bottomLeftAccordion .title-icon .icon i").not(icon).removeClass("activeIcon")



        $(next).slideToggle()
        $(icon).toggleClass("activeIcon")
        $(this).toggleClass("activeTab")
    })

    $(".bottomRightAccordion .title-icon").click(function(){
        let next = $(this).next()
        
        let icon = $(this).children(".icon").children("i")
        
        $(".bottomRightAccordion .title-icon").not(this).removeClass("activeTab")
        $(".bottomRightAccordion .article").not(next).slideUp()
        $(".bottomRightAccordion .title-icon .icon i").not(icon).removeClass("activeIcon")



        $(next).slideToggle()
        $(icon).toggleClass("activeIcon")
        $(this).toggleClass("activeTab")
    })

   
    
})