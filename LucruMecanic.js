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
    function schimba1(){
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
        document.getElementById("intro1").style.marginTop=0+'px';
        document.getElementById("intro2").style.marginTop=0+'px';
    },1000);
    setTimeout(function(){
        document.getElementById("intro1").style.marginLeft=x0+'px';
        document.getElementById('intro2').style.marginLeft=-x0+'px';
    },3000);
    setTimeout(function(){
        document.body.style.backgroundSize="15%,15%,cover";
        document.body.style.backgroundImage="url(imagini/left_mec.png),url(imagini/right_mec.png),linear-gradient(to right, #00261C, #044C29, #00261C)";
        document.body.style.overflowY="auto";
    },4500);
    setTimeout(function(){
        document.getElementById("lista").style.opacity=1;
    },5000);
    setTimeout(function(){
        document.getElementById("def_header").style.opacity=1;
    },5250);
    setTimeout(function(){
        document.getElementById("bara0").style.opacity=1;
    },5500);
    setTimeout(function(){
        document.getElementById("def_cont").style.opacity=1;
    },5750);
    setTimeout(function(){
        document.getElementById("def_formula").style.opacity=1;
    },6000);
    setTimeout(function(){
        document.getElementById("def_si").style.opacity=1;
    },6250);
    setTimeout(function(){
        document.getElementById("prop_header").style.opacity=1;
        document.getElementById("bara1").style.opacity=1;
        document.getElementById("addf_cont").style.opacity=1;
        document.getElementById("addd_cont").style.opacity=1;
    },6500);
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

    document.getElementById("intro1").style.width=0.7*x0+'px';
    document.getElementById("intro1").style.height=0.7*y0+'px';
    document.getElementById("intro2").style.width=0.7*x0+'px';
    document.getElementById("intro2").style.height=0.7*y0+'px';
    document.getElementById("intro1").style.marginTop=-y0+'px';
    document.getElementById("intro2").style.marginTop=y0+'px';
    
    document.getElementById("def_header").style.fontSize=0.1*y0+'px';
    document.getElementById("def_header").style.marginTop=0.1*y0+'px';
    document.getElementById("bara0").style.marginTop=0.01*y0+'px';
    
    document.getElementById("def_titlu").style.height=0.1*y0+'px';
    document.getElementById("def_titlu").style.width=0.3*x0+'px';
    document.getElementById("def_text").style.height= 0.3*y0+'px';
    document.getElementById("def_text").style.width= 0.3*x0+'px';
    document.getElementById("def_cont").style.marginLeft= 0.2*x0+'px';
    document.getElementById("lm_def_cont").style.marginTop= 0.05*y0+'px';
    document.getElementById("def_formula").style.height= 0.15*x0+'px';
    document.getElementById("def_formula").style.width= 0.15*x0+'px';
    document.getElementById("def_si").style.height= 0.15*x0+'px';
    document.getElementById("def_si").style.width= 0.15*x0+'px';
    document.getElementById("def_si").style.marginLeft=0.075*x0+'px';
    document.getElementById("def_formula_cont").style.marginLeft=0.05*x0+'px';
    $(".resizeText0").resizeText0();
    $(".resizeText1").resizeText0();
    
    document.getElementById("prop_header").style.fontSize= 0.1*y0+'px';
    document.getElementById("prop_header").style.marginTop= 0.1*y0+'px';
    document.getElementById("bara1").style.marginTop=0.01*y0+'px';
    document.getElementById("addf_titlu").style.height= 0.1*y0+'px';
    document.getElementById("addf_text").style.height= 0.3*y0+'px';
    document.getElementById("addf_text").style.width= 0.35*x0+'px';
    document.getElementById("addf_cont").style.marginLeft= 0.1*x0+'px';
    document.getElementById("addf_cont").style.marginRight= 0.1*x0+'px';
    document.getElementById("addf_cont").style.marginTop= 0.05*y0+'px';
    document.getElementById("addd_titlu").style.height= 0.1*y0+'px';
    document.getElementById("addd_text").style.height= 0.3*y0+'px';
    document.getElementById("addd_text").style.width= 0.35*x0+'px';
    document.getElementById("addd_cont").style.marginTop= 0.05*y0+'px';
    $(".resizeText2").resizeText0();
    $(".resizeText3").resizeText0();
    $(".resizeText4").resizeText0();
    $(".resizeText5").resizeText0();
    
    document.getElementById("spec_header").style.marginTop= 0.075*y0+'px';
    document.getElementById("spec_header").style.fontSize= 0.1*y0+'px';

    document.getElementById("lm_cont").style.marginLeft = 0.1*x0+'px';
    document.getElementById("lm_cont").style.marginTop= 0.05*y0+'px';
    document.getElementById("lm_text").style.width= 0.3*x0+'px';
    document.getElementById("lm_text").style.height= 0.33*y0+'px';
    document.getElementById("lm_img").style.width=0.3*x0+'px';
    document.getElementById("lm_img").style.height=0.33*y0+'px';
    document.getElementById("lm_greutate").style.width= 0.15*x0+'px';
    document.getElementById("lm_greutate").style.height= 0.11*y0+'px';
    document.getElementById("lm_frecare").style.width= 0.15*x0+'px';
    document.getElementById("lm_frecare").style.height= 0.11*y0+'px';
    document.getElementById("lm_elastic").style.width= 0.15*x0+'px';
    document.getElementById("lm_elastic").style.height= 0.11*y0+'px';
    $(".resizeText6").resizeText0();
    $(".resizeText7").resizeText0();
    $(".resizeText8").resizeText0();
    $(".resizeText9").resizeText0();
    
    document.getElementById("bara3").style.marginBottom= 0.05*y0+'px';
    document.getElementById("tip_header").style.fontSize= 0.1*y0+'px';
    document.getElementById("tip_header").style.marginTop=0.1*y0+'px';
    document.getElementById("cons_cont").style.marginLeft= 0.1*x0+'px';
    document.getElementById("cons_text").style.width= 0.35*x0+'px';
    document.getElementById("cons_text").style.height= 0.25*y0+'px';
    document.getElementById("cons_titlu").style.height= 0.1*y0+'px';
    document.getElementById("dis_cont").style.marginLeft= 0.1*x0+'px';
    document.getElementById("dis_text").style.width= 0.35*x0+'px';
    document.getElementById("dis_text").style.height= 0.25*y0+'px';
    document.getElementById("dis_titlu").style.height= 0.1*y0+'px';
    $(".resizeText10").resizeText0();
    $(".resizeText11").resizeText0();
    $(".resizeText12").resizeText0();
    $(".resizeText13").resizeText0();
    
    document.getElementById("lm_grafic_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("grafic_header").style.marginTop= 0.1*y0+'px';
    document.getElementById("grafic_header").style.fontSize= 0.1*y0+'px';
    document.getElementById("bara4").style.marginTop=0.01*y0+'px';
    document.getElementById("grafic_cont").style.marginLeft= 0.05*x0+'px';
    document.getElementById("grafic_text").style.width= 0.4*x0+'px';
    document.getElementById("grafic_text").style.height= 0.35*y0+'px';
    document.getElementById("grafic_titlu").style.height= 0.1*y0+'px';
    document.getElementById("img_cont").style.marginLeft= 0.1*x0+'px';
    document.getElementById("img_gr").style.width= 0.4*x0+'px';
    document.getElementById("img_gr").style.height= 0.4*x0+'px';
    $(".resizeText14").resizeText0();
    $(".resizeText15").resizeText0();
    
    document.getElementById("energie_mec_header").style.fontSize=0.1*y0+'px';
    document.getElementById("energie_mec_header").style.marginTop=0.1*y0+'px';
    document.getElementById("bara5").style.marginTop=0.01*y0+'px';
    
    document.getElementById("energie_mec_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("energie_desc_cont").style.marginLeft=0.05*x0+'px';
    document.getElementById("energie_mec_titlu").style.width=0.4*x0+'px';
    document.getElementById("energie_mec_titlu").style.height=0.1*y0+'px';
    document.getElementById("energie_mec_text").style.width=0.4*x0+'px';
    document.getElementById("energie_mec_text").style.height=0.2*y0+'px';
    document.getElementById('energie_mec_formula').style.width=0.4*x0+'px';
    document.getElementById("energie_mec_formula").style.height=0.4*y0+'px';
    document.getElementById("energie_mec_formula").style.marginLeft=0.05*x0+'px';
    
    $(".resizeText16").resizeText0();
    $(".resizeText17").resizeText0();
    
    document.getElementById("energie_cin_header").style.fontSize=0.1*y0+'px';
    document.getElementById("energie_cin_header").style.marginTop=0.1*y0+'px';
    document.getElementById("bara6").style.marginTop=0.01*y0+'px';
    
    document.getElementById("en_cin_cont").style.marginTop=0.1*y0+'px';
    document.getElementById("en_cin_desc").style.marginLeft=0.07*x0+'px'
    document.getElementById("en_cin_titlu").style.width=0.3*x0+'px';
    document.getElementById("en_cin_titlu").style.height=0.1*y0+'px';
    document.getElementById("en_cin_text").style.width=0.3*x0+'px';
    document.getElementById("en_cin_text").style.height=0.3*y0+'px';
    document.getElementById("en_cin_formula").style.width=0.3*x0+'px';
    document.getElementById("en_cin_formula").style.height=0.2*y0+'px';
    
    $(".resizeText18").resizeText0();
    $(".resizeText19").resizeText0();
    
    document.getElementById("en_cin_var_cont").style.marginLeft=0.07*x0+'px';
    document.getElementById("en_cin_var_titlu").style.width=0.5*x0+'px';
    document.getElementById('en_cin_var_titlu').style.height=0.1*y0+'px';
    document.getElementById('en_cin_var_text').style.height=0.3*y0+'px';
    document.getElementById("en_cin_var_text").style.width=0.5*x0+"px";
    document.getElementById("en_cin_var_img").style.width=0.5*x0+'px';
    document.getElementById("en_cin_var_img").style.height=0.15*y0+'px';
    
    $(".resizeText20").resizeText0();
    $(".resizeText21").resizeText0();
    
    document.getElementById("energie_pot_header").style.fontSize=0.1*y0+'px';
    document.getElementById("energie_pot_header").style.marginTop=0.1*y0+'px';
    document.getElementById("bara7").style.marginTop=0.01*y0+'px';
    
    document.getElementById("ec_pot_cont").style.marginTop=0.1*y0+'px';
    document.getElementById("ec_pot_titlu").style.width=0.3*x0+'px';
    document.getElementById("ec_pot_titlu").style.height=0.1*y0+'px';
    document.getElementById("ec_pot_text").style.width=0.3*x0+'px';
    document.getElementById("ec_pot_text").style.height=0.25*y0+'px';
    document.getElementById("ec_pot_formula").style.height=0.15*y0+"px";
    document.getElementById("ec_pot_formula").style.width=0.3*x0+'px';
    
    $(".resizeText22").resizeText0();
    $(".resizeText23").resizeText0();
    
    document.getElementById("ec_pot_desc").style.marginLeft=0.08*x0+'px';
    document.getElementById("ep_imag_cont").style.marginLeft=0.08*x0+'px';
    
    document.getElementById("ep_g").style.width=0.25*x0+'px';
    document.getElementById("ep_g").style.height=0.25*x0+'px';
    
    document.getElementById("ep_el").style.width=0.25*x0+'px';
    document.getElementById("ep_el").style.height=0.25*x0+'px';
    
    document.getElementById("ep_el").style.marginLeft=0.25*x0+'px';
    document.getElementById("ep_el").style.marginTop=-0.1*x0+'px';
    
    document.getElementById("ec_pot_cont").style.marginBottom=0.1*y0+'px'
}

    var a=[["url('imagini/L_g_formula.png')","<red>Lucrul mecanic al greutăţii</red> este egal cu produsul dintre <green>forţa de greutate</green> si diferenţa dintre <green>înălţimea finală şi cea inițială</green>."],["url('imagini/L_fel_formula.png')", "<red>Lucrul mecanic al forţei elastice</red> este egal cu diferenţa semiproduselor dintre <green>constanta de elasticitate</green> şi <green>pătratul coordonatei</green> iniţiale, respectiv finale."],["url('imagini/L_ff_formula.png')", "<red>Lucrul mecanic al forţei de frecare</red> este egal cu produsul dintre - modulul <green>forţei de frecare</green> şi diferenţa dintre <green>coordonata finală şi cea inițială</green>"]];
function schimba(x) {
    document.getElementById("lm_text").innerHTML= a[x][1];
    $(".resizeText6").resizeText0();
    document.getElementById("lm_img").style.backgroundImage= a[x][0];
}