import { Link } from 'react-router-dom';
import { HeaderStyle, UlStyle, StyledLi } from './Header.styles';

const Header = (): JSX.Element => {
	return(
		<header css={HeaderStyle}>
			<ul css={UlStyle}>
				<StyledLi><Link to='/'>메뉴1</Link></StyledLi>
				<StyledLi><Link to='/'>메뉴2</Link></StyledLi>
				<StyledLi><Link to='/'>메뉴3</Link></StyledLi>
				<StyledLi><Link to='/'>메뉴4</Link></StyledLi>
			</ul>
		</header>
	);
};

export default Header;