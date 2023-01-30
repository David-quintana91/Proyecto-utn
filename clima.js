var url = "https://api.openweathermap.org/data/2.5/weather?lat=-34.807859085538475&lon=-58.40048983075379&appid=9913f48dd4ffc17400f585dbbb273b27&units=metric&lang=es";

fetch(url).then(solicitud =>{
    console.log(solicitud);
    if (solicitud.ok== true){
        console.log("funciono!");

        solicitud.json().then(clima => {
            console.log(clima)
        });



    } else{
        console.error("Error", solicitud.status, solicitud, solicitud.statusText);
    }
});