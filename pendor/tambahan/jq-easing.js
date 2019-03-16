$(document).ready(function(hal)
{
    $('.sekrol').click(function()
    {
        var tujuan;
        tujuan = $(this).attr('href');
        akhir  = $(tujuan);

        //pindahkan scroll
        $('html, body').animate({
            scrollTop: akhir.offset().top -50
        }, 1250,'easeInOutExpo');


	    hal.preventDefault();
    })
})