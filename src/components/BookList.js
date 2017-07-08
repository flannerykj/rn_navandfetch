import React, {Component} from 'react'
import {View, Text,ListView} from 'react-native'
import BookPreview from './BookPreview';
import PropTypes from 'prop-types';

export default class BookList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
	}
	render() {
		console.log(this.props)
		return (
			<View>
				{this.props.books.map( book =>
				<BookPreview key={book.id} book={book}/>
					)}

			</View>)
	}
}

BookList.propTypes = {
	books: PropTypes.array.isRequired,
	onPress: PropTypes.func.isRequired
}
