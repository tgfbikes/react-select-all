

import React from 'react';
import PropTypes from 'prop-types';
import './SelectAll.css';

export default class SelectAll extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			isChecked: props.items.length === props.itemsSelected,
			isIndeterminate: props.items.length !== props.itemsSelected, // Only for testing
		};
		this.mainCheckbox = null;
		this.getCheckboxRef = this.getCheckboxRef.bind(this);
	}

	componentWillReceiveProps (nextProps) {
		const showAsIndeterminate = nextProps.itemsSelected > 0 && (nextProps.itemsSelected !== nextProps.items.length);
		const showAsChecked = nextProps.itemsSelected > 0 && (nextProps.itemsSelected === nextProps.items.length);

		this.mainCheckbox.indeterminate = showAsIndeterminate;
		this.setState({
			isChecked: showAsChecked,
			isIndeterminate: showAsIndeterminate,
		});
	}

	getCheckboxRef (node) {
		this.mainCheckbox = node;
	}

	render () {
		const { disabled, id, onChange } = this.props;

		return (
			<input
				className="SelectAll"
				id={id}
				type="checkbox"
				ref={this.getCheckboxRef}
				disabled={disabled}
				onChange={onChange}
				checked={this.state.isChecked}
			/>
		);
	}
}

SelectAll.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
	itemsSelected: PropTypes.number.isRequired,
	items: PropTypes.array.isRequired,
	id: PropTypes.string,
};

SelectAll.defaultProps = {
	disabled: false,
	onChange: () => console.warn('From SelectAllCheckbox: Looks like you haven\'t passed me an onChange handler...hook me up ;).')
};
