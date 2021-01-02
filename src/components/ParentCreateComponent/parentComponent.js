import React, { Fragment } from "react";

import CreateItem from "../createItem/createItem";
import CreateBucket from "../createDropdown/createDropdown";
import Collection from "../collectionItem/collectionItem";

const ParentComponent = (props) => {
  return (
    <Fragment>
      {/* CreateBucket and CreateItem Component */}
      <div className="row">
        <div className="col-md-6">
          <CreateItem />
        </div>
        <div className="col-md-6">
          <CreateBucket />
        </div>
      </div>
      <hr />
      <Collection />
    </Fragment>
  );
};

export default ParentComponent;
