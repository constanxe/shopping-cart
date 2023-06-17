import TableItems from './TableItems';

const Section = ({ header, items }) => {
	return (
		<section>
			<header className="header">
				{header}
			</header>

			<TableItems items={items}></TableItems>
		</section>
	);
};

export default Section;
