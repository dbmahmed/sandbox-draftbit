import React from 'react';
import * as CustomCode from '../CustomCode.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import globalFunc from '../global-functions/globalFunc';
import * as Utils from '../utils';
import { IconButton, ScreenContainer } from '@draftbit/ui';
import { View } from 'react-native';

const BarChartScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  console.log(JSON.stringify(props));
  globalFunc(props);

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Utils.CustomCodeErrorBoundary>
        <CustomCode.BarChart />
      </Utils.CustomCodeErrorBoundary>
      <>
        {!false ? null : (
          <View>
            <IconButton
              onPress={() => {
                try {
                  globalFunc();
                } catch (err) {
                  console.error(err);
                }
              }}
              icon={'FontAwesome/photo'}
              size={32}
            />
          </View>
        )}
      </>
    </ScreenContainer>
  );
};

export default BarChartScreen;
