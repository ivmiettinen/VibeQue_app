import React, { Component } from 'react';
import { FlatList, Text, Button, View, Alert } from 'react-native';

import Separator from './Separator';
import Item from './Item';

export default ({ items, onEndReached }) => (
  <FlatList
    data={items}
    renderItem={info => <Item item={info.item} />}
    ItemSeparatorComponent={() => <Separator />}
    keyExtractor={item => item.id}
    onEndReached={onEndReached}
  />
);
