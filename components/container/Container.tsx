import Products from "components/ProductCard";
import Link from "next/link";
import React from "react";
import Filter from "./Filter";

const Container = () => {
  return (
    <div>
      <div className="flex">
        <Link href="/filters">
          <div className="mt-10 mx-24">
            {/* <Filter/> */}
           
          </div>
        </Link>
        <div className="px-20">
          {/* <Products/> */}
        </div>
      </div>
    </div>
  );
};

export default Container;
