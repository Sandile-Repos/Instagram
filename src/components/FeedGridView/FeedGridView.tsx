import React from 'react';
import {FlatList} from 'react-native';
import {Post} from '../../API';
import FeedGridItem from './FeedGridItem';

interface IFeedGridView {
  data: (Post | null)[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
  refetch: () => void;
  loading: boolean;
}

const FeedGridView = ({
  data,
  ListHeaderComponent,
  refetch,
  loading,
}: IFeedGridView) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => item && <FeedGridItem post={item} />}
      numColumns={3}
      ListHeaderComponent={ListHeaderComponent} // scrollview /flatlist  doesn't work inside another scrollview if there in the same direction
      showsVerticalScrollIndicator={false}
      style={{marginHorizontal: -1}}
      onRefresh={refetch}
      refreshing={loading}
    />
  );
};
export default FeedGridView;
