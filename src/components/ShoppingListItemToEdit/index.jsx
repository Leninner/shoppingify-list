import { BoxCategory } from './styles';
import { useDispatch, useSelector } from 'react-redux';

export const ShoppingListItemToEdit = ({ itemName, quantity, isObtained, idCategory, id }) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const handleClick = () => {
    console.log(state);
    dispatch({
      type: 'OBTAIN_ITEM',
      payload: {
        itemName,
        isObtained: !isObtained,
        idCategory,
        idItem: id,
      },
    });
  };

  return (
    <BoxCategory isObtained={isObtained}>
      <div onClick={handleClick}>
        <div>
          <span className='material-icons-outlined'>done</span>
        </div>
        <h3>{itemName}</h3>
      </div>

      <button>{quantity} pcs</button>
    </BoxCategory>
  );
};
