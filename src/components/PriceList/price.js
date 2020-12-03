import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {choosePrice} from '../../actions/price';

const Price = (props) => {
  const price = props.price;
  const editActivePrice = () => {
    props.choosePrice(price);
  };
  return (
    <TouchableOpacity
      onPress={editActivePrice}
      style={[
        styles.appButtonSubscribe,
        props.activePrice === price
          ? styles.borderActive
          : styles.borderNoActive,
      ]}>
      <View style={styles.blockText}>
        <Text
          style={[
            styles.name,
            props.activePrice === price
              ? styles.titleActive
              : styles.titleNoActive,
          ]}>
          {price.name}
        </Text>
        <Text
          style={[
            styles.description,
            props.activePrice === price
              ? styles.descriptionActive
              : styles.descriptionNoActive,
          ]}>
          {price.description}
        </Text>
      </View>
      {price.popular && (
        <View style={styles.tag}>
          <Text style={styles.tagText}>Popular</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonSubscribe: {
    marginTop: 10,
    marginHorizontal: 16,
    height: 64,
    borderRadius: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  borderNoActive: {
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
  },
  borderActive: {
    borderColor: '#FEF8AA',
    borderWidth: 2,
  },
  blockText: {
    marginLeft: 17,
  },
  name: {
    marginTop: 7,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    fontFamily: Platform.OS === 'android' ? 'FiraSans-Regular' : 'Fira Sans',
  },
  titleActive: {
    color: '#FFFFFF',
  },
  titleNoActive: {
    color: 'rgba(255, 255, 255, 0.56)',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    fontFamily: Platform.OS === 'android' ? 'FiraSans-Regular' : 'Fira Sans',
  },
  descriptionActive: {
    color: 'rgba(255, 255, 255, 0.74)',
  },
  descriptionNoActive: {
    color: 'rgba(255, 255, 255, 0.56)',
  },
  tag: {
    width: 85,
    height: 21,
    backgroundColor: '#FEF8AA',
    borderRadius: 10.5,
    paddingHorizontal: 22,
    marginTop: 10,
    marginRight: 10,
  },
  tagText: {
    fontSize: 11,
    lineHeight: 20,
    fontFamily: Platform.OS === 'android' ? 'FiraSans-Regular' : 'Fira Sans',
  },
});

const mapStateToProps = (state) => {
  return {
    activePrice: state.activePriceReducer.activePrice,
  };
};

export default connect(mapStateToProps, {choosePrice})(Price);
