var changedDataO;
var changedColorO;
var changedDataI;
var changedColorI;
var clicked_id = "i-2018";

$('document').ready(function () {
    $("#mainHeader").addClass("himg2");
    //$('#occupation_chart_div').show();
    //$('#industry_chart_div').hide();
    // clicked_id = "o-2018";
    // google.charts.setOnLoadCallback(chart1);

    $('#occupation_chart_div').hide();
    $('#industry_chart_div').show();
    clicked_id = "i-2018";
    google.charts.setOnLoadCallback(chart2);
});

$('#option-one').click(function () {
    $('#occupation_chart_div').hide();
    $('#industry_chart_div').show();
    clicked_id = "i-2018";
    google.charts.setOnLoadCallback(chart2);
});

$('#option-two').click(function () {
    $('#industry_chart_div').hide();
    $('#occupation_chart_div').show();
    clicked_id = "o-2018";
    google.charts.setOnLoadCallback(chart1);
    ///drawChart();
});

function yearClick(event) {
    $("#occupation_chart_div>ul>li.active").removeClass("active");
    $(event.target).parent('li').addClass('active');
    clicked_id = event.target.id;
    google.charts.setOnLoadCallback(chart1);
}

function yearClick2(event) {
    $("#industry_chart_div>ul>li.active").removeClass("active");
    $(event.target).parent('li').addClass('active');
    clicked_id = event.target.id;
    google.charts.setOnLoadCallback(chart2);
}

