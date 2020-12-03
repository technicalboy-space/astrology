import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Footer = () => {
  return (
    <>
      <View style={styles.lastTextView}>
        <Text style={styles.lastText}>
          By continuing, you agree to the terms of our End User License
          Agreement & Privacy Notice. Please note, if you don't cancel your
          subscription before the end of your current period, you'll be charged
          for the next period according to your subscription plan. All
          subscriptions are automatically renewed. 649₽ per week after
          the 7 days trial ends
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  lastTextView: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  lastText: {
    color: 'rgba(255, 255, 255, 0.40)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: Platform.OS === 'android' ? 'Roboto-Regular' : 'Roboto',
  },
});

export default Footer;
