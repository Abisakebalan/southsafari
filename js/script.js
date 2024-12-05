$(document).ready(function(){
    $('.ban_owl').owlCarousel({
        loop: true,           
        margin: 0,          
        nav: false,  
        items: 1,         
        dots: true,          
        autoplay: true,   
        autoplayTimeout: 5000, 
        autoplayHoverPause: true
    })
})
$(document).ready(function(){
    $('#btm_row').owlCarousel({
        loop: true,           
        margin: 10,          
        nav: false,  
        items: 2.5,         
        dots: false,          
        autoplay:true,     
        autoplayTimeout: 5000, 
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                margin:0
            },
            600: {
                items: 1.5     
            },
            700:{
                items: 1.75
            },
            800: {
                items:2 
            }
        }
    })
})
$(document).ready(function(){
    $('#onze_carousel').owlCarousel({
        loop: true,           
        margin: 20,          
        nav: true,  
        items: 3,         
        dots: false,          
        autoplay: true,     
        autoplayTimeout: 5000, 
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            380: {
                items: 1.15
            },
            415:{
                items:1.20
            },
            550:{
                items: 1.5
            },
            700:{
                items: 2 
            },
            800: {
                items: 2.25 
            },
            900: {
                items:2.5  
            },
            1000:{
                items: 2.75
            },
            1200: {
                items: 3
            }
        }
    })
})
$(document).ready(function(){
    $('#uit_carousel').owlCarousel({
        loop: true,           
        margin: 20,          
        nav: true,  
        items: 4,         
        dots: false,          
        autoplay: true,     
        autoplayTimeout: 5000, 
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            380:  {
                items: 1.15     
            },
            450: {
                items: 1.5      
            },
            600:{
                items: 2
            },
            700:{
                items: 2.5
            },
            800: {
              items: 3, 
            },
            900: {
              items: 3.25 
            },
            1000: {
                items: 3.5
            },
            1200:{
                items: 3.75
            },
            1400:{
                items: 4
            }
        }
    })
})
$(document).ready(function(){
    $('#onze_hpy_carousel').owlCarousel({
        loop: true,           
        margin: 20,          
        nav: true,  
        items: 3,         
        dots: false,          
        autoplay: true,     
        autoplayTimeout: 5000, 
        autoplayHoverPause: true,
        responsive:{
            0: {
                items: 1 ,
                margin:0  
            },
            380:{
                items:1.20
            },
            550: {
                items: 1.5   
            },
            700:{
                items: 2 
            },
            800: {
                items: 2.25 
            },
            900: {
                items:2.5  
            },
            1000:{
                items: 2.75
            },
            1100: {
                items: 3
            }
        }
    })
})

//cookie

$(document).ready(function () {
    $(".cookie_close").click(function () {
      $(".cookie").hide(),
      $("body").removeClass("cke");
    });
  });

  $(document).ready(function(){
    $('#kies_carousel').owlCarousel({
        loop: true,           
        margin: 15,          
        nav: false,  
        items: 6,         
        dots: false,          
        autoplay: true,     
        autoplayTimeout: 5000, 
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2
            },
            380:{
                items:2.15
            },
            450:{
                items:2.5
            },
            500:{
                items:3
            },
            600:{
                items:3.3
            },
            795:{
                items:3.5
            },
            880:{
                items:4
            },
            1100:{
                items:5
            },
            1300:{
                items:6
            }
        }
    })
})
$(document).ready(function(){
    $('#wij_carousel').owlCarousel({
        loop: true,           
        margin: 20,          
        nav: false,  
        items: 3,         
        dots: false,          
        autoplay: true,     
        autoplayTimeout: 5000, 
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            380: {
                items: 1.5   
            },
            700:{
                items: 2 
            },
            800: {
                items: 2.25 
            }
            
        }
    })
})
$(document).ready(function(){
    $('#accom_carousel').owlCarousel({
        loop: true,           
        margin: 20,          
        nav: false,  
        items: 3,         
        dots: false,          
        autoplay: true,     
        autoplayTimeout: 5000, 
        autoplayHoverPause: true,
        responsive:{
            0: {
                items: 1     
            },
            380: {
                items: 1.15     
            },
            550: {
                items: 1.5     
            },
            600:{
                items: 1.90
            },
            800: {
                items: 2.50 
            },
            900:{
                items:2.75
            },
            1000:{
                items:2.85
            },
            1100:{
                items:3
            }
            
        }
    })
})

