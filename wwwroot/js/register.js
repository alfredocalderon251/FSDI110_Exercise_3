
function register(){
    console.log("registering car");

    //get values from fields
    var price= $('#txt_dailyprice').val();
    var year= $('#txt_year').val();
    var make= $('#txt_make').val();
    var model= $('#txt_model').val();
    var passenger= $('#txt_passenger').val();
    var milage= $('#txt_milage').val();
    var imageURL= $('#txt_imageurl').val();
    var hp= $('#txt_hp').val();
    var cyls= $('#txt_cyls').val();
    var description= $('#txt_description').val();


    var errorOcurred=false;
    if(!year|| isNaN(year)){
        //error with year
        errorOcurred=true;
        $('#txt_year').addClass("error");
    }
    else{
        year=parseInt(year);
        $('#txt_year').removeClass("error");
    }

    if(!price|| isNaN(price)){
        //error with year
        errorOcurred=true;
        $('#txt_dailyprice').addClass("error");
    }
    else{
        price=parseInt(price);
        $('#txt_dailyprice').removeClass("error");
    }

    if(!make|| isNaN(make)){
        //error with year
        errorOcurred=true;
        $('#txt_make').addClass("error");
    }
    else{        
        $('#txt_make').removeClass("error");
    }

    if(!model|| isNaN(model)){
        //error with year
        errorOcurred=true;
        $('#txt_model').addClass("error");
    }
    else{        
        $('#txt_model').removeClass("error");
    }

    if(!passenger|| isNaN(passenger)){
        //error with year
        errorOcurred=true;
        $('#txt_passenger').addClass("error");
    }
    else{        
        $('#txt_passenger').removeClass("error");
    }

    if(!milage|| isNaN(milage)){
        //error with year
        errorOcurred=true;
        $('#txt_milage').addClass("error");
    }
    else{        
        $('#txt_milage').removeClass("error");
    }

    if(!imageURL|| isNaN(imageURL)){
        //error with year
        errorOcurred=true;
        $('#txt_imageurl').addClass("error");
    }
    else{        
        $('#txt_imageurl').removeClass("error");
    }

    if(!hp|| isNaN(hp)){
        //error with year
        errorOcurred=true;
        $('#txt_hp').addClass("error");
    }
    else{        
        $('#txt_hp').removeClass("error");
    }

    if(!cyls|| isNaN(cyls)){
        //error with year
        errorOcurred=true;
        $('#txt_cyls').addClass("error");
    }
    else{        
        $('#txt_cyls').removeClass("error");
    }

    if(!description|| isNaN(description)){
        //error with year
        errorOcurred=true;
        $('#txt_description').addClass("error");
    }
    else{        
        $('#txt_description').removeClass("error");
    }


    if(errorOcurred){
        //show an alert to tell the user to fix the errors
        $('#missing_fields').show();
    }
    else{
        $('#missing_fields').hide();
    }

    //create an object
    var theCar={
        DailyPrice:price,
        Year:year,
        Make:make,
        Model:model,
        PassengerCapacity:passenger,
        Milage:milage,
        ImageURL:imageURL,
        HP:hp,
        Cyls:cyls,
        Description:description,
        
    }
    var formarray=$("#car_form").serializeArray();
    console.log(formarray);
    // var car={};

    // car.Id="0"
    // car.DailyPrice=price,
    // car.Year=year,
    // car.Make=make,
    // car.Model=model,
    // car.PassengerCapacity=passenger,
    // car.Milage=milage,
    // car.ImageURL=imageURL,
    // car.HP=hp,
    // car.Cyls=cyls,
    // car.Description=description
    // car.Stock="456"


    console.log(theCar);

    // send the object on an ajax req to the backend

    $.ajax({
        url:"/Catalog/saveCar",
        type:"POST",
        contentType:"application/json; charset=utf-8",
        dataType: 'json',
        data:JSON.stringify(theCar),
        success:function(res){
            console.log("success",res);

            //alert the car has been saved
            $('#success').show();

            //clear the form
            document.getElementById("car_form").reset();
            $('#missing_fields').hide();
            $('.form-control').removeClass("error");

        },
        error:function(error){
            console.log("Error",error);
        }

    });

    //clear form

    //success notification
}


function init(){
    console.log("Register page");

    //hook events
    $('#btn_save').click(register);

    $(".form-control").change(function(event) {
        var content=$('#'+event.target.id).val();
        if(content==""){
            $('#'+event.target.id).addClass("error");
        }
        else
        {
            $('#'+event.target.id).removeClass("error");
        }
        
        
      });
}

window.onload=init;