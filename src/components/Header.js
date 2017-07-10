import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
	View,
	Text,
	Button
} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
	render() {
		return(
			<View>
				<Text>'{this.props.text}'</Text>
			</View>
    )
	}
}
