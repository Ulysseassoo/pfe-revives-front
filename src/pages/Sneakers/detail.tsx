import React from 'react'
import { useParams } from 'react-router-dom';

import SneakerDetail from '@components/Sneakers/SneakerDetail'
import SneakerCategory from '@components/Sneakers/SneakerCategory'
import SecondLife from '@components/Sneakers/SecondLife'
import SneakerFooter from '@components/Sneakers/SneakerFooter'

import SneakerProductDetail from '@assets/Sneakers/sneaker-product-detail.png'

import SneakerDetail1 from '@assets/Sneakers/sneaker-detail-1.png'
import SneakerDetail2 from '@assets/Sneakers/sneaker-detail-2.png'
import SneakerDetail3 from '@assets/Sneakers/sneaker-detail-3.png'
import SneakerDetail4 from '@assets/Sneakers/sneaker-detail-4.png'

const detail = () => {

    const { id } = useParams()

    const sizes = [
        {
            size: 40,
            isAvailable: true
        },
        {
            size: 40.5,
            isAvailable: false
        },
        {
            size: 41,
            isAvailable: true
        },
        {
            size: 42,
            isAvailable: true
        },
        {
            size: 42.5,
            isAvailable: false
        },
        {
            size: 43,
            isAvailable: true
        },
        {
            size: 44,
            isAvailable: false
        },
        {
            size: 44.5,
            isAvailable: true
        },
        {
            size: 45,
            isAvailable: true
        },
    ]

    const photos = [
        SneakerDetail1,
        SneakerDetail2,
        SneakerDetail3,
        SneakerDetail4
    ]

    return (
        <div>
            <SneakerDetail 
                title='Adidas ozweego white and black'
                description="Inspirée des chaussures de running vintage, ce modèle junior twiste le style des nineties. La tige en textile et cuir à chausson intégré épouse parfaitement la forme du pied pour plus de souplesse. Elle est dotée d'une semelle intermédiaire en EVA légère pour plus de confort et une bonne absorption des chocs."
                price={100}
                sizes={sizes}
                rate={4}
                photos={photos}
            />

            <SneakerCategory title='Vous aimerez aussi' nbrOfShoe={3} />
			<SneakerCategory title='Voir plus de chaussures' nbrOfShoe={3} />

            <SecondLife 
				title='' 
				description='Vous voulez porter vos anciennes sneakers mais elles sont trop usées. Grâce à nous vous pourrez les porter à nouveau.' 
				image={SneakerProductDetail}
			/>

            <SneakerFooter />

        </div>
    )
}

export default detail