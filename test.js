var y0=window.screen.availHeight;
var x0=window.screen.availWidth;
var corect = new Audio('audio/corect.mp3');
var gresit = new Audio('audio/gresit.mp3');
var clock = new Audio('audio/clock.mp3');
var alegere_mat=0;

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

$.fn.resizeText1 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText1.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText1.interval)
            clearTimeout($.resizeText1.interval)

        $.resizeText1.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText1();
	    }, 300);
    });
}
$(document).ready(function () {
    $(".resizeText1").resizeText1();
});
$.resizeText1 = {
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
                $.resizeText1.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
$.fn.resizeText2 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText2.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText2.interval)
            clearTimeout($.resizeText2.interval)

        $.resizeText2.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText2();
	    }, 300);
    });
}

$.resizeText2 = {
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
                $.resizeText2.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
$.fn.resizeText3 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText3.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText3.interval)
            clearTimeout($.resizeText3.interval)

        $.resizeText3.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText3();
	    }, 300);
    });
}

$.resizeText3 = {
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
                $.resizeText3.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
$.fn.resizeText4 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText4.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText4.interval)
            clearTimeout($.resizeText4.interval)

        $.resizeText4.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText4();
	    }, 300);
    });
}

$.resizeText4 = {
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
                $.resizeText4.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};

var rand=[],rezultate_cont,verif=[],nr=[],nr_tabel=[],rasp_tau_tabel=[],rasp_tau=[],rasp_corect_tabel=[],rasp_corect=[],intrebare_tabel=[],intrebare=[],raspuns_util=[],rand_base,verif_base,nr_base,nr_table_base,rasp_tau_tabel_base,rasp_tau_base,rasp_corect_tabel_base,rasp_corect_base,intrebare_tabel_base,intrebare_base;

