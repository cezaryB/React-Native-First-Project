import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default class AlbumList extends Component {
    constructor() {
        super();
        this.state = {
            albums: []
        };
    }
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => {
            this.setState({
                albums: response.data
            });
        }).then(() => {
            console.log(this.state);
        });    
    }
    renderAlbums() {
        this.state.albums.map(album => {
            return <Text>{album.title}</Text>;
        });  
    }
    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>    
        );
    }
}
