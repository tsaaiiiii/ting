$(".all").click(function(){
    var x = $(this).siblings("p")
    //x=被點擊的兄弟階層p
        if( x.css("display") == "none"  ){
          x.slideDown(); 
          
        }else{
          x.slideUp();
          
           
        };
    });
    $(".all2").click(function(){
        var x = $(this).siblings("p")
        //x=被點擊的兄弟階層p
            if( x.css("display") == "none"  ){
              x.slideDown(); 
              
            }else{
              x.slideUp();
              
               
            };
        });
        $(".all3").click(function(){
            var x = $(this).siblings("p")
            //x=被點擊的兄弟階層p
                if( x.css("display") == "none"  ){
                  x.slideDown(); 
                  
                }else{
                  x.slideUp();
                  
                   
                };
            });

    
    


    var clicks = 2;
    let clickTimes = 0;
    // let clickAns = clickTimes==0;
    $('.all').click(function() {
        if (clickTimes === 0){
        // first click
            $(".plus").hide();
            $(".minus").show();
            clickTimes+=1;
        } else if(clickTimes === 1){
        // second click
            $(".plus").show();
            $(".minus").hide();
            clickTimes-=1;
        }
        
    });

    var clicks2 = 2;
    let clickTimes2 = 0;
    // let clickAns = clickTimes==0;
    $('.all2').click(function() {
        if (clickTimes === 0){
        // first click
            $(".plus2").hide();
            $(".minus2").show();
            clickTimes+=1;
        } else if(clickTimes === 1){
        // second click
            $(".plus2").show();
            $(".minus2").hide();
            clickTimes-=1;
        }
        
    });

    var clicks3 = 2;
    let clickTimes3 = 0;
    // let clickAns = clickTimes==0;
    $('.all3').click(function() {
        if (clickTimes === 0){
        // first click
            $(".plus3").hide();
            $(".minus3").show();
            clickTimes+=1;
        } else if(clickTimes === 1){
        // second click
            $(".plus3").show();
            $(".minus3").hide();
            clickTimes-=1;
        }
        
    });


   