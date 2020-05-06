
$(window).ready(()=>{
    startPlaying()
    stopPlaying()
    $('.rules').hide()
    $('#help').click(()=>{
        $('.rules').toggle(3000)
    })
})
var start =$('#start')
var stop =$('#stop')
var zombie1 =$('.zombie1')
var zombie2 =$('.zombie2')
var zombie3 =$('.zombie3')
let timer =$('.timer')
var points =$('.points')

const me = $('.me')

var time1 = $('.time1')
var time2 = $('.time2')
var time3 = $('.time3')


var point1 =$('.point1')
var point2 =$('.point2')
var point3 =$('.point3')

const startPlaying=()=>{
    start.on('click', ()=>{
        zombieMovement()
        timeMovement()
        pointsMovement()
        meMovement()
        setInterval(timerFunction,1000)
        let min =0
        let sec =0; let pointsP =0
        function timerFunction() {
           sec++
           if(sec==59){
               if(sec%9==0){
                   pointsP+=10;
                   points.html(pointsP +": points")
               }
               sec =0
               min++
               timer.html(min+':' +sec)
           }else if(sec<59){
               if(sec%9==0){
                   pointsP+=10;
                   points.html(pointsP +": points")
               }
               timer.html('00:' +sec)
           } 
        }
    })
}
const stopPlaying=()=>{

}
const zombieMovement =()=>{
    // zombie 1
    var width =Math.round((Math.random()*1000)%100)
    var height = Math.round((Math.random()*100)%100)
    var params={left: width+'%', top: height+'%'}
    zombie1.animate(params, 3000)
    // zombie 2
    var width =Math.round((Math.random()*100)%100)
    var height = Math.round((Math.random()*100)%100)
    var params={left: width+'%', top: height+'%'}
    zombie2.animate(params, 3000)
    // zombie 3
    var width =Math.round((Math.random()*100)%100)
    var height = Math.round((Math.random()*100)%100)
    var params={left: width+'%', top: height+'%'}
    zombie3.animate(params, 3000)
}
window.document.addEventListener('keydown', (event)=>{
        var down =(event.key=='ArrowDown')?'ArrowDown': null;
        var up =(event.key=='ArrowUp')?'ArrowUp': null;
        var right =(event.key=='ArrowRight')?'ArrowRight': null;
        var left =(event.key=='ArrowLeft')?'ArrowLeft': null;
        var l=0, t=0,i=0;
        if(event.key=down){
            t+=50;
            var paramsP={ top: t+'%'}
            me.animate(paramsP)
        }else if(event.key=left){
             l-=0
             var paramsP={ left: l+'%'}
             me.animate(paramsP)
        }else if(event.key=right){
            l+=40
            var paramsP={ left: l+'%'}
            me.animate(paramsP)
        }else if(event.key=up){
            t-=0
            var paramsP={ top: t+'%'}
            me.animate(paramsP)
        }else{
            return
        }
 })
 

const meMovement=()=>{
    
}
const pointsMovement=()=>{
    // point 1
    var width =Math.round((Math.random()*1000)%100)
    var height = Math.round((Math.random()*100)%100)
    var params={left: width+'%', top: height+'%'}
    point1.animate(params, 5000)
    // point 2
    var width =Math.round((Math.random()*100)%100)
    var height = Math.round((Math.random()*100)%100)
    var params={left: width+'%', top: height+'%'}
    point2.animate(params, 5000)
    // point 3
    var width =Math.round((Math.random()*100)%100)
    var height = Math.round((Math.random()*100)%100)
    var params={left: width+'%', top: height+'%'}
    point3.animate(params, 5000)
}

const timeMovement=()=>{
    // time 1
    var width =Math.round((Math.random()*1000)%100)
    var height = Math.round((Math.random()*100)%100)
    var params={left: width+'%', top: height+'%'}
    time1.animate(params, 5000)
    // time 2
    var width =Math.round((Math.random()*100)%100)
    var height = Math.round((Math.random()*100)%100)
    var params={left: width+'%', top: height+'%'}
    time2.animate(params, 5000)
    // time 3
    var width =Math.round((Math.random()*100)%100)
    var height = Math.round((Math.random()*100)%100)
    var params={left: width+'%', top: height+'%'}
    time3.animate(params, 5000)
}