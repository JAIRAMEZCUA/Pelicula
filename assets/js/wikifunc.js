function busca(){
	let cadena=document.getElementById("searchterm").value;
  let resultados=document.getElementById("resultados");
  if(cadena.length<2){
    return false;
  }

	var flickerAPI = "https://es.wikipedia.org/w/api.php";
  	$.getJSON( flickerAPI, {
    	action: 'query',
    	format: 'json',
    	list: 'search',
    	srsearch: cadena,
    	origin: '*'
  	})
    
    .done(function( data ) {
      //let jsonRespuesta=JSON.parse(data);
      let jSearch=data.query.search;
      resultados.innerHTML="";

      let tabla = "<table id='tablaResultados'><thead><tr><th>Numero de Pagina</th><th>Titulo</th><th>Resumen</th></tr></thead><tbody id='bodyTabla'>";
    	console.log(data);
      $.each( jSearch, function( i, item ) {
        //$( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        let pageId=item.pageid;
        let title=item.title;
        let snippet=item.snippet;
        tabla += "<tr id='tr"+i+"'><td id='tr"+i+"td1'>"+pageId+"</td><td id='tr"+i+"td2'>"+title+"</td><td>"+snippet+"</td></tr>";
      });/**/
      tabla += "</tbody></table>";
      resultados.innerHTML= tabla ; 
    })
    .fail(function() {
    console.log( "error" );
    });
}

/*
function busca(){
	let cadena=document.getElementById("buscador").value;
	
	let parametrosBody= {
        					action: 'query',
        					format: 'json',
        					list: 'search',
					        //utf8: '1',
        					srsearch: cadena,
        					origin: '*'
      					};

	fetch('https://es.wikipedia.org/w/api.php',{
		method: 'GET',
		params: parametrosBody
	})
  		
  	.then(function(myJson) {
    	console.log(myJson);
  	})
	.catch(function(error) {
  		console.log('Hubo un problema con la petición Fetch:' + error.message);
	});
}
 */