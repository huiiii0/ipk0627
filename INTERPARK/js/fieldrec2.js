$.ajax({

    url: "./js/fieldrec1.json",

    dataType: "json",

    success : function(data){

        if(data.length>0){


            for(var i in data){
                var price = data[i].price;                

                $(".fslide2 li .lboxTxt2").eq(i).append('<p>'+data[i].price+'</p>');
            }

        }

    }

});