function changeOccupationData() {
    //console.log(clicked_id == "i-2013",clicked_id);
    if (clicked_id == "i-2013")
        return ([
            ["", "1 to 9 (Hours)", "10 to 19 (Hours)", "20 to 29 (Hours)", "30 to 34 (Hours)", "35 to 39 (Hours)", "40 to 44 (Hours)", "45 to 49 (Hours)", "50 to 59 (Hours)", "60 to 69 (Hours)", "70 or more (Hours)"],
            ["Managers", 135.7422526, 213.0240299, 354.1390592, 325.8440106, 725.2367494, 1145.857549, 610.2573545, 989.4694497, 565.4040337, 512.3781989],
            ["Professionals", 415.3273071, 639.1036446, 1030.697921, 910.190236, 1718.640696, 2193.536816, 888.4338057, 1032.196972, 447.103397, 210.6094354],
            ["Technicians and Trade", 149.4486352, 289.6733387, 493.9752858, 497.0719913, 1301.476501, 1641.143453, 663.4559722, 647.6210045, 333.0067136, 249.81537],
            ["Community and \n Personal\n  Service", 418.9135615, 686.5447669, 831.7439154, 527.2332992, 675.9390414, 543.9686435, 210.0949154, 193.3067108, 77.7639509, 45.0825843],
            ["Clercial and \n Administrative", 395.6678005, 647.1817093, 931.7789699, 660.0000799, 1619.56225, 1240.124044, 340.7021777, 305.6994338, 107.1522967, 52.3432398],
            ["Sales", 579.3526225, 812.5216638, 671.0341729, 343.8881859, 598.046578, 509.4265479, 189.1576172, 204.4847792, 92.5637778, 40.9640693],
            ["Machinery Operators and Drivers", 74.2720537, 143.9281854, 253.1329709, 210.7526774, 560.4290735, 612.0382432, 320.6325755, 324.0701408, 215.6411769, 190.8316952],
            ["Labourers", 522.355839, 644.7925857, 629.8869123, 392.3676956, 700.9057039, 682.4368448, 220.2564724, 224.858935, 112.8784381, 106.6331615]
        ]);
    else if (clicked_id == "i-2014")
        return ([
            ["", "1 to 9 (Hours)", "10 to 19 (Hours)", "20 to 29 (Hours)", "30 to 34 (Hours)", "35 to 39 (Hours)", "40 to 44 (Hours)", "45 to 49 (Hours)", "50 to 59 (Hours)", "60 to 69 (Hours)", "70 or more (Hours)"],
            ["Managers", 157.2784377, 226.8697057, 348.4468191, 368.9545549, 774.869962, 1227.389772, 649.9581066, 983.5556818, 542.4970347, 471.9686991],
            ["Professionals", 458.7808583, 680.643009, 1071.053298, 948.1878681, 1826.257419, 2202.201473, 875.6019361, 1035.758357, 439.4226773, 231.9335629],
            ["Technicians and \n Trade", 176.253583, 319.9436347, 504.958947, 479.5632108, 1322.147074, 1697.764919, 651.2119829, 634.5363987, 346.9548929, 252.4837519],
            ["Community and \n Personal\n  Service", 426.2614455, 668.138399, 861.5852105, 543.23179, 707.7161848, 528.9726413, 224.148467, 174.8233881, 70.2701396, 52.1046976],
            ["Clercial and\n  Administrative", 410.1496141, 655.8498644, 923.1186779, 684.0087297, 1594.803174, 1197.241319, 314.35992, 266.5528404, 82.7260065, 45.1394182],
            ["Sales", 578.6091446, 837.5263078, 681.3927868, 386.2345487, 607.5675549, 533.8529321, 190.8742088, 181.3149946, 79.9197346, 42.7927397],
            ["Machinery Operators\n and Drivers", 75.289528, 149.004932, 237.9416376, 194.8299787, 534.6600531, 590.3767515, 304.3588876, 328.3239865, 214.922311, 171.9885287],
            ["Labourers", 494.5320114, 639.2450594, 671.4283971, 376.69084, 726.0223464, 656.7176154, 223.6201399, 246.7505003, 104.1272134, 97.2822066]
        ]);
    else if (clicked_id == "i-2015")
        return ([
            ["", "1 to 9 (Hours)", "10 to 19 (Hours)", "20 to 29 (Hours)", "30 to 34 (Hours)", "35 to 39 (Hours)", "40 to 44 (Hours)", "45 to 49 (Hours)", "50 to 59 (Hours)", "60 to 69 (Hours)", "70 or more (Hours)"],
            ["Managers", 138.7357923, 210.3501663, 393.7052013, 358.6120684, 791.26024, 1293.129429, 632.4034484, 994.2324306, 548.2206677, 482.277465],
            ["Professionals", 478.7, 708.1, 1175.7, 1027.8, 1883.9, 2324.2, 879.4, 1043.1, 442.3, 242.2],
            ["Technicians and \nTrade", 162.0722521, 319.7997785, 492.6690352, 493.379787, 1307.900606, 1770.777658, 681.9603404, 700.3490999, 324.4314965, 235.9043359],
            ["Community and \n Personal\n  Service", 461.0114661, 728.6795436, 947.104177, 605.4701094, 693.3935406, 554.5624915, 207.7184731, 178.6218025, 80.5402064, 53.8245861],
            ["Clercial and\n  Administrative ", 395.4679849, 645.0699612, 985.450641, 680.9944107, 1566.193565, 1179.68336, 316.7761655, 290.0030832, 110.6262217, 47.6219379],
            ["Sales", 577.2834852, 810.2818621, 723.7918235, 384.7437147, 577.2308802, 567.033163, 182.5345592, 196.9263456, 86.8043345, 53.2692781],
            ["Machinery Operators \n and Drivers", 74.9315238, 129.1649945, 244.314038, 211.872587, 558.5166869, 584.1415256, 276.0517926, 331.250393, 214.0850403, 151.4037591],
            ["Labourers,490.6234315,644.7859137", 657.8031246, 400.6444318, 671.233212, 645.9470454, 230.9688782, 247.1525726, 114.7689182, 82.9854601]
        ]);
    else if (clicked_id == "i-2016")
        return ([
            ["", "1 to 9 (Hours)", "10 to 19 (Hours)", "20 to 29 (Hours)", "30 to 34 (Hours)", "35 to 39 (Hours)", "40 to 44 (Hours)", "45 to 49 (Hours)", "50 to 59 (Hours)", "60 to 69 (Hours)", "70 or more (Hours)"],
            ["Managers", 138.4553144, 225.7411218, 389.6629924, 378.73176, 832.7985312, 1295.407721, 644.6041964, 971.0304998, 558.7570562, 453.0083016],
            ["Professionals", 475.2955119, 741.3347321, 1202.616788, 1022.411861, 2002.31024, 2409.881117, 861.596507, 1035.365479, 425.4930971, 245.283982],
            ["Technicians and Trade", 171.5806818, 297.6951913, 515.9057083, 526.2746126, 1291.957849, 1679.370939, 638.509526, 642.0161311, 354.9023966, 239.5675443],
            ["Community and \nPersonal \n Service", 453.9153145, 790.9890193, 999.7588321, 603.8483279, 753.1724441, 546.2072287, 220.7243514, 206.5821904, 78.4417086, 42.6728621],
            ["Clercial and\n  Administrative", 398.4637037, 675.8436409, 964.1731091, 759.127367, 1577.894689, 1203.971252, 338.4759311, 292.8422053, 94.5663628, 53.4250913],
            ["Sales", 551.6318511, 843.016181, 713.0456959, 381.4558793, 626.6611784, 530.5061592, 175.6953237, 201.7856594, 88.7654956, 39.9095651],
            ["Machinery Operators \nand Drivers", 76.1027382, 170.7118649, 254.059323, 226.0194789, 555.4553893, 546.3373237, 299.272328, 325.6729819, 195.6711544, 152.9739307],
            ["Labourers", 457.6851901, 701.8265735, 735.7595411, 396.1102825, 738.7695796, 687.7342076, 222.9312097, 225.8297406, 121.0347214, 86.7066791]
        ]);
    else if (clicked_id == "i-2017")
        return ([
            ["", "1 to 9 (Hours)", "10 to 19 (Hours)", "20 to 29 (Hours)", "30 to 34 (Hours)", "35 to 39 (Hours)", "40 to 44 (Hours)", "45 to 49 (Hours)", "50 to 59 (Hours)", "60 to 69 (Hours)", "70 or more (Hours)"],
            ["Managers", 135.1463339, 223.5691454, 417.7810211, 397.5664787, 861.146097, 1280.739545, 596.8380255, 952.2697961, 574.7032094, 434.1448495],
            ["Professionals", 500.6578705, 755.7097981, 1230.770357, 1096.142763, 2104.614203, 2593.870212, 883.2303518, 1079.130381, 456.8658887, 223.6960788],
            ["Technicians and Trade", 181.4737172, 307.0484624, 518.9491563, 531.3005538, 1395.375693, 1689.863077, 648.176473, 672.037399, 363.1816633, 239.2317317],
            ["Community and\n Personal \n Service", 482.6309101, 804.0930571, 1007.919902, 641.6710548, 746.6826268, 584.3807487, 241.6408145, 206.4865023, 81.3433217, 40.6635364],
            ["Clercial and\n  Administrative", 365.867336, 639.8303505, 974.8412954, 728.2624674, 1567.838126, 1149.243006, 318.1602107, 286.5358947, 96.7155089, 46.9485672],
            ["Sales", 525.7419211, 825.143849, 750.7812398, 377.6146948, 630.8342272, 551.5638217, 188.833192, 196.8152487, 104.3003657, 49.56041],
            ["Machinery Operators\n and Drivers", 78.2065189, 168.2259625, 259.1865736, 201.9736234, 562.4108701, 572.6689477, 322.7171964, 354.7634173, 208.3302248, 184.0115324],
            ["Labourers", 472.8848309, 711.4769344, 769.4148038, 434.1833412, 750.9728393, 699.5833785, 241.7531018, 265.7509266, 103.6976369, 86.4359785]
        ]);
    else
        return ([
            ["", "1 to 9 (Hours)", "10 to 19 (Hours)", "20 to 29 (Hours)", "30 to 34 (Hours)", "35 to 39 (Hours)", "40 to 44 (Hours)", "45 to 49 (Hours)", "50 to 59 (Hours)", "60 to 69 (Hours)", "70 or more (Hours)"],
            ["Managers", 74.5177279, 119.1041267, 197.74199, 190.2874829, 448.597267, 654.3956235, 322.520223, 482.1489761, 281.3742223, 210.483048],
            ["Professionals", 242.9546516, 373.573076, 641.5746571, 568.0758918, 1157.726303, 1325.836602, 444.3299172, 571.2851437, 215.1353823, 115.6810143],
            ["Technicians \n and Trade", 91.0223375, 165.2842665, 280.0148376, 271.4681392, 721.4454077, 890.8468928, 354.6283861, 345.8872306, 179.8199656, 110.3718036],
            ["Community and\n Personal \n Service", 234.7204492, 390.221594, 525.867152, 324.1349248, 387.6824225, 306.663969, 109.2019381, 95.1638132, 37.4756327, 27.2916031],
            ["Clercial and\n  Administrative", 177.8238407, 302.1916122, 482.6741922, 363.1022029, 805.6085982, 595.3879357, 161.264178, 144.8116463, 42.2334409, 23.4834206],
            ["Sales", 293.4615514, 407.9984825, 400.7596052, 196.2612912, 315.4296655, 265.1430972, 97.7137692, 91.7347188, 42.6158096, 20.468203],
            ["Machinery Operators\n and Drivers", 40.1044781, 91.7670348, 139.2156836, 101.0898143, 301.4433693, 326.8263048, 147.4915298, 186.2961627, 98.6942999, 90.9617705],
            ["Labourers", 249.1103375, 361.8585188, 409.0692106, 224.3901836, 399.5030571, 350.3898583, 109.4132493, 117.0145606, 64.4139521, 56.6239434]
        ]);
}

