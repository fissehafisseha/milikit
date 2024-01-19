let letcontnum = 0;
let idcount = 0;
let mcount = 0;
let highlightedspan = "";
let basics = ["᎐", "᎓", "᎒", "᎑", "᎔", "᎖", "᎗", "᎘", "᎙", "l", "᎕"];
let ihita = ["ቡበ", "ፔር", "ዓይ", "ዕለ", "ጸጋ", "ነድ", "ቡር", "ገጾ", "ኃዘ"];
let seregela = ["ቤሠ", "እምሠ", "ናሠ", "ኃሠ", "በጎ", "አሠ", "በደሠ", "ፀሠ", "ንዜሠ", "መሠ", "ሪትሠ", "እግሠ"];;
let others = ["በዚ", "ሙ", "ር", "ርስ", "ስ", "ወር", "ዕጠ", "አመ", "መረ", "ሳ", "ታ", "ሣ", "ምዘ", "ሲሄ", "አጋ", "ሲመ", "ረዩ", "ጨበ", "ግድ", "አያ", "ላ", "ጣ", "ጨፍ", "ወዝ", "ሰቀ", "ሰር", "ንዛ", "ኬ", "ዚ", "ቡ", "ዙ", "ሖ", ""];
let tirikeza = ["ቤተ", "ናተ", "ኃተ", "አተ", "በደተ", "ፀተ", "ዓተ"];
let added = ["፴", "፩", "፪", "T", "፬", " "];

