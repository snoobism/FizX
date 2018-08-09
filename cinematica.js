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

window.onresize = function(){
    var y0=window.screen.availHeight;
    var x0=window.screen.availWidth;
    
    
    
    setTimeout(function(){for(var i=0;i<=29;i++)
        {
            $(".resizeText"+i).resizeText0();
        }
                         
     },100);

    
}
var v_rectilinie=3;
var rectilinie_x=-0.05*0.35*x0*2;
function traiector(a)
        {   

            if(a==1){
                rectilinie_x=-0.05*0.35*x0*2;
                traiectorie=0;
            }else {
                rectilinie_x=-0.05*0.35*x0*2;
                traiectorie=1;
            }

        }
function viteza(a){
        if(a==1)
            {
                rectilinie_x=-0.05*0.35*x0*2;
                variatie=1;
            }else{
                rectilinie_x=-0.05*0.35*x0*2;
                variatie=0;
            }

    }
function acceleratie(a)
    {
        if(a==1)
            {   rectilinie_x=-0.05*0.35*x0*2;
                acc=1;
            }else{
                v_rectilinie=13;
                rectilinie_x=-0.05*0.35*x0*2;
                acc=-1;
            }
    }

    var traiectorie=0;
    var variatie=1;
    var acc=1;





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
    document.getElementById("titlu_cont").style.width=100+'vw';
    document.getElementById("titlu_cont").style.height=100+'vh';
    var lit=document.getElementsByClassName("litera");
    for(var i=0;i<=lit.length-1;i++)
        {
            lit[i].style.width=0.1*0.7*100+'vw';
            lit[i].style.height=0.25*100+'vh';
            lit[i].style.marginTop=0.35*100+'vh';
            lit[i].style.marginLeft=100+'vw';
            lit[i].style.float='left';
        }
    setTimeout(function(){
        document.getElementById("titlu_cont").style.opacity=1;
    },1000);
    setTimeout(function(){
        var ok=1;
        lit[0].style.marginLeft=0.15*100+'vw';
        var lit_int=setInterval(    
        function(){
            lit[ok].style.marginLeft=0+'px';
            ok++;
            if(ok>9)
                {
                    clearInterval(lit_int);
                }
        },150);
    },1500);
    setTimeout(function(){
        var ok=0;
        var lit_int2=setInterval(function(){
            lit[ok].style.borderBottom="5px solid white";
            ok++;
            if(ok>9)
                {
                    clearInterval(lit_int2);
                }
        },100);
    },3000);
    setTimeout(function(){
        document.getElementById("titlu_cont").style.opacity=0;
    },5000);
    setTimeout(function(){
        document.getElementById("lista").style.opacity=1;
    },5500);
    setTimeout(function(){
        document.body.style.backgroundSize="15%,15%,cover";
        document.body.style.backgroundImage="url(imagini/left_mec.png),url(imagini/right_mec.png),linear-gradient(to right, #00261C, #044C29, #00261C)";
        document.body.style.overflowY='auto';
       
    },5000);
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

   setTimeout(function(){
       document.getElementById("notiuni_header").style.opacity=1;
   },6000);
    setTimeout(function(){
        document.getElementById("bara").style.opacity=1;
    },6250);
    setTimeout(function(){
        document.getElementById("punct_cont").style.opacity=1;
    },6500);
    setTimeout(function(){
        document.getElementById("traiectorie_cont").style.opacity=1;
     document.getElementById("viteza_desc_cont").style.opacity=1;
        document.getElementById("viteza_img_cont").style.opacity=1;
    },6750);
    document.getElementById("notiuni_header").style.fontSize=0.1*100+'vh';
    document.getElementById("bara").style.marginTop=0.01*100+'vh';
    document.getElementById("notiuni_header").style.marginTop=0.1*100+'vh';
    
    document.getElementById("punct_titlu").style.width=0.2*100+'vw';
    document.getElementById("punct_titlu").style.height=0.2*100+'vh';
    
    document.getElementById("punct_cont").style.marginTop=0.1*100+'vh';
    document.getElementById("punct_cont").style.marginLeft=0.15*100+'vw';
    
    document.getElementById("punct_desc").style.width=0.5*100+'vw';
    document.getElementById("punct_desc").style.height=0.2*100+'vh';
    
    
    document.getElementById("traiectorie_titlu").style.width=0.2*100+'vw';
    document.getElementById("traiectorie_titlu").style.height=0.2*100+'vh';
    
    document.getElementById("traiectorie_cont").style.marginTop=0.1*100+'vh';
    document.getElementById("traiectorie_cont").style.marginLeft=0.15*100+'vw';
    
    document.getElementById("traiectorie_desc").style.width=0.5*100+'vw';
    document.getElementById("traiectorie_desc").style.height=0.2*100+'vh';
    
    
    document.getElementById("viteza_cont").style.marginTop=0.1*100+'vh';
    document.getElementById("viteza_desc_cont").style.marginLeft=0.1875*100+'vw';
    
    document.getElementById("viteza_titlu").style.width=0.35*100+'vw';
    document.getElementById("viteza_titlu").style.height=0.1*100+'vh';
    document.getElementById("viteza_text").style.width=0.35*100+'vw';
    document.getElementById("viteza_text").style.height=0.3*100+'vh';
    

    
    document.getElementById("viteza_img_cont").style.marginLeft=0.025*100+'vw';
    document.getElementById("viteza_formula").style.width=0.125*100+'vw';
    document.getElementById("viteza_formula").style.height=0.125*100+'vw';
    document.getElementById("viteza_formula").style.marginLeft=0.125*100+'vw';
    
    document.getElementById("viteza_si").style.width=0.125*100+'vw';
    document.getElementById("viteza_si").style.height=0.125*100+'vw';
    
    document.getElementById("acceleratie_cont").style.marginTop=0.1*100+'vh';
    document.getElementById("acceleratie_img_cont").style.marginLeft=0.1875*100+'vw';
    
    document.getElementById("acceleratie_titlu").style.width=0.35*100+'vw';
    document.getElementById("acceleratie_titlu").style.height=0.1*100+'vh';
    document.getElementById("acceleratie_text").style.width=0.35*100+'vw';
    document.getElementById("acceleratie_text").style.height=0.3*100+'vh';

    
    document.getElementById("acceleratie_desc_cont").style.marginLeft=0.025*100+'vw';
    document.getElementById("acceleratie_formula").style.width=0.125*100+'vw';
    document.getElementById("acceleratie_formula").style.height=0.125*100+'vw';
    
    document.getElementById("acceleratie_si").style.marginLeft=0.125*100+'vw';
    document.getElementById("acceleratie_si").style.width=0.125*100+'vw';
    document.getElementById("acceleratie_si").style.height=0.125*100+'vw';
    
    document.getElementById("clasificare_header").style.marginTop=0.05*100+'vh';
    document.getElementById("clasificare_header").style.fontSize=0.1*100+'vh';
    document.getElementById("bara2").style.marginTop=0.01*100+'vh';
    
    document.getElementById("clasificare_cont").style.marginTop=0.05*100+'vh';
    
    var clas_div=document.getElementsByClassName("clas_div");
    for(var i=0;i<=clas_div.length-1;i++)
        {
            clas_div[i].style.width=0.2*100+'vw';
            clas_div[i].style.marginLeft=0.035*100+'vw';
        }
    var clas_titlu=document.getElementsByClassName("clas_titlu");
    for(var i=0;i<=clas_titlu.length-1;i++)
        {
            clas_titlu[i].style.width=0.2*100+'vw';
            clas_titlu[i].style.height=0.15*100+'vh';
        }
    var clas_elem=document.getElementsByClassName("clas_elem");
    for(var i=0;i<=clas_elem.length-1;i++)
        {
            clas_elem[i].style.width=0.15*100+'vw';
            clas_elem[i].style.height=0.15*100+'vw';
            clas_elem[i].style.marginLeft=0.0245*100+'vw';
            clas_elem[i].style.marginTop=0.025*100+'vh';
        }
    
    document.getElementById("simulare_cont").style.marginLeft=0.2*100+'vw';
    
    document.getElementById("simulare_titlu").style.width=0.6*100+'vw';
    document.getElementById("simulare_titlu").style.height=0.1*100+'vh';
    document.getElementById("simulare_titlu").style.marginLeft=0.2*100+'vw';
    document.getElementById("simulare_titlu").style.marginTop=0.05*100+'vh';

    
    var canvas = document.getElementById("simulare_canvas");
    

    
    mobil = new Image();
    mobil.src = "imagini/mobil.png";
    
    canvas.width = 0.35*x0;
    canvas.height = 0.35*x0;
    var c = canvas.getContext('2d');
    function Rectilinie(x,y,v){
        this.x = rectilinie_x;
        this.y = y;
        this.r = 0.05*0.35*x0;

        this.draw = function(){
            c.beginPath();
            c.arc(this.x,this.y,this.r,0,Math.PI*2,false);
            c.fillStyle="red";
            c.fill();
        }
        this.update = function(){
            if(variatie==1)
                {
                    if(acc == 1){
                        v_rectilinie=v_rectilinie*1.045;
                    }else if(acc == -1){
                        if(v_rectilinie>1){
                            v_rectilinie=v_rectilinie-0.2;
                        }
                    }
                }else{
                        v_rectilinie=3;
                    }
            this.x+=v_rectilinie;
            if(this.x>canvas.width+this.r)
                {
                    this.x=-this.r*2;
                    if(variatie==1)
                    {
                        if(acc == 1){
                            v_rectilinie=0.05;
                        }else if(acc == -1){
                            v_rectilinie=15;
                        }

                    }else{
                        v_rectilinie=3;
                    }
                }
            
            this.draw();
        }
    }
    function Curbilinie(){

        if(acc == -1)
            {
                this.v = 13;
            }else{
                this.v = 1;
            }
        if(variatie == 0){
            this.v = 1;
        }
        var ok=0;
        
        this.draw = function (){
            c.beginPath();
            c.drawImage(mobil,0,0,0.35*x0,0.35*x0);
        }
        this.update = function(){
            ok++;
            if(variatie==1)
                {
                    if(acc == 1){
                        this.v=this.v+0.05;
                    }else if(acc == -1){
                        if(this.v>1){
                            this.v=this.v-0.05;
                        }
                    }
                }
            c.translate(0.175*x0,0.175*x0);
            c.rotate(this.v*(Math.PI/180));
            c.translate(-0.175*x0,-0.175*x0);  
            
            ok+=this.v*(Math.PI/180);
            if(ok>360)
                {   
                    ok=0;
                    if(variatie==1)
                    {
                        if(acc == 1){
                            this.v=1;
                        }else if(acc == -1){
                            this.v=13;
                        }

                    }else{
                        this.v=1;
                    }
                }
            
            this.draw();
        }
    }
    var rectilinie = new Rectilinie(0,0.5*0.35*x0,13);
    var curbilinie = new Curbilinie();
    function animate(){
            requestAnimationFrame(animate);
            c.clearRect(0,0,0.35*x0,0.35*x0);
            
            if(traiectorie == 0)
                {   c.restore();
                    c.save();
                    rectilinie.update();
                    document.getElementById("simulare_canvas").style.backgroundImage="url(imagini/traiectorie_bg0.png)";
                }else{
                    
                    curbilinie.update();
                    document.getElementById("simulare_canvas").style.backgroundImage="url(imagini/traiectorie_bg1.png)";
                }
        }
    c.save();
    animate();
    
    
    
    document.getElementById("simulare_desc").style.width=0.25*100+'vw';
    document.getElementById("simulare_desc").style.height=0.35*100+'vw';
    
    var meniu_elem=document.getElementsByClassName("meniu_elem");
    
    for(var i=0;i<=meniu_elem.length-1;i++)
        {
            meniu_elem[i].style.marginLeft=0.024*100+'vw';
            meniu_elem[i].style.marginTop=0.025*100+'vw';
        }

    var meniu_buton=document.getElementsByClassName("meniu_buton");
    
    for(var i=0;i<=meniu_buton.length-1;i++)
        {
            meniu_buton[i].style.width=0.0995*100+'vw';
            meniu_buton[i].style.height=0.04*100+'vw';
        }
     var meniu_titlu=document.getElementsByClassName("meniu_titlu");
    
    for(var i=0;i<=meniu_titlu.length-1;i++)
        {
            meniu_titlu[i].style.width=0.0995*2*100+'vw';
            meniu_titlu[i].style.height=0.04*100+'vw';
        }


    document.getElementById("traiectorie1").onclick=function(){
    var a=1;
    for(var i=0;i<=1;i++)
        {
            meniu_buton[i].style.backgroundColor="#206845";
        }
    this.style.backgroundColor="orange";
    if(a==1){
                rectilinie_x=-0.05*0.35*x0*2;
                traiectorie=0;
            }else {
                rectilinie_x=-0.05*0.35*x0*2;
                traiectorie=1;
            }

}
    document.getElementById("traiectorie2").onclick=function(){
    var a=0;
    for(var i=0;i<=1;i++)
        {
            meniu_buton[i].style.backgroundColor="#206845";
        }
    this.style.backgroundColor="orange";
        if(a==1){
                rectilinie_x=-0.05*0.35*x0*2;
                traiectorie=0;
            }else {
                rectilinie_x=-0.05*0.35*x0*2;
                traiectorie=1;
            }
}
    document.getElementById("viteza1").onclick=function(){
    var a=0;
    for(var i=2;i<=3;i++)
        {
            meniu_buton[i].style.backgroundColor="#206845";
        }
    this.style.backgroundColor="orange";
        if(a==1)
            {
                rectilinie_x=-0.05*0.35*x0*2;
                variatie=1;
            }else{
                rectilinie_x=-0.05*0.35*x0*2;
                variatie=0;
            }
        for(var i=4;i<=5;i++)
        {
            meniu_buton[i].style.backgroundColor="rgba(0,0,0,1)";
        }
}
    document.getElementById("viteza2").onclick=function(){
    var a=1;
    for(var i=2;i<=3;i++)
        {
            meniu_buton[i].style.backgroundColor="#206845";
        }
    this.style.backgroundColor="orange";
        if(a==1)
            {
                rectilinie_x=-0.05*0.35*x0*2;
                variatie=1;
            }else{
                rectilinie_x=-0.05*0.35*x0*2;
                variatie=0;
            }
    for(var i=4;i<=5;i++)
        {
            meniu_buton[i].style.backgroundColor="#206845";
        }
    if(acc==1)
        {
            document.getElementById("acceleratie1").style.backgroundColor="orange";
        }else{
            document.getElementById("acceleratie2").style.backgroundColor="orange";
        }
}
    document.getElementById("acceleratie1").onclick=function(){
    if (variatie == 1) {
        var a = 1;
        for (var i = 4; i <= 5; i++) {
            meniu_buton[i].style.backgroundColor = "#206845";
        }
        this.style.backgroundColor = "orange";
        if (a == 1) {
            rectilinie_x = -0.05 * 0.35 * x0 * 2;
            acc = 1;
        } else {
            v_rectilinie = 13;
            rectilinie_x = -0.05 * 0.35 * x0 * 2;
            acc = -1;
        }
    }
}
    document.getElementById("acceleratie2").onclick=function(){
    if (variatie == 1) {

        var a = -1;
        for (var i = 4; i <= 5; i++) {
            meniu_buton[i].style.backgroundColor = "#206845";
        }
        this.style.backgroundColor = "orange";
        if (a == 1) {
            rectilinie_x = -0.05 * 0.35 * x0 * 2;
            acc = 1;
        } else {
            v_rectilinie = 13;
            rectilinie_x = -0.05 * 0.35 * x0 * 2;
            acc = -1;
        }
    }
    }

    document.getElementById("compunere_header").style.fontSize=0.1*100+'vh';
    document.getElementById("compunere_header").style.marginTop=0.05*100+'vh';
    document.getElementById("bara3").style.marginTop=0.01*100+'vh';
    
    document.getElementById("legea_miscarii_desc").style.width=0.5*100+'vw';
    document.getElementById("legea_miscarii_desc").style.height=0.15*100+'vh';
    document.getElementById("legea_miscarii_desc").style.marginLeft=0.25*100+'vw';
    document.getElementById("legea_miscarii_desc").style.marginTop=0.05*100+'vh';
    
        
    document.getElementById("legea_miscarii_formula").style.width=0.7*100+'vw';
    document.getElementById("legea_miscarii_formula").style.height=0.25*100+'vh';
    document.getElementById("legea_miscarii_formula").style.marginLeft=0.15*100+'vw';
    document.getElementById("legea_miscarii_formula").style.marginTop=0.01*100+'vh';
    
    document.getElementById("tip1").style.width=0.4*100+'vw';
    document.getElementById('tip1').style.height=0.2*100+'vh';
    document.getElementById("tip1").style.marginLeft=0.3*100+'vw';
    document.getElementById("tip1").style.marginTop=0.01*100+'vh';
    
    
    document.getElementById("legea_vitezei_header").style.marginTop=0.03*100+'vh';
    document.getElementById("legea_vitezei_header").style.fontSize=0.1*100+'vh';
    
    document.getElementById("bara4").style.marginTop=0.01*100+'vh';
        
    document.getElementById("legea_vitezei_desc").style.width=0.5*100+'vw';
    document.getElementById("legea_vitezei_desc").style.height=0.15*100+'vh';
    document.getElementById("legea_vitezei_desc").style.marginTop=0.05*100+'vh';
    document.getElementById("legea_vitezei_desc").style.marginLeft=0.25*100+'vw';
    

    
    document.getElementById("legea_vitezei_formula").style.width=0.6*100+'vw';
    document.getElementById("legea_vitezei_formula").style.height=0.2*100+'vh';
    document.getElementById("legea_vitezei_formula").style.marginLeft=0.2*100+'vw';
    document.getElementById("legea_vitezei_formula").style.marginTop=0.01*100+'vh';
        
    document.getElementById("formula_galilei_header").style.fontSize=0.1*100+'vh';
    document.getElementById("formula_galilei_header").style.marginTop=0.02*100+'vh';
    
    document.getElementById("bara5").style.marginTop=0.01*100+'vh';
    
    document.getElementById('galilei_desc').style.width=0.4*100+'vw';
    document.getElementById("galilei_desc").style.height=0.2*100+'vh';
    document.getElementById("galilei_desc").style.marginLeft=0.3*100+'vw';
    document.getElementById("galilei_desc").style.marginTop=0.05*100+'vh';
    
    
    document.getElementById("galileo_formula").style.width=0.6*100+'vw';
    document.getElementById("galileo_formula").style.height=0.2*100+'vh';
    document.getElementById("galileo_formula").style.marginLeft=0.2*100+'vw';
    document.getElementById("galileo_formula").style.marginTop=0.01*100+'vh';
        
     for(var i=0;i<=29;i++)
        {
            $(".resizeText"+i).resizeText0();
        }   
        
        
        
        
        
        
        
        
        
        
        
    
    
    
    
    
}

