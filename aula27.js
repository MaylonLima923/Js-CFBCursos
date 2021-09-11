document.write(document.getElementById("curso1").elements[0].value);
//var fm = document.forms["curso1"].elements[0].value;
//var fm = document.forms.item(0).id;
//var fm = document.forms.namedItem("curso1").innerHTML;
var fm = document.forms[0];
var el = fm.elements;

for (var i = 0; i < el.length; i++) {
    el[i].style.backgroundColor = "gray";
    el[i].style.color = "white";
    el[i].style.border = "2px solid orange";
    el[i].style.borderRadius = "10px"
    el[i].style.boxShadow = "5px 5px 5px black";
}

//document.write(fm)