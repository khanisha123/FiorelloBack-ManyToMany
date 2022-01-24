$(document).ready(function () {

    AOS.init();

    $(".nav-left a").click(function (e) {
        e.preventDefault();
        window.open("index.html", "_self")
    })

    $(".home li:nth-child(1) a").click(function (e) {
        e.preventDefault();
        window.open("index.html", "_self")
    })

    $(".producttypes li:nth-child(2) a").click(function (e) {
        e.preventDefault();
        window.open("orangeamarylls.html", "_self")
    })

    $(".classic li:nth-child(2) a").click(function (e) {
        e.preventDefault();
        window.open("tabs.html", "_self")
    })

    $(".classic li:nth-child(1) a").click(function (e) {
        e.preventDefault();
        window.open("accordions.html", "_self")
    })



    $(".infographic li:nth-child(5) a").click(function (e) {
        e.preventDefault();
        window.open("progressbar.html", "_self")
    })





    let stickynav = $(".stickyNav")
    let goUpBtn = $(".goHeadButton")
    $(window).scroll(function () {

        var yPos = $(window).scrollTop()

        if (yPos > 500) {
            $(stickynav).addClass("animate")
            $(goUpBtn).fadeIn()
        }
        else {
            $(stickynav).removeClass("animate")
            $(goUpBtn).fadeOut()
        }

        $(goUpBtn).click(function () {
            $(window).scrollTop(0)
        })


    })


    // console.log(basketlen.length);


    $(".search-shopping .shopping").hover(function () {

        let basketlen = JSON.parse(localStorage.getItem("basket"))
        if (basketlen.length == 0) {
            // alert("basket is empty")
            $(".basketAlert").css("opacity","100%")
        }
        else {
    
    
            $(".search-shopping .basketList").css("height", "220px")
    
    
    
    
    
        }

    },


        function () {
            $(".basketAlert").css("opacity","0%")

            $(".search-shopping .basketList").css("height", "0%")


        }
    )

    $(".search-shopping .basketList").hover(function () {
        $(this).css("height", "220px")
    }, function () {
        $(this).css("height", "0%")
    })


   

    // $(".search-shopping .shopping").hover(function(){
    //     $(".search-shopping .basketList").slideDown()
    // },function(){
    //     $(".search-shopping .basketList").slideUp()
    // })

    // $(".search-shopping .basketList").hover(function(){
    //     $(this).slideDown()
    // },function(){
    //     $(this).slideUp()
    // })



    $(".menu-icon i").click(function () {
        $(".menu").addClass("active")

    })
    $(".myClose").click(function () {
        $(".menu").removeClass("active")
    })


    $(".classic li:nth-child(1) a").click(function () {
        console.log("aue");
    })

    $(".menu .menu-nav-links li.1 a").click(function (e) {


        e.preventDefault();
        let sublink = $(this).parent().children(".sublinks")

        let icon = $(this).children().last()
        console.log("aue");

        $(icon).toggleClass("customAnimate")
        $(sublink).slideToggle()
    })

    $(".menu .menu-nav-links li .sublinks li").click(function (e) {
        e.stopPropagation()

        e.preventDefault()
        let subsublink = $(this).children(".sub-subLinks")
        $(subsublink).slideToggle()



        // $(".menu .menu-nav-links li.1").children(".sublinks").slideUp()

    })

    $("#menuHome").click(function () {
        window.open("index.html", "_self")
    })

    $("#standartproduct").click(function () {
        window.open("orangeamarylls.html", "_self")
    })

    $("#accordionMob").click(function () {
        window.open("accordions.html", "_self")
    })


    $("#progressMob").click(function () {
        window.open("progressbar.html", "_self")
    })


    $("#tabsMob").click(function () {
        window.open("tabs.html", "_self")
    })





    $(".search-icon i").click(function (e) {
        e.stopPropagation()
        $(".search-icon input").slideToggle()
    })
    $(window).click(function () {

        $(".search-icon input").slideUp()
    })



    $(".addToCardBtn").click(function () {
        console.log("CLICKED");

        if (!localStorage.getItem("basket")) {
            localStorage.setItem("basket", JSON.stringify([]));
        }


        let basket = JSON.parse(localStorage.getItem("basket"));

        let dataid = $(this).attr("data-id");

        let name = $(this).parent().parent().children(".productTitle").children("p").text();

        let image = $(this).parent().parent().children(".productImage").children("img").attr("src");

        let price = $(this).parent().children().last().text();

        let product = { id: dataid, name, image, price, count: 1 };

        let existedProduct = basket.find(prod => prod.id == product.id);





        if (existedProduct) {
            existedProduct.count++;
        } else {
            basket.push(product);
        }

        localStorage.setItem("basket", JSON.stringify(basket));
        cardCounter();
        totalPrice();
        cardProducts();
        console.log(basket.length);

    })

    cardProducts();
    function cardProducts() {
        if (!localStorage.getItem("basket")) {
            localStorage.setItem("basket", JSON.stringify([]));
        }
        let basket = JSON.parse(localStorage.getItem("basket"));
        let listProducts = document.querySelector(".listProducts");
        listProducts.innerHTML = "";

        basket.forEach((product) => {
            listProducts.innerHTML += `
                                    <div class="product">
                                        <div class="image">
                                            <img src="${product.image}">
                                        </div>
                                        <div>
                                            <p class="product-name">${product.name}</p>
                                            <p>
                                                <span class="product-count">
                                                    ${product.count}
                                                </span>
                                                X
                                                <span class="product-price">
                                                    ${product.price}$
                                                </span>
                                            </p>
                                        </div>
                                        <div>
                                            <div>
                                                <button class="btn-product-delete" data-id="${product.id}">x</button>
                                            </div>
                                        </div>
                                    </div>
                                    `
        })
        deleteProduct();
        // cardCounter();
        // cardProducts();
    }

    function deleteProduct() {
        $(".btn-product-delete").click((e) => {
            const basket = JSON.parse(localStorage.getItem("basket"));
            const btn = e.target;
            const productId = $(btn).attr("data-id");
            console.log(productId);
            localStorage.setItem("basket", JSON.stringify(basket.filter(prod => prod.id !== productId)));
            cardCounter();
            cardProducts();
            totalPrice();
            console.log(basket.length);
        });
    }

    cardCounter()

    function cardCounter() {
        if (!localStorage.getItem("basket")) {
            localStorage.setItem("basket", JSON.stringify([]));
        }

        let basket = JSON.parse(localStorage.getItem("basket"));
        let totalCount = 0;
        basket.forEach(p => {
            totalCount += p.count;
        });

        $(".bag-count p").text(totalCount);
    }


    totalPrice();
    function totalPrice() {
        if (!localStorage.getItem("basket")) {
            localStorage.setItem("basket", JSON.stringify([]));
        }

        let basket = JSON.parse(localStorage.getItem("basket"))

        let Total = basket.reduce((total, product) => {
            return total += product.count * product.price
        }, 0)

        $(".priceText").children().last().text(Total)
        $(".shop-basket span:nth-child(3)").text(Total)

    }




    // $(".product .productPrice").children().first().click(function(){


    // })

}
)
