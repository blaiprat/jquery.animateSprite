jquery.animateSprite
====================

Animating sprites using jQuery made easy

Release notes
-------------
**1.2.0** Added animations. Use multiple animations in one single file and call.

**1.1.5** Updated the plugin to have the MIT license.

**1.1.3** Added a fancy page to explain the plugin (http://blaiprat.github.com/jquery.animateSprite). Renamed 'showFrame' to 'frame'

**1.1** Refacotred the plugin. Added new methods so it's easier to control what the plugin is doing. Also now it chains correctly and controls multiple jquery objects instead of one

**1.0** Initial release

How to use it
-------------

1. Create an HTML Block Element (DIV) and define its width and height exactly as the with and height of the sprite.

2. Put the sprite file as a background image.

3. Call the plugin.

Example:
--------

```javascript
	$('.sprite').animateSprite({
		fps: 12,
		loop: true,
		animations: {
			walk: [0, 1, 2, 3, 4, 5, 6, 7, 8],
			run: [9, 10, 11, 12, 13, 14]
		},
		complete: function(){
			alert('Sprite animation complete!');
		}
	})
```

##### Options
```javascript
	columns: 		int // the number of columns the sprite sheet has, default 10
	totalFrames:	int // number of frames the animation has
	duration:		int // time to complete the animation, in milliseconds
	complete:		function // called after the animation has finished (not called if is loop)
	loop:			bool // if the animation has to loop
```

##### Methods
```javascript
	$('object').animateSprite('play', 'animation name')		plays the specified animation
	$('object').animateSprite('stop')			stops the animation
	$('object').animateSprite('resume')			continues the animation from the point where it was stopped
	$('object').animateSprite('restart')		starts the animation from the beginning
	$('object').animateSprite('frame', n)		displays the frame number 'n'

```