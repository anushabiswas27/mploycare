google.charts.load('current', {'packages':['bar']});
//google.charts.setOnLoadCallback(drawChart);

function chart2() {
  var data = google.visualization.arrayToDataTable(changeOccupationData());

  var options = {
    chart: {
      title: 'Hours Worked by Employees',
      subtitle: 'Yearly and Industry',
    },
    animation:{
      duration: 1500,
      startup: true
        },
    bars: 'vertical',
    height: 450,
    colors: ['#006203', '	#0f9200', '#30cb00' ,'#ff7e7e', '#ff6969', '#ff5353', '#ff3b3b']
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div_2'));

  chart.draw(data, options);
  }
  
