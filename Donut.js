window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
  theme: "light1",
  animationEnabled: true,
  title: {
    text: "My Daily Life "
  },
  data: [{
    type: "pie",
    indexLabelFontSize: 20,
    radius: 100,
    indexLabel: "{label} - {y}",
    yValueFormatString: "###0.0\"%\"",
    click: explodePie,
    dataPoints: [
      { y: 25, label: "Awake" },
      { y: 20, label: "Play Games"},
      { y: 20, label: "Eat" },
      { y: 10, label: "Social Media" },
      { y: 25, label: "Sleep" },

    ]
  }]
});
var chart1 = new CanvasJS.Chart("chartContainer1", {
  theme: "light2",
  animationEnabled: true,
  title: {
    text: "Learning Programming Language"
  },
  data: [{
    type: "pie",
    indexLabelFontSize: 20,
    radius: 100,
    indexLabel: "{label} - {y}",
    yValueFormatString: "###0.0\"%\"",
    click: explodePie,
    dataPoints: [
      { y: 90, label: "HTML" },
      { y: 70, label: "CSS"},
      { y: 60, label: "JavaScript" },
      { y: 60, label: "Bootstrap" },
      { y: 50, label: "php"},

    ]
  }]
});
var chart2 = new CanvasJS.Chart("chartContainer2", {
  animationEnabled: true,
  title:{
    text: "Daily Task",
    horizontalAlign: "left"
  },
  data: [{
    type: "doughnut",
    startAngle: 60,
    //innerRadius: 60,
    indexLabelFontSize: 17,
    indexLabel: "{label} - #percent%",
    toolTipContent: "<b>{label}:</b> {y} (#percent%)",
    dataPoints: [
      { y: 5, label: "Studies" },
      { y: 6, label: "Projects" },
      { y: 8, label: "Activities" },
      { y: 3, label: "Coding"},
      { y: 3, label: "Social Media"},
    ]
  }]
});
chart.render();
chart1.render();
chart2.render();
function explodePie(e) {
  for(var i = 0; i < e.dataSeries.dataPoints.length; i++) {
    if(i !== e.dataPointIndex)
      e.dataSeries.dataPoints[i].exploded = false;
  }
}

}

