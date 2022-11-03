import React from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLine,
  VictoryLegend,
  VictoryLabel,
} from 'victory-native';

import { IconButton, Icon } from '@draftbit/ui';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
// import CalendarPicker from 'react-native-calendar-picker';
// const data = [
//   {med_name: 'med 1', count: 10},
//   {med_name: 'med 2', count: 2},
//   {med_name: 'med 3', count: 30},
//   {med_name: 'med 4', count: 14},
//   {med_name: 'med 5', count: 5},
// ]

// data.sort((d1, d2)=> d1.count-d2.count)

export const SensibleAvatarWrapper = ({
  children,
  showAvatarIds,
  listData,
}) => {
  // console.log('this userId', showAvatarIds, listData.userId, listData.title)

  if (showAvatarIds.includes(listData?.id)) return <>{children}</>;
  return <View style={{ height: 30, width: 30, borderRadius: '100%' }} />;
};

export const SetShowAvatarIdsWrapper = ({
  children,
  setShowAvatarIds,
  isRecievedMessage,
  fetchData,
  setIsLoading,
}) => {
  React.useEffect(() => {
    setIsLoading(true);

    let owner = '';
    const ids = [];

    for (const { userId, id } of fetchData) {
      if (isRecievedMessage(userId)) {
        if (['', 'me'].includes(owner) || userId !== owner) {
          console.log('adding id to show avatar', userId, owner, id);
          ids.push(id);
        }

        owner = userId;
      } else {
        owner = 'me';
      }
      // console.log(ids)
      setIsLoading(false);
      setShowAvatarIds(ids);
    }
  }, []);

  return <>{children}</>;
};

export class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { med_name: 'med 1', count: 10 },
        { med_name: 'med 2', count: 22 },
        { med_name: 'med 3', count: 13 },
        { med_name: 'med 4', count: 40 },
        { med_name: 'med 5', count: 57 },
      ],
    };
  }

  componentDidMount() {
    const copyData = [...this.state.data];
    console.log('before sorting', copyData);
    copyData.sort((d1, d2) => d2.count - d1.count);
    console.log('after sorting', copyData);

    this.setState({ data: [...copyData] });
  }

  render() {
    const { data } = this.state;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <VictoryChart>
          <VictoryBar
            horizontal
            style={{ data: { fill: 'red', width: 10 } }}
            data={data}
            cornerRadius={4}
            labels={data.map(datum => datum.count)}
            x="med_name"
            y="count"
          />
          {data.map((d, i) => {
            // console.log(d)
            return (
              <VictoryAxis
                dependentAxis
                key={i}
                style={{
                  axis: { stroke: '#fff' },
                }}
                label={d.med_name}
                style={{
                  tickLabels: { fill: 'none' },
                  axis: { stroke: '' },
                  axisLabel: { fontSize: 15, padding: -30 },
                }}
                axisValue={d.med_name}
              />
            );
          })}
        </VictoryChart>
      </View>
    );
  }
}

export class BarChart1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { med_name: 'med 1', count: 10 },
        { med_name: 'med 2', count: 22 },
        { med_name: 'med 3', count: 13 },
        { med_name: 'med 4', count: 40 },
        { med_name: 'med 5', count: 57 },
      ],
    };
  }

  componentDidMount() {
    const copyData = [...this.state.data];
    console.log('before sorting', copyData);
    copyData.sort((d1, d2) => d2.count - d1.count);
    console.log('after sorting', copyData);

    this.setState({ data: [...copyData] });
  }

  render() {
    const { data } = this.state;
    const customAtt = { 'data-attr': 'value' };
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          {...customAtt}
          onClick={e => {
            // console.log('clicked', e.target['data-attr'])
          }}
          onTouchStart={e => {
            console.log(e.target);

            // console.log('clicked', e.target['data-attr'])
          }}
        >
          <Text>Not here</Text>
        </View>
        <VictoryChart>
          <VictoryBar
            horizontal
            style={{ data: { fill: 'red', width: 10 } }}
            data={data}
            cornerRadius={4}
            labels={data.map(datum => datum.count)}
            x="med_name"
            y="count"
          />
          {data.map((d, i) => {
            // console.log(d)
            return (
              <>
                <VictoryAxis
                  dependentAxis
                  key={i}
                  style={{
                    axis: { stroke: '#fff' },
                  }}
                  label={d.med_name}
                  style={{
                    tickLabels: { fill: 'none' },
                    axis: { stroke: '' },
                    axisLabel: { fontSize: 15, padding: -30 },
                  }}
                  axisValue={d.med_name}
                />
              </>
            );
          })}
        </VictoryChart>
      </View>
    );
  }
}

//  <VictoryLabel x={425} y={55} style={styles.labelTwo}
//           text={"Dinosaur exports\n $bn"}
//         />

export const LineChart = ({ cleanUpData }) => {
  const [data, legendsData] = cleanUpData();

  // console.log(data)

  return (
    <View style={styles.container}>
      <View>
        <VictoryLegend
          // title="Legend"
          // centerTitle
          height={100}
          itemsPerRow={2}
          orientation="horizontal"
          gutter={10}
          style={{ border: { stroke: '' }, title: { fontSize: 10 } }}
          data={legendsData}
        />
      </View>
      <View>
        <VictoryChart theme={VictoryTheme.material} width={380} height={300}>
          {data.map(([_, { data: lineData, color }]) => {
            return (
              <VictoryLine
                style={{
                  data: { stroke: color },
                  parent: { border: '1px solid #ccc' },
                }}
                data={lineData}
              />
            );
          })}
        </VictoryChart>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // // backgroundColor: "#f5fcff"
    // flexDirection: 'column',
    // marginBottom: 3
  },
});

export const UseNavigationParam = ({ param }) => {
  return <View style={{ paddingTop: 50 }}></View>;
};
