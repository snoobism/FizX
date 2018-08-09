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


window.onresize = function(){
    var y0=window.screen.availHeight;
    var x0=window.screen.availWidth;
    
    setTimeout(function(){
        document.getElementById("energie_cont").style.marginLeft=0.15*x0-30+"px";
        document.getElementById("term_titlu").style.width=0.5*x0+20+'px';
        document.getElementById("putere_cont").style.marginLeft=0.15*x0-30+"px";
        document.getElementById("putere_max_titlu").style.width=0.6*x0+20+'px';
        document.getElementById("imagini_cont").style.width=0.6*x0+20+'px';
        document.getElementById('conditie_pmax').style.width=0.5*x0+20+'px';
        document.getElementById("imagini_cont2").style.width=0.6*x0+20+'px';
    },250);
    
    setTimeout(function(){for(var i=0;i<=12;i++)
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
    document.getElementById("energie_anim").style.width=0.5*100+'vw';
    document.getElementById("energie_anim").style.height=0.5*100+'vh';
    document.getElementById("energie_anim").style.lineHeight=0.5*100+'vh';
    document.getElementById("putere_anim").style.width=0.5*100+'vw';
    document.getElementById("putere_anim").style.height=0.5*100+'vh';
    document.getElementById("putere_anim").style.lineHeight=0.5*100+'vh';
    setTimeout(function(){
        document.getElementById("energie_anim").style.transform="translate(-50%,-50%)";
    },1000);
    setTimeout(function(){
        document.getElementById("putere_anim").style.transform="translate(-50%,-50%)";
        document.getElementById("titlu").style.opacity=1;

    },3000);
    setTimeout(function(){
        document.getElementById("energie_anim").style.transform="translate(-50%,200%)";
    },3300);
    setTimeout(function(){
        document.getElementById("putere_anim").style.transform="translate(100%,-50%)";
    },4500);
    setTimeout(function(){
    
        document.body.style.backgroundSize="15%,15%";
		document.body.style.backgroundImage="url(imagini/lig_left.png),url(imagini/lig_right.png)";    
        document.body.style.overflowY='auto';
    },5500);
    $(".resizeText0").resizeText0();
    $(".resizeText1").resizeText0();
    var z=document.getElementsByClassName("bara");

    document.getElementById("titlu").style.width=0.8*100+'vw';
    document.getElementById("titlu").style.height=0.3*100+'vh';
    document.getElementById("titlu").style.marginTop=-0.3*100+'vh';
    document.getElementById("titlu").style.marginLeft=0.1*100+'vw';
    setTimeout(function(){
        document.getElementById("titlu").style.marginTop=0.1*100+'vh';
        document.getElementById("subtitlu").style.opacity=1;

        
    },6000);
    setTimeout(function(){
        document.getElementById("lista").style.opacity=1;
        z[0].style.opacity=1;
    },7000);
    setTimeout(function(){
        document.getElementById("energie_cont").style.opacity=1;
    },7500);  
    setTimeout(function(){
        document.getElementById("energie_formula").style.opacity=1;
        document.getElementById("putere_cont").style.opacity=1;
        document.getElementById("term_cont").style.opacity=1;

    },8000); 
    setTimeout(function(){
        document.getElementById("buddy_arrow").style.opacity=0.7;
    },8000);

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
    document.getElementById("subtitlu").style.width=0.6*100+'vw';
    document.getElementById("subtitlu").style.height=0.15*100+'vh';
    document.getElementById("subtitlu").style.marginTop=0.025*100+'vh';
    document.getElementById("subtitlu").style.marginLeft=0.2*100+'vw';
    $(".resizeText2").resizeText0();
    
    document.getElementById("energie_def_cont").style.height=0.1*100+'vh';
    document.getElementById("energie_def").style.width=0.5*100+'vw';
    document.getElementById("energie_def").style.height=0.1*100+'vh';
    document.getElementById("energie_si").style.width=0.2*100+'vw';
    document.getElementById("energie_si").style.height=0.1*100+'vh';
    
    document.getElementById("energie_cont").style.marginLeft=0.15*x0-30+"px";
    $(".resizeText3").resizeText0();
    
    document.getElementById("energie_formula").style.width=0.7*100+'vw';
    document.getElementById("energie_formula").style.height=0.2*100+'vh';
    document.getElementById("energie_formula").style.marginLeft=0.15*100+'vw';
    document.getElementById("energie_formula").style.backgroundImage="url(imagini/energie_formula.png)";
    
    document.getElementById("term_titlu").style.width=0.5*x0+20+'px';
    document.getElementById("term_titlu").style.height=0.1*100+'vh';
    document.getElementById("term_desc_cont").style.width=0.5*100+'vw';
    document.getElementById("term_desc").style.width=0.5*100+'vw';
    document.getElementById("term_desc").style.height=0.25*100+'vh';
    document.getElementById("term_img").style.width=0.15*100+'vw';
    document.getElementById("term_img").style.height=0.1*100+'vh';
    
    $(".resizeText4").resizeText0();
    $(".resizeText5").resizeText0();

    document.getElementById("putere_def_cont").style.height=0.1*100+'vh';
    document.getElementById("putere_def").style.width=0.5*100+'vw';
    document.getElementById("putere_def").style.height=0.1*100+'vh';
    document.getElementById("putere_si").style.width=0.2*100+'vw';
    document.getElementById("putere_si").style.height=0.1*100+'vh';
    
    document.getElementById("putere_cont").style.marginLeft=0.15*x0-30+"px";
    $(".resizeText6").resizeText0();
    
    document.getElementById("putere_formula").style.width=0.7*100+'vw';
    document.getElementById("putere_formula").style.height=0.3*100+'vh';
    document.getElementById("putere_formula").style.marginTop=0.05*100+'vh';
    document.getElementById("putere_formula").style.marginLeft=0.15*100+'vw';
    
    document.getElementById("formula_cont").style.marginTop=0.05*100+'vh';
    document.getElementById('formula_cont').style.width=0.4*100+'vw';
    document.getElementById("formula_cont").style.height=0.1*100+'vh';
    document.getElementById("formula_cont").style.marginLeft=0.3*100+'vw';
    
    $(".resizeText7").resizeText0();
    
    document.getElementById("putere_formula2").style.width=0.7*100+'vw';
    document.getElementById("putere_formula2").style.height=0.3*100+'vh';
    document.getElementById("putere_formula2").style.marginLeft=0.15*100+'vw';
    
    document.getElementById("putere_max_titlu").style.height=0.1*100+'vh';
    document.getElementById("putere_max_titlu").style.width=0.6*x0+20+'px';
    document.getElementById("putere_max_titlu").style.marginLeft=0.2*100+'vw';
    document.getElementById("putere_max_titlu").style.marginTop=0.05*100+'vh';

    
    document.getElementById("putere_max_desc").style.width=0.6*100+'vw';
    document.getElementById("putere_max_desc").style.height=0.2*100+'vh';
    document.getElementById("putere_max_desc_cont").style.marginLeft=0.2*100+'vw';
    
    $(".resizeText8").resizeText0();
    $(".resizeText9").resizeText0();
    
    document.getElementById("imagini_cont").style.marginLeft=0.2*100+'vw';
    document.getElementById("imagini_cont").style.width=0.6*x0+20+'px';
    document.getElementById("imagini_cont").style.height=0.2*100+'vh';
    
    var pimg=document.getElementsByClassName("pimg");
    
    for (var i=0;i<=pimg.length-1;i++)
        {
            pimg[i].style.width=0.25*0.6*100+'vw';
            pimg[i].style.height=0.175*100+'vh';
            pimg[i].style.marginLeft=0.06*0.6*100+'vw';
            pimg[i].style.marginTop=0.0125*100+'vh';
            pimg[i].style.display='inline-block';
        }
    
    document.getElementById('conditie_pmax').style.width=0.5*x0+20+'px';
    document.getElementById("conditie_pmax").style.height=0.2*100+'vh';
    document.getElementById("conditie_pmax").style.marginLeft=0.2*100+'vw';
    document.getElementById("conditie_pmax").style.paddingRight=0.05*100+'vw';
    document.getElementById("conditie_pmax").style.paddingLeft=0.05*100+'vw';

    $(".resizeText10").resizeText0();
    
    document.getElementById("imagini_cont2").style.marginLeft=0.2*100+'vw';
    document.getElementById("imagini_cont2").style.width=0.6*x0+20+'px';
    document.getElementById("imagini_cont2").style.height=0.35*100+'vh';
    
    var pimg2=document.getElementsByClassName("pimg2");
    
    for (var i=0;i<=pimg2.length-1;i++)
        {
            pimg2[i].style.width=0.4*0.6*100+'vw';
            pimg2[0].style.height=0.2*100+'vh';
            pimg2[i].style.marginLeft=0.09*0.6*100+'vw';
            pimg2[i].style.display='inline-block';
            pimg2[1].style.height=0.3*100+'vh';
            pimg2[1].style.marginTop=0.025*100+'vh';
        }
    document.getElementById("randament_titlu").style.width=0.55*100+'vw';
    document.getElementById("randament_titlu").style.height=0.1*100+'vh';
    document.getElementById("randament_titlu").style.marginTop=0.05*100+'vh';
    document.getElementById("randament_titlu").style.marginLeft=0.225*100+'vw';
    
    $(".resizeText11").resizeText0();
    
    document.getElementById("randament_text").style.width=0.55*100+'vw';
    document.getElementById("randament_text").style.height=0.3*100+'vh';
    document.getElementById("randament_text").style.marginLeft=0.225*100+'vw';
    $(".resizeText12").resizeText0();
    
    document.getElementById("randament_formula").style.width=0.9*100+'vw';
    document.getElementById("randament_formula").style.height=0.3*100+'vh';
    document.getElementById("randament_formula").style.marginTop=0.05*100+'vh';
    document.getElementById("randament_formula").style.marginLeft=0.05*100+'vw';
    
    document.getElementById("filler").style.height=0.1*100+'vh';
}