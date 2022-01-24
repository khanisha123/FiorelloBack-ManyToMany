$(document).ready(function () {

    var growingSpan1 = $(".top .first .infos .percentage span:first-child")
    var currValue1 = parseInt($(".first .infos .percentage").children().first().text())
    $(".top  .first .bar").css("width", "95%")
    var nextValue1 = 95
    var different1 = nextValue1 - currValue1

    var step = (0 < different1 ? 1 : -1);

    for (let i = 0; i < Math.abs(different1); i++) {

        setTimeout(function () {
            currValue1 += step
            growingSpan1.text(currValue1)
        }, 25 * i);


    }

    var growingSpan2 = $(".top  .sec .infos .percentage span:first-child")
    var currValue2 = parseInt($(" .sec .infos .percentage").children().first().text())
    $(".top  .sec .bar").css("width", "80%")
    var nextValue2 = 80
    var different2 = nextValue2 - currValue2

    var step = (0 < different2 ? 1 : -1);

    for (let i = 0; i < Math.abs(different2); i++) {

        setTimeout(function () {
            currValue2 += step
            growingSpan2.text(currValue2)
        }, 25 * i);


    }

    var growingSpan3 = $(".top  .third .infos .percentage span:first-child")
    var currValue3 = parseInt($(" .third .infos .percentage").children().first().text())
    $(".top  .third .bar").css("width", "55%")
    var nextValue3 = 55
    var different3 = nextValue3 - currValue3

    var step = (0 < different3 ? 1 : -1);

    for (let i = 0; i < Math.abs(different3); i++) {

        setTimeout(function () {
            currValue3 += step
            growingSpan3.text(currValue3)
        }, 25 * i);


    }

    $(window).on("scroll", (function () {
        let scrollTop = $(window).scrollTop()
        console.log(scrollTop);
        if (scrollTop > 65) {
            var growingSpan1 = $(".bottomBars .first .infos .percentage span:first-child")
            var currValue1 = parseInt($(".bottomBars .first .infos .percentage").children().first().text())
            $(".bottomBars  .first .bar").css("width", "95%")
            var nextValue1 = 95
            var different1 = nextValue1 - currValue1

            var step = (0 < different1 ? 1 : -1);

            for (let i = 0; i < Math.abs(different1); i++) {

                setTimeout(function () {
                    currValue1 += step
                    growingSpan1.text(currValue1)
                }, 25 * i);


            }

            var growingSpan2 = $(".bottomBars  .sec .infos .percentage span:first-child")
            var currValue2 = parseInt($(".bottomBars .sec .infos .percentage").children().first().text())
            $(".bottomBars  .sec .bar").css("width", "80%")
            var nextValue2 = 80
            var different2 = nextValue2 - currValue2

            var step = (0 < different2 ? 1 : -1);

            for (let i = 0; i < Math.abs(different2); i++) {

                setTimeout(function () {
                    currValue2 += step
                    growingSpan2.text(currValue2)
                }, 25 * i);


            }

            var growingSpan3 = $(".bottomBars  .third .infos .percentage span:first-child")
            var currValue3 = parseInt($(".bottomBars .third .infos .percentage").children().first().text())
            $(" .bottomBars .third .bar").css("width", "55%")
            var nextValue3 = 55
            var different3 = nextValue3 - currValue3

            var step = (0 < different3 ? 1 : -1);

            for (let i = 0; i < Math.abs(different3); i++) {

                setTimeout(function () {
                    currValue3 += step
                    growingSpan3.text(currValue3)
                }, 25 * i);


            }
            $(window).off("scroll");
        }

    }))

})