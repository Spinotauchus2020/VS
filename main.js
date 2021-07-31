array_name=[]
function submit(){
    var student1=document.getElementById("name1").value;
    var student2=document.getElementById("name2").value;
    var student3=document.getElementById("name3").value;
    var student4=document.getElementById("name4").value;
    array_name.push(student1);
    array_name.push(student2);
    array_name.push(student3);
    array_name.push(student4);
    document.getElementById("display").innerHTML=array_name;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}
function sort(){
    array_name.sort()
    document.getElementById("display").innerHTML=array_name;
}