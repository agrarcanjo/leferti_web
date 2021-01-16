import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

interface Props {
  visible: boolean,
}

const Loading = (props: Props) => {
        
  return ( 
      <View>
        {props.visible &&
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#666" />
          </View>
        }
      </View> 
)};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      },
});

export default Loading;