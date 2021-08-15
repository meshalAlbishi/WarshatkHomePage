$(document).ready(() => {
    $('#inc-navbar').load('html/navbar.html');
    $('#inc-home').load('html/home.html');
    $('#inc-about').load('html/about.html');
    $('#inc-service').load('html/service.html');
    $('#inc-contact').load('html/contact.html');
    $('#inc-footer').load('html/footer.html');
});


$('#btn').submit(() => alert("Message Sent!"));

$(window).on("load", function () {

    $(window).scroll(() => {

        if (scrollY > 20) {
            $('#navbar').addClass('sticky');
        }
        else {
            $('#navbar').removeClass('sticky');
        }
    });

});
