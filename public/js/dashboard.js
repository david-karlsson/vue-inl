(function($) {
  'use strict';
  $(function() {


    fetch("https://inlupp-fa.azurewebsites.net/api/total-sales-chart")
    .then(res => res.json())
    .then(data => {
      if ($("#total-sales-chart").length) {
        var areaData = {
          labels: data.labels,
          datasets: [
            {
              data: data.datasets[0].data,
              backgroundColor: [
                'rgba(61, 165, 244, .0)'
              ],
              borderColor: [
                'rgb(61, 165, 244)'
              ],
              borderWidth: 2,
              fill: 'origin',
              label: "services"
            },
            {
              data: data.datasets[1].data,
              backgroundColor: [
                'rgba(241, 83, 110, .0)'
              ],
              borderColor: [
                'rgb(241, 83, 110)'
              ],
              borderWidth: 2,
              fill: 'origin',
              label: "services"
            }
          ]
        };
        var areaOptions = {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            filler: {
              propagate: false
            }
          },
          scales: {
            xAxes: [{
              display: true,
              ticks: {
                display: true,
                padding: 20,
                fontColor:"#000",
                fontSize: 14
              },
              gridLines: {
                display: false,
                drawBorder: false,
                color: 'transparent',
                zeroLineColor: '#eeeeee'
              }
            }],
            yAxes: [{
              display: true,
              ticks: {
                display: true,
                autoSkip: false,
                maxRotation: 0,
                stepSize: 100,
                fontColor: "#000",
                fontSize: 14,
                padding: 18,
                stepSize: 100000,
                callback: function(value) {
                  var ranges = [
                      { divider: 1e6, suffix: 'M' },
                      { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                      for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                      }
                      return n;
                  }
                  return formatNumber(value);
                }
              },
              gridLines: {
                drawBorder: false
              }
            }]
          },
          legend: {
            display: false
          },
          tooltips: {
            enabled: true
          },
          elements: {
            line: {
              tension: .37
            },
            point: {
              radius: 0
            }
          }
        }
        var revenueChartCanvas = document.getElementById("total-sales-chart").getContext('2d')
        // // var revenueChartCanvas = $("#total-sales-chart").get(0).getContext("2d");
        var revenueChart = new Chart(revenueChartCanvas, {
          type: 'line',
          data: areaData,
          options: areaOptions
        });
      }
    })

    fetch("https://inlupp-fa.azurewebsites.net/api/total-users ")
    .then(res => res.json())
    .then(data => {
    if ($("#users-chart").length) {
      var areaData = {
        labels: data.dataset.labels,
        datasets: [{
            data: data.dataset.data,
            backgroundColor: [
              '#e0fff4'
            ],
            borderWidth: 2,
            borderColor: "#00c689",
            fill: 'origin',
            label: "purchases"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: true
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 100,
              min: 0,
              max: 300
            },
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: .35
          },
          point: {
            radius: 0
          }
        }
      }
      var salesChartCanvas = $("#users-chart").get(0).getContext("2d");
      var salesChart = new Chart(salesChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
  })

   

  fetch ('https://inlupp-fa.azurewebsites.net/api/total-projects')
  .then((res) => res.json())
  .then((data) => {


    if ($("#projects-chart").length) {
      var areaData = {
        labels: data.dataset.labels,
        datasets: [{
            data: data.dataset.data,
            backgroundColor: [
              '#e5f2ff'
            ],
            borderWidth: 2,
            borderColor: "#3da5f4",
            fill: 'origin',
            label: "purchases"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: true
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 100,
              min: 0,
              max: 300
            },
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: .05
          },
          point: {
            radius: 0
          }
        }
      }
      var salesChartCanvas = $("#projects-chart").get(0).getContext("2d");
      var salesChart = new Chart(salesChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
  })



  fetch ('https://inlupp-fa.azurewebsites.net/api/downloads')
  .then((res) => res.json())
  .then((data) => {



    if ($('#offlineProgress').length) {
      var bar = new ProgressBar.Circle(offlineProgress, {
        color: '#000',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: true,
          style : {
            color : "#fff",
            position: 'absolute',
            left: '40%',
            top: '50%'
          }
        },
        svgStyle: {
          width: '90%'
        },
        from: {
          color: '#f1536e',
          width: 6
        },
        to: {
          color: '#f1536e',
          width: 6
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
  
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
  
        }
      });
  
      bar.text.style.fontSize = '1rem';
      bar.animate(data[0].circleValue); // Number from 0.0 to 1.0
    }

    if ($('#onlineProgress').length) {
      var bar = new ProgressBar.Circle(onlineProgress, {
        color: '#000',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: true,
          style : {
            color : "#fff",
            position: 'absolute',
            left: '40%',
            top: '50%'
          }
        },
        svgStyle: {
          width: '90%'
        },
        from: {
          color: '#fda006',
          width: 6
        },
        to: {
          color: '#fda006',
          width: 6
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
  
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
  
        }
      });
  
      bar.text.style.fontSize = '1rem';
      bar.animate(data[1].circleValue); // Number from 0.0 to 1.0
    }
  })



   
   



    fetch ('https://inlupp-fa.azurewebsites.net/api/distribution')
    .then((res) => res.json())
    .then((data) => {
  

    if ($("#distribution-chart").length) {
      var areaData = {
        labels: data.labels,
        datasets: [{
            data: data.data,
            backgroundColor: [
              "#3da5f4", "#f1536e", "#fda006"
            ],
            borderColor: "rgba(0,0,0,0)"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 72,
        elements: {
          arc: {
              borderWidth: 4
          }
        },      
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        legendCallback: function(chart) { 
          var text = [];
          text.push('<div class="distribution-chart">');
            text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[0] + '"></div>');
            text.push('<p>'+data.cities[0] +'</p>');
            text.push('</div>');
            text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[1] + '"></div>');
            text.push('<p>'+data.cities[1] +'</p>');
            text.push('</div>');
            text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[2] + '"></div>');
            text.push('<p>'+data.cities[2] +'</p>');
            text.push('</div>');
          text.push('</div>');
          return text.join("");
        },
      }
      var distributionChartPlugins = {
        beforeDraw: function(chart) {
          var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;
      
          ctx.restore();
          var fontSize = .96;
          ctx.font = "600 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#000";
      
          var text = data.procentage +"%",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;
      
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
      var distributionChartCanvas = $("#distribution-chart").get(0).getContext("2d");
      var distributionChart = new Chart(distributionChartCanvas, {
        type: 'doughnut',
        data: areaData,
        options: areaOptions,
        plugins: distributionChartPlugins
      });
      document.getElementById('distribution-legend').innerHTML = distributionChart.generateLegend();
    }
  })


  fetch ('https://inlupp-fa.azurewebsites.net/api/sales-report')
  .then((res) => res.json())
  .then((data) => {


 
    if ($("#sale-report-chart").length) {
      var CurrentChartCanvas = $("#sale-report-chart").get(0).getContext("2d");
      var CurrentChart = new Chart(CurrentChartCanvas, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [{
              label: data.datasets.labels,
              data: data.datasets[0].data,
              backgroundColor:data.datasets[0].backgroundColor
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                drawBorder: false
              },
              ticks: {
                fontColor: "#000",
                display: true,
                padding: 20,
                fontSize: 14,
                stepSize: 10000,
                callback: function(value) {
                  var ranges = [
                      { divider: 1e6, suffix: 'M' },
                      { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                      for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                      }
                      return n;
                  }
                  return "$" + formatNumber(value);
                }
              }
            }],
            xAxes: [{
              stacked: false,
              categoryPercentage: .6,
              ticks: {
                beginAtZero: true,
                fontColor: "#000",
                display: true,
                padding: 20,
                fontSize: 14
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: true
              },
              barPercentage: .7
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
  })


  });
})(jQuery);