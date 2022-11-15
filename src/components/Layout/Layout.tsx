import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { MainStyle, SectionStyle } from './/Layout.styles';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ( props: Props ) => {
	return(
		<>
			<Header />
			<main css={MainStyle}>
				<section css={SectionStyle}>
					{props.children}
				</section>
				<SideBar />
			</main>
		</>
	);
};

export default Layout;