import React from 'react'

const Menu = ({ menuItems }) => {
	return (
		<article className='menu'>
			{menuItems.map(item => {
				const { id, title, category, price, img, desc } = item
				return (
					<div key={id} className='menu-item'>
						<div className='photo'>
							<img src={img} alt='' />
						</div>
					</div>
				)
			})}
		</article>
	)
}

export default Menu
