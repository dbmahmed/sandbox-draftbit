import React from 'react';
import * as CustomCode from '../CustomCode.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import { ScreenContainer } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Platform } from 'react-native';

const NavigationParamExampleScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const testParam = param => {
    console.log(param);
    let cleaned = param.replace(
      param[0] === '?' ? '?project_id=' : 'project_id=',
      ''
    );
    cleaned = cleaned.replace('checkout_id=', '');
    // let cleaned = param.substring(1)

    let ret = cleaned.split('&');

    console.log(ret);

    // console.log(ret[0].split('=')[1])
    // console.log(ret[1].split('=')[1])

    // console.log(ret[0])
    // console.log(ret[1].split('=')[1])
    return ret;
  };

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      testParam(
        props.route?.params?.userId ?? 'project_id=2424234&checkout_id=4lj342'
      );
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [conversant_id, setConversant_id] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <>
        {!(Platform.OS === 'android') ? null : (
          <Utils.CustomCodeErrorBoundary>
            <CustomCode.UseNavigationParam param={conversant_id} />
          </Utils.CustomCodeErrorBoundary>
        )}
      </>
    </ScreenContainer>
  );
};

export default NavigationParamExampleScreen;
