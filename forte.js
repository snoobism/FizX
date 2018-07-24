var y0=window.screen.availHeight;
var x0=window.screen.availWidth;

$.fn.resizeText0 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
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
window.onload = function (){
    var d=document.getElementById("lista").children;
	var e=document.getElementsByClassName("textc");
    var m=document.getElementsByClassName("link");
    for(var i=0;i<=m.length-1;i++)
        {
            m[1].style.color='#00261C';
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
                    m[i].style.backgroundColor='#00261C';
                    m[i].style.color='#97ED8A';
                    d[i].style.backgroundColor='#00261C';
                    d[i].style.color='#97ED8A';
                }
            this.style.backgroundColor='#97ED8A';
            this.style.color='#00261C';
            m[$("li").index(this)].style.backgroundColor='#97ED8A';
            m[$("li").index(this)].style.color='#00261C';

        },function(){
            for(var i=0;i<=d.length-2;i++)
                {
                    m[i].style.backgroundColor='#00261C';
                    m[i].style.color='#97ED8A';
                    d[i].style.backgroundColor='#00261C';
                    d[i].style.color='#97ED8A';
                }
            d[1].style.backgroundColor='#97ED8A';
            d[1].style.color='#00261C';
            m[1].style.backgroundColor='#97ED8A';
            m[1].style.color='#00261C';
            
        })
	}
    d[4].style.width=0.1*x0+'px';
    d[4].style.height=0.045*y0+'px';
    setTimeout(function(){
        document.getElementById("resort").style.transition='0.5s all';
        document.getElementById("greutate").style.transition='0.5s all';
    },1);
    document.getElementById("greutate").style.width=0.1*x0+'px';
    document.getElementById("greutate").style.height=0.4*x0+"px";
    document.getElementById("greutate").style.marginTop=-0.2*x0+'px';
    document.getElementById("resort").style.width=0.1*x0+"px";
    document.getElementById("resort").style.marginTop=-0.4*x0+'px';
    document.getElementById("resort").style.height=0*y0+'px';
    setTimeout(function(){
        document.getElementById("resort").style.height=0.6*x0+'px';
    },1000);
    setTimeout(function(){
        document.getElementById("greutate").style.backgroundImage="url(imagini/greutate_img2.png)";
    },2000);
    setTimeout(function(){
        document.getElementById("resort").style.height=0*y0+'px';
    },3250);
    
    document.getElementById("text_intro").style.width=0.7*x0+'px';
    document.getElementById("text_intro").style.height=0.7*y0+'px';
    
    setTimeout(function(){
        document.getElementById("text_intro").style.opacity=1;
    },4000);
    setTimeout(function(){
        document.getElementById("text_intro").style.opacity=0;
    },5250);
    
    setTimeout(function(){
        document.body.style.backgroundSize="15%,15%,cover";
        document.body.style.backgroundImage="url(imagini/left_mec.png),url(imagini/right_mec.png),linear-gradient(to right, #00261C, #044C29, #00261C)";
        document.body.style.overflowY='auto';
    },5500);
    setTimeout(function(){
        document.getElementById("lista").style.opacity=1;
    },6000);
    setTimeout(function(){
        document.getElementById("grav_header").style.opacity=1;
    },6250);
    setTimeout(function(){
        document.getElementById("bara0").style.opacity=1;
    },6500);
    setTimeout(function(){
        document.getElementById("grav_desc_cont").style.opacity=1;
    },6750);
    setTimeout(function(){
        document.getElementById("grav_img_cont").style.opacity=1;
    },7000);
    setTimeout(function(){
        document.getElementById("atr_formula_text").style.opacity=1;
    },7250);
    setTimeout(function(){
        document.getElementById("atr_formula_img").style.opacity=1;
    },7500);
    setTimeout(function(){
        document.getElementById("atr_formula_explicatie").style.opacity=1;
    },7750);
    setTimeout(function(){
        document.getElementById("buddy_arrow").style.opacity=0.7;
    },8250);

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

    
    document.getElementById("grav_header").style.marginTop=0.1*y0+'px';
    document.getElementById("grav_header").style.fontSize=0.1*y0+'px';
    document.getElementById("bara0").style.marginTop=0.01*y0+'px';
    
    document.getElementById("grav_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("grav_desc_cont").style.marginLeft=0.03*x0+"px";
    document.getElementById("grav_desc_titlu").style.width=0.5*x0+'px';
    document.getElementById("grav_desc_titlu").style.height=0.1*y0+'px';
    document.getElementById("grav_desc_text").style.width=0.5*x0+'px';
    document.getElementById("grav_desc_text").style.height=0.4*y0+'px';
    
    document.getElementById("grav_img_cont").style.marginLeft=0.03*x0+'px';
    document.getElementById("grav_img").style.width=0.4*x0+'px';
    document.getElementById("grav_img").style.height=0.3*y0+'px';
    document.getElementById("grav_img_titlu").style.width=0.4*x0+'px';
    document.getElementById("grav_img_titlu").style.height=0.1*y0+"px";
    

    $(".resizeText0").resizeText0();
    $(".resizeText1").resizeText0();
    $(".resizeText2").resizeText0();
    
    document.getElementById("atr_formula_text").style.marginTop=0.05*y0+'px';
    document.getElementById("atr_formula_text").style.marginLeft=0.25*x0+'px';
    document.getElementById("atr_formula_text").style.width=0.5*x0+"px";
    document.getElementById("atr_formula_text").style.height=0.05*y0+'px';
    $(".resizeText3").resizeText0();
    
    document.getElementById("atr_formula_img").style.width=0.7*x0+'px';
    document.getElementById("atr_formula_img").style.height=0.25*y0+'px';
    document.getElementById("atr_formula_img").style.marginLeft=0.15*x0+"px";
    document.getElementById('atr_formula_img').style.marginTop=0.025*y0+'px';
    
    
    document.getElementById("atr_formula_explicatie").style.width=0.5*x0+'px';
    document.getElementById("atr_formula_explicatie").style.height=0.2*y0+"px";
    document.getElementById("atr_formula_explicatie").style.marginLeft=0.25*x0+'px';
    document.getElementById("atr_formula_explicatie").style.marginTop=0.01*y0+'px';
    
    
    $(".resizeText4").resizeText0();
    
    document.getElementById("grav_expl").style.width=0.7*x0+'px';
    document.getElementById("grav_expl").style.height=0.2*y0+'px';
    document.getElementById("grav_expl").style.marginTop=0.02*y0+'px';
    document.getElementById("grav_expl").style.marginLeft=0.15*x0+'px';
    
    $(".resizeText5").resizeText0();
    
    document.getElementById("grav_formula").style.width=0.4*x0+'px';
    document.getElementById("grav_formula").style.height=0.25*y0+'px';
    document.getElementById("grav_formula").style.marginLeft=0.3*x0+'px';
    document.getElementById("grav_formula").style.marginTop=0.001*y0+'px';
    
    document.getElementById("elast_header").style.fontSize=0.1*y0+'px';
    document.getElementById("elast_header").style.marginTop=0.001*y0+'px';
    document.getElementById("bara1").style.marginTop=0.01*y0+'px';
    
    document.getElementById("filler").style.height=0.05*y0+'px';
   
    document.getElementById("elast_desc_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("elast_img_cont").style.marginLeft=0.03*x0+'px';
    document.getElementById("elast_img").style.width=0.5*x0+'px';
    document.getElementById("elast_img").style.height=0.6*y0+'px';
    document.getElementById("elast_img_titlu").style.height=0.1*y0+'px';
    document.getElementById('elast_img_titlu').style.width=0.5*x0+'px';
    
    $(".resizeText6").resizeText0();
    
   document.getElementById("elast_desc_cont").style.marginLeft=0.03*y0+'px';
    document.getElementById("elast_desc_text").style.width=0.4*x0+'px';
    document.getElementById("elast_desc_text").style.height=0.45*y0+'px';
    document.getElementById("elast_desc_titlu").style.width=0.4*x0+'px';
    document.getElementById("elast_desc_titlu").style.height=0.1*y0+'px';
    
    $(".resizeText7").resizeText0();
    $(".resizeText8").resizeText0();
    
    document.getElementById("forta_elast_cont").style.marginLeft=0.15*x0+'px';
    document.getElementById("forta_elast_cont").style.marginTop=0.1*y0+'px';
    document.getElementById("forta_elast_desc_titlu").style.height=0.1*y0+'px';
    document.getElementById("forta_elast_desc_titlu").style.width=0.3*x0+'px';
    document.getElementById("forta_elast_desc_text").style.height=0.4*y0+'px';
    document.getElementById("forta_elast_desc_text").style.width=0.3*x0+'px';
    
    document.getElementById("forta_elast_schita_img").style.height=0.4*y0+'px';
    document.getElementById("forta_elast_schita_img").style.width=0.4*x0+'px';
    
    $(".resizeText9").resizeText0();
    $(".resizeText10").resizeText0();
    
    document.getElementById('resort_titlu').style.width=0.4*x0+'px';
    document.getElementById('resort_titlu').style.height=0.1*y0+'px';
    
    $('.resizeText11').resizeText0();
    
    document.getElementById("expl1").style.width=0.6*x0+'px';
    document.getElementById('expl1').style.height=0.1*y0+'px';
    document.getElementById('expl1').style.marginTop=0.1*y0+'px';
    document.getElementById("expl1").style.marginLeft=0.2*x0+'px';
    
    $(".resizeText12").resizeText0();
    
    document.getElementById("expl2").style.width=0.4*x0+'px';
    document.getElementById("expl2").style.height=0.25*y0+"px";
    document.getElementById("expl2").style.marginLeft=0.3*x0+"px";
    document.getElementById("expl2").style.marginTop=0.01*y0+'px';
    
    document.getElementById("legea_hooke_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("legea_hooke_cont").style.marginLeft=0.1775*x0+"px";
    document.getElementById("legea_hooke_cont").style.width=0.575*x0+'px';
    document.getElementById("legea_hooke_cont").style.height=0.1*x0+'px';
    
    document.getElementById("legea_hooke_titlu").style.width=0.175*x0+'px';
    document.getElementById("legea_hooke_titlu").style.height=0.175*x0+'px';
    document.getElementById("legea_hooke_titlu").style.marginTop=-0.0435*x0+'px';

    document.getElementById("legea_hooke_text").style.width=0.4*x0+'px';
    document.getElementById("legea_hooke_text").style.height=0.1*x0+'px';
    document.getElementById("legea_hooke_text").style.marginLeft=0.175*x0+"px";
    
    $(".resizeText13").resizeText0();
    
    document.getElementById("round").style.width=0.05*x0+"px";
    document.getElementById("round").style.height=0.1*x0+'px';
    document.getElementById("round").style.marginLeft=0.575*x0+'px';
    
    document.getElementById("hooke_formula").style.width=0.7*x0+'px';
    document.getElementById("hooke_formula").style.height=0.3*y0+'px';
    document.getElementById("hooke_formula").style.marginLeft=0.15*x0+"px";
    document.getElementById("hooke_formula").style.marginTop=0.1*y0+'px';
    
    document.getElementById("expl3").style.width=0.1*x0+"px";
    document.getElementById('expl3').style.height=0.075*y0+'px';
    document.getElementById("expl3").style.marginLeft=0.45*x0+'px';
    document.getElementById("expl3").style.marginTop=0.01*y0+'px';
    $(".resizeText14").resizeText0();
    
    document.getElementById("hooke_expl").style.width=0.5*x0+'px';
    document.getElementById("hooke_expl").style.height=0.6*y0+'px';
    document.getElementById("hooke_expl").style.marginLeft=0.25*x0+'px';
    document.getElementById("hooke_expl").style.marginTop=0.02*y0+'px';
    
    document.getElementById("tensiune_header").style.marginTop=0.03*y0+'px';
    document.getElementById("tensiune_header").style.fontSize=0.1*y0+"px";
    document.getElementById("bara2").style.marginTop=0.01*y0+'px';
    
    document.getElementById("tensiune_cont").style.marginTop=0.05*y0+"px";
    document.getElementById("tensiune_desc_cont").style.marginLeft=0.065*x0+'px';
    document.getElementById("tensiune_titlu").style.width=0.5*x0+'px';
    document.getElementById("tensiune_titlu").style.height=0.1*y0+'px';
    document.getElementById("tensiune_desc").style.width=0.5*x0+"px";
    document.getElementById("tensiune_desc").style.height=0.3*y0+'px';
    
    $(".resizeText15").resizeText0();
    $(".resizeText16").resizeText0();
    
    document.getElementById("tensiune_img_cont").style.marginLeft=0.065*x0+'px';
    document.getElementById("tensiune_img").style.width=0.3*x0+'px';
    document.getElementById("tensiune_img").style.height=0.5*y0+'px';
    document.getElementById("tensiune_img_titlu").style.width=0.3*x0+'px';
    document.getElementById("tensiune_img_titlu").style.height=0.1*y0+'px';
    $(".resizeText17").resizeText0();
    
    document.getElementById("tensiune_expl").style.marginTop=0.05*y0+'px';
    document.getElementById("tensiune_img_real").style.width=0.25*x0+'px';
    document.getElementById("tensiune_img_real").style.height=0.6*y0+"px";
    document.getElementById("tensiune_desc_real_titlu").style.width=0.4*x0+'px';
    document.getElementById("tensiune_desc_real_titlu").style.height=0.1*y0+'px';
    document.getElementById("tensiune_desc_real").style.width=0.4*x0+'px';
    document.getElementById("tensiune_desc_real").style.height=0.5*y0+'px';
    
    $(".resizeText18").resizeText0();
    $(".resizeText19").resizeText0();
    
    document.getElementById("frecare_header").style.marginTop=0.05*y0+'px';
    document.getElementById("frecare_header").style.fontSize=0.1*y0+'px';
    document.getElementById("bara3").style.marginTop=0.01*y0+'px';
    
    document.getElementById("frec_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("frec_desc_cont").style.marginLeft=0.06*x0+'px';
    document.getElementById("frec_titlu").style.width=0.5*x0+'px';
    document.getElementById("frec_titlu").style.height=0.1*y0+'px';
    
    document.getElementById("frec_desc").style.width=0.5*x0+'px';
    document.getElementById("frec_desc").style.height=0.3*y0+'px';
    
    $(".resizeText20").resizeText0();
    $(".resizeText21").resizeText0();
    
    document.getElementById("frec_schita").style.width=0.3*x0+"px";
    document.getElementById("frec_schita").style.height=0.3*x0+'px';
    document.getElementById("frec_schita").style.marginLeft=0.06*x0+'px';
    
    document.getElementById("legi_frec_header").style.marginTop=0.05*y0+'px';
    document.getElementById("legi_frec_header").style.fontSize=0.075*y0+'px';
    
    document.getElementById("lege1_frec").style.marginTop=0.05*y0+'px';
    document.getElementById("lege1_frec").style.marginLeft=0.2*x0+'px';
    document.getElementById("lege1_titlu").style.height=0.15*y0+'px';
    document.getElementById('lege1_titlu').style.width=0.2*x0+'px';
    document.getElementById("lege1_desc").style.height=0.15*y0+'px';
    document.getElementById("lege1_desc").style.width=0.4*x0+'px';
    
    $(".resizeText22").resizeText0();
    $(".resizeText23").resizeText0();
    
    document.getElementById("lege2_frec").style.marginTop=0.05*y0+'px';
    document.getElementById("lege2_frec").style.marginLeft=0.2*x0+'px';
    document.getElementById("lege2_titlu").style.height=0.15*y0+'px';
    document.getElementById('lege2_titlu').style.width=0.2*x0+'px';
    document.getElementById("lege2_desc").style.height=0.15*y0+'px';
    document.getElementById("lege2_desc").style.width=0.4*x0+'px';
    
    $(".resizeText24").resizeText0();
    $(".resizeText25").resizeText0();
    
    document.getElementById("frec_formula").style.width=0.3*x0+'px';
    document.getElementById('frec_formula').style.height=0.2*y0+'px';
    document.getElementById('frec_formula').style.marginLeft=0.35*x0+'px';
    document.getElementById("frec_formula").style.marginTop=0.02*y0+'px';
    
    document.getElementById("frec_expl").style.width=0.4*x0+'px';
    document.getElementById('frec_expl').style.height=0.1*y0+'px';
    document.getElementById('frec_expl').style.marginLeft=0.3*x0+'px';
        
    $(".resizeText26").resizeText0();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}