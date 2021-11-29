function buttonClick()
{
   //Name
    var name= document.getElementById("name").value;
    var regx=/([a-z A-z \s])/;
     if(regx.test(name))
      {
        
        document.getElementById("labelName").style.visibility="visible";
        document.getElementById("labelName").style.color="green";
        document.getElementById("labelName").innerHTML="Valid";
        name.style.border= "solid 2px green" ;
      }
  
     else
      {
         if(name=="")
         {
           document.getElementById("labelName").style.visibility="visible";
           document.getElementById("labelName").style.color="red";
           document.getElementById("labelName").innerHTML="Name is required";
         
         }
         else
         {
            document.getElementById("labelName").style.visibility="visible";
            document.getElementById("labelName").style.color="red";
            document.getElementById("labelName").innerHTML="Enter valid data";
         }  
      }
    
    //Father Name
    var fathername= document.getElementById("fatherName").value;
    var regx=/([a-z A-z \s])/;

     if(regx.test(fathername))
     {
        document.getElementById("labelFatherName").style.visibility="visible";
        document.getElementById("labelFatherName").style.color="green";
        document.getElementById("labelFatherName").innerHTML="Valid";
     }
  
     else
     {
        if(fathername=="")
       {
       
        document.getElementById("labelFatherName").style.visibility="visible";
        document.getElementById("labelFatherName").style.color="red";
        document.getElementById("labelFatherName").innerHTML="Name is required";
        }
        else{
         document.getElementById("labelFatherName").style.visibility="visible";
         document.getElementById("labelFatherName").style.color="red";
         document.getElementById("labelFatherName").innerHTML="Enter valid data";
        }

     }
    // EmailId
    var emailid=document.getElementById("email").value;
    var regx = /^([a-z A-Z 0-9 \. -]+)@([a-z 0-9 -]+).([a-z]{2,20}).([a-z) {2,8}])?$/;
     if(regx.test(emailid))
     {
        document.getElementById("labelmail").style.visibility="visible";
        document.getElementById("labelmail").style.color="green";
        document.getElementById("labelmail").innerHTML="Valid";
     }
  
     else
     {
        if(emailid=="")
        {
        document.getElementById("labelmail").style.visibility="visible";
        document.getElementById("labelmail").style.color="red";
        document.getElementById("labelmail").innerHTML="EmailId is required";
        }
        else{
         document.getElementById("labelmail").style.visibility="visible";
         document.getElementById("labelmail").style.color="red";
         document.getElementById("labelmail").innerHTML="Enter valid data";
        }
     }
  //Date of Birth
     var dateofbirth =document.getElementById("dob").value;
     var regx=/^([0-3])([0-9])-([0-1])([0-9])-([0-2])([0-9]){3}$/;
     if(regx.test(dateofbirth))
     {
        document.getElementById("labeldob").style.visibility="visible";
        document.getElementById("labeldob").style.color="green";
        document.getElementById("labeldob").innerHTML="Valid";
     }
  
     else
     {
        if(dateofbirth=="")
        {
        document.getElementById("labeldob").style.visibility="visible";
        document.getElementById("labeldob").style.color="red";
       document.getElementById("labeldob").innerHTML="dateofbirth is required";

       }
       else{
         document.getElementById("labeldob").style.visibility="visible";
        document.getElementById("labeldob").style.color="red";
        document.getElementById("labeldob").innerHTML="Enter valid data";
       }
     }
  //Mobile Number
     var mobileNumber =document.getElementById("number").value;
     var regx=/^[7-9]\d{9}$/
     if(regx.test(mobileNumber))
     {
        document.getElementById("labelnumber").style.visibility="visible";
        document.getElementById("labelnumber").style.color="green";
        document.getElementById("labelnumber").innerHTML="Valid";
     }
  
     else
     {
        
        if(mobileNumber=="")
        {
        document.getElementById("labelnumber").style.visibility="visible";
        document.getElementById("labelnumber").style.color="red";
        document.getElementById("labelnumber").innerHTML="mobileNumber is required";
        }
        else{
         document.getElementById("labelnumber").style.visibility="visible";
         document.getElementById("labelnumber").style.color="red";
         document.getElementById("labelnumber").innerHTML="Enter valid data";
         }
      }
  //Address line1
     var addressline1 =document.getElementById("address1").value;
     var regx=/([a-z A-z \s \. , ])/
     if(regx.test(addressline1))
     {
        document.getElementById("labeladdress").style.visibility="visible";
        document.getElementById("labeladdress").style.color="green";
        document.getElementById("labeladdress").innerHTML="Valid";
     }
  
     else
     { 
        if(addressline1=="")
         {
         document.getElementById("labeladdress").style.visibility="visible";
         document.getElementById("labeladdress").style.color="red";
         document.getElementById("labeladdress").innerHTML="addressline1 is required";
         }
         else{
         document.getElementById("labeladdress").style.visibility="visible";
         document.getElementById("labeladdress").style.color="red";
         document.getElementById("labeladdress").innerHTML="Enter valid data";
         }
     }

  //Address line2
     var addressline2 =document.getElementById("address2").value;
     var regx=/([a-z A-z \s \. , ])/
     if(regx.test(addressline2))
     {
        document.getElementById("labeladdress2").style.visibility="visible";
        document.getElementById("labeladdress2").style.color="green";
        document.getElementById("labeladdress2").innerHTML="Valid";
     }
  
     else
     {
        document.getElementById("labeladdress2").style.visibility="visible";
        document.getElementById("labeladdress2").style.color="red";
        document.getElementById("labeladdress2").innerHTML="InValid";
     }

  //City

   var cityname =document.getElementById("city").value;
   var regx=/([a-z A-z ])/
     if(regx.test(cityname))
     {
     document.getElementById("labelcity").style.visibility="visible";
     document.getElementById("labelcity").style.color="green";
     document.getElementById("labelcity").innerHTML="Valid";
   }

   else
   {
      if(cityname=="")
      {
      document.getElementById("labelcity").style.visibility="visible";
      document.getElementById("labelcity").style.color="red";
      document.getElementById("labelcity").innerHTML="cityname is required";
      }
      else{
      document.getElementById("labelcity").style.visibility="visible";
      document.getElementById("labelcity").style.color="red";
      document.getElementById("labelcity").innerHTML="Enter valid data";
      }
   }
  //zip code
   var pincode =document.getElementById("zipcode").value;
   var regx=/\d{6}/
    if(regx.test(pincode))
     {
     document.getElementById("labelzipcode").style.visibility="visible";
     document.getElementById("labelzipcode").style.color="green";
     document.getElementById("labelzipcode").innerHTML="Valid";
     }

    else
    {
      if(pincode=="")
      {
      document.getElementById("labelzipcode").style.visibility="visible";
      document.getElementById("labelzipcode").style.color="red";
      document.getElementById("labelzipcode").innerHTML="pincode is required";
      }
      else{
      document.getElementById("labelzipcode").style.visibility="visible";
      document.getElementById("labelzipcode").style.color="red";
      document.getElementById("labelzipcode").innerHTML="Enter valid data";
      }
    }
}

