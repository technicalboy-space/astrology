import React from 'react';
import {Image, StyleSheet, Text, View, Platform} from 'react-native';

const About = (props) => {
  return (
    <>
      <View>
        <Text style={styles.title}>Your report is ready</Text>
        <View style={styles.description}>
          <View style={styles.descriptionIcons}>
            <Image
              style={styles.icon}
              source={require('../../../assets/icons/Today.png')}
            />
            <Image
              style={styles.icon}
              source={require('../../../assets/icons/Warning.png')}
            />
            <Image
              style={styles.icon}
              source={require('../../../assets/icons/Idea.png')}
            />
            {props.isEnabled && (
              <Image
                style={styles.icon}
                source={require('../../../assets/icons/Browse.png')}
              />
            )}
          </View>
          <View style={styles.descriptionText}>
            <Text style={styles.subTitle}>
              View your personalized horoscope
            </Text>
            <Text style={styles.subTitle}>Get to know about life threats</Text>
            <Text style={styles.subTitle}>
              Explore ideas for your happiness
            </Text>
            {props.isEnabled && (
              <Text style={styles.subTitle}>
                Look at more data about your life
              </Text>
            )}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 40,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: Platform.OS === 'android' ? 'FiraSans-Regular' : 'Fira Sans',
  },
  subTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.15,
    marginBottom: 16,
    fontFamily: Platform.OS === 'android' ? 'Roboto-Regular' : 'Roboto',
  },
  icon: {
    marginBottom: 16,
  },
  description: {
    flex: 1,
    flexDirection: 'row',
    left: 16,
  },
  descriptionIcons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
  },
  descriptionText: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    left: 12,
  },
});

export default About;
