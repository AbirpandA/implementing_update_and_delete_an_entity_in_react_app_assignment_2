import axios from "axios";

const Item = ({ item  , refreshfeed}) => {

    const handledelete=async()=>{
        try{
            await axios.delete(`http://${import.meta.env.VITE_API_URI}/doors/${item.id}`)
            refreshfeed();
        }catch(err){
           alert(err.message)
        }
    }
    // Render a single item
    // Add a Delete and Edit button
    return (
        <>
        <div>{item.name}</div>
        <div>{item.id}</div>
        <button onClick={handledelete}>Delete</button>
        </>
    );
};

export default Item;
