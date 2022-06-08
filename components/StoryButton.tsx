import { Button, Modal, Text, useModal, Link } from '@nextui-org/react'
import Image from 'next/image'
import React, { Component } from 'react'

const StoryButton = () => {
    const { setVisible, bindings } = useModal();

    return (
        <>
            <Button auto style={{
                backgroundColor: '#5530D9',
                border: 0,
                borderRadius: 5,
                height: 35,
                minWidth: '40%',
                marginLeft: '5px',
            }}
                onClick={() => setVisible(true)}
            ><Text h3 color='white' style={{ fontWeight: 'normal' }}>
                    Mon histoire 📜
                </Text>
            </Button>
            <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                <Modal
                    scroll
                    closeButton
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    style={{ minWidth: 900, marginLeft: '-60%' }}
                    {...bindings}
                >
                    <Modal.Header>
                        <Text id="modal-title" size={22}>
                            📚Mon histoire
                        </Text>
                    </Modal.Header>
                    <Modal.Body >
                        <Text id="modal-title" size={22}>
                            📒Mon parcour scolaire
                        </Text>
                        <br />
                        <Text id="modal-title" size={18} color='white' style={{ backgroundColor: '#5530D9', minWidth: '10%', minHeight: 30, borderRadius: 5, display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            📗Collège :

                        </Text>
                        <br />
                        <Text id="modal-description">
                            Le collège est une période importante de ma vie, car c'est durant cette période que j'ai eue mon premier contact avec l'informatique. En effet étant un joueur PC, j'ai pu alors explorer le monde de l'informatique librement là où mes amis étaient très limités par les consoles. C'est aussi une période, à force de bidouillage, ou j'ai réellement appris comment marchais un ordinateur, du moins comment il était construit. J'ai alors été pris de passion pour les ordinateurs et l'électronique en général.
                        </Text>
                        <br />
                        <Text id="modal-title" size={18} color='white' style={{ backgroundColor: '#5530D9', minWidth: '10%', minHeight: 30, borderRadius: 5, display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            📕Lycée :
                        </Text>
                        <br />
                        <Text id="modal-description">

                            Le lycée est une période particulière pour moi, car c'est une période durant laquelle j'ai négligé l'informatique et la technique pour les jeux vidéo, comme tout adolescent de mon âge, la seule chose qui importait pour moi était d'obtenir le plus gros score sur le dernier jeu tendance.<br />
                            Mais c'est durant la crise du covid que, par ennui, j'ai commencé a programmé en partant d'un hasard. Souhaitant à la base savoir comment mon ami avait codé un jeu dont je m'étais occupé de créer les textures, j'avais alors découvert python. Instantanément repoussé par la complexité du code, je n'ai pas reculé, mais dévié le problème. J'ai alors cherché comment se créait les applications mobiles par téléphone.<br /> C'est ainsi que j'ai rencontré Flutter, et que j'ai commencé à créer des appuis mobile complétement copié-collé de tuto en ligne, mais c'était une expérience très importante puisque pour la première fois de ma vie, je savais exactement ce que je voulais faire.
                        </Text>
                        <br />
                        <Text id="modal-title" size={18} color='white' style={{ backgroundColor: '#5530D9', minWidth: '10%', minHeight: 30, borderRadius: 5, display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            📓 Étude supérieure :
                        </Text>
                        <br />
                        <Text id="modal-description">
                            J'ai ensuite décidé de rejoindre le DUT INFORMATIQUE de la Doua : compromis parfait entre la technicité et la thoérie.<br /> J'y ai alors appris énormément de chose qui m'ont réellement appris à grandir et à devenir compétent.

                        </Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto style={{
                            backgroundColor: '#5530D9',
                            border: 0,
                            borderRadius: 5,
                            height: 35,
                            minWidth: '15%',
                            marginLeft: '5px',
                        }}
                            onClick={() => setVisible(false)}
                        ><Text h3 color='white' style={{ fontWeight: 'normal' }}>
                                Coooool ☘️
                            </Text>
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    )

}
export default StoryButton;
/*
<Modal noPadding open={visible} onClose={closeHandler}>
                <Modal.Header
                    css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
                >
                    <Text color="#363449">
                        Photo by{" "}
                        <Link
                            color
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://unsplash.com/@anniespratt"
                        >
                            Annie Spratt
                        </Link>{" "}
                        on{" "}
                        <Link
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://unsplash.com/s/visual/ef7937f3-0d44-43eb-b992-28050748f999?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >
                            Unsplash
                        </Link>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Image
                        showSkeleton
                        src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        width={400}
                        height={490}
                    />
                </Modal.Body>
            </Modal>
            */