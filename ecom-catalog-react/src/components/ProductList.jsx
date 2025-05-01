const ProductList = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={product.id}>
          <div className="card h-100">
            <img
              src={product.imageUrl || "https:placehold.co/600*400"}
              className="card-img-top"
              alt={product.name}
            />
            <div class="card-body">
              <h5 class="card-title">Card Title</h5>
              <p class="card-text">Some quick example text to build</p>
              <a href="#" class="btn btn-primary">
                Go Somewhere
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
