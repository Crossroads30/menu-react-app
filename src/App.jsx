import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
	const [menuItems, setMenuItems] = useState(items)
	const [categories, setCategories] = useState([])

	const filterItems = category => {
		if (category === 'all') {
			setMenuItems(items)
			return
		}
		const newItems = items.filter(item => item.category === category)
		setMenuItems(newItems)
	}

  const allCategories = Array.from(new Set(items.map(item => item.category)))

  // console.log(allCategories)

	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>our menu</h2>
					<div className='underline'></div>
				</div>
				<Categories buttons={allCategories} filterItems={filterItems} />
				<Menu menuItems={menuItems} />
			</section>
		</main>
	)
}

export default App
