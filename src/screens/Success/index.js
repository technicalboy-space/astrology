import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const Success = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.img}>
            <Image source={require('../../../assets/img/success.png')} />
          </View>
          <View style={styles.titleView}>
            <Text style={styles.title}>
              Please wait while I prepare your report
            </Text>
          </View>
          <View style={styles.descriptionView}>
            <Text style={styles.description}>
              My content is developed by industry leaders like Stephanie
              Dempsey, Hans Decoz, Stephanie Gailing and Aliza Kelly.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  img: {
    marginTop: 92,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    paddingTop: 20,
    paddingBottom: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: 328,
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 40,
  },
  descriptionView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    width: 328,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default Success;
