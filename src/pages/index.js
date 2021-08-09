import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';
import Table from '../components/Table';
import Price from '../components/Price';

export default function IndexPage() {

  useEffect(() => {    
    ///  Calling API and modeling data for each chart ///
const btcData = async () => {
  const response = await fetch('https://api.casperdefi.com/v1/tokens/0x5cc61a78f164885776aa610fb0fe1257df78e59b/trading-view?chainId=250&exchange=spirit');
  const json = await response.json();
  const data = json.data.tokens.history
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}


const cosmosData = async () => {
  const response = await fetch('https://api.casperdefi.com/v1/tokens/0x841fad6eae12c286d1fd18d1d525dffa75c7effe/trading-view?chainId=250&exchange=spooky');
  const json = await response.json();
  const data = json.data.tokens.history
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}


// const ethereumData = async () => {
//   const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
//   const json = await response.json();
//   const data = json.Data.Data
//   const times = data.map(obj => obj.time)
//   const prices = data.map(obj => obj.high)
//   return {
//     times,
//     prices
//   }
// }


/// Error handling ///
function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}



/// Charts ///
let createBtcChart
let createCosmosChart
let createethereumChart

async function printBtcChart() {
  let { times, prices } = await btcData()

  let btcChart = document.getElementById('btcChart').getContext('2d');

  let gradient = btcChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createBtcChart = new Chart(btcChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}



async function printCosmosChart() {
  let { times, prices } = await cosmosData()

  let cosmosChart = document.getElementById('cosmosChart').getContext('2d');

  let gradient = cosmosChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(27,30,54,.5)');
  gradient.addColorStop(.425, 'rgba(46,49,72,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createCosmosChart = new Chart(cosmosChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: "",
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(46,49,72,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}


// async function printEthereumChart() {
//   let { times, prices } = await ethereumData()

//   let ethereumChart = document.getElementById('ethereumChart').getContext('2d');

//   let gradient = ethereumChart.createLinearGradient(0, 0, 0, 400);

//   gradient.addColorStop(0, 'rgba(78,56,216,.5)');
//   gradient.addColorStop(.425, 'rgba(118,106,192,0)');

//   Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
//   Chart.defaults.global.defaultFontSize = 12;

//   createEthereumChart = new Chart(ethereumChart, {
//     type: 'line',
//     data: {
//       labels: times,
//       datasets: [{
//         label: '$',
//         data: prices,
//         backgroundColor: gradient,
//         borderColor: 'rgba(118,106,192,1)',
//         borderJoinStyle: 'round',
//         borderCapStyle: 'round',
//         borderWidth: 3,
//         pointRadius: 0,
//         pointHitRadius: 10,
//         lineTension: .2,
//       }]
//     },

//     options: {
//       title: {
//         display: false,
//         text: 'Heckin Chart!',
//         fontSize: 35
//       },

//       legend: {
//         display: false
//       },

//       layout: {
//         padding: {
//           left: 0,
//           right: 0,
//           top: 0,
//           bottom: 0
//         }
//       },

//       scales: {
//         xAxes: [{
//           display: false,
//           gridLines: {}
//         }],
//         yAxes: [{
//           display: false,
//           gridLines: {}
//         }]
//       },

//       tooltips: {
//         callbacks: {
//           //This removes the tooltip title
//           title: function() {}
//        },
//         //this removes legend color
//         displayColors: false,
//         yPadding: 10,
//         xPadding: 10,
//         position: 'nearest',
//         caretSize: 10,
//         backgroundColor: 'rgba(255,255,255,.9)',
//         bodyFontSize: 15,
//         bodyFontColor: '#303030' 
//       }
//     }
//   });
// }


/// Update current price ///
// async function updateEthereumPrice() {
//   let { times, prices } = await ethereumData()
//   let currentPrice = prices[prices.length-1].toFixed(2);

//   document.getElementById("ethPrice").innerHTML = "$" + currentPrice;
// }

async function updateCosmosPrice() {
  let { times, prices } = await cosmosData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  document.getElementById("atomPrice").innerHTML = "$" + currentPrice;
}

async function updateBitcoinPrice() {
  let { times, prices } = await btcData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  document.getElementById("btcPrice").innerHTML = "$" + currentPrice;
}

// updateEthereumPrice()
updateCosmosPrice()
updateBitcoinPrice()

printBtcChart()
printCosmosChart()
// printEthereumChart()    
  });


  return (
    <div className="max-w-3xl mx-auto p-6 md:p-12 font-mono">
      <div className="space-y-8">
        <div className="md:max-w-3xl space-y-1">
          <p className="text-2xl">CasperDefi Presents</p>
          <p className="text-4xl md:text-5xl font-bold">Spirit v Spooky</p>
          <br />
          <p>
            We all know that SpiritSwap &amp; SpookySwap are the leading DEXs on Fantom, So we made a mini app to check the live price of both of them using the Casper API!
          </p>
        </div>

        <container className="container">
          <cards className="cards">
            <bitcoin style={{ width: "30%" }} className="btc">
              <card className="asset-info">
              <img
                    src="https://www.spiritswap.finance/assets/imgs/spiritswap_logo_xl.png"
                    width="15%"
                  />
                <div className="title">
                  <h1>Spirit</h1>
                </div>
                <div className="details">
                  <h2 className="asset-price" id="btcPrice" />
                </div>
              </card>
              <canvas id="btcChart" />
            </bitcoin>
            <cosmos style={{ width: "30%" }} className="cosmos">
              <card className="asset-info">
                <div className="title">
                  <img
                    src="https://gblobscdn.gitbook.com/spaces%2F-MXi8tZ-Fm6oya_e72FM%2Favatar-1617829666394.png?alt=media"
                    width="15%"
                  />
                  <h1>BOO</h1>
                </div>
                <div className="details">
                  <h2 className="asset-price" id="atomPrice" />
                </div>
              </card>
              <canvas id="cosmosChart" />
            </cosmos>
            {/* <ethereum style={{ width: "30%" }} className="ethereum">
              <card className="asset-info">
                <div className="title">
                  <img
                    src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eth.svg"
                    width="10%"
                  />
                  <h1>Ethereum</h1>
                </div>
                <div className="details">
                  <h2 className="asset-price" id="ethPrice" />
                </div>
              </card>
              <canvas id="ethereumChart" />
            </ethereum> */}
          </cards>
        </container>
      </div>

      <Price />

      <Table />

      <div>
        <p className="opacity-50 text-center">
          A{" "}
          <a
            className="underline hover:no-underline"
            href="http://casperdefi.com"
            target="_blank"
            rel="noreferrer"
          >
            CasperDefi
          </a>{" "}
          Project
        </p>
      </div>
    </div>
  );
}
