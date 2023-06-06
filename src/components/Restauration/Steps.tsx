import { Box } from "@chakra-ui/react";

import Clean from '@assets/Restauration/clean.png'
import Collage from '@assets/Restauration/collage.png'
import Glue from '@assets/Restauration/glue.png'
import Color from '@assets/Restauration/color.png'

import Step from "@components/Restauration/Step";

const Steps = () => {

    const steps = [
        {
            image: Collage,
            title: 'Collage',
            description: 'Nous proposons de coller toutes les parties décollées de la sneakers.'
        },
        {
            image: Glue,
            title: 'Réassemblage semelle',
            description: 'Nous proposons de coller toutes les parties décollées de la sneakers.'
        },
        {
            image: Clean,
            title: 'Nettoyage',
            description: 'Nous proposons de coller toutes les parties décollées de la sneakers.'
        },
        {
            image: Color,
            title: 'Recoloration',
            description: 'Nous proposons de coller toutes les parties décollées de la sneakers.'
        }
    ]

    return (
        <Box
            paddingX={20}
            marginY={20}
        >
            {
                steps.map((step, index) => {
                    return (
                        <Step 
                            image={step.image}
                            title={step.title}
                            description={step.description}
                            index={index + 1}
                        />
                    )
                })
            }
        </Box>
    )
}

export default Steps