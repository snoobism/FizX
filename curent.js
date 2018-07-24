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

var elemente_desc=["<strong>Generatorul electric</strong> este un dispozitiv care transformă o formă de energie: chimică, mecanică, optică, termică etc. în energie electrică. Astfel, ele se numesc: pile, dinamuri, alternatoare, celule fotoelectrice.","<strong>Rezistorul</strong> este o piesă componentă din circuitele electrice și electronice a cărei principală proprietate este rezistența electrică.","<strong>Ampermetrul</strong> este un aparat de măsurare a intensității curentului electric ce trece printr-un conductor sau un circuit electric.","<strong>Voltmetrul</strong> este un aparat electric de măsură folosit pentru măsurarea tensiunilor în circuitele electrice.","<strong>Consumatorul electric</strong> este o componentă electrică sau o porțiune a unui circuit care consumă energie electrică. Consumatorii electrici pot fi obiecte electrice cum ar fi: becuri, dispozitive, aparate, mașini electrice etc.","<strong>Întrerupătorul</strong> este o componentă electrică folosită la închiderea sau deschiderea rețelei prin care trece un curent electric."];
var elemente_simbol=['generator.png','rezistor.png','ampermetru.png','voltmetru.png','consumator.png','intrerupator.png'];
var elemente_poza=['baterie.png','rezistorp.png','ampermetrup.png','voltmetrup.png','bec.png','intrerupatorp.png'];
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
		d[i].style.fontSize=0.05*y0+"px";
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
    d[4].style.width=0.1*x0+'px';
    d[4].style.height=0.045*y0+'px';
    document.getElementById("titlu").style.marginTop=0.05*y0+'px';
    document.getElementById("titlu").style.width=0.9*x0+'px';
    document.getElementById("titlu").style.height=0.9*y0+'px';
      $(".resizeText0").resizeText0();
