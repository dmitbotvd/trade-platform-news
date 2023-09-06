function priceSlider() {
    let $range = $("#customRange3"),
        $inputFrom = $(".price-range-from"),
        $inputTo = $(".price-range-to"),
        instance,
        min = $inputFrom.data('price-min'),
        max = $inputTo.data('price-max'),
        from = $inputFrom.val() ? $inputFrom.val(): min,
        to = $inputTo.val() ? $inputTo.val(): max;
    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: from,
        to: to,
        onStart: firstUpdateInputs,
        onChange: updateInputs,
        onFinish: ajax_slider,
        grid: false,             // show/hide grid
        drag_interval: true,
        force_edges: true,     // force UI in the box
        hide_min_max: true,    // show/hide MIN and MAX labels
        hide_from_to: false,    // show/hide FROM and TO labels
        block: false,           // block instance from changing
    });
    instance = $range.data("ionRangeSlider");
    function updateInputs(data) {
        from = data.from;
        to = data.to;
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }
    function firstUpdateInputs(data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }
    $inputFrom.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
        val = min;
        } else if (val > to) {
        val = to;
        }
        instance.update({
        from: val
        });
        ajax_slider();
    });
    $inputTo.on("change", function () {
        var val = $(this).prop("value");
        // validate
        if (val < from) {
        val = from;
        } else if (val > max) {
        val = max;
        }
        instance.update({
        to: val
        });
        ajax_slider();
    });
    function ajax_slider() {
        return false;
    };
}
function dateInit(){
    $('#datepicker').datepicker({
        format: 'mm.dd.yyyy',
    });
}
$(document).ready(function(){
    priceSlider();
    dateInit();
})
