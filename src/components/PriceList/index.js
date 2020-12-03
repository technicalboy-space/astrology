import React from 'react';
import {FlatList} from 'react-native';
import Price from './price';

const PriceList = ({prices}) => {
  const renderItem = ({item}) => {
    console.log(item);
    return <Price price={item} />;
  };

  return (
    <FlatList
      data={prices}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      scrollEnabled={false}
    />
  );
};

export default PriceList;