window.onload = function(){
	
    rezultate_cont=document.createElement("div");
    rezultate_cont.style.position="fixed";
    rezultate_cont.id="rezultate_cont";
    rezultate_cont.style.width=0.9*x0+'px';
    rezultate_cont.style.height=0.9*y0+'px';
    rezultate_cont.style.left="50%";
    rezultate_cont.style.top="50%";
    rezultate_cont.style.transform='translate(-50%,-50%)';
    rezultate_cont.style.backgroundColor="rgba(0,0,0,0.95)";
    rezultate_cont.style.border=0.01*y0+'px solid black';
    rezultate_cont.style.opacity=0;
    rezultate_cont.style.zIndex=-1;
    rezultate_cont.style.cursor='pointer';
    rezultate_cont.style.textAlign='center';
    $(rezultate_cont).click(function(){
       this.style.opacity=0;
        this.style.zIndex=-1;
    });
    document.body.appendChild(rezultate_cont);

    rand_base=document.createElement("div");
    rand_base.style.position="relative";
    rand_base.style.display='block';
    rand_base.style.border='1px solid black';
    rand_base.id="rand_base";
    document.getElementById("rezultate_cont").appendChild(rand_base);

    verif_base=document.createElement("div");
    verif_base.style.width=0.05*0.9*x0+'px';
    verif_base.style.height=0.0518*0.9*y0+'px';
    verif_base.style.display="inline-table";
    verif_base.style.backgroundSize="contain";
    verif_base.style.backgroundPosition="center";
    verif_base.style.backgroundRepeat="no-repeat";
    document.getElementById("rand_base").appendChild(verif_base);

    nr_tabel_base=document.createElement("div");
    nr_tabel_base.style.display="inline-table";

    nr_tabel_base.id="nr_base";
    document.getElementById("rand_base").appendChild(nr_tabel_base);

    nr_base=document.createElement("div");
    nr_base.style.display="table-cell";
    nr_base.style.width=0.05*0.9*x0+'px';
    nr_base.style.height=0.0518*0.9*y0+'px';
    nr_base.style.color='white';
    nr_base.style.verticalAlign='middle';
    nr_base.style.fontFamily='bebasbold';
    nr_base.style.textShadow="0px 0px 5px black";
    nr_base.innerHTML="NR";
    nr_base.className="nr_c";
    document.getElementById("nr_base").appendChild(nr_base);

    intrebare_tabel_base=document.createElement("div");
    intrebare_tabel_base.style.display="inline-table";
    intrebare_tabel_base.id="intrebare_tabel_base";
    document.getElementById("rand_base").appendChild(intrebare_tabel_base);

    intrebare_base=document.createElement("div");
    intrebare_base.style.display="table-cell";
    intrebare_base.style.color="white";
    intrebare_base.style.fontFamily="bebasbold";
    intrebare_base.innerHTML="Întrebare";
    intrebare_base.style.width=0.4*0.9*x0+'px';
    intrebare_base.style.height=0.0518*0.9*y0+'px';
    intrebare_base.style.verticalAlign="middle";
    intrebare_base.className="intr_c";
    intrebare_base.style.textShadow='0px 0px 5px black';
    document.getElementById("intrebare_tabel_base").appendChild(intrebare_base);

    rasp_tau_tabel_base=document.createElement("div");
    rasp_tau_tabel_base.style.display='inline-table';
    rasp_tau_tabel_base.id="rasp_tau_tabel_base";
    document.getElementById("rand_base").appendChild(rasp_tau_tabel_base);

    rasp_tau_base=document.createElement("div");
    rasp_tau_base.style.display="table-cell";
    rasp_tau_base.style.color="white";
    rasp_tau_base.style.fontFamily="bebasbold";
    rasp_tau_base.style.width=0.2*0.9*x0+'px';
    rasp_tau_base.style.height=0.0518*0.9*y0+'px';
    rasp_tau_base.style.verticalAlign="middle";
    rasp_tau_base.innerHTML="RĂSPUNSUL TĂU";
    rasp_tau_base.className="rasp_tau_c";
    rasp_tau_base.style.textShadow='0px 0px 5px black';
    document.getElementById("rasp_tau_tabel_base").appendChild(rasp_tau_base);

    rasp_corect_tabel_base=document.createElement("div");
    rasp_corect_tabel_base.style.display='inline-table';
    rasp_corect_tabel_base.id="rasp_corect_tabel_base";
    document.getElementById("rand_base").appendChild(rasp_corect_tabel_base);

    rasp_corect_base=document.createElement("div");
    rasp_corect_base.style.display="table-cell";
    rasp_corect_base.style.color="white";
    rasp_corect_base.style.fontFamily="bebasbold";
    rasp_corect_base.style.width=0.2*0.9*x0+'px';
    rasp_corect_base.style.height=0.0518*0.9*y0+'px';
    rasp_corect_base.style.verticalAlign="middle";
    rasp_corect_base.innerHTML="Răspunsul corect";
    rasp_corect_base.className="rasp_corect_c";
    rasp_corect_base.style.marginLeft=0.05*0.9*x0+'px';
    rasp_corect_base.style.textShadow='0px 0px 5px black';
    document.getElementById("rasp_corect_tabel_base").appendChild(rasp_corect_base);

    $(".nr_c").resizeText0();
    $(".intr_c").resizeText0();
    $(".rasp_tau_c").resizeText0();
    $(".rasp_corect_c").resizeText0();
    
    for(var i=0;i<=9;i++)
        {
            rand[i]=document.createElement("div");
            rand[i].style.position="relative";
            rand[i].style.display='block';
            rand[i].style.borderTop='1px solid white';
            rand[i].style.borderBottom='1px solid white';
            rand[i].id="rand"+i;
            document.getElementById("rezultate_cont").appendChild(rand[i]);
            
            verif[i]=document.createElement("div");
            verif[i].style.width=0.05*0.9*x0+'px';
            verif[i].style.height=0.0718*0.9*y0+'px';
            verif[i].style.display="inline-table";
            verif[i].style.backgroundSize="contain";
            verif[i].style.backgroundPosition="center";
            verif[i].style.backgroundRepeat="no-repeat";
            document.getElementById("rand"+i).appendChild(verif[i]);
            
            nr_tabel[i]=document.createElement("div");
            nr_tabel[i].style.display="inline-table";

            nr_tabel[i].id="nr"+i;
            document.getElementById("rand"+i).appendChild(nr_tabel[i]);
            
            nr[i]=document.createElement("div");
            nr[i].style.display="table-cell";
            nr[i].style.width=0.05*0.9*x0+'px';
            nr[i].style.height=0.0718*0.9*y0+'px';
            nr[i].className='n'+i;
            nr[i].style.color='white';
            nr[i].style.verticalAlign='middle';
            nr[i].style.fontFamily='hattori_hanzolight';
            nr[i].style.textShadow="0px 0px 5px black";
            document.getElementById("nr"+i).appendChild(nr[i]);
            
            intrebare_tabel[i]=document.createElement("div");
            intrebare_tabel[i].style.display="inline-table";
            intrebare_tabel[i].id="intrebare_tabel"+i;
            document.getElementById("rand"+i).appendChild(intrebare_tabel[i]);
            
            intrebare[i]=document.createElement("div");
            intrebare[i].style.display="table-cell";
            intrebare[i].style.color="white";
            intrebare[i].style.fontFamily="hattori_hanzolight";
            intrebare[i].className="intr"+i;
            intrebare[i].style.width=0.4*0.9*x0+'px';
            intrebare[i].style.height=0.0718*0.9*y0+'px';
            intrebare[i].style.verticalAlign="middle";
            intrebare[i].style.textShadow='0px 0px 5px black';
            document.getElementById("intrebare_tabel"+i).appendChild(intrebare[i]);
            
            rasp_tau_tabel[i]=document.createElement("div");
            rasp_tau_tabel[i].style.display='inline-table';
            rasp_tau_tabel[i].id="rasp_tau_tabel"+i;
            document.getElementById("rand"+i).appendChild(rasp_tau_tabel[i]);
            
            rasp_tau[i]=document.createElement("div");
            rasp_tau[i].style.display="table-cell";
            rasp_tau[i].style.color="white";
            rasp_tau[i].style.fontFamily="hattori_hanzolight";
            rasp_tau[i].className="rt"+i;
            rasp_tau[i].style.width=0.2*0.9*x0+'px';
            rasp_tau[i].style.height=0.0718*0.9*y0+'px';
            rasp_tau[i].style.verticalAlign="middle";
            rasp_tau[i].style.textShadow='0px 0px 5px black';
            document.getElementById("rasp_tau_tabel"+i).appendChild(rasp_tau[i]);
            
            rasp_corect_tabel[i]=document.createElement("div");
            rasp_corect_tabel[i].style.display='inline-table';
            rasp_corect_tabel[i].id="rasp_corect_tabel"+i;
            document.getElementById("rand"+i).appendChild(rasp_corect_tabel[i]);
            
            rasp_corect[i]=document.createElement("div");
            rasp_corect[i].style.display="table-cell";
            rasp_corect[i].style.color="white";
            rasp_corect[i].style.fontFamily="hattori_hanzolight";
            rasp_corect[i].className="rc"+i;
            rasp_corect[i].style.width=0.2*0.9*x0+'px';
            rasp_corect[i].style.height=0.0718*0.9*y0+'px';
            rasp_corect[i].style.verticalAlign="middle";
            rasp_corect[i].style.marginLeft=0.05*0.9*x0+'px';
            rasp_corect[i].style.textShadow='0px 0px 5px black';
            document.getElementById("rasp_corect_tabel"+i).appendChild(rasp_corect[i]);
            
            
        }
    
	setTimeout(function(){
		document.getElementById('contmare').style.opacity=1;
		document.getElementById('cont1').style.opacity=1;
		document.getElementById('STARTBUTTON').style.opacity=1;
		document.getElementById('filmrolls').style.opacity=1;
		
	},500);
	
	var d=document.getElementById("lista").children;
	var e=document.getElementsByClassName("textc");
    var m=document.getElementsByClassName("link");
    for(var i=0;i<=m.length-1;i++)
        {
            m[3].style.color='black';
        
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
            d[3].style.backgroundColor='white';
            d[3].style.color='black';
            m[3].style.backgroundColor='white';
            m[3].style.color='black';
            
        })
	}
    d[4].style.width=0.1*x0+'px';
    d[4].style.height=0.045*y0+'px';
	var f=document.getElementsByClassName("resizeText0");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.25*x0+"px";
		f[i].style.height=0.08*y0+"px";
	}
	var f=document.getElementsByClassName("resizeText1");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.25*x0+"px";
		f[i].style.height=0.08*y0+"px";
	}
	var f=document.getElementsByClassName("resizeText2");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.25*x0+"px";
		f[i].style.height=0.08*y0+"px";
	}
	var f=document.getElementsByClassName("resizeText3");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.25*x0+"px";
		f[i].style.height=0.08*y0+"px";
	}
	var f=document.getElementsByClassName("resizeText4");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.25*x0+"px";
		f[i].style.height=0.08*y0+"px";
	}
	$(".resizeText0").resizeText0();
	$(".resizeText1").resizeText1();
	$(".resizeText2").resizeText2();
	$(".resizeText3").resizeText3();
	$(".resizeText4").resizeText4();
    
    document.getElementById("test_alegere").style.width=0.1*x0+'px';
    document.getElementById("test_alegere").style.height=0.7*y0+'px';
    document.getElementById("test_alegere").style.marginLeft=0.06*x0+'px';
    document.getElementById("test_cont").style.width=0.7*x0+'px';
    document.getElementById("test_cont").style.height=0.9*y0+'px';
    document.getElementById("test_cont").style.marginLeft=0.06*x0+'px';
    
	document.getElementById('contmare').style.width=0.7*x0+"px";
	document.getElementById('contmare').style.fontSize=0.07*y0+'px';
	document.getElementById('contmare').style.marginTop=0.1*y0+"px";
	document.getElementById("cont1").style.width=0.7*x0+"px";
	document.getElementById("cont1").style.height=0.5*y0+"px";
	document.getElementById("c0").style.marginTop=0.03*y0+"px";
	document.getElementById("c0").style.width=0.5*x0+"px";
	document.getElementById("c0").style.height=0.09*y0+"px";
	
	document.getElementById("bara").style.marginTop=0.015*y0+"px";
	document.getElementById("cont2").style.marginTop=0.04*y0+"px";
	document.getElementById("cont3").style.marginTop=0.03*y0+"px";
	document.getElementById("c1").style.left=0.05*x0+"px";
	document.getElementById("c2").style.right=0.05*x0+"px";
	document.getElementById("c3").style.left=0.05*x0+"px";
	document.getElementById("c4").style.right=0.05*x0+"px";
	document.getElementById("cont2").style.height=0.1*y0+"px";
	document.getElementById("cont3").style.height=0.1*y0+"px";
	document.getElementById("STARTBUTTON").style.width=0.15*x0+"px";
	document.getElementById("STARTBUTTON").style.height=0.075*y0+"px";
	document.getElementById("STARTBUTTON").style.lineHeight=0.075*y0+"px";
	document.getElementById("STARTBUTTON").style.marginTop=0.0*y0+"px";
	document.getElementById("filmrolls").style.marginTop=0.63*y0+"px";
	document.getElementById("filmrolls").style.height=0.25*y0+"px";
	document.getElementById("filmrolls").style.width=0.6*x0+"px";
    document.getElementById("filmrolls").style.marginLeft=0.085*x0+'px';

	document.getElementById('puncte').style.width=0.7*0.3*x0+"px";
	document.getElementById('intrebare').style.width=0.7*0.3*x0+"px";
	document.getElementById('viteza').style.width=0.7*0.3*x0+"px";
	document.getElementById('puncte').style.marginLeft=0.7*0.03*x0+"px";
	document.getElementById('intrebare').style.marginLeft=0.7*0.03*x0+"px";
	document.getElementById('viteza').style.marginLeft=0.7*0.03*x0+"px"
    document.getElementById('puncte').style.height=0.1*y0+"px";
	document.getElementById('intrebare').style.height=0.1*y0+"px";
	document.getElementById('viteza').style.height=0.1*y0+"px";
	document.getElementById("contmare").style.marginLeft=5+'px';
    var f=document.getElementsByClassName("buton");
	for(var i=0;i<=f.length-1;i++)
	{
		
		f[i].style.verticalAlign="middle";
		f[i].style.width=0.02*x0+"px";
		
	}
    
    
    setTimeout(function(){
        document.getElementById("lista").style.opacity=1;
    },1000);
    setTimeout(function(){
        document.getElementById("test_alegere").style.opacity=1;
    },1500);
    
    var alegere_elem=document.getElementsByClassName("imagine");
    for (var i=0;i<=alegere_elem.length-1;i++)
        {
            alegere_elem[i].style.width=0.075*x0+'px';
            alegere_elem[i].style.height=0.075*x0+'px';   
            alegere_elem[i].style.marginLeft=0.0125*x0+'px';
            alegere_elem[i].style.marginTop=0.006*x0+'px';
        }
    
    var text_cont=document.getElementsByClassName("text_cont");
    for (var i=0;i<=text_cont.length-1;i++)
        {
            text_cont[i].style.width=0.16*x0+'px';
            text_cont[i].style.height=0.075*x0-10+'px'
            text_cont[i].style.marginLeft=-0.25*x0+'px';
            text_cont[i].style.lineHeight=0.075*x0-10+'px';
        }
    

    

    
	
}
function schimba_alegere(aleg)
{
    alegere_mat=Number(aleg);
    var alegere_elem=document.getElementsByClassName("imagine");
    for(var i=0;i<=alegere_elem.length-1;i++)
        {  
            alegere_elem[i].style.marginLeft=0.0125*x0+'px';    
            alegere_elem[i].style.transform="rotate(0deg) scale(1,1)";
            alegere_elem[i].style.boxShadow="0px 0px 25px black";

        }

    alegere_elem[aleg].style.boxShadow="0px 0px 25px orange";
    if(aleg%2==0)
        {
            alegere_elem[aleg].style.transform="rotate(360deg) scale(1.1,1.1)";
        }else{
            alegere_elem[aleg].style.transform="rotate(-360deg) scale(1.1,1.1)";
        }
     console.log(aleg);

}
function incepe()
{	schimbaSTART();
    document.getElementById('STARTBUTTON').style.pointerEvents='none';

	function schimbaSTART()
	{
		
		setTimeout(STARTtext2,500);
		setTimeout(STARTtext3,1500);
		setTimeout(STARTtext4,2500);
		setTimeout(STARTtext5,3500);
		setTimeout(test,4000);
	}
	
	
	function STARTtext1(){
		document.getElementById("STARTBUTTON").innerHTML="START";
	}
	function STARTtext2(){
		document.getElementById("STARTBUTTON").innerHTML="3";
	}
	function STARTtext3(){
		document.getElementById("STARTBUTTON").innerHTML="2";
	}
	function STARTtext4(){
		document.getElementById("STARTBUTTON").innerHTML="1";
	}
	function STARTtext5(){
		document.getElementById("STARTBUTTON").innerHTML="START";
	}	
	
}


