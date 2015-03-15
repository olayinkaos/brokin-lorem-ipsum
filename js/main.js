window.load = function () {

};

var maxLength = 5,
    color = ['red' , 'purple', 'green', 'blue', 'violet', 'orange', 'indigo'];
var lorem = [];
lorem[0] = "Waaka Awuuff Palle Xerox Aba-made Na-beanz Xerox Bad-belle Maga, Cabu-cabu Yab Sabi-sabi Dabaru O-b-o E be as e " +
            "get Tabon Faaji Lai lai to lai lai. Gaj H-factor I beg Quanta J-j-c Vamoosh Zanga Razz Una. Xerox Bad-belle Maga Cabu-cabu " +
            "Yab Sabi-sabi Waaka Awuuff Palle Xerox Aba-made Na-beanz Xerox Bad-belle. ";

lorem[1] = "Haba wetin Na-so Wassap Baddo Malle Waka Howfar, Na-smalls dubs lungu ShiSha Larondo Bobo Craze Dey Shey Koni-koni Gree Carry-go " +
            "Am not a Hooligans Acata Caff Galavant Danga Lasgidi Bad-belle. Hala Casala Kack Ode Maja Runz Sand-sand Tanda Under-say Wafi Yakata " +
            "Zombie Acada Agaracha Denge pose Hold belle Jaga-jaga Mami-water Na wash Tear rubber. ";

lorem[2] = "Maga Cabu-cabu Yab Sabi-sabi Dabaru O-b-o E be as e Wassap Baddo. Malle Waka Howfar Na-smalls Bobo Craze Dey Shey Koni-koni  " +
            "get Tabon Faaji Lai lai to lai lai Gaj H-factor I beg Quanta J-j-c Tabon Faaji Lai lai, Oduimitete How bodi Shakara" +
            "Galavant Danga Lasgidi Bad-belle Hala Casala Kack Ode Maja Runz Paraga Naija Nack Hammer Vila Dommot";

lorem[3] = "Dorobuchi Lai lai to lai lai Gaj H-factor, I beg Quanta J-j-c Vamoosh Zanga Razz Una. Xerox Bad-belle Maga Cabu-cabu" +
            "Tabon Faaji Lai lai to lai lai Gaj H-factor I beg Quanta Xerox Bad-belle Faaji Lai lai Oduimitete. How bodi Shakara" +
            "wetin Na-so Wassap Baddo Malle Waka Howfar, Na-smalls dubs lungu ShiSha Larondo Bobo Craze Dey Shey Konji.";


function makeBrokin(id) {
    _(id).innerHTML = "";
    var howmany= document.getElementById('numberOf').value,
        colored = _('colorizeSelect').checked,
        random = 0,
        randColor,
        loremText = "";

    for (var i = 0; i < howmany; i++) {
        random = randomize(lorem.length);
        if (colored) {
            randColor = color[randomize(color.length)];
        }
        loremText += '<span style="color:'+ randColor + '">';
        loremText += lorem[random] + "<br><br>";
        if (colored) loremText += "</span>";
        _(id).innerHTML = loremText;
    }
    var test = "hebh vkhjbvhvb khbvkrdhrbvk kjgbrkdhjbr kjrtkhvbkitr";
    var test2 = test.substring(0, 12);
    //alert(test2);
    //var split = lorem[0].split(" ");
}

// Helper functions
function _(id) {
    return document.getElementById(id);
}
function randomize (length) {
    return Math.floor(Math.random() * length);
}