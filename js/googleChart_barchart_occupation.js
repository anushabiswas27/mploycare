google.charts.load('current', {'packages':['bar']});
//google.charts.setOnLoadCallback(drawChart);

function chart1() {
  
    var data = google.visualization.arrayToDataTable(changeIndustryData());

  var options = {
    chart: {
      title: 'Hours Worked by Employees',
      subtitle: 'Yearly and Occupation',
    },
    animation:{
      duration: 1500,
      startup: true
        },
    bars: 'vertical',
    vAxis: {format: 'number'},
    height: 450,
    colors: ['#006203', '	#0f9200', '#30cb00' ,'#ff7e7e', '#ff6969', '#ff5353', '#ff3b3b']
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div_1'));

  chart.draw(data, options);
  }
