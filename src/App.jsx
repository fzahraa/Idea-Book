// import React from 'react';
// import './App.css';
// import Gallery from './Gallery';
// import SingleImage from './SingleImage'

// function App(){
//     return(
//     <>
//         <SingleImage/>
//     </>
//     );
// }

//  export default App;

import React,{useState} from 'react';
import Menu from './Componets/Menu';
import Categories from './Componets/Categories';
import items from './Componets/data';
import NavBar from './Componets/NavBar';
 
const allCategories = ['all', ...new Set(items.map((item)=>item.category))]

const App = () => {
   const [menuItems,setMenusItems] = useState(items)
   const [categories,setCategories] = useState(allCategories)


   const filterItem =(category)=>{
      if(category == 'all'){
        setMenusItems(items)
        return;
      }

      const newItem = items.filter((item)=>item.category == category);
      setMenusItems(newItem)
   }


 
  return (
    <>
     <div className="menu section">
             <NavBar/>
            
              <Categories categories ={categories} filterItem={filterItem}  />
              <Menu items={menuItems} />  
     </div>

    </>
  );
};

export default App;