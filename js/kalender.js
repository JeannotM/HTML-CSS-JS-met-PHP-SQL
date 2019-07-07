let monthsarray = new Array("Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December");
let daysarray = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
let vandaag = new Date();
let maandwaarde=0;
let jaar=2018;
let dag = daysarray[vandaag.getDay()];
let hoogte=1;
let maxmaand=0;
function datumform(id, name){
    let maand = monthsarray[maandwaarde];
    document.getElementById('value').value=id+" "+maand+" "+jaar;
    document.getElementById('inputjaar').value=jaar;
    document.getElementById('inputmaand').value=maandwaarde;
    document.getElementById('inputname').value=name;
}

for(let a=0;a<new Date().getMonth();a++){maandwaarde++}
for(let a=2018;a<new Date().getFullYear();a++){jaar++}
function ok(){
    let datum=new Date().getDate();
    let maand = monthsarray[maandwaarde];
    hoogte=1;
    teller=0;
    if(maandwaarde==new Date().getMonth()){
        datum=new Date().getDate();
        dag=daysarray[new Date().getDay()];
    }else{
        datum=1;
        dag=daysarray[new Date(jaar, maandwaarde, 1).getDay()];
    }
    document.getElementById("maand").innerHTML=maand;
    document.getElementById("jaar").innerHTML=jaar;
    for(let a=datum;a<=new Date(jaar, maandwaarde, a).getDate();a++){
        let datumvoordb=jaar+""+maandwaarde+""+a;
        vandaag.setDate(jaar, maandwaarde, a);
        vandaag.setMonth(jaar, maandwaarde, a);
        vandaag.setFullYear(jaar, maandwaarde, a);
        let checkdag = daysarray[vandaag.getDay(jaar, maandwaarde, a)];
        if(vandaag.getDay()==6||vandaag.getDay()==0){
        }else{
            teller++;
            let div = document.createElement("div");
            div.style.top=40+(45*hoogte);
            div.id='top';
            div.className=checkdag+" "+a;
            div.setAttribute('onClick', "tijdinform(this.className, '"+a+"')");
            div.style.cursor='pointer';
            div.style.backgroundColor='#4CBB17';
            div.innerHTML='<p>'+a+'</p>';
            document.getElementById("kalender").appendChild(div);
        }
        if(vandaag.getDay()==5){
            hoogte+=1;
        }
    }
}
ok();

function in_array(array, needle){
    for(let g=0;g<=array.length;g++){
        if(array[g]==needle){
            return true;
            break;
        }
    }
    return false;
}

function tijdinform(klas, dag){
    datumform(klas, dag);
}

function maandselector(deze_id){
    if(deze_id=='formr'&&maxmaand<=5){
            maandwaarde++;
            maxmaand++;
    }else if(maandwaarde!=new Date().getMonth() && deze_id=='forml'){
            maandwaarde--;
            maxmaand--;
    }
    if(maandwaarde>11){
        jaar++;
        maandwaarde-=12;
    }else if(maandwaarde<0){
        jaar--;
        maandwaarde+=12;
    }
    for(let a=0;a<teller;a++){
        let el = document.getElementById('top');
        el.parentNode.removeChild(el);
    }
    ok()
}
function tijdform(tijd){
    document.getElementById('tijdformhidden').value=tijd;
}