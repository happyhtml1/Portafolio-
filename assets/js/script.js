$(document).ready(function() {

  $(function() {

    $("a").click(function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var gato = this.hash;
        var diferencial = 0;

        if (gato == '#bla'){
          diferencial = 80
        }

        if (gato == '#experiencia'){
          diferencial = 80
        }

        if (gato == '#trabajosdeclase'){
          diferencial = 80
        }

        $('html, body').animate({
          scrollTop: $(gato).offset().top - diferencial
        }, 800, function() {
        });
      }
    });
  });

  $(function() {
    $('[data-toggle="tooltip"]').tooltip()
  });


});
