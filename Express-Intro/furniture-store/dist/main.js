
const fetchPrice = function(){
    let input = $("#furniture-name").val()

    $.get(`priceCheck/${input}`, function(furnitureData){
        $("body").append(`<div>${furnitureData.price}`)
    })
    $("#furniture-name").val("")
}




$("#button2-GET").on("click", function () {
    const input = $("#furniture-buy").val()


    $.get(`/buy/${input}`, function (res) {
        $("body").append(`<div>${res}`)

    })
    $("#furniture-buy").val("") // reset the input value to " "
})



$("#button2-GET").on("click", function(){
    const  input = $("#furniture-buy").val()

    $.get(`/priceCheck/${input}`, function(oPrice){
        if(money >= oPrice.price){
            $.get(`/buy/${input}`, function(res){
                $("body").append(`<div>${res}`)
            })
            money = money - oPrice.price
            fetchPrice()
        } else {
            $("#money").append(`<div> Go GET A JOB`)
        }
    })
    $("#furniture-buy").val("")
})


