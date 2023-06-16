import TableItems from './TableItems';

const Section = ({ header }) => {
	return (
		<section>
			<header className="header">
				{header}
			</header>

			<TableItems></TableItems>
		</section>
	);
};

export default Section;
