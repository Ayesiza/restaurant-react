import React, { useEffect, useState } from 'react'

function Search() {
   
             const medias=[
    "FaceBook",
  "Tweeter", 
  "Whatsapp", 
  "Slack", 
  "Gmail",
  "Instagram",
  "Ticktock"];
  const [searchItem, setSearchItem] = useState("");
  const[searchResults, setSearchResults] =useState([]);

  const handleChange = e =>{
    setSearchItem(e.target.value);
   
  }

  useEffect(() => {
    const results= medias.filter( media =>
      media.toLowerCase().includes(searchItem)
      
      );
      setSearchResults(results)
    
  }, [searchItem])
  return (
    <div className="">
      <input 
      type="text"
      value={searchItem}
      placeholder="Search..."
      onChange={handleChange}
      />
      <ul>
        {searchResults.map(media=>(
 <li>{media}</li>
        ))}
       
       
        
      </ul>
      </div>
    
  );
       
}

export default Search
