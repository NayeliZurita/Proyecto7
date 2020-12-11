

var sketchProc = function(processingInstance){
    with(processingInstance){
    	size(400,400)
    	frameRate(80);
    	var num = random(0,4);
		var answer = round(num);
		background(177, 175, 250);
		fill(8, 8, 8);
		ellipse(207, 200, 356, 350);
		fill(60, 0, 255);
		triangle(200, 104, 280, 280, 120, 280);
		fill(0, 0, 0);
	    textSize(20);
	    textAlign(LEFT, CENTER);
	    var f = createFont("fantasy");
	    textFont(f);
	    text("¡ Dame Click !",2 , 22);
    	mouseClicked= function (){
    		if(mouseClicked ){
    			num = random(0, 4);
        		answer = round(num);
        		fill(8, 8, 8);
			    ellipse(207, 200, 356, 350);
			    fill(60, 0, 255);
				triangle(200, 104, 280, 280, 120, 280);
			    textSize(15);
			            if (answer === 0) {
			               textAlign(CENTER,CENTER);
			               fill(255, 255, 255);
					       text("No \nIntenta de nuevo", 200, 200);
			            }else if (answer === 1) {
			                textAlign(LEFT, CENTER);
			                fill(255, 255, 255);
					        text("Tal Vez",176,200);
			            }else if (answer === 2) {  
			                textAlign(CENTER, CENTER);
			                fill(255, 255, 255);
					        text("Si",200,200); 
			            }else if (answer === 3) {
			                fill(255, 255, 255);
			                textAlign(LEFT, CENTER);
			                text("Posiblemente",162,200);
			            }else if (answer === 4) {
			                fill(255, 255, 255);
			                textAlign(LEFT, CENTER);
			                text("Nunca",178,200 );
			            }
    	}
    };
}
};

var canvas = document.getElementById("mycanvas");
var processing = new Processing(canvas, sketchProc);