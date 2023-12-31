import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";

const ProductDetails = ({ products, productsSearch }) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="products-container">
        {productsSearch?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
        {productsSearch.length === 0 && <h4>Nie znaleziono produktu</h4>}
      </div>

      <div className="maylike-products-wrapper">
        <h2>Sprawdź też: </h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const productsSearchQuery = `*[_type == "product" && category match '${slug}']`;

  const productsSearch = await client.fetch(productsSearchQuery);

  const productsQuery = `*[_type == "product"]`;

  const products = await client.fetch(productsQuery);

  return {
    props: { products, productsSearch },
  };
};

export default ProductDetails;
