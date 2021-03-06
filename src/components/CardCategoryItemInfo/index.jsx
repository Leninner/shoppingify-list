import { StyledCardCategoryItemInfo, Return, ImgItem, ContainerInfo } from './styles';
import { cloneElement } from 'react';
import { useDispatch } from 'react-redux';

const imageDefault =
  'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80';

export const CardCategoryItemInfo = ({ children, BackToShoppingList, itemToShow, isItemToShow }) => {
  const { itemName, imageURL, id, note } = itemToShow;
  const { name, id: idCategoryShowing } = isItemToShow;
  const dispatch = useDispatch();

  const handleReturn = () => {
    BackToShoppingList({ idItem: id, categoryName: name, idCategory: idCategoryShowing });
    dispatch({ type: 'SHOW_RESPONSIVE_INTERACTIVE_ASIDE', payload: false });
  };

  return (
    <StyledCardCategoryItemInfo>
      <Return onClick={handleReturn}>
        <span className='material-icons'>arrow_back</span> Back
      </Return>

      <ImgItem
        src={imageURL || imageDefault}
        alt='imageURL'
        onError={(e) => {
          e.target.src = imageDefault;
        }}
      />

      <ContainerInfo>
        <span>name</span>
        <h3>{itemName}</h3>
      </ContainerInfo>

      <ContainerInfo>
        <span>category</span>
        <p>{name}</p>
      </ContainerInfo>

      <ContainerInfo>
        <span>note</span>
        <p>
          {note ||
            'Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20'}
        </p>
      </ContainerInfo>
      {cloneElement(children, { idItem: id, categoryName: name, idCategory: idCategoryShowing, itemName })}
    </StyledCardCategoryItemInfo>
  );
};
