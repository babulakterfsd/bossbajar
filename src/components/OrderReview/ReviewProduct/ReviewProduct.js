import React from "react";

const ReviewProduct = (props) => {
  const { name, price, quantity, img, category, seller, stock, features, key } =
    props.product;
  const { handleRemove } = props;

  return (
    <div className="container-fluid singleProductContainer border-bottom border-1 border-muted py-5 rounded-2">
      <div className="row">
        <div className="col-12 col-lg-4 productImage">
          <img
            src={img}
            alt={category}
            style={{ display: "block", margin: "0px auto" }}
          />
        </div>

        <div className="col-12 col-lg-8 productInfo text-secondary">
          <h5>{name}</h5>
          <div className="byPriceRatingContainer my-3 d-flex flex-wrap justify-content-around">
            <h6>
              by: <span className="text-muted fw-bold">{seller}</span>
            </h6>
            <h6>
              price: <span className="text-muted fw-bold">${price}</span>
            </h6>
            <h6>
              Order Quantity:{" "}
              <span className="text-muted fw-bold">{quantity} piece</span>
            </h6>
          </div>

          <div className="storeFeatureContainer my-3 d-flex flex-wrap justify-content-around">
            <h6 className="text-black-50">
              only {stock} left in stock - order soon
            </h6>

            <div className="featureContainer">
              <h6>features:</h6>
              <ul>
                {features.map((feature, i) => (
                  <small key={i}>
                    <li>
                      {feature.description}: {feature.value}
                    </li>
                  </small>
                ))}
              </ul>
            </div>
          </div>

          <div className="buttonContainer my-3 d-block text-center">
            <button
              className="btn btn-success px-3 px-lg-4 text-white mb-2 mb-md-0"
              onClick={() => handleRemove(key)}
            >
              <i className="fas fa-trash-alt me-2"></i>
              <span className="fw-bold">Remove Product</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewProduct;
