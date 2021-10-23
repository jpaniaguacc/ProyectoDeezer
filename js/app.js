function buscarArtistas(artista){
    $("#name").empty();
    $("#picture").empty();
    $("#title").empty();
    $("#resultado").empty();

    var setting = {
        "async": true,
        "crossDomain": true,
        "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artista,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "a9b2a659d9msh72c3634862390e2p1f856ejsn62022b3ffa9a"
        }
        
        
    }
    var i = 0;
    var pos = 1
    var imagenArtista = document.querySelector('#imgartista');
    var contenedor = document.querySelector('#contenedor');
    var fotograndebaner = document.querySelector('#fotograndebaner');
    var fotobaner = document.querySelector('#fotobaner');
    fotobaner.style.backgroundColor="#07c7e6";
    fotobaner.style.background = "url(response.data[0].artist.picture) no-repeat";
    
    

    $.ajax(setting).done(function(response){
        console.log(response);
        fotobaner.innerHTML = `
        <img class="img-fluid vw-100" src="${response.data[0].artist.picture}">
        `;
        fotograndebaner.innerHTML = `
            <div style="height: 100%;" class="row p-4">
                <p style="height: 20%;" class="fs-1 text-light fw-bold pb-0 mb-0 ">${response.data[0].artist.name}</p>
                <p class="fs-3  text-light pb-0 ">Lo Mejor de ${response.data[0].artist.name} <span style="margin-left: 50px;"
                    class="text-darkRed fw-bold">321, 123 seguidores</span></p>
                <p class="text-light">${response.data[0].artist.name} (Tottenham, Londres, Inglaterra, 5 de
                mayo de 1988), conocida simplemente como ${response.data[0].artist.name}, es una cantante, compositora y
                multinstrumentista británica.</p>
                <a class="btn btn-danger w-25 me-3 rounded-pill text-light py-3" href="#">Reproducir</a>
                <a class="btn btn-outline-danger w-25 rounded-pill py-3 fw-bold" href="#">Seguir</a>
            </div>
        `;
        

        $("#resultado").append("Resultados:");

        
        if (artista==response.data[0].album.title) {
            imagenArtista.innerHTML = `<img width="100%" class="img-fluid rounded-circle" src="${response.data[i].album.cover}">`
            $("#name").append("Nombre del Album: " + response.data[0].album.title);
        }
        if(artista==response.data[0].artist.name){
            imagenArtista.innerHTML = `<img width="100px" class="img-fluid rounded-circle" src="${response.data[0].artist.picture}">`
            $("#name").append("Nombre del Artista: " + response.data[0].artist.name);
        }
        

        /*
        for (i = 0; i < 10; i++) {
            $("#title").append("<aside> # " + pos + ":" + response.data[i].title + "</aside>" );
            pos++;  
        }
        */

        for (i = 0; i < 12; i++) {
            contenedor.innerHTML +=`
            <div class="col-md-3 my-2">
                 <img class="img-fluid rounded" src="${response.data[i].album.cover}"> <br>
                 Titulo : ${response.data[i].title} <br>
                 Artista: ${response.data[0].artist.name} <br>
                 Album: ${response.data[0].album.title} <br>
                 <a id="btnplay" class="btn play-music"><i class="far fa-play-circle"></i> Reproducir</a>
                 
            </div>
            `;
        }
    }

    //id: ${response.data[i].id}
    
    );
    limpiar(); 
}

    function limpiar(){
        artista = "";
        contenedor.innerHTML ="";
    }

/*---------------------------------------------------------------------------------------------------------------------- */
