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
    
    
    
    setTimeout(function(){for(var i=0;i<=21;i++)
        {
            if(i!=3 || i!=4)
            {
                $(".resizeText"+i).resizeText0();
            }
        }
                         
     },100);

    
}

window.onload = function (){
    document.getElementById("background").style.width=100+'vw'  ;
    document.getElementById("background").style.height=100+'vh'  ;
    setTimeout(function(){
        document.getElementById("background").style.opacity=1;
    },1000);
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
    document.getElementById("titlu_cont").style.width=100+'vw';
    var litere=document.getElementsByClassName("titlu_litera");
    for(var i=0;i<=litere.length-1;i++)
        {
            litere[i].style.fontSize=0.3*100+'vh';
        }

    setTimeout(function()
               {
        var ok=0;
    var interv=setInterval(
        function(){
            litere[ok].style.opacity=1;
            ok++;
            if(ok==litere.length)
                {
                    clearInterval(interv);
                }
        }
    ,50);
    },3000);
    setTimeout(function(){
        var ok=litere.length-1;
        var interv=setInterval(
        function(){
            litere[ok].style.opacity=0;
            ok--;
            if(ok<0)
                {
                    clearInterval(interv);
                }
        },50);
    },4500);

    setTimeout(function(){
        document.getElementById("background").style.opacity=0;
    },5500);
    setTimeout(function(){
        document.body.style.backgroundSize="15%,15%,cover";
        document.body.style.backgroundImage="url(imagini/optic_left.png),url(imagini/optic_right.png),linear-gradient(to right,#000000, #16193B, #000000)";
        document.body.style.overflowY='auto';
    },7000);
    setTimeout(function(){
        document.getElementById("lista").style.opacity=1;
    },7000);
    setTimeout(function(){
        document.getElementById("interferenta_header").style.opacity=1;
    },7500);
    setTimeout(function(){
        document.getElementById("bara").style.opacity=1;
    },8000);
    setTimeout(function(){
        document.getElementById("interferenta_cont").style.opacity=1;
    },8500);
    setTimeout(function(){
        document.getElementById("interf_poza_cont").style.opacity=1;
        document.getElementById("coer_cont").style.opacity=1;

    },9000);
   setTimeout(function(){
        document.getElementById("buddy_arrow").style.opacity=0.7;
    },9500);

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
    document.getElementById("interferenta_header").style.fontSize=0.1*100+'vh';
    document.getElementById("bara").style.marginTop=0.01*100+'vh';
    document.getElementById("interferenta_header").style.marginTop=0.1*100+'vh';
    document.getElementById("interferenta_cont").style.marginLeft=0.03*100+'vw';
    document.getElementById("interferenta_cont").style.marginTop=0.05*100+'vh';
    
    document.getElementById("interferenta_titlu").style.width=0.6*100+'vw';
    document.getElementById("interferenta_titlu").style.height=0.1*100+'vh';
    
    document.getElementById("interferenta_desc").style.width=0.6*100+'vw';
    document.getElementById("interferenta_desc").style.height=0.5*100+'vh';
    
    $(".resizeText0").resizeText0();
    $(".resizeText1").resizeText0();
    
    document.getElementById("interf_poza_cont").style.marginLeft=0.03*100+'vw';
    document.getElementById("interf_poza").style.width=0.3*100+'vw';
    document.getElementById("interf_poza").style.height=0.3*100+'vh';
    
    document.getElementById("interf_poza_titlu").style.width=0.3*100+'vw';
    document.getElementById("interf_poza_titlu").style.height=0.1*100+'vh';
    
    $(".resizeText2").resizeText0();

//    document.getElementById("unde_cont").style.marginLeft=0.05*100+'vw';
//    document.getElementById("unde_cont").style.marginTop=0.1*100+'vh';
//    
//    document.getElementById("unde_titlu").style.width=0.4*100+'vw';
//    document.getElementById("unde_titlu").style.height=0.1*100+'vh';
//    
//    document.getElementById("unde_desc").style.width=0.4*100+'vw';
//    document.getElementById("unde_desc").style.height=0.3*100+'vh';
//    
//    $(".resizeText3").resizeText0();
//    $(".resizeText4").resizeText0();
    
    document.getElementById("coer_cont").style.marginLeft=0.2*100+'vw';
    document.getElementById("coer_cont").style.marginTop=0.1*100+'vh';
    
    document.getElementById("coer_titlu").style.width=0.6*100+'vw';
    document.getElementById("coer_titlu").style.height=0.1*100+'vh';
    
    document.getElementById("coer_desc").style.width=0.6*100+'vw';
    document.getElementById("coer_desc").style.height=0.3*100+'vh';
    
    
    $(".resizeText5").resizeText0();
    $(".resizeText6").resizeText0();
    
    document.getElementById("young_header").style.fontSize=0.1*100+'vh';
    document.getElementById("young_header").style.marginTop=0.05*100+'vh';

    document.getElementById("bara2").style.marginTop=0.01*100+'vh';
    
    document.getElementById("young_cont").style.marginTop=0.05*100+'vh';
    document.getElementById("young_cont").style.marginLeft=0.05*100+'vw';
    
    document.getElementById("young_titlu").style.width=0.5*100+'vw';
    document.getElementById("young_titlu").style.height=0.1*100+'vh';
    
    document.getElementById("young_desc").style.width=0.5*100+'vw';
    document.getElementById("young_desc").style.height=0.3*100+'vh';
    
    $(".resizeText7").resizeText0();
    $(".resizeText8").resizeText0();
    
    document.getElementById("young_img_cont").style.marginLeft=0.05*100+'vw';
    document.getElementById("young_img_cont").style.marginTop=0.05*100+'vh';
    
    document.getElementById("young_img").style.width=0.35*100+'vw';
    document.getElementById("young_img").style.height=0.4*100+'vh';
    
    document.getElementById("young_img_titlu").style.width=0.35*100+'vw';
    document.getElementById("young_img_titlu").style.height=0.1*100+'vh';
    
    $(".resizeText9").resizeText0();

    document.getElementById("schita_titlu").style.height=0.1*100+'vh';
    document.getElementById("schita_titlu").style.width=0.8*100+'vw';
    document.getElementById("schita_titlu").style.marginTop=0.05*100+'vh';
    document.getElementById("schita_titlu").style.marginLeft=0.1*100+'vw';
    
    document.getElementById("schita_cont").style.width=0.8*100+'vw';
    document.getElementById("schita_cont").style.height=0.7*100+'vh';
    document.getElementById("schita_cont").style.marginLeft=0.1*100+'vw';
    
    document.getElementById("schita_img").style.width=0.5*100+'vw';
    document.getElementById("schita_img").style.height=0.7*100+'vh';
    
    document.getElementById("schita_notatii").style.width=0.295*100+'vw';
    document.getElementById("schita_notatii").style.height=0.7*100+'vh';
    
    var not=document.getElementsByClassName("notatie");
    for(var i=0;i<=not.length-1;i++)
        {
            not[i].style.width=0.25*100+'vw';
            not[i].style.height=0.1*100+'vh';
            not[i].style.marginLeft=0.0225*100+'vw';
        }
    
    document.getElementById("notatii_titlu").style.width=0.295*100+'vw';
    document.getElementById("notatii_titlu").style.height=0.1*100+'vh';
    
    $(".resizeText10").resizeText0();
    $(".resizeText11").resizeText0();
    $(".resizeText12").resizeText0();
    $(".resizeText13").resizeText0();
    $(".resizeText14").resizeText0();
    $(".resizeText15").resizeText0();
    $(".resizeText16").resizeText0();
    $(".resizeText17").resizeText0();

    document.getElementById("continuare").style.width=0.5*100+'vw';
    document.getElementById("continuare").style.height=0.1*100+'vh';
    document.getElementById("continuare").style.marginTop=0.05*100+'vh';
    document.getElementById("continuare").style.marginLeft=0.25*100+'vw';
    
    $(".resizeText18").resizeText0();
 
    document.getElementById("ecuatii1").style.width=0.5*100+'vw';
    document.getElementById("ecuatii1").style.height=0.4*100+'vh';
    document.getElementById("ecuatii1").style.marginTop=0.015*100+'vh';
    document.getElementById('ecuatii1').style.marginLeft=0.25*100+'vw';
    
    document.getElementById("continuare2").style.width=0.7*100+'vw';
    document.getElementById("continuare2").style.height=0.15*100+'vh';
    document.getElementById("continuare2").style.marginTop=0.05*100+'vh';
    document.getElementById("continuare2").style.marginLeft=0.15*100+'vw';
    
    $(".resizeText19").resizeText0();
    
    document.getElementById("ecuatii2").style.width=0.5*100+'vw';
    document.getElementById("ecuatii2").style.height=0.2*100+'vh';
    document.getElementById("ecuatii2").style.marginTop=0.015*100+'vh';
    document.getElementById('ecuatii2').style.marginLeft=0.25*100+'vw';
    
    document.getElementById("continuare3").style.width=0.7*100+'vw';
    document.getElementById("continuare3").style.height=0.15*100+'vh';
    document.getElementById("continuare3").style.marginTop=0.05*100+'vh';
    document.getElementById("continuare3").style.marginLeft=0.15*100+'vw';
    
    $(".resizeText20").resizeText0();
    
    document.getElementById("ecuatii3").style.width=0.5*100+'vw';
    document.getElementById("ecuatii3").style.height=0.2*100+'vh';
    document.getElementById("ecuatii3").style.marginTop=0.015*100+'vh';
    document.getElementById('ecuatii3').style.marginLeft=0.25*100+'vw';
    
    document.getElementById("continuare4").style.width=0.7*100+'vw';
    document.getElementById("continuare4").style.height=0.15*100+'vh';
    document.getElementById("continuare4").style.marginTop=0.05*100+'vh';
    document.getElementById("continuare4").style.marginLeft=0.15*100+'vw';
    
    $(".resizeText21").resizeText0();
    
    document.getElementById("ecuatii4").style.width=0.5*100+'vw';
    document.getElementById("ecuatii4").style.height=0.2*100+'vh';
    document.getElementById("ecuatii4").style.marginTop=0.015*100+'vh';
    document.getElementById('ecuatii4').style.marginLeft=0.25*100+'vw';
    
    document.getElementById("filler").style.padding=0.05*100+'vh';
}