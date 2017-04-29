const React = require('react');

function ModalTrigger({
	openModal,
	walkthruSection,
	classes,
}) {
	const triggerClasses = [ 'trigger', ...classes];
	const clickHandler = () => openModal(walkthruSection);
	
	return (
		<div
			className={triggerClasses.join(' ')}
			onClick= {clickHandler}
		/>
	);
}

module.exports = ModalTrigger;