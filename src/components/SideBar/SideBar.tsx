import { ReactEventHandler, useState } from 'react';
import { Resizable } from 'react-resizable';
import { AsideStyle } from './/SideBar.styles';

const SideBar = (): JSX.Element => {
	const [width, setWidth] = useState(100);
	const [height, setHeight] = useState(100);

	function onResize(event: any, {element , size, handle}: any) {
		setWidth(size.width);
		setHeight(size.height);
	}

	return (
		<Resizable height={height} width={width} onResize={onResize}>
			<aside className='box' style={{width: width + 'px', height: height + 'px'}}>
                사이드바
			</aside>
		</Resizable>
	);
};

export default SideBar;