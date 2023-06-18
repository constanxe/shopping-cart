const Hint = ({ children }) => {
	return <small>❗ {children ?? "Please try again later"}</small>;
};

export default Hint;
