 Carousel = Backbone.View.extend({
        events: {
          'click .carousel-prev': 'prev',
          'click .carousel-next': 'next',
          'click .toggle':        'toggle'
        },
        initialize: function(options) {
          _.bindAll(this);
          this.defaultDelay = options.defaultDelay;
          this.items = _.map(this.$('.carousel-item').hide(), function(i) { return i; });
          this.current = 0;
        },
        render: function() {
          this.$el.append($(this.items[this.current]).show());
          return this;
        },
        prev: function() {
          if (this.nextRotationID) {
            clearTimeout(this.nextRotationID);
            this.nextRotationID = setTimeout(this.doNextRotation, this.delay);
          }
          this.rotateLeft();
        },
        rotateLeft: function() {
          $(this.items[this.current]).fadeOut(function() {
            this.$('.carousel-item').hide();
            this.current = this.current - 1;
            if (this.current === -1) { this.current = this.items.length - 1 }
            $(this.items[this.current]).fadeIn();
          }.bind(this));
        },
        next: function() {
          if (this.nextRotationID) {
            clearTimeout(this.nextRotationID);
            this.nextRotationID = setTimeout(this.doNextRotation, this.delay);
          }
          this.rotateRight();
        },
        rotateRight: function() {
          $(this.items[this.current]).fadeOut(function() {
            this.$('.carousel-item').hide();
            this.current = this.current + 1;
            if (this.current === this.items.length) { this.current = 0 }
            $(this.items[this.current]).fadeIn();
          }.bind(this));
        },
        doNextRotation: function() {
          this.rotateRight();
          this.nextRotationID = setTimeout(this.doNextRotation, this.delay);
        },
        toggle: function() {
          if (this.delay) {
            this.stopRotating();
            this.$('.toggle').text('Start');
          } else {
            this.startRotating(this.defaultDelay);
            this.$('.toggle').text('Stop');
          }
        },
        startRotating: function(delay) {
          if (!this.delay) {
            this.delay = delay;
            this.nextRotationID = setTimeout(this.doNextRotation, this.delay);
          }
        },
        stopRotating: function() {
          if (this.nextRotationID) {
            clearTimeout(this.nextRotationID);
          }
          this.delay = null;
        }
      });
      var carousel = new Carousel({el: '#my-carousel', defaultDelay: 2000}).render();
      //carousel.startRotating(2000);