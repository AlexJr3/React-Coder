import Item from "../Item/Item";
import "./style.css";

const ItemList = ({ products }) => {
  return (
    <div className="list-group">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