let milikits = { basics, ihita, seregela, tirikeza, others, added };
var selectedSpanId;
var text;
var milikitcate = {
    basics: 'ምልክቶች',
    ihita: 'ጉረሮ መጠበቂያ',
    seregela: 'ሠረገላዎች',
    tirikeza: 'ትርከዛ',
    others: 'ሌሎች',
    added: ""
};
let redtext = false;
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
        removeGlow();
        addGlow(selectedSpanId);
    });
    $('#tripledown').on('click', function () {
        var content = "᎔";

        let selectedSpan = $("#" + selectedSpanId);
        let existingContent;
        if (existingContent === '\xa0') {

            //existingContent = "";
            // existingContent = selectedSpan.text();
        } else {

            //var childrenOuterHTML = selectedSpan.children().map(function () {
            //return this.outerHTML;
            //     }).get().join('');
            existingContent = selectedSpan.html();
        }
        let color = redtext ? "red" : "black";
        var finaltext = existingContent + '<span  style="color:' + color + '; display:flex; flex-direction: column;"><span class="basics" >᎔</span><span style="margin-top: -1rem; position:absolute;" class="basics">᎔</span><span style="margin-top: -2rem; position:absolute;" class="basics">᎔</span></span>&hairsp;';


        selectedSpan.html(finaltext);

    });
    $('#tripleup').on('click', function () {
        var content = "᎔";

        let selectedSpan = $("#" + selectedSpanId);
        let existingContent;
        if (existingContent === '\xa0') {

            //existingContent = "";
            // existingContent = selectedSpan.text();
        } else {

            //var childrenOuterHTML = selectedSpan.children().map(function () {
            //return this.outerHTML;
            //     }).get().join('');
            existingContent = selectedSpan.html();
        }
        let color = redtext ? "red" : "black";
        var finaltext = existingContent + '<span style="color:' + color + '; display:flex; flex-direction: column;"><span class="basics" >᎑</span><span style="margin-top: -1rem; position:absolute;" class="basics">᎑</span><span style="margin-top: -2rem; position:absolute;" class="basics">᎑</span></span>&hairsp;';


        selectedSpan.html(finaltext);

    });
    $('#doubledown').on('click', function () {
        var content = "᎔";

        let selectedSpan = $("#" + selectedSpanId);
        let existingContent;
        if (existingContent === '\xa0') {

            //existingContent = "";
            // existingContent = selectedSpan.text();
        } else {

            //var childrenOuterHTML = selectedSpan.children().map(function () {
            //return this.outerHTML;
            //     }).get().join('');
            existingContent = selectedSpan.html();
        }
        let color = redtext ? "red" : "black";
        var finaltext = existingContent + '<span style="color:' + color + '; display:flex; flex-direction: column;"><span class="basics" >᎔</span><span style="margin-top: -1rem; position:absolute;" class="basics">᎔</span></span>&hairsp;';


        selectedSpan.html(finaltext);

    });
    $('#doubleup').on('click', function () {
        var content = "᎔";

        let selectedSpan = $("#" + selectedSpanId);
        let existingContent;
        if (existingContent === '\xa0') {

            //existingContent = "";
            // existingContent = selectedSpan.text();
        } else {

            //var childrenOuterHTML = selectedSpan.children().map(function () {
            //return this.outerHTML;
            //     }).get().join('');
            existingContent = selectedSpan.html();
        }
        let color = redtext ? "red" : "black";
        var finaltext = existingContent + '<span style="color:' + color + '; display:flex; flex-direction: column;"><span class="basics" >᎑</span><span style="margin-top: -1rem; position:absolute;" class="basics">᎑</span></span>&hairsp;';


        selectedSpan.html(finaltext);

    });
    $('#downup').on('click', function () {
        var content = "᎔";

        let selectedSpan = $("#" + selectedSpanId);
        let existingContent;
        if (existingContent === '\xa0') {

            //existingContent = "";
            // existingContent = selectedSpan.text();
        } else {

            //var childrenOuterHTML = selectedSpan.children().map(function () {
            //return this.outerHTML;
            //     }).get().join('');
            existingContent = selectedSpan.html();
        }
        let color = redtext ? "red" : "black";
        var finaltext = existingContent + '<span style="color:' + color + '; display:flex; flex-direction: column;"><span  class="basics">᎑</span><span style="margin-top: -1rem; position:absolute;" class="basics">᎔</span></span>&hairsp;';


        selectedSpan.html(finaltext);

    });
    $('#updown').on('click', function () {
        var content = "᎔";

        let selectedSpan = $("#" + selectedSpanId);
        let existingContent;
        if (existingContent === '\xa0') {

            //existingContent = "";
            // existingContent = selectedSpan.text();
        } else {

            //var childrenOuterHTML = selectedSpan.children().map(function () {
            //return this.outerHTML;
            //     }).get().join('');
            existingContent = selectedSpan.html();
        }
        let color = redtext ? "red" : "black";
        var finaltext = existingContent + '<span style="color:' + color + '; display:flex; flex-direction: column;"><span  class="basics">᎔</span><span style="margin-top: -1rem; position:absolute;" class="basics">᎑</span></span>&hairsp;';


        selectedSpan.html(finaltext);

    });

    $('.milikititem').on('click', function () {

        var content = $(this).find('span').text();
        let selectedSpan = $("#" + selectedSpanId);
        let existingContent;
        var b = selectedSpan.html();

        if (existingContent === '\xa0') {

            //  existingContent = "";
            // existingContent = selectedSpan.text();
        } else {

            //var childrenOuterHTML = selectedSpan.children().map(function () {
            //return this.outerHTML;
            //     }).get().join('');
            // existingContent = childrenOuterHTML;;
            existingContent = selectedSpan.html();
        }

        var finaltext;
        let wrappedcontent;
        var elementClasses = $(this).find('span').attr('class');
        var classArray = elementClasses.split(' ');

        let color = redtext ? "red" : "black";
        if (containsElementFromArray(content, basics)) { content = content.trim() }
        let space = '&hairsp;';
        let editable = 'contenteditable = "false"';
        // contenteditable="false" 
        if (classArray[1] == "added" || classArray[1] == "basics") {
             editable = "";
             space = '';
        }
        wrappedcontent = '<span ' + editable + '  style="color:' + color + ';" class="' + classArray[1] + '">' + content + '</span>' + space + ''
        finaltext = existingContent + wrappedcontent;

        selectedSpan.html(finaltext);

    });


    $('#whitespace').on('click', function () {
        alert("rgarwee")
        console.log("brrrr")
        $(this).html('<br>');
    
    });

});
function containsElementFromArray(str, arr) {
    return arr.some(function (element) {
        return str.includes(element);
    });
}
function removeGlow() {
    if (highlightedspan != "") {
        $('#container').find('#' + highlightedspan).removeClass('highlight');
    }
}
function addGlow(selectedSpanId) {
    $('#container').find('#' + selectedSpanId).addClass('highlight');
    highlightedspan = selectedSpanId;
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
        if (buttonText === "Show grid") {
            removeGlow();
        }
        else if (buttonText === "Hide grid") { addGlow(selectedSpanId); }

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
    $('#togglecolor').click(function () {
        redtext = !redtext;

        // $('#container').toggleClass('red-on red-off');
        var buttonText = $(this).text() === 'Red milikit' ? 'Black milikit' : 'Red milikit';
        $(this).text(buttonText);
    });
}
function addStack() {
    var letterContainer;
    var space;
    var color = "";
    for (var i = 0; i < text.length; i++) {
        letterContainer = $("#letter-container" + i);
        space = $('<span   style="margin-bottom: -1rem;' + color + '" id="space' + (idcount) + '" class="letter">&nbsp;</span>');
        idcount++;
        letterContainer.prepend(space);
    }
    $('.letter').on('click', function () {
        selectedSpanId = $(this).attr('id');
        removeGlow();
        addGlow(selectedSpanId);
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


