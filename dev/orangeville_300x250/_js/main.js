function start(){
	TweenLite.defaultEase = Power2.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	const y = 200
	tl.from(".pump", 2, {y:`+=${y}`}, 0)
	tl.from(".road", 2, {y:`+=${y}`}, 0)
	tl.from(".car", 2, {y:`-=${y}`}, 0)
	tl.to(".car", 1.5, {y:`-=${7}`})
	
}

start()


module.exports = {};

