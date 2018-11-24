$(function (){
    if($(window).width() <= 800){
        $('.form_wizard_steps_item').
                eq(0).find('> img').
                attr('src','img/account_icon_disable.png');
        
        $('.form_wizard_steps_item').
                eq(1).find('> img').
                attr('src','img/User_font_awesome_en_court_disable.svg.png');
        
        $('.form_wizard_steps_item').
                eq(2).find('> img').
                attr('src','img/bank_disable.png');
        
        $('.form_wizard_steps_item').
                eq(3).find('> img').
                attr('src','img/confirm_disable.png');

    }
   var num_setp = 0;
   $('.next_step').click(function (){
        $(window).scrollTop(0);
        if(num_setp >= 0 && num_setp < 3){
            num_setp = num_setp + 1;
        }
        if($(window).width() <= 800){
            $('.form_wizard_steps_item:visible').hide();
            $('.form_wizard_steps_item').eq(num_setp).show();
            $('.form_wizard_steps_item').eq(num_setp).find('.status').show();
            switch (num_setp){
                case 1:
                    $('.form_wizard_steps_mobile > div').eq(num_setp-1).
                            removeClass('form_wizard_steps_mobile_en_cour');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp-1).
                            addClass('form_wizard_steps_mobile_activ');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp-1).
                            find('img').removeClass('form_wizard_steps_mobile_disable_img');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp-1).
                            find('img').addClass('form_wizard_steps_mobile_activ_img');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp-1).
                            find('img').attr('src','img/check-512.png');
                    /////////////////////////////////////////////////////////////
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            removeClass('form_wizard_steps_mobile_disable');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            addClass('form_wizard_steps_mobile_en_cour');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            find('img').attr('src','img/User_font_awesome_en_court.svg.png');
                    
                    var header_content = '<div class="col-lg-4 col" style="padding: 0px">'+
                                        '<img src="img/User_font_awesome_en_court_disable.svg.png"/>'+
                                        '<strong>'+
                                            'Personnel  '+
                                        '</strong>'+
                                        '<em>'+
                                            'Information'+
                                        '</em>'+
                                    '</div>'+
                                    '<div class="col-lg-2 col-4" style="padding: 0px">'+
                                        'Step 2 - 4'+
                                    '</div>';
                $('.form_wizard_content_header > div').remove();            
                $('.form_wizard_content_header').append(header_content);
                $('.form_wizard_content_form form > div:visible').hide();
                $('.form_personnel_information').show();
                break;
                case 2:
                    $('.form_wizard_steps_mobile > div').eq(num_setp-1).
                            removeClass('form_wizard_steps_mobile_en_cour');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp-1).
                            addClass('form_wizard_steps_mobile_activ');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp-1).
                            find('img').removeClass('form_wizard_steps_mobile_disable_img');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp-1).
                            find('img').addClass('form_wizard_steps_mobile_activ_img');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp-1).
                            find('img').attr('src','img/check-512.png');
                    /////////////////////////////////////////////////////////////
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            removeClass('form_wizard_steps_mobile_disable');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            addClass('form_wizard_steps_mobile_en_cour');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            find('img').attr('src','img/bank_en_cour.png');
                    
                    var header_content = '<div class="col-lg-4 col" style="padding: 0px">'+
                                        '<img src="img/bank_disable.png"/>'+
                                        '<strong>'+
                                            'Bank  '+
                                        '</strong>'+
                                        '<em>'+
                                            'Information'+
                                        '</em>'+
                                    '</div>'+
                                    '<div class="col-lg-2 col-4" style="padding: 0px">'+
                                        'Step 3 - 4'+
                                    '</div>';
                $('.form_wizard_content_header > div').remove();            
                $('.form_wizard_content_header').append(header_content);
                
                $('.form_wizard_content_form form > div:visible').hide();
                $('.form_banc_information').show();
                    
                break;
                case 3:
                    $('.form_wizard_steps_mobile > div').eq(num_setp-1).
                            removeClass('form_wizard_steps_mobile_en_cour');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp-1).
                            addClass('form_wizard_steps_mobile_activ');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp-1).
                            find('img').removeClass('form_wizard_steps_mobile_disable_img');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp-1).
                            find('img').addClass('form_wizard_steps_mobile_activ_img');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp-1).
                            find('img').attr('src','img/check-512.png');
                    /////////////////////////////////////////////////////////////
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            removeClass('form_wizard_steps_mobile_disable');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            addClass('form_wizard_steps_mobile_en_cour');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            find('img').attr('src','img/confirm_en_cour.png');
                    
                    var header_content = '<div class="col-lg-4 col" style="padding: 0px">'+
                                        '<img src="img/confirm_disable.png"/>'+
                                        '<strong>'+
                                            'Confirm  '+
                                        '</strong>'+
                                        '<em>'+
                                            'Information'+
                                        '</em>'+
                                    '</div>'+
                                    '<div class="col-lg-2 col-4" style="padding: 0px">'+
                                        'Step 4 - 4'+
                                    '</div>';
                $('.form_wizard_content_header > div').remove();            
                $('.form_wizard_content_header').append(header_content);
                
                $('.form_wizard_content_form form > div:visible').hide();
                $('.form_confirm_information').show();
                
                break;
                
            }
                
        }
        else{
        switch (num_setp){
            case 1:
                $('.form_wizard_steps_item').eq(num_setp-1).removeClass('form_wizard_steps_item_en_cour');
                $('.form_wizard_steps_item').eq(num_setp-1).addClass('form_wizard_steps_item_valid');
                $('.form_wizard_steps_item').eq(num_setp-1).find('.status').hide();
                $('.form_wizard_steps_item').eq(num_setp-1).find('.status_valid').show();
                
                $('.form_wizard_steps_item').eq(num_setp).removeClass('form_wizard_steps_item_disable');
                $('.form_wizard_steps_item').eq(num_setp).find('> img').attr('src','img/User_font_awesome_en_court.svg.png');
                $('.form_wizard_steps_item').eq(num_setp).addClass('form_wizard_steps_item_en_cour');
                $('.form_wizard_steps_item').eq(num_setp).find('.status').show();
                
                var header_content = '<div class="col-lg-4" style="padding: 0px">'+
                                        '<img src="img/User_font_awesome_en_court_disable.svg.png"/>'+
                                        '<strong>'+
                                            'Personnel  '+
                                        '</strong>'+
                                        '<em>'+
                                            'Information'+
                                        '</em>'+
                                    '</div>'+
                                    '<div class="col-lg-2" style="padding: 0px">'+
                                        'Step 2 - 4'+
                                    '</div>';
                $('.form_wizard_content_header > div').remove();            
                $('.form_wizard_content_header').append(header_content); 
                
                $('.form_wizard_content_form form > div:visible').hide();
                $('.form_personnel_information').show();
                            
                break;
            case 2:
                $('.form_wizard_steps_item').eq(num_setp-1).removeClass('form_wizard_steps_item_en_cour');
                $('.form_wizard_steps_item').eq(num_setp-1).addClass('form_wizard_steps_item_valid');
                $('.form_wizard_steps_item').eq(num_setp-1).find('.status').hide();
                $('.form_wizard_steps_item').eq(num_setp-1).find('.status_valid').show();
                
                $('.form_wizard_steps_item').eq(num_setp).removeClass('form_wizard_steps_item_disable');
                $('.form_wizard_steps_item').eq(num_setp).find('> img').attr('src','img/bank_en_cour.png');
                $('.form_wizard_steps_item').eq(num_setp).addClass('form_wizard_steps_item_en_cour');
                $('.form_wizard_steps_item').eq(num_setp).find('.status').show();
                
                var header_content = '<div class="col-lg-4" style="padding: 0px">'+
                                        '<img src="img/bank_disable.png"/>'+
                                        '<strong>'+
                                            'Bank  '+
                                        '</strong>'+
                                        '<em>'+
                                            'Information'+
                                        '</em>'+
                                    '</div>'+
                                    '<div class="col-lg-2" style="padding: 0px">'+
                                        'Step 3 - 4'+
                                    '</div>';
                $('.form_wizard_content_header > div').remove();            
                $('.form_wizard_content_header').append(header_content);
                
                $('.form_wizard_content_form form > div:visible').hide();
                $('.form_banc_information').show();
                
                break;
            case 3:
                $('.form_wizard_steps_item').eq(num_setp-1).removeClass('form_wizard_steps_item_en_cour');
                $('.form_wizard_steps_item').eq(num_setp-1).addClass('form_wizard_steps_item_valid');
                $('.form_wizard_steps_item').eq(num_setp-1).find('.status').hide();
                $('.form_wizard_steps_item').eq(num_setp-1).find('.status_valid').show();
                
                $('.form_wizard_steps_item').eq(num_setp).removeClass('form_wizard_steps_item_disable');
                $('.form_wizard_steps_item').eq(num_setp).find('> img').attr('src','img/confirm_en_cour.png');
                $('.form_wizard_steps_item').eq(num_setp).addClass('form_wizard_steps_item_en_cour');
                $('.form_wizard_steps_item').eq(num_setp).find('.status').show();
                
                var header_content = '<div class="col-lg-4" style="padding: 0px">'+
                                        '<img src="img/confirm_disable.png"/>'+
                                        '<strong>'+
                                            'Confirm  '+
                                        '</strong>'+
                                        '<em>'+
                                            'Information'+
                                        '</em>'+
                                    '</div>'+
                                    '<div class="col-lg-2" style="padding: 0px">'+
                                        'Step 4 - 4'+
                                    '</div>';
                $('.form_wizard_content_header > div').remove();            
                $('.form_wizard_content_header').append(header_content);
                
                $('.form_wizard_content_form form > div:visible').hide();
                $('.form_confirm_information').show();
                
                break;
            default :
                num_setp = 0;
                break;
                
        }
        }
   });
   
   $('.pre_step').click(function (){
        $(window).scrollTop(0);
        if(num_setp > 0 && num_setp <= 3){
            num_setp = num_setp - 1;
        }
        if($(window).width() <= 800){
            $('.form_wizard_steps_item:visible').hide();
            $('.form_wizard_steps_item').eq(num_setp).show();
            $('.form_wizard_steps_item').eq(num_setp).find('.status').show();
            switch (num_setp){
                case 2:
                    $('.form_wizard_steps_mobile > div').eq(num_setp + 1).
                            removeClass('form_wizard_steps_mobile_en_cour');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp + 1).
                            addClass('form_wizard_steps_mobile_disable');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp + 1).
                            find('img').attr('src','img/confirm_disable_mobile.png');
                    /////////////////////////////////////////////////////////////
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            removeClass('form_wizard_steps_mobile_activ');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            addClass('form_wizard_steps_mobile_en_cour');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            find('img').removeClass('form_wizard_steps_mobile_activ_img');
                    
                   $('.form_wizard_steps_mobile > div').eq(num_setp).
                            find('img').addClass('form_wizard_steps_mobile_disable_img');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            find('img').attr('src','img/bank_en_cour.png');
                    
                    var header_content = '<div class="col-lg-4 col" style="padding: 0px">'+
                                        '<img src="img/bank_disable.png"/>'+
                                        '<strong>'+
                                            'Bank  '+
                                        '</strong>'+
                                        '<em>'+
                                            'Information'+
                                        '</em>'+
                                    '</div>'+
                                    '<div class="col-lg-2 col-4" style="padding: 0px">'+
                                        'Step 3 - 4'+
                                    '</div>';
                $('.form_wizard_content_header > div').remove();            
                $('.form_wizard_content_header').append(header_content);
                
                $('.form_wizard_content_form form > div:visible').hide();
                $('.form_banc_information').show();
                
                break;
                
                case 1:
                    $('.form_wizard_steps_mobile > div').eq(num_setp + 1).
                            removeClass('form_wizard_steps_mobile_en_cour');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp + 1).
                            addClass('form_wizard_steps_mobile_disable');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp + 1).
                            find('img').attr('src','img/bank_disable_mobile.png');
                    /////////////////////////////////////////////////////////////
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            removeClass('form_wizard_steps_mobile_activ');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            addClass('form_wizard_steps_mobile_en_cour');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            find('img').removeClass('form_wizard_steps_mobile_activ_img');
                    
                   $('.form_wizard_steps_mobile > div').eq(num_setp).
                            find('img').addClass('form_wizard_steps_mobile_disable_img');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            find('img').attr('src','img/User_font_awesome_en_court.svg.png');
                    
                    var header_content = '<div class="col-lg-4 col" style="padding: 0px">'+
                                        '<img src="img/User_font_awesome_en_court_disable.svg.png"/>'+
                                        '<strong>'+
                                            'Personel  '+
                                        '</strong>'+
                                        '<em>'+
                                            'Information'+
                                        '</em>'+
                                    '</div>'+
                                    '<div class="col-lg-2 col-4" style="padding: 0px">'+
                                        'Step 2 - 4'+
                                    '</div>';
                $('.form_wizard_content_header > div').remove();            
                $('.form_wizard_content_header').append(header_content);
                
                $('.form_wizard_content_form form > div:visible').hide();
                $('.form_personnel_information').show();
                
                break;
                case 0:
                    $('.form_wizard_steps_mobile > div').eq(num_setp + 1).
                            removeClass('form_wizard_steps_mobile_en_cour');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp + 1).
                            addClass('form_wizard_steps_mobile_disable');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp + 1).
                            find('img').attr('src','img/User_font_awesome_disable_mobile.svg.png');
                    /////////////////////////////////////////////////////////////
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            removeClass('form_wizard_steps_mobile_activ');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            addClass('form_wizard_steps_mobile_en_cour');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            find('img').removeClass('form_wizard_steps_mobile_activ_img');
                    
                   $('.form_wizard_steps_mobile > div').eq(num_setp).
                            find('img').addClass('form_wizard_steps_mobile_disable_img');
                    
                    $('.form_wizard_steps_mobile > div').eq(num_setp).
                            find('img').attr('src','img/account_icon_encourt.png');
                    
                    var header_content = '<div class="col-lg-4 col" style="padding: 0px">'+
                                        '<img src="img/User_font_awesome_en_court_disable.svg.png"/>'+
                                        '<strong>'+
                                            'Personel  '+
                                        '</strong>'+
                                        '<em>'+
                                            'Information'+
                                        '</em>'+
                                    '</div>'+
                                    '<div class="col-lg-2 col-4" style="padding: 0px">'+
                                        'Step 1 - 4'+
                                    '</div>';
                $('.form_wizard_content_header > div').remove();            
                $('.form_wizard_content_header').append(header_content);
                
                $('.form_wizard_content_form form > div:visible').hide();
                $('.form_account_information').show();
                
                break;
            }
       }
        else{
            
        switch (num_setp){
            case 2:
                $('.form_wizard_steps_item').eq(num_setp + 1).removeClass('form_wizard_steps_item_en_cour');
                $('.form_wizard_steps_item').eq(num_setp + 1).find('> img').attr('src','img/confirm_disable.png');
                $('.form_wizard_steps_item').eq(num_setp + 1).addClass('form_wizard_steps_item_disable');
                $('.form_wizard_steps_item').eq(num_setp + 1).find('.status').hide();
                $('.form_wizard_steps_item').eq(num_setp + 1).find('.status_valid').hide();
                
                $('.form_wizard_steps_item').eq(num_setp).removeClass('form_wizard_steps_item_valid');
                $('.form_wizard_steps_item').eq(num_setp).find('> img').attr('src','img/bank_en_cour.png');
                $('.form_wizard_steps_item').eq(num_setp).addClass('form_wizard_steps_item_en_cour');
                $('.form_wizard_steps_item').eq(num_setp).find('.status').show();
                $('.form_wizard_steps_item').eq(num_setp).find('.status_valid').hide();
                
                var header_content = '<div class="col-lg-4" style="padding: 0px">'+
                                        '<img src="img/bank_disable.png"/>'+
                                        '<strong>'+
                                            'Bank  '+
                                        '</strong>'+
                                        '<em>'+
                                            'Information'+
                                        '</em>'+
                                    '</div>'+
                                    '<div class="col-lg-2" style="padding: 0px">'+
                                        'Step 3 - 4'+
                                    '</div>';
                $('.form_wizard_content_header > div').remove();            
                $('.form_wizard_content_header').append(header_content);            
                
                $('.form_wizard_content_form form > div:visible').hide();
                $('.form_banc_information').show();
                
                break;
                
                
            case 1:
                $('.form_wizard_steps_item').eq(num_setp + 1).removeClass('form_wizard_steps_item_en_cour');
                $('.form_wizard_steps_item').eq(num_setp + 1).find('> img').attr('src','img/bank_disable.png');
                $('.form_wizard_steps_item').eq(num_setp + 1).addClass('form_wizard_steps_item_disable');
                $('.form_wizard_steps_item').eq(num_setp + 1).find('.status').hide();
                $('.form_wizard_steps_item').eq(num_setp + 1).find('.status_valid').hide();
                
                $('.form_wizard_steps_item').eq(num_setp).removeClass('form_wizard_steps_item_valid');
                $('.form_wizard_steps_item').eq(num_setp).find('> img').attr('src','img/User_font_awesome_en_court.svg.png');
                $('.form_wizard_steps_item').eq(num_setp).addClass('form_wizard_steps_item_en_cour');
                $('.form_wizard_steps_item').eq(num_setp).find('.status').show();
                $('.form_wizard_steps_item').eq(num_setp).find('.status_valid').hide();
                
                var header_content = '<div class="col-lg-4" style="padding: 0px">'+
                                        '<img src="img/User_font_awesome_en_court_disable.svg.png"/>'+
                                        '<strong>'+
                                            'Personnel  '+
                                        '</strong>'+
                                        '<em>'+
                                            'Information'+
                                        '</em>'+
                                    '</div>'+
                                    '<div class="col-lg-2" style="padding: 0px">'+
                                        'Step 2 - 4'+
                                    '</div>';
                $('.form_wizard_content_header > div').remove();            
                $('.form_wizard_content_header').append(header_content);
                
                $('.form_wizard_content_form form > div:visible').hide();
                $('.form_personnel_information').show();
                
                break;
            
            case 0:
                $('.form_wizard_steps_item').eq(num_setp + 1).removeClass('form_wizard_steps_item_en_cour');
                $('.form_wizard_steps_item').eq(num_setp + 1).find('> img').attr('src','img/User_font_awesome_en_court_disable.svg.png');
                $('.form_wizard_steps_item').eq(num_setp + 1).addClass('form_wizard_steps_item_disable');
                $('.form_wizard_steps_item').eq(num_setp + 1).find('.status').hide();
                $('.form_wizard_steps_item').eq(num_setp + 1).find('.status_valid').hide();
                
                $('.form_wizard_steps_item').eq(num_setp).removeClass('form_wizard_steps_item_valid');
                $('.form_wizard_steps_item').eq(num_setp).find('> img').attr('src','img/account_icon_encourt.png');
                $('.form_wizard_steps_item').eq(num_setp).addClass('form_wizard_steps_item_en_cour');
                $('.form_wizard_steps_item').eq(num_setp).find('.status').show();
                $('.form_wizard_steps_item').eq(num_setp).find('.status_valid').hide();
                
                var header_content = '<div class="col-lg-4" style="padding: 0px">'+
                                        '<img src="img/account_icon_disable.png"/>'+
                                        '<strong>'+
                                            'Account  '+
                                        '</strong>'+
                                        '<em>'+
                                            'Information'+
                                        '</em>'+
                                    '</div>'+
                                    '<div class="col-lg-2" style="padding: 0px">'+
                                        'Step 1 - 4'+
                                    '</div>';
                $('.form_wizard_content_header > div').remove();            
                $('.form_wizard_content_header').append(header_content);
                
                $('.form_wizard_content_form form > div:visible').hide();
                $('.form_account_information').show();
                
                break;
        }
    }
   });
   $('.form_item').mouseover(function (){
       $('.form_item_info').hide();
       $(this).find('.form_item_info').show();
   });
});