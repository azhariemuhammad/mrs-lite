import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        display: 'block',
        marginTop: '20px'
    },
    flex: {
        display: 'flex',
        margin: '0 0 16px 0',
        justifyContent: 'space-between'
    },
    leftSide: {
        width: '180px',
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: '0.85rem',
        fontWeight: 600,
        lineHeight: '20px'
    },
    actionWrapper: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        marginTop: '24px'
    },
    actionBtn: {
        marginRight: '16px'
    },
    textInput: {
        fontSize: '0.875rem',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5E7E9',
        borderRadius: '8px',
        height: '40px',
        padding: '8px 12px',
        width: '100%'
    },
    radioGroup: {
        flexWrap: 'nowrap',
        flexDirection: 'row'
    },
    divider: {
        margin: '32px 0',
        border: '0.5px solid rgb(229, 231, 233)'
    },
    textArea: {
        height: '51px',
        borderRadius: '4px',
        borderColor: '#e0e0e0',
        width: '100%',
        padding: '8px 12px'
    },
    mrsHeading: {
        display: 'block',
        fontWeight: 800,
        fontSize: '1.14286rem',
        lineHeight: '22px',
        color: 'rgba(49, 53, 59, 0.96)',
        marginBottom: '16px'
    },
    sectionWrapper: {
        margin: '16px 0'
    }
});

export const styles = theme => ({
    paper: {
        padding: '32px'
    },
    container: {
        minHeight: '100vh',
        height: 'auto',
        padding: '24px 24px 24px',
        background: 'rgb(243, 244, 245)'
    },
    searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5E7E9',
        borderRadius: '8px',
        height: '100%',
        padding: '7px 16px',
        width: '80%'
    },
    block: {
        display: 'block'
    },
    mrsHeading: {
        display: 'block',
        fontWeight: 800,
        fontSize: '1.14286rem',
        lineHeight: '22px',
        color: 'rgba(49, 53, 59, 0.96)',
        marginBottom: '16px'
    }
});
