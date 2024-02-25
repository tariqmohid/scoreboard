const homeScoreEl = document.getElementById("hscore-el")
const guestScoreEl = document.getElementById("gscore-el")
const periodScoreEl = document.getElementById("pscore-el")
const homeFoulEl = document.getElementById("hfoul-el")
const guestFoulEl = document.getElementById("gfoul-el")

let hscore = 0;
let gScore = 0;
let pScore = 0;
let hFoul = 0;
let gFoul = 0;

function highlight(){

    if(hscore>gScore){
        homeScoreEl.style.border = "solid 2px yellow"
        guestScoreEl.style.border = "none"
    }else if(gScore>hscore){
        guestScoreEl.style.border = "solid 2px yellow"
        homeScoreEl.style.border = "none"
    }else if(hscore===gScore){
        homeScoreEl.style.border = "solid 4px white"
        guestScoreEl.style.border = "solid 4px white"
    }else{
        homeScoreEl.style.border = "none"
        guestScoreEl.style.border = "none"
    }
}


function incremHomeOne(){
    
    hscore++
    homeScoreEl.textContent = hscore
    highlight()
}
function incremHomeTwo(){
    hscore+=2
    homeScoreEl.textContent = hscore
    highlight()
}
function incremHomeThree(){
    hscore+=3
    homeScoreEl.textContent = hscore
    highlight()
}


function incremGuestOne(){
    gScore++
    guestScoreEl.textContent = gScore
    highlight()
}
function incremGuestTwo(){
    gScore+=2
    guestScoreEl.textContent = gScore
    highlight()
}
function incremGuestThree(){
    gScore+=3
    guestScoreEl.textContent = gScore
    highlight()
}

function incremPeriod(){
    pScore++
    periodScoreEl.textContent = pScore
}

function incremHomeFoul(){
    hFoul++
    homeFoulEl.textContent = hFoul
}
function incremGuestFoul(){
    gFoul++
    guestFoulEl.textContent = gFoul
}

