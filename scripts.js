function validate() {
    if( document.contactForm.name.value == "" ) {
        document.getElementById('name_error').innerHTML =
            "Please provide your name!"
        ;
    // alert( "Please provide your name!" );
    document.contactForm.name.focus() ;
    return false;
    }
    if( document.contactForm.email.value == "" ) {
        document.getElementById('email_error').innerHTML =
            "Please provide your Email!!"
        ;
    // alert( "Please provide your Email!" );
    document.contactForm.email.focus() ;
    return false;
    }
    if( document.contactForm.phone.value == "" || isNaN( document.contactForm.phone.value ) ||
    document.contactForm.phone.value.length <10 ) {
        document.getElementById('phone_error').innerHTML =
            "Please provide a valid phone number"
        ;
    document.contactForm.phone.focus() ;
    return false;
    }
    if( document.contactForm.message.value == "" ) {
        document.getElementById('message_error').innerHTML =
            "Don't forget your message!!"
        ;
    return false;
    }
    document.getElementById('message_success').innerHTML =
            "Message Sent, We will get back to you ASAP!!"
        ;
    return( true );
    }
let service = document.querySelector(".service");
service.addEventListener('mouseover',(e)=>{
    // alert("hello")
})