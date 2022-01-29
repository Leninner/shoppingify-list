import { Option } from './styles';

export const CategoryOptions = ({ category, onClick }) => {
  return (
    <Option onClick={onClick}>
      <span>{category}</span>
    </Option>
  );
};