var lung=0;
var t,ok;
var b;
function bara(){
	var elem=document.getElementById("progres");
	lung=lung+speed;
	elem.style.width=lung+"%";
	cronometru();
    var string=elem.style.width;
    var lungime=string.length;
    console.log(string);
	if(Number(string.substring(0,string.length-1))>=100)
	{
		stopbara();
		ok=1;
        raspuns_util[nr_intr]="-";
        nr_intr++;
	}
	
}
function cronometru(){
	 t=setTimeout(bara,10);
	
	
}

function stopbara(){
	 clearTimeout(t);
	 var elem=document.getElementById("progres");
	 elem.style.width=0+"%";
	 lung=0;
	 ok=1;
	for(var j=1;j<=4;j++)
	{
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(imagini/corect.png) repeat";
				
			}
		}
	}
}
function corectTimeout11(){
	document.getElementById("c1").style.background="#222 url(imagini/loading.png) repeat";
		setTimeout(corectTimeout12,1000)
}
function corectTimeout12(){
	document.getElementById("c1").style.background="#222 url(imagini/corect.png) repeat";
	
}
function gresitTimeout11(){
	document.getElementById("c1").style.background="#222 url(imagini/loading.png) repeat";
		setTimeout(gresitTimeout12,1000)
}
function gresitTimeout12(){
	document.getElementById("c1").style.background="#222 url(imagini/gresit.png) repeat";
}

