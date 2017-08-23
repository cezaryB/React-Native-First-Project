import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AlbumList extends Component {
    componentWillMount() {
        console.log('it works!');
    }
    render() {
        return (
            <View>
                <Text>Album list</Text>
            </View>    
        );
    }
}
