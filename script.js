let letcontnum = 0;
let idcount = 0;
let mcount = 0;
let basics = ["᎐", "᎓", "᎒", "᎑", "᎔", "᎕", "᎖", "᎗", "᎘", "᎙"];
let ihita = ["፴", "ቡበ", "ፔር", "ዓይ", "ዕለ", "ጸጋ", "ነድ", "ቡር", "ገጾ", "ኃዘ"];
let seregela = ["ቤሠ", "እም", "ናሠ", "ኃሠ", "በጎ", "አሠ", "በደሠ", "ፀሠ", "ንዜሠ", "መሠ", "ሪት"];;
let others = ["ር", "ርስ", "ስ","ወር", "ዕጠ", "አመ", "መረ", "ሳ", "ታ", "ሣ", "ምዘ", "ሲሄ", "ሲመ","ረዩ", "ጨበ", "ግድ", "አያ", "ላ", "ጣ", "ጨፍ", "ወዝ", "ሰቀ", "ሰር", "ንዛ"];
let tirikeza = ["ቤተ", "ናተ", "ኃተ", "አተ", "በደተ", "ፀተ","ዓተ"];
let milikits = { basics, ihita, seregela, tirikeza, others };
var selectedSpanId;
var text;
var milikitcate = {
    basics: 'ምልክቶች',
    ihita: 'ጉረሮ መጠበቂያ',
    seregela: 'ሠረገላዎች',
    tirikeza: 'ትርከዛ',
    others: 'ሌሎች'
};
$(document).ready(function () {
    text = " " + getParameterByName('text');
    console.log(text)
    updateBox();
    $("#addStackBtn").on("click", function () {
        addStack();
    });


    var milikitsContainer = $('#milikits-container');

    var milikitsHTML = generateMilikitsHTML(milikits);

    milikitsContainer.html(function (index, oldHtml) {
        return milikitsHTML + oldHtml;
    });

    $('.letter').on('click', function () {

        selectedSpanId = $(this).attr('id');
        console.log(selectedSpanId + " here")
    });
    $('#tripledown').on('click', function () {
        var content = "᎔";

        let selectedSpan = $("#" + selectedSpanId);
        var existingContent = selectedSpan.text();
        if (existingContent === '\xa0') {

            //existingContent = "";
        } else {

            var childrenOuterHTML = selectedSpan.children().map(function () {
                return this.outerHTML;
            }).get().join('');
            existingContent = childrenOuterHTML;
        }
        var finaltext = existingContent + '<span id="displayArea"> <span class="stack">᎔</span><span class="stack">᎔</span><span class="stack">᎔</span> </span>';


        selectedSpan.html(finaltext);

    });
    $('#tripleup').on('click', function () {
        var content = "᎔";

        let selectedSpan = $("#" + selectedSpanId);
        var existingContent = selectedSpan.text();
        if (existingContent === '\xa0') {

            //existingContent = "";
        } else {

            var childrenOuterHTML = selectedSpan.children().map(function () {
                return this.outerHTML;
            }).get().join('');
            existingContent = childrenOuterHTML;
        }
        var finaltext = existingContent + '<span id="displayArea"> <span class="stack">᎑</span><span class="stack">᎑</span><span class="stack">᎑</span> </span>';


        selectedSpan.html(finaltext);

    });
    $('#doubledown').on('click', function () {
        var content = "᎔";

        let selectedSpan = $("#" + selectedSpanId);
        var existingContent = selectedSpan.text();
        if (existingContent === '\xa0') {

            //existingContent = "";
        } else {

            var childrenOuterHTML = selectedSpan.children().map(function () {
                return this.outerHTML;
            }).get().join('');
            existingContent = childrenOuterHTML;
        }
        var finaltext = existingContent + '<span id="displayArea"><span class="stack">᎔</span><span class="stack">᎔</span> </span>';


        selectedSpan.html(finaltext);

    });
    $('#doubleup').on('click', function () {
        var content = "᎔";

        let selectedSpan = $("#" + selectedSpanId);
        var existingContent = selectedSpan.text();
        if (existingContent === '\xa0') {

            //existingContent = "";
        } else {

            var childrenOuterHTML = selectedSpan.children().map(function () {
                return this.outerHTML;
            }).get().join('');
            existingContent = childrenOuterHTML;
        }
        var finaltext = existingContent + '<span id="displayArea"><span class="stack">᎑</span><span class="stack">᎑</span> </span>';


        selectedSpan.html(finaltext);

    });
    $('#updown').on('click', function () {
        var content = "᎔";

        let selectedSpan = $("#" + selectedSpanId);
        var existingContent = selectedSpan.text();
        if (existingContent === '\xa0') {

            //existingContent = "";
        } else {

            var childrenOuterHTML = selectedSpan.children().map(function () {
                return this.outerHTML;
            }).get().join('');
            existingContent = childrenOuterHTML;
        }
        var finaltext = existingContent + '<span id="displayArea"><span class="stack">᎔</span><span class="stack">᎑</span> </span>';


        selectedSpan.html(finaltext);

    });
    $('.milikititem').on('click', function () {

        var content = $(this).find('span').text();
        let selectedSpan = $("#" + selectedSpanId);
        var existingContent = selectedSpan.text();

        if (existingContent === '\xa0') {

            //existingContent = "";
        } else {

            var childrenOuterHTML = selectedSpan.children().map(function () {
                return this.outerHTML;
            }).get().join('');
            existingContent = childrenOuterHTML;
        }

        var finaltext;
        let wrappedcontent;
        var elementClasses = $(this).find('span').attr('class');
        var classArray = elementClasses.split(' ');


        if (containsElementFromArray(content, basics)) {
            //  wrappedcontent = '<span class="' + classArray[1] + '">' + content.trim() + '</span>'
            content = content.trim()

        } else {

            //    wrappedcontent = '<span class="' + classArray[1] + '">' + content + '</span>'


        }

        wrappedcontent = '<span class="' + classArray[1] + '">' + content + '</span>'
        finaltext = existingContent + wrappedcontent;

        selectedSpan.html(finaltext);

    });




});
function containsElementFromArray(str, arr) {
    return arr.some(function (element) {
        return str.includes(element);
    });
}
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function updateBox() {
    // var text = $("#textInput").val();

    var container = $("#container");
    container.empty();

    for (var i = 0; i < text.length; i++) {
        var letterContainer = $('<div  class="letter-container" id="letter-container' + (i) + '"></div>');
        var basetext;
        var letter;
        if (text[i] === " ") {
            basetext = 0;
            letter = $('<span  class="baseletter whitespace">' + basetext + '</span>');
        } else {
            basetext = text[i];
            letter = $('<span  class="baseletter">' + basetext + '</span>');

        }



        var space = $('<span  id="space' + (idcount) + '" class="letter">&nbsp;</span> ');


        letterContainer.append(space);
        letterContainer.append(letter);
        container.append(letterContainer);
        idcount++;
    }
    $('#toggleButton').click(function () {

        $('#container').toggleClass('borders-on borders-off');
        var buttonText = $(this).text() === 'Hide grid' ? 'Show grid' : 'Hide grid';
        $(this).text(buttonText);
    });
    $('#captureButton').click(function () {
        // Select the target div by its ID
        var targetDiv = document.getElementById('container');

        // Use html2canvas to capture the screenshot
        html2canvas(targetDiv).then(function (canvas) {
            // Convert the canvas to a data URL
            var imageDataURL = canvas.toDataURL('image/png');

            // Create a link element to download the image
            var downloadLink = document.createElement('a');
            downloadLink.href = imageDataURL;
            downloadLink.download = 'screenshot.png';

            // Trigger a click on the link to initiate the download
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    });
}
function addStack() {
    var letterContainer;
    var space;
    for (var i = 0; i < text.length; i++) {
        letterContainer = $("#letter-container" + i);
        space = $('<span id="space' + (idcount) + '" class="letter">&nbsp;</span>');
        idcount++;
        letterContainer.prepend(space);
    }
    $(".letter").on({
        click: function () {
            selectedSpanId = $(this).attr('id');
            console.log(selectedSpanId + " here")
        }
    });
    $('#captureButton').click(function () {
        // Select the target div by its ID
        var targetDiv = document.getElementById('yourTargetDivId');

        // Use html2canvas to capture the screenshot
        html2canvas(targetDiv).then(function (canvas) {
            // Convert the canvas to a data URL
            var imageDataURL = canvas.toDataURL('image/png');

            // Create a link element to download the image
            var downloadLink = document.createElement('a');
            downloadLink.href = imageDataURL;
            downloadLink.download = 'screenshot.png';

            // Trigger a click on the link to initiate the download
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    });

};
// Function to generate HTML content for milikits
function generateMilikitsHTML(data) {
    var htmlContent = '';


    $.each(data, function (title, content) {
        var visibletitle

        if (milikitcate.hasOwnProperty(title))
            // If it exists, assign its value to the title variable
            visibletitle = milikitcate[title];
        else
            visibletitle = title
        // Add array title as h6
        htmlContent += '<h4 class="milikit-title"><strong>' + visibletitle + '</strong></h4>';

        // Add each array element as a span with id 'milikit'
        $.each(content, function (index, element) {

            if (title === "basics") {
                title = title + " basicmilkit";
            }
            htmlContent += '<button  class="milikititem" ><span class="milikit ' + title + '" id="milikititem' + (mcount) + '"   >' + element + '</span></button>';
            mcount++;
        });
    });

    return htmlContent;
}


