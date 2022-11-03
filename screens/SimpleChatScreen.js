import React from 'react';
import * as CustomCode from '../CustomCode.js';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import {
  CircleImage,
  IconButton,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const SimpleChatScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const sortedByUserId = messages => {
    messages.sort(
      ({ userId: userId1 }, { userId: userId2 }) => userId1 - userId2
    );
    return messages;
  };

  const isRecievedMessage = value => {
    return value !== currentUserId;
  };

  const isAvatarVisible = value => {
    return showAvatarIds.include(value);
  };

  const { theme } = props;

  const [currentUserId, setCurrentUserId] = React.useState(5);
  const [isLoading, setIsLoading] = React.useState(true);
  const [owner, setOwner] = React.useState("''");
  const [showAvatarIds, setShowAvatarIds] = React.useState([]);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={styles.KeyboardAwareScrollViewc992f941Content}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        <KeyboardAwareScrollView
          contentContainerStyle={styles.KeyboardAwareScrollView1a0a9020Content}
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps={'never'}
        >
          <DraftbitApi.FetchPostsGET limit={20}>
            {({ loading, error, data, refetchPosts }) => {
              const fetchData = data;
              if (!fetchData || loading) {
                return <ActivityIndicator />;
              }

              if (error) {
                return (
                  <Text style={{ textAlign: 'center' }}>
                    There was a problem fetching this data
                  </Text>
                );
              }

              return (
                <Utils.CustomCodeErrorBoundary>
                  <CustomCode.SetShowAvatarIdsWrapper
                    setShowAvatarIds={setShowAvatarIds}
                    isRecievedMessage={isRecievedMessage}
                    fetchData={sortedByUserId(fetchData)}
                    setIsLoading={setIsLoading}
                  >
                    <>
                      {isLoading ? null : (
                        <FlatList
                          data={sortedByUserId(fetchData)}
                          listKey={'SjZbI17h'}
                          keyExtractor={listData =>
                            listData?.id ||
                            listData?.uuid ||
                            JSON.stringify(listData)
                          }
                          renderItem={({ item }) => {
                            const listData = item;
                            return (
                              <>
                                <>
                                  {!isRecievedMessage(
                                    listData?.userId
                                  ) ? null : (
                                    <View style={styles.View83909238}>
                                      <View style={styles.View06f98611}>
                                        <Utils.CustomCodeErrorBoundary>
                                          <CustomCode.SensibleAvatarWrapper
                                            showAvatarIds={showAvatarIds}
                                            listData={listData}
                                          >
                                            <CircleImage
                                              style={styles.CircleImaged3e1b854}
                                              size={30}
                                              source={{
                                                uri: `${listData?.thumbnail_url}`,
                                              }}
                                            />
                                          </CustomCode.SensibleAvatarWrapper>
                                        </Utils.CustomCodeErrorBoundary>
                                        <View
                                          style={[
                                            styles.Viewd44ddad4,
                                            {
                                              backgroundColor:
                                                theme.colors.surface,
                                              borderRadius: 12,
                                            },
                                          ]}
                                        >
                                          <Text
                                            style={{
                                              color: theme.colors.strong,
                                            }}
                                          >
                                            {listData?.title}
                                            {' - '}
                                            {listData?.userId}
                                          </Text>
                                        </View>
                                      </View>
                                    </View>
                                  )}
                                </>
                                <>
                                  {isRecievedMessage(
                                    listData?.userId
                                  ) ? null : (
                                    <View style={styles.Viewc65acab6}>
                                      <View style={styles.View1e66795e}>
                                        <View
                                          style={[
                                            styles.View6b0ef565,
                                            {
                                              borderRadius: 12,
                                              backgroundColor:
                                                theme.colors.primary,
                                            },
                                          ]}
                                        >
                                          <Text
                                            style={{
                                              color: theme.colors.strong,
                                            }}
                                          >
                                            {listData?.title}
                                            {' - '}
                                            {listData?.userId}
                                          </Text>
                                        </View>
                                      </View>
                                    </View>
                                  )}
                                </>
                                <Spacer top={8} right={8} bottom={8} left={8} />
                              </>
                            );
                          }}
                          contentContainerStyle={styles.FlatListc992f941Content}
                          numColumns={1}
                        />
                      )}
                    </>
                  </CustomCode.SetShowAvatarIdsWrapper>
                </Utils.CustomCodeErrorBoundary>
              );
            }}
          </DraftbitApi.FetchPostsGET>
        </KeyboardAwareScrollView>

        <View
          style={[
            styles.Viewba1b0402,
            {
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.divider,
            },
          ]}
        >
          <View style={styles.Viewc992f941}>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInput5476f367,
                { borderColor: theme.colors.divider },
              ]}
              value={textInputValue}
              placeholder={'Enter a value...'}
            />
          </View>
          <Spacer top={8} right={8} bottom={8} left={8} />
          <IconButton icon={'Feather/send'} size={32} />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  CircleImaged3e1b854: {
    marginLeft: 0,
    marginRight: 5,
  },
  Fetch431eb058: {
    minHeight: 40,
  },
  FlatListc992f941Content: {
    flex: 1,
  },
  KeyboardAwareScrollView1a0a9020Content: {
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 16,
  },
  KeyboardAwareScrollViewc992f941Content: {
    flex: 1,
  },
  TextInput5476f367: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
  View06f98611: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row',
  },
  View1e66795e: {
    flexDirection: 'row-reverse',
  },
  View6b0ef565: {
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
  View83909238: {
    alignItems: 'flex-start',
    flex: 1,
  },
  Viewba1b0402: {
    alignItems: 'center',
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  Viewc65acab6: {
    alignItems: 'flex-end',
  },
  Viewc992f941: {
    flex: 1,
  },
  Viewd44ddad4: {
    flex: 1,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
});

export default withTheme(SimpleChatScreen);
