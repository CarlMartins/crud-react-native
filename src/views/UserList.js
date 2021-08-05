import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';

import users from '../data/users';

const UserList = (props) => {
  const getUserItem = ({ item }) => {
    return (
      <ListItem bottomDivider
        onPress={ () => props.navigation.navigate('UserForm') }
      >
        <Avatar source={ { uri: item.avatarUrl } } />
        <ListItem.Content>
          <ListItem.Title>{ item.name }</ListItem.Title>
          <ListItem.Subtitle>{ item.email }</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <View>
      <FlatList
        data={ users }
        keyExtractor={ user => user.id.toString() }
        renderItem={ getUserItem }
      />
    </View>
  );
};

export { UserList };