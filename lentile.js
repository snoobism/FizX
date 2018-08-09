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
    
    
    
    setTimeout(function(){for(var i=0;i<=24;i++)
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
            m[1].style.color='#16193B';
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
                    m[i].style.backgroundColor='#16193B';
                    m[i].style.color='#9DDFF7';
                    d[i].style.backgroundColor='#16193B';
                    d[i].style.color='#9DDFF7';
                }
            this.style.backgroundColor='#9DDFF7';
            this.style.color='#16193B';
            m[$("li").index(this)].style.backgroundColor='#9DDFF7';
            m[$("li").index(this)].style.color='#16193B';

        },function(){
            for(var i=0;i<=d.length-2;i++)
                {
                    m[i].style.backgroundColor='#16193B';
                    m[i].style.color='#9DDFF7';
                    d[i].style.backgroundColor='#16193B';
                    d[i].style.color='#9DDFF7';
                }
            d[1].style.backgroundColor='#9DDFF7';
            d[1].style.color='#16193B';
            m[1].style.backgroundColor='#9DDFF7';
            m[1].style.color='#16193B';
            
        })
	}
    d[4].style.width=0.1*100+'vw';
    d[4].style.height=0.045*100+'vh';
    document.getElementById("intro").style.width=0.9*100+'vw';
    document.getElementById("intro").style.height=0.5*100+'vh';
    setTimeout(function(){
        document.getElementById("intro").style.opacity=1;
        document.getElementById("intro").style.transform='translate(-50%,-50%) scale(1,1)';
    },1000);
    setTimeout(function(){
        document.getElementById("intro").style.transition="0.5s all";
        document.getElementById("intro").style.backgroundImage="url(imagini/intro_lentile.png)";
    },3100);
    setTimeout(function(){
        document.getElementById("intro").style.opacity=0;
    },5000);
    setTimeout(function(){
        document.getElementById("intro").style.transition="0s all";
        document.getElementById("intro").style.position="relative";
        document.getElementById("intro").style.left="auto";
        document.getElementById("intro").style.top="auto";
        document.getElementById("intro").style.transform="translate(0%,0%) scale(1,1)";
        document.getElementById("intro").style.width=0.6*100+'vw';
        document.getElementById("intro").style.height=0.2*100+'vh';
        document.getElementById("intro").style.marginLeft=0.2*100+'vw';
        document.getElementById("intro").style.marginTop=-0.3*100+'vh';
        document.getElementById("intro").style.opacity=1;
        document.getElementById("lista").style.opacity=1;
    },5600);
    setTimeout(function(){
        document.getElementById("intro").style.transition="1s all";
        document.getElementById("intro").style.marginTop=0.1*100+'vh';
    },6000);
    setTimeout(function(){
       document.body.style.backgroundSize="15%,15%,cover";
        document.body.style.backgroundImage="url(imagini/optic_left.png),url(imagini/optic_right.png),linear-gradient(to right,#000000, #16193B, #000000)";
        document.body.style.overflowY='auto';
    },5000);
    setTimeout(function(){
        document.getElementById("bara1").style.opacity="1";
        
    },6500);
    setTimeout(function(){
        document.getElementById("def_cont").style.opacity=1;
    },7000);
    setTimeout(function(){
        document.getElementById("elem_cont").style.opacity=1;
    },7500);
    setTimeout(function(){
        document.getElementById("bara2").style.opacity=1;
        document.getElementById("lentile_header").style.opacity=1;
        document.getElementById("conv_cont").style.opacity=1;
    },8000);
   setTimeout(function(){
        document.getElementById("buddy_arrow").style.opacity=0.7;
    },8500);

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
    document.getElementById("def_cont").style.marginLeft=0.03*100+'vw';
    
    document.getElementById("def_titlu").style.height=0.1*100+'vh';
    document.getElementById("def_titlu").style.width=0.3*100+'vw';
    document.getElementById("def_titlu").style.marginTop=0.05*100+'vh';
    
    document.getElementById("def_desc").style.width=0.3*100+'vw';
    document.getElementById("def_desc").style.height=0.3*100+'vh';
    
    $(".resizeText0").resizeText0();
    $(".resizeText1").resizeText0();

    document.getElementById("elem_cont").style.marginTop=0.05*100+'vh';
    document.getElementById("elem_cont").style.marginLeft=0.03*100+'vw';
    document.getElementById("aop_cont").style.marginLeft=0.5*0.05*100+'vw';
     document.getElementById("focar_cont").style.marginLeft=0.5*0.05*100+'vw';

    document.getElementById("aop_text").style.marginTop=0.05*100+'vh';
    document.getElementById("aop_text").style.width=0.25*100+'vw';
    document.getElementById("aop_text").style.height=0.2*100+'vh';
    document.getElementById("aop_img").style.width=0.25*100+'vw';
    document.getElementById("aop_img").style.height=0.35*100+'vh';
    
    document.getElementById("focar_text").style.marginTop=0.05*100+'vh';
    document.getElementById("focar_text").style.width=0.25*100+'vw';
    document.getElementById("focar_text").style.height=0.2*100+'vh';
    document.getElementById("focar_img").style.width=0.25*100+'vw';
    document.getElementById("focar_img").style.height=0.35*100+'vh';
    
    document.getElementById("elem_titlu").style.width=0.6*100+'vw';
    document.getElementById("elem_titlu").style.height=0.1*100+'vh';
    $(".resizeText2").resizeText0();
    $(".resizeText3").resizeText0();
    $(".resizeText4").resizeText0();
    
    document.getElementById("lentile_header").style.fontSize=0.1*100+'vh';
    document.getElementById("lentile_header").style.marginTop=0.05*100+'vh';
    
    document.getElementById("conv_cont").style.marginLeft=0.15*100+'vw';
    document.getElementById("conv_cont").style.marginTop=0.05*100+'vh';
    document.getElementById("conv_cont").style.width=0.7*100+'vw';

    document.getElementById("conv_titlu").style.width=0.7*100+'vw';
    document.getElementById("conv_titlu").style.height=0.1*100+'vh';
    
    document.getElementById("conv_desc").style.width=0.7*100+'vw';
    document.getElementById("conv_desc").style.height=0.4*100+'vh';
    
    
    var ex_cont=document.getElementsByClassName("ex_cont");
    for(var i=0;i<=ex_cont.length-1;i++)
        {
            ex_cont[i].style.width=0.2*0.7*100+'vw';
            ex_cont[i].style.height=0.95*0.4*100+'vh';
            ex_cont[i].style.marginLeft=0.04*0.7*100+'vw';
            ex_cont[i].style.marginTop=0.025*0.4*100+'vh';
        }
    var c_img=document.getElementsByClassName("c_img");
    for(var i=0;i<=c_img.length-1;i++)
        {
            c_img[i].style.width=0.2*0.7*100+'vw';
            c_img[i].style.height=0.75*0.95*0.4*100+'vh';
        }
    var c_nume=document.getElementsByClassName("c_nume");
    for(var i=0;i<=c_img.length-1;i++)
        {
            c_nume[i].style.width=0.2*0.7*100+'vw';
            c_nume[i].style.height=0.25*0.95*0.4*100+'vh';
        }
    $(".resizeText5").resizeText0();
    $(".resizeText6").resizeText0();
    $(".resizeText7").resizeText0();
    $(".resizeText8").resizeText0();
    $(".resizeText9").resizeText0();
    
    document.getElementById("div_cont").style.marginLeft=0.15*100+'vw';
    document.getElementById("div_cont").style.marginTop=0.1*100+'vh';
    document.getElementById("div_cont").style.width=0.7*100+'vw';

    document.getElementById("div_titlu").style.width=0.7*100+'vw';
    document.getElementById("div_titlu").style.height=0.1*100+'vh';
    
    document.getElementById("div_desc").style.width=0.7*100+'vw';
    document.getElementById("div_desc").style.height=0.4*100+'vh';
    
    var d_img=document.getElementsByClassName("d_img");
    for(var i=0;i<=d_img.length-1;i++)
        {
            d_img[i].style.width=0.2*0.7*100+'vw';
            d_img[i].style.height=0.75*0.95*0.4*100+'vh';
        }
    var d_nume=document.getElementsByClassName("d_nume");
    for(var i=0;i<=d_img.length-1;i++)
        {
            d_nume[i].style.width=0.2*0.7*100+'vw';
            d_nume[i].style.height=0.25*0.95*0.4*100+'vh';
        }
    $(".resizeText10").resizeText0();
    $(".resizeText11").resizeText0();
    $(".resizeText12").resizeText0();
    $(".resizeText13").resizeText0();
    $(".resizeText14").resizeText0();
    
    
    
    document.getElementById("optiuni_cont").style.width=0.15*100+'vw';
    document.getElementById("optiuni_cont").style.height=0.45*100+'vw';
    document.getElementById('focar_cont2').style.marginTop=0.1*100+'vh';
    
    document.getElementById("focar_desc_cont").style.width=0.6*100+'vw';
    document.getElementById("focar_desc_cont").style.height=0.8*100+'vh';
    document.getElementById('focar_desc_cont').style.marginLeft=0.05*100+'vw';
    
    document.getElementById("optiuni_con").style.width=0.15*100+'vw';
    document.getElementById("optiuni_con").style.height=0.15*100+'vw';
    document.getElementById("optiuni_con").style.marginTop=0.03*100+'vw';
    document.getElementById("optiuni_div").style.width=0.15*100+'vw';
    document.getElementById("optiuni_div").style.height=0.15*100+'vw';
    document.getElementById("optiuni_div").style.marginTop=0.03*100+'vw';
    
    document.getElementById("focar_titlu").style.width=0.6*100+'vw';
    document.getElementById("focar_titlu").style.height=0.1*100+'vh';
    
    document.getElementById("focar_desc").style.width=0.6*100+'vw';
    document.getElementById("focar_desc").style.height=0.2*100+'vh';
    
    document.getElementById("focar_img2").style.width=0.6*100+'vw';
    document.getElementById("focar_img2").style.height=0.4*100+'vh';
    
    $(".resizeText15").resizeText0();
    $(".resizeText16").resizeText0();
    
