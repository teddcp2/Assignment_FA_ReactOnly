export const categoryReducer = (
  categories = ["study", "business", "travelling", "cooking"],
  action
) => {
  switch (action.type) {
    case "CREATE_CATEGORY": {
      let { categoryName } = action.payload;
      return [...categories, categoryName];
    }
    default:
      return categories;
  }
};
