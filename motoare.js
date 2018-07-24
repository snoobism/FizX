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
    document.getElementById("intro").style.width=0.01*x0+'px';
    document.getElementById("intro").style.height=0.01*x0+'px';
    setTimeout(function(){
        document.getElementById('intro').style.width=0.7*x0+'px';
        document.getElementById('intro').style.height=0.7*x0+'px';
    },1000);
    setTimeout(function(){
        document.getElementById("intro").style.opacity=0;
    },1500);
    setTimeout(function(){
        document.getElementById("intro").style.backgroundImage="url(imagini/motoare_termice_titlu.png)";
        document.getElementById("intro").style.opacity=1;
    },3500);
    
    document.getElementById("motoare_header").style.fontSize=0.1*y0+'px';
    document.getElementById("motoare_header").style.marginTop=0.1*y0+'px';
    document.getElementById('bara0').style.marginTop=0.01*y0+'px';
    
    setTimeout(function(){
        document.getElementById("intro").style.marginLeft=2*x0+'px';
    },4500);
    setTimeout(function(){
        document.body.style.backgroundSize="10%,10%,100% 100%";
        document.body.style.backgroundImage="url(imagini/termo_left.png),url(imagini/termo_right.png),url(imagini/termo_bg.png)";
        document.body.style.overflowY='auto';
    },5000);
    setTimeout(function(){
        document.getElementById("lista").style.opacity=1;
    },5250);
    setTimeout(function(){
        document.getElementById("motoare_header").style.opacity=1;
    },5500);
    setTimeout(function(){
        document.getElementById("bara0").style.opacity=1;
    },5750);
    setTimeout(function(){
        document.getElementById("motor_1").style.opacity=1;
    },6000);
    setTimeout(function(){
        document.getElementById("motor_img").style.opacity=1;
        document.getElementById("randament_cont").style.opacity=1;
    },6250);
    setTimeout(function(){
        document.getElementById("buddy_arrow").style.opacity=0.7;
    },6000);

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
    document.getElementById("motor_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("motor_1").style.marginLeft=0.05*x0+'px';
    document.getElementById("motor_titlu").style.width=0.4*x0+'px';
    document.getElementById("motor_titlu").style.height=0.1*y0+'px';
    document.getElementById("motor_desc").style.width=0.4*x0+'px';
    document.getElementById("motor_desc").style.height=0.45*y0+'px';
    document.getElementById("motor_img").style.width=0.4*x0+'px';
    document.getElementById("motor_img").style.height=0.5*y0+'px';
    document.getElementById("motor_img").style.marginLeft=0.05*x0+'px';
    
    $(".resizeText0").resizeText0();
    $(".resizeText1").resizeText0();

    document.getElementById("randament_cont").style.marginTop=0.15*y0+'px';
    document.getElementById("randament_img_cont").style.marginLeft=0.12*x0+'px';
    document.getElementById("randament_img1").style.width=0.3*x0+'px';
    document.getElementById("randament_img1").style.height=0.2*y0+'px';
    document.getElementById("randament_img2").style.width=0.3*x0+'px';
    document.getElementById("randament_img2").style.height=0.2*y0+'px';
    document.getElementById("randament_text_cont").style.marginLeft=0.05*x0+'px';
    document.getElementById("randament_titlu").style.width=0.4*x0+'px';
    document.getElementById("randament_titlu").style.height=0.1*y0+'px';
    document.getElementById('randament_desc').style.width=0.4*x0+'px';
    document.getElementById("randament_desc").style.height=0.4*y0+'px';
    
    $(".resizeText2").resizeText0();
    $(".resizeText3").resizeText0();
    
    document.getElementById("cicluri_header").style.fontSize=0.1*y0+'px';
    document.getElementById("cicluri_header").style.marginTop=0.1*y0+'px';
    document.getElementById('bara1').style.marginTop=0.01*y0+'px';
    
    document.getElementById("otto_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("otto_img_cont").style.marginLeft=0.15*x0+'px';
    document.getElementById("otto_titlu").style.width=0.5*x0+'px';
    document.getElementById("otto_titlu").style.height=0.1*y0+'px';
    document.getElementById("otto_img").style.width=0.5*x0+'px';
    document.getElementById("otto_img").style.height=0.5*y0+'px';
    document.getElementById("otto_text").style.width=0.175*x0+'px';
    document.getElementById("otto_text").style.marginLeft=0.0125*x0+'px';
    document.getElementById("otto_text").style.height=0.375*y0+'px';
    document.getElementById("otto_text").style.marginTop=0.025*y0+'px';
    document.getElementById("otto_text_img").style.width=0.2*x0+'px';
    document.getElementById("otto_text_img").style.height=0.2*y0+'px';
    
    $(".resizeText4").resizeText0();
    $(".resizeText5").resizeText0();
    
    document.getElementById("diesel_cont").style.marginTop=0.15*y0+'px';
    document.getElementById("diesel_text_cont").style.marginLeft=0.15*x0+'px';
    document.getElementById("diesel_titlu").style.width=0.5*x0+'px';
    document.getElementById("diesel_titlu").style.height=0.1*y0+'px';
    document.getElementById("diesel_img").style.width=0.5*x0+'px';
    document.getElementById("diesel_img").style.height=0.5*y0+'px';
    document.getElementById("diesel_text").style.width=0.175*x0+'px';
    document.getElementById("diesel_text").style.marginLeft=0.0125*x0+'px';
    document.getElementById("diesel_text").style.height=0.375*y0+'px';
    document.getElementById("diesel_text").style.marginTop=0.025*y0+'px';
    document.getElementById("diesel_text_img").style.width=0.2*x0+'px';
    document.getElementById("diesel_text_img").style.height=0.2*y0+'px';
    
    $(".resizeText6").resizeText0();
    $(".resizeText7").resizeText0();
    
    document.getElementById("carnot_cont").style.marginTop=0.15*y0+'px';
    document.getElementById("carnot_img_cont").style.marginLeft=0.15*x0+'px';
    document.getElementById("carnot_titlu").style.width=0.5*x0+'px';
    document.getElementById("carnot_titlu").style.height=0.1*y0+'px';
    document.getElementById("carnot_img").style.width=0.5*x0+'px';
    document.getElementById("carnot_img").style.height=0.5*y0+'px';
    document.getElementById("carnot_text").style.width=0.175*x0+'px';
    document.getElementById("carnot_text").style.marginLeft=0.0125*x0+'px';
    document.getElementById("carnot_text").style.height=0.375*y0+'px';
    document.getElementById("carnot_text").style.marginTop=0.025*y0+'px';
    document.getElementById("carnot_text_img").style.width=0.2*x0+'px';
    document.getElementById("carnot_text_img").style.height=0.2*y0+'px';
    
    $(".resizeText8").resizeText0();
    $(".resizeText9").resizeText0();
    
    document.getElementById("filler").style.height=0.1*y0+'px';
    
    
    
    
    
    
}