
$('document').ready(function(){
    $( "#mainHeader" ).addClass("himg2");
    $('#occupation_chart_div').show();
    $('#industry_chart_div').hide();
    clicked_id = "o-2018";
    google.charts.setOnLoadCallback(chart1);
});

function sliderHeader()
{
    var x = document.getElementsByClassName("masthead");
    //console.log($( "#mainHeader" ).hasClass( "himg1" ));
    if($("#mainHeader").hasClass( "himg1" )){
        $("#mainHeader").removeClass("himg1");
        $( "#mainHeader" ).addClass("himg2");
    }

    if($( "#mainHeader" ).hasClass( "himg2" )){
        $( "#mainHeader" ).removeClass("himg2" );
        $( "#mainHeader" ).addClass("himg1" );
    }

    setTimeout(sliderHeader, 2000);
}


$('#option-one').click(function() { 
    $('#occupation_chart_div').hide();
    $('#industry_chart_div').show();
    clicked_id = "i-2018";
    google.charts.setOnLoadCallback(chart2);
});

$('#option-two').click(function() { 
    $('#industry_chart_div').hide();
    $('#occupation_chart_div').show();
    clicked_id = "o-2018";
    google.charts.setOnLoadCallback(chart1);
    ///drawChart();
});

var clicked_id = "o-2018";

function yearClick(event)
{
    $("#occupation_chart_div>ul>li.active").removeClass("active");
    $(event.target).parent('li').addClass('active');
    clicked_id = event.target.id;
    google.charts.setOnLoadCallback(chart1);
}

function yearClick2(event)
{
    $("#industry_chart_div>ul>li.active").removeClass("active");
    $(event.target).parent('li').addClass('active');
    clicked_id = event.target.id;
    google.charts.setOnLoadCallback(chart2);
}

