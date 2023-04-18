import styles from "./SliderProduct.module.css";
import { CardProducts } from '../CardProducts/CardProducts';

export const SliderProduct = () => {

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };

  return (
    <div>
      <div className="container">
            <button title="scroll left" onClick={slideLeft}>
             Left
            </button>
            <button title="scroll right" onClick={slideRight}>
             Derecha
            </button>

          <h4 className={offerProducts.length > 0 ? styles.titleSections : styles.hideCards}>También puede interesarte</h4>
          <div id="slider" className={styles.cardContainer}>
            {offerProducts.length > 0 ? (
              offerProducts.map((product) => {
                  return (
                    <CardProducts
                      id={product.id}
                      key={product.id}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      description={product.description}
                    />
                  );
              })
            ) : (
              ''
            )}
        </div>
      </div>
    </div>
  );
}