import React from 'react';
import * as CustomCode from '../CustomCode.js';
import * as Utils from '../utils';
import { ScreenContainer } from '@draftbit/ui';

const BarChartCopyScreen = props => {
  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Utils.CustomCodeErrorBoundary>
        <CustomCode.BarChart1 />
      </Utils.CustomCodeErrorBoundary>
    </ScreenContainer>
  );
};

export default BarChartCopyScreen;
