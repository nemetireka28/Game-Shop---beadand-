let penz = 0;
function Ar1(){
    penz +=3000;
    document.getElementById("kosar").innerHTML = "Kosár: " +penz + "Ft";
}
function Ar2(){
    penz +=3500;
    document.getElementById("kosar").innerHTML = "Kosár: "+penz + "Ft";
}
function Ar3(){
    penz +=1500;
    document.getElementById("kosar").innerHTML = "Kosár: "+penz + "Ft";
}
function fizetes() {
    alert("Sikeres fizetés!");
  }