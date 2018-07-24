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
    document.getElementById("cont_intro").style.width=0.7*x0+'px';
    document.getElementById("cont_intro").style.height=0.7*y0+'px';
    
    document.getElementById("cont_mar").style.width=0.1*y0+'px';
    document.getElementById("cont_mar").style.height=0.1*y0+'px';
    
    setTimeout(function(){
        document.getElementById("cont_intro").style.backgroundImage="url(imagini/copac_img.png)";
    },500);
    setTimeout(function(){
        document.getElementById("cont_mar").style.opacity=1;
    },1000);
    setTimeout(function(){
        document.getElementById("cont_mar").style.top="100%";
    },2000);
    setTimeout(function(){
        document.getElementById("cont_intro").style.backgroundImage="url(imagini/newton_img.png)";
    },3000);
    setTimeout(function(){
        document.getElementById("cont_intro").style.opacity=0;
    },4000);
    setTimeout(function(){
        document.getElementById("cont_intro").style.backgroundImage="url(imagini/titlu_princ.png)";
    },4500);
    setTimeout(function(){
        document.getElementById("cont_intro").style.opacity=1;
    },5000);
    setTimeout(function(){
        document.getElementById("cont_intro").style.marginLeft=0.8*x0+'px';
    },6000);
    setTimeout(function(){
        document.getElementById("lista").style.opacity=1;
    },6500);
    setTimeout(function(){
        document.getElementById("despre_header").style.opacity=1;
    },7000);
    setTimeout(function(){
        document.getElementById("bara0").style.opacity=1;
    },7250);
    setTimeout(function(){
        document.getElementById("despre_desc_cont").style.opacity=1;
    },7500);
    setTimeout(function(){
        document.getElementById("newton_cont").style.opacity=1;
    },7750);
    setTimeout(function(){
        document.getElementById("princ_header").style.opacity=1;
        document.getElementById("bara1").style.opacity=1;
        
    },8000);
    setTimeout(function(){
        document.body.style.backgroundSize="15%,15%,cover";
        document.body.style.backgroundImage="url(imagini/left_mec.png),url(imagini/right_mec.png),linear-gradient(to right, #00261C, #044C29, #00261C)";
        document.body.style.overflow='auto';
    },6000);
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
    document.getElementById("despre_header").style.fontSize=0.1*y0+'px';
    document.getElementById("despre_header").style.marginTop=0.1*y0+'px';
    document.getElementById("bara0").style.marginTop=0.01*y0+'px';
    
    document.getElementById("despre_cont").style.marginTop=0.04*y0+'px';
    document.getElementById("despre_desc_cont").style.marginLeft=0.05*x0+'px';
    document.getElementById("despre_mecanica").style.width=0.2*x0+'px';
    document.getElementById("despre_mecanica").style.height=0.4*y0+'px';
    
    document.getElementById("despre_text").style.width=0.4*x0+'px';
    document.getElementById("despre_text").style.height=0.4*y0+'px';
    
    document.getElementById("newton_cont").style.marginLeft=0.05*x0+'px';
    document.getElementById("newton_img").style.width=0.25*x0+"px";
    document.getElementById("newton_img").style.height=0.5*y0+'px';
    document.getElementById("newton_titlu").style.height=0.1*y0+'px';
    document.getElementById("newton_titlu").style.width=0.25*x0+'px';
    
    $(".resizeText0").resizeText0();
    $(".resizeText1").resizeText0();
    
    document.getElementById("princ_header").style.marginTop=0.05*y0+'px';
    document.getElementById("princ_header").style.fontSize=0.15*y0+'px';
    document.getElementById('bara1').style.marignTop=0.01*y0+'px';
    
    
   document.getElementById("princ1_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("princ1_cont").style.marginLeft=0.15*x0+'px';
    document.getElementById("filler").style.height=0.05*y0+'px';
    document.getElementById("princ1_header").style.fontSize=0.1*y0+'px';
   
    document.getElementById("princ1_desc_cont").style.marginLeft=-0.1*x0+'px';

    document.getElementById("nr_princ1").style.width=0.2*x0+'px';
    document.getElementById("nr_princ1").style.height=0.2*x0+'px';
    document.getElementById("princ1_desc_cont").style.width=0.6*x0+'px';
    document.getElementById('princ1_desc_cont').style.height=0.2*x0+'px';
    
    document.getElementById('princ1_text').style.width=0.45*x0+'px';
    document.getElementById("princ1_text").style.height=0.18*x0+'px';
    document.getElementById("princ1_text").style.marginTop=0.01*x0+'px';
    document.getElementById("princ1_text").style.marginLeft=0.125*x0+'px';
    
    $(".resizeText2").resizeText0();
    
    document.getElementById('rost_princ1').style.width=0.4*x0+'px';
    document.getElementById("rost_princ1").style.marginLeft=0.3*x0+'px';
    document.getElementById("rost_princ1").style.height=0.15*y0+'px';
    document.getElementById("rost_princ1").style.marginTop=0.05*y0+'px';
    
    $(".resizeText3").resizeText0();

    document.getElementById("sr").style.width=0.4*x0+"px";
    document.getElementById("sr").style.height=0.3*y0+'px';
    document.getElementById("sr").style.marginLeft=0.3*x0+'px';
    document.getElementById("sr").style.marginTop=0.01*y0+'px';
    
    document.getElementById("sri").style.width=0.7*x0+'px';
    document.getElementById("sri").style.height=0.3*y0+'px';
    document.getElementById("sri").style.marginLeft=0.15*x0+'px';
    document.getElementById("sri").style.marginTop=0.05*y0+'px';
    
    $(".resizeText4").resizeText0();
    
    document.getElementById("exemplu_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("exemplu_cont").style.marginLeft=0.17*x0+'px';
    document.getElementById("exemplu_cont").style.height=0.45*y0+'px';
    document.getElementById("exemplu_cont").style.width=0.66*x0+'px';
    document.getElementById("exemplu_desc").style.width=0.25*x0+'px';
    document.getElementById("exemplu_desc").style.height=0.45*y0+'px';
    
    document.getElementById("exemplu_gif").style.width=0.4*x0+'px';
    document.getElementById("exemplu_gif").style.height=0.35*y0+'px';
    
    document.getElementById("exemplu_titlu").style.height=0.1*y0+'px';
    document.getElementById("exemplu_titlu").style.width=0.4*x0+'px';
    $(".resizeText5").resizeText0();
    $(".resizeText6").resizeText0();

    document.getElementById("princ2_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("princ2_cont").style.marginLeft=0.15*x0+'px';

    document.getElementById("filler2").style.height=0.05*y0+'px';
    document.getElementById("princ2_header").style.fontSize=0.1*y0+'px';
   
    document.getElementById("princ2_desc_cont").style.marginLeft=-0.1*x0+'px';

    document.getElementById("nr_princ2").style.width=0.2*x0+'px';
    document.getElementById("nr_princ2").style.height=0.2*x0+'px';
    document.getElementById("princ2_desc_cont").style.width=0.6*x0+'px';
    document.getElementById('princ2_desc_cont').style.height=0.2*x0+'px';
    
    document.getElementById('princ2_text').style.width=0.45*x0+'px';
    document.getElementById("princ2_text").style.height=0.18*x0+'px';
    document.getElementById("princ2_text").style.marginTop=0.01*x0+'px';
    document.getElementById("princ2_text").style.marginLeft=0.125*x0+'px';
    
    $(".resizeText7").resizeText0();
    
    document.getElementById("princ2_formula").style.width=0.7*x0+'px';
    document.getElementById("princ2_formula").style.marginTop=0.05*y0+'px';
    document.getElementById("princ2_formula").style.height=0.3*y0+'px';
    document.getElementById("princ2_formula").style.marginLeft=0.15*x0+'px';
    
    document.getElementById("ec_fund1").style.width=0.5*x0+'px';
    document.getElementById("ec_fund1").style.height=0.3*y0+'px';
    document.getElementById("ec_fund1").style.marginTop=0.05*y0+'px';
    document.getElementById("ec_fund1").style.marginLeft=0.25*x0+'px';
    
    $(".resizeText8").resizeText0();
    document.getElementById("ec_fund2").style.width=0.6*x0+'px';
    document.getElementById("ec_fund2").style.height=0.15*y0+'px';
    document.getElementById("ec_fund2").style.marginTop=0.05*y0+'px';
    document.getElementById("ec_fund2").style.marginLeft=0.2*x0+'px';
    
    $(".resizeText9").resizeText0();
    
    
    document.getElementById("ec_fund3").style.width=0.5*x0+'px';
    document.getElementById("ec_fund3").style.height=0.1*y0+'px';
    document.getElementById("ec_fund3").style.marginTop=0.05*y0+'px';
    document.getElementById("ec_fund3").style.marginLeft=0.25*x0+'px';
    
    $(".resizeText10").resizeText0();
    
    document.getElementById("inertie_formula").style.width=0.6*x0+'px';
    document.getElementById("inertie_formula").style.height=0.2*y0+'px';
    document.getElementById("inertie_formula").style.marginTop=0.05*y0+'px';
    document.getElementById("inertie_formula").style.marginLeft=0.2*x0+'px';
    
    document.getElementById("filler3").style.height=0.05*y0+'px';
    document.getElementById("princ3_header").style.fontSize=0.1*y0+'px';
    
    
    document.getElementById("princ3_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("princ3_cont").style.marginLeft=0.15*x0+'px';
    document.getElementById("princ3_header").style.fontSize=0.1*y0+'px';
   
    document.getElementById("princ3_desc_cont").style.marginLeft=-0.1*x0+'px';

    document.getElementById("nr_princ3").style.width=0.2*x0+'px';
    document.getElementById("nr_princ3").style.height=0.2*x0+'px';
    document.getElementById("princ3_desc_cont").style.width=0.6*x0+'px';
    document.getElementById('princ3_desc_cont').style.height=0.2*x0+'px';
    
    document.getElementById('princ3_text').style.width=0.45*x0+'px';
    document.getElementById("princ3_text").style.height=0.18*x0+'px';
    document.getElementById("princ3_text").style.marginTop=0.01*x0+'px';
    document.getElementById("princ3_text").style.marginLeft=0.125*x0+'px';
    
    $(".resizeText11").resizeText0();
    
    document.getElementById("princ3_exemplu_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("princ3_exemplu_cont").style.width=0.76*x0+'px';
    document.getElementById("princ3_exemplu_cont").style.marginLeft=0.12*x0+'px';
    
    document.getElementById("princ3_exemplu_desc").style.width=0.35*x0+'px';
    document.getElementById("princ3_exemplu_desc").style.height=0.4*y0+'px';
    document.getElementById("princ3_exemplu_img").style.width=0.4*x0+'px';
    document.getElementById("princ3_exemplu_img").style.height=0.4*y0+'px';
    
    $(".resizeText12").resizeText0();
    
    
    document.getElementById("filler4").style.height=0.05*y0+'px';
    document.getElementById("princ4_header").style.fontSize=0.1*y0+'px';
    
    
    document.getElementById("princ4_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("princ4_cont").style.marginLeft=0.15*x0+'px';
    document.getElementById("princ4_header").style.fontSize=0.1*y0+'px';
   
    document.getElementById("princ4_desc_cont").style.marginLeft=-0.1*x0+'px';

    document.getElementById("nr_princ4").style.width=0.2*x0+'px';
    document.getElementById("nr_princ4").style.height=0.2*x0+'px';
    document.getElementById("princ4_desc_cont").style.width=0.6*x0+'px';
    document.getElementById('princ4_desc_cont').style.height=0.2*x0+'px';
    
    document.getElementById('princ4_text').style.width=0.45*x0+'px';
    document.getElementById("princ4_text").style.height=0.18*x0+'px';
    document.getElementById("princ4_text").style.marginTop=0.01*x0+'px';
    document.getElementById("princ4_text").style.marginLeft=0.125*x0+'px';
    
    $(".resizeText13").resizeText0();
    
    
    document.getElementById("princ4_formula").style.width=0.7*x0+'px';
    document.getElementById("princ4_formula").style.height=0.2*y0+'px';
    document.getElementById("princ4_formula").style.marginLeft=0.15*x0+'px';
    document.getElementById("princ4_formula").style.marginTop=0.05*y0+"px";
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}