import React, { useEffect } from "react";
import LeftMenuProducts from "../components/LeftMenuProducts";
import { getProducts, addAProduct } from "../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux"

function Search() {
  let loading = true;
  const dispatch = useDispatch()
  let query = window.location.search

  useEffect(() => {
    // dispatch(addAProduct())
    dispatch(getProducts(query))
  }, [])

  const productState = useSelector(state => state.product.products)
  const productCount = useSelector(state => state.product.count)

  if (!productState || !productCount) return;
  return (
    <div className="products">
    <div className="container-fluid d-flex " >

      <div className="left">
        <LeftMenuProducts pState={productState} />
      </div>

      {/* {productState &&  */}
      <div className="products-items" >
        {productState?.map((ev) => {
          loading = false;
          return (
            <a href={`/product/${ev._id}`} key={ev._id}>

              {ev.best_seller ?
                <div className="best-seller-orange">
                  <p style={{ position: 'absolute' }} className="best-seller-orange-text"> پر فروش</p>
                </div>
                :
                <div className="best-seller-orange-none"/>
              }

              <div className="products-box" style={{borderRadius: !ev.best_seller ? "10px 10px 0 0" : ""}}>

                <img src={ev.images.title} style={{borderRadius: !ev.best_seller ? "10px 10px 0 0" : ""}}/>
                <h6>
                  {ev.name}
                </h6>

                <div className="d-flex">
                  <h6 className="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;&#9734;</h6>
                  <p className="text-primary">48.562</p>
                </div>
                <p>${ev.price}</p>
              </div>
            </a>)
        })}



        {loading && <h1 className="loading"></h1>}


      </div>

    </div>

       <p className="products-count">{productCount}</p>
    </div>
  );
}

export default Search;