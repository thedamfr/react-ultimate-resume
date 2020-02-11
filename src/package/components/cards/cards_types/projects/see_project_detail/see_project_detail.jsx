import React from 'react';

import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { ProjectDialog } from '../project_dialog/project_dialog';
import { AnimatedUnderlinedButton } from '../../../../commons/animated_underlined_button/animated_underlined_button';

import { ReactComponent as EyeIcon } from '../../../../../assets/icons/eye.svg';

import { useCallbackOpen } from '../../../../hooks/use_callback_open';

import { styles } from './see_project_detail_styles';

const useStyles = createUseStyles(styles);

const SeeProjectDetailComponent = ({ project }) => {
    const classes = useStyles();
    const [openDialog, setDialogOpened, setDialogClosed] = useCallbackOpen();
    return (
        <>
            <ProjectDialog project={project} open={openDialog} onClose={setDialogClosed} />
            <AnimatedUnderlinedButton onClick={setDialogOpened}>
                <EyeIcon className={classes.icon} />
                <Typography customClasses={{ container: classes.detailTypography }} color="primary">
                    See more
                </Typography>
            </AnimatedUnderlinedButton>
        </>
    );
};

export const SeeProjectDetail = SeeProjectDetailComponent;
