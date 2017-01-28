MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    $('[class*="UFILikeLink"]').hide();
    $("._ipp").hide();

    // find notification flyout
    var notifFlyout = $("#fbNotificationsFlyout")
    if(notifFlyout.length !=0 )
    {
        notifFlyout.find("ul").find("li").each(
            function(index){
                var likeNotif = '"notif_type":"like"';
                var likeTaggedNotif = '"notif_type":"like_tagged"';
                var reactionNotif = '"notif_type":"feedback_reaction_generic"';

                if($(this).attr("data-gt").indexOf(likeNotif) >=0 ||
                    $(this).attr("data-gt").indexOf(likeTaggedNotif) >=0 ||
                    $(this).attr("data-gt").indexOf(reactionNotif) >=0
                    )
                {
                    $(this).hide();
                }
            }
        );
    }
});

// start observing subtree modifications for the entire document
observer.observe(document, {
  subtree: true,
  childList: true
});