function corectTimeout21(){
	document.getElementById("c2").style.background="#222 url(imagini/loading.png) repeat";
		setTimeout(corectTimeout22,1000)
}
function corectTimeout22(){
	document.getElementById("c2").style.background="#222 url(imagini/corect.png) repeat";
	
}
function gresitTimeout21(){
	document.getElementById("c2").style.background="#222 url(imagini/loading.png) repeat";
		setTimeout(gresitTimeout22,1000)
}
function gresitTimeout22(){
	document.getElementById("c2").style.background="#222 url(imagini/gresit.png) repeat";
}

function corectTimeout31(){
	document.getElementById("c3").style.background="#222 url(imagini/loading.png) repeat";
		setTimeout(corectTimeout32,1000)
}
function corectTimeout32(){
	document.getElementById("c3").style.background="#222 url(imagini/corect.png) repeat";
	
}
function gresitTimeout31(){
	document.getElementById("c3").style.background="#222 url(imagini/loading.png) repeat";
		setTimeout(gresitTimeout32,1000)
}
function gresitTimeout32(){
	document.getElementById("c3").style.background="#222 url(imagini/gresit.png) repeat";
}
function corectTimeout41(){
	document.getElementById("c4").style.background="#222 url(imagini/loading.png) repeat";
		setTimeout(corectTimeout42,1000)
}
function corectTimeout42(){
	document.getElementById("c4").style.background="#222 url(imagini/corect.png) repeat";
	
}
function gresitTimeout41(){
	document.getElementById("c4").style.background="#222 url(imagini/loading.png) repeat";
		setTimeout(gresitTimeout42,1000)
}
function gresitTimeout42(){
	document.getElementById("c4").style.background="#222 url(imagini/gresit.png) repeat";
}
var x0,x1,x2,x3,x4,x5,raspunsuri;



