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
var add2="var";
var add1="iunie2010";
var add3="M";
function schimba_scop(a){
    add2=a;
    document.getElementById("var").style.background="black";
    document.getElementById("var").style.color="white";
    document.getElementById("bar").style.background="black";
    document.getElementById("bar").style.color="white";
       document.getElementById(a).style.background="white";
    document.getElementById(a).style.color="black"; document.getElementById("pdf_cont").src="pdf/"+add1+"_"+add2+"_"+add3+".pdf";
}
function schimba_mat(a){
    add3=a;
    document.getElementById("pdf_cont").src="pdf/"+add1+"_"+add2+"_"+add3+".pdf";
    document.getElementById("optica_buton").style.boxShadow="0px 0px 0px black";
    document.getElementById("mecanica_buton").style.boxShadow="0px 0px 0px black";
    document.getElementById("termodinamica_buton").style.boxShadow="0px 0px 0px black";
    document.getElementById("electricitate_buton").style.boxShadow="0px 0px 0px black";

    if(a=="O"){
           document.getElementById("optica_buton").style.boxShadow="0px 0px 20px cyan";
  document.getElementById("electricitate_buton").style.transform="rotate(360)";
    }
    if(a=="M"){
           document.getElementById("mecanica_buton").style.boxShadow="0px 0px 20px lime";
  document.getElementById("electricitate_buton").style.transform="rotate(360)";
    }    
    if(a=="T"){
           document.getElementById("termodinamica_buton").style.boxShadow="0px 0px 20px red";
            document.getElementById("electricitate_buton").style.transform="rotate(360)";
    }    
    if(a=="E"){
           document.getElementById("electricitate_buton").style.boxShadow="0px 0px 20px yellow";
        document.getElementById("electricitate_buton").style.transform="rotate(360)";
 
    }

}
function schimba_sub(a,nr){
    add1=a;
    document.getElementById("pdf_cont").src="pdf/"+add1+"_"+add2+"_"+add3+".pdf";
    var b=document.getElementsByTagName("span");
    for(var i=0;i<=b.length-1;i++){
        b[i].style.background='black';
        b[i].style.color='white';
    }
    b[nr].style.background='white';
    b[nr].style.color='black';
}

window.onload = function (){

    
    setTimeout(function(){
        document.getElementById("pdf_cont").style.opacity=1;
    },1000);
    setTimeout(function(){
        document.getElementById("meniu_cont").style.opacity=1;
    },1250);
    setTimeout(function(){
        document.getElementById("lista").style.opacity=1;
    },1500);
    document.getElementById("pdf_cont").src="pdf/iunie2010_var_M.pdf";
    document.getElementById("var").style.background="white";
    document.getElementById("var").style.color="black";
    document.getElementById("mecanica_buton").style.boxShadow='0px 0px 15px lime';
    document.getElementById("st").style.color='black';
    document.getElementById("st").style.background='white';
    var d=document.getElementById("lista").children;
	var e=document.getElementsByClassName("textc");
    var m=document.getElementsByClassName("link");
    for(var i=0;i<=m.length-1;i++)
        {
            m[2].style.color='black';
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
                    m[i].style.color='white';
                    d[i].style.backgroundColor='black';
                    d[i].style.color='white';
                }
            this.style.backgroundColor='white';
            this.style.color='black';
            m[$("li").index(this)].style.backgroundColor='white';
            m[$("li").index(this)].style.color='black';

        },function(){
            for(var i=0;i<=d.length-2;i++)
                {
                    m[i].style.backgroundColor='black';
                    m[i].style.color='white';
                    d[i].style.backgroundColor='black';
                    d[i].style.color='white';
                }
            d[2].style.backgroundColor='white';
            d[2].style.color='black';
            m[2].style.backgroundColor='white';
            m[2].style.color='black';
            
        })
	}
    d[4].style.width=0.1*x0+'px';
    d[4].style.height=0.045*y0+'px';
    document.getElementById("pdf_cont").style.width=0.6*x0+'px';
    document.getElementById("pdf_cont").style.height=0.8*y0+'px';
    document.getElementById("pdf_cont").style.marginTop=0.09*y0+'px';
    document.getElementById("pdf_cont").style.marginLeft=0.03*x0+'px';
    document.getElementById("meniu_cont").style.width=0.3*x0+'px';
    document.getElementById("meniu_cont").style.height=0.8*y0+'px';
    document.getElementById("meniu_cont").style.marginLeft=0.03*x0+'px';
    document.getElementById('meniu_cont').style.marginTop=0.09*y0+'px';
    
    document.getElementById("var").style.width=0.14*x0+'px';
    document.getElementById("bar").style.width=0.14*x0+'px';
    document.getElementById("bar").style.height=0.075*y0+'px';
    document.getElementById("var").style.height=0.075*y0+'px';
    $(".resizeText0").resizeText0();
    $(".resizeText1").resizeText0();
    document.getElementById("varbar_cont").style.marginTop=0.01*y0+'px';    
    document.getElementById("capitole_header").style.height=0.1*y0+'px';
    document.getElementById('capitole_header').style.width=0.25*x0+'px';
    
    document.getElementById("capitole_header").style.paddingBottom=0.001*y0+'px';
    $(".resizeText2").resizeText0();
    
    document.getElementById("optica_buton").style.width=0.145*x0+'px';
    document.getElementById("optica_buton").style.height=0.1*y0+'px';
    document.getElementById("rand1").style.marginTop=0.01*y0+'px';
    document.getElementById('rand2').style.marginTop=0.01*y0+'px';
    document.getElementById("mecanica_buton").style.width=0.145*x0+'px';
    document.getElementById("mecanica_buton").style.height=0.1*y0+'px';
    document.getElementById("termodinamica_buton").style.width=0.145*x0+'px';
    document.getElementById("termodinamica_buton").style.height=0.1*y0+'px';
    document.getElementById("electricitate_buton").style.width=0.145*x0+'px';
    document.getElementById("electricitate_buton").style.height=0.1*y0+'px';
    
    document.getElementById("optica_buton").style.lineHeight=0.1*y0+'px';
    document.getElementById("mecanica_buton").style.lineHeight=0.1*y0+'px';
    document.getElementById("termodinamica_buton").style.lineHeight=0.1*y0+'px';
    document.getElementById("electricitate_buton").style.lineHeight=0.1*y0+'px';

    document.getElementById("optica_buton").style.padding=0.001*y0+'px';
    document.getElementById("mecanica_buton").style.padding=0.001*y0+'px';
    document.getElementById("termodinamica_buton").style.padding=0.001*y0+'px';
    document.getElementById("electricitate_buton").style.padding=0.001*y0+'px';
    
    $(".resizeText3").resizeText0();
    $(".resizeText4").resizeText0();
    $(".resizeText5").resizeText0();
    $(".resizeText6").resizeText0();
    
     document.getElementById("subiecte_header").style.height=0.05*y0+'px';
    document.getElementById('subiecte_header').style.width=0.25*x0+'px';
    
    document.getElementById("subiecte_header").style.paddingBottom=0.001*y0+'px';
    $(".resizeText7").resizeText0();
    
    document.getElementById("subiecte_cont").style.width=0.3*x0+'px';
    document.getElementById("subiecte_cont").style.height=0.3*y0+'px';
    document.getElementById("subiecte_cont").style.marginTop=0.01*y0+'px';
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}