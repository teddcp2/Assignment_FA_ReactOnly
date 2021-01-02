import data from "./sample";
// console.log(data);

export const createItem = (name = null, category = null) => ({
  type: "CREATE_ITEM",
  payload: { itemName: name, itemCategory: category }
});

export const searchItem = (enteredItemValue = null) => ({
  type: "SEARCH_ITEM",
  payload: { itemToBeSearched: enteredItemValue }
});

export const createCategory = (enteredCategoryValue = null) => ({
  type: "CREATE_CATEGORY",
  payload: { categoryName: enteredCategoryValue }
});

export const editItem = (id = null, enteredName = null) => ({
  type: "EDIT_ITEM",
  payload: { itemId: id, newName: enteredName }
});

export const deleteItem = (id = null) => ({
  type: "DELETE_ITEM",
  payload: { itemId: id }
});

export const markItem = (id = null) => ({
  type: "MARK_ITEM",
  payload: { itemId: id }
});

export const disableSearchBar = (value = false) => ({
  type: "DISABLE_SEARCH",
  payload: value
});

export const showLoader = (value = false) => ({
  type: "SHOW_LOADER",
  payload: value
});

//  Getting all the available items

export const getAllItems = () => (dispatch) => {
  let dataItems = data;
  dispatch(showLoader(true));
  setTimeout(() => {
    dispatch({
      type: "ALL_ITEMS",
      payload: { dataItems }
    });
    dispatch(showLoader(false));
  }, 2000);

  // console.log('action',dataItems);
  // return ;
};
