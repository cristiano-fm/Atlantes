var n = 0;
var ids = ['#show-1', '#show-2', '#show-3']

$("#arrow-up").click( function(){
    if( n == 0){
        n=2;
    } else{
        n--;
    }
    console.log(n);
    var i;
    for (i = 0; i < ids.length; i++) {
        if(i == n){
            $(ids[i]).show();
        } else{
            $(ids[i]).hide();
        }
    }
  });

  $("#arrow-down").click( function(){
    if(n == ids.length -1){
        n=0;
    } else{
        n++;
    }
    var i;
    for (i = 0; i < ids.length; i++) {
        if(i == n){
            $(ids[i]).show();
        } else{
            $(ids[i]).hide();
        }
    }
    
  });