function changeIndustryData() {
    if (clicked_id == "o-2013")
        return ([
            ["INDUSTRY", "1 to 34 (Hours)", "35 to 39 (Hours)", "40 to 59 (Hours)", "60 or more (Hours)"],
            ["Agriculture, Forestry and Fishing", 361.5, 102.7, 366.5, 317.8],
            ["Mining", 99.2, 144.2, 444.9, 259.5],
            ["Manufacturing", 826.1, 818.8, 1649.4, 226.7],
            ["Electricity, Gas, Water and Waste Services", 123.9, 122.1, 266.2, 38.5],
            ["Construction", 911, 520.8, 1917.2, 455.1],
            ["Wholesale Trade", 395, 347.1, 763.9, 113.2],
            ["Retail Trade", 2421.8, 780.5, 1158.8, 228.3],
            ["Accomodation and Food Services", 1793.9, 324.1, 611.7, 223.2],
            ["Transport, Postal and Warehousing", 593, 374, 982.5, 259.7],
            ["Information Media and Telecommunications", 229.2, 179.4, 322.3, 47.1],
            ["Financial and Insurance Services", 376.2, 372, 741.2, 79.9],
            ["Rental, Hiring and Real Estate Services", 221.7, 130.8, 323.1, 74.9],
            ["Professional, Scientific and Technical Services", 977.4, 579, 1550.7, 332.5],
            ["Administrative and Support Services", 699.4, 239.3, 442.3, 89.8],
            ["Public Administration and Safety", 822.3, 807.4, 1000.9, 99.5],
            ["Education and Training", 1430.4, 600.1, 1124.7, 191.8],
            ["Health Care and Social Assistance", 2550.5, 995.4, 1382.6, 143.2],
            ["Arts and Recreation Services", 397.6, 115.9, 213.4, 54.7],
            ["Other Services", 601.3, 346.4, 670.9, 124.7]
        ]);
    else if (clicked_id == "o-2014")
        return ([
            ["INDUSTRY", "1 to 34 (Hours)", "35 to 39 (Hours)", "40 to 59 (Hours)", "60 or more (Hours)"],
            ["Agriculture, Forestry and Fishing", 394, 115, 396.3, 320.8],
            ["Mining", 95.5, 125.2, 430.3, 218.4],
            ["Manufacturing", 886.1, 850.7, 1561.6, 229.3],
            ["Electricity, Gas, Water and Waste Services", 107.8, 135.1, 256.2, 40.5],
            ["Construction", 919.1, 542.3, 1999.4, 447.8],
            ["Wholesale Trade", 337.2, 325.2, 711.5, 111.6],
            ["Retail Trade", 2443.6, 777.9, 1220.6, 208.3],
            ["Accomodation and Food Services", 1768.6, 344, 601.4, 215.2],
            ["Transport, Postal and Warehousing", 622.6, 382.8, 959.6, 255.9],
            ["Information Media and Telecommunications", 220, 180.5, 345.7, 52.7],
            ["Financial and Insurance Services", 402.2, 372.7, 704.7, 94.6],
            ["Rental, Hiring and Real Estate Services", 250.4, 148.6, 336, 81.9],
            ["Professional, Scientific and Technical Services", 1020.7, 606, 1593.2, 311.1],
            ["Administrative and Support Services", 695.9, 263.9, 412.1, 67.4],
            ["Public Administration and Safety", 811.9, 798.9, 980.7, 88.7],
            ["Education and Training", 1565.7, 595.8, 1127.4, 189.8],
            ["Health Care and Social Assistance", 2595.4, 1057.4, 1373.8, 142.4],
            ["Arts and Recreation Services", 437.1, 116.9, 196.4, 37],
            ["Other Services", 662.2, 355.1, 713.6, 133.1]
        ]);
    else if (clicked_id == "o-2015")
        return ([
            ["INDUSTRY", "1 to 34 (Hours)", "35 to 39 (Hours)", "40 to 59 (Hours)", "60 or more (Hours)"],
            ["Agriculture, Forestry and Fishing", 381.5, 96.9, 411.7, 287.6],
            ["Mining", 87.4, 115.9, 408.4, 185.7],
            ["Manufacturing", 815.2, 817.5, 1526.8, 242.2],
            ["Electricity, Gas, Water and Waste Services", 115.3, 126.1, 256.7, 44.9],
            ["Construction", 918.9, 491, 2063.3, 409.2],
            ["Wholesale Trade", 351, 312.8, 693.1, 114.1],
            ["Retail Trade", 2467.1, 770.2, 1234, 202.7],
            ["Accomodation and Food Services", 1887, 344.3, 655.2, 214.2],
            ["Transport, Postal and Warehousing", 633.9, 414.7, 973.8, 271.3],
            ["Information Media and Telecommunications", 244.3, 187.2, 340.1, 45.6],
            ["Financial and Insurance Services", 411.2, 349.8, 720.9, 105.6],
            ["Rental, Hiring and Real Estate Services", 233.7, 136.5, 340.9, 82.8],
            ["Professional, Scientific and Technical Services", 1101.3, 672.4, 1689.4, 335],
            ["Administrative and Support Services", 741.2, 276.5, 458.3, 76.4],
            ["Public Administration and Safety", 873.5, 769.5, 952.4, 109.5],
            ["Education and Training", 1571.3, 608.7, 1189.6, 197.4],
            ["Health Care and Social Assistance", 2845.2, 1086.8, 1450.1, 173.1],
            ["Arts and Recreation Services", 442.9, 123.5, 235.3, 51],
            ["Other Services", 637.3, 349.5, 709, 123.2]
        ]);
    else if (clicked_id == "o-2016")
        return ([
            ["INDUSTRY", "1 to 34 (Hours)", "35 to 39 (Hours)", "40 to 59 (Hours)", "60 or more (Hours)"],
            ["Agriculture, Forestry and Fishing", 383.2, 132.1, 396.9, 281.7],
            ["Mining", 91.5, 118.7, 370.8, 191],
            ["Manufacturing", 847.2, 802.6, 1558.9, 239.2],
            ["Electricity, Gas, Water and Waste Services", 113.9, 139.7, 229.9, 40.1],
            ["Construction", 963.1, 573.9, 2059.5, 413.4],
            ["Wholesale Trade", 365.4, 307.6, 626.9, 106.4],
            ["Retail Trade", 2504.6, 786.9, 1199.4, 203.1],
            ["Accomodation and Food Services", 1989.2, 359.3, 631.8, 217.7],
            ["Transport, Postal and Warehousing", 667, 445.2, 948.4, 271.6],
            ["Information Media and Telecommunications", 215.7, 178.8, 336.1, 53.6],
            ["Financial and Insurance Services", 431.7, 374.2, 743, 78.7],
            ["Rental, Hiring and Real Estate Services", 247.2, 150.8, 340.2, 73.9],
            ["Professional, Scientific and Technical Services", 1127.3, 694, 1713.3, 330.4],
            ["Administrative and Support Services", 780.4, 307.7, 479.6, 73],
            ["Public Administration and Safety", 892.5, 791.5, 993.3, 117.9],
            ["Education and Training", 1646.1, 626.3, 1154.8, 202.9],
            ["Health Care and Social Assistance", 2885.7, 1151.6, 1494.9, 158.2],
            ["Arts and Recreation Services", 412.8, 125.4, 248.6, 56.6],
            ["Other Services", 674.6, 312.7, 676.1, 121.7]
        ]);
    else if (clicked_id == "o-2017")
        return ([
            ["INDUSTRY", "1 to 34 (Hours)", "35 to 39 (Hours)", "40 to 59 (Hours)", "60 or more (Hours)"],
            ["Agriculture, Forestry and Fishing", 389.2, 118.5, 403.1, 295.3],
            ["Mining", 98.1, 114.9, 355, 202.4],
            ["Manufacturing", 785.9, 816.5, 1533.7, 242.3],
            ["Electricity, Gas, Water and Waste Services", 103.4, 119.5, 269.2, 39.3],
            ["Construction", 999.4, 639.5, 2210.1, 450.7],
            ["Wholesale Trade", 337.4, 301.8, 650.6, 100.9],
            ["Retail Trade", 2520.4, 802.7, 1196.1, 235.1],
            ["Accomodation and Food Services", 2054, 390.2, 687.6, 191.8],
            ["Transport, Postal and Warehousing", 651.3, 421.9, 1019.5, 280.1],
            ["Information Media and Telecommunications", 237.4, 198.1, 335.9, 49.3],
            ["Financial and Insurance Services", 404.3, 375.7, 762.6, 85.9],
            ["Rental, Hiring and Real Estate Services", 227.5, 143.1, 339, 81.8],
            ["Professional, Scientific and Technical Services", 1143.9, 710, 1696, 298.8],
            ["Administrative and Support Services", 768.1, 267.4, 445.5, 78.7],
            ["Public Administration and Safety", 859.2, 809.8, 1016.9, 100.4],
            ["Education and Training", 1702.3, 672, 1206.5, 206.7],
            ["Health Care and Social Assistance", 3037.8, 1226.1, 1550.1, 170.5],
            ["Arts and Recreation Services", 461.4, 125.5, 209, 51.5],
            ["Other Services", 735, 366.6, 690.4, 132.3]
        ]);
    else
        return ([
            ["INDUSTRY", "1 to 34 (Hours)", "35 to 39 (Hours)", "40 to 59 (Hours)", "60 or more (Hours)"],
            ["Agriculture, Forestry and Fishing", 214.6, 62.5, 203, 153.9],
            ["Mining", 47.1, 61.7, 191.9, 109],
            ["Manufacturing", 434, 437.1, 803.3, 126.3],
            ["Electricity, Gas, Water and Waste Services", 61.7, 65.2, 147.5, 20.8],
            ["Construction", 522.8, 338.2, 1151.3, 227.5],
            ["Wholesale Trade", 155.6, 161.6, 313.5, 60.7],
            ["Retail Trade", 1301.2, 409.7, 613.6, 104.4],
            ["Accomodation and Food Services", 1041.7, 203, 344.7, 88.3],
            ["Transport, Postal and Warehousing", 327.9, 223.9, 512.7, 124.1],
            ["Information Media and Telecommunications", 117, 118.7, 167.5, 24.1],
            ["Financial and Insurance Services", 181.6, 210.8, 397.8, 38.3],
            ["Rental, Hiring and Real Estate Services", 124.8, 71.5, 182.1, 26.2],
            ["Professional, Scientific and Technical Services", 564.2, 382.9, 881.1, 146.4],
            ["Administrative and Support Services", 396.2, 132, 235.4, 38.3],
            ["Public Administration and Safety", 411.5, 414.2, 485.5, 57.3],
            ["Education and Training", 820.3, 354.3, 626.6, 97.6],
            ["Health Care and Social Assistance", 1612.3, 634.6, 787.4, 82.5],
            ["Arts and Recreation Services", 251.1, 70.5, 129.8, 22.6],
            ["Other Services", 345.7, 185.1, 321.7, 68.7]
        ]);
}

