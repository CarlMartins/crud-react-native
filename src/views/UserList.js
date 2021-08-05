import React from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { Icon } from 'react-native-elements/dist/icons/Icon';

import users from '../data/users';

const UserList = (props) => {
  const confirmUserDeletion = (user) => {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          console.warn(`Deletado ${user.name}`);
        }
      },
      {
        text: 'Não'
      }
    ]);
  };

  const getAction = (user) => {
    return (
      <>
        <Button
          onPress={ () => props.navigation.navigate('UserForm', user) }
          type="clear"
          icon={
            <Icon
              name="edit"
              size={ 25 }
              color="orange"
            />
          }
        />

        <Button
          onPress={ () => confirmUserDeletion(user) }
          type="clear"
          icon={
            <Icon
              name="delete"
              size={ 25 }
              color="red"
            />
          }
        />

      </>
    );
  };

  const getUserItem = ({ item: user }) => {
    return (
      <ListItem bottomDivider
        onPress={ () => props.navigation.navigate('UserForm', user) }
      >
        <Avatar source={ { uri: user.avatarUrl } } />
        <ListItem.Content>
          <ListItem.Title>{ user.name }</ListItem.Title>
          <ListItem.Subtitle>{ user.email }</ListItem.Subtitle>
        </ListItem.Content>
        <View style={ styles.userIcons }>
          {
            getAction(user)
          }
        </View>
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

const styles = StyleSheet.create({
  userIcons: {
    flexDirection: 'row'
  }
});

export { UserList };