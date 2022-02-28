const initialState = {
  data: [],

  topItems: [
    { name: 'Frutillas', percent: 0.976 },
    { name: 'Manzanas', percent: 0.5 },
    { name: 'Carne', percent: 0.23 },
  ],
  topCategories: [
    { name: 'Frutas y Vegetales', percent: 0.96 },
    { name: 'Carnes', percent: 0.42 },
    { name: 'Golosinas', percent: 0.23 },
  ],
};

const getQuantityOfItemsPerMonth = (month) =>
  month.historial.reduce((acc, curr) => {
    curr = curr.shoppingList.reduce((acc2, curr2) => acc2 + curr2.items.length, 0);
    return acc + curr;
  }, 0);

export const ResumeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === 'BUILD_RESUME') {
    console.log(payload, 'RESUME');

    if (state.data.some((value) => Object.keys(payload).some((month) => month.split(' ')[0] === value.name))) {
      return {
        ...state,
        data: state.data.map((value) => {
          if (Object.keys(payload).some((month) => month.split(' ')[0] === value.name)) {
            return {
              ...value,
              Items: getQuantityOfItemsPerMonth(payload[value.name + ' ' + new Date().getFullYear()]),
            };
          }

          return value;
        }),
      };
    }

    return {
      ...state,
      data: [
        ...state.data,
        {
          name: Object.keys(payload)[0].split(' ')[0],
          Items: getQuantityOfItemsPerMonth(payload[Object.keys(payload)[0]]),
        },
      ],
    };
  }

  return state;
};
