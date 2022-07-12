import {Text, View, Image, FlatList, ScrollView} from 'react-native';
import React from 'react';

import user from '../../assets/data/user.json';
import styles from './styles';
import Button from '../../components/Button';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.headerRow}>
        <Image source={{uri: user.image}} style={styles.avatar} />
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>198</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>298</Text>
          <Text>Following</Text>
        </View>
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>
      {/* {Buttons} */}
      <View style={{flexDirection: 'row'}}>
        <Button
          text="Edit Profile"
          onPress={() => console.warn('On Edit Profile')}
        />
        <Button
          text="Another Button"
          onPress={() => console.warn('On another button')}
        />
      </View>
      {/* Grid view posts */}
      <FlatList
        data={user.posts}
        renderItem={({item}) => (
          <Image
            source={{uri: item.image || item.images[0]}}
            // style={{flex: 1, width: '100%', margin: 1, aspectRatio: 1}}
            style={{flex: 1, margin: 1, aspectRatio: 1, maxWidth: '33%'}}
          />
        )}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default ProfileScreen;
