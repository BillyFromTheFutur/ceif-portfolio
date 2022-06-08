import { Button, Text, useModal, Modal, Card, Row } from '@nextui-org/react'
import React from 'react'

const ProjectButton = () => {
    const { setVisible, bindings } = useModal();

    return (
        <>
            <Button auto style={{
                backgroundColor: '#9C52FF',
                border: 0,
                borderRadius: 5,
                height: 35,
                minWidth: '50%',
                marginLeft: '5px',
            }}
                onClick={() => setVisible(true)}
            ><Text h3 color='white' style={{ fontWeight: 'normal' }}>
                    Mes derniers projets 📱
                </Text>
            </Button>
            <Modal
                scroll
                closeButton
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                style={{ minWidth: 900, minHeight: 650, marginLeft: '-60%' }}
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={22}>
                        📱 Mes derniers projets
                    </Text>
                </Modal.Header>
                <Modal.Body >
                    <Text id="modal-title" size={22}>
                        📔Mes différents projets au fils du temps
                    </Text>
                    <br />
                    <div>
                        <Text id="modal-title" size={18} color='white' style={{ backgroundColor: '#5530D9', minWidth: '10%', minHeight: 30, borderRadius: 5, display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            📷Pic 'n' Share' :
                        </Text>
                        <br />
                        <Text id="modal-description" style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ maxWidth: '75%' }}>
                                Pic'n'Share est une appli mobile cross platform créer en react native et en pure php.<br />
                                Elle permet de partager des photos que l'ont a fait lors d'un évennement avec des amis.
                                Elle permet également de créer des albums photo et de les partager avec des amis.<br />

                                J'ai développé cette appli durant mon stage. J'ai du moi même créer et mettre en place le processus de productione et de déployement au complet <br />
                                L'appli est disponible sur le PlayStore et bientot sur l'Apple Store.
                                <br /> <br /> Plusieurs fonctionnalité :<br />
                                - Partage de photos <br />
                                - Création d'albums<br />
                                - Evennement public et privé<br />
                                - Diaporama de photos<br />
                                - Connexion normal(système de token) ou via Google<br />
                            </div>
                            <Card hoverable css={{ maxWidth: '30%', marginLeft: '5%' }}>
                                <Card.Body css={{ p: 0 }}>
                                    <Card.Image
                                        src={"https://media.discordapp.net/attachments/964974538347659324/983459573824364594/01.jpg?width=1260&height=662"}
                                        objectFit="cover"
                                        width="100%"
                                        height="100%"
                                        alt={"test"}
                                    />
                                </Card.Body>
                                <Card.Footer css={{ justifyItems: "flex-start" }}>
                                    <Row wrap="wrap" justify="space-between" align="center">
                                        <Text b>Pic'n'Share</Text>
                                        <Button auto style={{
                                            backgroundColor: '#9C52FF',
                                            border: 0,
                                            borderRadius: 5,
                                            height: 35,
                                            minWidth: '50%',
                                            marginLeft: '5px',
                                        }}
                                            onClick={() => {
                                                window.open("https://github.com/BillyFromTheFutur/picshare/tree/master", "_blank");
                                            }
                                            }
                                        ><Text h3 color='white' style={{ fontWeight: 'normal' }}>
                                                Source 📱
                                            </Text>
                                        </Button>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Text>
                    </div>
                    <br />
                    <div>
                        <Text id="modal-title" size={18} color='white' style={{ backgroundColor: '#5530D9', minWidth: '10%', minHeight: 30, borderRadius: 5, display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            🚘 MotoSenti Drive :
                        </Text>
                        <br />
                        <Text id="modal-description" style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ maxWidth: '65%' }}>
                                MotoSenti Drive est une appli mobile cross platform créer en react native et en Symfony.<br />
                                C'est une appli mobile qui permet de retracer des trajets de moto.<br />
                                <br />Plusieurs features sont disponible :<br />
                                - Un système de connexion complexe avec un système de token<br />
                                - Un système de partage de trajets<br />
                                - La personnalisation de l'historique du trajet en fonction du boitier de la moto<br />

                            </div>
                            <Card hoverable css={{ maxWidth: '30%', marginLeft: '5%' }}>
                                <Card.Body css={{ p: 0 }}>
                                    <Card.Image
                                        src={"https://media.discordapp.net/attachments/964974538347659324/984112419372675173/unknown.png?width=1316&height=662"}
                                        objectFit="cover"
                                        width="100%"
                                        height={140}
                                        alt={"test"}
                                    />
                                </Card.Body>
                                <Card.Footer css={{ justifyItems: "flex-start" }}>
                                    <Row wrap="wrap" justify="space-between" align="center">
                                        <Text b>Moto Senti</Text>
                                        <Button auto style={{
                                            backgroundColor: '#9C52FF',
                                            border: 0,
                                            borderRadius: 5,
                                            height: 35,
                                            minWidth: '50%',
                                            marginLeft: '5px',
                                        }}
                                            onClick={() => window.open('https://github.com/BillyFromTheFutur/MotoSentiDriveApp')}
                                        ><Text h3 color='white' style={{ fontWeight: 'normal' }}>
                                                Source 📱
                                            </Text>
                                        </Button>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Text>
                    </div>
                    <br />
                    <div>
                        <Text id="modal-title" size={18} color='white' style={{ backgroundColor: '#5530D9', minWidth: '10%', minHeight: 30, borderRadius: 5, display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            🌊VaporWeeb :
                        </Text>
                        <br />
                        <Text id="modal-description" style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ maxWidth: '65%' }}>
                                Vaporweeb est une appli mobile en React-Native possédant un style particulier.
                                <br />L'application n'est pas encore terminer, l'objectif étant d'utilise elixir/rust sur le long term et nestJS sur le cour terme.<br />
                                <br />Des fonctionnalité assez basique tel que :<br />
                                - La possibilité de se connecter<br />
                                - Un style Windows95/98 particulier<br />
                                - La possibilité de créer un compte<br />
                                - Différentes post et la possibilité de les commenter<br />
                                - Les messages privées<br />
                                - Une page de profil<br />
                            </div>
                            <Card hoverable css={{ maxWidth: '30%', marginLeft: '5%' }}>
                                <Card.Body css={{ p: 0 }}>
                                    <Card.Image
                                        src={"https://media.discordapp.net/attachments/964974538347659324/984112079596318750/unknown.png?width=1294&height=662"}
                                        objectFit="cover"
                                        width="100%"
                                        height={140}
                                        alt={"test"}
                                    />
                                </Card.Body>
                                <Card.Footer css={{ justifyItems: "flex-start" }}>
                                    <Row wrap="wrap" justify="space-between" align="center">
                                        <Text b>VawporWeeb</Text>
                                        <Button auto style={{
                                            backgroundColor: '#9C52FF',
                                            border: 0,
                                            borderRadius: 5,
                                            height: 35,
                                            minWidth: '50%',
                                            marginLeft: '5px',
                                        }}
                                            onClick={() =>
                                                window.open('https://github.com/BillyFromTheFutur/VaporWeeb')
                                            }
                                        ><Text h3 color='white' style={{ fontWeight: 'normal' }}>
                                                Source 📱
                                            </Text>
                                        </Button>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Text>
                    </div>
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
        </>)
}
export default ProjectButton;