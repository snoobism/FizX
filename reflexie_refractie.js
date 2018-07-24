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


var c,canvas,background;


var unghi=30,n1=1.5,n2=1;

window.onload = function (){
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
		d[i].style.fontSize=0.05*y0+"px";
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
    d[4].style.width=0.1*x0+'px';
    d[4].style.height=0.045*y0+'px';
    document.getElementById("intro").style.width=0.4*x0+'px';
    document.getElementById("intro").style.height=0.4*y0+'px';
    setTimeout(function(){
        document.getElementById("intro").style.opacity=1;
    },1000);
    setTimeout(function(){
        document.getElementById("intro").style.backgroundImage="url(imagini/intro2.png";
        document.getElementById("intro").style.width=0.6*x0+'px';
    document.getElementById("intro").style.height=0.6*y0+'px';
    },1500);
    setTimeout(function(){
        document.getElementById("intro").style.backgroundImage="url(imagini/intro3.png)";
            document.getElementById("intro").style.width=0.4*x0+'px';
    document.getElementById("intro").style.height=0.4*y0+'px';
    },3000);
    setTimeout(function(){
        document.getElementById("intro").style.backgroundImage="url(imagini/intro4.png)";
        document.getElementById("intro").style.width=0.6*x0+'px';
    document.getElementById("intro").style.height=0.6*y0+'px';
        
    },4000);
    setTimeout(function(){
    document.getElementById("intro").style.width=0.7*x0+'px';
    document.getElementById("intro").style.height=0.7*y0+'px'; document.getElementById('intro').style.backgroundImage="url(imagini/intro5.png)";
    },5000);
    setTimeout(function(){
        document.getElementById("intro").style.opacity=0;
        document.getElementById("lista").style.opacity=1;
    },6000);
    setTimeout(function(){
        document.getElementById("reflexie_titlu").style.opacity=1;
        document.getElementById("bara").style.opacity=1;
        document.getElementById("definitie_cont").style.opacity=1;
        document.getElementById("exemplu_cont").style.opacity=1;
        document.getElementById("legi_titlu").style.opacity=1;
        document.getElementById("legi_cont").style.opacity=1;
        document.getElementById("refl_imag").style.opacity=1;
        document.getElementById("refl_titlu").style.opacity=1;
        document.getElementById("bara2").style.opacity=1;
        document.getElementById("refractie_titlu").style.opacity=1;
        
        
        document.getElementById("refl_imag").style.opacity=1;
        document.getElementById("refl_titlu").style.opacity=1;
        document.getElementById("refractie_titlu").style.opacity=1;
        document.getElementById("bara2").style.opacity=1;
        document.getElementById("definitie_cont_refr").style.opacity=1;
        document.getElementById("exemplu_cont_refr").style.opacity=1;
        document.getElementById("legi_titlu_refr").style.opacity=1;
        document.getElementById("legi_cont_refr").style.opacity=1;
        document.getElementById("refr_imag").style.opacity=1;
        document.getElementById("refr_titlu").style.opacity=1;
        document.getElementById("reflt_desc").style.opacity=1;
        document.getElementById("reflt_titlu").style.opacity=1;
        document.getElementById("cutie").style.opacity=1;
        document.getElementById("simulare_cont").style.opacity=1;

    },7250);
    setTimeout(function(){
        document.getElementById("reflexie_titlu").style.opacity=1;
    },6250);
    setTimeout(function(){
        document.getElementById("bara").style.opacity=1;
    },6500);
    setTimeout(function(){
        document.getElementById("definitie_cont").style.opacity=1;
    },6750);
    setTimeout(function(){
        document.getElementById("exemplu_cont").style.opacity=1;
    },7000);
    setTimeout(function(){
        document.body.style.backgroundSize="15%,15%,cover";
        document.body.style.backgroundImage="url(imagini/optic_left.png),url(imagini/optic_right.png),linear-gradient(to right,#000000, #16193B, #000000)";
        document.body.style.overflowY='auto';
    },6000);
   setTimeout(function(){
        document.getElementById("buddy_arrow").style.opacity=0.7;
    },7500);

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
    document.getElementById("reflexie_titlu").style.fontSize=0.15*y0+'px';
    document.getElementById("reflexie_titlu").style.marginTop=0.1*y0+'px';
    
    document.getElementById("definitie_titlu").style.width=0.5*x0+'px';
    document.getElementById("definitie_titlu").style.height=0.1*y0+'px';
    document.getElementById("definitie_titlu").style.marginTop=0.05*y0+'px';
    document.getElementById("definitie_titlu").style.marginLeft=0.04*x0+'px';
    
    document.getElementById("definitie_desc").style.width=0.5*x0+'px';
    document.getElementById("definitie_desc").style.height=0.4*y0+'px';
    document.getElementById("definitie_desc").style.marginLeft=0.04*x0+'px';
    $(".resizeText0").resizeText0();
    $(".resizeText1").resizeText0();
    
    document.getElementById("exemplu_titlu").style.width=0.35*x0+'px';
    document.getElementById("exemplu_titlu").style.height=0.1*y0+'px';
    document.getElementById("exemplu_titlu").style.marginLeft=0.05*x0+'px';
    
    document.getElementById("exemplu_desc").style.width=0.35*x0+'px';
    document.getElementById("exemplu_desc").style.height=0.4*y0+'px';
    document.getElementById("exemplu_desc").style.marginLeft=0.05*x0+'px';
    document.getElementById("exemplu_desc").style.marginTop=0.05*y0+'px';

    
    $(".resizeText2").resizeText0();
    document.getElementById("legi_titlu").style.width=0.4*x0+'px';
    document.getElementById("legi_titlu").style.height=0.1*y0+'px';
    document.getElementById("legi_titlu").style.marginTop=0.1*y0+'px';
    document.getElementById("legi_titlu").style.marginLeft=0.03*x0+"px";
    
    document.getElementById("legi_cont").style.width=0.4*x0+'px';
    document.getElementById("legi_cont").style.height=0.4*y0+'px';
    document.getElementById("legi_cont").style.marginLeft=0.03*x0+"px";
    
    document.getElementById("legea1").style.width=0.35*x0+'px';
    document.getElementById("legea1").style.height=0.2*y0+'px';
    document.getElementById("legea1").style.marginLeft=0.025*x0+'px';
    
    document.getElementById("legea2").style.width=0.35*x0+'px';
    document.getElementById("legea2").style.height=0.2*y0+'px';
    document.getElementById("legea2").style.marginLeft=0.025*x0+'px';
    $(".resizeText3").resizeText0();
    $(".resizeText4").resizeText0();
    $(".resizeText5").resizeText0();
    
    document.getElementById("refl_titlu").style.width=0.5*x0+'px';
    document.getElementById("refl_titlu").style.height=0.1*y0+'px';
    document.getElementById("refl_titlu").style.marginLeft=0.03*x0+"px";
    
    document.getElementById("refl_imag").style.width=0.5*x0+'px';
    document.getElementById("refl_imag").style.height=0.4*y0+'px';
    document.getElementById("refl_imag").style.marginLeft=0.03*x0+"px";
    document.getElementById("refl_imag").style.marginTop=0.1*y0+'px';
    $(".resizeText6").resizeText0();
    
    document.getElementById("refractie_titlu").style.fontSize=0.15*y0+'px';
    document.getElementById("refractie_titlu").style.marginTop=0.1*y0+'px';
    
    document.getElementById("definitie_titlu_refr").style.width=0.5*x0+'px';
    document.getElementById("definitie_titlu_refr").style.height=0.1*y0+'px';
    document.getElementById("definitie_titlu_refr").style.marginTop=0.05*y0+'px';
    document.getElementById("definitie_titlu_refr").style.marginLeft=0.04*x0+'px';
    
    document.getElementById("definitie_desc_refr").style.width=0.5*x0+'px';
    document.getElementById("definitie_desc_refr").style.height=0.4*y0+'px';
    document.getElementById("definitie_desc_refr").style.marginLeft=0.04*x0+'px';
    $(".resizeText7").resizeText0();
    $(".resizeText8").resizeText0();

    document.getElementById("exemplu_titlu_refr").style.width=0.35*x0+'px';
    document.getElementById("exemplu_titlu_refr").style.height=0.1*y0+'px';
    document.getElementById("exemplu_titlu_refr").style.marginLeft=0.05*x0+'px';
    
    document.getElementById("exemplu_desc_refr").style.width=0.35*x0+'px';
    document.getElementById("exemplu_desc_refr").style.height=0.4*y0+'px';
    document.getElementById("exemplu_desc_refr").style.marginLeft=0.05*x0+'px';
    document.getElementById("exemplu_desc_refr").style.marginTop=0.05*y0+'px';

    
    $(".resizeText9").resizeText0();
    
    document.getElementById("legi_titlu_refr").style.width=0.4*x0+'px';
    document.getElementById("legi_titlu_refr").style.height=0.1*y0+'px';
    document.getElementById("legi_titlu_refr").style.marginTop=0.1*y0+'px';
    document.getElementById("legi_titlu_refr").style.marginLeft=0.03*x0+"px";
    
    document.getElementById("legi_cont_refr").style.width=0.4*x0+'px';
    document.getElementById("legi_cont_refr").style.height=0.4*y0+'px';
    document.getElementById("legi_cont_refr").style.marginLeft=0.03*x0+"px";
    
    document.getElementById("legea1_refr").style.width=0.325*x0+'px';
    document.getElementById("legea1_refr").style.height=0.2*y0+'px';
    document.getElementById("legea1_refr").style.marginLeft=0.0375*x0+'px';
    
    document.getElementById("legea2_refr").style.width=0.325*x0+'px';
    document.getElementById("legea2_refr").style.height=0.2*y0+'px';
    document.getElementById("legea2_refr").style.marginLeft=0.0375*x0+'px';
    $(".resizeText10").resizeText0();
    $(".resizeText11").resizeText0();
    $(".resizeText12").resizeText0();
    
    document.getElementById("refr_titlu").style.width=0.5*x0+'px';
    document.getElementById("refr_titlu").style.height=0.1*y0+'px';
    document.getElementById("refr_titlu").style.marginLeft=0.03*x0+"px";
    
    document.getElementById("refr_imag").style.width=0.5*x0+'px';
    document.getElementById("refr_imag").style.height=0.7*y0+'px';
    document.getElementById("refr_imag").style.marginLeft=0.03*x0+"px";
    document.getElementById("refr_imag").style.marginTop=0.1*y0+'px';
    $(".resizeText13").resizeText0();
    
    document.getElementById("reflt_titlu").style.width=0.7*x0+'px';
    document.getElementById("reflt_titlu").style.marginLeft=0.15*x0+"px";
    document.getElementById("reflt_titlu").style.marginTop=0.05*y0+'px';
    document.getElementById("reflt_titlu").style.height=0.1*y0+'px';
    
    document.getElementById("reflt_desc").style.width=0.7*x0+'px';
    document.getElementById("reflt_desc").style.height=0.5*y0+'px';
    document.getElementById("reflt_desc").style.marginLeft=0.15*x0+'px';
    
    $(".resizeText14").resizeText0();
    $(".resizeText15").resizeText0();
    
    document.getElementById('simulare_titlu').style.width=0.3*x0+'px';
    document.getElementById('simulare_titlu').style.height=0.1*y0+'px';
    document.getElementById("simulare_titlu").style.marginTop=0.1*y0+'px';

    $(".resizeText16").resizeText0();

    document.getElementById('simulare_desc').style.width=0.3*x0+'px';
    document.getElementById('simulare_desc').style.height=0.4*y0+'px';
    
    document.getElementById("cutie").style.marginTop=0.1*y0+'px';
    
    document.getElementById("n1").style.width=0.05*x0+'px';
    document.getElementById("n1").style.height=0.05*y0+'px';
    document.getElementById("n2").style.width=0.05*x0+'px';
    document.getElementById("n2").style.height=0.05*y0+'px';
    document.getElementById("i").style.width=0.05*x0+'px';
    document.getElementById("i").style.height=0.05*y0+'px';
    document.getElementById("r").style.width=0.05*x0+'px';
    document.getElementById("r").style.height=0.05*y0+'px';
    document.getElementById("l").style.width=0.05*x0+'px';
    document.getElementById("l").style.height=0.05*y0+'px';
    document.getElementById("n1_value").style.width=0.05*x0+'px';
    document.getElementById("n1_value").style.height=0.05*y0+'px';
    document.getElementById("n2_value").style.width=0.05*x0+'px';
    document.getElementById("n2_value").style.height=0.05*y0+'px';
    document.getElementById("i_value").style.width=0.05*x0+'px';
    document.getElementById("i_value").style.height=0.05*y0+'px';
    document.getElementById("r_value").style.width=0.05*x0+'px';
    document.getElementById("r_value").style.height=0.05*y0+'px';
    document.getElementById("l_value").style.width=0.05*x0+'px';
    document.getElementById("l_value").style.height=0.05*y0+'px';
    $(".resizeText17").resizeText0();
    $(".resizeText18").resizeText0();
    $(".resizeText19").resizeText0();
    $(".resizeText21").resizeText0();
    $(".resizeText23").resizeText0();

    document.getElementById("filler").style.padding=0.05*y0+'px';
    
    var cont_input=document.getElementsByClassName("cont_input");
    for(var i=0;i<=cont_input.length-1;i++)
        {
            cont_input[i].style.marginTop=0.02*y0+'px';
        }
    
    document.getElementById("t1").style.width=0.3*x0+'px';
    document.getElementById("t1").style.height=0.333*0.2*y0+'px';
    document.getElementById("t2").style.width=0.3*x0+'px';
    document.getElementById("t2").style.height=0.333*0.2*y0+'px';
    document.getElementById("t3").style.width=0.3*x0+'px';
    document.getElementById("t3").style.height=0.333*0.2*y0+'px';
    $(".resizeText24").resizeText0();
    $(".resizeText25").resizeText0();
    $(".resizeText26").resizeText0();
    
    document.getElementById("canvas").width=0.7*y0;
    document.getElementById("canvas").height=0.7*y0;
    canvas = document.querySelector('canvas');
    c = canvas.getContext('2d');
    background =new Background();
    incidenta = new Incidenta();
    refractata = new Refractata();
    setInterval(function(){
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    if(keys["left"]==true && keys["z"]==false && keys["shift"]==false && incidenta.angle<90)
        {
            incidenta.angle+=0.1;
            document.getElementById("i_value").value=incidenta.angle;
        }
    if(keys["right"]==true && keys["z"]==false && keys["shift"]==false && incidenta.angle>0)
        {
            incidenta.angle-=0.1;
            document.getElementById("i_value").value=incidenta.angle;

        }
    if(keys["left"]==true && keys["z"]==false && keys["shift"]==true && incidenta.angle<90)
        {
            incidenta.angle+=0.01;
            document.getElementById("i_value").value=incidenta.angle;

        }
    if(keys["right"]==true && keys["z"]==false && keys["shift"]==true && incidenta.angle>0)
        {
            incidenta.angle-=0.01;
            document.getElementById("i_value").value=incidenta.angle;

        }
    if(keys["left"]==true && keys["z"]==true && keys["shift"]==true && incidenta.angle<90)
        {
            incidenta.angle+=0.001;
            document.getElementById("i_value").value=incidenta.angle;

        }
    if(keys["right"]==true && keys["z"]==true && keys["shift"]==true && incidenta.angle>0)
        {
            incidenta.angle-=0.001;
            document.getElementById("i_value").value=incidenta.angle;

        }
    n1=Number(document.getElementById("n1_value").value);
    n2=Number(document.getElementById("n2_value").value)    
    incidenta.angle=Number(document.getElementById("i_value").value);
    document.getElementById("r_value").value=refractata.angle;
    document.getElementById("l_value").value=Math.asin(n2/n1)*(180/Math.PI);

    background.draw();
    incidenta.update();
    refractata.update();
    

},1)
}
function Background(){
    this.draw=function(){
        c.beginPath(); 
        c.fillStyle='#CFF09E';
        c.rect(0,canvas.height/2-canvas.height*0.005,canvas.width,canvas.height*0.005);
        c.fill();
        c.closePath();

        
        c.beginPath(); 
        c.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
        c.strokeStyle="red";
        c.moveTo(canvas.width/2,0);
        c.lineTo(canvas.width/2, canvas.height);
        c.stroke();
        c.closePath();

    }
}

