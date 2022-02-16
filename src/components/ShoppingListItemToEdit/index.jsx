import { BoxCategory } from './styles';

export const ShoppingListItemToEdit = () => {
  return (
    <BoxCategory completed>
      <div>
        <div>
          <span className='material-icons-outlined'>done</span>
        </div>
        <h3>Avocado</h3>
      </div>

      <button>3 pcs</button>
    </BoxCategory>
  );
};
