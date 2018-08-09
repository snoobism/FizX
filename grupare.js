var y0=window.screen.availHeight;
var x0=window.screen.availWidth;

$.fn.resizeText0 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline;overflow:hidden;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
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
    
    
    
    setTimeout(function(){for(var i=1;i<=10;i++)
        {
            $(".resizeText"+i).resizeText0();
        }
                         
     },100);

    
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
    var rez=[],gen=[];
    for(var j=0;j<=4;j++)
        {
            rez[j]=document.createElement("div");
            rez[j].style.width=0.2*100+'vw';
            rez[j].style.height=0.25*100+'vh';
            rez[j].style.backgroundSize="100%";
            rez[j].style.backgroundRepeat='no-repeat';
            rez[j].style.backgroundPosition="center";
            rez[j].style.backgroundImage="url(imagini/rezistor_start.png)";
            rez[j].style.opacity=0;
            rez[j].style.top=0.15*100+'vh';
            rez[j].style.position="absolute";
            rez[j].style.transition='0.5s all';
            rez[j].id="rez"+j;
            document.body.appendChild(rez[j]);
            
            
            gen[j]=document.createElement("div");
            gen[j].style.width=0.2*100+'vw';
            gen[j].style.height=0.25*100+'vh';
            gen[j].style.backgroundSize="100%";
            gen[j].style.backgroundRepeat='no-repeat';
            gen[j].style.backgroundPosition='center';
            gen[j].style.backgroundImage="url(imagini/generator_start.png)";
            gen[j].style.opacity=0;
            gen[j].style.top=0.45*100+'vh';
            gen[j].style.position="absolute";
            gen[j].style.transition='0.5s all';
            gen[j].id="gen"+j;
            document.body.appendChild(gen[j]);

        }
    document.getElementById("rez"+0).style.left=0+'px';
    document.getElementById("rez"+1).style.left=0.2*100+'vw';
    document.getElementById("rez"+2).style.left=0.4*100+'vw';
    document.getElementById("rez"+3).style.left=0.6*100+'vw';
    document.getElementById("rez"+4).style.left=0.8*100+'vw';
    
    document.getElementById("gen"+4).style.left=0+'px';
    document.getElementById("gen"+3).style.left=0.2*100+'vw';
    document.getElementById("gen"+2).style.left=0.4*100+'vw';
    document.getElementById("gen"+1).style.left=0.6*100+'vw';
    document.getElementById("gen"+0).style.left=0.8*100+'vw';
    var i=0;
    var int1=setInterval(function(){
        rez[i].style.opacity=1;
        i++;
        if(i==5){
            clearInterval(int1);
        }
    },100);
    setTimeout(function(){
        var i=0;
        var int2=setInterval(function(){
        gen[i].style.opacity=1;
        i++;
        if(i>4){
            clearInterval(int2);
        }
    },100);
    },1250)
    setTimeout(function(){
            document.getElementById("rez"+0).style.opacity=0;
            document.getElementById("rez"+1).style.opacity=0;
            document.getElementById("rez"+2).style.opacity=0;
            document.getElementById("rez"+3).style.opacity=0;
            document.getElementById("rez"+4).style.opacity=0;

            document.getElementById("gen"+4).style.opacity=0;
            document.getElementById("gen"+3).style.opacity=0;
            document.getElementById("gen"+2).style.opacity=0;
            document.getElementById("gen"+1).style.opacity=0;
            document.getElementById("gen"+0).style.opacity=0;
        
            document.getElementById("rez"+0).style.zIndex=-1;
            document.getElementById("rez"+1).style.zIndex=-1;
            document.getElementById("rez"+2).style.zIndex=-1;
            document.getElementById("rez"+3).style.zIndex=-1;
            document.getElementById("rez"+4).style.zIndex=-1;

            document.getElementById("gen"+4).style.zIndex=-1;
            document.getElementById("gen"+3).style.zIndex=-1;
            document.getElementById("gen"+2).style.zIndex=-1;
            document.getElementById("gen"+1).style.zIndex=-1;
            document.getElementById("gen"+0).style.zIndex=-1;
    },2500);
    var titlu_img=document.createElement("div");
    titlu_img.className="imagine";
    titlu_img.style.backgroundColor="rgba(0,0,0,0)";
    titlu_img.style.width=0.9*100+'vw';
    titlu_img.style.left='50%';
    titlu_img.style.top='50%';
    titlu_img.style.height=0.9*100+'vh';
    titlu_img.style.position="absolute";
    titlu_img.style.transform='translate(-50%,-50%) scale(1,1)';
    titlu_img.style.transition='1s all';
    titlu_img.style.opacity=0;
    titlu_img.id='titlu_id';
    titlu_img.style.backgroundImage="url(imagini/titlu_grupare.png)";
    document.body.appendChild(titlu_img);
    setTimeout(function(){
        document.getElementById("titlu_id").style.opacity=1;
    },3500);
    setTimeout(function(){
        document.getElementById("titlu_id").style.transform="translate(-50%,-50%) scale(0.01,0.01)";
        document.body.style.backgroundSize="15%,15%";
		document.body.style.backgroundImage="url(imagini/lig_left.png),url(imagini/lig_right.png)";    
        document.body.style.overflowY='auto';
    },5000);
    setTimeout(function(){
        document.getElementById('titlu_id').style.opacity=0;
        document.getElementById('titlu_id').style.zIndex=-1;
    },5250);
    setTimeout(function(){
        document.getElementById("lista").style.opacity=1;
    },5500);
    setTimeout(function(){
        document.getElementById("rezistoare_titlu").style.opacity=1;
    },5750);
    setTimeout(function(){
        document.getElementById("bara1").style.opacity=1;
    },6000);
    setTimeout(function(){
        document.getElementById("cont_serie").style.opacity=1;
    },6250);
    setTimeout(function(){
        document.getElementById("cont_paralel").style.opacity=1;
    },6500);
    setTimeout(function(){
        document.getElementById("generatoare_titlu").style.opacity=1;
        document.getElementById("bara2").style.opacity=1;
        document.getElementById("gen_cont_serie").style.opacity=1;
        document.getElementById("gen_cont_paralel").style.opacity=1;
    },7000);
