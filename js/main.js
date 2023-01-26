//bot token
let telegram_bot_id = `5907651344:AAFouduGRzVG_Lyl27vhtuBMASqGZpvFfMc`;
 
//chat id
let chat_id = 765964584;
let name, email, subject, message;

   

function sendtelegram () {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message= document.getElementById("message").value;
    subject= document.getElementById("subject").value;
   
    console.log(message.length)
    event.preventDefault() 
   
if(message.length < 20){
    alert(`Fill out more than 20 words`)
}else{
   
   let messages = "Ismi: " + name + "\nEmail: " + subject + "\nIzoh: " + message;
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": messages
        })
    };
    $.ajax(settings).done(function(response) {
      alert(`Your message sent successfully`);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    return false;
}




};
