const React = require('react');

function ModalTrigger({
	openModal,
	walkthruSection,
	classes,
}) {
	const triggerClasses = [ 'trigger', ...classes];
	const walkthruClasses = [ 'walkthru-trigger', ...classes];
	const clickHandler = () => openModal(walkthruSection);
	
	return (
		<span
			className={walkthruClasses.join(' ')}
			onClick= {clickHandler}
		>
			Help
		</span>
	);
}

module.exports = ModalTrigger;