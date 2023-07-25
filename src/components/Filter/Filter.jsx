import PropTypes from 'prop-types';
import { Container } from './Filter.styled';

const Filter = ({ filter, handleChange }) => (
  <Container>
    <label htmlFor="filter-input">Find contacts by name</label>
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handleChange}
      id="filter-input"
    />
  </Container>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
