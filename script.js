var nasaImages = $("#nasa-images");
var solInput = $("#sol");
var pageInput = $("#page")

$("form button").click(function (e) {
    e.preventDefault();
    
    let sol = solInput.val();
    let page = pageInput.val();
    console.log(sol, page);
    
    if( sol === "" || page === "") {
        alert("Please fill the field");
        return;
    }

    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + sol + "&page=" + page + "&api_key=NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2";
    
    $.get(url, function (data) {
        let photos = data.photos;
        
        console.log(photos);
        $("#nasa-images img").remove();

        for (let photo of photos) {
            console.log(photo);;
        
            console.log("hell", photo.img_src, photo.id);
            nasaImages.append('<img src="' + photo.img_src + '" alt="' + photo.id + '">');
        }
    });

});
