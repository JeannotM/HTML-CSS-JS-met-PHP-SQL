function switchpage (id){
    if(id.slice(-1)=='1'){
        id = id.slice(0, -1);
    }else{
        hamburger();
    }
    if(document.getElementById(id).classList.contains("open")===true){
        document.getElementById(id).setAttribute("class", "weg");
        document.getElementById("home").className="open";
    }
    else if(document.getElementsByClassName("open").length > 0){
        document.getElementsByClassName("open")[0].setAttribute("class", "weg");
        setTimeout(document.getElementById(id).className="open", 1000);
    }
    else{
        document.getElementById(id).className="open";
    }
}
function hamburger(){
    if(document.getElementById("centerednav").className=="openmenu"){
        document.getElementById("centerednav").className="sluitmenu";
        document.getElementById("hamburger").className="cooloff";
    }else{
        document.getElementById("centerednav").className="openmenu";
        document.getElementById("hamburger").className="coolon";
    }
}
document.getElementById("tijdelijk").parentNode.removeChild(document.getElementById("tijdelijk"));
// window.onerror = function(message, url, lineNumber){return true;};