var bc=[
		["Viteza este mărimea fizică vectorială egală cu ...","raportul dintre vectorul deplasare și intervalul de timp","produsul dintre vectorul deplasare și intervalul de timp","raportul dintre accelerație și vectorul deplasare","produsul dintre accelerație și vectorul deplasare","raportul dintre vectorul deplasare și intervalul de timp",0,"M"],
        ["Viteza se măsoară în sistem internațional în ...","metru pe secundă la pătrat","metru pe secundă","metru ori secundă","metru ori secundă la pătrat","metru pe secundă",1,"M"],
        ["Ce este curentul electric continuu?","diferența de presiune ce produce descărcări electrice","deplasarea dezordonată a purtătorilor de sarcină în ambele sensuri","deplasarea ordonată a purtătorilor de sarcină în același sens","deplasarea ordonată a purtătorilor de sarcină în sus și jos","deplasarea ordonată a purtătorilor de sarcină în același sens",2,"E"],
        ["Ce este intensitatea curentului electric?","puterea generatorului","proximitatea purtatorilor de sarcină","raportul dintre lucrul mecanic pentru a transporta sarcina electrică și mărimea sarcinii","sarcina electrică ce trece prin unitatea de suprafaţă în unitatea de timp","sarcina electrică ce trece prin unitatea de suprafaţă în unitatea de timp",3,"E"],
        ["În ce se măsoară intensitatea curentului electric?","Amper","Volt","Ohm","Joule","Amper",4,"E"],
        ["Ce este tensiunea electrică?","puterea generatorului","raportul dintre lucrul total pentru a transporta sarcina electrică și mărimea sarcinii electrice","sarcina electrică ce trece prin unitatea de suprafaţă în unitatea de timp","densitatea electronilor","raportul dintre lucrul total pentru a transporta sarcina electrică și mărimea sarcinii electrice",5,"E"],
        ["În ce se măsoară tensiunea electrică?","Amper","Volt","Ohm","Joule","Volt",6,"E"],
        ["Ce este rezistența electrică?","mărimea fizică scalară ce descrie forța de frecare a conductorului","proprietatea unui conductor electric de a se opune trecerii prin el a curentului electric","mișcare revoluționară provenită din Norvegia în secolul XIX","produsul dintre intensitatea curentului electric și tensiunea sa","proprietatea unui conductor electric de a se opune trecerii prin el a curentului electric",7,"E"],
        ["În ce se măsoară rezistența electrică?","Amper","Volt","Ohm","Joule","Ohm",8,"E"],
        ["Cum poate să fie o deformare?","Plastică și elastică","Elastică și bombastică","Plastică și inelastică","Elastică și bombastică","Plastică și elastică",9,"M"],
        ["Ce este forța elastică?","Forța ce permite atomilor să fie apropiați","Forța ce aduce un corp la forma sa inițială după ce o forță exterioară acționează asupra sa","Forța ce împinge atomii unul de celălalt după ce se ating","Forța ce aduce un corp la forma sa inițială după ce e tăiat în jumătate","Forța ce aduce un corp la forma sa inițială după ce o forță exterioară acționează asupra sa",10,"M"],
        ["Unde apare forța de tensiune în fir?","Doar în capetele firului","Doar în mijlocul firului","Doar în firele de înaltă tensiune","În orice secțiune a acestuia","În orice secțiune a acestuia",11,"M"],
        ["De ce factor nu depinde forța de frecare?","De aria suprafeței de contact","De rigiditatea corpurilor","De forța de apăsare normală","De materialul din care sunt făcute corpurile","De aria suprafeței de contact",12,"M"],
        ["În ce se măsoară coeficientul de frecare?","kilogram pe metru","1 supra kilogram","nu are unitate de măsură","Newton pe metru pătrat","nu are unitate de măsură",13,"M"],
        ["Ce se întâmplă când niște rezistoare sunt grupate în serie?","Rezistența echivalentă crește","Rezistența echivalentă scade","Nu se schimbă rezistența echivalentă","Circuitul se scurt-circuitează","Rezistența echivalentă crește",14,"E"],
        ["Ce se întâmplă când niște rezistoare sunt grupate în parale?","Rezistența echivalentă crește","Rezistența echivalentă scade","Nu se schimbă rezistența echivalentă","Circuitul se scurt-circuitează","Rezistența echivalentă scade",15,"E"],
        ["Cum este definit impulsul mecanic?","Produsul dintre masă și accelerație","Produsul dintre masă și viteză","Raportul dintre masă și viteză","Raportul dintre masă și accelerație","Produsul dintre masă și viteză",16,"M"],
        ["Când se conservă impulsul?","Când sistemul este izolat","Atunci când asupra sistemului acționează forțe conservative","Când asupra corpului nu acționează forțe","Când sistemul este cvasistatic","Când sistemul este izolat",17,"M"],
        ["Ce se întâmplă când are loc o ciocnire perfect plastică?","Corpurile se îndepărtează unul de celălalt","Energia se conservă","Corpurile își cuplează masele","Corpurile se opresc la atingere","Corpurile își cuplează masele",18,"M"],
        ["Ce se întâmplă când are loc o ciocnire elastică?","Corpurile își pierd din masă","Energia se conservă","Corpurile își cuplează masele","Corpurile se opresc la atingere","Energia se conservă",19,"M"],
        ["Ce este interferența?","Fenomenul de suprapunere a două sau mai multe unde","Abilitatea unei unde de a trece printr-un mediu","Împrăștierea unei unde la contact cu o suprafață solidă","Proprietatea luminii de a se comporta ca particulă și ca undă în același","Fenomenul de suprapunere a două sau mai multe unde",20,"O"],
        ["Ce este o lentilă?","Un mediu opac delimitat de mediul înconjurător","Un mediu transparent nedelimitat de mediul înconjurător","Un mediu opac nedelimitat de mediul înconjurător","Un mediu transparent delimitat de mediul înconjurător","Un mediu transparent delimitat de mediul înconjurător",21,"O"],
        ["Ce este axa optică principală?","Axa de simetrie a lentilei","Dreapta normală pe lentilă","Dreapta ce coincide cu sensul și direcția razelor de lumină","Axa  paralelă cu suprafața unei oglinde plane","Axa de simetrie a lentilei",22,"O"],
       ["Ce este focarul imagine?","Vârful lentilei","Locul în care se află obiectul","Punctul în care se converg razele de lumină sau prelungirile acestora","Coordonata obiectului, însă de cealaltă parte a lentilei","Punctul în care se converg razele de lumină sau prelungirile acestora",23,"O"],
       ["Ce este lucrul mecanic?","Produsul dintre vectorul forță și vectorul accelerație","Produsul dintre vectorul forță și vectorul accelerație","Produsl dintre vectorul forță și intervalul de timp","Produsul dintre vectorul forță și vectorul deplasare","Produsul dintre vectorul forță și vectorul deplasare",24,"M"],
       ["În ce se măsoară lucrul mecanic?","Joule","Newton","Watt","nu are unitate de măsură","Joule",25,"M"],
       ["Ce sunt forțele conservative?","Forțele a căror lucru mecanic depinde de pozițiile intermediare","Forțele a căror lucru mecanic nu depinde de pozițiile intermediare","Forțele a căror lucru mecanic e negativ","Forțele a căror lucru mecanic e pozitiv","Forțele a căror lucru mecanic nu depinde de pozițiile intermediare",26,"M"],
       ["Ce fel de mărime este energia?","De proces","Vectorială","De stare","Strict pozitivă","De stare",27,"M"],
       ["Din ce e alcătuită energia mecanică?","Energie cinetică","Energie potențială","Masă și accelerație","Energie cinetică și potențială","Energie cinetică și potențială",28,"M"],
       ["De unde provine energia cinetică?","Viteza corpului","Masa corpului","Forțele ce acționează asupra corpului","Forța de frecare","Viteza corpului",29,"M"],
       ["Cui este asociată energia potențială?","Doar greutății","Oricărei forțe conservative","Energiei cinetice","Oricărei forțe disipative","Oricărei forțe conservative",30,"M"],
       ["Ce face un motor termic?","Transformă lucru mecanic în căldură","Transformă electricitate în lucru mecanic","Transformă temperatură caldă în una rece","Transformă căldură în lucru mecanic","Transformă căldură în lucru mecanic",31,"T"],
       ["Pe baza cui funcționează un motor termic?","Pe baza unei transformări adiabatice","Pe baza unui ciclu termodinamic","Pe baza unui proces cvasistatic","Pe baza unui proces izobar","Pe baza unui ciclu termodinamic",32,"T"],
       ["Din ce procese funcționează ciclul Otto?","2 procese adiabatice și 2 izocore","2 procese adiabatice, 1 proces izocor și 1 proces izobar","2 procese adiabatice și 2 izoterme","2 procese adiabatice și 2 izobare","2 procese adiabatice și 2 izocore",33,"T"],
       ["Din ce procese funcționează ciclul Diesel?","2 procese adiabatice și 2 izocore","2 procese adiabatice, 1 proces izocor și 1 proces izobar","2 procese adiabatice și 2 izoterme","2 procese adiabatice și 2 izobare","2 procese adiabatice, 1 proces izocor și 1 proces izobar",34,"T"],
       ["Din ce procese funcționează ciclul Carnot?","2 procese adiabatice și 2 izocore","2 procese adiabatice, 1 proces izocor și 1 proces izobar","2 procese adiabatice și 2 izoterme","2 procese adiabatice și 2 izobare","2 procese adiabatice și 2 izoterme",35,"T"],
       ["Ce este agitația termică?","Mișcarea permanentă și dezordonată a moleculelor","Incertitudinea poziției unui obiect","Încălzirea apei la 100 de grade Celsius","Topirea unui corp solid","Mișcarea permanentă și dezordonată a moleculelor",36,"T"],
       ["Ce măsoară cantitatea de substanță?","Masa unui obiect","Numărul de particule dintr-un sistem fizic","Compoziția moleculară a unei substanțe","Numărul de electroni dintr-un conductor electric","Numărul de particule dintr-un sistem fizic",37,"T"],
       ["Cu cât este egală suma algebrică a intensităților care intră în nod?","Suma modulelor intensităților","Minus suma modulelor intensităților","0","3.14","0",38,"E"],
       ["De ce o intensitate ar fi aparent negativă?","Consumă curent electric","Are loc un scurt circuit","Conductorul este rupt","Intensitatea are sensul opus celui marcat pe circuit","Intensitatea are sensul opus celui marcat pe circuit",39,"E"],
       ["Ce este inerția?","Proprietatea corpurilor de a se opune acțiunii exterioare","Proprietatea unui corp de a ajunge la echilibru termic","Proprietatea corpurilor de a reacționa cu o forță egală dar de sens contrar, atunci când asupra lor e acționată o forță","Proprietatea corpurilor de a-și păstra forma","Proprietatea corpurilor de a se opune acțiunii exterioare",40,"M"],
       ["Care este efectul acțiunii unei forțe asupra unui corp?","Creșterea vitezei","Imprimarea unei accelerații","Existența forței de frecare","Are loc o deformare","Imprimarea unei accelerații",41,"M"],
       ["Ce se întâmplă atunci când un corp A acționează asupra corpului B cu o forță?","Corpul B se rupe în două","Corpul B acționează asupra lui A cu o forță de sens contrar, dar cu o valoare înjumătățită","Corpul B acționează asupra lui A cu o forță de sens contrar și de același modul","Corpul B se mișcă vizibil","Corpul B acționează asupra lui A cu o forță de sens contrar și de același modul",42,"M"],
       ["În ce se măsoară căldura în sistem internațional?","Joule","Newton","Celsius","Kelvin","Joule",43,"T"],
       ["Într-un ciclu termodinamic, cât este variația energiei interne?","Egală cu lucrul mecanic","Egală cu căldura cedată","Egală cu căldura primită","0","0",44,"T"],
       ["Într-o transformare izotermă, dacă presiunea crește, atunci ...?","Volumul scade","Temperatura scade","Volumul crește","Energia internă crește","Volumul scade",45,"T"],
       ["Într-o transformare izocoră, dacă presiunea scade, atunci ...?","Volumul scade","Temperatura scade","Temperatura crește","Volumul crește","Temperatura scade",46,"T"],
       ["Într-o transformare izobară, dacă temperatura scade, atunci ...?","Volumul scade","Presiunea scade","Volumul crește","Presiunea crește","Volumul scade",47,"T"],
       ["În ce se măsoară puterea electrică?","Amper","Joule","Newton","Watt","Watt",48,"E"],
       ["Când transferul de putere electrică este optim?","Când R=r","Când R=4r","Când r=0","Când rezistența internă e maximă","Când R=r",49,"E"],
       ["Ce este reflexia luminii?","Fenomenul de întoarcere a luminii în mediul din care provine atunci când întâlnește suprafața de separare a două medii","Fenomenul de modificare a direcției de propagare a luminii atunci când traversează suprafața de separare a două medii","Suprapunerea a două sau mai multe raze de lumină","Fenomenul de descompunere a luminii albe","Fenomenul de întoarcere a luminii în mediul din care provine atunci când întâlnește suprafața de separare a două medii",50,"O"],
       ["Ce este refracția luminii?","Fenomenul de întoarcere a luminii în mediul din care provine atunci când întâlnește suprafața de separare a două medii","Fenomenul de modificare a direcției de propagare a luminii atunci când traversează suprafața de separare a două medii","Suprapunerea a două sau mai multe raze de lumină","Fenomenul de descompunere a luminii albe","Fenomenul de modificare a direcției de propagare a luminii atunci când traversează suprafața de separare a două medii",51,"O"],
       ["Cu cine este egal unghiul de reflexie?","Unghiul limită","Unghiul de refracție","Unghiul incident","Unghi de interfranjă","Unghiul incident",52,"O"],
       ["Cum se numește unghiul incident atunci când unghiul de refracție are valoarea de 90°?","Unghiul normal","Unghiul limită","Nu are un nume specific","Unghiul de interfranjă","Unghiul limită",53,"O"],
       ["Cât de repede are loc efectul fotoelectic?","Instantaneu","Depinde de natura materialului","De 2 ori viteza luminii","De 0.5 viteza luminii","Instantaneu",54,"O"],
       ["Ce fac lentilele divergente?","Concentrează razele de lumină într-un singur punct","Reflectă razele de lumină","Concentrează razele de lumină în 2 puncte opuse","Împrăștie razele de lumină","Împrăștie razele de lumină",55,"O"],
       ["Cum sunt raza incidentă, raza reflectată și normala în punctul de incidență?","Perpendiculare","Paralele","Coplanare","Complementare","Coplanare",56,"O"]
    
	];
