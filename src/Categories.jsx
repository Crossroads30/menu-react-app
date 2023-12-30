import React from 'react'

const Categories = ({ filterItems, buttons }) => {
	return (
		<div className='btn-container'>
			<button onClick={() => filterItems('all')} className='filter-btn'>
				all
			</button>
			{buttons.map(button => {
				return (
					<button key={button}
						onClick={() => filterItems(button)}
						className='filter-btn'
					>
						{button}
					</button>
				)
			})}
		</div>
	)
}

export default Categories
