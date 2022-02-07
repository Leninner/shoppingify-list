import { StyledCardCategoryItemInfo, Return, ImgItem, ContainerInfo } from './styles';

const imageDefault =
  'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80';

export const CardCategoryItemInfo = ({ children, itemName, image }) => {
  return (
    <StyledCardCategoryItemInfo>
      <Return onClick={() => console.log('Back')}>
        <span className='material-icons'>arrow_back</span> Back
      </Return>

      <ImgItem src={image || imageDefault} alt='' />

      <ContainerInfo>
        <span>name</span>
        <h3>{itemName}</h3>
      </ContainerInfo>

      <ContainerInfo>
        <span>category</span>
        <p>Fruit And Vegetables</p>
      </ContainerInfo>

      <ContainerInfo>
        <span>note</span>
        <p>
          Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with
          relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20
        </p>
      </ContainerInfo>
      {children}
    </StyledCardCategoryItemInfo>
  );
};