//    var a=document.getElementsByClassName("spanz");
//    
//    var z_p=0;
//    var z=setInterval(function(){
//        a[z_p].style.opacity=1;
//        z_p++;
//        if(z_p==a.length)
//            {
//                clearInterval(z_p);
//            }
//    },100);
    setTimeout(function(){
        document.getElementById("titlu").style.marginTop=0.1*y0+'px';
        document.getElementById("titlu").style.fontSize="0.2em";
        document.getElementById("titlu").style.height=0.1*y0+'px';
    },1000);
    setTimeout(function(){
        document.body.style.backgroundSize="15%,15%";
		document.body.style.backgroundImage="url(imagini/lig_left.png),url(imagini/lig_right.png)";
        document.body.style.overflowY='auto';
        document.getElementById("lista").style.opacity=1;
    },2000);
    setTimeout(function(){
        document.getElementById("descriere_cont").style.opacity=1;
    },2250);
    setTimeout(function(){
        document.getElementById("curent_img_cont").style.opacity=1;
    },2500);
    setTimeout(function(){
        document.getElementById("curent_gif_cont").style.opacity=1;
    },2750);
    setTimeout(function(){
        document.getElementById("buddy_arrow").style.opacity=0.7;
    },3000);

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
    
	document.getElementById("descriere_titlu").style.width=0.5*x0+"px";
    document.getElementById("descriere_titlu").style.height=0.1*y0+'px';
	document.getElementById("curent_img_poza").style.width=0.3*x0-20+"px";
    document.getElementById("curent_img_poza").style.height=0.35*y0+'px';
	
	document.getElementById("descriere_text").style.width=0.5*x0-20+"px";
    document.getElementById("descriere_text").style.height=0.35*y0+'px';
    document.getElementById("curent_img_titlu").style.width=0.3*x0+"px";
    document.getElementById("curent_img_titlu").style.height=0.1*y0+'px';
	
    document.getElementById("descriere_cont").style.marginTop=-0.05*y0+'px';
    document.getElementById("curent_img_cont").style.marginTop=-0.05*y0+'px';
    
    document.getElementById("curent_gif_titlu").style.width=0.7*x0+"px";
    document.getElementById("curent_gif_titlu").style.height=0.1*y0+'px';
    
    document.getElementById("intensitate_def").style.width=0.6*x0+"px";
    document.getElementById("intensitate_def").style.height=0.1*y0+'px';
    document.getElementById("intensitate_si").style.width=0.2*x0+'px';
    document.getElementById("intensitate_si").style.height=0.1*y0+"px";
    
    document.getElementById("intensitate_cont").style.marginLeft=0.1*x0-40+"px";
    
    document.getElementById("tensiune_cont").style.marginLeft=0.1*x0-40+"px";
    
    document.getElementById("rezistenta_cont").style.marginLeft=0.1*x0-40+"px";
    document.getElementById("rezistenta_cont").style.marginTop=0.1*y0+'px';
    document.getElementById("tensiune_cont").style.marginTop=0.1*y0+'px';
        document.getElementById("intensitate_cont").style.marginTop=0.1*y0+'px';
    document.getElementById("filler").style.padding=0.05*y0+10+'px';
    
    document.getElementById("tensiune_def").style.width=0.6*x0+"px";
    document.getElementById("tensiune_def").style.height=0.1*y0+'px';
    document.getElementById("tensiune_si").style.width=0.2*x0+'px';
    document.getElementById("tensiune_si").style.height=0.1*y0+"px";

    document.getElementById("rezistenta_def").style.width=0.6*x0+"px";
    document.getElementById("rezistenta_def").style.height=0.1*y0+'px';
    document.getElementById("rezistenta_si").style.width=0.2*x0+'px';
    document.getElementById("rezistenta_si").style.height=0.1*y0+"px";
    
    document.getElementById("rezistivitate_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("rezistivitate_cont").style.width=0.4*x0+'px';
    document.getElementById('rezistivitate_cont').style.height=0.07*y0+'px';
    document.getElementById("rezistivitate_cont").style.marginLeft=0.3*x0+'px';
    
    $(".resizeText18").resizeText0();
    
    document.getElementById("rezistenta_img").style.width=0.15*x0+'px';
    document.getElementById("rezistenta_img").style.height=0.15*y0+'px';
    document.getElementById("rezistenta_img").style.marginTop=0.05*y0+'px';
    document.getElementById("rezistenta_img").style.marginLeft=0.425*x0+'px';
    document.getElementById("rezistenta_img").style.backgroundImage="url(imagini/rezistenta.png)";
    
    document.getElementById("explicatie").style.marginTop=0.05*y0+'px';
    document.getElementById("explicatie").style.width=0.6*x0+'px';
    document.getElementById('explicatie').style.height=0.1*y0+'px';
    document.getElementById("explicatie").style.marginLeft=0.2*x0+'px';
    
    $(".resizeText19").resizeText0();    
    
    document.getElementById("poza1").style.width=0.35*x0+'px';
    document.getElementById("poza1").style.height=0.2*y0+'px';
    document.getElementById("poza2").style.width=0.35*x0+'px';
    document.getElementById("poza2").style.height=0.2*y0+'px';
    document.getElementById("poza1").style.marginTop=0.05*y0+'px';
    document.getElementById("poza2").style.marginTop=0.05*y0+'px';
    document.getElementById("poza1").style.marginLeft=0.1*x0+'px';
    document.getElementById("poza2").style.marginLeft=0.1*x0+'px';
    
    document.getElementById("explicatie2").style.marginTop=0.05*y0+'px';
    document.getElementById("explicatie2").style.width=0.5*x0+'px';
    document.getElementById('explicatie2').style.height=0.1*y0+'px';
    document.getElementById("explicatie2").style.marginLeft=0.25*x0+'px';
    
    $(".resizeText20").resizeText0();   
    document.getElementById("titlu_notiuni").style.fontSize=0.1*y0+'px';
    document.getElementById("titlu_el").style.fontSize=0.1*y0+'px';
    
    var b=document.getElementsByClassName("element");
    for(var i=0;i<=b.length-1;i++)
        {
            b[i].style.width=0.11*x0+'px';
            b[i].style.height=0.11*x0+'px';
            b[i].style.marginLeft=0.02*x0+'px';
            b[i].style.lineHeight=0.11*x0+'px';
            
        }
    var c=document.getElementsByClassName("titlu_e");
    for(var i=0;i<=c.length-1;i++)
        {
            c[i].style.width=0.3*x0+'px';
            c[i].style.height=0.1*y0+'px';
        }
    document.getElementById("element_desc").style.width=0.3*x0+"px";
    document.getElementById("element_desc").style.height=0.3*y0+'px';
    
    document.getElementById("element_simbol").style.width=0.3*x0+'px';
    document.getElementById("element_simbol").style.height=0.3*y0+'px';
    
    document.getElementById("element_poza").style.width=0.3*x0+"px";
    document.getElementById("element_poza").style.height=0.3*y0+'px';
    

    $(".resizeText1").resizeText0();
    $(".resizeText2").resizeText0();
    $(".resizeText3").resizeText0();
    $(".resizeText4").resizeText0();
    $(".resizeText5").resizeText0();
    $(".resizeText6").resizeText0();
    $(".resizeText7").resizeText0();
    $(".resizeText8").resizeText0();
    $(".resizeText9").resizeText0();
    $(".resizeText10").resizeText0();
    $(".resizeText11").resizeText0();
    $(".resizeText12").resizeText0();
    $(".resizeText13").resizeText0();
    $(".resizeText14").resizeText0();
    $(".resizeText15").resizeText0();
    $(".resizeText16").resizeText0();
    $(".resizeText17").resizeText0();

    for (var i = 0; i <= b.length - 1; i++) {
        b[i].style.width = 0.12 * x0 + 'px';
        b[i].style.height = 0.12 * x0 + 'px';
        b[i].style.marginLeft = 0.035 * x0 + 'px';
        b[i].style.lineHeight = 0.12 * x0 + 'px';
        $(b[i]).click(function () {
            for(var j=0;j<=b.length-1;j++)
                {
                    b[j].style.transform="rotate(0deg) scale(1,1)";
                    b[j].style.boxShadow="0px 0px 15px black";
                }
            this.style.transform="rotate(360deg) scale(1.1,1.1)";
            this.style.boxShadow="0px 0px 15px gold";
            document.getElementById("element_desc").innerHTML = elemente_desc[$(".element").index(this)];
            $(".resizeText17").resizeText0();
            document.getElementById("element_simbol").style.backgroundImage='url(imagini/'+elemente_simbol[$(".element").index(this)]+')';
            document.getElementById("element_poza").style.backgroundImage='url(imagini/'+elemente_poza[$(".element").index(this)]+')';

        });
    }
    
    var elec = new Image();
    elec.src="imagini/electron.png";
    var canvas = document.getElementById("curent_gif");
    canvas.height=0.3*y0;
    canvas.width=0.7*x0;
    var ctx = canvas.getContext('2d');
    var electroni=[];
    function Electron(y){
        this.r=0.15*0.3*y0;
        this.y=y;
        this.x=0.7*x0+this.r;
        this.v=-5;
        
        this.remove= function(){
        var z=bulletArray.indexOf(this);
        bulletArray.splice(z,1);
        }
        this.draw = function(){
            ctx.beginPath();
            ctx.drawImage(elec, this.x, this.y,this.r,this.r);

        }
        this.update=function(){
            this.x+=this.v;
            this.draw();
            if(this.x==0.7*x0){
                this.remove();
            }
        }
        
    }
    function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        for (var i = 0; i <= electroni.length - 1; i++) {
        electroni[i].update();
    }
        ctx.fillStyle="red";
        ctx.font = 0.3*y0+'pt bebasbold';
        ctx.fillText('+', 0.01*x0, 0.28*y0);
        ctx.fillStyle="blue";
        ctx.font = 0.5*y0+'pt bebasbold';
        ctx.fillText('-', 0.7*x0-0.2*y0, 0.37*y0);
    }
    setInterval(function(){
        var l1=Math.random()*0.9*0.3*y0;
        electroni.push(new Electron(l1));
        var l2=Math.random()*0.9*0.3*y0;
        if(Math.abs(l2-l1)>2*0.15*0.3*y0){electroni.push(new Electron(l2));}
        
    },170);
    animate();
    
    
}