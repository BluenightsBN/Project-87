var canvas = new fabric.Canvas(`myCanvas`)

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image , function(Img)  
	
	


	 
	 {

        block_image_object = Img ;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
       
           top:block_y,
           left:block_x
		});
		canvas.add(block_image_object);// to upload images
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image(`rr1.png`);
		console.log("RED RANGER , r");// upload red ranger
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image(`gr.png`);
		console.log("GREEN RANGER , g");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image(`yr.png`);
		console.log("YELLOW RANGER , y");// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		new_image(`pr.png`);
		console.log("PINK RANGER , p")	;
	
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image(`br.png`);
		console.log("BLUE RANGER , b");
	}
}