$(document).ready(function() {
    // Toggle the classes when clicking on .hd_tog
    $('.hd_tog').on('click', function() {
        $('.hd_txt').toggleClass('menu_on');
        $('body').toggleClass('no-scroll');
    });
    // Remove classes when clicking close btn
    $('.hd_in .hd_txt .hd_links > p').on('click', function() {
        $('.hd_txt').removeClass('menu_on');
        $('body').removeClass('no-scroll');
    });
    // Toggle the class when clicking on li.fr_megamenu
    $('.hd_in .hd_txt .hd_links > li.fr_megamenu').on('click', function() {
        $(".hd_in .hd_txt .hd_links > li.fr_megamenu .megamenu").toggleClass('mega_open');
    });
    // Remove classes when clicking outside .hd_txt
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.hd_txt, .hd_tog').length) {
            $('.hd_txt').removeClass('menu_on');
            $('body').removeClass('no-scroll');
        }
    });

    //footer
    $(document).ready(function(){
        $('footer .foot_btm .foot_row .foot_links p').click(function(){
        if($(window).width() <= 991){
            $(this).siblings(".foot_tog").slideToggle();
            $(this).parent().siblings(".foot_links").find(".foot_tog").slideUp();
            $(this).parent().parent().siblings(".foot_links").find(".foot_tog").slideUp();
            $(this).parent().toggleClass("shw_sib");
            $(this).parent().siblings(".foot_links").removeClass("shw_sib");
            $(this).parent().parent().siblings(".foot_links").removeClass("shw_sib");
            $(this).parent().siblings(".foot_links").find(".foot_cont").removeClass("shw_sib");
        }
        })
    })
});

//faq tabs

$(document).ready(function(){
    $(".faq_row .faq_lft .faq_in .faq_hd").click(function(){
        $(this).siblings().slideToggle("slow"),
        $(this).parent().toggleClass("active"),
        $(this).parents(".faq_lft").siblings().find(".faq_cnt").slideUp("slow");
        $(this).parent().siblings().find('.faq_cnt').slideUp("slow"),
        $(this).parents(".faq_lft").siblings().find(".faq_in").siblings().removeClass("active");
        $(this).parent().siblings().removeClass("active");
    })
}) 

//toggle between grid-view and list-view
$(document).ready(function(){
    $("button#list-view").on("click", function () {
        $("button#grid-view").removeClass("on");
        $("button#list-view").addClass("on");
        $("div.grid-view").addClass("list");
      });
    $("button#grid-view").on("click", function () {
        $("button#list-view").removeClass("on");
        $("button#grid-view").addClass("on");
        $("div.grid-view").removeClass("list");
      });
});

$(document).ready(function(){
    $(".sub_trip ul li .check_field p span").click(function(){
        $(this).toggleClass("active");
        $(this).parents(".check_field").siblings(".submnu_trip").slideToggle("slow");
        $(this).parents("li").siblings().find(".submnu_trip").slideUp("slow");
        $(this).parents("li").siblings().find("span").removeClass("active");
    })
});

// Accomodation overview side toggle
    $(document).ready(function () {
        $('.ao_tog').on('click', function() {
            $(".ao_overlay").addClass("ao_open");
            $('body').addClass('noscroll');
        });
        // Remove classes when clicking close btn
        $('.ao_closebtn').on('click', function() {
            $(".ao_overlay").removeClass("ao_open");
            $('body').removeClass('noscroll');
        });
    });

//  Trip overview side toggle
    $(document).ready(function () {
        $('.trip_tog').on('click', function() {
            $(".trip_overlay").addClass("trip_open");
            $('body').addClass('noscroll');
        });
        // Remove classes when clicking close btn
        $('.trip_closebtn').on('click', function() {
            $(".trip_overlay").removeClass("trip_open");
            $('body').removeClass('noscroll');
        });
    });
