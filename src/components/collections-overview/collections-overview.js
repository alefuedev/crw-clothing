import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "./../../redux/shop/shop.selector";

import CollectionPreview from "./../collection-preview/collection-preview.component";

import "./collections-overview.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateTopProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateTopProps)(CollectionsOverview);