function barColorArray() {
    return (['#006400', '#008000', '#32CD32', 'greenyellow', 'gold', 'darkorange', 'orangered', 'red', 'darkred', 'darkred']);
}

function barColorArrayIndustry() {
    return (['#006400', 'gold', 'darkorange', 'darkred']);
}


$('input[type=checkbox]').change(function () {
    if (clicked_id.indexOf('i') > -1) {
        var data = changeIndustryData();
        console.log(data);
        var color = barColorArrayIndustry();
        //console.log(color);
        if (!$('#i_4').is(':checked')) {
            //alert('hi');
            for (var i = 0; i < data.length; i++) {
                data[i].splice(4, 1);
            }
            color.splice(3, 1);
        }

        if (!$('#i_3').is(':checked')) {
            //alert('hi');
            for (var i = 0; i < data.length; i++) {
                data[i].splice(3, 1);
            }
            color.splice(2, 1);
        }

        if (!$('#i_2').is(':checked')) {
            //alert('hi');
            for (var i = 0; i < data.length; i++) {
                data[i].splice(2, 1);
            }
            color.splice(1, 1);
        }

        if (!$('#i_1').is(':checked')) {
            //alert('hi');
            for (var i = 0; i < data.length; i++) {
                data[i].splice(1, 1);
            }
            color.splice(0, 1);
        }
        console.log(data);
        changedDataI = data;
        changedColorI = color;
        google.charts.setOnLoadCallback(chartFilteredIndustry);
    } else {
        var data = changeOccupationData();
        //console.log(changedColor);
        var color = barColorArray();
        //console.log(color);
        if (!$('#o_10').is(':checked')) {
            //alert('hi');
            for (var i = 0; i < data.length; i++) {
                data[i].splice(10, 1);
            }
            color.splice(9, 1);
        }
        if (!$('#o_9').is(':checked')) {
            for (var i = 0; i < data.length; i++) {
                data[i].splice(9, 1);
            }
            color.splice(8, 1);
        }
        if (!$('#o_8').is(':checked')) {
            for (var i = 0; i < data.length; i++) {
                data[i].splice(8, 1);
            }
            color.splice(7, 1);
        }
        if (!$('#o_7').is(':checked')) {
            for (var i = 0; i < data.length; i++) {
                data[i].splice(7, 1);
            }
            color.splice(6, 1);
        }
        if (!$('#o_6').is(':checked')) {
            for (var i = 0; i < data.length; i++) {
                data[i].splice(6, 1);
            }
            color.splice(5, 1);
        }
        if (!$('#o_5').is(':checked')) {
            for (var i = 0; i < data.length; i++) {
                data[i].splice(5, 1);
            }
            color.splice(4, 1);
        }
        if (!$('#o_4').is(':checked')) {
            for (var i = 0; i < data.length; i++) {
                data[i].splice(4, 1);
            }
            color.splice(3, 1);
        }
        if (!$('#o_3').is(':checked')) {
            for (var i = 0; i < data.length; i++) {
                data[i].splice(3, 1);
            }
            color.splice(2, 1);
        }
        if (!$('#o_2').is(':checked')) {
            for (var i = 0; i < data.length; i++) {
                data[i].splice(2, 1);
            }
            color.splice(1, 1);
        }
        if (!$('#o_1').is(':checked')) {
            for (var i = 0; i < data.length; i++) {
                data[i].splice(1, 1);
            }
            color.splice(0, 1);
        }
        //console.log(color);
        changedDataO = data;
        changedColorO = color;
        google.charts.setOnLoadCallback(chartFiltered);
    }
});

function filterData() {
    google.charts.setOnLoadCallback(chart3);
}

function funcchangedData() {
    if (clicked_id.indexOf('i') > -1)
        return changedDataI
    else
        return changedDataO;
}