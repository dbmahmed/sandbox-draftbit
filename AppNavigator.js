import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import BarChartCopyScreen from './screens/BarChartCopyScreen';
import BarChartScreen from './screens/BarChartScreen';
import LineChartScreen from './screens/LineChartScreen';
import NavigationParamExampleScreen from './screens/NavigationParamExampleScreen';
import SimpleChatScreen from './screens/SimpleChatScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '"rgba(0, 0, 0, 0)"',
          borderTopColor: theme.colors['Light Inverse'],
        },
      }}
    >
      <Tab.Screen
        name="LineChartScreen"
        component={LineChartScreen}
        options={{
          title: 'Line Chart',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/linechart"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BarChartScreen"
        component={BarChartScreen}
        options={{
          title: 'Bar Chart',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/barschart"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SimpleChatScreen"
        component={SimpleChatScreen}
        options={{
          title: 'Simple Chat',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Entypo/chat"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator>
        <Stack.Screen
          name="BarChartCopyScreen"
          component={BarChartCopyScreen}
          options={{ title: 'Bar Chart Copy' }}
        />
        <Stack.Screen
          name="NavigationParamExampleScreen"
          component={NavigationParamExampleScreen}
          options={{ title: 'Navigation Param Example' }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
