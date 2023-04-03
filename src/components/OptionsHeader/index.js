import styled from "styled-components";

const Option = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  cursor: pointer;
  padding: 0 5px;
  min-width: 120px;
`;

const Options = styled.ul`
  display: flex;
`;

const textOptions = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OptionsHeader() {
  return (
    <Options>
      {textOptions.map((texto) => (
        <Option>
          <p>{texto}</p>
        </Option>
      ))}
    </Options>
  );
}

export default OptionsHeader;
