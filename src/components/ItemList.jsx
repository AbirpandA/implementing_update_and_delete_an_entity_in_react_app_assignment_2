import Item from "./Item";

const ItemList = ({ items , refreshfeed }) => {
    // your code here
    return (
        <>
            {items.map((item) => (
                <Item key={item.id} item={item}  refreshfeed={refreshfeed}/>
            ))}
        </>
    );
};

export default ItemList;
