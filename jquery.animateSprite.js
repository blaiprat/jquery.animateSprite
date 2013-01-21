$(function(){

  $.fn.animateSprite = function(parameters){
    
    // @author: Blai Pratdesaba <hello@blaipratdesaba.com>

    // parameters:
    // columns, number of columns of the sprite sheet
    // totalFrames, number of frames of the animation
    // duration, miliseconds
    // complete, callback called when the function is completed

    // TODOS:
    // - The plugin doesn't chain correctly $
    // - This only works with the first element
    // - Extend options instead of the mess we have right now

    //init values
    var animation = {
      frame: 1,
      currentFrame: 1
    };


    parameters = (parameters !== undefined ) ? parameters : {};
    animation.target = $(this[0]);
    animation.width = (animation.target !== undefined ) ? $(animation.target).width() : 0;
    animation.height = (animation.target !== undefined ) ? $(animation.target).height() : 0;
    animation.totalFrames = (parameters.totalFrames !== undefined ) ? parameters.totalFrames : 1;
    animation.columns = (parameters.columns !== undefined ) ? parameters.columns : 10;
    animation.duration = (parameters.duration !== undefined ) ? parameters.duration : 2000;
    animation.complete = (parameters.complete !== undefined && typeof(parameters.complete) === "function") ? parameters.complete : function(){};
    animation.loop = (parameters.loop !== undefined ) ? parameters.loop : false;

    animation.updateAnimation = function(ev){

      // executing the code only when needed
      if ( this.currentFrame !== Math.ceil(ev)){

        var row, column;
        this.currentFrame = Math.ceil(ev);

        row = Math.floor(this.currentFrame / this.columns);
        column = this.currentFrame % this.columns;

        //changing background
        this.target.css("background-position", (-animation.width * column) +'px '+  (-animation.height * row) + 'px');
      }
    };

    var fAnimation = function(){
      $(animation).animate({
        frame: animation.totalFrames
      }, {
        duration: animation.duration,
        easing: 'linear',
        step: animation.updateAnimation,
        complete: function(e){
          animation.updateAnimation(e);
          if (animation.loop === true) {
            this.frame = 0;
            fAnimation();
          } else  {
            animation.complete();
          }
        }
      });
    };
    fAnimation();

    
    return this;
  };

});