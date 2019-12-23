Vue.component("bodypart", {
  template: "#bodypart",
  props: ['type', 'height', 'width', 'lenght'],
  data: function() {
    return {
      count: 0
    };
  },
  methods: {
    down: function(event) {
      if(this.count > 0) {
        this.count--;
        event.target.parentElement.lastChild.disabled = false;
        event.srcElement.nextElementSibling.children[this.count + 1].setAttribute('style', 'opacity: 0');
        event.srcElement.nextElementSibling.children[this.count].setAttribute('style', 'opacity: 1');

        if(this.count == 0) {
          event.target.disabled = true;
        }
      }

      console.log('Down ' + this.type + ', Item Nr.' + this.count);
    },
    up: function(event) {
      if(this.count < this.lenght - 1) {
        this.count++;
        event.target.parentElement.firstChild.disabled = false;
        event.srcElement.previousElementSibling.children[this.count - 1].setAttribute('style', 'opacity: 0');
        event.srcElement.previousElementSibling.children[this.count].setAttribute('style', 'opacity: 1');

        if(this.count == this.lenght - 1) {
          event.target.disabled = true;
        }
      }

      console.log('Up ' + this.type + ', Item Nr.' + this.count);
    }
  }
});

new Vue({ el: "#women" });
