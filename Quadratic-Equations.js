function solve()
{
    var a1 = parseFloat(document.getElementById("a").value); //get Coefficient x2
    var b2 = parseFloat(document.getElementById("b").value); //get Coefficient x
    var c3 = parseFloat(document.getElementById("c").value); //get single number
    var delta=(b2*b2) - (4*a1*c3);            //calculate delta
    var sqrtdelta=Math.sqrt(delta);           //calculate square root of delta
    var r1=(-(b2)+sqrtdelta)/(2*(a1));        //calculate root1
    var r2=(-(b2)-sqrtdelta)/(2*(a1));        //calculate root2
    var sor=(-(b2))/a1;						  //calculate collect of two root
    var por=c3/a1;						      //calculate multiplication of two root
    document.getElementById("root1").value=r1.toFixed(2); //set root one with 2 number of float
    document.getElementById("root2").value=r2.toFixed(2); //set root two with 2 number of float
    document.getElementById("s").value=sor.toFixed(2);    //set collect of two root with 2 number of float
    document.getElementById("p").value=por.toFixed(2);    //set multiplication of two root with 2 number of float
    if (delta < 0){
        alert("your Delta is zero!");
    }
}