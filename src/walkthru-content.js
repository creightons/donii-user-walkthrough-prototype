const React = require('react'),
	{ walkthruSections } = require('./constants');

class WalkthruContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = this.getInitialState();

		this.isPrevEnabled = this.isPrevEnabled.bind(this);
		this.isNextEnabled = this.isNextEnabled.bind(this);
		this.nextPage = this.nextPage.bind(this);
		this.prevPage = this.prevPage.bind(this);
	}

	getInitialState() {
		const { section } = this.props,
			currentPages = walkthruSections[section];

		let state = {};

		state.currentPageIndex = 0;
		state.numberOfPages = currentPages.length;
		state.nextEnabled = state.numberOfPages > 1;
		state.prevEnabled = false;

		return state;
	}

	isPrevEnabled() {
		return this.state.currentPageIndex > 0;
	}

	isNextEnabled() {
		const { currentPageIndex, numberOfPages } = this.state;
		return currentPageIndex < (numberOfPages - 1);
	}

	nextPage() {
		const { currentPageIndex } = this.state;
		if (this.isNextEnabled()) {
			this.setState({ currentPageIndex: currentPageIndex + 1 });
		}
	}

	prevPage() {
		const { currentPageIndex } = this.state;
		if (this.isPrevEnabled()) {
			this.setState({ currentPageIndex: currentPageIndex - 1 });
		}
	}

	render() {
		const { section } = this.props;
		const { currentPageIndex } = this.state;

		// Return a warning if the component is generated without a proper section
		if (!section) {
			return (
				<div>No Content</div>
			);
		}

		const slidePages = walkthruSections[section],
			pagestate = slidePages[currentPageIndex];

		const { title, imgUrl, text } = pagestate;

		return (
			<div className='walkthru-section'>
				<div className='walkthru-header'>
					<h4 className='walkthru-title'>{title}</h4>
				</div>
				<div className='walkthru-content'>
					<img src={imgUrl} />
					<p className='walkthru-description'>{text}</p>
					<div className='walkthru-nav-buttons'>
						<button
							onClick={this.prevPage}
							disabled={!(this.isPrevEnabled())}
						>
							Previous
						</button>
						<button
							onClick={this.nextPage}
							disabled={!(this.isNextEnabled())}
						>
							Next
						</button>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = WalkthruContent;