//    document.getElementById("imagine_cont").style.marginTop=0.05*100+'vh';
    document.getElementById("optiuni_cont2").style.width=0.15*100+'vw';
    document.getElementById("optiuni_cont2").style.height=0.45*100+'vw';
    document.getElementById("optiuni_cont2").style.marginLeft=0.05*100+'vw';
    document.getElementById("imagine_desc_cont").style.width=0.7*100+'vw';
    document.getElementById("imagine_desc_cont").style.height=0.6*100+'vh';
    
    document.getElementById("optiuni_con2").style.width=0.15*100+'vw';
    document.getElementById("optiuni_con2").style.height=0.15*100+'vw';
    document.getElementById("optiuni_con2").style.marginTop=0.05*100+'vw';
    document.getElementById("optiuni_div2").style.width=0.15*100+'vw';
    document.getElementById("optiuni_div2").style.height=0.15*100+'vw';
    document.getElementById("optiuni_div2").style.marginTop=0.05*100+'vw';    
    
    document.getElementById("imagine_titlu").style.width=0.7*100+'vw';
    document.getElementById("imagine_titlu").style.height=0.1*100+'vh';
    
    document.getElementById("txt1").style.width=0.35*100+'vw';
    document.getElementById('txt1').style.height=0.1*100+'vh';
    document.getElementById("txt1").style.marginTop=0.02*100+'vh';

    document.getElementById("txt2").style.width=0.35*100+'vw';
    document.getElementById('txt2').style.height=0.1*100+'vh';
    document.getElementById("txt2").style.marginTop=0.02*100+'vh';
    
    document.getElementById("txt3").style.width=0.35*100+'vw';
    document.getElementById('txt3').style.height=0.1*100+'vh';
    document.getElementById("txt3").style.marginTop=0.02*100+'vh';
    
    document.getElementById("txt4").style.width=0.35*100+'vw';
    document.getElementById('txt4').style.height=0.1*100+'vh';
    document.getElementById("txt4").style.marginTop=0.02*100+'vh';
    
    document.getElementById("imagine_img").style.width=0.34*100+'vw';
    document.getElementById("imagine_img").style.height=0.5*100+'vh';
    
    $(".resizeText17").resizeText0();
    $(".resizeText18").resizeText0();
    $(".resizeText19").resizeText0();
    $(".resizeText20").resizeText0();
    $(".resizeText21").resizeText0();
    
    document.getElementById("formule_titlu").style.width=0.85*100+'vw';
    document.getElementById("formule_titlu").style.height=0.1*100+'vh';
    document.getElementById("formule_titlu").style.marginLeft=0.075*100+'vw';
    
    document.getElementById("explicatie_cont").style.width=0.85*100+'vw';
    document.getElementById("explicatie_cont").style.height=0.7*100+'vh';
    document.getElementById("explicatie_cont").style.marginLeft=0.075*100+'vw';
    
    document.getElementById("explicatie_text_cont").style.width=0.35*0.85*100+'vw';
    document.getElementById("explicatie_text_cont").style.height=0.7*100+'vh';
    document.getElementById("explicatie_text_cont").style.marginLeft=0.02*0.85*100+'vw';
    
    document.getElementById("sr").style.marginTop=0.025*100+'vh';
    document.getElementById("sr").style.width=0.35*0.85*100+'vw';
    document.getElementById("sr").style.height=0.325*100+'vh';
    
    document.getElementById("notatii").style.width=0.35*0.85*100+'vw';
    document.getElementById("notatii").style.height=0.2*100+'vh';
    
    document.getElementById("formula").style.width=0.35*0.85*100+'vw';
    document.getElementById("formula").style.height=0.125*100+'vh';
    
    document.getElementById("explicatie_img").style.width=0.6*0.85*100+'vw';
    document.getElementById("explicatie_img").style.height=0.7*100+'vh';

    $(".resizeText22").resizeText0();
    $(".resizeText23").resizeText0();
    $(".resizeText24").resizeText0();
}
function conv_switch(){
    document.getElementById("focar_desc").innerHTML="<strong>La o lentilă convergentă</strong>, toate razele de lumină ce trec prin ea se <green>converg</green> într-un punct <green>F</green>, situat pe axa optică, numit <green>focar imagine</green> (<green>focar real</green>). <green>Focarul obiect</green>(<green>F'</green>) este pe partea cealaltă a lentilei, la aceeași distanță(<green>f</green>) de ea ca și <green>focarul imagine</green>.";
    document.getElementById("focar_img2").style.backgroundImage="url(imagini/focar_conv.png)";
    document.getElementById("optiuni_con").style.backgroundImage="url(imagini/l_conv2.png)";
    document.getElementById("optiuni_con").style.boxShadow="0px 0px 15px #00fff0";
    document.getElementById("optiuni_div").style.backgroundImage="url(imagini/l_div1.png)";
    document.getElementById("optiuni_div").style.boxShadow="0px 0px 15px black";
    $(".resizeText16").resizeText0();

    
}
function div_switch(){
    document.getElementById("focar_desc").innerHTML="<strong>La o lentilă divergentă</strong>, razele de lumină vor avea o <green>traiectorie divergentă</green> la ieșirea din lentilă, în așa fel încât <blue>prelungirile lor</blue> se vor întâlni într-un <green>focar imagine F</green>(<green>focar virtual</green>) situat în aceeași parte cu cea din care au venit. <green>Focarul obiect</green>(<green>F'</green>) este pe partea cealaltă a lentilei, la aceeași distanță(<green>f</green>) de ea ca și <green>focarul imagine</green>.";
    document.getElementById("focar_img2").style.backgroundImage="url(imagini/focar_div.png)";
    document.getElementById("optiuni_con").style.backgroundImage="url(imagini/l_conv1.png)";
    document.getElementById("optiuni_con").style.boxShadow="0px 0px 15px black";
    document.getElementById("optiuni_div").style.backgroundImage="url(imagini/l_div2.png)";
    document.getElementById("optiuni_div").style.boxShadow="0px 0px 15px #00fff0";
    $(".resizeText16").resizeText0();
}
function div_switch2(){
    document.getElementById('txt1').innerHTML="<yellow>Un punct luminos (B)</yellow> emite lumină în toate direcțiile. Pentru a obține grafic <yellow>imaginea acestui punct(B')</yellow>, este suficient să reprezentăm <blue>două</blue> din următoarele raze:";
    document.getElementById("txt2").innerHTML="•<magenta>o rază care trece nedeviată prin centrul optic și traversează lentila fără să fie deviată</magenta>";
    document.getElementById('txt3').innerHTML="•<red>o rază paralelă cu axa optică principală care, după refracție, prelungirea ei trece prin focarul imagine</red>";
    document.getElementById("txt4").innerHTML="•<green>o rază care se îndreaptă spre focarul obiect, după refracție devine paralelă cu axa optică principală</green>";
    document.getElementById("imagine_img").style.backgroundImage="url(imagini/imagine_div.png)";
   document.getElementById("optiuni_con2").style.backgroundImage="url(imagini/l_conv1.png)";
    document.getElementById("optiuni_con2").style.boxShadow="0px 0px 15px black";
    document.getElementById("optiuni_div2").style.backgroundImage="url(imagini/l_div2.png)";
    document.getElementById("optiuni_div2").style.boxShadow="0px 0px 15px #00fff0";
    $(".resizeText18").resizeText0();
    $(".resizeText19").resizeText0();
    $(".resizeText20").resizeText0();
    $(".resizeText21").resizeText0();
}
function conv_switch2(){
    document.getElementById('txt1').innerHTML="<yellow>Un punct luminos (A)</yellow> emite lumină în toate direcțiile. Pentru a obține grafic <yellow>imaginea acestui punct(A')</yellow>, este suficient să reprezentăm <blue>două</blue> din următoarele raze:";
    document.getElementById("txt2").innerHTML="•<magenta>o rază care trece nedeviată prin centrul optic și traversează lentila fără să fie deviată</magenta>";
    document.getElementById('txt3').innerHTML="•<red>o rază paralelă cu axa optică principală care, după refracție, trece prin focarul imagine</red>";
    document.getElementById("txt4").innerHTML="•<green>o rază care trecând prin focarul obiect, după refracție devine paralelă cu axa optică principală</green>";
    document.getElementById("imagine_img").style.backgroundImage="url(imagini/imagine_conv.png)";
   document.getElementById("focar_img2").style.backgroundImage="url(imagini/focar_conv.png)";
    document.getElementById("optiuni_con2").style.backgroundImage="url(imagini/l_conv2.png)";
    document.getElementById("optiuni_con2").style.boxShadow="0px 0px 15px #00fff0";
    document.getElementById("optiuni_div2").style.backgroundImage="url(imagini/l_div1.png)";
    document.getElementById("optiuni_div2").style.boxShadow="0px 0px 15px black";
    $(".resizeText18").resizeText0();
    $(".resizeText19").resizeText0();
    $(".resizeText20").resizeText0();
    $(".resizeText21").resizeText0();
}