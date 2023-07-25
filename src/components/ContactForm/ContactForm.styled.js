import styled from 'styled-components';

const Form = styled.form`
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;

  label {
    margin-bottom: 7px;
  }

  input {
    margin-bottom: 20px;
    width: 200px;
  }

  button {
    width: 100px;
    height: 30px;
  }
`;

export { Form };
