var y0=$(window).height();
var x0=$(window).width();
var culori=["rgb(105,210,231)","rgb(38,146,0)","rgb(211,25,0)","rgb(243,217,21)"]
var culoribg=["red","yellow","blue","green"];
var sectiune=0,imag_nr,v;
var imag=[
    ["url(imagini/acasa_o1.png)","url(imagini/acasa_o2.png)","url(imagini/acasa_o3.png)"],
    ["url(imagini/acasa_m1.png)","url(imagini/acasa_m2.png)","url(imagini/acasa_m3.png)"],
    ["url(imagini/acasa_t1.png)","url(imagini/acasa_t2.png)","url(imagini/acasa_t3.png)"],
    ["url(imagini/acasa_e1.png)","url(imagini/acasa_e2.png)","url(imagini/acasa_e3.png)"]
]
{//minimize this
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




}

    var showing=0;
    function schimba(){
        if(showing==0)
            {
                showing=1;
                document.getElementById("buddy_cont").style.left="1vh";

            }else{
                document.getElementById("buddy_cont").style.left="-97vh";
                showing=0;

            }
    }

function rotate (event) 
{
    var x = event.clientX;
    var w = window.innerWidth;
    var midpoint = w / 2;
    var pos = x - midpoint;
    var val = (pos / midpoint) * 20;
    var logo = document.getElementById ("logo");
    logo.style.transform = "translateZ(0) perspective(550px) rotateY(" + val + "deg)";

}
function rotate2 (event) 
{
    var x = event.clientX;
    var w = window.innerWidth;
    var midpoint = w / 2;
    var pos = x - midpoint;
    var val = -(pos / midpoint) * 20;
    var linii = document.getElementById ("linii");
    linii.style.transform = "translate(-50%,-50%) perspective(550px) rotateY(" + val + "deg)";

}
document.addEventListener("mousemove", function(event)
{
    rotate(event)
    rotate2(event)
}, false);

