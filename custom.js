// 霸都丶傲天 2019.10.10
$(function () {
    let dom = document.createElement("span");
    config.texts.forEach(function (item) {
        let p = document.createElement("p");
        p.innerHTML = item;
        if (config.imgs && config.imgs[item]) {
            let img = document.createElement("img");
            img.src = config.imgs[item];
            img.setAttribute("class", 'text-img');
            p.appendChild(img);
        }
        dom.appendChild(p);
    });
    $("#texts-container").append(dom.innerHTML);
});

$(function () {
    for (let k in config.desc) {
        let dom = $("#" + k);
        if (dom.length > 0 && config.desc[k]) {
            dom.html(config.desc[k]);
        }
    }
});

$(function () {
    $('#goahead').on('click', function () {
        // Hide the goahead button
        $('#goahead-container').fadeOut();

        // Scale up the image
        $('#castle-image').addClass('scale-up');

        // After the animation, show the choices
        setTimeout(function () {
            $('#choice-container').css('display', 'flex').hide().fadeIn();
            document.getElementById('shui-audio').play();
        }, 1600); // A bit after the transform animation ends
    });

    // Placeholder for choice button clicks
    $('.choice-btn').on('click', function () {
        userChoices.choice = $(this).text();
        // alert("你选择了: " + $(this).text());
        // Here you can decide what to do next, for example, start the birthday animation
        $('#choice-container').fadeOut();
        $('#castle-image').fadeOut(function () {
            $('.castle-container').remove();
        });
        $('.container').fadeIn('fast');
    });

    $('#play').on('click', function () {
        $('#music-choice-container').css('display', 'flex').hide().fadeIn();
    });

    $('.music-choice-btn').on('click', function () {
        let choice = $(this).text();
        userChoices.music = choice;
        let audio;
        switch (choice) {
            case '恋个爱':
                audio = document.getElementById('gzqs-audio');
                break;
            case '许个愿':
                audio = document.getElementById('fcl-audio');
                break;
            case '纯过个生日':
                audio = document.getElementById('hbd-audio');
                break;
            case '拆个炸弹盒':
                audio = document.getElementById('hdl-audio');
                break;
        }
        if (audio) {
            audio.play();
        }
        $('#music-choice-container').fadeOut();
        $('#play').fadeOut('slow').delay(600).promise().done(function () {
            $('#bannar_coming').fadeIn('slow');
        });
    });
});

const userChoices = {
    choice: null,
    light: null,
    music: null,
    balloons: null
};