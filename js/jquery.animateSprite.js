/* jQuery.animateSprite
* http://blaiprat.github.io/jquery.animateSprite/
*
* Copyright (c) 2013 Blai Pratdesaba  <hello@blaipratdesaba.com>, contributors
* Licensed under the MIT license.
*/
(function($) {

    var methods = {
        init: function(options){

            return this.each(function(){
                var $this = $(this),
                    data  = $this.data('animateSprite');

                if ( !data ){
                    $this.data('animateSprite', {
                        settings: $.extend({
                            width: $this.width(),
                            height: $this.height(),
                            totalFrames: 10,
                            columns: 10,
                            duration: 2000,
                            complete: function(){},
                            loop: false,
                            autoPlay: true
                        }, options),
                        currentFrame: 0,
                        controlAnimation: function(){
                            $this.animateSprite("frame", data.currentFrame);
                            this.currentFrame++;
                            if ( this.currentFrame >= this.settings.totalFrames ){
                                if ( this.settings.loop === true ){
                                    this.currentFrame = 0;
                                } else {
                                    this.settings.complete();
                                    clearInterval(this.interval);
                                }
                            }
                        }
                    });

                    data = $this.data('animateSprite');

                    data.interval = setInterval(function(){
                        data.controlAnimation();
                    }, data.settings.duration / data.settings.totalFrames);

                }

            });
                // if ( settings.autoPlay === true){
                //   fireAnimation();
                // }
        },
        frame: function(frameNumber){
            // frame: number of the frame to be displayed
            return this.each(function(){
                var $this = $(this),
                    data  = $this.data('animateSprite'),
                    row = Math.floor(frameNumber / data.settings.columns),
                    column = frameNumber % data.settings.columns;

                $this.css("background-position", (-data.settings.width * column) +'px '+  (-data.settings.height * row) + 'px');

            });
        },
        stopAnimation: function(){
            return this.each(function(){
                var $this = $(this),
                    data  = $this.data('animateSprite');
                clearInterval(data.interval);
            });
        },
        resumeAnimation: function(){
            return this.each(function(){
                var $this = $(this),
                    data  = $this.data('animateSprite');

                // always stop animation to prevent overlapping intervals
                $this.animateSprite("stopAnimation");

                data.interval = setInterval(function(){
                    data.controlAnimation();
                }, data.settings.duration / data.settings.totalFrames);
            });
        },
        restartAnimation: function(){
            return this.each(function(){
                var $this = $(this),
                    data  = $this.data('animateSprite');

                $this.animateSprite("stopAnimation");

                data.currentFrame = 0;
                data.interval = setInterval(function(){
                    data.controlAnimation();
                }, data.settings.duration / data.settings.totalFrames);
            });
        }
    };

    $.fn.animateSprite = function(method){

        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.animateSprite' );
        }

    };

})(jQuery);