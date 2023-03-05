import React from 'react'
import "../Components/progess.module.css"
const Progress_bar = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
  return (
<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>  );
};

export default Progress_bar