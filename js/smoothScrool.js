{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> */}

$(document).ready(function(){
    // Adding scrolling to all links
    $('a').on('click', function(event){
        if(this.hash !== "")
        {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            },1500, function(){
                window.location.hash = hash;
            })
        }
    })
})