setTimeout(function(){
        document.getElementById("buddy_arrow").style.opacity=0.7;
    },7000);

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
    
    var rezistoare_titlu=document.createElement("div");
    rezistoare_titlu.style.width=100+'vw';
    rezistoare_titlu.style.height=0.125*100+'vh';
    rezistoare_titlu.style.position='relative';
    rezistoare_titlu.className='titlu2 resizeText1';
    rezistoare_titlu.style.marginTop=0.1*100+'vh';
    rezistoare_titlu.style.opacity=0;
    rezistoare_titlu.innerHTML="GRUPAREA REZISTOARELOR";
    rezistoare_titlu.style.textAlign='center';
    rezistoare_titlu.style.transition='1s all';
    rezistoare_titlu.id="rezistoare_titlu";
    document.body.appendChild(rezistoare_titlu);
    
    $(".resizeText1").resizeText0();
    var bara1=document.createElement("div");
    bara1.id='bara1';
    bara1.className='bara';
    bara1.style.opacity=0;
    bara1.style.transition='1s all';
    document.body.appendChild(bara1);
    
    var cont_serie=document.createElement("div");
    cont_serie.id="cont_serie";
    cont_serie.style.width=0.45*100+'vw';
    cont_serie.style.height=0.6*100+'vh';
    cont_serie.style.marginLeft=0.04*100+'vw';
    cont_serie.style.display='inline-block';
    cont_serie.style.boxShadow='0px 0px 5px black';
    cont_serie.style.opacity=0;
    cont_serie.style.transition='1s all';
    document.body.appendChild(cont_serie);
    
    var cont_serie_meniu_1=document.createElement("div");
    cont_serie_meniu_1.id="cont_serie_meniu_1";
    cont_serie_meniu_1.style.width=0.224*100+'vw';
    cont_serie_meniu_1.style.height=0.1*100+'vh';
    cont_serie_meniu_1.className="titlu resizeText2";
    cont_serie_meniu_1.innerHTML="exemplu";
    cont_serie_meniu_1.style.display='inline-block';
    cont_serie_meniu_1.style.verticalAlign='top';
    cont_serie_meniu_1.style.lineHeight=0.1*100+'vh';
    cont_serie_meniu_1.style.borderRight='1px solid black';
    cont_serie_meniu_1.style.boxShadow='0px 0px 0px black';
    cont_serie_meniu_1.onclick=function(){serie_grupare()};
    cont_serie_meniu_1.style.cursor='pointer';
    document.getElementById("cont_serie").appendChild(cont_serie_meniu_1);
    
    var cont_serie_meniu_2=document.createElement("div");
    cont_serie_meniu_2.id="cont_serie_meniu_2";
    cont_serie_meniu_2.style.width=0.224*100+'vw';
    cont_serie_meniu_2.style.height=0.1*100+'vh';
    cont_serie_meniu_2.className="titlu3 resizeText3";
    cont_serie_meniu_2.innerHTML="FORMULĂ";
    cont_serie_meniu_2.style.display='inline-block';
    cont_serie_meniu_2.style.verticalAlign='top';
    cont_serie_meniu_2.style.boxShadow='0px 0px 0px black';
    cont_serie_meniu_2.style.lineHeight=0.1*100+'vh';
    cont_serie_meniu_2.style.cursor='pointer'
    cont_serie_meniu_2.onclick=function(){serie_formula()};
    document.getElementById("cont_serie").appendChild(cont_serie_meniu_2);
    
    var cont_serie_imagine=document.createElement("div");
    cont_serie_imagine.id="cont_serie_imagine";
    cont_serie_imagine.style.width=0.45*100+'vw';
    cont_serie_imagine.style.height=0.5*100+'vh';
    cont_serie_imagine.style.display='block';
    cont_serie_imagine.className='imagine';
    cont_serie_imagine.style.backgroundImage='url(imagini/serie_titlu.png)';
    cont_serie_imagine.style.transition='0.5s all';

    document.getElementById("cont_serie").appendChild(cont_serie_imagine);
    $(".resizeText2").resizeText0();
    $(".resizeText3").resizeText0();

    var cont_paralel=document.createElement("div");
    cont_paralel.id="cont_paralel";
    cont_paralel.style.width=0.45*100+'vw';
    cont_paralel.style.height=0.6*100+'vh';
    cont_paralel.style.marginLeft=0.04*100+'vw';
    cont_paralel.style.display='inline-block';
    cont_paralel.style.boxShadow='0px 0px 5px black';
    cont_paralel.style.opacity=0;
    cont_paralel.style.transition='1s all';
    document.body.appendChild(cont_paralel);
    
    var cont_paralel_meniu_1=document.createElement("div");
    cont_paralel_meniu_1.id="cont_paralel_meniu_1";
    cont_paralel_meniu_1.style.width=0.224*100+'vw';
    cont_paralel_meniu_1.style.height=0.1*100+'vh';
    cont_paralel_meniu_1.className="titlu resizeText4";
    cont_paralel_meniu_1.innerHTML="exemplu";
    cont_paralel_meniu_1.style.display='inline-block';
    cont_paralel_meniu_1.style.verticalAlign='top';
    cont_paralel_meniu_1.style.lineHeight=0.1*100+'vh';
    cont_paralel_meniu_1.style.borderRight='1px solid black';
    cont_paralel_meniu_1.style.boxShadow='0px 0px 0px black';
    cont_paralel_meniu_1.style.cursor='pointer';
    cont_paralel_meniu_1.onclick=function(){paralel_grupare()};
    document.getElementById("cont_paralel").appendChild(cont_paralel_meniu_1);
    
    var cont_paralel_meniu_2=document.createElement("div");
    cont_paralel_meniu_2.id="cont_paralel_meniu_2";
    cont_paralel_meniu_2.style.width=0.224*100+'vw';
    cont_paralel_meniu_2.style.height=0.1*100+'vh';
    cont_paralel_meniu_2.className="titlu3 resizeText5";
    cont_paralel_meniu_2.innerHTML="FORMULĂ";
    cont_paralel_meniu_2.style.display='inline-block';
    cont_paralel_meniu_2.style.verticalAlign='top';
    cont_paralel_meniu_2.style.boxShadow='0px 0px 0px black';
    cont_paralel_meniu_2.style.lineHeight=0.1*100+'vh';
    cont_paralel_meniu_2.style.cursor='pointer';
    cont_paralel_meniu_2.onclick=function(){paralel_formula()};
    document.getElementById("cont_paralel").appendChild(cont_paralel_meniu_2);
    
    var cont_paralel_imagine=document.createElement("div");
    cont_paralel_imagine.id="cont_paralel_imagine";
    cont_paralel_imagine.style.width=0.45*100+'vw';
    cont_paralel_imagine.style.height=0.5*100+'vh';
    cont_paralel_imagine.style.display='block';
    cont_paralel_imagine.className='imagine';
    cont_paralel_imagine.style.backgroundImage='url(imagini/paralel_titlu.png)';
    cont_paralel_imagine.style.transition='0.5s all';

    document.getElementById("cont_paralel").appendChild(cont_paralel_imagine);
    $(".resizeText4").resizeText0();
    $(".resizeText5").resizeText0();
    
    //
    
    var generatoare_titlu=document.createElement("div");
    generatoare_titlu.style.width=100+'vw';
    generatoare_titlu.style.height=0.125*100+'vh';
    generatoare_titlu.style.position='relative';
    generatoare_titlu.className='titlu2 resizeText6';
    generatoare_titlu.style.marginTop=0.1*100+'vh';
    generatoare_titlu.style.opacity=0;
    generatoare_titlu.innerHTML="GRUPAREA GENERATOARELOR";
    generatoare_titlu.style.textAlign='center';
    generatoare_titlu.style.transition='1s all';
    generatoare_titlu.id="generatoare_titlu";
    document.body.appendChild(generatoare_titlu);
    
    $(".resizeText6").resizeText0();
    var bara2=document.createElement("div");
    bara2.id='bara2';
    bara2.className='bara';
    bara2.style.opacity=0;
    bara2.style.transition='1s all';
    document.body.appendChild(bara2);
    
    var gen_cont_serie=document.createElement("div");
    gen_cont_serie.id="gen_cont_serie";
    gen_cont_serie.style.width=0.45*100+'vw';
    gen_cont_serie.style.height=0.6*100+'vh';
    gen_cont_serie.style.marginLeft=0.04*100+'vw';
    gen_cont_serie.style.display='inline-block';
    gen_cont_serie.style.boxShadow='0px 0px 5px black';
    gen_cont_serie.style.opacity=0;
    gen_cont_serie.style.transition='1s all';
    document.body.appendChild(gen_cont_serie);
    
    var gen_cont_serie_meniu_1=document.createElement("div");
    gen_cont_serie_meniu_1.id="gen_cont_serie_meniu_1";
    gen_cont_serie_meniu_1.style.width=0.224*100+'vw';
    gen_cont_serie_meniu_1.style.height=0.1*100+'vh';
    gen_cont_serie_meniu_1.className="titlu resizeText7";
    gen_cont_serie_meniu_1.innerHTML="exemplu";
    gen_cont_serie_meniu_1.style.display='inline-block';
    gen_cont_serie_meniu_1.style.verticalAlign='top';
    gen_cont_serie_meniu_1.style.lineHeight=0.1*100+'vh';
    gen_cont_serie_meniu_1.style.borderRight='1px solid black';
    gen_cont_serie_meniu_1.style.boxShadow='0px 0px 0px black';
    gen_cont_serie_meniu_1.onclick=function(){serie_grupare2()};
    gen_cont_serie_meniu_1.style.cursor='pointer';
    document.getElementById("gen_cont_serie").appendChild(gen_cont_serie_meniu_1);
    
    var gen_cont_serie_meniu_2=document.createElement("div");
    gen_cont_serie_meniu_2.id="gen_cont_serie_meniu_2";
    gen_cont_serie_meniu_2.style.width=0.224*100+'vw';
    gen_cont_serie_meniu_2.style.height=0.1*100+'vh';
    gen_cont_serie_meniu_2.className="titlu3 resizeText8";
    gen_cont_serie_meniu_2.innerHTML="FORMULĂ";
    gen_cont_serie_meniu_2.style.display='inline-block';
    gen_cont_serie_meniu_2.style.verticalAlign='top';
    gen_cont_serie_meniu_2.style.boxShadow='0px 0px 0px black';
    gen_cont_serie_meniu_2.style.lineHeight=0.1*100+'vh';
    gen_cont_serie_meniu_2.style.cursor='pointer'
    gen_cont_serie_meniu_2.onclick=function(){serie_formula2()};
    document.getElementById("gen_cont_serie").appendChild(gen_cont_serie_meniu_2);
    
    var gen_cont_serie_imagine=document.createElement("div");
    gen_cont_serie_imagine.id="gen_cont_serie_imagine";
    gen_cont_serie_imagine.style.width=0.45*100+'vw';
    gen_cont_serie_imagine.style.height=0.5*100+'vh';
    gen_cont_serie_imagine.style.display='block';
    gen_cont_serie_imagine.className='imagine';
    gen_cont_serie_imagine.style.backgroundImage='url(imagini/serie_titlu.png)';
    gen_cont_serie_imagine.style.transition='0.5s all';

    document.getElementById("gen_cont_serie").appendChild(gen_cont_serie_imagine);
    $(".resizeText7").resizeText0();
    $(".resizeText8").resizeText0();

    var gen_cont_paralel=document.createElement("div");
    gen_cont_paralel.id="gen_cont_paralel";
    gen_cont_paralel.style.width=0.45*100+'vw';
    gen_cont_paralel.style.height=0.6*100+'vh';
    gen_cont_paralel.style.marginLeft=0.04*100+'vw';
    gen_cont_paralel.style.display='inline-block';
    gen_cont_paralel.style.boxShadow='0px 0px 5px black';
    gen_cont_paralel.style.opacity=0;
    gen_cont_paralel.style.transition='1s all';
    document.body.appendChild(gen_cont_paralel);
    
    var gen_cont_paralel_meniu_1=document.createElement("div");
    gen_cont_paralel_meniu_1.id="gen_cont_paralel_meniu_1";
    gen_cont_paralel_meniu_1.style.width=0.224*100+'vw';
    gen_cont_paralel_meniu_1.style.height=0.1*100+'vh';
    gen_cont_paralel_meniu_1.className="titlu resizeText9";
    gen_cont_paralel_meniu_1.innerHTML="exemplu";
    gen_cont_paralel_meniu_1.style.display='inline-block';
    gen_cont_paralel_meniu_1.style.verticalAlign='top';
    gen_cont_paralel_meniu_1.style.lineHeight=0.1*100+'vh';
    gen_cont_paralel_meniu_1.style.borderRight='1px solid black';
    gen_cont_paralel_meniu_1.style.boxShadow='0px 0px 0px black';
    gen_cont_paralel_meniu_1.style.cursor='pointer';
    gen_cont_paralel_meniu_1.onclick=function(){paralel_grupare2()};
    document.getElementById("gen_cont_paralel").appendChild(gen_cont_paralel_meniu_1);
    
    var gen_cont_paralel_meniu_2=document.createElement("div");
    gen_cont_paralel_meniu_2.id="gen_cont_paralel_meniu_2";
    gen_cont_paralel_meniu_2.style.width=0.224*100+'vw';
    gen_cont_paralel_meniu_2.style.height=0.1*100+'vh';
    gen_cont_paralel_meniu_2.className="titlu3 resizeText10";
    gen_cont_paralel_meniu_2.innerHTML="FORMULĂ";
    gen_cont_paralel_meniu_2.style.display='inline-block';
    gen_cont_paralel_meniu_2.style.verticalAlign='top';
    gen_cont_paralel_meniu_2.style.boxShadow='0px 0px 0px black';
    gen_cont_paralel_meniu_2.style.lineHeight=0.1*100+'vh';
    gen_cont_paralel_meniu_2.style.cursor='pointer';
    gen_cont_paralel_meniu_2.onclick=function(){paralel_formula2()};
    document.getElementById("gen_cont_paralel").appendChild(gen_cont_paralel_meniu_2);
    
    var gen_cont_paralel_imagine=document.createElement("div");
    gen_cont_paralel_imagine.id="gen_cont_paralel_imagine";
    gen_cont_paralel_imagine.style.width=0.45*100+'vw';
    gen_cont_paralel_imagine.style.height=0.5*100+'vh';
    gen_cont_paralel_imagine.style.display='block';
    gen_cont_paralel_imagine.className='imagine';
    gen_cont_paralel_imagine.style.backgroundImage='url(imagini/paralel_titlu.png)';
    gen_cont_paralel_imagine.style.transition='0.5s all';

    document.getElementById("gen_cont_paralel").appendChild(gen_cont_paralel_imagine);
    $(".resizeText9").resizeText0();
    $(".resizeText10").resizeText0();
}
function serie_grupare(){
    document.getElementById("cont_serie_meniu_1").style.color='#000000';
    document.getElementById("cont_serie_meniu_1").style.background="#ffffff";
    document.getElementById("cont_serie_meniu_2").style.color='#000000';
    document.getElementById("cont_serie_meniu_2").style.background="#f79621"; document.getElementById("cont_serie_imagine").style.backgroundImage="url(imagini/serie_grupare.png)"
}
function serie_formula(){
    document.getElementById("cont_serie_meniu_1").style.color='#000000';
    document.getElementById("cont_serie_meniu_1").style.background="#f79621";
    document.getElementById("cont_serie_meniu_2").style.color='#000000';
    document.getElementById("cont_serie_meniu_2").style.background="#ffffff";  document.getElementById("cont_serie_imagine").style.backgroundImage="url(imagini/serie_formula.png)"
}
function paralel_grupare(){
    document.getElementById("cont_paralel_meniu_1").style.color='#000000';
    document.getElementById("cont_paralel_meniu_1").style.background="#ffffff";
    document.getElementById("cont_paralel_meniu_2").style.color='#000000';
    document.getElementById("cont_paralel_meniu_2").style.background="#f79621";  document.getElementById("cont_paralel_imagine").style.backgroundImage="url(imagini/paralel_grupare.png)"
}
function paralel_formula(){
    document.getElementById("cont_paralel_meniu_1").style.color='#000000';
    document.getElementById("cont_paralel_meniu_1").style.background="#f79621";
    document.getElementById("cont_paralel_meniu_2").style.color='#000000';
    document.getElementById("cont_paralel_meniu_2").style.background="#ffffff";  document.getElementById("cont_paralel_imagine").style.backgroundImage="url(imagini/paralel_formula.png)"
}

