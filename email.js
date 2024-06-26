function sendMail(){
    var  params={
      name:document.getElementById("name").value,
      email:document.getElementById("email").value,
      message:document.getElementById("message").value
      
    };
    const serviceID="service_ge0l7lv";
  const templateID="template_6cdil33";

  emailjs.send(serviceID,templateID,params)
  .then(
    res =>{
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("message").value="";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err)=>console.log(err));
  }
