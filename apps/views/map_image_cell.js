import React, { Component } from 'react'
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableHighlight,
} from 'react-native'

import PinnedMapImage from './pinned_map_image'
import Location from '../entities/location'

import {cellStyles} from '../styles/common_styles'
import commonShadow from '../styles/common_shadow'
import elevations from '../styles/elevations'

//------------------------
type Props = {
  location : Location,
  name : string,
  distance : number,
  onPress : Function,
}
type State = {
}

export default class MapImageCell extends Component {
  props : Props
  state : State

  render() {
    const props = this.props
    const lat = props.location.latitude
    const lon = props.location.longitude

    return (
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor='#BBB'
        style={{flex : 1}}
        onPress={() => this.props.onPress()}
      >
        <View style={cellStyles.parent}>
          <PinnedMapImage
            lat={lat} lon={lon}
            style={cellStyles.mainContent}/>
          <View style={cellStyles.textArea}>
            <Text style={cellStyles.name}>
              {this.props.name}
            </Text>
            <Text style={cellStyles.distance}>
              {Math.floor(this.props.distance) + 'm'}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