function serie_grupare2(){
    document.getElementById("gen_cont_serie_meniu_1").style.color='#000000';
    document.getElementById("gen_cont_serie_meniu_1").style.background="#ffffff";
    document.getElementById("gen_cont_serie_meniu_2").style.color='#000000';
    document.getElementById("gen_cont_serie_meniu_2").style.background="#f79621"; document.getElementById("gen_cont_serie_imagine").style.backgroundImage="url(imagini/gen_serie_grupare.png)"
}
function serie_formula2(){
    document.getElementById("gen_cont_serie_meniu_1").style.color='#000000';
    document.getElementById("gen_cont_serie_meniu_1").style.background="#f79621";
    document.getElementById("gen_cont_serie_meniu_2").style.color='#000000';
    document.getElementById("gen_cont_serie_meniu_2").style.background="#ffffff";  document.getElementById("gen_cont_serie_imagine").style.backgroundImage="url(imagini/gen_serie_formula.png)"
}
function paralel_grupare2(){
    document.getElementById("gen_cont_paralel_meniu_1").style.color='#000000';
    document.getElementById("gen_cont_paralel_meniu_1").style.background="#ffffff";
    document.getElementById("gen_cont_paralel_meniu_2").style.color='#000000';
    document.getElementById("gen_cont_paralel_meniu_2").style.background="#f79621";  document.getElementById("gen_cont_paralel_imagine").style.backgroundImage="url(imagini/gen_paralel_grupare.png)"
}
function paralel_formula2(){
    document.getElementById("gen_cont_paralel_meniu_1").style.color='#000000';
    document.getElementById("gen_cont_paralel_meniu_1").style.background="#f79621";
    document.getElementById("gen_cont_paralel_meniu_2").style.color='#000000';
    document.getElementById("gen_cont_paralel_meniu_2").style.background="#ffffff";  document.getElementById("gen_cont_paralel_imagine").style.backgroundImage="url(imagini/gen_paralel_formula.png)"
}