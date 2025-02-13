import React, { useState,useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './banner.css';


function Banner() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState({ men: [], women: [], kids: [], home: [] });
  const[selected,setSelected]=useState(searchParams.get('occasion')||'men');
   const[selectedAvatar,setSelectedAvatar]=useState('myfeed')
 
  useEffect(() => {
    fetch("/assets/assets.json")
      .then((response) => response.json())
      .then((data) => {
        const categoryMap = {
          men: new Set(),
          women: new Set(),
          kids: new Set(),
          home: new Set(),
        };

        if (data.mens_products) {
          data.mens_products.forEach((item) => categoryMap.men.add(item));
        }
        if (data.womens_products) {
          data.womens_products.forEach((item) => categoryMap.women.add(item));
        }
        if (data.kids_products) {
          data.kids_products.forEach((item) => categoryMap.kids.add(item));
        }
        if (data.home_products) {
          data.home_products.forEach((item) => categoryMap.home.add(item));
        }

        setCategories({
          men: Array.from(categoryMap.men),
          women: Array.from(categoryMap.women),
          kids: Array.from(categoryMap.kids),
          home: Array.from(categoryMap.home),
        });
        console.log("Updated Categories::::::::::", categoryMap);
      });
  }, []);
  useEffect(() => {
    const occasion = searchParams.get('occasion') || 'myfeed';
    setSelectedAvatar(occasion);
  
    
    const validCategories = ['men', 'women', 'kids'];
    const categoryFromUrl = validCategories.includes(searchParams.get('mainCategory')) 
      ? searchParams.get('mainCategory') 
      : 'men';
  
    setSelected(categoryFromUrl);
  }, [searchParams]);
  
  const handleClick = (category) => {
    setSearchParams({ occasion: category });
    setSelectedAvatar(category);  // Only update avatar
  };
  

  return (
    <div>
      <div className='banner-main'>
    <div className='first-main'>
          <div className='first-main-content'>
            <div 
            className={`first-content ${selected==='men'? 'active':''}`} 
            onClick={() => handleClick('men')}>Men</div>
            <div 
            className={`second-content ${selected==="women"?'active':''}`}  
            onClick={() => handleClick('women')}>Women</div>
            <div 
            className={`third-content ${selected==="kids"?'active':''}`}  
            onClick={() => handleClick('kids')}>Kids</div>
         </div>
        </div>
      </div>
      <div className='second-main'>
 
  <Link 
    to={`/${selected}?occasion=myfeed`} 
    className={`category-item ${selectedAvatar === 'myfeed' ? 'active' : ''}`} 
    onClick={() => setSelectedAvatar('myfeed')}
  >
    <img src='https://n-img3.junaroad.com/assets/images/mobileNotif/img-1628498908811.jpg' alt='My Feed' id='category-myfeed'  className={`category-item ${selectedAvatar === 'myfeed' ? 'active' : ''}`} />
    <span className='category-label'>My Feed</span>
  </Link>

  
  {Array.from(new Map(categories[selected]?.map(item => [item.category, item])).values())
    .map((item, index) => (
      <Link 
        key={index} 
        to={`/${selected}?occasion=${item.category}`} 
        className={`category-avatar ${selectedAvatar === item.category ? 'active' : ''}`} 
        onClick={() => setSelectedAvatar(item.category)}
      >
        <img src={item.image} alt={item.category} 
        className={`category-avatar ${selectedAvatar === item.category ? 'active' : ''}`}/>
        <span className='category-label'>{item.category}</span>
      </Link>
  ))}
</div>

    </div>
   

  );
}

export default Banner;
  



