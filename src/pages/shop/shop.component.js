import React from "react";
import SHOP_DATA from "./shop.data.js";

import CollectionPreview from "./../../components/collection-preview/collection-preview.component";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    console.log(SHOP_DATA);
    const { collections } = this.state;
    return (
      <div className="shop-page">
        <h1>Collections</h1>
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}
export default Shop;