window.onload = function (){
    
    var d=document.getElementById("lista").children;
	var e=document.getElementsByClassName("textc");
    var m=document.getElementsByClassName("link");
    for(var i=0;i<=m.length-1;i++)
        {
            m[0].style.color='black';
        }
    for(var i=0;i<=e.length-1;i++)
	{	
		e[i].innerHTML=tex[i][x];
	}
	
	for(var i=0;i<=d.length-1;i++)
	{
		d[i].style.fontSize=0.05*y0+"px";
        $(d[i]).hover(function(){
            for(var i=0;i<=d.length-1;i++)
                {
                    m[i].style.backgroundColor='black';
                    m[i].style.color='white';
                    d[i].style.backgroundColor='black';
                    d[i].style.color='white';
                }
            this.style.backgroundColor='white';
            this.style.color='black';
            m[$("li").index(this)].style.backgroundColor='white';
            m[$("li").index(this)].style.color='black';

        },function(){
            for(var i=0;i<=d.length-1;i++)
                {
                    m[i].style.backgroundColor='black';
                    m[i].style.color='white';
                    d[i].style.backgroundColor='black';
                    d[i].style.color='white';
                }
            d[0].style.backgroundColor='white';
            d[0].style.color='black';
            m[0].style.backgroundColor='white';
            m[0].style.color='black';
            
        })
	}
    document.getElementById("linii").style.width=2*x0+'px';
    document.getElementById("linii").style.height=2*y0+'px';
    
    document.getElementById("loading").style.width=0.2*y0+'px';
    document.getElementById("loading").style.height=0.2*y0+'px';
    document.getElementById("loading2").style.width=0.1*y0+'px';
    document.getElementById("loading2").style.height=0.1*y0+'px';
    document.getElementById("loading").style.border=0.01*y0+'px solid #121212';
    document.getElementById("loading").style.borderTop=0.01*y0+'px solid white';
    document.getElementById("loading").style.marginLeft=-0.1*y0+'px';
    document.getElementById("loading").style.marginTop=-0.1*y0+'px';
    document.getElementById("loading2").style.marginLeft=0.01*y0+'px';
    document.getElementById("loading2").style.marginTop=0.01*y0+'px';
    document.getElementById("xj").style.width=0.15*y0+'px';
    document.getElementById("xs").style.width=0.15*y0+'px';
    document.getElementById("xj").style.height=0.2*y0+'px';
    document.getElementById("xs").style.height=0.2*y0+'px';
    document.getElementById("logo").style.width=0.8*x0+'px';
    document.getElementById("logo").style.height=0.5*y0+'px';
    document.getElementById("logo").style.marginLeft=0.1*x0+'px';
    document.getElementById("desc").style.fontSize=0.05*y0+'px';
    document.getElementById('meniu_fals').style.fontSize=0.1*y0+'px';
    document.getElementById("content").style.marginTop=y0+'px';
    document.getElementById("decefiz_cont").style.height=0.5*y0+'px';
    document.getElementById("decefiz").style.width=x0+'px';
    document.getElementById("decefiz").style.height=0.6*y0+'px';
    document.getElementById('decefiz_text').style.width=0.4*x0+'px';
	document.getElementById('decefiz_text').style.height=0.8*0.4*y0+'px';
	document.getElementById('decefiz_text').style.marginLeft=0.05*x0+'px';
	document.getElementById('decefiz_titlu').style.width=0.4*x0+'px';
	document.getElementById('decefiz_titlu').style.height=0.8*0.45*0.6*y0+'px';
	document.getElementById('decefiz_titlu').style.marginLeft=0.55*x0+'px';
    
    document.getElementById("decefiz_cont2").style.height=0.5*y0+'px';
    document.getElementById("decefiz2").style.width=x0+'px';
    document.getElementById("decefiz2").style.height=0.6*y0+'px';
    document.getElementById('decefiz_text2').style.width=0.4*x0+'px';
	document.getElementById('decefiz_text2').style.height=0.8*0.4*y0+'px';
	document.getElementById('decefiz_text2').style.marginLeft=0.55*x0+'px';
	document.getElementById('decefiz_titlu2').style.width=0.4*x0+'px';
	document.getElementById('decefiz_titlu2').style.height=0.8*0.45*0.6*y0+'px';
	document.getElementById('decefiz_titlu2').style.marginLeft=0.05*x0+'px';
   
    document.getElementById("imagini_poza").style.width=0.6*(16/9)*y0+'px';
    document.getElementById("imagini_poza").style.height=0.6*y0+'px';
    
    document.getElementById("img_titlu").style.fontSize=0.15*y0+'px';
    schimba(0);
    var b=document.getElementsByClassName("buton");
    var a=document.getElementsByClassName("buton_cont");
     v=b[0];
    for(var i=0;i<=a.length-1;i++)
        {   
            a[i].style.width=0.25*0.6*x0+'px';
            a[i].style.height=0.15*0.6*y0+'px';
            a[i].style.marginLeft=0.03*0.6*x0+'px';
            a[0].style.marginTop=-0.075*0.6*y0+'px';
            a[3].style.marginTop=-0.075*0.6*y0+'px';
            a[1].style.marginTop=-0.0375*0.6*y0+'px';
            a[2].style.marginTop=-0.0375*0.6*y0+'px';
            $(b[i]).hover(function () {
                for(var i=0;i<=a.length-1;i++)
                    {
                        b[i].style.backgroundColor = "black";
                        b[i].style.color = 'white';
                    }
                this.style.backgroundColor = culori[this.id];
                this.style.color = 'black';
            }, function () {
                this.style.backgroundColor = "black";
                this.style.color = 'white';
                v.style.backgroundColor = culori[v.id];
                v.style.color = 'black';
                console.log(v);
                
            })
            }
    
    document.getElementById("left").style.width=0.2*0.6*y0+'px';
    document.getElementById("left").style.height=0.2*0.6*y0+'px';
    document.getElementById("right").style.width=0.2*0.6*y0+'px';
    document.getElementById("right").style.height=0.2*0.6*y0+'px';
    
    $(".resizeText0").resizeText0();
    $(".resizeText1").resizeText0();
    $(".resizeText3").resizeText0();
    $(".resizeText4").resizeText0();
    $(".resizeText5").resizeText0();
    $(".resizeText6").resizeText0();
    $(".resizeText7").resizeText0();
    $(".resizeText8").resizeText0();
    
    setTimeout(function(){
        document.getElementById("loading").style.transition='0.5s all';
        document.getElementById("loading2").style.transition='0.5s all';
        document.getElementById("loading").style.opacity=1;
        document.getElementById("loading2").style.opacity=1;
    },300)
    setTimeout(function(){
        document.getElementById("loading").style.transition='0.3s all';
        document.getElementById("loading2").style.transition='0.3s all';
        document.getElementById("loading").style.opacity=0;
        document.getElementById("loading2").style.opacity=0;
    },2000);
    setTimeout(function(){
        document.getElementById('xj').style.opacity=1;
        document.getElementById('xs').style.opacity=1;

    },3000);
    setTimeout(function(){
        document.getElementById('xj').style.marginTop=0.4*y0+'px';
        document.getElementById('xs').style.marginTop=-0.4*y0+'px';

    },4000);
    setTimeout(
    function(){
        document.getElementById('logo').style.opacity=1;
    },4500);
    setTimeout(function (){
        document.getElementById("logo").style.transition="0s all";
    },5010);


    setTimeout(function(){
        document.getElementById("linie").style.opacity=1;
    },5500);
    setTimeout(function(){
        document.getElementById("desc").style.opacity=1;
    },6000);
    setTimeout(function(){
        document.getElementById("meniu_fals").style.opacity=1;
    },6500);
    
    setTimeout(function(){
		$(window).scroll( function(){
    
       
        $('.buddy').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            
            if( bottom_of_window > bottom_of_object ){
                
                this.style.marginLeft="20vw";
                this.style.marginTop="15vh";
                document.getElementById("buddy_imagine").style.width="55vh";
                document.getElementById("buddy_imagine").style.height="55vh";
                document.getElementById("buddy_imagine").style.transform="rotate(360deg)";
                setTimeout(function(){
                    document.getElementById("buddy_chat").style.opacity=1;
                },500);
                setTimeout(function(){
                    document.getElementById("materie").style.opacity=1;
                },1000);
            }
            
        }); 
    
    });
	},1000);
    
        setInterval(function(){
        miscare();
    },3000);
    var sch = 0;
    setInterval(function () {
        if (sch == 0) {
            document.getElementById("buddy_ochi").style.backgroundColor = "#a8002a";
            sch++;
        } else {
            if (sch == 1) {
                document.getElementById("buddy_ochi").style.backgroundColor = "#ffab03";
                sch++;
            } else {
                if (sch == 2) {
                    document.getElementById("buddy_ochi").style.backgroundColor = "#1e7200";
                    sch++;
                } else {
                    if (sch == 3) {
                        document.getElementById("buddy_ochi").style.backgroundColor = "#003870";
                        sch = 0;
                    }
                }
            }
        }

    }, 750);
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
    
}
function schimba(a){
        var b=document.getElementsByClassName("buton");

    sectiune=a;
    document.getElementById("imagini_poza").style.backgroundImage=imag[sectiune][0];
    imag_nr=0;
    v=b[a];
    v.style.backgroundColor = culori[v.id];
    v.style.color = 'black';
    console.log(v);
}
function right1(){
    if(imag_nr==2){
        imag_nr=0;
    }else{imag_nr++}
    document.getElementById("imagini_poza").style.backgroundImage=imag[sectiune][imag_nr];
}
function left1(){
    if(imag_nr==0){
        imag_nr=2;
    }else{imag_nr--}
    document.getElementById("imagini_poza").style.backgroundImage=imag[sectiune][imag_nr];
}

