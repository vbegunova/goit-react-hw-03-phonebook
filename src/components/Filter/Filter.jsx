import { Container } from "./Filter.styled";

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

export default Filter;
