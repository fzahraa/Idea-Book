import { makeStyles } from '@material-ui/core/styles';

export const appStyles = makeStyles((theme) => ({
    app: {
        backgroundSize: 'cover',
        backgroundColor: 'white',
        },
}), {index: 1});

export const navBarStyles = makeStyles((theme) => ({
    navBar: {
        boxShadow: 5,
        backgroundColor: 'white',
        position: 'fixed-top', 
        fontWeight: 'bold',
        fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', 
    },
    btn: {
        color: '#5a20c4',
        textDecorationThickness: '20%',
        textTransform: 'initial',
    },   
    btnIcon: {
        marginLeft: "3%",
    },
    titleBtn: {
        color: 'black',
        fontSize: '20px',
        fontStyle: 'bold',
        textTransform: 'initial',
    },
}), {index: 1});

export const containerStyles = makeStyles((theme) => ({
    container: {
        minHeight: '100vh', 
        background: 'rgba(192, 192, 192, 0.0)',
        backgroundPosition: 'center',
        maxWidth: 'lg',
    },   
}), {index: 1});

export const textStyles = makeStyles((theme) => ({
    mainText: {
        textAlign: 'center',
        fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
        color: '#30106B',
    },
    infoText: {
        textAlign: 'center',
        marginBottom: '5%',
        fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
        color: '#30106B',
    },
    btn: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: '20px',
        padding: '10px 60px',
        borderRadius: '5px',
        margin: '10px 0px',
        cursor: 'pointer',
    }, 
}), {index: 1});

export const imageStyles = makeStyles((theme) => ({
    imgGrid: {
        flexGrow: 1,
        marginTop: theme.spacing(2),
    },    
    img: {
        margin: 'auto',
        display: 'flex',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '5%',
        boxShadow: '0 7px 11px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        transitionDuration: 375, 
        '&:hover': {
            opacity: '0.9',    
            transform: 'scale(1.05, 1.05)',
            position: 'relative',
            boxShadow: '0 7px 11px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.50)',
        },
    },
   
    cardBtn: {
        width: '220px',
        color: 'white',
        textTransform: 'inherit',
        '&:hover': {
            background: 'white', 
            color: '#30106B',
            boxShadow: '0 7px 11px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        },
    },
    cardContent: {
        fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
    },
    cardHeader: {
        fontStyle: 'oblique',
        color: '#30106B',
    },
    cardBtnIcon: {
        // marginLeft: 'auto',
    },
    cardBtnText: {
        // marginRight: 'auto',
    }
   
}), {index: 1});    

export const searchBarStyles = makeStyles((theme) => ({
    searchBar: {
        width: '50%',
        minHeight: '50px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '',
        backgroundColor: '#f6f6f6',
        marginLeft : '450px'
    },
    searchBtn: {
        marginRight: 'auto',
        color: 'black',
    },
    input: {
        width: '85%',
        marginLeft: '6%',
        color: 'black',
    },
}), {index: 1});

export const btnStyles = makeStyles((theme) => ({
    btn: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: '14px',
        borderRadius: '15px',
        margin: '10px 10px',
        cursor: 'pointer',
        marginTop: '70px'
    }, 
}), {index: 1});
export const iconStyles = makeStyles((theme) => ({
heart:{
    fontSize: '25px',
    color: 'none',
    outline: 'none',
    cursor: 'pointer',
    padding: '0px 0px 0px 0px',
    fontWeight: 'bold',
    '&:hover': {
         color: 'rgb(192, 39, 39)',
     }
    }, 
}), {index: 1});