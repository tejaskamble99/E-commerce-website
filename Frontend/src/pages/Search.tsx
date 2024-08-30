import { useState } from "react";
import ProductCard from "../components/ProductCard";
const Search = () => {
  const [search, setSerach] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const addToCartHandler = () =>{} ;
  const isNextPage = true ;
  const isPrevPage = true ;

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filter</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value={""}></option>
            <option value={"asc"}>Price (Low TO High)</option>
            <option value={"dsc"}>Price (High TO Low)</option>
          </select>
        </div>
        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">ALL</option>
            
                <option  value={''}>
                 Sample2
                </option>
            
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input type="text" 
        placeholder="Search by name.." value={search}
        onChange={(e)=> setSerach(e.target.value)}
        />

        <div className="sesrch-product-list">
        <ProductCard
          productID='123'
          name='Macbook'
          price={123456}
          stock={4556}
          handler={addToCartHandler}
          photo='media/catalog/product/cache/88160a44f062342c33c0de95969b1545/a/i/air-gold_2.jpeg'
        />
        </div>
        <article>
          <button disabled={isPrevPage} onClick={()=> setPage((prev) => prev - 1 )}>Prev</button>
          <span>{page} of {5}</span>
          <button disabled={isNextPage} onClick={()=> setPage((next) => next + 1 )}>Next</button>
        </article>
      </main>
    </div>
  );
};

export default Search;