var a=[];
	var vit=2;
function viteza(){
	if(vit==3)
	{
		vit=1;
		document.getElementById("b3").src='imagini/buton_off.png';
		document.getElementById("b2").src='imagini/buton_off.png';

		speed=0.07;
	}else if(vit==2){
		vit=vit+1;
		document.getElementById("b3").src='imagini/buton_on.png';
		speed=0.15;
	}else if(vit==1){
		vit=vit+1;
		document.getElementById("b2").src='imagini/buton_on.png';
		speed=0.1;
	}
	
	
	
	
}
var speed=0.125;
function test(){
	
	document.getElementById("c1").style.pointerEvents = "auto";
	document.getElementById("c2").style.pointerEvents = "auto";
	document.getElementById("c3").style.pointerEvents = "auto";
	document.getElementById("c4").style.pointerEvents = "auto";
	document.getElementById("viteza").style.pointerEvents="none";
	document.getElementById("test_alegere").style.pointerEvents='none';
    
    
	raspunsuri=0;
	var t,i=0;
	function shuffle(bc) {
    var k, aux, l;
    for (l = bc.length; l; l--) {
        k = Math.floor(Math.random() * l);
        aux = bc[l - 1];
        bc[l - 1] = bc[k];
        bc[k] = aux;
    }
}
	shuffle(bc);
	raspunsuri=0;
    k=0;
    if(alegere_mat==0)
        {
            for(var i=0;i<=bc.length-1;i++){
                            a[k]=bc[i];
                            k++;
            }
        }
    if(alegere_mat==1)
        {
            for(var i=0;i<=bc.length-1;i++)
                {
                    if(bc[i][7]=="O")
                        {
                            a[k]=bc[i];
                            k++;
                        }
                }
        }
    if(alegere_mat==2)
        {
            for(var i=0;i<=bc.length-1;i++)
                {
                    if(bc[i][7]=="M")
                        {
                            a[k]=bc[i];
                            k++;
                        }
                }
        }   
    if(alegere_mat==3)
        {
            for(var i=0;i<=bc.length-1;i++)
                {
                    if(bc[i][7]=="T")
                        {
                            a[k]=bc[i];
                            k++;
                        }
                }
        }    
    if(alegere_mat==4)
        {
            for(var i=0;i<=bc.length-1;i++)
                {
                    if(bc[i][7]=="E")
                        {
                            a[k]=bc[i];
                            k++;
                        }
                }
        }
	i=0;
	verificaNrIntrebari(i);
	
	function verificaNrIntrebari(i)
	{
	document.getElementById("puncte").innerHTML="PUNCTE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+raspunsuri+"/10";
	document.getElementById("intrebare").innerHTML="intrebarea &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+(i+1);


		if(i==10)
				{		
                    document.getElementById("test_alegere").style.pointerEvents='auto';
                    document.getElementById("viteza").style.pointerEvents="auto";
                    document.getElementById('STARTBUTTON').style.pointerEvents='auto';  
                    nr_intr=0;
                    document.getElementById("c0").innerHTML="Întrebare";
					document.getElementById("c1").innerHTML="Răspuns 1";
					document.getElementById("c2").innerHTML="Răspuns 2";
					document.getElementById("c3").innerHTML="Răspuns 3";
					document.getElementById("c4").innerHTML="Răspuns 4";
					document.getElementById("STARTBUTTON").innerHTML="INCEPE TESTUL";
					document.getElementById("intrebare").innerHTML="intrebare";
					
					document.getElementById("c1").style.pointerEvents = "none";
					document.getElementById("c2").style.pointerEvents = "none";
					document.getElementById("c3").style.pointerEvents = "none";
					document.getElementById("c4").style.pointerEvents = "none";
                    $(".resizeText0").resizeText0();
                    $(".resizeText1").resizeText1();
                    $(".resizeText2").resizeText2();
                    $(".resizeText3").resizeText3();
                    $(".resizeText4").resizeText4();
                 setTimeout(function(){
                     document.getElementById("rezultate_cont").style.opacity=1;
                     document.getElementById("rezultate_cont").style.zIndex=100;
                 },500);
                 for(var i=0;i<=9;i++)
                     {
                         if (raspuns_util[i] == a[i][5]) {
                             verif[i].style.backgroundImage = "url(imagini/corectbut.png)";
                         } else {
                             verif[i].style.backgroundImage = "url(imagini/gresitbut.png)";
                         }
                         nr[i].innerHTML=i+1;
                         intrebare[i].innerHTML=a[i][0];
                         rasp_tau[i].innerHTML=raspuns_util[i];
                         rasp_corect[i].innerHTML=a[i][5];
                     }
				$(".n0").resizeText0();
                $(".n1").resizeText0();
                $(".n2").resizeText0();
                $(".n3").resizeText0();
                $(".n4").resizeText0();
                $(".n5").resizeText0();
                $(".n6").resizeText0();
                $(".n7").resizeText0();
                $(".n8").resizeText0();
                $(".n9").resizeText0();
                 
                $(".intr0").resizeText0();
                $(".intr1").resizeText0();
                $(".intr2").resizeText0();
                $(".intr3").resizeText0();
                $(".intr4").resizeText0();
                $(".intr5").resizeText0();
                $(".intr6").resizeText0();
                $(".intr7").resizeText0();
                $(".intr8").resizeText0();
                $(".intr9").resizeText0();
                 
                $(".rt0").resizeText0();
                $(".rt1").resizeText0();
                $(".rt2").resizeText0();
                $(".rt3").resizeText0();
                $(".rt4").resizeText0();
                $(".rt5").resizeText0();
                $(".rt6").resizeText0();
                $(".rt7").resizeText0();
                $(".rt8").resizeText0();
                $(".rt9").resizeText0(); 
                 
                $(".rc0").resizeText0();
                $(".rc1").resizeText0();
                $(".rc2").resizeText0();
                $(".rc3").resizeText0();
                $(".rc4").resizeText0();
                $(".rc5").resizeText0();
                $(".rc6").resizeText0();
                $(".rc7").resizeText0();
                $(".rc8").resizeText0();
                $(".rc9").resizeText0(); 
                a=[];
               
                
				}
		if(i<=9)
		{	
			clock.play();
			
			
			ok=0;
			x0=a[i][0];
			x1=a[i][1];
			x2=a[i][2];
			x3=a[i][3];
			x4=a[i][4];
			x5=a[i][5];
			for(var j=1;j<=4;j++)
				{	
					if(a[i][j]==x5)
					{	
						b=j;
					}
				}
			document.getElementById("c0").innerHTML=x0;
			document.getElementById("c1").innerHTML=x1;
			document.getElementById("c2").innerHTML=x2;
			document.getElementById("c3").innerHTML=x3;
			document.getElementById("c4").innerHTML=x4;
			$(".resizeText0").resizeText0();
			$(".resizeText1").resizeText1();
			$(".resizeText2").resizeText2();
			$(".resizeText3").resizeText3();
			$(".resizeText4").resizeText4();
			bara();
			wait();
            for(var i=1;i<=4;i++)
            {
                document.getElementById("c"+i).style.pointerEvents='auto';
            }
		}
	}
	function wait(){
		if (ok==0){
	setTimeout(wait, 100);
		} else 
		{	clock.pause();
			clock.currentTime = 0;
			i=i+1;
			setTimeout(function(){verificaNrIntrebari(i);
			document.getElementById("c1").style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)";
			document.getElementById("c2").style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)";
			document.getElementById("c3").style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)";
			document.getElementById("c4").style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)";},3500);
			
		}
	}
	
	

}
var nr_intr=0;
function apasat1(){
	var bara=document.getElementById("progres");
	var cont=document.getElementById("c1");
    raspuns_util[nr_intr]=x1;
    nr_intr++;
	stopbara();
	ok=1;
	clock.pause();
	clock.currentTime = 0;
    for(var i=1;i<=4;i++)
        {
            document.getElementById("c"+i).style.pointerEvents='none';
        }
	if(x1===x5)
	{	corect.play();
		corect.volume=0.2;
		cont.style.background="#222 url(imagini/corect.png) repeat";
		setTimeout(corectTimeout11,250);
		setTimeout(corectTimeout12,500);
		raspunsuri=raspunsuri+1;
	}
	else{gresit.volume=0.2;
		gresit.play();
		cont.style.background="#222 url(imagini/gresit.png) repeat";
		setTimeout(gresitTimeout11,250);
		setTimeout(gresitTimeout12,500);
		for(var j=1;j<=4;j++)
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(imagini/corect.png) repeat";
				
				
			}
		}
	}
		
}

