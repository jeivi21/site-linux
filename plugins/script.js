$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#historia",
        triggerHook: 0.6
    })
    .setClassToggle("#historia", "show")
    .addTo(controller);
});
