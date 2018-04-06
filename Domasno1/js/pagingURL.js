/**
 * Created by kikoano111 on 13/3/2017.
 */
$(document).ready(function(){
    $('.pagination li a').on('click',function(){
        var url=window.location.pathname+"?page="+$(this).attr("value");
        window.location.href=url;
    });
});