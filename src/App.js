import React from 'react';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import CustomChart from './CustomChart';
import { data, data2 } from './data';

function App() {
  return (
    <div className="App">
      <h1>Victoria tracks stocks.</h1>
      <h3>Tell Victoria what stocks to track.</h3>
      <CustomChart>
        <VictoryChart
          theme={VictoryTheme.material}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
          interpolation='natural'
          height={450}
          width={800}
          margin={{ top: 20, bottom: 20 }}
          categories={{
            x: ["Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ]
          }}
        >
          <VictoryLine
            interpolation='natural'
            data={data} />
          <VictoryLine
            interpolation='natural'
            style={{ data: { stroke: 'red' } }}
            data={data2} />
        </VictoryChart>
      </CustomChart>
    </div>
  );
}

export default App;
