import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, title, category, price, image }) => {
  const { addItem } = useContext(CartContext);
  const [quantityAdded, setTotalQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    setTotalQuantity(quantity);

    const item = {
      id,
      title,
      price,
    };

    addItem(item, quantity);
  };

  return (
    <div className="cardItem">
      <header className="item-header">
        <h2 className="item-header-h2">{title}</h2>
      </header>
      <picture className="item-picture">
        <img src={image} alt={title} className="item-img" />
      </picture>
      <section className="item-info">
        <p className="item-category">Categoria: {category}</p>
        <b className="item-price"> {price}$</b>
      </section>
      <footer className="item-footer">
        {quantityAdded > 0 ? (
          <Link to={"/cart"}>Terminar compra</Link>
        ) : (
          <ItemCount onAdd={handleOnAdd} />
        )}
      </footer>
    </div>
  );
};

export default ItemDetail;
