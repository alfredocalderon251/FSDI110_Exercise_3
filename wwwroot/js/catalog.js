//Catalog File

function getCatalog(){
    // Create AJAX request to getCatalog

    $.ajax({
        url:"/Catalog/GetCatalog",
        type:"GET",
        success:function(res){
            console.log("success",res);
            
        },
        error:function(error){
            console.log("Error",error);
        }

    });

}

function init(){
    console.log("catalog page")
    getCatalog();
}

window.onload=init;