import profile from "../../img/profile.svg";
import bag from "../../img/bag.svg";
import styled from "styled-components";

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const Icons = styled.ul`
  display: flex;
  align-items: center;
`;

const icons = [profile, bag];

function IconsHeader() {
  return (
    <Icons>
      {icons.map((icone) => (
        <Icon>
          <img src={icone} alt="bag"></img>
        </Icon>
      ))}
    </Icons>
  );
}

export default IconsHeader;
