const React = require('react'),
	{
		DONATIONS,
		TOTAL_VALUE,
		DEMOGRAPHICS,
	} = require('./constants'),
	ModalTrigger = require('./modal-trigger'),
	Modal =  require('react-modal'),
	WalkthruContent = require('./walkthru-content');

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalVisible: false,
			walkthruSection: undefined,
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal(walkthruSection) {
		this.setState({
			modalVisible: true,
			walkthruSection,
		});
	}

	closeModal() {
		this.setState({ modalVisible: false });
	}

	render() {
		return (
			<div className='demo-container'>
				<img src='images/donii-dashboard.png' className='donii-dashboard' />
				<ModalTrigger
					openModal={this.openModal}
					walkthruSection={DONATIONS}
					classes={['trigger-donations']}
				/>
				<ModalTrigger
					openModal={this.openModal}
					walkthruSection={TOTAL_VALUE}
					classes={['trigger-total-value']}
				/>
				<ModalTrigger
					openModal={this.openModal}
					walkthruSection={DEMOGRAPHICS}
					classes={['trigger-demographics']}
				/>
				<Modal
					isOpen={this.state.modalVisible}
					contentLabel='Modal'
					onRequestClose={this.closeModal}
					className='modal-container'
					overlayClassName='modal-overlay'
				>
					<WalkthruContent section={this.state.walkthruSection} />
				</Modal>
			</div>
		);
	}
}

module.exports = App;