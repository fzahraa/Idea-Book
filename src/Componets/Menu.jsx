import React, {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Comments from './Comments';
import SendIcon from '@material-ui/icons/Send';
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button } from '@material-ui/core';


const Menu = ({items}) =>{
    const allComments = [items.map((item)=>item.comments)]

        const [current, setCurrent] = useState(0);
        const [startImage, setStartImage] = useState(0);
        const [model, setModel] = useState(false);
        const [tempImgSrc, setTempImgSrc] = useState('');
        const [isHovered, setHover] = useState(false);
        const [iconColor,setIconColor] = useState("black");
        const [commentsList,setCommentsList] = useState(allComments)

        const length = items.length;
        
        //console.log(length);
        const nextSlide = () => {
          setCurrent(current === items[length-1].id ? startImage : current + 1);
          //console.log("Çurrent : "+  current);
        };
      
        const prevSlide = () => {
          setCurrent(current === 0 ? length - 1 : current - 1);
        };
        
      
        if (!Array.isArray(items) || items.length <= 0) {
          return null;
        }
    

    const getImg = (imgSrc, comments) =>{
     setStartImage(imgSrc);
     //console.log(startImage);
     setCommentsList(comments);
        setCurrent(imgSrc);
        setTempImgSrc(imgSrc);
        setModel(true);
    }

     return(
          <>
          <div className={model? "model open": "model"}>
                <section className='slider'>
                <CloseIcon className='close-btn' onClick={() => setModel(false)}/>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                {items.map((slide) => {
                    const {id,title,img,desc,likes, comments} = slide;
                    return (
                      <>
                    <div
                        className={id === current ? 'slide active' : 'slide'}
                        key={id} 
                    >
                        {id === current && (
                        <img src={img} alt='travel image' className='image' />
                       
                        )}
                    </div>
                    
        </>
                    );
                })}
                </section>
                </div>
                <div className="vl"></div>
                    <div className={model? "model-small open": "model-small"}>     
         
            <Comments commentsList ={Array.from(commentsList)} key={current}/> 
        </div>
        
        
       
          <div className='section-center'>
                {
                    items.map((menuItem)=>{
                        const {id,title,img,desc,likes, comments} = menuItem;

                         return(
                             <div className="menu-item" key={id} onClick={() => getImg(id, comments)} onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
                                  <img src={img} alt={title} className="photo" />
                                  
                                  <div className="item-info">
                                   <header>
                                     <h4>{title}</h4>
                                    
                                     <CommentIcon className='price'
                                        size="lg" 
                                        style={{cursor: "pointer"}}                                                                            
                                        variant="primary"
                                    />
                                    </header>
                                      <p className="item-text">{desc}</p>
                                  </div>
                             </div>
                         )
                    })
                }
          </div>
          </>
     )
}

export default Menu;