import { css } from '@emotion/react';

const MainPage = ():JSX.Element => {
	return (
		<>
			<p css={P}>하</p>
            메인페이지
		</>
	);
};

const P = css`
	font-size: 50px;
`;

export default MainPage;