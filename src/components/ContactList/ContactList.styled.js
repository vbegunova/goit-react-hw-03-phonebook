import styled from 'styled-components';

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  button {
    margin-left: 10px;
  }
`;

export {Item};
