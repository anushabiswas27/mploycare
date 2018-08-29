google.charts.load('current', {
  packages: ['corechart', 'bar']
});
//google.charts.setOnLoadCallback(drawChart);

function chart1() {

  var data = google.visualization.arrayToDataTable(changeOccupationData());

  var options = {
    chart: {
      title: 'Hours Worked by Employees',
      subtitle: 'Yearly and Occupation',
    },
    animation: {
      duration: 500,
      startup: true
    },
    bars: 'vertical',
    bar: {
      groupWidth: "95%"
    },
    vAxis: {
      title: "Number of Employees"
    },
    hAxis: {
      title: "Occupation",
      slantedText: false,
      showTextEvery: 1,
      maxTextLines: 4
    },
    legend: {
      position: "none"
    },
    height: 450,
    width: '100%',
    colors: barColorArray(),
    //chartArea: {width: '98%', height: '98%'}
    chartArea: {
      left: 90,
      top: 10,
      width: '90%',
      height: '85%'
    }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div_1'));

  chart.draw(data, options);
}

function chartFiltered() {

  var data = google.visualization.arrayToDataTable(funcchangedData());

  var options = {
    chart: {
      title: 'Hours Worked by Employees',
      subtitle: 'Yearly and Occupation',
    },
    animation: {
      duration: 500,
      startup: true
    },
    bars: 'vertical',
    bar: {
      groupWidth: "95%"
    },
    vAxis: {
      title: "Number of Employees"
    },
    hAxis: {
      title: "Occupation",
      slantedText: false,
      showTextEvery: 1,
      maxTextLines: 4
    },
    legend: {
      position: "none"
    },
    height: 450,
    width: '100%',
    colors: changedColorO,
    //chartArea: {width: '98%', height: '98%'}
    chartArea: {
      left: 90,
      top: 10,
      width: '90%',
      height: '85%'
    }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div_2'));

  chart.draw(data, options);
}