var y0=window.screen.availHeight;
var x0=window.screen.availWidth;

window.onresize = function () {
    var y0=$(window).height();
    var x0=$(window).width();
    if(y0>0.8*x0){
        $(".imagine2").css("display","none");
    }else{
        $(".imagine2").css("display","inline");
    }
}

var alegeri=[];
var culori=["rgb(105,210,231)","rgb(211,25,0)","rgb(17,150,77)","rgb(243,217,21)"];
var texte=[
    ["Reflexia și refracția luminii","Lentile subțiri","Interferența","Efectul fotoelectric extern"],
    ["Noțiuni termodinamice de bază","Principiile termodinamicii","Transformările gazului ideal","Motoare termice"],
    ["Mișcare și repaus","Principiile dinamicii","Forțe","Energia","Impulsul"],
    ["Curentul electric","Legea lui Ohm. Legile lui Kirchoff","Gruparea rezistoarelor și a generatoarelor","Energia și puterea electrică"]
];
var linkuri=[
    ["reflexie_refractie.html","lentile.html","interferenta.html","efect_fotoelectric.html"],
    ["notiuni.html","principii_termo.html","procese.html","motoare.html"],
    ["cinematica.html","principii.html","forte.html","LucruMecanic.html","impuls.html"],
    ["curent.html","ohmkir.html","grupare.html","putere.html"]
];
var check;
window.onload = function (){
    var d=document.getElementById("lista").children;
	var e=document.getElementsByClassName("textc");
    var m=document.getElementsByClassName("link");
    for(var i=0;i<=m.length-1;i++)
        {
            m[1].style.color='#000000';
        }
    for(var i=0;i<=e.length-1;i++)
	{	
		e[i].innerHTML=tex[i][x];
	}
	
	for(var i=0;i<=d.length-2;i++)
	{
		d[i].style.fontSize=0.05*y0+"px";
        $(d[i]).hover(function(){
            for(var i=0;i<=d.length-2;i++)
                {
                    m[i].style.backgroundColor='#000000';
                    m[i].style.color='#ffffff';
                    d[i].style.backgroundColor='#000000';
                    d[i].style.color='#ffffff';
                }
            this.style.backgroundColor='#ffffff';
            this.style.color='#000000';
            m[$("li").index(this)].style.backgroundColor='#ffffff';
            m[$("li").index(this)].style.color='#000000';

        },function(){
            for(var i=0;i<=d.length-2;i++)
                {
                    m[i].style.backgroundColor='#000000';
                    m[i].style.color='#ffffff';
                    d[i].style.backgroundColor='#000000';
                    d[i].style.color='#ffffff';
                }
            d[1].style.backgroundColor='#ffffff';
            d[1].style.color='#000000';
            m[1].style.backgroundColor='#ffffff';
            m[1].style.color='#000000';
            
        })
	}
    d[4].style.width=0.1*x0+'px';
    d[4].style.height=0.045*y0+'px';
    
    var lung=document.getElementsByClassName("cont");
    
    setTimeout(function(){
        document.getElementById("lista").style.opacity=1;
    },1000);
    setTimeout(function(){
        lung[0].children[0].style.opacity=1;
    },1500);
    setTimeout(function(){
        lung[0].children[0].style.opacity=0;
        lung[0].style.backgroundImage="url(imagini/m0.png)";
        lung[1].children[0].style.opacity=1;
    },2000);
    setTimeout(function(){
        lung[1].children[0].style.opacity=0;
        lung[1].style.backgroundImage="url(imagini/m1.png)";
        lung[2].children[0].style.opacity=1;
    },2500);
    setTimeout(function(){
        lung[2].children[0].style.opacity=0;
        lung[2].style.backgroundImage="url(imagini/m2.png)";
        lung[3].children[0].style.opacity=1;
    },3000);
    setTimeout(function(){
        lung[3].children[0].style.opacity=0;
        lung[3].style.backgroundImage="url(imagini/m3.png)";
    },3500);
    
    $("#optica_cont").hover(function(){
        this.style.backgroundImage="url(imagini/m0h.png)";
        check.style.backgroundImage="url(imagini/transp.png)";
    },function(){
        this.style.backgroundImage="url(imagini/m0.png)";
        check.style.backgroundImage="url(imagini/transp.png)";
    });
    $("#termo_cont").hover(function(){
        this.style.backgroundImage="url(imagini/m1h.png)";
        check.style.backgroundImage="url(imagini/transp.png)";

    },function(){
        this.style.backgroundImage="url(imagini/m1.png)";
        check.style.backgroundImage="url(imagini/transp.png)";

    });
    $("#mecanica_cont").hover(function(){
        this.style.backgroundImage="url(imagini/m2h.png)";
        check.style.backgroundImage="url(imagini/transp.png)";

    },function(){
        this.style.backgroundImage="url(imagini/m2.png)";
        check.style.backgroundImage="url(imagini/transp.png)";

    });
    $("#elec_cont").hover(function(){
        this.style.backgroundImage="url(imagini/m3h.png)";
        check.style.backgroundImage="url(imagini/transp.png)";

    },function(){
        this.style.backgroundImage="url(imagini/m3.png)";
        check.style.backgroundImage="url(imagini/transp.png)";

    });
    
}
function schimba(a,b,c){
    
    var lung=document.getElementsByClassName("cont");
    for(var i=0;i<=lung.length-1;i++){
        lung[i].style.width="33vw";
        lung[i].children[0].style.opacity=0;
        lung[i].style.backgroundImage="url(imagini/m"+i+".png)"
    }
    a.style.backgroundImage='url(imagini/transp.png)';
    check=a;
    a.children[0].style.opacity=1;
    document.getElementById("col3").innerHTML="";
    for(var i=0;i<=c-1;i++)
        {
            alegeri[i]=document.createElement("a");
            alegeri[i].id=i;
            alegeri[i].style.zIndex=b;
            alegeri[i].style.width="26vw";
            alegeri[i].style.backgroundColor=culori[b];
            alegeri[i].style.color="white";
            alegeri[i].style.fontSize="7vh";
            alegeri[i].innerHTML=texte[b][i];
            alegeri[i].href=linkuri[b][i];
            alegeri[i].style.cursor="pointer";
            alegeri[i].style.fontFamily="bebasregular";
            alegeri[i].style.wordWrap="auto";
            alegeri[i].style.textAlign="center";
            alegeri[i].style.marginTop="4vh";
            alegeri[i].style.marginLeft="3vw";
            alegeri[i].style.textShadow="0px 0px 2px black";
            alegeri[i].style.display="block";
            alegeri[i].style.textDecoration="none";
            if(b==3 || b==0){
                alegeri[i].style.color="black";
            }
            document.getElementById("col3").appendChild(alegeri[i]);
        }

}
