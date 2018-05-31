import PropTypes from 'prop-types';
import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core/styles';

import ProjectAddForm from 'Src/containers/project-add-form';


const styles = theme => ({
	dialog: {
		[theme.breakpoints.up('sm')]: {
			minWidth: 400,
		},
	},
	title: {
		'& > *': {
			overflowX: 'hidden',
			textOverflow: 'ellipsis',
		},
	},
});


function Transition(props) {
	return <Slide direction="up" {...props} />;
}

function ProjectAddDialog({ classes, handleClose, isOpen, mode }) {
	const isDocumentForm = mode === 'document';
	const dialogProps = {
		classes: {
			paper: classes.dialog,
		},
		disableBackdropClick: true,
		disableEscapeKeyDown: true,
		open: isOpen,
		onClose: handleClose,
		TransitionComponent: Transition,
	};
	const submitButtonProps = {
		children: isDocumentForm ? 'Загрузить' : 'Создать',
		form: isDocumentForm ? 'add-document' : 'add-directory',
		type: 'submit',
	};


	return (
		<Dialog {...dialogProps}>
			<DialogTitle className={classes.title + ' noselect'}>
				{
					isDocumentForm ?
						'Добавить документ' :
						'Создать каталог'
				}
			</DialogTitle>
			<DialogContent>
				<DialogContentText className="noselect">
					{
						isDocumentForm ?
							'Пожалуйста, убедитесь, что загружаемый файл содержит только один документ. Например спецификацию или сборочный чертёж.' :
							'Пожалуйста, создавайте каталоги только для группирования документов с децимальным номером, отличающимся от родительского.'
					}
				</DialogContentText>
				<ProjectAddForm />
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={handleClose}>Отмена</Button>
				<Button color="primary" {...submitButtonProps} />
			</DialogActions>
		</Dialog>
	);
}

ProjectAddDialog.propTypes = {
	classes: PropTypes.object,
	handleClose: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	mode: PropTypes.oneOf(['directory', 'document']).isRequired,
};


export default withStyles(styles)(ProjectAddDialog);