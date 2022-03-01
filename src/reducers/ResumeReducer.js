const initialState = {
  data: [],
  topItems: [],
  topCategories: [],
};

const getQuantityOfItemsPerMonth = (month) => {
  // Esta función se encarga de obtener la cantidad de items de cada mes desde estado de shopping cart reducer
  return month.historial.reduce((acc, curr) => {
    curr = curr.shoppingList.reduce((acc2, curr2) => acc2 + curr2.items.length, 0);
    return acc + curr;
  }, 0);
};

const setTopItems = (payload) => {
  let topItems = {};

  Object.values(payload).forEach((value) => {
    value.historial.forEach((value) => {
      value.shoppingList.forEach((value2) => {
        value2.items.forEach((value3) => {
          if (topItems[value3.itemName]) {
            topItems[value3.itemName] += 1;
          } else {
            topItems[value3.itemName] = 1;
          }
        });
      });
    });
  });

  return Object.entries(topItems)
    .sort((a, b) => b[1] - a[1])
    .map(([key, value]) => {
      value = value / Object.values(topItems).reduce((acc, curr) => acc + curr, 0);
      return { name: key, percent: value };
    })
    .splice(0, 3);
};

const setTopCategories = (payload) => {
  let topCategories = {};

  Object.values(payload).forEach((value) => {
    value.historial.forEach((value) => {
      value.shoppingList.forEach((value2) => {
        if (topCategories[value2.name]) {
          topCategories[value2.name] += 1;
        } else {
          topCategories[value2.name] = 1;
        }
      });
    });
  });

  return Object.entries(topCategories)
    .sort((a, b) => b[1] - a[1])
    .map(([key, value]) => {
      value = value / Object.values(topCategories).reduce((acc, curr) => acc + curr, 0);
      return { name: key, percent: value };
    })
    .splice(0, 3);
};

export const ResumeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === 'BUILD_RESUME') {
    console.log(payload);

    return {
      ...state,
      data: Object.entries(payload).map(([key, value]) => {
        return {
          name: key.split(' ')[0],
          Items: getQuantityOfItemsPerMonth(value),
        };
      }),
      topItems: setTopItems(payload),
      topCategories: setTopCategories(payload),
    };
  }

  return state;
};
