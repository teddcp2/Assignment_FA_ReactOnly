import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems, disableSearchBar } from "../../actions";
import Item from "../item/item";
import LoaderComp from "../loader/loader";
import "./collectionItem.css";

const CollectionItems = (props) => {
  let [editingStatus, setEditingStatus] = useState({
    editing: false,
    itemId: null
  });
  let [items, searchValue, searchBarStatus, loader] = useSelector((state) => [
    state.items,
    state.searchValue,
    state.searchBarActiveStatus,
    state.loader
  ]);

  const dispatch = useDispatch();
  const callGetItems = useCallback(() => {
    dispatch(getAllItems());
  }, [dispatch]);

  useEffect(() => {
    callGetItems();
  }, [callGetItems]);

  if (searchBarStatus) dispatch(disableSearchBar(!searchBarStatus));

  const handleEditing = (id) =>
    setEditingStatus({ editing: !editingStatus.editing, itemId: id });

  let filteredItems = "";

  if (!searchValue) {
    filteredItems = items;
    // console.log("IF BLOCK...");
  } else {
    // console.log("ELSE BLOCK");
    filteredItems = items.filter((item) => {
      let nm = item.name;
      return nm.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
  // console.log(filteredItems);
  return (
    // <div className="row row-cols-1 row-cols-md-3">
    <div className="card-columns my-3">
      {loader ? (
        <LoaderComp />
      ) : (
        filteredItems.map((item, idx) => (
          <Item
            key={idx}
            {...item}
            editingItem={editingStatus}
            handleChange={handleEditing}
          />
        ))
      )}
    </div>
  );
};

export default CollectionItems;
