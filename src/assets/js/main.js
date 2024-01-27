document.addEventListener( 'DOMContentLoaded', function() {
    var howWeWorkSlide = new Splide( '#howWeWorkSlide' , {
        type   : 'loop',
        perPage: 3,
        breakpoints: {
            767: {
              perPage: 2,
          
            },
            640: {
              perPage: 1,
        
            },
        },
        gap: 55,
        classes: {
            arrows: 'splide__arrows custom_arrows',
            arrow : 'splide__arrow your-class-arrow',
            prev  : 'splide__arrow--prev custom_arrows_prev',
            next  : 'splide__arrow--next custom_arrows_next',
      },
    });
    var lastestArtcleSlide = new Splide( '#lastestArtcleSlide' , {
        type   : 'loop',
        perPage: 4,
        breakpoints: {
            1024: {
              perPage: 3,
             
            },
            767: {
              perPage: 2,
          
            },
            640: {
              perPage: 1,
        
            },
        },
        gap: 55,
        classes: {
            arrows: 'splide__arrows custom_arrows',
            arrow : 'splide__arrow your-class-arrow',
            prev  : 'splide__arrow--prev custom_arrows_prev',
            next  : 'splide__arrow--next custom_arrows_next',
      },
    });
    howWeWorkSlide.mount();
    lastestArtcleSlide.mount();

    // 
    // MENU
    // 
    document.querySelector('#menu-toggle').addEventListener('click', function() {
        document.getElementById('headerMenu').classList.toggle('active');
    });

    document.querySelector('main').addEventListener('click', function() {
        document.getElementById('headerMenu').classList.remove('active');
    });


    // 
    // VIDEO
    // 

    // เมื่อคลิกที่ปุ่มเปิด popup
    document.querySelector('#openPopupButton').addEventListener('click', function() {
        
        // แสดง popup
        document.getElementById('youtubePopup').style.display = 'block';

        // ดึงค่า video ID จาก URL ของ YouTube ที่ต้องการเล่น
        var videoId = 'DVTRklHhEsU';

        // ให้ iframe ใน popup เล่นวิดีโอจาก YouTube
        document.getElementById('youtubeIframe').src = 'https://www.youtube.com/embed/' + videoId+'?&autoplay=1';
    });

    // เมื่อคลิกที่ปุ่มปิด popup
    document.getElementById('youtubePopupWrapper').addEventListener('click', function() {
        // ซ่อน popup
        document.getElementById('youtubePopup').style.display = 'none';

        // หยุดเล่นวิดีโอ
        document.getElementById('youtubeIframe').src = '';
    });
} );