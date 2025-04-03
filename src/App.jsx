import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import axios from "axios";

// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setitems] = useState([])

  const feed=async()=>{
    try{
      const res= await axios.get(API_URI)
      setitems(res.data)
      console.log(data)
      
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    feed();
  }, [])
  
  // Get the existing item from the server
  // const [items, setItems] = useState(null);
  // pass the item to UpdateItem as a prop

  return <ItemList items={items}  refreshfeed={feed}/>;
}

export default App;