function Incidenta(){
    this.w=0.015*canvas.height;
    this.h=canvas.height;
    this.x=canvas.width/2-this.w/2;
    this.y=-canvas.height/2;
    this.rotunzime=5;
    this.angle=Number(document.getElementById("i_value").value);
    this.draw=function(){
        c.beginPath();
        c.fillStyle='#00fff0';
        c.strokeStyle='#00fff0';
        c.setLineDash([0, 0]);
        c.lineJoin = "round";
        c.lineWidth = this.rotunzime;
        c.strokeRect(this.x+(this.rotunzime/2), this.y+(this.rotunzime/2), this.w-this.rotunzime, this.h-this.rotunzime);
        c.fillRect(this.x+(this.rotunzime/2), this.y+(this.rotunzime/2), this.w-this.rotunzime, this.h-this.rotunzime);
        c.closePath();
        
    }
    this.update = function(){
        c.save();
        c.translate(canvas.width/2,canvas.height/2);
        c.rotate(-this.angle*Math.PI/180);
        c.translate(-canvas.width/2,-canvas.height/2);
        incidenta.draw();
        c.restore();
    }
    
}

function Refractata(){
    this.w=0.015*canvas.height;
    this.h=canvas.height;
    this.x=canvas.width/2-this.w/2;
    this.y=canvas.height/2;
    this.rotunzime=5;
    
    
    this.draw=function(){
        c.translate(canvas.width/2,canvas.height/2);
        
        c.rotate(-this.angle*Math.PI/180);

        c.translate(-canvas.width/2,-canvas.height/2);
        c.beginPath();
        c.fillStyle='#00ff00';
        c.strokeStyle='#00ff00';
        c.setLineDash([0, 0]);
        c.lineJoin = "round";
        c.lineWidth = this.rotunzime;
        c.strokeRect(this.x+(this.rotunzime/2), this.y+(this.rotunzime/2), this.w-this.rotunzime, this.h-this.rotunzime);
        c.fillRect(this.x+(this.rotunzime/2), this.y+(this.rotunzime/2), this.w-this.rotunzime, this.h-this.rotunzime);
        c.closePath();
        
    }
    this.update = function () {
        c.save();
        
        
            if (Math.abs(incidenta.angle) >= Math.abs(Math.asin((n2/n1))/( Math.PI / 180))) {
                this.angle = (180-incidenta.angle);


                refractata.draw();
                    console.log('b')
            } else {

                this.angle=Math.asin(n1*Math.sin(incidenta.angle*Math.PI/180)/n2)/(Math.PI/180);
                refractata.draw();
                console.log(this.angle)
                
            }
        

        c.restore();
    }
    
}

var keys = {
    left:false,
    right:false,
    shift:false,
    z:false
};

addEventListener("keydown", function(event) {
// save status of the button 'pressed' == 'true'
    if (event.keyCode == 37) {
        keys["left"] = true;
    }
    if (event.keyCode == 39) {
        keys["right"] = true;
    }
    if(event.keyCode == 16){
        keys["shift"] = true;
    }
    if(event.keyCode == 90){
        keys["z"] = true;
    }
    
    
});

addEventListener("keyup", function(event) {
    if (event.keyCode == 37) {
        keys["left"] = false;
    }
    if (event.keyCode == 39) {
        keys["right"] = false;
    }
    if(event.keyCode == 16){
        keys["shift"] = false;
    }
    if(event.keyCode == 90){
        keys["z"] = false;
    }
});

function check(input) {
   if (Number(input.value) < 0) {
     input.value=0.1;
   } 
    if (Number(input.value) > 90) {
     input.value=0.1;
   } 
 }