// custom travel pg cus_zo block carousel
    $(document).ready(function(){
        $('#zo_carousel').owlCarousel({
            loop: true,           
            margin: 20,          
            nav: false,  
            items: 4.5,         
            dots: false,          
            autoplay: true,     
            autoplayTimeout: 5000, 
            autoplayHoverPause: true,
            responsive:{
                0: {
                    items: 1     
                },
                320:{
                    items:1.15
                },
                380:{
                    items:1.3
                },
                441: {
                    items: 1.7     
                },
                552: {
                    items: 2   
                },
                610:{
                    items:2.2
                },
                690:{
                    items:2.5
                },
                800: {
                    items:3
                },
                950:{
                    items:3.5
                },
                1105:{
                    items:4
                },
                1250:{
                    items:4.5
                }
                
            }
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const videoElement = document.querySelector('.vid_bg');
        const playPauseButton = document.querySelector('.video-control');
        const parentDiv = document.querySelector('.bek_lft_img');
        const thumbnailImage = document.querySelector('.thumbnail_img');
    
        // Only add event listeners if the elements exist
        if (playPauseButton && videoElement && parentDiv && thumbnailImage) {
            // Function to toggle play/pause and class handling
            function togglePlayPause() {
                playPauseButton.classList.toggle('playing');
                if (playPauseButton.classList.contains('playing')) {
                    videoElement.play();
                    parentDiv.classList.add('video_playing');
                    thumbnailImage.classList.add('hidden'); // Hide the image using a class
                } else {
                    videoElement.pause();
                    parentDiv.classList.remove('video_playing');
                    thumbnailImage.classList.remove('hidden'); // Show the image using a class
                }
            }
    
            // Click event on play/pause button
            playPauseButton.addEventListener('click', () => {
                togglePlayPause(); // Toggle play/pause when clicking the button
            });
    
            // Click event on the thumbnail image
            thumbnailImage.addEventListener('click', () => {
                togglePlayPause(); // Toggle play/pause when clicking the image
            });
    
            // Click event on the video itself to pause/play
            videoElement.addEventListener('click', () => {
                togglePlayPause(); // Toggle play/pause when clicking the video
            });
    
            // When the video ends, reset button and class
            videoElement.addEventListener('ended', () => {
                playPauseButton.classList.remove('playing');
                parentDiv.classList.remove('video_playing');
                thumbnailImage.classList.remove('hidden'); // Show the image when the video ends
            });
        }
    });
    
    $(document).ready(function(){
        $('#imp_carousel').owlCarousel({
            loop: true,           
            margin: 20,          
            nav: true,  
            items: 5,         
            dots: false,          
            autoplay: true,     
            autoplayTimeout: 5000, 
            autoplayHoverPause: true,
            responsive:{
                0:{
                    items:1
                },
                300:  {
                    items: 1.2     
                },
                375:{
                    items:1.4
                },
                450:{
                    items:1.7
                },
                500: {
                    items:2     
                },
                600:{
                    items: 2.3
                },
                650:{
                    items: 2.5
                },
                680:{
                    items: 2.7
                },
                740:{
                    items: 3
                },
                800: {
                  items: 3.3, 
                },
                880: {
                  items: 3.6
                },
                950:{
                    items:3.8
                },
                1000: {
                    items: 4
                },
                1200:{
                    items: 4.5
                },
                1400:{
                    items: 5
                }
            }
        })
    }) 
    $(document).ready(function(){
        $('#dag_carousel').owlCarousel({
            loop: true,           
            margin: 20,          
            nav: true,  
            items: 5,         
            dots: false,          
            autoplay: true,     
            autoplayTimeout: 5000, 
            autoplayHoverPause: true,
            responsive:{
                0:{
                    items:1
                },
                300:  {
                    items: 1.2     
                },
                375:{
                    items:1.4
                },
                450:{
                    items:1.7
                },
                500: {
                    items:2     
                },
                600:{
                    items: 2.3
                },
                650:{
                    items: 2.5
                },
                680:{
                    items: 2.7
                },
                740:{
                    items: 3
                },
                800: {
                  items: 3.3, 
                },
                880: {
                  items: 3.6
                },
                950:{
                    items:3.8
                },
                1000: {
                    items: 4
                },
                1200:{
                    items: 4.5
                },
                1301:{
                    items: 5
                }
            }
        })
    }) 
  $(document).ready(function(){
    $('#wat_carousel').owlCarousel({
        loop: true,           
        margin: 15,          
        nav: false,  
        items: 6,         
        dots: false,          
        autoplay: true,     
        autoplayTimeout: 5000, 
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1.8
            },
            380:{
                items:2.5
            },
            400:{
                items:3
            },
            600:{
                items:3.3
            },
            795:{
                items:3.5
            }
        }
    })
})  

    // toggle class for input type date
    $(document).ready(function () {
        var dateInputs = document.querySelectorAll('.ad_blk .ad_top .ad_img .ad_cnt .frm_inp label input[type=date]');
        dateInputs.forEach(function(e) {
          console.log(e);
          e.addEventListener('input', function() {
            const selectedDate = e.value;
            
            if (selectedDate) {
              e.classList.add('has-value');
            } else {
              e.classList.remove('has-value');
            }
          });
        });
      });