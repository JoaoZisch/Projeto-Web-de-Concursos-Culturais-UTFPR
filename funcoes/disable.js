function disablePorData(){

    var htmlItem = document.getElementById("btn")
    var dtfim = document.getElementById("data").value

    var dtfim = String(dtfim.slice(0,10)); 
    var dd = String(dtfim.slice(8,10));
    var mm = String(dtfim.slice(5,7));
    var yyyy = String(dtfim.slice(0,4));
    console.log(yyyy, mm, dd)

    dtfim = new Date(yyyy,mm-1,dd);
    console.log(dtfim)

    var dtatual = new Date();

    if(dtatual >= dtfim){
    console.log("SIM")
    htmlItem.disabled = true ;
    }



    var htmlItem = document.getElementsByName("btnVoto")
    var dtfim = document.getElementById("dataFinal").value

    var dtfim = String(dtfim.slice(0,10)); 
    var dd = String(dtfim.slice(8,10));
    var mm = String(dtfim.slice(5,7));
    var yyyy = String(dtfim.slice(0,4));
    console.log(yyyy, mm, dd)

    dtfim = new Date(yyyy,mm-1,dd);
    console.log(dtfim)

    var dtatual = new Date();

    
    if(dtatual >= dtfim){
        for(var i = 0; i < htmlItem.length; i++){
        console.log("SIM");
        htmlItem[i].disabled = true ;
        }
    }

};

function disablePorValidacao(){
    var htmlItem = document.getElementById("btnCadastroConcurso");
    var dtMaxPart = document.getElementById("dtMaxPart").value;
    var dtFimConcurso = document.getElementById("dtFimConcurso").value;

    var dtMaxPart = String(dtMaxPart.slice(0,10)); 
    var dd = String(dtMaxPart.slice(8,10));
    var mm = String(dtMaxPart.slice(5,7));
    var yyyy = String(dtMaxPart.slice(0,4));
    console.log(yyyy, mm, dd)

    dtMaxPart = new Date(yyyy,mm-1,dd);
                      
    var dtFimConcurso = String(dtFimConcurso.slice(0,10)); 
    var dd = String(dtFimConcurso.slice(8,10));
    var mm = String(dtFimConcurso.slice(5,7));
    var yyyy = String(dtFimConcurso.slice(0,4));
    console.log(yyyy, mm, dd)

    dtFimConcurso = new Date(yyyy,mm-1,dd);
                            
    if(dtMaxPart > dtFimConcurso){
            htmlItem.disabled = true ;
            msgValidacao.hidden = false;
    }
    else{
            htmlItem.disabled = false ;
            msgValidacao.hidden = true;    
    }
    
};