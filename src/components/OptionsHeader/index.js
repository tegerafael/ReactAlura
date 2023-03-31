import "./style.css";

const textOptions = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OptionsHeader() {
  return (
    <ul className="options">
      {textOptions.map((texto) => (
        <li className="option">
          <p>{texto}</p>
        </li>
      ))}
    </ul>
  );
}

export default OptionsHeader;
