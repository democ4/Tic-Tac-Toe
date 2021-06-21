
const Game = (function(){
    let container={
        "O":[],
        "X":[]
    };
    let alert = document.querySelector("#alert");
    alert.style.webkitAnimationPlayState = "paused";
    let slot = document.querySelectorAll(".slot");
    let winCondition = [123,456,789,147,258,369,159,357];
       //   123 456  789   147 258 369  159 357        
    let checkWhoWins=function(newMark){
      //  if (container[newMark]  )//has   1 of 8 conp )    val = some  != undefined
           let val =winCondition.find(winnumber => winnumber.toString().split("").every(isincontainerMark));
            function isincontainerMark(a){
                 return container[newMark].includes(a)    
            }

            if(val  != undefined) winner(newMark);
            else if (container["O"].length+container["X"].length ==9)  draw();
    }
    let winner = function(Mark){
        winnerAlert(`player ${Mark} win`);
        slot.forEach(element => {element.removeEventListener("click",mark)})
    }
    let draw= function(){
        console.log("draw")
    }
    let winnerAlert=function(winner){
        alert.innerText = winner ;
        alert.style.webkitAnimationPlayState = "running";
       
    }
    let mark = function(){

        alert.classList="alert";
            if(this.innerText != "O" &&this.innerText!="X"){
                let newMark= turns.changesideandSet();
                container[newMark].push(this.id.replace(/[^0-9]/g,''));
                console.log(container[newMark]);
                this.innerText =newMark;
                checkWhoWins(newMark);
        } 
    }
    slot.forEach(element => {
            element.addEventListener("click",mark); 
            });

         let reset=function(){
            container={
                "O":[],
                "X":[]
            };
            slot.forEach(element=>{element.innerText=""
            element.addEventListener("click",mark); 
            alert.style.webkitAnimationPlayState = "paused";
            
            alert.classList="";
            alert.style.opacity =0;
            alert.style.zIndex= -1;

        })
            
            turns.changesideandSet();
         }   
         
         let turns = (function(){
               let playermark = "O";
               let changesideandSet = function(){
                  (playermark=="O") ? playermark ="X":playermark = "O";
                  return (playermark=="O") ?"X":"O";
               }   
               console.log("turns check")
              return {
                  changesideandSet    
             }
        })()
            return {
                reset
            }
})()
const reset=function(){
        Game.reset();
}