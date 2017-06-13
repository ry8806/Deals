function SetupNewsletterSubscribe(publicAccountId, listName, formId, onSuccess) {
    var eeUrl = "https://api.elasticemail.com/v2/contact/add";
    var email = jQuery("#email-input");

    var form = jQuery("#" + formId).submit(function (event) {
        event.preventDefault();
        jQuery.post(eeUrl, {
            email: email.val(),
            publicAccountId: publicAccountId,
            listName: listName
        }, function () { }, "json").done(function (result) {
            if (result.success == true) {
                onSuccess();
            }
        }).fail(function () {

        });
    });
};
jQuery(function () {
    SetupNewsletterSubscribe("6a3e2a93-cbf9-4048-ae56-6132b066a181", "Function", "email-form", function () {
        // Do stuff here when it's done!
        jQuery(".shade, .modal").removeClass("show");
    });

    jQuery("#show-modal").click(function () {
        jQuery(".shade, .modal").addClass("show");
    });

    jQuery(".form, .modal").find(".close").click(function () {
        jQuery(".shade, .modal").removeClass("show");
    });
});