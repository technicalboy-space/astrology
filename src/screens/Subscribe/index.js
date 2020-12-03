import React, {useState, useRef} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Switch,
  TouchableOpacity,
  LogBox,
  Image,
  Platform,
} from 'react-native';
import Footer from '../../components/Footer';
import About from '../../components/About';
import {connect} from 'react-redux';
import {getAllPrice, choosePrice} from '../../actions/price';
import PriceList from '../../components/PriceList';

const Subscribe = (props) => {
  LogBox.ignoreAllLogs();

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (isEnabled) {
      handleOut();
    } else {
      handleIn();
    }
  };

  getAllPrice();

  props.priceList.forEach((item) => {
    if (item.popular) {
      props.choosePrice(item);
    }
  });

  const size = useRef(new Animated.Value(1)).current;
  const y = useRef(new Animated.Value(0)).current;

  const animatedStyle = {
    transform: [{scale: size}, {translateY: y}],
  };
  const animatedStyleY = {
    transform: [{translateY: y}],
  };

  const handleIn = () => {
    Animated.timing(size, {
      toValue: 1,
      timing: 1200,
      useNativeDriver: true,
    }).start();
    Animated.timing(y, {
      toValue: 0,
      timing: 1200,
      useNativeDriver: true,
    }).start();
  };

  const handleOut = () => {
    Animated.timing(size, {
      toValue: 0.5,
      timing: 1200,
      useNativeDriver: true,
    }).start();
    Animated.timing(y, {
      toValue: -50,
      timing: 1200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <StatusBar backgroundColor={'#612E92'} barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.logo}>
            <Animated.Image
              style={[styles.logoSize, animatedStyle]}
              source={require('../../../assets/img/logo.png')}
            />
          </View>
          <View style={styles.close}>
            <Image source={require('../../../assets/icons/Close.png')} />
          </View>
          <Animated.View style={[animatedStyleY]}>
            <About isEnabled={isEnabled} />
            <View style={styles.freeBlock}>
              <View style={styles.freeBlockText}>
                <Text style={styles.freeText}>Free trial period for 7 day</Text>
                <Text style={styles.cancelText}>Cancel anytime</Text>
              </View>
              <View style={styles.freeSwitch}>
                <Switch
                  style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
                  trackColor={{
                    false: 'rgba(255, 255, 255, 0.38)',
                    true: 'rgba(254, 248, 170, 0.57)',
                  }}
                  thumbColor={isEnabled ? '#FEF8AA' : '#E2E2E2'}
                  ios_backgroundColor="rgba(255, 255, 255, 0.1)"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
            {isEnabled && (
              <View style={styles.appButtonView}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Success')}
                  style={styles.appButton}>
                  <Text style={styles.appButtonText}>TRY 7 DAYS FOR FREE</Text>
                </TouchableOpacity>
              </View>
            )}
            {!isEnabled && (
              <View style={styles.priceList}>
                <PriceList prices={props.priceList} />
              </View>
            )}
            {!isEnabled && (
              <View style={styles.appButtonView}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Success')}
                  style={styles.appButtonSubscribe}>
                  <Text style={styles.appButtonText}>SUBSCRIBE</Text>
                </TouchableOpacity>
              </View>
            )}
            <Footer />
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#612E92',
  },
  logoSize: {
    height: 133,
    width: 208,
    resizeMode: 'contain',
  },
  logo: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  freeBlock: {
    borderTopColor: 'rgba(255, 255, 255, 0.47)',
    borderTopWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.47)',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  freeBlockText: {
    left: 32,
  },
  freeSwitch: {
    right: 27,
    justifyContent: 'center',
  },
  freeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 40,
  },
  cancelText: {
    color: 'rgba(255, 255, 255, 0.43)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    marginBottom: 12,
    fontFamily: Platform.OS === 'android' ? 'FiraSans-Regular' : 'Fira Sans',
  },
  appButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  appButton: {
    marginTop: 16,
    marginBottom: 23,
    width: 303,
    height: 50,
    paddingVertical: 17,
    paddingHorizontal: 70,
    backgroundColor: '#FEF8AA',
    borderRadius: 11,
  },
  appButtonText: {
    color: '#000000',
    fontFamily: Platform.OS === 'android' ? 'FiraSans-Regular' : 'Fira Sans',
  },
  freeButton: {
    backgroundColor: '#FFFFFF',
    fontFamily: Platform.OS === 'android' ? 'FiraSans-Regular' : 'Fira Sans',
  },
  appButtonSubscribe: {
    marginTop: 16,
    marginBottom: 23,
    width: 224,
    height: 50,
    paddingVertical: 17,
    paddingHorizontal: 70,
    backgroundColor: '#FEF8AA',
    borderRadius: 11,
  },
  priceList: {
    marginTop: 27,
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    priceList: state.priceReducer.priceList,
  };
};

export default connect(mapStateToProps, {getAllPrice, choosePrice})(Subscribe);
