import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ title, description, category, price, image }) => {
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
        <ItemCount />
      </footer>
    </div>
  );
};

export default ItemDetail;
