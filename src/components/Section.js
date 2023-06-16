import TableItems from './TableItems';

const Section = ({ type, header }) => {
	return (
		<section>
			<header className="header">
				{header}
			</header>

			<TableItems type={type}></TableItems>
		</section>
	);
};

export default Section;
