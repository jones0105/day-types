var today=new Date()
document.write(today+"<br>");

var year=today.getFullYear()
document.write(year+"<br>");

var day=today.getDay()
document.write(day+"<br>");

var month=today.getMonth()
document.write(month+"<br>");

var date=today.getDate()
document.write(date+"<br>");

document.write("1)."+"This is leap year or Not leap Year"+"<br>")
 if(year%4==0)
 {
 document.write(year+" "+"This is leap year"+"<br>")

 }
 
   document.write(year+" "+"This is not leap year"+"<br>")

   document.write("2)."+"given number is leap year or Not leap Year"+"<br>")
    today.setFullYear(1999)
    document.write(today+"<br>");
    var b=today.getFullYear()
    document.write(b+"<br>");

    if(b%4==0)
  {
    document.write(b+" "+"This is leap year"+"<br>")
  
   }
   
    else{
     document.write(b+" "+"This is not leap year"+"<br>")
    }

    document.write("3)."+"Week end or Not"+"<br>")
    if((day==0)||(day==6))
    {
        document.write(day+" "+"This is week end"+"<br>")
    }
    else {
        document.write(day+" "+"This is Not week end"+"<br>")
       }