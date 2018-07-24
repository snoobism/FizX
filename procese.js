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
            m[1].style.color='#330000';
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
                    m[i].style.backgroundColor='#3B100C';
                    m[i].style.color='#ffffff';
                    d[i].style.backgroundColor='#3B100C';
                    d[i].style.color='#ffffff';
                }
            this.style.backgroundColor='#ffffff';
            this.style.color='#3B100C';
            m[$("li").index(this)].style.backgroundColor='#ffffff';
            m[$("li").index(this)].style.color='#3B100C';

        },function(){
            for(var i=0;i<=d.length-2;i++)
                {
                    m[i].style.backgroundColor='#3B100C';
                    m[i].style.color='#ffffff';
                    d[i].style.backgroundColor='#3B100C';
                    d[i].style.color='#ffffff';
                }
            d[1].style.backgroundColor='#ffffff';
            d[1].style.color='#3B100C';
            m[1].style.backgroundColor='#ffffff';
            m[1].style.color='#3B100C';
            
        })
	}
    d[4].style.width=0.1*x0+'px';
    d[4].style.height=0.045*y0+'px';
    document.getElementById('intro1').style.width=0.7*x0+'px';
    document.getElementById("intro1").style.height=0.7*y0+'px';
    document.getElementById("intro2").style.width=0.7*x0+'px';
    document.getElementById("intro2").style.height=0.7*y0+'px';
    
    setTimeout(function(){
        document.getElementById("intro1").style.top="50%";
        document.getElementById("intro2").style.top="50%";
    },1000);
    setTimeout(function(){
        document.getElementById("intro1").style.left="-100%";
        document.getElementById("intro2").style.left="200%";
    },2500);
    setTimeout(function(){
        document.getElementById("lista").style.opacity=1;
    },3000);
    setTimeout(function(){
        document.body.style.backgroundSize="10%,10%,100% 100%";
        document.body.style.backgroundImage="url(imagini/termo_left.png),url(imagini/termo_right.png),url(imagini/termo_bg.png)";
        document.body.style.overflowY='auto';
    },3250);
    setTimeout(function(){
        document.getElementById("ec_term_header").style.opacity=1;
    },3500);
    setTimeout(function(){
        document.getElementById("bara0").style.opacity=1;
    },3750);
    setTimeout(function(){
        document.getElementById("gaz_ideal_cont").style.opacity=1;
    },4000);
    setTimeout(function(){
        document.getElementById("gaz_ideal_formula").style.opacity=1;
    },4250);
    setTimeout(function(){
        document.getElementById("gaz_ideal_legenda").style.opacity=1;
     },4500);
