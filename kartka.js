

// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom({"debug": "true"});

loadSprite("kartka","tlo.png")
loadSprite("sanie","sanie.png")

loadSound("muzyka","cicha_noc.mp3")

add([
    sprite("kartka")
])

const sanie= add([
    sprite("sanie"),
    pos(50,150)
])

let wprawo=true

sanie.onUpdate(() => {

    if(wprawo && sanie.pos.x <600){
        sanie.pos.x += 1
        debug.log(wprawo)
    }
    

    else if(!wprawo && sanie.pos.x >0){
        sanie.pos.x -= 1
        debug.log(wprawo)
    }
    
    else wprawo ^= true
})

onMouseRelease(()=>play("muzyka"))