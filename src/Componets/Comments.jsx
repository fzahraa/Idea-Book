import React, {useState, useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from "@material-ui/core/styles";
import { FaChalkboardTeacher } from 'react-icons/fa';
import item from './data';

const useStyles = makeStyles({
    field: {
        marginBottom: "10px",
        
      // append the same classname to increase the specificity
      // output has something like: .makeStyles-field-5.makeStyles-field-5
      "&&": {
        //marginRight: "100px",
      }
    }
});
const useBtnStyles = makeStyles({
    field: {
        marginLeft: "278px",
        
      // append the same classname to increase the specificity
      // output has something like: .makeStyles-field-5.makeStyles-field-5
      "&&": {
        //marginRight: "100px",
      }
    }
});
const Comments = ({commentsList, current}) => {
    
    // console.log("here " + commentsList[0].id + " "  + commentsList[0].comment);
    // console.log("here " + commentsList[1].id + " "  + commentsList[1].comment);
    let itemsList = [...commentsList];
    console.log(current);
    const [currentCommentItem, setCurrentCommentItems] = useState(commentsList);
    const classes = useStyles();
    const btnClasses = useBtnStyles();
    const [model, setModel] = useState(false);
    const [message, setMessage] = useState('');
    const [updated, setUpdated] = useState(message);
    useEffect(() => {

       setCurrentCommentItems(commentsList);


   }, [commentsList]);
    //console.log(currentCommentItem);

    const handleChange = (event) => {
        setMessage(event.target.value);
      };
    
      const handleClick = () => {
       let idLast = currentCommentItem[currentCommentItem.length-1].id;
        let commentsArray = [
            {id: ++idLast, 
            comment: message
        }];
        console.log(currentCommentItem);
        let newComments = [...currentCommentItem,...commentsArray ];
        setCurrentCommentItems(newComments);
        setUpdated(' ');
      };
    
   
    return (
        <>
       
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {currentCommentItem.map((comments) => {
        const {id, comment} = comments;
        console.log(id);
        return(         
          id !== undefined &&
        <ListItem alignItems="flex-start" key={comments.id}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={'User Name'}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  
                >
                  {comment}
                </Typography>
                
              </React.Fragment>
            }
          />
      
       
        </ListItem>
          
        );
      
      })
      }
        
        <Divider variant="inset" component="li" />
        
        <div className='commentStyle'>
               <form >
                    <TextField
                        label="Add Comment"
                        size="small"
                        variant="outlined"
                        placeholder="Add Comment"
                        fullWidth
                        className={classes.field}
                        onChange={handleChange}
                        value={message}
                    />
                    <Button
                        variant="contained"
                        size="small"
                        className={btnClasses.field}
                        endIcon={<SendIcon />}
                        onClick={handleClick}
                    >
                        Send
                    </Button>
                </form>
                </div>
      </List>
         
        
       
        </>
        
    );
  }

  export default Comments;
