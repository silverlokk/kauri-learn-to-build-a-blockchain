//function StopWatch() {

	var startTime = null;
	var stopTime  = null;
	var running   = false;

	function start() {
		if (running)
			return;
		else if (startTime != null)
			stopTime = null;
		
		running = true;    
		startTime = getTime();
	}
	
	function stop(){
	   
		if (!running)
			return;    
		
		stopTime = getTime();
		running = false;
	}
	
	function duration(){
		if (startTime == null || stopTime == null)
			return 'Undefined';
		else
			return (stopTime - startTime) / 1000;
	}
	
	this.isRunning = function() { return running; }
	
	function getTime(){
		var day = new Date();
		return day.getTime();
	}

	module.exports= {
		start, 
		stop, 
		duration}
//}
