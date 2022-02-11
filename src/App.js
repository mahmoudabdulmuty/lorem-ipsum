import { useState } from 'react';
import data from './data';
function App() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState([]);

	const handleCount = (e) => {
		setCount(+e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let amount = count;
		if (count < 1) amount = 1;
		if (count > 9) amount = 9;
		setText(data.slice(0, amount));
	};
	return (
		<section className="section-center">
			<h3>Tired of Lorem Ipsum</h3>
			<form onSubmit={handleSubmit} className="lorem-form">
				<label htmlFor="amount">Paragraphs : </label>
				<input
					type="number"
					name="amount"
					id="amount"
					value={count}
					onChange={handleCount}
				/>
				<button className="btn">Generate</button>
			</form>
			<article className="lorem-text">
				{text.map((lorem, index) => {
					return <p key={index}>{lorem}</p>;
				})}
			</article>
		</section>
	);
}

export default App;
