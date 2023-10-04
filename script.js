var s=document.getElementsByClassName("drum");
for(var i=0;i<s.length;i++){
    s[i].addEventListener("click",function (){
        var buttonToPlay=this.innerHTML;
        switch(buttonToPlay){
            case "w":
                var audio=new Audio("tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio=new Audio("tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio=new Audio("tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio=new Audio("tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio=new Audio("crash.mp3");
                audio.play();
                break;
            case "k":
                var audio=new Audio("kick-bass.mp3");
                audio.play();
                break;
            case "l":
                var audio=new Audio("snare.mp3");
                audio.play();
                break;
            default:
                break;
        }
        buttonAnimation(buttonToPlay);
        
    });
}
//
document.addEventListener("keydown",function(event){
    var keypressed=event.key;
    switch(keypressed){
        case "w":
            var audio=new Audio("tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("crash.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("snare.mp3");
            audio.play();
            break;
        default:
            
            break;
    }
    buttonAnimation(keypressed);

});
function buttonAnimation(a){
    var activeButton=document.querySelector("."+a);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
