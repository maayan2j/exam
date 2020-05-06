// Click on the main button "Enter ingredient" - this will get input from the user and set it as 

$('#btn').on("click", function () {

    let input = $("input").val()
    console.log(input)

    $.get(`recipes/${input}`, function (data) {
            console.log(data)
    })
})

