$(function () {
    $('form').bind('submit', function () {

        var contactName = $('#contact-name').val();
        var contactEmail = $('#contact-email').val();
        var contactMessage = $('#contact-message').val();
        // data validation code here
        var url = "//docs.google.com/forms/d/16S1tuPQY_g0atfjLNnGxv5vyo3BiWThXoYchwOArXy0/formResponse";
        var data = {
            'entry.1144255508': contactName,
            'entry.476355214': contactEmail,
            'entry.1239377501': contactMessage,
        };
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
            statusCode: {
                0: function() {
                    console.log("unknown");
                    $('#formulier').hide();
                    $('#form_error').show();
                    // window.location.href = "contact_confirm/index.html";
                },
                200: function() {
                    console.log("success");
                    $('#formulier').hide();
                    $('#form_success').show();
                    // window.location.href = "contact_confirm/index.html";
                }
            }
        });


        return false;
    });
});
