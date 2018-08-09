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
    setTimeout(function(){
        for(var i=0;i<=lit.length-1;i++)
        {
            lit[i].id='lit'+i;
            lit[i].style.width=0.1*100+'vw';
            lit[i].style.height=0.1*100+'vw';
            lit[i].style.marginTop=(0.9*y0)/2-0.1*x0+'px';
            lit[i].style.marginLeft=0.15*x0+i*0.1*x0+'px';
            lit[0].style.marginLeft=-0.1*100+'vw';
        }
    },200);

    
    setTimeout(function(){for(var i=0;i<=19;i++)
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
            m[1].style.color='#00261C';
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
    d[4].style.width=0.1*100+'vw';
    d[4].style.height=0.045*100+'vh';
    var lit=document.getElementsByClassName("litera");
    for(var i=0;i<=lit.length-1;i++)
        {
            lit[i].id='lit'+i;
            lit[i].style.width=0.1*100+'vw';
            lit[i].style.height=0.1*100+'vw';
            lit[i].style.marginTop=(0.9*y0)/2-0.1*x0+'px';
            lit[i].style.marginLeft=0.15*x0+i*0.1*x0+'px';
            lit[0].style.marginLeft=-0.1*100+'vw';
        }
    $(".resizeText0").resizeText0();
    $(".resizeText1").resizeText0();
    $(".resizeText2").resizeText0();
    $(".resizeText3").resizeText0();
    $(".resizeText4").resizeText0();
    $(".resizeText5").resizeText0();
    $(".resizeText6").resizeText0();
    var ok=0;

    var inter=setInterval(function(){
        document.getElementById("lit"+ok).style.opacity=1;
        ok++;
        if(ok>6)
            {
                clearInterval(inter);
            }
            
    },100);
    setTimeout(function(){
        document.getElementById("lit0").style.marginLeft=0.15*100+'vw';
    },1500);
    setTimeout(function(){
        document.getElementById("lit6").style.marginLeft=100+'vw';
    },1700);
    setTimeout(function()
              {
        for(var i=0;i<=lit.length-2;i++)
        {
           
            lit[i].style.marginLeft=0.2*x0+i*0.1*100+'vw';
        }
    },2300);
    setTimeout(function(){
        document.getElementById("intro_cont").style.opacity=0;
    },3000);
    setTimeout(function(){
        document.getElementById("lista").style.opacity=1;
    },4000);
    setTimeout(function(){
        document.body.style.backgroundSize="15%,15%,cover";
        document.body.style.backgroundImage="url(imagini/left_mec.png),url(imagini/right_mec.png),linear-gradient(to right, #00261C, #044C29, #00261C)";
        document.body.style.overflowY='auto';
    },3500);
    setTimeout(function(){
        document.getElementById("impuls_header").style.opacity=1;
    },4000);
    setTimeout(function(){
        document.getElementById("bara0").style.opacity=1;
    },4500);
    setTimeout(function(){
        document.getElementById("impuls_desc_cont").style.opacity=1;
    },5000);
    setTimeout(function(){
        document.getElementById("impuls_img_cont").style.opacity=1;
    },5500);
    setTimeout(function(){
        document.getElementById("variatie_impuls_header").style.opacity=1;
    },6000);
    setTimeout(function(){
        document.getElementById("explicatie1").style.opacity=1;
    },6500);
    setTimeout(function(){
        document.getElementById("buddy_arrow").style.opacity=0.7;
    },7000);
    
        var vorbeste_var=0;
    var vorbeste=setInterval(function(){
        if(vorbeste_var%2==0)
            {
                document.getElementById("buddy_ochi").style.transform="translateY(-50%) scale(1.3,1.3)";
            }else{
                document.getElementById("buddy_ochi").style.transform="translateY(-50%) scale(1,1)";

                
                }
        vorbeste_var++;
        if(vorbeste_var>=10){
            clearInterval(vorbeste);
        }
    },300);
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
    
    document.getElementById("impuls_header").style.marginTop=0.1*100+'vh';
    document.getElementById("impuls_header").style.fontSize=0.1*100+'vh';
    document.getElementById("bara0").style.marginTop=0.01*100+'vh';
    
    document.getElementById("impuls_cont").style.marginTop=0.05*100+'vh';
    document.getElementById("impuls_desc_cont").style.marginLeft=0.1875*100+'vw';
    
    document.getElementById("impuls_titlu").style.width=0.35*100+'vw';
    document.getElementById("impuls_titlu").style.height=0.1*100+'vh';
    document.getElementById("impuls_text").style.width=0.35*100+'vw';
    document.getElementById("impuls_text").style.height=0.3*100+'vh';
    
    $(".resizeText7").resizeText0();
    $(".resizeText8").resizeText0();
    
    document.getElementById("impuls_img_cont").style.marginLeft=0.025*100+'vw';
    document.getElementById("impuls_formula").style.width=0.125*100+'vw';
    document.getElementById("impuls_formula").style.height=0.125*100+'vw';
    document.getElementById("impuls_formula").style.marginLeft=0.125*100+'vw';
    
    document.getElementById("impuls_si").style.width=0.125*100+'vw';
    document.getElementById("impuls_si").style.height=0.125*100+'vw';
    
    document.getElementById("variatie_impuls_header").style.marginTop=0.05*100+'vh';
    document.getElementById("variatie_impuls_header").style.fontSize=0.1*100+'vh';
    
    document.getElementById("explicatie1").style.height=0.15*100+'vh';
    document.getElementById("explicatie1").style.width=0.6*100+'vw';
    document.getElementById("explicatie1").style.marginLeft=0.2*100+'vw';
    document.getElementById("explicatie1").style.marginTop=0.02*100+'vh';
    
    $(".resizeText9").resizeText0();
    
    document.getElementById("var_impuls").style.width=0.9*100+'vw';
    document.getElementById('var_impuls').style.height=0.5*100+'vh';
    document.getElementById("var_impuls").style.marginLeft=0.05*100+'vw';
    document.getElementById("var_impuls").style.marginTop=0.01*100+'vh';
    
    
    document.getElementById("conserv_impuls_header").style.marginTop=0.05*100+'vh';
    document.getElementById("conserv_impuls_header").style.fontSize=0.1*100+'vh';
    
    document.getElementById("conserv_titlu").style.marginTop=0.05*100+'vh';
    document.getElementById("conserv_desc_cont").style.marginLeft=0.05*100+'vw';
    document.getElementById("conserv_titlu").style.width=0.5*100+'vw';
    document.getElementById("conserv_titlu").style.height=0.1*100+'vh';
    
    document.getElementById("conserv_desc").style.width=0.5*100+'vw';
    document.getElementById("conserv_desc").style.height=0.4*100+'vh';
    
    document.getElementById("conserv_img").style.width=0.35*100+'vw';
    document.getElementById("conserv_img").style.height=0.4*100+'vh';
    document.getElementById("conserv_img_cont").style.marginLeft=0.05*100+'vw';
    document.getElementById("conserv_img_titlu").style.width=0.35*100+'vw';
    document.getElementById("conserv_img_titlu").style.height=0.1*100+'vh'
    
    $(".resizeText10").resizeText0();
    $(".resizeText11").resizeText0();
    $(".resizeText12").resizeText0();

    document.getElementById("ciocnire_cont").style.marginTop=0.05*100+'vh';
    document.getElementById("ciocnire_cont").style.marginLeft=0.175*100+'vw';
    document.getElementById("ciocnire_titlu").style.height=0.15*100+'vw';
    document.getElementById("ciocnire_titlu").style.width=0.15*100+'vw';
    document.getElementById("ciocnire_desc").style.height=0.15*100+'vw';
    document.getElementById("ciocnire_desc").style.width=0.5*100+'vw';
    
    $(".resizeText13").resizeText0();
    
    document.getElementById("clasificare_cioc").style.fontSize=0.1*100+'vh';
    document.getElementById("clasificare_cioc").style.marginTop=0.05*100+'vh';
    document.getElementById("bara1").style.marginTop=0.01*100+'vh';
    
    document.getElementById("cioc_plast_desc_cont").style.marginTop=0.1*100+'vh';
    document.getElementById("cioc_plast_desc_cont").style.marginLeft=0.05*100+'vw';
    document.getElementById("cioc_plast_titlu").style.width=0.45*100+'vw';
    document.getElementById("cioc_plast_titlu").style.height=0.1*100+'vh';
    document.getElementById("cioc_plast_desc").style.width=0.45*100+'vw';
    document.getElementById("cioc_plast_desc").style.height=0.25*100+'vh';
    $('.resizeText14').resizeText0();
    $('.resizeText15').resizeText0();
    
    document.getElementById("cioc_plast_impuls").style.width=0.45*100+'vw';
    document.getElementById("cioc_plast_impuls").style.height=0.1*100+'vh';
    
    document.getElementById("cioc_plast_desc2").style.width=0.45*100+'vw';
    document.getElementById("cioc_plast_desc2").style.height=0.1*100+'vh';
    $(".resizeText16").resizeText0();
    document.getElementById("cioc_plast_energie").style.width=0.45*100+'vw';
    document.getElementById("cioc_plast_energie").style.height=0.2*100+'vh';
    
    var canvas1 = document.getElementById("cioc_plast_anim");
    document.getElementById("cioc_plast_anim").style.marginLeft=0.05*100+'vw';
    canvas1.width = 0.4*x0;
    canvas1.height = 0.4*x0;
    var c = canvas1.getContext("2d");
    function Rectilinie1(x1,y1,v1,x2,y2,v2){
        this.x1=x1;
        this.y1=y1;
        this.v1=v1;
        this.x2=x2;
        this.y2=y2;
        this.v2=v2;
        this.r=0.05*0.4*x0;
        
        this.draw=function(){
            c.beginPath();
            c.arc(this.x1,this.y1,this.r,0,Math.PI*2,false);
            c.fillStyle="orange";
            c.fill();
            
            c.beginPath();
            c.arc(this.x2,this.y2,this.r,0,Math.PI*2,false);
            c.fillStyle="lime";
            c.fill();
            
        }
        this.update=function(){
            this.x2=this.x2+this.v2;
            this.x1=this.x1+this.v1;
            if(this.x2<=this.x1+this.r)
                {
                    this.v2=0.003*x0;
                    this.v1=0.003*x0;
                }
            if(this.x1+this.r>0.4*x0)
                {
                    this.x1=-this.r;
                    this.x2=0.4*x0+this.r;
                    this.v2=-0.002*x0;
                    this.v1=0.004*x0;
                }
            this.draw();
        }
    }
        var rectilinie1 = new Rectilinie1(-0.05*0.4*x0,0.5*0.4*x0,0.004*x0,0.4*x0+0.05*0.4*x0,0.5*0.4*x0,-0.002*x0);
        function animate1(){
            requestAnimationFrame(animate1);
            c.clearRect(0,0,0.4*x0,0.4*x0);
            rectilinie1.update();
        }
        animate1();
    
    
     document.getElementById("cioc_elast_desc_cont").style.marginTop=0.1*100+'vh';
    document.getElementById("cioc_elast_desc_cont").style.marginLeft=0.05*100+'vw';
    document.getElementById("cioc_elast_titlu").style.width=0.45*100+'vw';
    document.getElementById("cioc_elast_titlu").style.height=0.1*100+'vh';
    document.getElementById("cioc_elast_desc").style.width=0.45*100+'vw';
    document.getElementById("cioc_elast_desc").style.height=0.25*100+'vh';
    $('.resizeText17').resizeText0();
    $('.resizeText18').resizeText0();
    
    document.getElementById("cioc_elast_impuls").style.width=0.45*100+'vw';
    document.getElementById("cioc_elast_impuls").style.height=0.1*100+'vh';
    
    document.getElementById("cioc_elast_desc2").style.width=0.45*100+'vw';
    document.getElementById("cioc_elast_desc2").style.height=0.1*100+'vh';
    $(".resizeText19").resizeText0();
    document.getElementById("cioc_elast_energie").style.width=0.45*100+'vw';
    document.getElementById("cioc_elast_energie").style.height=0.2*100+'vh';
    
    var canvas2 = document.getElementById("cioc_elast_anim");
    document.getElementById("cioc_elast_anim").style.marginLeft=0.05*100+'vw';
    canvas2.width = 0.4*x0;
    canvas2.height = 0.4*x0;
    var c2 = canvas2.getContext("2d");
    function Rectilinie2(x1,y1,v1,x2,y2,v2){
        this.x1=x1;
        this.y1=y1;
        this.v1=v1;
        this.x2=x2;
        this.y2=y2;
        this.v2=v2;
        this.r=0.05*0.4*x0;
        
        this.draw=function(){
            c2.beginPath();
            c2.arc(this.x1,this.y1,this.r,0,Math.PI*2,false);
            c2.fillStyle="orange";
            c2.fill();
            
            c2.beginPath();
            c2.arc(this.x2,this.y2,this.r,0,Math.PI*2,false);
            c2.fillStyle="lime";
            c2.fill();
            
        }
        this.update=function(){
            this.x2=this.x2+this.v2;
            this.x1=this.x1+this.v1;
            if(this.x2<=this.x1+this.r)
                {
                    this.v2=0.003*x0;
                    this.v1=-0.004*x0;
                }
            if(this.x1<-this.r && this.x2+this.r>0.4*x0)
                {
                    this.x1=-this.r;
                    this.x2=0.4*x0+this.r;
                    this.v2=-0.004*x0;
                    this.v1=0.006*x0;
                }
            this.draw();
        }
    }
        var rectilinie2 = new Rectilinie2(-0.05*0.4*x0,0.5*0.4*x0,0.006*x0,0.4*x0+0.05*0.4*x0,0.5*0.4*x0,-0.004*x0);
        function animate2(){
            requestAnimationFrame(animate2);
            c2.clearRect(0,0,0.4*x0,0.4*x0);
            rectilinie2.update();
        }
        animate2();
    
    document.getElementById("filler").style.height=0.1*100+'vh';
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}