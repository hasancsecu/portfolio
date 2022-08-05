$(function () {

    var isMobile;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;

        // Mobile height fix
        $('.height-fix').each(function () {
            var h = $(this).height();
            $(this).height(h);
        });
    }

    // Sticky Nav on Mobile
    if (isMobile) {
        $('nav').addClass('fixed');
    } else {
        $('nav').addClass('desk');
    }


    // NAV POSITION
    var navPos = $('nav').position().top;
    var lastPos = 0;
    var lockTimer;

    $(window).on('scroll', function () {

        var pos = $(window).scrollTop();
        var pos2 = pos + 50;
        var scrollBottom = pos + $(window).height();

        if (!isMobile) {
            if (pos >= navPos + $('nav').height() && lastPos < pos) {
                $('nav').addClass('fixed');
            }
            if (pos < navPos && lastPos > pos) {
                $('nav').removeClass('fixed');
            }
            lastPos = pos;
        }

        // Link Highlighting
        if (pos2 > $('#home').offset().top) {
            highlightLink('home');
        }
        if (pos2 > $('#about').offset().top) {
            highlightLink('about');
        }
        if (pos2 > $('#portfolio').offset().top) {
            highlightLink('portfolio');
        }
        if (pos2 > $('#contact').offset().top ||
            pos + $(window).height() === $(document).height()) {
            highlightLink('contact');
        }

        // Prevent Hover on Scroll
        clearTimeout(lockTimer);
        if (!$('body').hasClass('disable-hover')) {
            $('body').addClass('disable-hover');
        }

        lockTimer = setTimeout(function () {
            $('body').removeClass('disable-hover')
        }, 500);
    });

    function highlightLink(anchor) {
        $('nav .active').removeClass('active');
        $("nav").find('[dest="' + anchor + '"]').addClass('active');
    }


    // EVENT HANDLERS
    $('.page-link').click(function () {
        var anchor = $(this).attr("dest");
        $('.link-wrap').removeClass('visible');

        $('nav span').removeClass('active');
        $("nav").find('[dest="' + anchor + '"]').addClass('active');

        $('html, body').animate({
            scrollTop: $('#' + anchor).offset().top
        }, 400);
    });

    $('.mdi-menu').click(function () {
        $('.link-wrap').toggleClass('visible');
    });

    // GALLERY
    $('#gallery').mixItUp({});

    function mixClear() {
        setTimeout(function () {
            $('#gallery').removeClass('waypoint');
        }, 2000);
    }

    // SCROLL ANIMATIONS
    function onScrollInit(items, elemTrigger) {
        var offset = $(window).height() / 1.6;
        items.each(function () {
            var elem = $(this),
                animationClass = elem.attr('data-animation'),
                animationDelay = elem.attr('data-delay');

            elem.css({
                '-webkit-animation-delay': animationDelay,
                '-moz-animation-delay': animationDelay,
                'animation-delay': animationDelay
            });

            var trigger = (elemTrigger) ? trigger : elem;

            trigger.waypoint(function () {
                elem.addClass('animated').addClass(animationClass);
                if (elem.get(0).id === 'gallery') mixClear(); //OPTIONAL
            }, {
                triggerOnce: true,
                offset: offset
            });
        });
    }

    setTimeout(function () {
        onScrollInit($('.waypoint'));
    }, 10);

    // CONTACT FORM
    var form_id = "contact-form";

    var data = {
        "access_token": "fwlx8vffx2iu3sxij7er3aus" // sent after you sign up
    };

    function onSuccess() {
        $('#success').addClass('expand');
        sendButton.val('SUBMIT');
        $('#contact-form').find("input[type=text], input[type=email], textarea").val("");
    }

    function onError(error) {
        $('#fail').addClass('expand');
        sendButton.val('SUBMIT');
        $('#contact-form').find("input[type=text], input[type=email], textarea").val("");
    }

    var sendButton = $("#" + form_id + " [name='send']");

    function send() {
        var email
        var name = $("#" + form_id + " [name='name']").val();
        var subject = $("#" + form_id + " [name='subject']").val();
        var message = $("#" + form_id + " [name='text']").val();
        if (document.getElementById("email").value.includes('@')) {
            email = true;
        } else {
            email = false;
        }

        if (name && email && message) {
            sendButton.val('SENDING...');
            sendButton.prop('disabled', true);

            data['subject'] = subject;
            data['text'] = 'Name: ' + name + '\n' + 'Message: ' + message;

            $.post('https://postmail.invotes.com/send',
                data,
                onSuccess
            ).fail(onError);

            return false;
        }
    }

    sendButton.on('click', send);

    var $form = $("#" + form_id);
    $form.submit(function (event) {
        event.preventDefault();
    });

    $('#closeS').click(function () {
        $('#success').removeClass('expand');
        location.reload();
    });

    $('#closeF').click(function () {
        $('#fail').removeClass('expand');
        location.reload();
    });

});
