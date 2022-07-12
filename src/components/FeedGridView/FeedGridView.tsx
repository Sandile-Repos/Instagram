import React from 'react';
import {Image, FlatList} from 'react-native';
import {IPost} from '../../types/models';
import FeedGridItem from './FeedGridItem';

interface IFeedGridView {
  data: IPost[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const FeedGridView = ({data, ListHeaderComponent}: IFeedGridView) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <FeedGridItem post={item} />}
      numColumns={3}
      ListHeaderComponent={ListHeaderComponent} // scrollview /flatlist  doesn't work inside another scrollview if there in the same direction
      showsVerticalScrollIndicator={false}
      style={{marginHorizontal: -1}}
    />
  );
};
export default FeedGridView;