function apasat2(){
	var bara=document.getElementById("progres");
	var cont=document.getElementById("c2");
    raspuns_util[nr_intr]=x2;
    nr_intr++;
	stopbara();
	ok=1;
	clock.pause();
	clock.currentTime = 0;
    for(var i=1;i<=4;i++)
        {
            document.getElementById("c"+i).style.pointerEvents='none';
        }
	if(x2===x5)
	{	corect.play();
		corect.volume=0.2;
		cont.style.background="#222 url(imagini/corect.png) repeat";
		setTimeout(corectTimeout21,250);
		setTimeout(corectTimeout22,500);
		raspunsuri=raspunsuri+1;
	}
	else{gresit.volume=0.2;
		gresit.play();
		cont.style.background="#222 url(imagini/gresit.png) repeat";
		setTimeout(gresitTimeout21,250);
		setTimeout(gresitTimeout22,500);
		for(var j=1;j<=4;j++)
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(imagini/corect.png) repeat";
				
				
			}
		}
	}
		
}

function apasat3(){
	var bara=document.getElementById("progres");
	var cont=document.getElementById("c3");
    raspuns_util[nr_intr]=x3;
    nr_intr++;
	stopbara();
	ok=1;
	clock.pause();
	clock.currentTime = 0;
    for(var i=1;i<=4;i++)
        {
            document.getElementById("c"+i).style.pointerEvents='none';
        }
	if(x3===x5)
	{	corect.play();
		corect.volume=0.2;
		cont.style.background="#222 url(imagini/corect.png) repeat";
		setTimeout(corectTimeout31,250);
		setTimeout(corectTimeout32,500);
		raspunsuri=raspunsuri+1;
	}
	else{gresit.volume=0.2;
		gresit.play();
		cont.style.background="#222 url(imagini/gresit.png) repeat";
		setTimeout(gresitTimeout31,250);
		setTimeout(gresitTimeout32,500);
		for(var j=1;j<=4;j++)
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(imagini/corect.png) repeat";
				
				
			}
		}
	}
		
}

function apasat4(){
	var bara=document.getElementById("progres");
	var cont=document.getElementById("c4");
    raspuns_util[nr_intr]=x4;
    nr_intr++;
	stopbara();
	ok=1;
	clock.pause();
	clock.currentTime = 0;
    for(var i=1;i<=4;i++)
        {
            document.getElementById("c"+i).style.pointerEvents='none';
        }
	if(x4===x5)
	{	corect.volume=0.2;
		corect.play();
		cont.style.background="#222 url(imagini/corect.png) repeat";
		setTimeout(corectTimeout41,250);
		setTimeout(corectTimeout42,500);
		raspunsuri=raspunsuri+1;
	}
	else{gresit.volume=0.2;
		gresit.play();
		cont.style.background="#222 url(imagini/gresit.png) repeat";
		setTimeout(gresitTimeout41,250);
		setTimeout(gresitTimeout42,500);
		for(var j=1;j<=4;j++)
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(imagini/corect.png) repeat";
				
				
			}
		}
	}
		
}



