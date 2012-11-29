jquery.animateSprite
====================

Animating sprites using jQuery made easy

How to use it
-------------

1. Create an HTML Block Element (aka DIV) and define its width and height exactly as the with and height of the sprite. 

2. Put the sprite file as a background image. 

3. Call the plugin. Example:

```javascript 
	$(".sprite").animateSprite({
		columns: 10,
		totalFrames: 20,
		duration: 2000, 
		loop: true,
		complete: function(){
			alert("Sprite animation complete!");
		}
	})
```	

##### Options
```javascript
	columns: 		"int" the number of columns the sprite sheet has, default 10
	totalFrames:	"int" number of frames the animation has
	duration:		"int" time to complete the animation, in milliseconds
	complete:		"function" called after the animation has finished (not called if is loop)
	loop:			"bool" if the animation has to loop
```