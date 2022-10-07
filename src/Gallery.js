import React, {useState} from 'react';
import './gallery.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import CloseIcon from '@mui/icons-material/Close';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Img1 from './assets/Scenary1.jpeg'
import Img2 from './assets/Scenary2.jpeg'
import Img3 from './assets/Scenary3.jpeg'
import Img4 from './assets/Scenary4.jpeg'
import Img5 from './assets/Scenary5.jpg'
import Img6 from './assets/Scenary6.jpg'
import Img7 from './assets/Scenary7.jpg'
import Img8 from './assets/Scenary8.jpg'

const Gallery =() =>{
    let data = [
        {
            id: 1,        
            liked: false,
            images: {
                imgSrc1 : Img1,
                imgSrc2 : Img2,
                imgSrc3 : Img3,
            }
        },
        {
            id: 2,
            liked: false,
            images: {
                imgSrc1 : Img4,
                imgSrc2 : Img5,
                imgSrc3 : Img6,
            }
        },
        {
            id: 3,
            liked: false,
            images: {
                imgSrc1 : Img7,
                imgSrc2 : Img8,
            }
        },
       
    ];
    const CommentsData =[
        {
          userId: '02b',
          comId: '017',
          fullName: 'Lily',
          userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
          text: 'I think you have a point🤔',
          avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
          replies: []
        }
      ]
        const [current, setCurrent] = useState(0);
        const [model, setModel] = useState(false);
        const [tempImgSrc, setTempImgSrc] = useState('');
        const [isHovered, setHover] = useState(false);
        const [iconColor,setIconColor] = useState("white");
        const length = data.length;
      
        const nextSlide = () => {
          setCurrent(current === length - 1 ? 0 : current + 1);
        };
      
        const prevSlide = () => {
          setCurrent(current === 0 ? length - 1 : current - 1);
        };
        const LikedPhoto = (liked) => {
            console.log("clicked");
            data.map((slide, index) => {
                if(index === liked){
                    slide.liked = true;
                }
            });
            console.log(liked);
            console.log(data);
            setIconColor("red");
            setModel(false);
          }
      
        if (!Array.isArray(data) || data.length <= 0) {
          return null;
        }
    

    const getImg = (imgSrc) =>{
        console.log(imgSrc);
        setCurrent(imgSrc -1);
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return(
        <>
        <div className={model? "model open": "model"}>
                <section className='slider'>
                <CloseIcon onClick={() => setModel(false)}/>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                {data.map((slide, index) => {
                    return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index} 
                    >
                        {index === current && (
                        <img src={slide.imgSrc} alt='travel image' className='image' />
                       
                        )}
                    </div>
                    );
                })}
                </section>
               
        </div>
            <div className='gallery' >
            
                {
                    data.map((item, index) => {
                        return(
                            <div className='pics' key={index} onClick={() => getImg(item.id)} onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
                                <img src = {item.images.imgSrc1} style={{width: '100%', borderRadius: '25px'}} />
                                {isHovered && (
                                    <span onClick={() => LikedPhoto(item.id)}>
                                    <FavoriteBorderIcon 
                                    size={"90rem"}
                                    style={{
                                        position: 'absolute',
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        bottom: "10px",
                                        right: "225px",
                                        height: "2em",
                                        color: iconColor,
                                        fontSize : "35px",
                                    }}
                                    variant="primary"
                                    />
                                     <CommentIcon 
                                    size="lg"
                                    style={{
                                        position: 'absolute',
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        bottom: "10px",
                                        right: "185px",
                                        height: "2em",
                                        color: iconColor,
                                        fontSize : "35px",
                                    }}
                                    variant="primary"
                                    />
                                    </span>
                                )}
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Gallery;