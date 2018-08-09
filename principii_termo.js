var y0=window.screen.availHeight;
var x0=window.screen.availWidth;

$.fn.resizeText0 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display:block;overflow:auto;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
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
        document.getElementById("princ1_text1").style.height=(0.6*y0-0.1*x0)*0.4+'px';
        document.getElementById("princ1_text2").style.height=(0.6*y0-0.1*x0)*0.4+'px';
        document.getElementById("princ1_img").style.height=0.6*y0-(0.6*y0-0.1*x0)*0.4-0.075*x0-0.05*y0+'px';
        document.getElementById("princ2_text").style.height=(0.6*y0-0.1*x0)*0.4+'px';

        document.getElementById("princ2_img1").style.height=(0.6*y0-0.1*x0)*0.4+'px';
        document.getElementById("princ2_img1").style.marginTop=(0.6*y0-0.1*x0)*0.15+'px';

        document.getElementById("princ2_img2").style.height=(0.6*y0-0.1*x0)*0.4+'px';
        document.getElementById("princ2_img2").style.marginTop=(0.6*y0-0.1*x0)*0.15+'px';

        document.getElementById("princ3_text").style.height=(0.6*y0-0.1*x0)*0.4+'px';
    },250);
    
    setTimeout(function(){for(var i=0;i<=9;i++)
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
            m[1].style.color='#330000';
        }
    for(var i=0;i<=e.length-1;i++)
	{	
		e[i].innerHTML=tex[i][x];
	}
	
	for(var i=0;i<=d.length-1;i++)
	{
		d[i].style.fontSize=0.05*100+'vh';
        $(d[i]).hover(function(){
            for(var i=0;i<=d.length-1;i++)
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
            for(var i=0;i<=d.length-1;i++)
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
    
    document.getElementById("intro_cont").style.width=0.7*100+'vw';
    document.getElementById("intro_cont").style.height=(0.7/3.37)*100+'vw';
    document.getElementById("intro_cont2").style.width=0.7*100+'vw';
    document.getElementById("intro_cont2").style.height=(0.7/3.37)*100+'vw';
    document.getElementById("filler1").style.height=(0.7/3.37)*100+'vw';
    document.getElementById("filler1").style.width=(0.7/3.37)*100+'vw';
    document.getElementById("filler1").style.marginLeft=-0.7*100+'vw';
    document.getElementById("filler2").style.height=(0.7/3.37)/2*100+'vw';
    document.getElementById("filler2").style.marginTop=(0.7/3.37)/4*100+'vw';
    document.getElementById("filler2").style.width=0.7*100+'vw';
    document.getElementById("filler2").style.marginLeft=-0.7*100+'vw';
    document.getElementById("filler2").style.borderTopRightRadius=(0.7/3.37)/4*100+'vw';
    document.getElementById("filler2").style.borderBottomRightRadius=(0.7/3.37)/4*100+'vw';
    document.getElementById("intro_cont").style.borderTopLeftRadius=(0.7/3.37)/2*100+'vw';
    document.getElementById("intro_cont").style.borderBottomLeftRadius=(0.7/3.37)/2*100+'vw';
    document.getElementById("titlu_cont").style.width=0.7*100+'vw';
    document.getElementById("titlu_cont").style.height=0.4*100+'vh';


    $(".resizeText0").resizeText0();
    setTimeout(function(){
        document.getElementById("intro_cont2").style.opacity=1;
        document.getElementById("intro_cont").style.opacity=1;

    },1000);
    setTimeout(function(){
        document.getElementById("filler1").style.transition="2s all";
        document.getElementById("filler1").style.marginLeft=0*100+'vw';
        document.getElementById("filler2").style.transition="2s all";
        document.getElementById("filler2").style.marginLeft=0*100+'vw';
    },2000);
    setTimeout(function(){
        document.getElementById("intro_cont2").style.opacity=0;
        document.getElementById("intro_cont").style.opacity=0;
    },4000);
    setTimeout(function(){
        document.getElementById("titlu_cont").style.opacity=1;
    },4500);
    setTimeout(function(){
        document.getElementById("titlu_cont").style.opacity=0;

    },6000);
    setTimeout(function(){
        document.body.style.backgroundSize="10%,10%,100% 100%";
        document.body.style.backgroundImage="url(imagini/termo_left.png),url(imagini/termo_right.png),url(imagini/termo_bg.png)";
        document.body.style.overflowY='auto';
        },6500);
    setTimeout(function(){
        document.getElementById("lista").style.opacity=1;
    },7000);
    setTimeout(function(){
        document.getElementById("princ1_header").style.opacity=1;
    },7250);
    setTimeout(function(){
        document.getElementById("bara0").style.opacity=1;
    },7500);
    setTimeout(function(){
        document.getElementById("princ1_titlu").style.opacity=1;
    },7750);
    setTimeout(function(){
        document.getElementById("princ1_cont").style.opacity=1;
    },8000);
    setTimeout(function(){
        document.getElementById("princ2_header").style.opacity=1;
    },8250);
    setTimeout(function(){
        document.getElementById("bara1").style.opacity=1;
    },8500);
    setTimeout(function(){
        document.getElementById("princ2_titlu").style.opacity=1;
    },8750);
    setTimeout(function(){
        document.getElementById("princ2_cont").style.opacity=1;
    },9000);
setTimeout(function(){
        document.getElementById("buddy_arrow").style.opacity=0.7;
    },9000);

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
    document.getElementById("princ1_titlu").style.width=0.7*100+'vw';
    document.getElementById("princ1_titlu").style.height=0.2*100+'vw';
    document.getElementById("princ1_titlu").style.marginLeft=0.15*100+'vw';
    document.getElementById("princ1_titlu").style.marginTop=0.01*100+'vh';
    
    document.getElementById("princ1_cont").style.width=0.6*100+'vw';
    document.getElementById("princ1_cont").style.marginLeft=0.2*100+'vw';
    document.getElementById("princ1_cont").style.marginTop=-0.1*100+'vw';
    document.getElementById("princ1_cont").style.height=0.65*100+'vh';
    
    document.getElementById("princ1_pre").style.marginTop=0.075*100+'vw';
    document.getElementById("princ1_pre").style.width=0.575*100+'vw';
    document.getElementById("princ1_pre").style.height=0.05*100+'vh';
    document.getElementById("princ1_pre").style.marginLeft=0.0125*100+'vw';
    
    document.getElementById("princ1_text1").style.width=0.275*100+'vw';
    document.getElementById("princ1_text1").style.height=(0.6*y0-0.1*x0)*0.4+'px';
    document.getElementById("princ1_text1").style.marginLeft=0.0125*100+'vw';
    
    document.getElementById("princ1_text2").style.width=0.275*100+'vw';
    document.getElementById("princ1_text2").style.height=(0.6*y0-0.1*x0)*0.4+'px';
    document.getElementById("princ1_text2").style.marginLeft=0.0125*100+'vw';
    
    $(".resizeText1").resizeText0();
    $(".resizeText2").resizeText0();
    $(".resizeText3").resizeText0();
    
    document.getElementById("princ1_img").style.marginLeft=0.15*100+'vw';
    document.getElementById("princ1_img").style.width=0.3*100+'vw';
    document.getElementById("princ1_img").style.height=0.6*y0-(0.6*y0-0.1*x0)*0.4-0.075*x0-0.05*y0+'px';
    
    document.getElementById("princ2_titlu").style.marginTop=0.01*100+'vh';
    document.getElementById("princ2_titlu").style.width=0.7*100+'vw';
    document.getElementById("princ2_titlu").style.height=0.2*100+'vw';
    document.getElementById("princ2_titlu").style.marginLeft=0.15*100+'vw';
    
    document.getElementById("princ2_cont").style.width=0.6*100+'vw';
    document.getElementById("princ2_cont").style.marginLeft=0.2*100+'vw';
    document.getElementById("princ2_cont").style.marginTop=-0.1*100+'vw';
    document.getElementById("princ2_cont").style.height=0.9*100+'vh';
    
    document.getElementById("princ2_text").style.marginTop=0.075*100+'vw';
    document.getElementById("princ2_text").style.width=0.5*100+'vw';
    document.getElementById("princ2_text").style.height=(0.6*y0-0.1*x0)*0.4+'px';
    document.getElementById("princ2_text").style.marginLeft=0.05*100+'vw';
    
    $(".resizeText4").resizeText0();
    
    document.getElementById("princ2_img1").style.width=0.25*100+'vw';
    document.getElementById("princ2_img1").style.height=(0.6*y0-0.1*x0)*0.4+'px';
    document.getElementById("princ2_img1").style.marginTop=(0.6*y0-0.1*x0)*0.15+'px';
    document.getElementById("princ2_img1").style.marginLeft=0.02*100+'vw';
    
    document.getElementById("princ2_img2").style.width=0.25*100+'vw';
    document.getElementById("princ2_img2").style.height=(0.6*y0-0.1*x0)*0.4+'px';
    document.getElementById("princ2_img2").style.marginTop=(0.6*y0-0.1*x0)*0.15+'px';
    document.getElementById("princ2_img2").style.marginLeft=0.04*100+'vw';
    
    document.getElementById("princ2_img3").style.width=0.25*100+'vw';
    document.getElementById("princ2_img3").style.height=0.25*100+'vh';
    document.getElementById("princ2_img3").style.marginTop=0.025*100+'vh';
    document.getElementById("princ2_img3").style.marginLeft=0.02*100+'vw';
    
    document.getElementById("princ2_img4").style.width=0.25*100+'vw';
    document.getElementById("princ2_img4").style.height=0.25*100+'vh';
    document.getElementById("princ2_img4").style.marginTop=0.025*100+'vh';
    document.getElementById("princ2_img4").style.marginLeft=0.04*100+'vw';
    
    document.getElementById("princ1_header").style.fontSize=0.1*100+'vh';
    document.getElementById("princ1_header").style.marginTop=0.1*100+'vh';
    document.getElementById("bara0").style.marginTop=0.01*100+'vh';
    
    document.getElementById("princ2_header").style.fontSize=0.1*100+'vh';
    document.getElementById("princ2_header").style.marginTop=0.1*100+'vh';
    document.getElementById("bara1").style.marginTop=0.01*100+'vh';
    
    document.getElementById("coef_header").style.fontSize=0.1*100+'vh';
    document.getElementById("coef_header").style.marginTop=0.05*100+'vh';
    document.getElementById("bara2").style.marginTop=0.01*100+'vh';
    
    document.getElementById("expl").style.width=0.7*100+'vw';
    document.getElementById('expl').style.height=0.1*100+'vh';
    document.getElementById("expl").style.marginLeft=0.15*100+'vw';
    document.getElementById("expl").style.marginTop=0.03*100+'vh';
    
    $('.resizeText5').resizeText0();
    
    document.getElementById("cont1").style.marginTop=0.05*100+'vh';
    document.getElementById("c1_desc").style.width=0.25*100+'vw';
    document.getElementById('c1_desc').style.marginLeft=0.05*100+'vw';
    document.getElementById("c1_desc").style.height=0.2*100+'vh';
    
    $('.resizeText6').resizeText0();
    
    document.getElementById("c1_formula").style.width=0.25*100+'vw';
    document.getElementById('c1_formula').style.marginLeft=0.05*100+'vw';
    document.getElementById("c1_formula").style.height=0.2*100+'vh';
    
    document.getElementById("c1_si").style.width=0.25*100+'vw';
    document.getElementById('c1_si').style.marginLeft=0.05*100+'vw';
    document.getElementById("c1_si").style.height=0.2*100+'vh';
    
    document.getElementById("cont2").style.marginTop=0.05*100+'vh';
    document.getElementById("c2_desc").style.width=0.25*100+'vw';
    document.getElementById('c2_desc').style.marginLeft=0.05*100+'vw';
    document.getElementById("c2_desc").style.height=0.2*100+'vh';
    
    $('.resizeText7').resizeText0();
    
    document.getElementById("c2_formula").style.width=0.25*100+'vw';
    document.getElementById('c2_formula').style.marginLeft=0.05*100+'vw';
    document.getElementById("c2_formula").style.height=0.2*100+'vh';
    
    document.getElementById("c2_si").style.width=0.25*100+'vw';
    document.getElementById('c2_si').style.marginLeft=0.05*100+'vw';
    document.getElementById("c2_si").style.height=0.2*100+'vh';
    
    document.getElementById("cont3").style.marginTop=0.05*100+'vh';
    document.getElementById("c3_desc").style.width=0.25*100+'vw';
    document.getElementById('c3_desc').style.marginLeft=0.05*100+'vw';
    document.getElementById("c3_desc").style.height=0.2*100+'vh';
    
    $('.resizeText8').resizeText0();
    
    document.getElementById("c3_formula").style.width=0.25*100+'vw';
    document.getElementById('c3_formula').style.marginLeft=0.05*100+'vw';
    document.getElementById("c3_formula").style.height=0.2*100+'vh';
    
    document.getElementById("c3_si").style.width=0.25*100+'vw';
    document.getElementById('c3_si').style.marginLeft=0.05*100+'vw';
    document.getElementById("c3_si").style.height=0.2*100+'vh';
    
    document.getElementById("princ3_header").style.fontSize=0.1*100+'vh';
    document.getElementById("princ3_header").style.marginTop=0.1*100+'vh';
    document.getElementById("bara3").style.marginTop=0.01*100+'vh';
    
    document.getElementById("princ3_titlu").style.marginTop=0.01*100+'vh';
    document.getElementById("princ3_titlu").style.width=0.7*100+'vw';
    document.getElementById("princ3_titlu").style.height=0.2*100+'vw';
    document.getElementById("princ3_titlu").style.marginLeft=0.15*100+'vw';
    
    document.getElementById("princ3_cont").style.width=0.6*100+'vw';
    document.getElementById("princ3_cont").style.marginLeft=0.2*100+'vw';
    document.getElementById("princ3_cont").style.marginTop=-0.1*100+'vw';
    document.getElementById("princ3_cont").style.height=0.35*100+'vh';
    
    document.getElementById("princ3_text").style.marginTop=0.075*100+'vw';
    document.getElementById("princ3_text").style.width=0.5*100+'vw';
    document.getElementById("princ3_text").style.height=(0.6*y0-0.1*x0)*0.4+'px';
    document.getElementById("princ3_text").style.marginLeft=0.05*100+'vw';
    
    $(".resizeText9").resizeText0();
    
    
    
    
    
    
    
    
    
    
    
}