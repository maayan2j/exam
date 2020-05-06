// Click on the main button "Enter ingredient" - this will get input from the user and set it as the ingredient I want to find on recipes

$('#btn').on("click", function () {

    let input = $("input").val()
    console.log(input)

    $.get(`recipes/${input}`, function (data) {
            console.log(data)

                $("#recipes-container").empty()
                const source = $('#recipes-info').html();
                const template = Handlebars.compile(source);
                let newHTML = template({recipes : data});
                $("#recipes-container").append(newHTML);
                console.log(newHTML)

    })
})


    