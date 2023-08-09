import "./style.css";
import { Link } from "react-router-dom";

const Item = ({ id, title, price, image, rating }) => {
  return (
    <div className="cardItem">
      <header className="item-header">
        <h2 className="item-header-h2">{title}</h2>
      </header>
      <picture className="item-picture">
        <img src={image} alt={title} className="item-img" />
      </picture>
      <section className="item-info">
        <b className="item-price">{price}$</b>
        <p className="item-stock">
          Stock: <b>{rating.count}</b>
        </p>
      </section>
      <footer className="item-footer">
        <Link to={`/item/${id}`}>Ver detalle</Link>
      </footer>
    </div>
  );
};

export default Item;
