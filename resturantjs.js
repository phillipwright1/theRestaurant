var data = [{

    id: "r1",
    name: "R1",
    menu : [{title: "R1 Menu Item1"},{title: "R1 Menu Item2"}]


}, {
    id: "r2",
    name: "R2",
    menu : [{title: "R2 Menu Item1"},{title: "R2 Menu Item2"}]
} ,
    {
        id: "r3",
        name: "R3",
        menu : [{title: "R3 Menu Item1"},{title: "R3 Menu Item2"}]
    }

];


$(
    function(){

        $("body").on("click", "h1", function(){

            console.log(this.value);
            $(this).css("color", "green");


        });


        $("input[name='tweet']").keyup( function(){
            $("#counter").text(this.value.length);
            $(this).css("border-color", (this.value.length > 10)? "red" :"green") ;



        })


        console.log(data);
        console.log("Ready")
        $('.restaurants').click( function(){
            $("form ul[data-source!=" + this.id + "]").hide();

            $("[data-source=" + this.id + "]").show();

            console.log(this);



        })

        $(":checkbox").on("change", function(){

            console.log("change");

        })

        var getRestaurantsTagged = function () {
            var toAppendRestaurantList = "";
            data.forEach(function (elem) {
                toAppendRestaurantList += "<li><a id='" + elem.id + "' class = 'restaurant' href='#'>" + elem.name + "</a></li>";
            });

            return toAppendRestaurantList;
        };

        var getMenuItems = function(restauant){
            var html = "";
            restauant.menu.forEach(function(elem){

                html+= "<li><input type='checkbox' class='item' />" + elem.title + "</li>";


            });
            return html ;

        };

        var constructMenu = function(){
            wholeMenu= "" ;
            data.forEach(function(elem){
                wholeMenu+= "<ul hidden data-source='"+elem.id +"' class='list-unstyled'>";
                wholeMenu+= getMenuItems(elem);
                wholeMenu+= "</ul>" ;

            });
            return wholeMenu ;
        };


        $("ul#restaurantList").append(getRestaurantsTagged());
        $("form .lead").append(constructMenu());


        $('#restaurantList').on("click", ".restaurant" , function(){
            $("form ul[data-source!=" + this.id + "]").hide();
            $("[data-source=" + this.id + "]").show();
        });

        $(":checkbox").on("change", function(){

            console.log("change");

        })

    }

);