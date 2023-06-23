import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onChangeFilter} />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
