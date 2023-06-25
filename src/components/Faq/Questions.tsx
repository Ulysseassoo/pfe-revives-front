import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text } from "@chakra-ui/react"

type Question = {
    title: string
    answer: string
}

const Questions = () => {

    const questions: Question[] = [
        {
            title: 'Comment se passe les réparations de sneakers chez Revive’s ? ',
            answer: "Revive's  offre des services de qualité pour redonner vie à vos chaussures bien-aimées. Leurs réparations incluent une large gamme de services, tels que la rénovation des semelles usées, le remplacement des lacets et des œillets défectueux, la réparation des coutures endommagées, et même la restauration de la couleur et du revêtement extérieur. Grâce à leur expertise et à l'utilisation de matériaux de haute qualité, Revive's s'engage à redonner à vos sneakers leur aspect d'origine, voire à les améliorer. Que ce soit pour une réparation mineure ou une rénovation complète, vous pouvez faire confiance à Revive's pour prendre soin de vos sneakers avec précision et professionnalisme."
        },
        {
            title: 'Comment vérifier le statut de ma commande et de sa livraison ?',
            answer: "Pour vérifier le statut de votre commande et suivre sa livraison chez Revive's, il vous suffit de vous connecter à votre compte sur leur site web et de consulter la section dédiée à la gestion des commandes. Là, vous trouverez toutes les informations pertinentes, telles que la date d'expédition, le numéro de suivi et les mises à jour en temps réel sur l'avancement de votre livraison. Vous pouvez également contacter le service client de Revive's en cas de besoin, qui se fera un plaisir de vous fournir des informations supplémentaires sur votre commande et de répondre à toutes vos questions."
        },
        {
            title: 'Quand vais-je recevoir mon remboursement après avoir retourné ma commande ?',
            answer: "Nous vous enverrons un autre e-mail dès que nous aurons traité votre retour et autorisé un remboursement. À partir du moment où nous autorisons le transfert, il faut tenir compte du délai de traitement de votre banque. Ce délai diffère selon les banques et les modes de paiement. Tu seras remboursé(e) via le même mode de paiement que celui utilisé lors de la commande."
        }
    ]

    return (
        <Flex
            flexDirection={'column'}
        >
            <Text
                fontWeight={'bold'}
                fontSize={20}
                marginBottom={10}
            >
                Les meilleures questions posées par nos internautes
            </Text>

            <Accordion allowToggle>
                {
                    questions.map((question, index) => {
                        return (
                            <AccordionItem
                                key={index}
                                border={'none'}
                            >
                                <Flex
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                >
                                    <Box
                                        width={5}
                                        height={5}
                                        borderRadius={'50%'}
                                        background={'#D4AA7D'}
                                    />
                                    <AccordionButton>
                                        <Box as="span" textAlign='left'>
                                            { question.title }
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </Flex>
                                <AccordionPanel
                                    pb={4}
                                    borderLeft={'solid 3px #D4AA7D'}
                                    textAlign={'justify'}
                                >
                                    { question.answer }
                                </AccordionPanel>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </Flex>
    )
}

export default Questions