setTimeout(function(){
        document.getElementById("buddy_arrow").style.opacity=0.7;
    },4500);

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
    document.getElementById("ec_term_header").style.fontSize=0.1*y0+'px';
    document.getElementById("ec_term_header").style.marginTop=0.1*y0+'px';
    document.getElementById("bara0").style.marginTop=0.01*y0+'px';
    
    document.getElementById("stare_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("gaz_ideal_cont").style.marginLeft=0.1*x0+'px';
    document.getElementById("gaz_ideal_titlu").style.width=0.4*x0+'px';
    document.getElementById("gaz_ideal_titlu").style.height=0.1*y0+'px';
    document.getElementById("gaz_ideal_desc").style.width=0.4*x0+'px';
    document.getElementById("gaz_ideal_desc").style.height=0.3*y0+'px';
    $(".resizeText0").resizeText0();
    $(".resizeText1").resizeText0();

    document.getElementById("gaz_ideal_img").style.marginLeft=0.1*x0+'px';
    document.getElementById("gaz_ideal_formula").style.width=0.2*x0+'px';
    document.getElementById("gaz_ideal_formula").style.height=0.2*x0+'px';
    document.getElementById("gaz_ideal_formula").style.marginLeft=0.05*x0+'px';
    document.getElementById("gaz_ideal_legenda").style.marginTop=0.05*y0+'px';
    document.getElementById("gaz_ideal_legenda").style.width=0.3*x0+'px';
    document.getElementById("gaz_ideal_legenda").style.height=0.4*y0+'px';
    
    document.getElementById("izoterm_header").style.fontSize=0.1*y0+'px';
    document.getElementById("izoterm_header").style.marginTop=0.1*y0+'px';
    document.getElementById("bara1").style.marginTop=0.01*y0+'px';
    
    document.getElementById("izoterma_start").style.width=0.8*x0+'px';
    document.getElementById("izoterma_start").style.marginLeft=0.1*x0+'px';
    document.getElementById("izoterma_start").style.height=0.2*y0+'px';
    document.getElementById("izoterma_start").style.marginTop=0.05*y0+'px';
    
    document.getElementById("izoterma_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("izoterma_desc").style.marginLeft=0.05*x0+'px';
    document.getElementById("izoterma_titlu").style.width=0.4*x0+'px';
    document.getElementById("izoterma_titlu").style.height=0.1*y0+'px';
    document.getElementById("izoterma_text").style.width=0.4*x0+'px';
    document.getElementById("izoterma_text").style.height=0.2*y0+'px';
    
    $(".resizeText2").resizeText0();
    $(".resizeText3").resizeText0();

    
    document.getElementById("izoterma_graf").style.marginLeft=0.05*x0+'px';
    document.getElementById("izoterma_pv").style.width=0.2*x0+'px';
    document.getElementById("izoterma_pv").style.height=0.2*x0+'px';
    document.getElementById("izoterma_pt").style.width=0.2*x0+'px';
    document.getElementById("izoterma_pt").style.height=0.2*x0+'px';
    document.getElementById("izoterma_vt").style.width=0.2*x0+'px';
    document.getElementById("izoterma_vt").style.height=0.2*x0+'px';
    
    document.getElementById("izoterma_vt").style.marginLeft=0.025*x0+'px'; 
    document.getElementById("izoterma_pv").style.marginLeft=0.110*x0+'px';
    
    document.getElementById("graf_header1").style.fontSize=0.1*y0+'px';
    document.getElementById("graf_header1").style.borderTop="2px solid white";
    document.getElementById("graf_header1").style.marginTop=0.03*y0+'px';
    
    document.getElementById("izoterma_const").style.width=0.4*x0+'px';
    document.getElementById("izoterma_const").style.height=0.2*y0+'px';
    
    document.getElementById("izoterma_expl").style.width=0.4*x0+'px';
    document.getElementById("izoterma_expl").style.height=0.1*y0+'px';
    
    document.getElementById("izoterma_ec").style.width=0.4*x0+'px';
    document.getElementById("izoterma_ec").style.height=0.15*y0+'px';
    
    $(".resizeText4").resizeText0();
    
    document.getElementById("izobara_header").style.fontSize=0.1*y0+'px';
    document.getElementById("izobara_header").style.marginTop=0.1*y0+'px';
    document.getElementById("bara2").style.marginTop=0.01*y0+'px';
    
    document.getElementById("izobara_start").style.width=0.8*x0+'px';
    document.getElementById("izobara_start").style.marginLeft=0.1*x0+'px';
    document.getElementById("izobara_start").style.height=0.2*y0+'px';
    document.getElementById("izobara_start").style.marginTop=0.05*y0+'px';
    
    document.getElementById("izobara_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("izobara_desc").style.marginLeft=0.05*x0+'px';
    document.getElementById("izobara_titlu").style.width=0.4*x0+'px';
    document.getElementById("izobara_titlu").style.height=0.1*y0+'px';
    document.getElementById("izobara_text").style.width=0.4*x0+'px';
    document.getElementById("izobara_text").style.height=0.2*y0+'px';
    
    $(".resizeText5").resizeText0();
    $(".resizeText6").resizeText0();

    
    document.getElementById("izobara_graf").style.marginLeft=0.05*x0+'px';
    document.getElementById("izobara_pv").style.width=0.2*x0+'px';
    document.getElementById("izobara_pv").style.height=0.2*x0+'px';
    document.getElementById("izobara_pt").style.width=0.2*x0+'px';
    document.getElementById("izobara_pt").style.height=0.2*x0+'px';
    document.getElementById("izobara_vt").style.width=0.2*x0+'px';
    document.getElementById("izobara_vt").style.height=0.2*x0+'px';
    
    document.getElementById("izobara_vt").style.marginLeft=0.025*x0+'px'; 
    document.getElementById("izobara_pv").style.marginLeft=0.110*x0+'px';
    
    document.getElementById("graf_header2").style.fontSize=0.1*y0+'px';
    document.getElementById("graf_header2").style.borderTop="2px solid white";
    document.getElementById("graf_header2").style.marginTop=0.03*y0+'px';
    
    document.getElementById("izobara_const").style.width=0.4*x0+'px';
    document.getElementById("izobara_const").style.height=0.2*y0+'px';
    
    document.getElementById("izobara_expl").style.width=0.4*x0+'px';
    document.getElementById("izobara_expl").style.height=0.1*y0+'px';
    
    document.getElementById("izobara_ec").style.width=0.4*x0+'px';
    document.getElementById("izobara_ec").style.height=0.15*y0+'px';
    
    $(".resizeText7").resizeText0();
    
    document.getElementById("marimi_proces1").style.fontSize=0.1*y0+'px';
    document.getElementById("marimi_proces1").style.marginTop=0.05*y0+'px';
    document.getElementById("izoterma_u").style.marginTop=0.01*y0+'px';
    document.getElementById("izoterma_u").style.width=0.5*x0+'px';
    document.getElementById("izoterma_u").style.height=0.15*y0+'px';
    document.getElementById("izoterma_u").style.marginLeft=0.25*x0+"px";
    document.getElementById("izoterma_q").style.marginTop=0.01*y0+'px';
    document.getElementById("izoterma_q").style.height=0.25*y0+'px';
    document.getElementById("izoterma_q").style.marginLeft=0.2*x0+"px";
    document.getElementById("izoterma_q").style.width=0.6*x0+'px';

    document.getElementById("marimi_proces2").style.fontSize=0.1*y0+'px';
    document.getElementById("marimi_proces2").style.marginTop=0.05*y0+'px';
    document.getElementById("izobara_u").style.marginTop=0.01*y0+'px';
    document.getElementById("izobara_u").style.width=0.5*x0+'px';
    document.getElementById("izobara_u").style.height=0.15*y0+'px';
    document.getElementById("izobara_u").style.marginLeft=0.25*x0+"px";
    document.getElementById("izobara_q").style.marginTop=0.01*y0+'px';
    document.getElementById("izobara_q").style.height=0.15*y0+'px';
    document.getElementById("izobara_q").style.marginLeft=0.2*x0+"px";
    document.getElementById("izobara_q").style.width=0.6*x0+'px';
    document.getElementById("izobara_l").style.marginTop=0.01*y0+'px';
    document.getElementById("izobara_l").style.height=0.15*y0+'px';
    document.getElementById("izobara_l").style.marginLeft=0.2*x0+"px";
    document.getElementById("izobara_l").style.width=0.6*x0+'px';
    
    document.getElementById("izocora_header").style.fontSize=0.1*y0+'px';
    document.getElementById("izocora_header").style.marginTop=0.1*y0+'px';
    document.getElementById("bara3").style.marginTop=0.01*y0+'px';
    
    document.getElementById("izocora_start").style.width=0.8*x0+'px';
    document.getElementById("izocora_start").style.marginLeft=0.1*x0+'px';
    document.getElementById("izocora_start").style.height=0.2*y0+'px';
    document.getElementById("izocora_start").style.marginTop=0.05*y0+'px';
    
    document.getElementById("izocora_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("izocora_desc").style.marginLeft=0.05*x0+'px';
    document.getElementById("izocora_titlu").style.width=0.4*x0+'px';
    document.getElementById("izocora_titlu").style.height=0.1*y0+'px';
    document.getElementById("izocora_text").style.width=0.4*x0+'px';
    document.getElementById("izocora_text").style.height=0.2*y0+'px';
    
    $(".resizeText8").resizeText0();
    $(".resizeText9").resizeText0();

    
    document.getElementById("izocora_graf").style.marginLeft=0.05*x0+'px';
    document.getElementById("izocora_pv").style.width=0.2*x0+'px';
    document.getElementById("izocora_pv").style.height=0.2*x0+'px';
    document.getElementById("izocora_pt").style.width=0.2*x0+'px';
    document.getElementById("izocora_pt").style.height=0.2*x0+'px';
    document.getElementById("izocora_vt").style.width=0.2*x0+'px';
    document.getElementById("izocora_vt").style.height=0.2*x0+'px';
    
    document.getElementById("izocora_vt").style.marginLeft=0.025*x0+'px'; 
    document.getElementById("izocora_pv").style.marginLeft=0.110*x0+'px';
    
    document.getElementById("graf_header3").style.fontSize=0.1*y0+'px';
    document.getElementById("graf_header3").style.borderTop="2px solid white";
    document.getElementById("graf_header3").style.marginTop=0.03*y0+'px';
    
    document.getElementById("izocora_const").style.width=0.4*x0+'px';
    document.getElementById("izocora_const").style.height=0.2*y0+'px';
    
    document.getElementById("izocora_expl").style.width=0.4*x0+'px';
    document.getElementById("izocora_expl").style.height=0.1*y0+'px';
    
    document.getElementById("izocora_ec").style.width=0.4*x0+'px';
    document.getElementById("izocora_ec").style.height=0.15*y0+'px';
    
    $(".resizeText10").resizeText0();
    
    document.getElementById("marimi_proces3").style.fontSize=0.1*y0+'px';
    document.getElementById("marimi_proces3").style.marginTop=0.05*y0+'px';

    document.getElementById("izocora_q").style.marginTop=0.01*y0+'px';
    document.getElementById("izocora_q").style.height=0.15*y0+'px';
    document.getElementById("izocora_q").style.marginLeft=0.2*x0+"px";
    document.getElementById("izocora_q").style.width=0.6*x0+'px';
    document.getElementById("izocora_l").style.marginTop=0.01*y0+'px';
    document.getElementById("izocora_l").style.height=0.15*y0+'px';
    document.getElementById("izocora_l").style.marginLeft=0.2*x0+"px";
    document.getElementById("izocora_l").style.width=0.6*x0+'px';
    
    document.getElementById("adiabatica_header").style.fontSize=0.1*y0+'px';
    document.getElementById("adiabatica_header").style.marginTop=0.1*y0+'px';
    document.getElementById("bara4").style.marginTop=0.01*y0+'px';
    document.getElementById("adiabatica_start").style.width=0.8*x0+'px';
    document.getElementById("adiabatica_start").style.height=0.2*y0+'px';
    document.getElementById("adiabatica_start").style.marginLeft=0.1*x0+'px';
    document.getElementById('adiabatica_start').style.marginTop=0.05*y0+'px';
    
    document.getElementById("adiabatica_cont").style.marginTop=0.05*y0+'px'; 
    document.getElementById("adiabatica_desc").style.marginLeft=0.05*x0+'px';
    document.getElementById("adiabatica_titlu").style.height=0.1*y0+'px';
    document.getElementById("adiabatica_titlu").style.width=0.5*x0+'px';
    document.getElementById('adiabatica_expl').style.width=0.5*x0+'px';
    document.getElementById("adiabatica_expl").style.height=0.2*y0+'px';
    document.getElementById("adiabatica_q").style.width=0.5*x0+'px';
    document.getElementById("adiabatica_q").style.height=0.1*y0+'px';
    document.getElementById("adiabatica_ec").style.width=0.5*x0+'px';
    document.getElementById('adiabatica_ec').style.height=0.1*y0+'px';
    document.getElementById("adiabatica_ecuatii").style.width=0.5*x0+'px';
    document.getElementById('adiabatica_ecuatii').style.height=0.1*y0+'px';
    document.getElementById("adiabatica_expl2").style.width=0.5*x0+'px';
    document.getElementById("adiabatica_expl2").style.height=0.05*y0+"px";
    document.getElementById("adiabatica_gamma").style.width=0.5*x0+'px';
    document.getElementById("adiabatica_gamma").style.height=0.15*y0+'px';
    
    $(".resizeText11").resizeText0();
    $(".resizeText12").resizeText0();
    $(".resizeText13").resizeText0();
    $(".resizeText14").resizeText0();
    
    document.getElementById("adiabatica_graf").style.width=0.3*x0+'px';
    document.getElementById("adiabatica_graf").style.height=0.3*x0+'px';
    document.getElementById("adiabatica_graf").style.marginLeft=0.05*x0+'px';
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}