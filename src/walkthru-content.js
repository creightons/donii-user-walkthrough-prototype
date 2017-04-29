const React = require('react'),
	{ walkthruSections } = require('./constants');

class WalkthruContent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { section } = this.props;

		// Return a warning if the component is generated without a proper section
		if ( !section) {
			return (
				<div>No Content</div>
			);
		}

		const slidePages = walkthruSections[section],
			currentPage = 0,
			pageContext = slidePages[currentPage];

		const { title, imgUrl, text } = pageContext;

		return (
			<div className='walkthru-section'>
				<div className='walkthru-title'>
					{title}
				</div>
				<img src={imgUrl} />
				<p className='walkthru-description'>{text}</p>
			</div>
		);
	}
}

module.exports = WalkthruContent;