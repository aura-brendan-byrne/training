$(document).ready(function()
 {
     $('table td').click(function()
     {
         if($(this).find('input').length==0)
         {
             $(this).html('<input class="text" type="text" value="'+
                          $(this).text()+
                          '" style="width:'+$(this).width()+'px;"/>');
         $(this).find('.text').focus().select(false);             
         rebindEvents();
         }
     });
    
 });
 
 function rebindEvents()
 {
    $('.text').unbind().bind('blur',function()
    {     
        $($(this).parent(0)).html($(this).val());
    });
 }