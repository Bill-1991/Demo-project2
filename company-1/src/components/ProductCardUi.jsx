import "./productCardUi.css";

const ProductCardUi = ({ products }) => {
  if (!products || products.length === 0) {
    console.log(products);
    return <p>Loading...</p>;
  }

  // Render the first product as a simple card placeholder
  const product = products[0] || {};
  const imgSrc = product.img || "";
  const name = product.name || "Unnamed product";

  return (
    <>
      <div className="productCardOuter">
        <div className="productCardInner">
          <img src={imgSrc} alt={name} />
          <div>
            <p className="name">{name}</p>
            <select>
              <option>Default</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardUi;
