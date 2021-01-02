import moment from "moment";
export const ItemReducer = (itemState = [], action) => {
  switch (action.type) {
    case "ALL_ITEMS":
      return action.payload.dataItems;

    case "CREATE_ITEM": {
      let newItem = {
        id: itemState.length + 1,
        name: action.payload.itemName,
        createdDate: moment().format("YYYY-MM-DD"),
        category: action.payload.itemCategory,
        markComplete: "NO",
        deleted: "NO"
      };
      return [...itemState, newItem];
    }
    case "EDIT_ITEM": {
      let newItem = "";
      let { itemId, newName } = action.payload;
      let existingItems = [...itemState];
      let idx = existingItems.findIndex((item) => item.id === itemId);
      if (idx !== -1) {
        newItem = existingItems[idx];
        newItem.name = newName;
      }
      return existingItems;
    }
    case "DELETE_ITEM": {
      let newItem = "";
      let { itemId } = action.payload;
      let existingItems = [...itemState];
      let idx = existingItems.findIndex((item) => item.id === itemId);
      if (idx !== -1) {
        newItem = existingItems[idx];
        newItem.deleted = "YES";
      }
      return existingItems;
    }
    case "MARK_ITEM": {
      let newItem = "";
      let { itemId } = action.payload;
      let existingItems = [...itemState];
      let idx = existingItems.findIndex((item) => item.id === itemId);
      if (idx !== -1) {
        newItem = existingItems[idx];
        newItem.markComplete = newItem.markComplete === "YES" ? "NO" : "YES";
      }
      return existingItems;
    }
    default:
      return itemState;
  }
};
