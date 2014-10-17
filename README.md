jquery.animateSprite
====================

Animating sprites using jQuery made easy

Release notes
-------------
**1.3.5** Fix image cache problem on IE7/8.

**1.3.4** Fixed a problem when switching from one animation to a new one the new one wouldn't play.

**1.3.3** Added `autoplay: false` to prevent the animation from playing from the start

**1.3.2** Calling `$(".scott").animateSprite('play', 'walkLeft')` will restart the animation from the first frame.

**1.3.1** Fixed `loop: false` failing to remove timer.

**1.3.0** Added support for bower. You can install now the plugin using `bower install animatesprite`. Fixed a leak when removing the DOM element, and added a new method to change FPS.

**1.2.0** Added animations. Use multiple animations in one single file and call. Even with this new system, scripts that were done targeting an old version of jQuery.animateSprite should work with this one. If that's not the case please raise an issue.

**1.1.5** Updated the plugin to have the MIT license.

**1.1.3** Added a fancy page to explain the plugin (http://blaiprat.github.com/jquery.animateSprite). Renamed 'showFrame' to 'frame'

**1.1** Refacotred the plugin. Added new methods so it's easier to control what the plugin is doing. Also now it chains correctly and controls multiple jquery objects instead of one

**1.0** Initial release

How to use it
-------------

1. If you have  [Bower](http://bower.io/) installed, you can use `bower install animatesprite` to install the plugin. 

2. Create an HTML Block Element (DIV) and define its width and height exactly as the with and height of the sprite.

3. Put the sprite file as a background image.

4. Call the plugin. Use 'animations' to store multiple animations, setting the correct keyframe per each one. By default, jQuery.animateSprite will use the first defined and will start playing the animation.

Example:
--------

```javascript
    $('.sprite').animateSprite({
        fps: 12,
        loop: true,
        animations: {
            walk: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            run: [14, 13, 12, 11, 10, 9]
        },
        complete: function(){
            alert('Sprite animation complete!');
        }
    })
```

##### Options
```javascript
    columns:        int     // the number of columns the sprite sheet has, default 10
    fps:            int     // define animation speed
    duration:       int     // time to complete the animation, in milliseconds (overrides fps)
    complete:       function // called after the animation has finished (not called if loop is set to true)
    loop:           bool    // if the animation has to loop
    autoplay:       bool    // if the animation starts inmedately
    animations:     object  // Contains multiple animations.
                            // The key should be the name of the animation,
                            // and the value should be an array with the frames.
```

##### Methods
```javascript
    $('object').animateSprite('play', 'animation name')     plays the specified animation
    $('object').animateSprite('stop')           stops the animation
    $('object').animateSprite('resume')         continues the animation from the point where it was stopped
    $('object').animateSprite('restart')        starts the animation from the beginning
    $('object').animateSprite('frame', n)       displays the frame number 'n'
    $('object').animateSprite('fps', n)         changes the speed of the animation to 'n' frames per second

```
