import { ReactNode } from 'react';

type DropdownProps = {
	id: string;
	wrapsMarginTop: string;
	optionsTop: string;
	hover: boolean;
    wraps: ReactNode;
    options: ReactNode;
};

export default function Dropdown({ id, wrapsMarginTop, optionsTop, hover = false, wraps, options  }: DropdownProps) {

	if (hover) { return (
		<div className="Dropdown"
			onMouseEnter={() => {
				document.getElementById(`${id}_Options`)
					.classList.toggle('Hidden');
			}}
		>
			<div id={id} style={{ marginTop: wrapsMarginTop }}>
				{wraps}
			</div>

			<div id={`${id}_Options`} className="Options Container Hidden" style={{ top: optionsTop }}>
				{options}
			</div>
		</div>
	) } else { return (
		<div className="Dropdown"
			onClick={() => {
				document.getElementById(`${id}_Options`)
					.classList.toggle('Hidden');
			}}
		>
			<div id={id} style={{ marginTop: wrapsMarginTop }}>
				{wraps}
			</div>

			<div id={`${id}_Options`} className="Options Container Hidden" style={{ top: optionsTop }}>
				{options}
			</div>
		</div>
	); }
}