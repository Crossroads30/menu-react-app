import React from 'react'

const Menu = ({ menuItems }) => {
	return (
		<section className='section-center'>
			{menuItems.map(item => {
				const { id, title, category, price, img, desc } = item
				return (
					<article key={id} className='menu-item'>
						<div>
							<img className='photo' src={img} alt={title} />
						</div>
						<div className='item-info'>
							<header>
								<h4>{title}</h4>
								<span className='price'>{price}</span>
							</header>
							<p className='item-text'>{desc}</p>
						</div>
					</article>
				)
			})}
		</section>
	)
}

export default Menu