function changeIndustryData(){
    //console.log(clicked_id == "i-2013",clicked_id);
    if(clicked_id == "i-2013")
        return ([
            ["","1 to 9 (Hours)","10 to 19 (Hours)","20 to 29 (Hours)","30 to 34 (Hours)","35 to 39 (Hours)","40 to 44 (Hours)","45 to 49 (Hours)","50 to 59 (Hours)","60 to 69 (Hours)","70 or more (Hours)"  ],
            ["Managers",135.7422526,213.0240299,354.1390592,325.8440106,725.2367494,1145.857549,610.2573545,989.4694497,565.4040337,512.3781989  ],
            ["Professionals",415.3273071,639.1036446,1030.697921,910.190236,1718.640696,2193.536816,888.4338057,1032.196972,447.103397,210.6094354  ],
            ["Technicians and Trade",149.4486352,289.6733387,493.9752858,497.0719913,1301.476501,1641.143453,663.4559722,647.6210045,333.0067136,249.81537  ],
            ["Community and \n Personal\n  Service",418.9135615,686.5447669,831.7439154,527.2332992,675.9390414,543.9686435,210.0949154,193.3067108,77.7639509,45.0825843  ],
            ["Clercial and \n Administrative",395.6678005,647.1817093,931.7789699,660.0000799,1619.56225,1240.124044,340.7021777,305.6994338,107.1522967,52.3432398  ],
            ["Sales",579.3526225,812.5216638,671.0341729,343.8881859,598.046578,509.4265479,189.1576172,204.4847792,92.5637778,40.9640693  ],
            ["Machinery Operators and Drivers",74.2720537,143.9281854,253.1329709,210.7526774,560.4290735,612.0382432,320.6325755,324.0701408,215.6411769,190.8316952  ],
            ["Labourers",522.355839,644.7925857,629.8869123,392.3676956,700.9057039,682.4368448,220.2564724,224.858935,112.8784381,106.6331615  ]
          ]
          );
    else if(clicked_id == "i-2014")
        return ([
            ["","1 to 9 (Hours)","10 to 19 (Hours)","20 to 29 (Hours)","30 to 34 (Hours)","35 to 39 (Hours)","40 to 44 (Hours)","45 to 49 (Hours)","50 to 59 (Hours)","60 to 69 (Hours)","70 or more (Hours)"  ],
            ["Managers",157.2784377,226.8697057,348.4468191,368.9545549,774.869962,1227.389772,649.9581066,983.5556818,542.4970347,471.9686991  ],
            ["Professionals",458.7808583,680.643009,1071.053298,948.1878681,1826.257419,2202.201473,875.6019361,1035.758357,439.4226773,231.9335629  ],
            ["Technicians and \n Trade",176.253583,319.9436347,504.958947,479.5632108,1322.147074,1697.764919,651.2119829,634.5363987,346.9548929,252.4837519  ],
            ["Community and \n Personal\n  Service",426.2614455,668.138399,861.5852105,543.23179,707.7161848,528.9726413,224.148467,174.8233881,70.2701396,52.1046976  ],
            ["Clercial and\n  Administrative",410.1496141,655.8498644,923.1186779,684.0087297,1594.803174,1197.241319,314.35992,266.5528404,82.7260065,45.1394182  ],
            ["Sales",578.6091446,837.5263078,681.3927868,386.2345487,607.5675549,533.8529321,190.8742088,181.3149946,79.9197346,42.7927397  ],
            ["Machinery Operators\n and Drivers",75.289528,149.004932,237.9416376,194.8299787,534.6600531,590.3767515,304.3588876,328.3239865,214.922311,171.9885287  ],
            ["Labourers",494.5320114,639.2450594,671.4283971,376.69084,726.0223464,656.7176154,223.6201399,246.7505003,104.1272134,97.2822066  ]
          ]
          );
    else if(clicked_id == "i-2015")
        return ([
            ["","1 to 9 (Hours)","10 to 19 (Hours)","20 to 29 (Hours)","30 to 34 (Hours)","35 to 39 (Hours)","40 to 44 (Hours)","45 to 49 (Hours)","50 to 59 (Hours)","60 to 69 (Hours)","70 or more (Hours)"  ],
            ["Managers",138.7357923,210.3501663,393.7052013,358.6120684,791.26024,1293.129429,632.4034484,994.2324306,548.2206677,482.277465  ],
            ["Professionals",478.7,708.1,1175.7,1027.8,1883.9,2324.2,879.4,1043.1,442.3,242.2  ],
            ["Technicians and \nTrade",162.0722521,319.7997785,492.6690352,493.379787,1307.900606,1770.777658,681.9603404,700.3490999,324.4314965,235.9043359  ],
            ["Community and \n Personal\n  Service",461.0114661,728.6795436,947.104177,605.4701094,693.3935406,554.5624915,207.7184731,178.6218025,80.5402064,53.8245861  ],
            ["Clercial and\n  Administrative ",395.4679849,645.0699612,985.450641,680.9944107,1566.193565,1179.68336,316.7761655,290.0030832,110.6262217,47.6219379  ],
            ["Sales",577.2834852,810.2818621,723.7918235,384.7437147,577.2308802,567.033163,182.5345592,196.9263456,86.8043345,53.2692781  ],
            ["Machinery Operators \n and Drivers",74.9315238,129.1649945,244.314038,211.872587,558.5166869,584.1415256,276.0517926,331.250393,214.0850403,151.4037591  ],
            ["Labourers,490.6234315,644.7859137",657.8031246,400.6444318,671.233212,645.9470454,230.9688782,247.1525726,114.7689182,82.9854601  ]
          ]
          );
    else if(clicked_id == "i-2016")
        return ([
            ["","1 to 9 (Hours)","10 to 19 (Hours)","20 to 29 (Hours)","30 to 34 (Hours)","35 to 39 (Hours)","40 to 44 (Hours)","45 to 49 (Hours)","50 to 59 (Hours)","60 to 69 (Hours)","70 or more (Hours)"  ],
            ["Managers",138.4553144,225.7411218,389.6629924,378.73176,832.7985312,1295.407721,644.6041964,971.0304998,558.7570562,453.0083016  ],
            ["Professionals",475.2955119,741.3347321,1202.616788,1022.411861,2002.31024,2409.881117,861.596507,1035.365479,425.4930971,245.283982  ],
            ["Technicians and Trade",171.5806818,297.6951913,515.9057083,526.2746126,1291.957849,1679.370939,638.509526,642.0161311,354.9023966,239.5675443  ],
            ["Community and \nPersonal \n Service",453.9153145,790.9890193,999.7588321,603.8483279,753.1724441,546.2072287,220.7243514,206.5821904,78.4417086,42.6728621  ],
            ["Clercial and\n  Administrative",398.4637037,675.8436409,964.1731091,759.127367,1577.894689,1203.971252,338.4759311,292.8422053,94.5663628,53.4250913  ],
            ["Sales",551.6318511,843.016181,713.0456959,381.4558793,626.6611784,530.5061592,175.6953237,201.7856594,88.7654956,39.9095651  ],
            ["Machinery Operators \nand Drivers",76.1027382,170.7118649,254.059323,226.0194789,555.4553893,546.3373237,299.272328,325.6729819,195.6711544,152.9739307  ],
            ["Labourers",457.6851901,701.8265735,735.7595411,396.1102825,738.7695796,687.7342076,222.9312097,225.8297406,121.0347214,86.7066791  ]
          ]
          );
    else if(clicked_id == "i-2017")
        return ([
            ["","1 to 9 (Hours)","10 to 19 (Hours)","20 to 29 (Hours)","30 to 34 (Hours)","35 to 39 (Hours)","40 to 44 (Hours)","45 to 49 (Hours)","50 to 59 (Hours)","60 to 69 (Hours)","70 or more (Hours)"  ],
            ["Managers",135.1463339,223.5691454,417.7810211,397.5664787,861.146097,1280.739545,596.8380255,952.2697961,574.7032094,434.1448495  ],
            ["Professionals",500.6578705,755.7097981,1230.770357,1096.142763,2104.614203,2593.870212,883.2303518,1079.130381,456.8658887,223.6960788  ],
            ["Technicians and Trade",181.4737172,307.0484624,518.9491563,531.3005538,1395.375693,1689.863077,648.176473,672.037399,363.1816633,239.2317317  ],
            ["Community and\n Personal \n Service",482.6309101,804.0930571,1007.919902,641.6710548,746.6826268,584.3807487,241.6408145,206.4865023,81.3433217,40.6635364  ],
            ["Clercial and\n  Administrative",365.867336,639.8303505,974.8412954,728.2624674,1567.838126,1149.243006,318.1602107,286.5358947,96.7155089,46.9485672  ],
            ["Sales",525.7419211,825.143849,750.7812398,377.6146948,630.8342272,551.5638217,188.833192,196.8152487,104.3003657,49.56041  ],
            ["Machinery Operators\n and Drivers",78.2065189,168.2259625,259.1865736,201.9736234,562.4108701,572.6689477,322.7171964,354.7634173,208.3302248,184.0115324  ],
            ["Labourers",472.8848309,711.4769344,769.4148038,434.1833412,750.9728393,699.5833785,241.7531018,265.7509266,103.6976369,86.4359785  ]
          ]
          );
    else    
        return ([
            ["","1 to 9 (Hours)","10 to 19 (Hours)","20 to 29 (Hours)","30 to 34 (Hours)","35 to 39 (Hours)","40 to 44 (Hours)","45 to 49 (Hours)","50 to 59 (Hours)","60 to 69 (Hours)","70 or more (Hours)"  ],
            ["Managers",74.5177279,119.1041267,197.74199,190.2874829,448.597267,654.3956235,322.520223,482.1489761,281.3742223,210.483048  ],
            ["Professionals",242.9546516,373.573076,641.5746571,568.0758918,1157.726303,1325.836602,444.3299172,571.2851437,215.1353823,115.6810143  ],
            ["Technicians and Trade",91.0223375,165.2842665,280.0148376,271.4681392,721.4454077,890.8468928,354.6283861,345.8872306,179.8199656,110.3718036  ],
            ["Community and\n Personal \n Service",234.7204492,390.221594,525.867152,324.1349248,387.6824225,306.663969,109.2019381,95.1638132,37.4756327,27.2916031  ],
            ["Clercial and\n  Administrative",177.8238407,302.1916122,482.6741922,363.1022029,805.6085982,595.3879357,161.264178,144.8116463,42.2334409,23.4834206  ],
            ["Sales",293.4615514,407.9984825,400.7596052,196.2612912,315.4296655,265.1430972,97.7137692,91.7347188,42.6158096,20.468203  ],
            ["Machinery Operators\n and Drivers",40.1044781,91.7670348,139.2156836,101.0898143,301.4433693,326.8263048,147.4915298,186.2961627,98.6942999,90.9617705  ],
            ["Labourers",249.1103375,361.8585188,409.0692106,224.3901836,399.5030571,350.3898583,109.4132493,117.0145606,64.4139521,56.6239434  ]
          ]
          );
}

