import React from 'react'
import './NewArrival.css'

const NewArrivalList = [
    {
        id: 1,
        name: 'Crassula Ovata Plant',
        img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/crassulaovata_45_1.png?v=1661319721&width=375',
        newPrice: 300,
        oldPrice: 400,
    },
    {
        id: 2,
        name: 'Christmas Cactus',
        img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/christmascactus_45_1.png?v=1661317523&width=375',
        newPrice: 700,
        oldPrice: 849,
    },
    {
        id: 3,
        name: 'Monstero Deliciosa',
        img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/monsteradeliciosa_45.png?v=1661331158&width=375',
        newPrice: 100,
        oldPrice: 150,
    },
    {
        id: 4,
        name: 'Kalanchoe Plant',
        img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/kalanchoeyellow_45.png?v=1661322250&width=375',
        newPrice: 2000,
        oldPrice: 2500,
    },

]


function NewArrival() {
  return (
    <div className='home-NewArrival-container'>
        <p className='section-heading'>
            <img src='https://cdn.shopify.com/s/files/1/0579/7924/0580/files/New-Plants_2x_d5110dfd-b698-4342-ba8d-9aa908711a32_small.png?v=1656414976' />
            New Arrivals
        </p>
        <div className='home-NewArrival-list'>
            {
                NewArrivalList.map((item) => (
                        <div key={item.id} className="home-NewArrival-item">
                            <img src={item.img} alt={item.name} />
                            <div className='item-body'>
                                <p className='plantName'>{item.name}</p>
                                <div className='price'>
                                    <p className='oldPrice'>{item.oldPrice}</p>
                                    <p className='newPrice'>{item.newPrice}</p>
                                </div>
                            </div>
                            <div className='addToCart'>
                                Add to Cart
                            </div>
                        </div>
                    )
                )
            }
        </div>
    </div>
  )
}

export default NewArrival