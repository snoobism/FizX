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
    
    
    
    setTimeout(function(){for(var i=0;i<=33;i++)
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
            m[1].style.color='#330000';
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
    d[4].style.width=0.1*100+'vw';
    d[4].style.height=0.045*100+'vh';
    var lit=document.getElementsByClassName("litera");
    for(var i=0;i<=lit.length-1;i++)
        {
            lit[i].style.width=0.1*100+'vw';
            lit[i].style.height=0.1*100+'vw';
            $(".resizeText"+i).resizeText0();
            lit[i].style.marginLeft=i*0.1*100+'vw';
        }
    var text_intro=document.getElementsByClassName("text_intro");
    text_intro[0].style.width=0.7*100+'vw';
    text_intro[0].style.height=0.1*100+'vw';
    text_intro[1].style.width=0.2*100+'vw';
    text_intro[1].style.marginLeft=0.25*100+'vw';
    text_intro[1].style.height=0.1*100+'vw';
    text_intro[2].style.width=0.4*100+'vw';
    text_intro[2].style.marginLeft=0.15*100+'vw';
    text_intro[2].style.height=0.1*100+'vw';

    var interv=setInterval(
        function(){
            for(var i=0;i<=lit.length-1;i++)
                {
                    var dist=Math.floor(Math.random() * 5 ) + 1;
                    var directie=Math.floor(Math.random() * 4 ) + 1;
                    if(directie==1){
                        if(i<7){
                            lit[i].style.marginLeft=i*0.1*100 + dist/100 + 'vw';

                        }
                        if(i>6&&i<9)
                        {
                            lit[7].style.marginLeft=0*100+dist/100 +'vw';
                            lit[8].style.marginLeft=0.1*100+dist/100 +'vw';
                        }
                        if(i>8 && i<13)
                        {
                            lit[9].style.marginLeft=0*100+dist/100 +'vw';
                            lit[10].style.marginLeft=0.1*100+dist/100 +'vw';
                            lit[11].style.marginLeft=0.2*100+dist/100 +'vw';
                            lit[12].style.marginLeft=0.3*100+dist/100 +'vw';
                        }
                    }
                    if(directie==2){
                        lit[i].style.marginTop= + dist/100 + 'vw';
                    }
                    if(directie==3){
                        lit[i].style.marginTop= - dist/100 + 'vw';
                    }
                    if(directie==4){
                        if(i<7){
                          lit[i].style.marginLeft=i*0.1*100 - dist/100 + 'vw';                 
                        }
                        if(i>6&&i<9)
                        {
                            lit[7].style.marginLeft=0*100 - dist/100 + 'vw';
                            lit[8].style.marginLeft=0.1*100 - dist/100 + 'vw';
                        }
                        if(i>8 && i<13)
                        {
                            lit[9].style.marginLeft=0*100- dist/100 + 'vw';
                            lit[10].style.marginLeft=0.1*100 - dist/100 + 'vw';
                            lit[11].style.marginLeft=0.2*100 - dist/100 + 'vw';
                            lit[12].style.marginLeft=0.3*100 - dist/100 + 'vw';
                        }
                    }
                    setTimeout(function(){
                        lit[i].style.marginLeft=i*0.1*100+'vw';
                        lit[i].style.marginTop=0+'px';
                        lit[7].style.marginLeft=0*100+'vw';
                        lit[8].style.marginLeft=0.1*100+'vw';
                        lit[9].style.marginLeft=0*100+'vw';
                        lit[10].style.marginLeft=0.1*100+'vw';
                        lit[11].style.marginLeft=0.2*100+'vw';
                        lit[12].style.marginLeft=0.3*100+'vw';
                    },50)
                }
        },50);
        setTimeout(function(){
            clearInterval(interv);
        },2500);
        setTimeout(function(){
            text_intro[0].style.opacity=1;
        },500);
        setTimeout(function(){
            text_intro[1].style.opacity=1;
        },750);
        setTimeout(function(){
            text_intro[2].style.opacity=1;
        },1000);
        setTimeout(function(){
            document.getElementById("intro_cont").style.opacity=0;
        },2500);
        setTimeout(function(){
        document.body.style.backgroundSize="10%,10%,100% 100%";
        document.body.style.backgroundImage="url(imagini/termo_left.png),url(imagini/termo_right.png),url(imagini/termo_bg.png)";
        document.body.style.overflowY='auto';
        },3500);
        setTimeout(function(){
            document.getElementById("lista").style.opacity=1;
        },3500);
        setTimeout(function(){
            document.getElementById("structura_header").style.opacity=1;
        },3750);
        setTimeout(function(){
            document.getElementById("bara0").style.opacity=1;
        },4000);
        setTimeout(function(){
            document.getElementById("structura_desc_cont").style.opacity=1;
        },4250);
        setTimeout(function(){
            document.getElementById("structura_atom").style.opacity=1;
        },4500);
        setTimeout(function(){
            document.getElementById("structura_molecula").style.opacity=1;
        },4750);
        setTimeout(function(){
            document.getElementById("agitatie_cont").style.opacity=1;
        },5000);
    setTimeout(function(){
        document.getElementById("buddy_arrow").style.opacity=0.7;
    },5500);

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
    document.getElementById("structura_header").style.fontSize=0.1*0.8*100+'vh';
    document.getElementById("structura_header").style.marginTop=0.1*100+'vh';
    document.getElementById("bara0").style.marginTop=0.01*100+'vh';

    document.getElementById("structura_cont").style.marginTop=0.05*100+'vh';
    document.getElementById("structura_desc_cont").style.marginLeft=0.05*0.8*100+'vw';
        
    document.getElementById("structura_titlu").style.width=0.5*0.8*100+'vw';
    document.getElementById("structura_titlu").style.height=0.1*0.8*100+'vh';
    document.getElementById("structura_desc").style.width=0.5*0.8*100+'vw';
    document.getElementById("structura_desc").style.height=0.3*0.8*100+'vh';
    
    $(".resizeText13").resizeText0();
    $(".resizeText14").resizeText0();

    document.getElementById("structura_atom").style.height=0.175*0.8*100+'vw';
    document.getElementById("structura_atom_img").style.height=0.15*0.8*100+'vw';
    document.getElementById("structura_atom_img").style.width=0.15*0.8*100+'vw';
    document.getElementById("structura_atom_desc").style.height=0.175*0.8*100+'vw';
    document.getElementById("structura_atom_desc").style.width=0.38*0.8*100+'vw';
    
    
    document.getElementById("structura_molecula").style.height=0.175*0.8*100+'vw';
    document.getElementById("structura_molecula_img").style.height=0.15*0.8*100+'vw';
    document.getElementById("structura_molecula_img").style.width=0.15*0.8*100+'vw';
    document.getElementById("structura_molecula_desc").style.height=0.175*0.8*100+'vw';
    document.getElementById("structura_molecula_desc").style.width=0.38*0.8*100+'vw';   
    
    document.getElementById("structura_atom_desc").style.marginLeft=0.01*0.8*100+'vw';
    document.getElementById("structura_molecula_desc").style.marginLeft=0.01*0.8*100+'vw';
    document.getElementById("structura_molecula_img").style.marginLeft=0.01*0.8*100+'vw';
    
    $(".resizeText15").resizeText0();
    $(".resizeText16").resizeText0();

    document.getElementById("structura_molecula").style.marginTop=0.1*0.8*100+'vh';
    document.getElementById('structura_particule').style.marginLeft=0.05*0.8*100+'vw';
    document.getElementById("agitatie_cont").style.marginTop=0.1*0.8*100+'vh';
    document.getElementById('agitatie_img').style.height=0.3*0.8*100+'vw';
    document.getElementById("agitatie_img").style.width=0.3*0.8*100+'vw';
    document.getElementById("agitatie_titlu").style.height=0.1*0.8*100+'vh';
    document.getElementById("agitatie_titlu").style.width=0.6*0.8*100+'vw';
    document.getElementById("agitatie_desc").style.height=0.3*0.8*100+'vh';
    document.getElementById("agitatie_desc").style.width=0.6*0.8*100+'vw';
    document.getElementById("agitatie_img").style.marginLeft=0.1*0.8*100+'vw';
    document.getElementById("agitatie_desc_cont").style.marginLeft=0.1*0.8*100+'vw';
    $(".resizeText17").resizeText0();
    $(".resizeText18").resizeText0();

    document.getElementById("subst_cont").style.marginTop=0.1*100+'vh';
    document.getElementById("subst_text").style.marginLeft=0.15*100+'vw';
    document.getElementById("subst_text").style.width=0.5*100+'vw';
    document.getElementById("subst_text").style.height=0.15*100+'vh';
    document.getElementById("subst_img").style.width=0.2*100+'vw';
    document.getElementById("subst_img").style.height=0.15*100+'vh';
    $(".resizeText19").resizeText0();
    
    document.getElementById("mol_cont").style.marginTop=0.1*100+'vh';
    document.getElementById("mol_img").style.marginLeft=0.1*100+'vw';
    document.getElementById("mol_text").style.width=0.6*100+'vw';
    document.getElementById("mol_text").style.height=0.15*100+'vh';
    document.getElementById("mol_img").style.width=0.2*100+'vw';
    document.getElementById("mol_img").style.height=0.15*100+'vh';
    $(".resizeText20").resizeText0();
    
    document.getElementById("masamol_cont").style.marginTop=0.1*100+'vh';
    document.getElementById("masamol_formula").style.width=0.2*100+'vw';
    document.getElementById("masamol_formula").style.height=0.15*100+'vh';
    document.getElementById("masamol_formula").style.marginLeft=0.2*100+'vw';
    document.getElementById('masamol_desc').style.width=0.2*100+'vw';
    document.getElementById("masamol_desc").style.height=0.15*100+'vh';
    document.getElementById("masamol_si").style.width=0.2*100+'vw';
    document.getElementById("masamol_si").style.height=0.15*100+'vh';
    
    $(".resizeText21").resizeText0();
    
    document.getElementById("avo_cont").style.marginTop=0.1*100+'vh';
    document.getElementById("avo_formula").style.width=0.2*100+'vw';
    document.getElementById("avo_formula").style.height=0.15*100+'vh';
    document.getElementById("avo_formula").style.marginLeft=0.1*100+'vw';
    document.getElementById('avo_desc').style.width=0.4*100+'vw';
    document.getElementById("avo_desc").style.height=0.15*100+'vh';
    document.getElementById("avo_si").style.width=0.2*100+'vw';
    document.getElementById("avo_si").style.height=0.15*100+'vh';
    
    $(".resizeText22").resizeText0();
    
    document.getElementById("avo_val").style.marginTop=0.05*100+'vh';
    document.getElementById("avo_val").style.marginLeft=0.1*100+'vw';
    document.getElementById("avo_val").style.width=0.8*100+'vw';
    document.getElementById("avo_val").style.height=0.15*100+'vh';
    
    document.getElementById("termo_header").style.marginTop=0.05*100+'vh';
    document.getElementById("termo_header").style.fontSize=0.1*100+'vh';
    document.getElementById("bara1").style.marginTop=0.01*100+'vh';
    
    document.getElementById("termo_cont").style.marginTop=0.1*100+'vh';
    document.getElementById("termo_def_titlu").style.width=0.4*100+'vw';
    document.getElementById("termo_def_titlu").style.height=0.1*100+'vh';
    document.getElementById("termo_def_desc").style.width=0.4*100+'vw';
    document.getElementById("termo_def_desc").style.height=0.4*100+'vh';
    document.getElementById("termo_def_cont").style.marginLeft=0.06*100+'vw';
    document.getElementById("sist_termo_desc").style.width=0.4*100+'vw';
    document.getElementById("sist_termo_desc").style.height=0.4*100+'vh';
    document.getElementById("sist_termo_titlu").style.width=0.4*100+'vw';
    document.getElementById("sist_termo_titlu").style.height=0.1*100+'vh';
    document.getElementById("sist_termo_cont").style.marginLeft=0.06*100+'vw';
    
    $(".resizeText23").resizeText0();
    $(".resizeText24").resizeText0();
    $(".resizeText25").resizeText0();
    $(".resizeText26").resizeText0();

    document.getElementById("sisteme_termo").style.width=0.8*100+'vw';
    document.getElementById("sisteme_termo").style.height=0.8*100+'vh';
    document.getElementById("sisteme_termo").style.marginTop=0.1*100+'vh';
    document.getElementById("sisteme_termo").style.marginLeft=0.1*100+'vw';
    
    document.getElementById("param_termo_cont").style.marginTop=0.1*100+'vh';
    document.getElementById("param_termo_titlu").style.height=0.1*100+'vh';
    document.getElementById("param_termo_titlu").style.width=0.4*100+'vw';
    document.getElementById("param_termo_text").style.height=0.4*100+'vh';
    document.getElementById("param_termo_text").style.width=0.4*100+'vw';
    document.getElementById("param_termo_desc").style.marginLeft=0.03*100+'vw';
    
    $(".resizeText27").resizeText0();
    $(".resizeText28").resizeText0();

    document.getElementById("param_termo_img").style.width=0.5*100+'vw';
    document.getElementById("param_termo_img").style.height=0.5*100+'vh';
    document.getElementById("param_termo_img").style.marginLeft=0.03*100+'vw';
    
    document.getElementById("ech_term_cont").style.marginTop=0.1*100+'vh';
    document.getElementById("ech_term_desc").style.marginLeft=0.06*100+'vw';
    document.getElementById("postulat_cont").style.marginLeft=0.06*100+'vw';
    document.getElementById("ech_term_titlu").style.width=0.5*100+'vw';
    document.getElementById("ech_term_titlu").style.height=0.1*100+'vh';
    document.getElementById("ech_term_text").style.width=0.5*100+'vw';
    document.getElementById("ech_term_text").style.height=0.35*100+'vh';
    document.getElementById("postulat_text").style.width=0.3*100+'vw';
    document.getElementById("postulat_text").style.height=0.2*100+'vh';
    document.getElementById('postulat_titlu').style.width=0.3*100+'vw';
    document.getElementById("postulat_titlu").style.height=0.1*100+'vh';
    
    $(".resizeText29").resizeText0();
    $(".resizeText30").resizeText0();
    $(".resizeText31").resizeText0();
    $(".resizeText32").resizeText0();

    document.getElementById("proces_header").style.fontSize=0.1*100+'vh';
    document.getElementById("proces_header").style.marginTop=0.1*100+'vh';
    document.getElementById("bara2").style.marginTop=0.01*100+'vh';
    
    document.getElementById("expl").style.width=0.4*100+'vw';
    document.getElementById("expl").style.height=0.1*100+'vh';
    document.getElementById("expl").style.marginLeft=0.3*100+'vw';
    document.getElementById("expl").style.marginTop=0.025*100+'vh';
    
    $(".resizeText33").resizeText0();
    
    document.getElementById("proces1").style.width=0.3*100+'vw';
    document.getElementById("proces1").style.height=0.3*100+'vw';
    document.getElementById("proces1").style.marginTop=0.1*100+'vh';
    document.getElementById("proces1").style.marginLeft=0.02*100+'vw';
    
    document.getElementById("proces2").style.width=0.3*100+'vw';
    document.getElementById("proces2").style.height=0.3*100+'vw';
    document.getElementById("proces2").style.marginTop=0.1*100+'vh';
    document.getElementById("proces2").style.marginLeft=0.02*100+'vw';
    
    document.getElementById("proces3").style.width=0.3*100+'vw';
    document.getElementById("proces3").style.height=0.3*100+'vw';
    document.getElementById("proces3").style.marginTop=0.1*100+'vh';
    document.getElementById("proces3").style.marginLeft=0.02*100+'vw';
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}