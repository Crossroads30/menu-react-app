import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const [menuItems, setMenuItems] = useState(items)
	return (
		<main>
			<section className='section'>
				<div className='title'>
					<h2>our menu</h2>
					<div className='underline'></div>
				</div>
				<Categories />
				<Menu menuItems={menuItems} />
			</section>
		</main>
	)
}

export default App
