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
    SetupNewsletterSubscribe("d8f1e40a-8720-4345-8417-995a36a241d1", "Dealotto", "subForm", function () {
        // Do stuff here when it's done!
        var newsLetter = jQuery(".newsletter-inside");
        var htmlToInsert = '<h2><i class="fa fa-check-circle-o"></i> Thanks for subscribing!</h2>';

        newsLetter.find("h2").replaceWith(htmlToInsert);
        newsLetter.find("form").hide();
    });
});