function changeOccupationData(event){
    if(clicked_id == "o-2013")
    return ([
        ["INDUSTRY","1 to 9 (Hours)","10 to 19 (Hours)","20 to 29 (Hours)","30 to 34 (Hours)","35 to 39 (Hours)","40 to 44 (Hours)","45 to 49 (Hours)","50 to 59 (Hours)","60 to 69 (Hours)","70 or more (Hours)"  ],
        ["Agriculture, Forestry and Fishing",86.1,99.1,103.2,73.1,102.7,154.6,72.5,139.4,120.9,196.9  ],
        ["Mining",6.1,18.4,45.3,29.4,144.2,159.4,162.0,123.5,119.1,140.4  ],
        ["Manufacturing",96.5,168.1,285.9,275.6,818.8,905.9,362.2,381.3,147.6,79.1  ],
        ["Electricity, Gas, Water and Waste Services",8.7,18.7,35.9,60.6,122.1,161.3,53.7,51.2,24.2,14.3  ],
        ["Construction",125.5,198.7,289.4,297.4,520.8,991.8,417.5,507.9,264.1,191.0  ],
        ["Wholesale Trade",56.3,88.7,125.4,124.6,347.1,424.8,150.1,189.0,77.0,36.2  ],
        ["Retail Trade",546.1,765.2,706.1,404.4,780.5,646.6,244.7,267.5,134.8,93.5  ],
        ["Accomodation and Food Services",447.4,602.7,499.7,244.1,324.1,302.3,133.6,175.8,101.2,122.0  ],
        ["Transport, Postal and Warehousing",84.9,130.7,214.8,162.6,374.0,502.8,215.8,263.9,149.6,110.1  ],
        ["Information Media and Telecommunications",35.4,48.9,76.7,68.2,179.4,182.0,66.3,74.0,33.2,13.9  ],
        ["Financial and Insurance Services",31.1,74.3,146.2,124.6,372.0,432.4,148.1,160.7,62.0,17.9  ],
        ["Rental, Hiring and Real Estate Services",37.8,55.4,74.1,54.4,130.8,158.3,68.6,96.2,50.0,24.9  ],
        ["Professional, Scientific and Technical Services",151.8,206.7,330.8,288.1,579.0,804.3,339.4,407.0,219.8,112.7  ],
        ["Administrative and Support Services",136.3,194.1,237.0,132.0,239.3,262.1,78.5,101.7,49.2,40.6  ],
        ["Public Administration and Safety",68.5,143.3,303.5,307.0,807.4,571.8,236.3,192.8,67.6,31.9  ],
        ["Education and Training",269.6,386.5,480.5,293.8,600.1,528.1,251.1,345.5,138.5,53.3  ],
        ["Health Care and Social Assistance",279.2,615.3,926.4,729.6,995.4,881.9,259.6,241.1,85.0,58.2  ],
        ["Arts and Recreation Services",113.2,106.8,112.4,65.2,115.9,113.2,50.0,50.2,37.4,17.3  ],
        ["Other Services",110.4,155.4,203.0,132.5,346.4,385.0,132.8,153.1,70.2,54.5  ]
      ]);
    else if(clicked_id == "o-2014")
    return ([
        ["INDUSTRY","1 to 9 (Hours)","10 to 19 (Hours)","20 to 29 (Hours)","30 to 34 (Hours)","35 to 39 (Hours)","40 to 44 (Hours)","45 to 49 (Hours)","50 to 59 (Hours)","60 to 69 (Hours)","70 or more (Hours)"  ],
        ["Agriculture, Forestry and Fishing",86.5,110.6,116.0,80.9,115.0,165.4,81.5,149.4,122.3,198.5  ],
        ["Mining",9.5,20.0,37.3,28.7,125.2,150.3,159.6,120.4,87.7,130.7  ],
        ["Manufacturing",129.0,198.7,300.1,258.3,850.7,884.1,359.0,318.5,146.3,83.0  ],
        ["Electricity, Gas, Water and Waste Services",13.2,16.1,34.6,43.9,135.1,136.3,61.9,58.0,25.7,14.8  ],
        ["Construction",144.8,193.8,293.1,287.4,542.3,1054.1,399.4,545.9,277.3,170.5  ],
        ["Wholesale Trade",46.8,70.9,124.9,94.6,325.2,405.9,141.9,163.7,67.4,44.2  ],
        ["Retail Trade",508.4,765.7,724.4,445.1,777.9,701.8,264.5,254.3,128.4,79.9  ],
        ["Accomodation and Food Services",432.1,600.3,491.5,244.7,344.0,299.1,136.1,166.2,106.8,108.4  ],
        ["Transport, Postal and Warehousing",85.9,124.2,225.5,187.0,382.8,483.1,211.0,265.5,152.7,103.2  ],
        ["Information Media and Telecommunications",30.5,49.2,68.9,71.4,180.5,187.8,72.6,85.3,34.1,18.6  ],
        ["Financial and Insurance Services",42.2,71.9,145.8,142.3,372.7,390.5,140.4,173.8,63.0,31.6  ],
        ["Rental, Hiring and Real Estate Services",41.8,76.6,65.5,66.5,148.6,158.5,74.5,103.0,58.9,23.0  ],
        ["Professional, Scientific and Technical Services",172.5,237.8,324.4,286.0,606.0,854.5,320.0,418.7,198.2,112.9  ],
        ["Administrative and Support Services",126.3,204.3,229.8,135.5,263.9,229.6,83.7,98.8,39.3,28.1  ],
        ["Public Administration and Safety",79.3,141.3,294.7,296.6,798.9,586.5,230.3,163.9,56.0,32.7  ],
        ["Education and Training",291.7,400.4,532.2,341.4,595.8,547.2,237.6,342.6,130.3,59.5  ],
        ["Health Care and Social Assistance",304.3,589.5,933.1,768.5,1057.4,873.7,261.6,238.5,85.5,56.9  ],
        ["Arts and Recreation Services",107.8,129.2,131.3,68.8,116.9,113.9,42.0,40.5,21.8,15.2  ],
        ["Other Services",124.6,176.7,226.8,134.1,355.1,412.3,156.6,144.7,79.2,53.9  ]
      ]);
    else if(clicked_id == "o-2015")
    return ([
        ["INDUSTRY","1 to 9 (Hours)","10 to 19 (Hours)","20 to 29 (Hours)","30 to 34 (Hours)","35 to 39 (Hours)","40 to 44 (Hours)","45 to 49 (Hours)","50 to 59 (Hours)","60 to 69 (Hours)","70 or more (Hours)"  ],
        ["Agriculture, Forestry and Fishing",75.1,94.5,131.6,80.3,96.9,181.5,72.2,158.0,107.8,179.8  ],
        ["Mining",7.1,15.4,42.4,22.5,115.9,135.2,153.7,119.5,72.4,113.3  ],
        ["Manufacturing",115.5,178.1,260.3,261.3,817.5,868.1,323.7,335.0,148.9,93.3  ],
        ["Electricity, Gas, Water and Waste Services",6.5,13.0,39.4,56.4,126.1,151.0,53.3,52.4,27.8,17.1  ],
        ["Construction",138.6,202.0,288.2,290.1,491.0,1088.7,422.9,551.7,268.7,140.5  ],
        ["Wholesale Trade",48.8,71.0,116.3,114.9,312.8,387.1,135.5,170.5,70.8,43.3  ],
        ["Retail Trade",496.2,756.3,767.6,447.0,770.2,679.1,270.5,284.4,120.9,81.8  ],
        ["Accomodation and Food Services",457.4,586.7,552.6,290.3,344.3,322.1,155.3,177.8,108.2,106.0  ],
        ["Transport, Postal and Warehousing",84.7,130.5,221.4,197.3,414.7,485.4,201.0,287.4,165.0,106.3  ],
        ["Information Media and Telecommunications",37.1,53.7,81.0,72.5,187.2,199.4,67.7,73.0,28.7,16.9  ],
        ["Financial and Insurance Services",39.4,81.5,162.4,127.9,349.8,419.4,138.5,163.0,78.1,27.5  ],
        ["Rental, Hiring and Real Estate Services",40.6,58.7,76.9,57.5,136.5,176.2,66.2,98.5,54.2,28.6  ],
        ["Professional, Scientific and Technical Services",188.4,255.9,367.4,289.6,672.4,930.6,316.1,442.7,202.3,132.7  ],
        ["Administrative and Support Services",133.1,211.2,250.7,146.2,276.5,265.9,86.3,106.1,49.8,26.6  ],
        ["Public Administration and Safety",81.1,150.3,322.8,319.3,769.5,569.5,221.2,161.7,69.7,39.8  ],
        ["Education and Training",298.4,403.5,542.6,326.8,608.7,566.0,286.8,336.8,140.9,56.5  ],
        ["Health Care and Social Assistance",303.3,643.3,1061.6,837.0,1086.8,963.6,248.6,237.9,102.9,70.2  ],
        ["Arts and Recreation Services",102.7,130.1,124.9,85.2,123.5,133.8,44.7,56.8,30.6,20.4  ],
        ["Other Services",124.8,160.7,210.3,141.5,349.5,396.9,143.7,168.4,74.3,48.9  ]
      ]);
    else if(clicked_id == "o-2016")
    return ([
        ["INDUSTRY","1 to 9 (Hours)","10 to 19 (Hours)","20 to 29 (Hours)","30 to 34 (Hours)","35 to 39 (Hours)","40 to 44 (Hours)","45 to 49 (Hours)","50 to 59 (Hours)","60 to 69 (Hours)","70 or more (Hours)"  ],
        ["Agriculture, Forestry and Fishing",81.7,101.6,110.5,89.4,132.1,173.4,86.7,136.8,105.8,175.9  ],
        ["Mining",5.9,14.4,43.3,27.9,118.7,126.0,130.1,114.7,86.5,104.5  ],
        ["Manufacturing",115.3,190.0,270.5,271.4,802.6,883.1,344.5,331.3,153.3,85.9  ],
        ["Electricity, Gas, Water and Waste Services",13.0,12.9,36.8,51.2,139.7,129.9,42.8,57.2,24.5,15.6  ],
        ["Construction",137.9,196.7,308.6,319.9,573.9,1127.1,407.4,525.0,272.3,141.1  ],
        ["Wholesale Trade",47.0,71.4,127.4,119.6,307.6,343.4,138.0,145.5,64.5,41.9  ],
        ["Retail Trade",469.8,828.8,760.4,445.6,786.9,679.2,245.6,274.6,129.7,73.4  ],
        ["Accomodation and Food Services",444.0,684.2,606.4,254.6,359.3,319.3,147.6,164.9,118.6,99.1  ],
        ["Transport, Postal and Warehousing",92.8,145.5,231.9,196.8,445.2,462.8,200.1,285.5,160.1,111.5  ],
        ["Information Media and Telecommunications",35.6,46.9,75.0,58.2,178.8,205.7,58.2,72.2,36.3,17.3  ],
        ["Financial and Insurance Services",34.1,79.3,162.7,155.6,374.2,430.1,134.1,178.8,57.7,21.0  ],
        ["Rental, Hiring and Real Estate Services",46.0,63.5,73.1,64.6,150.8,178.3,68.5,93.4,48.8,25.1  ],
        ["Professional, Scientific and Technical Services",158.7,266.9,377.6,324.1,694.0,934.8,354.3,424.2,195.6,134.8  ],
        ["Administrative and Support Services",148.8,201.5,274.5,155.6,307.7,276.2,99.9,103.5,49.9,23.1  ],
        ["Public Administration and Safety",86.6,153.9,325.7,326.3,791.5,597.3,227.7,168.3,79.6,38.3  ],
        ["Education and Training",291.6,424.7,577.3,352.5,626.3,553.7,268.9,332.2,134.0,68.9  ],
        ["Health Care and Social Assistance",302.2,664.1,1070.5,848.9,1151.6,964.5,269.7,260.7,96.9,61.3  ],
        ["Arts and Recreation Services",90.9,123.5,120.9,77.5,125.4,143.2,40.8,64.6,29.1,27.5  ],
        ["Other Services",121.1,177.4,221.9,154.2,312.7,371.5,136.7,167.9,74.5,47.2  ]
      ]);
    else if(clicked_id == "o-2017")
    return ([
        ["INDUSTRY","1 to 9 (Hours)","10 to 19 (Hours)","20 to 29 (Hours)","30 to 34 (Hours)","35 to 39 (Hours)","40 to 44 (Hours)","45 to 49 (Hours)","50 to 59 (Hours)","60 to 69 (Hours)","70 or more (Hours)"  ],
        ["Agriculture, Forestry and Fishing",76.3,99.9,125.1,87.9,118.5,172.0,67.2,163.9,110.8,184.5  ],
        ["Mining",10.9,17.7,38.5,31.0,114.9,118.9,125.3,110.8,81.4,121.0  ],
        ["Manufacturing",112.4,171.4,249.0,253.1,816.5,837.5,351.9,344.3,159.5,82.8  ],
        ["Electricity, Gas, Water and Waste Services",9.8,16.3,32.1,45.2,119.5,142.5,62.3,64.4,24.9,14.4  ],
        ["Construction",142.9,198.5,334.9,323.1,639.5,1182.7,440.2,587.2,301.2,149.5  ],
        ["Wholesale Trade",39.4,66.8,123.0,108.2,301.8,359.4,129.1,162.1,73.7,27.2  ],
        ["Retail Trade",465.9,819.0,778.8,456.7,802.7,671.5,253.5,271.1,153.7,81.4  ],
        ["Accomodation and Food Services",449.5,681.1,644.6,278.8,390.2,377.1,133.9,176.6,99.8,92.0  ],
        ["Transport, Postal and Warehousing",69.1,147.2,253.8,181.2,421.9,507.0,226.2,286.3,163.0,117.1  ],
        ["Information Media and Telecommunications",39.3,53.7,77.6,66.8,198.1,199.5,59.7,76.7,35.7,13.6  ],
        ["Financial and Insurance Services",36.2,64.2,156.9,147.0,375.7,439.3,147.4,175.9,66.5,19.4  ],
        ["Rental, Hiring and Real Estate Services",36.4,43.4,78.1,69.6,143.1,177.2,70.0,91.8,51.4,30.4  ],
        ["Professional, Scientific and Technical Services",170.2,269.2,374.3,330.2,710.0,974.7,314.9,406.4,203.6,95.2  ],
        ["Administrative and Support Services",108.7,224.5,271.1,163.8,267.4,251.0,92.8,101.7,42.9,35.8  ],
        ["Public Administration and Safety",84.1,147.0,318.8,309.3,809.8,628.9,225.1,162.9,61.8,38.6  ],
        ["Education and Training",321.9,409.9,579.6,390.9,672.0,578.4,273.3,354.8,134.0,72.7  ],
        ["Health Care and Social Assistance",321.3,694.4,1113.2,908.9,1226.1,992.3,288.5,269.3,114.2,56.3  ],
        ["Arts and Recreation Services",126.2,127.9,132.0,75.3,125.5,121.9,40.6,46.5,28.9,22.6  ],
        ["Other Services",122.3,183.0,248.0,181.7,366.6,389.9,139.4,161.1,82.1,50.2  ]
      ]);
    else
    return ([
        ["INDUSTRY","1 to 9 (Hours)","10 to 19 (Hours)","20 to 29 (Hours)","30 to 34 (Hours)","35 to 39 (Hours)","40 to 44 (Hours)","45 to 49 (Hours)","50 to 59 (Hours)","60 to 69 (Hours)","70 or more (Hours)"  ],
        ["Agriculture,\n Forestry \nand Fishing",44.9,59.7,65.2,44.8,62.5,96.3,30.8,75.9,56.4,97.5  ],
        ["Mining",2.6,9.5,22.9,12.1,61.7,75.3,65.1,51.5,47.0,62.0  ],
        ["Manufacturing",65.2,90.6,145.0,133.2,437.1,458.8,161.5,183.0,75.6,50.7  ],
        ["Electricity,\n Gas, Water \nand Waste \nServices",9.3,10.8,21.3,20.3,65.2,75.1,38.1,34.3,14.0,6.8  ],
        ["Construction",82.3,103.9,160.1,176.5,338.2,591.4,238.8,321.1,145.9,81.6  ],
        ["Wholesale Trade",15.1,30.8,58.2,51.5,161.6,178.6,58.4,76.5,44.7,16.0  ],
        ["Retail Trade",238.5,404.2,422.8,235.7,409.7,349.2,132.1,132.3,67.2,37.2  ],
        ["Accomodation\n and Food \nServices",238.6,345.3,321.7,136.1,203.0,189.3,77.5,77.9,49.4,38.9  ],
        ["Transport, \nPostal and \nWarehousing",42.3,64.1,127.2,94.3,223.9,264.4,106.8,141.5,69.4,54.7  ],
        ["Information \nMedia and \nTelecommunications",19.5,26.7,35.8,35.0,118.7,92.3,34.9,40.3,15.1,9.0  ],
        ["Financial and\n Insurance Services",15.7,32.0,72.1,61.8,210.8,243.3,76.0,78.5,30.1,8.2  ],
        ["Rental, \nHiring and\n Real Estate\n Services",21.9,25.4,44.8,32.7,71.5,104.4,36.0,41.7,17.0,9.2  ],
        ["Professional,\n Scientific\n and Technical \nServices",83.7,125.9,202.9,151.7,382.9,501.9,171.0,208.2,100.1,46.3  ],
        ["Administrative \nand Support \nServices",74.9,103.0,139.9,78.4,132.0,144.1,44.1,47.2,20.5,17.8  ],
        ["Public \nAdministration\n and Safety",38.2,71.7,143.4,158.2,414.2,289.1,103.5,92.9,36.7,20.6  ],
        ["Education\n and Training",145.7,211.2,273.5,189.9,354.3,297.6,132.3,196.7,68.9,28.7  ],
        ["Health Care and Social Assistance",162.4,328.8,620.6,500.5,634.6,503.2,143.0,141.2,49.2,33.3  ],
        ["Arts and Recreation Services",48.9,72.6,85.1,44.5,70.5,76.4,24.3,29.1,12.9,9.7  ],
        ["Other Services",54.0,95.8,114.3,81.6,185.1,184.8,72.4,64.5,41.6,27.1  ]
      ]);
}