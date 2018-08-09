var y0=window.screen.availHeight;
var x0=window.screen.availWidth;

$.fn.resizeText0 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: block;overflow:auto;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText0.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText0.interval)
            clearTimeout($.resizeText0.interval)

        $.resizeText0.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText0();
	    }, 300);
    });
}

$.resizeText0 = {
    increaseSize: function (increment, start, newElem, width, height) {
        var fontSize = start;
        
        while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
            fontSize += increment;
            newElem.css("font-size", fontSize + "em");
        }
        
        if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
            fontSize -= increment;
            newElem.css("font-size", fontSize + "em");
            if (increment > 0.1) {
                $.resizeText0.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};

    var showing=0;
    function schimba(){
        if(showing==0)
            {
                showing=1;
                document.getElementById("buddy_cont").style.left="1vh";
                document.getElementById("buddy_arrow").style.opacity=1;
                document.getElementById("buddy_arrow").style.transform="rotate(180deg)";

            }else{
                document.getElementById("buddy_cont").style.left="-97vh";
                showing=0;
                document.getElementById("buddy_arrow").style.opacity=0.7;
                document.getElementById("buddy_arrow").style.transform="rotate(0deg)";
            }
    }


window.onresize = function(){
    var y0=window.screen.availHeight;
    var x0=window.screen.availWidth;
    setTimeout(function(){
        document.getElementById("exemplu").style.width=0.35*100+'vw';
        document.getElementById("exemplu").style.height=0.35*x0-0.1*y0+'px';
        document.getElementById("definitie").style.width=0.35*100+'vw';
        document.getElementById("definitie").style.height=0.35*x0-0.1*y0+'px';
    },250);

    
    setTimeout(function(){for(var i=0;i<=46;i++)
        {
            $(".resizeText"+i).resizeText0();
        }
                         
     },500);

    
}


window.onload = function (){
    var d=document.getElementById("lista").children;
	var e=document.getElementsByClassName("textc");
    var m=document.getElementsByClassName("link");
    for(var i=0;i<=m.length-1;i++)
        {
            m[1].style.color='black';
        }
    for(var i=0;i<=e.length-1;i++)
	{	
		e[i].innerHTML=tex[i][x];
	}
	
	for(var i=0;i<=d.length-2;i++)
	{
		d[i].style.fontSize=0.05*100+'vh';
        $(d[i]).hover(function(){
            for(var i=0;i<=d.length-2;i++)
                {
                    m[i].style.backgroundColor='black';
                    m[i].style.color='#ffab03';
                    d[i].style.backgroundColor='black';
                    d[i].style.color='#ffab03';
                }
            this.style.backgroundColor='#ffab03';
            this.style.color='black';
            m[$("li").index(this)].style.backgroundColor='#ffab03';
            m[$("li").index(this)].style.color='black';

        },function(){
            for(var i=0;i<=d.length-2;i++)
                {
                    m[i].style.backgroundColor='black';
                    m[i].style.color='#ffab03';
                    d[i].style.backgroundColor='black';
                    d[i].style.color='#ffab03';
                }
            d[1].style.backgroundColor='#ffab03';
            d[1].style.color='black';
            m[1].style.backgroundColor='#ffab03';
            m[1].style.color='black';
            
        })
	}
    d[4].style.width=0.1*100+'vw';
    d[4].style.height=0.045*100+'vh';
    document.getElementById("ohmtitlu_real").style.width=100+'vw';
    document.getElementById("ohmtitlu_real").style.height=0.15*100+'vh';
    document.getElementById("ohmtitlu_real").style.marginTop=0.1*100+'vh';
    
    
    document.getElementById("ohmtitlu").style.width=0.3*100+'vw';
    document.getElementById("kirtitlu").style.width=0.3*100+'vw';
    document.getElementById("ohmtitlu").style.height=0.3*100+'vh';
    document.getElementById("kirtitlu").style.height=0.3*100+'vh';
    document.getElementById("ohmtitlu").style.marginTop=0.05*100+'vh';
    document.getElementById("kirtitlu").style.marginTop=0.45*100+'vh';
    $(".resizeText0").resizeText0();
    $(".resizeText1").resizeText0();
    $(".resizeText2").resizeText0();
    
    document.getElementById("ohm_desc_titlu").style.width=0.4*100+'vw';
    document.getElementById("ohm_desc_titlu").style.height=0.1*100+'vh';
    document.getElementById("ohm_desc_text").style.width=0.4*100+'vw';
    document.getElementById("ohm_desc_text").style.height=0.25*100+'vh';
    
    document.getElementById("formula_ohm_titlu").style.width=0.15*100+'vw';
    document.getElementById("formula_ohm_titlu").style.height=0.1*100+'vh';
    document.getElementById("formula_ohm_poza").style.width=0.15*100+'vw';
    document.getElementById("formula_ohm_poza").style.height=0.25*100+'vh';
    
    document.getElementById("georg_ohm_titlu").style.width=0.2*100+'vw';
    document.getElementById("georg_ohm_titlu").style.height=0.1*100+'vh';
    document.getElementById("georg_ohm_poza").style.width=0.2*100+'vw';
    document.getElementById("georg_ohm_poza").style.height=0.35*100+'vh';

    document.getElementById("elemente_titlu").style.width=100+'vw';
    document.getElementById("elemente_titlu").style.height=0.1*100+'vh';
    document.getElementById("elemente_titlu").style.marginTop=0.1*100+'vh';

    
    
    $(".resizeText3").resizeText0();
    $(".resizeText4").resizeText0();
    $(".resizeText5").resizeText0();
    $(".resizeText6").resizeText0();
    $(".resizeText7").resizeText0();
    
    document.getElementById("serie").style.width=0.1*100+'vw';
    document.getElementById("serie").style.height=0.1*100+'vw';
    document.getElementById("paralel").style.width=0.1*100+'vw';
    document.getElementById("paralel").style.height=0.1*100+'vw'; 
    $(".resizeText8").resizeText0();
    $(".resizeText9").resizeText0();
    
    document.getElementById("serie").style.marginTop=0.03*100+'vw';
    document.getElementById("paralel").style.marginTop=0.03*100+'vw';
    document.getElementById("serie").style.width=0.15*100+'vw';
    document.getElementById("serie").style.height=0.15*100+'vw';
    document.getElementById("paralel").style.width=0.15*100+'vw';
    document.getElementById("paralel").style.height=0.15*100+'vw';
    
    document.getElementById("serie").style.lineHeight=0.15*100+'vw';
    document.getElementById("paralel").style.lineHeight=0.15*100+'vw';
    
    document.getElementById("exemplu").style.width=0.35*100+'vw';
    document.getElementById("exemplu").style.height=0.35*x0-0.1*y0+'px';
    document.getElementById("definitie").style.width=0.35*100+'vw';
    document.getElementById("definitie").style.height=0.35*x0-0.1*y0+'px';
    
    document.getElementById("exemplu_titlu").style.height=0.1*100+'vh';
    document.getElementById("definitie_titlu").style.height=0.1*100+'vh';    
    document.getElementById("exemplu_titlu").style.width=0.35*100+'vw';
    document.getElementById("definitie_titlu").style.width=0.35*100+'vw';
    $(".resizeText10").resizeText0();
    $(".resizeText11").resizeText0(); 
    
    document.getElementById("kirtitlu_real").style.marginLeft="auto";
    document.getElementById("kirtitlu_real").style.textAlign="center";
    document.getElementById("kirtitlu_real").style.width=100+'vw';
    document.getElementById("kirtitlu_real").style.height=0.15*100+'vh';
    document.getElementById("kirtitlu_real").style.marginTop=0.15*100+'vh';
    $(".resizeText12").resizeText0();
    
    document.getElementById("legea2_titlu").style.width=0.4*100+'vw';
    document.getElementById("legea1_titlu").style.width=0.4*100+'vw';
    document.getElementById("legea1_titlu").style.height=0.1*100+'vh';
    document.getElementById("legea2_titlu").style.height=0.1*100+'vh';
    document.getElementById("legea1_text").style.width=0.4*100+'vw';
    document.getElementById("legea2_text").style.width=0.4*100+'vw';
    document.getElementById("legea1_text").style.height=0.35*100+'vh';
    document.getElementById("legea2_text").style.height=0.35*100+'vh';
    
    document.getElementById("legea2_cont").style.marginLeft=0.06*100+'vw';
    document.getElementById("legea1_cont").style.marginLeft=0.06*100+'vw';
    
    $(".resizeText13").resizeText0();
    $(".resizeText14").resizeText0();
    $(".resizeText15").resizeText0();
    $(".resizeText16").resizeText0();  
    
    document.getElementById("elemente_retea_titlu").style.marginLeft="auto";
    document.getElementById("elemente_retea_titlu").style.textAlign="center";
    document.getElementById("elemente_retea_titlu").style.width=100+'vw';
    document.getElementById("elemente_retea_titlu").style.height=0.14*100+'vh';
    document.getElementById("elemente_retea_titlu").style.marginTop=0.1*100+'vh';
    
    $(".resizeText17").resizeText0();
    
    document.getElementById("nod_titlu").style.width=0.3*100+'vw';
    document.getElementById("nod_titlu").style.height=0.1*100+'vh';
    document.getElementById("nod_poza").style.width=0.3*100+'vw';
    document.getElementById("nod_poza").style.height=0.2*100+'vh';
    document.getElementById("nod_text").style.width=0.3*100+'vw';
    document.getElementById("nod_text").style.height=0.15*100+'vh';
    
    document.getElementById("latura_titlu").style.width=0.3*100+'vw';
    document.getElementById("latura_titlu").style.height=0.1*100+'vh';
    document.getElementById("latura_poza").style.width=0.3*100+'vw';
    document.getElementById("latura_poza").style.height=0.2*100+'vh';
    document.getElementById("latura_text").style.width=0.3*100+'vw';
    document.getElementById("latura_text").style.height=0.15*100+'vh';
    
    document.getElementById("ochi_titlu").style.width=0.3*100+'vw';
    document.getElementById("ochi_titlu").style.height=0.1*100+'vh';
    document.getElementById("ochi_poza").style.width=0.3*100+'vw';
    document.getElementById("ochi_poza").style.height=0.2*100+'vh';
    document.getElementById("ochi_text").style.width=0.3*100+'vw';
    document.getElementById("ochi_text").style.height=0.15*100+'vh';
    
    $(".resizeText18").resizeText0();
    $(".resizeText19").resizeText0();       
    $(".resizeText20").resizeText0();
    $(".resizeText21").resizeText0();
    $(".resizeText22").resizeText0();
    $(".resizeText23").resizeText0();

    var a=document.getElementsByClassName("elemente_retea");
    for(var i=0;i<=a.length-1;i++)
        {
            a[i].style.marginLeft=0.02*100+'vw';
        }
    
    document.getElementById("legea1_poza").style.width=0.4*100+'vw';
    document.getElementById("legea1_poza").style.height=0.4*100+'vh';
    document.getElementById("legea2_poza").style.width=0.4*100+'vw';
    document.getElementById("legea2_poza").style.height=0.4*100+'vh';
    
    document.getElementById("rezolvare_cont").style.marginTop=0.05*100+'vh';
    document.getElementById("rezolvare_cont").style.width=0.7*100+'vw';
    document.getElementById("rezolvare_cont").style.marginLeft=0.15*100+'vw';
    document.getElementById("rezolvare_titlu").style.height=0.1*100+'vh';
    document.getElementById("rezolvare_titlu").style.width=0.7*100+'vw';
    

    var rezolvare_text=document.createElement("div");
    rezolvare_text.id="rezolvare_text";
    rezolvare_text.className="text";
    rezolvare_text.style.width=0.7*100+'vw';
    rezolvare_text.style.height=1.45*100+'vh';
    document.getElementById("rezolvare_cont").appendChild(rezolvare_text);
    
    var linie1_cont=document.createElement("div");
    linie1_cont.style.display='block';
    linie1_cont.id="linie1_cont";
    document.getElementById("rezolvare_text").appendChild(linie1_cont);
    
    var linie1_tabel=document.createElement("div");
    linie1_tabel.style.display='inline-table';
    linie1_tabel.id="linie1_tabel";
    linie1_tabel.style.width=0.6*0.7*100+'vw';
    linie1_tabel.style.height=0.3*100+'vh';
    linie1_tabel.style.verticalAlign='middle';
    linie1_tabel.style.float='left';
    document.getElementById("linie1_cont").appendChild(linie1_tabel);
    
    var linie1=document.createElement("div");
    linie1.style.verticalAlign='middle';
    linie1.style.display='table-cell';
    linie1.className='resizeText25';
    linie1.style.marginTop=0.025*100+'vh';
    linie1.style.width=0.6*0.7*100+'vw';
    linie1.style.height=0.25*100+'vh';
    linie1.style.float='left';
    linie1.innerHTML='<span class="yellow2">1. </span>Alegem <span class="yellow2">sensul intensităţii</span> curentului electric pe fiecare latură la întâmplare. (Vom găsi sensul real mai târziu)';
    document.getElementById("linie1_tabel").appendChild(linie1);
    
    var linie1imag=document.createElement("div");
    linie1imag.style.verticalAlign='middle';
    linie1imag.style.display='inline-block';
    linie1imag.className='imagine';
    linie1imag.style.float='left';
    linie1imag.style.marginLeft=0.05*0.7*100+'vw';
    linie1imag.style.marginTop=0.05*100+'vh';
    linie1imag.style.backgroundImage='url(imagini/linie1imag.png)';
    linie1imag.style.width=0.3*0.7*100+'vw';
    linie1imag.style.height=0.2*100+'vh';
    linie1imag.style.border='1px solid #ffab03';
    document.getElementById("linie1_cont").appendChild(linie1imag);
    
    var linie2_cont=document.createElement("div");
    linie2_cont.style.display='block';
    linie2_cont.id="linie2_cont";
    document.getElementById("rezolvare_text").appendChild(linie2_cont);

    var linie2_tabel=document.createElement("div");
    linie2_tabel.style.display='inline-table';
    linie2_tabel.id="linie2_tabel";
    linie2_tabel.style.width=0.6*0.7*100+'vw';
    linie2_tabel.style.height=0.2*100+'vh';
    linie2_tabel.style.verticalAlign='middle';
    linie2_tabel.style.float='left';
    document.getElementById("linie2_cont").appendChild(linie2_tabel);
    
    var linie2=document.createElement("div");
    linie2.style.verticalAlign='middle';
    linie2.style.display='table-cell';
    linie2.className='resizeText26';
    linie2.style.marginTop=0.025*100+'vh';
    linie2.style.width=0.6*0.7*100+'vw';
    linie2.style.height=0.15*100+'vh';
    linie2.style.float='left';
    linie2.innerHTML='<span class="yellow2">2. </span>Alegem un <span class="yellow2">sens pentru parcurgerea ochiurilor de reţea</span>, pentru aplicarea legii a II-a a lui Kirchhoff.';
    document.getElementById("linie2_tabel").appendChild(linie2);
    
    var linie2imag=document.createElement("div");
    linie2imag.style.verticalAlign='middle';
    linie2imag.style.display='inline-block';
    linie2imag.className='imagine';
    linie2imag.style.float='left';
    linie2imag.style.marginLeft=0.05*0.7*100+'vw';
    linie2imag.style.backgroundImage='url(imagini/linie2imag.png)';
    linie2imag.style.width=0.3*0.7*100+'vw';
    linie2imag.style.height=0.2*100+'vh';
    linie2imag.style.border='1px solid #ffab03';
    document.getElementById("linie2_cont").appendChild(linie2imag);
    
    var linie3=document.createElement("div");
    linie3.style.display='block';
    linie3.id="linie3";
    document.getElementById("rezolvare_text").appendChild(linie3);
    
    var linie3_1=document.createElement("div");   linie3_1.style.position="relative";
    linie3_1.style.display="block";
    linie3_1.style.width=0.6*0.7*100+'vw';
    linie3_1.style.height=0.05*100+'vh';
    linie3_1.style.marginLeft=0.2*0.7*100+'vw';
    linie3_1.style.marginTop=0.05*100+'vh';
    linie3_1.style.float='left';
    linie3_1.style.backgroundColor='rgba(0,0,0,0)';
    linie3_1.className="text resizeText27";
    linie3_1.style.textAlign="center";
    linie3_1.innerHTML="<span class='yellow2'>3.1. </span>Notăm cu <span class='yellow2'>l</span> numărul de laturi";
    document.getElementById("linie3").appendChild(linie3_1);
    
    
    var linie3_2=document.createElement("div");
    linie3_2.style.position="relative";
    linie3_2.style.display="block";
    linie3_2.style.width=0.6*0.7*100+'vw';
    linie3_2.style.marginTop=0.025*100+'vh';
    linie3_2.style.marginLeft=0.2*0.7*100+'vw';
    linie3_2.style.height=0.05*100+'vh';
    linie3_2.className="text resizeText28";
    linie3_2.style.textAlign="center";
    linie3_2.style.float='left';
    linie3_2.style.backgroundColor='rgba(0,0,0,0)';
    linie3_2.innerHTML="<span class='yellow2'>3.2 </span>Notăm cu <span class='yellow2'>n</span> numărul de noduri";
    document.getElementById("linie3").appendChild(linie3_2);
    
    var linie4=document.createElement("div");
    linie4.id="linie4";
    linie4.style.display='block';
    document.getElementById("rezolvare_text").appendChild(linie4);
    
    var linie4_1=document.createElement("div");
    linie4_1.style.position="relative";
    linie4_1.style.marginTop=0.025*100+'vh';
    linie4_1.style.display="block";
    linie4_1.style.width=0.8*0.7*100+'vw';
    linie4_1.style.marginLeft=0.1*0.7*100+'vw';
    linie4_1.style.height=0.15*100+'vh';
    linie4_1.style.float='left';
    linie4_1.className="text resizeText29";
    linie4_1.style.textAlign="center";
    linie4_1.style.backgroundColor='rgba(0,0,0,0)';
    linie4_1.innerHTML="<span class='yellow2'>4.1. </span>Scriem <span class='yellow2'>n-1</span> ecuații pentru <span class='yellow2'>Legea I</span> a lui Kirchhoff.";
    document.getElementById("linie4").appendChild(linie4_1);
    
    var linie4_2=document.createElement("div");
    linie4_2.style.position="relative";
    linie4_2.style.marginTop=0.025*100+'vh';
    linie4_2.style.display="block";
    linie4_2.style.width=0.8*0.7*100+'vw';
    linie4_2.style.height=0.15*100+'vh';
    linie4_2.style.marginLeft=0.1*0.7*100+'vw';
    linie4_2.style.backgroundColor='rgba(0,0,0,0)';
    linie4_2.className="text resizeText30";
    linie4_2.style.textAlign="center";
    linie4_2.style.float='left';
    linie4_2.innerHTML="<span class='yellow2'>4.2. </span>Scriem <span class='yellow2'>l-(n-1)</span> ecuații pentru <span class='yellow2'>Legea a II-a</span> a lui Kirchhoff";
    document.getElementById("linie4").appendChild(linie4_2);
    
    var linie5=document.createElement("div");
    linie5.style.display='block';
    linie5.id='linie5';
    document.getElementById("rezolvare_text").appendChild(linie5);
    
    var linie5_1=document.createElement("div");
    linie5_1.style.marginTop=0.025*100+'vh';
    linie5_1.style.display="block";
    linie5_1.style.width=0.9*0.7*100+'vw';
    linie5_1.style.height=0.075*100+'vh';
    linie5_1.style.marginLeft=0.1*0.7*100+'vw';
    linie5_1.style.backgroundColor='rgba(0,0,0,0)';
    linie5_1.className="text resizeText31";
    linie5_1.style.textAlign="center";
    linie5_1.style.float='left';
    linie5_1.innerHTML="<span class='yellow2'>5. </span>Rezolvăm <span class='yellow2'>sistemul de ecuații</span> creat";
    document.getElementById("linie5").appendChild(linie5_1);
    
    var linie6=document.createElement("div");
    linie6.style.display='block';
    linie6.id='linie6';
    document.getElementById("rezolvare_text").appendChild(linie6);
    
    var linie6_1=document.createElement("div");
    linie6_1.style.marginTop=0.025*100+'vh';
    linie6_1.style.display="block";
    linie6_1.style.width=0.9*0.7*100+'vw';
    linie6_1.style.height=0.25*100+'vh';
    linie6_1.style.marginLeft=0.1*0.7*100+'vw';
    linie6_1.style.backgroundColor='rgba(0,0,0,0)';
    linie6_1.className="text resizeText32";
    linie6_1.style.textAlign="center";
    linie6_1.style.float='left';
    linie6_1.innerHTML="<span class='yellow2'>6. Interpretarea fizică</span> a rezultatelor (Dacă intensitatea este <span class='yellow2'>negativă</span>, atunci înseamnă că sensul său adevărat este <span class='yellow2'>invers</span> decât cel ales inițial)";
    document.getElementById("linie6").appendChild(linie6_1);
    
    var exemplu_probl_cont=document.createElement("div");
    exemplu_probl_cont.style.display='block';
    exemplu_probl_cont.id='exemplu_probl_cont';
    exemplu_probl_cont.style.width=0.8*100+'vw';
    exemplu_probl_cont.style.height=100+'vh';
    exemplu_probl_cont.style.marginLeft=0.1*100+'vw';
    exemplu_probl_cont.style.marginTop=0.1*100+'vh';
    document.getElementById("elemente_cont").appendChild(exemplu_probl_cont);
    
    var exemplu_probl_titlu=document.createElement("div");
    exemplu_probl_titlu.innerHTML="EXEMPLU DE PROBLEMĂ";
    exemplu_probl_titlu.className="titlu resizeText33";
    exemplu_probl_titlu.id="exemplu_probl_titlu";
    exemplu_probl_titlu.style.width=0.8*100+'vw';
    exemplu_probl_titlu.style.height=0.1*100+'vh';
    
    document.getElementById("exemplu_probl_cont").appendChild(exemplu_probl_titlu);
    
    var exemplu_probl_text=document.createElement("div");
    exemplu_probl_text.className="text";
    exemplu_probl_text.style.width=0.8*100+'vw';
    exemplu_probl_text.style.height=4.8*100+'vh';
    exemplu_probl_text.id='exemplu_probl_text';
    document.getElementById("exemplu_probl_cont").appendChild(exemplu_probl_text);
    
    var linie1_probl_cont=document.createElement("div");
    linie1_probl_cont.style.display='block';
    linie1_probl_cont.id="linie1_probl_cont";
    document.getElementById("exemplu_probl_text").appendChild(linie1_probl_cont);
    
    var linie1_probl_tabel=document.createElement("div");
    linie1_probl_tabel.style.display='inline-table';
    linie1_probl_tabel.id="linie1_probl_tabel";
    linie1_probl_tabel.style.width=0.6*0.8*100+'vw';
    linie1_probl_tabel.style.height=0.5*100+'vh';
    linie1_probl_tabel.style.verticalAlign='middle';
    linie1_probl_tabel.style.float='left';
    document.getElementById("linie1_probl_cont").appendChild(linie1_probl_tabel);
    
    var linie1_probl=document.createElement("div");
    linie1_probl.style.verticalAlign='middle';
    linie1_probl.style.display='table-cell';
    linie1_probl.className='resizeText34';
    linie1_probl.style.marginTop=0.025*100+'vh';
    linie1_probl.style.width=0.5*0.8*100+'vw';
    linie1_probl.style.height=0.45*100+'vh';
    linie1_probl.style.marginLeft=0.05*0.8*100+'vw';
    linie1_probl.style.float='left';
    linie1_probl.innerHTML='În circuitul din figura alăturată se dau <span class="yellow" >E1=60V, E2=30V, R=18Ω, r1=6Ω și r2=3Ω</span>. Calculați <span class="yellow">intensitatea curenților</span> prin fiecare ramură';
    document.getElementById("linie1_probl_tabel").appendChild(linie1_probl);
    
    var linie1_probl_imag=document.createElement("div");
    linie1_probl_imag.style.verticalAlign='middle';
    linie1_probl_imag.style.display='inline-block';
    linie1_probl_imag.className='imagine';
    linie1_probl_imag.style.float='left';
    linie1_probl_imag.style.marginLeft=0.05*0.8*100+'vw';
    linie1_probl_imag.style.marginTop=0.05*100+'vh';
    linie1_probl_imag.style.backgroundImage='url(imagini/problema_initiala.png)';
    linie1_probl_imag.style.width=0.3*0.8*100+'vw';
    linie1_probl_imag.style.height=0.4*100+'vh';
    linie1_probl_imag.style.border='1px solid #ffab03';
    document.getElementById("linie1_probl_cont").appendChild(linie1_probl_imag);
    
    var linie2_probl_cont=document.createElement("div");
    linie2_probl_cont.style.display='block';
    linie2_probl_cont.id="linie2_probl_cont";
    document.getElementById("exemplu_probl_text").appendChild(linie2_probl_cont);
    
    var linie2_probl_tabel=document.createElement("div");
    linie2_probl_tabel.style.display='inline-table';
    linie2_probl_tabel.id="linie2_probl_tabel";
    linie2_probl_tabel.style.width=0.6*0.8*100+'vw';
    linie2_probl_tabel.style.height=0.5*100+'vh';
    linie2_probl_tabel.style.verticalAlign='middle';
    linie2_probl_tabel.style.float='left';
    document.getElementById("linie2_probl_cont").appendChild(linie2_probl_tabel);
    
    var linie2_probl=document.createElement("div");
    linie2_probl.style.verticalAlign='middle';
    linie2_probl.style.display='table-cell';
    linie2_probl.className='resizeText35';
    linie2_probl.style.marginTop=0.05*100+'vh';
    linie2_probl.style.width=0.5*0.8*100+'vw';
    linie2_probl.style.height=0.45*100+'vh';
    linie2_probl.style.marginLeft=0.05*0.8*100+'vw';
    linie2_probl.style.float='left';
    linie2_probl.innerHTML='Alegem <span class="yellow">sensul intensităţii curentului electric</span> pe fiecare latură';
    document.getElementById("linie2_probl_tabel").appendChild(linie2_probl);
    
    var linie2_probl_imag=document.createElement("div");
    linie2_probl_imag.style.verticalAlign='middle';
    linie2_probl_imag.style.display='inline-block';
    linie2_probl_imag.className='imagine';
    linie2_probl_imag.style.float='left';
    linie2_probl_imag.style.marginLeft=0.05*0.8*100+'vw';
    linie2_probl_imag.style.marginTop=0.05*100+'vh';
    linie2_probl_imag.style.backgroundImage='url(imagini/problema_intensitati.png)';
    linie2_probl_imag.style.width=0.3*0.8*100+'vw';
    linie2_probl_imag.style.height=0.4*100+'vh';
    linie2_probl_imag.style.border='1px solid #ffab03';
    document.getElementById("linie2_probl_cont").appendChild(linie2_probl_imag);
    
    var linie3_probl_cont=document.createElement("div");
    linie3_probl_cont.style.display='block';
    linie3_probl_cont.id="linie3_probl_cont";
    document.getElementById("exemplu_probl_text").appendChild(linie3_probl_cont);
    
    var linie3_probl_tabel=document.createElement("div");
    linie3_probl_tabel.style.display='inline-table';
    linie3_probl_tabel.id="linie3_probl_tabel";
    linie3_probl_tabel.style.width=0.6*0.8*100+'vw';
    linie3_probl_tabel.style.height=0.5*100+'vh';
    linie3_probl_tabel.style.verticalAlign='middle';
    linie3_probl_tabel.style.float='left';
    document.getElementById("linie3_probl_cont").appendChild(linie3_probl_tabel);
    
    var linie3_probl=document.createElement("div");
    linie3_probl.style.verticalAlign='middle';
    linie3_probl.style.display='table-cell';
    linie3_probl.className='resizeText36';
    linie3_probl.style.marginTop=0.05*100+'vh';
    linie3_probl.style.width=0.5*0.8*100+'vw';
    linie3_probl.style.height=0.45*100+'vh';
    linie3_probl.style.marginLeft=0.05*0.8*100+'vw';
    linie3_probl.style.float='left';
    linie3_probl.style.fontFamily=
    linie3_probl.innerHTML='Alegem un <span class="yellow">sens pentru parcurgerea ochiurilor de reţea</span>, pentru aplicarea <span class="yellow">legii a II-a a lui Kirchhoff</span>.';
    document.getElementById("linie3_probl_tabel").appendChild(linie3_probl);
    
    var linie3_probl_imag=document.createElement("div");
    linie3_probl_imag.style.verticalAlign='middle';
    linie3_probl_imag.style.display='inline-block';
    linie3_probl_imag.className='imagine';
    linie3_probl_imag.style.float='left';
    linie3_probl_imag.style.marginLeft=0.05*0.8*100+'vw';
    linie3_probl_imag.style.marginTop=0.05*100+'vh';
    linie3_probl_imag.style.backgroundImage='url(imagini/problema_parcurgere.png)';
    linie3_probl_imag.style.width=0.3*0.8*100+'vw';
    linie3_probl_imag.style.height=0.4*100+'vh';
    linie3_probl_imag.style.border='1px solid #ffab03';
    document.getElementById("linie3_probl_cont").appendChild(linie3_probl_imag);
    
    var linie3_1_2_probl=document.createElement("div");
    linie3_1_2_probl.style.display='block';
    linie3_1_2_probl.id="linie3_1_2_probl";
    document.getElementById("exemplu_probl_text").appendChild(linie3_1_2_probl);
    
    var linie3_1_probl=document.createElement("div");   linie3_1_probl.style.position="relative";
    linie3_1_probl.style.display="block";
    linie3_1_probl.style.width=0.6*0.8*100+'vw';
    linie3_1_probl.style.height=0.075*100+'vh';
    linie3_1_probl.style.marginLeft=0.2*0.8*100+'vw';
    linie3_1_probl.style.marginTop=0.025*100+'vh';
    linie3_1_probl.style.float='left';
    linie3_1_probl.style.backgroundColor='rgba(0,0,0,0)';
    linie3_1_probl.className="text resizeText37";
    linie3_1_probl.style.textAlign="center";
    linie3_1_probl.innerHTML="Notăm cu <span class='yellow'>l</span> numărul de laturi";
    document.getElementById("linie3_1_2_probl").appendChild(linie3_1_probl);
    
    
    var linie3_2_probl=document.createElement("div");
    linie3_2_probl.style.position="relative";
    linie3_2_probl.style.display="block";
    linie3_2_probl.style.width=0.6*0.8*100+'vw';
    linie3_2_probl.style.marginTop=0.025*100+'vh';
    linie3_2_probl.style.marginLeft=0.2*0.8*100+'vw';
    linie3_2_probl.style.height=0.075*100+'vh';
    linie3_2_probl.className="text resizeText38";
    linie3_2_probl.style.textAlign="center";
    linie3_2_probl.style.float='left';
    linie3_2_probl.style.backgroundColor='rgba(0,0,0,0)';
    linie3_2_probl.innerHTML="Notăm cu <span class='yellow'>n</span> numărul de noduri";
    document.getElementById("linie3_1_2_probl").appendChild(linie3_2_probl);
    
    var linie4_probl_cont=document.createElement("div");
    linie4_probl_cont.style.display='block';
    linie4_probl_cont.id="linie4_probl_cont";
    document.getElementById("exemplu_probl_text").appendChild(linie4_probl_cont);
    
    var linie4_probl_tabel=document.createElement("div");
    linie4_probl_tabel.style.display='inline-table';
    linie4_probl_tabel.id="linie4_probl_tabel";
    linie4_probl_tabel.style.width=0.6*0.8*100+'vw';
    linie4_probl_tabel.style.height=0.15*100+'vh';
    linie4_probl_tabel.style.verticalAlign='middle';
    linie4_probl_tabel.style.float='left';
    document.getElementById("linie4_probl_cont").appendChild(linie4_probl_tabel);
    
    var linie4_probl=document.createElement("div");
    linie4_probl.style.verticalAlign='middle';
    linie4_probl.style.display='table-cell';
    linie4_probl.className='resizeText39';
    linie4_probl.style.marginTop=0.025*100+'vh';
    linie4_probl.style.width=0.9*0.8*100+'vw';
    linie4_probl.style.height=0.15*100+'vh';
    linie4_probl.style.marginLeft=0.05*0.8*100+'vw';
    linie4_probl.style.float='left';
    linie4_probl.innerHTML='Aplicăm <span class="yellow">legea I a lui Kirchhoff</span> pentru <span class="yellow">n-1</span> noduri, adică pentru <span class="yellow">un singur nod (A)</span>, unde ';
    document.getElementById("linie4_probl_tabel").appendChild(linie4_probl);
    
    var linie5_probl=document.createElement("div");
    linie5_probl.className="imagine";
    linie5_probl.style.height=0.1*100+'vh';
    linie5_probl.style.width=0.6*0.8*100+'vw';
    linie5_probl.style.backgroundImage="url(imagini/formula1.png)";
    linie5_probl.style.marginLeft=0.2*0.8*100+'vw';
    linie5_probl.style.display='block';
    linie5_probl.style.float='left';
    linie5_probl.style.backgroundColor='rgba(0,0,0,0)';
    linie5_probl.style.marginTop=0.05*100+'vh';
    document.getElementById("exemplu_probl_text").appendChild(linie5_probl);
    
    var linie6_probl_cont=document.createElement("div");
    linie6_probl_cont.style.display='block';
    linie6_probl_cont.id="linie6_probl_cont";
    document.getElementById("exemplu_probl_text").appendChild(linie6_probl_cont);
    
    var linie6_probl_tabel=document.createElement("div");
    linie6_probl_tabel.style.display='inline-table';
    linie6_probl_tabel.id="linie6_probl_tabel";
    linie6_probl_tabel.style.width=0.9*0.8*100+'vw';
    linie6_probl_tabel.style.height=0.15*100+'vh';
    linie6_probl_tabel.style.verticalAlign='middle';
    linie6_probl_tabel.style.float='left';
    document.getElementById("linie6_probl_cont").appendChild(linie6_probl_tabel);
    
    var linie6_probl=document.createElement("div");
    linie6_probl.style.verticalAlign='middle';
    linie6_probl.style.display='table-cell';
    linie6_probl.className='resizeText40';
    linie6_probl.style.marginTop=0.025*100+'vh';
    linie6_probl.style.width=0.9*0.8*100+'vw';
    linie6_probl.style.height=0.15*100+'vh';
    linie6_probl.style.marginLeft=0.05*0.8*100+'vw';
    linie6_probl.style.float='left';
    linie6_probl.innerHTML='Aplicăm <span class="yellow">legea a II-a a lui Kirchhoff</span> pentru <span class="yellow">l-(n-1)</span> ochiuri, adică pentru <span class="yellow">cele două ochiuri</span> ale circuitului. ';
    document.getElementById("linie6_probl_tabel").appendChild(linie6_probl);
    
    var linie7_probl_cont=document.createElement("div");
    linie7_probl_cont.style.display='block';
    linie7_probl_cont.id="linie7_probl_cont";
    document.getElementById("exemplu_probl_text").appendChild(linie7_probl_cont);
    
    var linie7_probl_tabel=document.createElement("div");
    linie7_probl_tabel.style.display='inline-table';
    linie7_probl_tabel.id="linie7_probl_tabel";
    linie7_probl_tabel.style.width=0.9*0.8*100+'vw';
    linie7_probl_tabel.style.height=0.15*100+'vh';
    linie7_probl_tabel.style.verticalAlign='middle';
    linie7_probl_tabel.style.float='left';
    document.getElementById("linie7_probl_cont").appendChild(linie7_probl_tabel);
    
    var linie7_probl=document.createElement("div");
    linie7_probl.style.verticalAlign='middle';
    linie7_probl.style.display='table-cell';
    linie7_probl.className='resizeText41';
    linie7_probl.style.marginTop=0.025*100+'vh';
    linie7_probl.style.width=0.9*0.8*100+'vw';
    linie7_probl.style.height=0.15*100+'vh';
    linie7_probl.style.marginLeft=0.05*0.8*100+'vw';
    linie7_probl.style.float='left';
    linie7_probl.innerHTML='Aplicând legea pentru <span class="yellow">ochiul de sus</span> rezultă ecuația';
    document.getElementById("linie7_probl_tabel").appendChild(linie7_probl);
    
     var linie8_probl=document.createElement("div");
    linie8_probl.className="imagine";
    linie8_probl.style.height=0.1*100+'vh';
    linie8_probl.style.width=0.6*0.8*100+'vw';
    linie8_probl.style.backgroundImage="url(imagini/formula2.png)";
    linie8_probl.style.marginLeft=0.2*0.8*100+'vw';
    linie8_probl.style.display='block';
    linie8_probl.style.float='left';
    linie8_probl.style.backgroundColor='rgba(0,0,0,0)';
    linie8_probl.style.marginTop=0.05*100+'vh';
    document.getElementById("exemplu_probl_text").appendChild(linie8_probl);
    
    var linie9_probl_cont=document.createElement("div");
    linie9_probl_cont.style.display='block';
    linie9_probl_cont.id="linie9_probl_cont";
    document.getElementById("exemplu_probl_text").appendChild(linie9_probl_cont);
    
    var linie9_probl_tabel=document.createElement("div");
    linie9_probl_tabel.style.display='inline-table';
    linie9_probl_tabel.id="linie9_probl_tabel";
    linie9_probl_tabel.style.width=0.9*0.8*100+'vw';
    linie9_probl_tabel.style.height=0.15*100+'vh';
    linie9_probl_tabel.style.verticalAlign='middle';
    linie9_probl_tabel.style.float='left';
    document.getElementById("linie9_probl_cont").appendChild(linie9_probl_tabel);
    
    var linie9_probl=document.createElement("div");
    linie9_probl.style.verticalAlign='middle';
    linie9_probl.style.display='table-cell';
    linie9_probl.className='resizeText42';
    linie9_probl.style.marginTop=0.025*100+'vh';
    linie9_probl.style.width=0.9*0.8*100+'vw';
    linie9_probl.style.height=0.15*100+'vh';
    linie9_probl.style.marginLeft=0.05*0.8*100+'vw';
    linie9_probl.style.float='left';
    linie9_probl.innerHTML='Aplicând legea pentru <span class="yellow">ochiul de jos</span> rezultă ecuația';
    document.getElementById("linie9_probl_tabel").appendChild(linie9_probl);
    
     var linie10_probl=document.createElement("div");
    linie10_probl.className="imagine";
    linie10_probl.style.height=0.1*100+'vh';
    linie10_probl.style.width=0.6*0.8*100+'vw';
    linie10_probl.style.backgroundImage="url(imagini/formula3.png)";
    linie10_probl.style.marginLeft=0.2*0.8*100+'vw';
    linie10_probl.style.display='block';
    linie10_probl.style.float='left';
    linie10_probl.style.backgroundColor='rgba(0,0,0,0)';
    linie10_probl.style.marginTop=0.05*100+'vh';
    document.getElementById("exemplu_probl_text").appendChild(linie10_probl);
    
    var linie11_probl_cont=document.createElement("div");
    linie11_probl_cont.style.display='block';
    linie11_probl_cont.id="linie11_probl_cont";
    document.getElementById("exemplu_probl_text").appendChild(linie11_probl_cont);
    
    var linie11_probl_tabel=document.createElement("div");
    linie11_probl_tabel.style.display='inline-table';
    linie11_probl_tabel.id="linie11_probl_tabel";
    linie11_probl_tabel.style.width=0.9*0.8*100+'vw';
    linie11_probl_tabel.style.height=0.15*100+'vh';
    linie11_probl_tabel.style.verticalAlign='middle';
    linie11_probl_tabel.style.float='left';
    document.getElementById("linie11_probl_cont").appendChild(linie11_probl_tabel);
    
    var linie11_probl=document.createElement("div");
    linie11_probl.style.verticalAlign='middle';
    linie11_probl.style.display='table-cell';
    linie11_probl.className='resizeText43';
    linie11_probl.style.marginTop=0.025*100+'vh';
    linie11_probl.style.width=0.9*0.8*100+'vw';
    linie11_probl.style.height=0.15*100+'vh';
    linie11_probl.style.marginLeft=0.05*0.8*100+'vw';
    linie11_probl.style.float='left';
    linie11_probl.innerHTML='Deoarece <span class="yellow">I1</span> nu coincide cu <blue>sensul de parcurgere</blue> în acest ochi, produsul dintre <span class="yellow">I1</span> și <span class="yellow">elementele străbutete de I1</span> va fi <red>negativ</red>. Deoarece <span class="yellow">E1</span> nu coincide cu <blue>sensul de parcurgere</blue> în acest ochi, el va fi luat <red>negativ</red>.';
    document.getElementById("linie11_probl_tabel").appendChild(linie11_probl);
    
    var linie12_probl_cont=document.createElement("div");
    linie12_probl_cont.style.display='block';
    linie12_probl_cont.id="linie12_probl_cont";
    document.getElementById("exemplu_probl_text").appendChild(linie12_probl_cont);
    
    var linie12_probl_tabel=document.createElement("div");
    linie12_probl_tabel.style.display='inline-table';
    linie12_probl_tabel.id="linie12_probl_tabel";
    linie12_probl_tabel.style.width=0.9*0.8*100+'vw';
    linie12_probl_tabel.style.height=0.15*100+'vh';
    linie12_probl_tabel.style.verticalAlign='middle';
    linie12_probl_tabel.style.float='left';
    document.getElementById("linie12_probl_cont").appendChild(linie12_probl_tabel);
    
    var linie12_probl=document.createElement("div");
    linie12_probl.style.verticalAlign='middle';
    linie12_probl.style.display='table-cell';
    linie12_probl.className='resizeText44';
    linie12_probl.style.marginTop=0.025*100+'vh';
    linie12_probl.style.width=0.9*0.8*100+'vw';
    linie12_probl.style.height=0.1*100+'vh';
    linie12_probl.style.marginLeft=0.05*0.8*100+'vw';
    linie12_probl.style.float='left';
    linie12_probl.innerHTML='Acum, rezolvăm <span class="yellow">sistemul de ecuații</span>:';
    document.getElementById("linie12_probl_tabel").appendChild(linie12_probl);
    
        
     var linie13_probl=document.createElement("div");
    linie13_probl.className="imagine";
    linie13_probl.style.height=0.3*100+'vh';
    linie13_probl.style.width=0.8*0.8*100+'vw';
    linie13_probl.style.backgroundImage="url(imagini/sistem1.png)";
    linie13_probl.style.marginLeft=0.1*0.8*100+'vw';
    linie13_probl.style.display='block';
    linie13_probl.style.float='left';
    linie13_probl.style.backgroundColor='rgba(0,0,0,0)';
    document.getElementById("exemplu_probl_text").appendChild(linie13_probl);
    
    var linie14_probl_cont=document.createElement("div");
    linie14_probl_cont.style.display='block';
    linie14_probl_cont.id="linie14_probl_cont";
    document.getElementById("exemplu_probl_text").appendChild(linie14_probl_cont);
    
    var linie14_probl_tabel=document.createElement("div");
    linie14_probl_tabel.style.display='inline-table';
    linie14_probl_tabel.id="linie14_probl_tabel";
    linie14_probl_tabel.style.width=0.9*0.8*100+'vw';
    linie14_probl_tabel.style.height=0.15*100+'vh';
    linie14_probl_tabel.style.verticalAlign='middle';
    linie14_probl_tabel.style.float='left';
    document.getElementById("linie14_probl_cont").appendChild(linie14_probl_tabel);
    
    var linie14_probl=document.createElement("div");
    linie14_probl.style.verticalAlign='middle';
    linie14_probl.style.display='table-cell';
    linie14_probl.className='resizeText45';
    linie14_probl.style.marginTop=0.025*100+'vh';
    linie14_probl.style.width=0.9*0.8*100+'vw';
    linie14_probl.style.height=0.1*100+'vh';
    linie14_probl.style.marginLeft=0.05*0.8*100+'vw';
    linie14_probl.style.float='left';
    linie14_probl.innerHTML='Și ajungem la <span class="yellow">rezultatele</span>:';
    document.getElementById("linie14_probl_tabel").appendChild(linie14_probl);
    
     var linie15_probl=document.createElement("div");
    linie15_probl.className="imagine";
    linie15_probl.style.height=0.15*100+'vh';
    linie15_probl.style.width=0.8*0.8*100+'vw';
    linie15_probl.style.backgroundImage="url(imagini/sistem2.png)";
    linie15_probl.style.marginLeft=0.1*0.8*100+'vw';
    linie15_probl.style.display='block';
    linie15_probl.style.float='left';
    linie15_probl.style.backgroundColor='rgba(0,0,0,0)';
    document.getElementById("exemplu_probl_text").appendChild(linie15_probl);    

     var linie16_probl=document.createElement("div");
    linie16_probl.className="imagine";
    linie16_probl.style.height=0.15*100+'vh';
    linie16_probl.style.width=0.8*0.8*100+'vw';
    linie16_probl.style.backgroundImage="url(imagini/sistem3.png)";
    linie16_probl.style.marginLeft=0.1*0.8*100+'vw';
    linie16_probl.style.display='block';
    linie16_probl.style.float='left';
    linie16_probl.style.backgroundColor='rgba(0,0,0,0)';
    linie16_probl.style.marginTop=0.05*100+'vh';
    document.getElementById("exemplu_probl_text").appendChild(linie16_probl);    
    
     var linie17_probl=document.createElement("div");
    linie17_probl.className="imagine";
    linie17_probl.style.height=0.15*100+'vh';
    linie17_probl.style.width=0.8*0.8*100+'vw';
    linie17_probl.style.backgroundImage="url(imagini/sistem4.png)";
    linie17_probl.style.marginLeft=0.1*0.8*100+'vw';
    linie17_probl.style.display='block';
    linie17_probl.style.float='left';
    linie17_probl.style.backgroundColor='rgba(0,0,0,0)';
    linie17_probl.style.marginTop=0.05*100+'vh';
    document.getElementById("exemplu_probl_text").appendChild(linie17_probl);        
    
    var linie18_probl_cont=document.createElement("div");
    linie18_probl_cont.style.display='block';
    linie18_probl_cont.id="linie18_probl_cont";
    document.getElementById("exemplu_probl_text").appendChild(linie18_probl_cont);
    
    var linie18_probl_tabel=document.createElement("div");
    linie18_probl_tabel.style.display='inline-table';
    linie18_probl_tabel.id="linie18_probl_tabel";
    linie18_probl_tabel.style.width=0.9*0.8*100+'vw';
    linie18_probl_tabel.style.height=0.15*100+'vh';
    linie18_probl_tabel.style.verticalAlign='middle';
    linie18_probl_tabel.style.float='left';
    document.getElementById("linie18_probl_cont").appendChild(linie18_probl_tabel);
    
    var linie18_probl=document.createElement("div");
    linie18_probl.style.verticalAlign='middle';
    linie18_probl.style.display='table-cell';
    linie18_probl.className='resizeText46';
    linie18_probl.style.marginTop=0.025*100+'vh';
    linie18_probl.style.width=0.7*0.8*100+'vw';
    linie18_probl.style.height=0.1*100+'vh';
    linie18_probl.style.marginLeft=0.15*0.8*100+'vw';
    linie18_probl.style.float='left';
    linie18_probl.innerHTML='Deoarece <span class="yellow">I2</span> este <red>negativ</red>, înseamnă că sensul real al curentului <span class="yellow">I2</span> este <red>invers</red> decât cel ales inițial.';
    document.getElementById("linie18_probl_tabel").appendChild(linie18_probl);    
    
     var linie19_probl=document.createElement("div");
    linie19_probl.className="imagine";
    linie19_probl.style.height=0.45*100+'vh';
    linie19_probl.style.width=0.8*0.8*100+'vw';
    linie19_probl.style.backgroundImage="url(imagini/problema_intensitati_real.png)";
    linie19_probl.style.marginLeft=0.1*0.8*100+'vw';
    linie19_probl.style.display='block';
    linie19_probl.style.float='left';
    linie19_probl.style.backgroundColor='rgba(0,0,0,0)';
    linie19_probl.style.marginTop=0.01*100+'vh';
    document.getElementById("exemplu_probl_text").appendChild(linie19_probl);       
    
    var filler=document.createElement("div");
    filler.style.height=0.1*100+'vh';
    filler.style.width=100+'vw';
    filler.style.display='block';
    filler.style.float='left';
    document.getElementById("exemplu_probl_text").appendChild(filler);
    
    $(".resizeText24").resizeText0();
    $(".resizeText25").resizeText0();
    $(".resizeText26").resizeText0();
    $(".resizeText27").resizeText0();
    $(".resizeText28").resizeText0();
    $(".resizeText29").resizeText0();
    $(".resizeText30").resizeText0();
    $(".resizeText31").resizeText0();
    $(".resizeText32").resizeText0();
    $(".resizeText33").resizeText0();
    $(".resizeText34").resizeText0();
    $(".resizeText35").resizeText0();
    $(".resizeText36").resizeText0();
    $(".resizeText37").resizeText0();
    $(".resizeText38").resizeText0();
    $(".resizeText39").resizeText0();
    $(".resizeText40").resizeText0();
    $(".resizeText41").resizeText0();
    $(".resizeText42").resizeText0();
    $(".resizeText43").resizeText0();
    $(".resizeText44").resizeText0();
    $(".resizeText45").resizeText0();
    $(".resizeText46").resizeText0();

    
    setTimeout(function(){
    document.getElementById("ohmtitlu").style.left="10%";
    document.getElementById("kirtitlu").style.right="0%";

    },1500);
    setTimeout(function(){
        document.getElementById("ohmtitlu").style.left="-60%";
    document.getElementById("kirtitlu").style.right="-60%";
    },3500);

    setTimeout(function(){
        document.getElementById("bara").style.opacity=1;
        document.getElementById("ohmtitlu_real").style.marginLeft="auto";
        document.getElementById("ohmtitlu_real").style.opacity=1;
        document.getElementById("ohmtitlu_real").style.textAlign='center';
        document.body.style.backgroundSize="15%,15%";
		
       document.getElementById('lista').style.opacity=1;
        document.body.style.backgroundImage="url(imagini/lig_left.png),url(imagini/lig_right.png)";
        document.body.style.overflowY='auto';
    },4000);
    setTimeout(function(){
        document.getElementById("ohm_desc").style.opacity=1;
    },4500);
    setTimeout(function(){
        document.getElementById("formula_ohm").style.opacity=1;
        document.getElementById("georg").style.opacity=1;
        document.getElementById("elemente_titlu").style.opacity=1;
        document.getElementById("bara2").style.opacity=1;
    },5000);
       setTimeout(function(){
        document.getElementById("buddy_arrow").style.opacity=0.7;
    },5000);

    setInterval(function(){
        miscare();
    },3000);
    function miscare(){
        var sansa=Math.floor(Math.random() * 10);
        if(sansa<=2){
            document.getElementById("buddy_imagine").style.transform="rotate(360deg)";
            setTimeout(function(){
                document.getElementById("buddy_imagine").style.transform="rotate(0deg)";
            },500);
        }
        if(sansa>2 && sansa<=4){
            document.getElementById("buddy_imagine").style.marginTop="-5vh";
            setTimeout(function(){
                document.getElementById("buddy_imagine").style.marginTop="5vh";
                setTimeout(function(){
                    document.getElementById("buddy_imagine").style.marginTop="0vh";
                },500);
            },500);
        }
        if(sansa>4 && sansa<=8){
            document.getElementById("buddy_imagine").style.marginLeft="-1vh";
            setTimeout(function(){
                document.getElementById("buddy_imagine").style.marginLeft="1vh";
                setTimeout(function(){
                    document.getElementById("buddy_imagine").style.marginLeft="0vh";
                },500);
            },500);
        }
        if(sansa>8){
            document.getElementById("buddy_imagine").style.transform="scale(1.1,1.1)";
            setTimeout(function(){
                document.getElementById("buddy_imagine").style.transform="scale(1,1)";
            },500);
        }
        
        
        
        
    }
}
function serie(){
    document.getElementById("exemplu").style.backgroundImage="url(imagini/serie_poza.png)";
    document.getElementById("definitie").style.backgroundImage="url(imagini/serie_expl.png)";
}
function paralel(){
    document.getElementById("exemplu").style.backgroundImage="url(imagini/par_poza.png)";
    document.getElementById("definitie").style.backgroundImage="url(imagini/par_expl.png)";
}