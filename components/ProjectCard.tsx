import { Card, Grid, Text } from "@nextui-org/react";
import ProjectButton from "./ProjectButton";
import StoryButton from "./StoryButton";

export default function ProjectCard() {
    return (
        <Card css={{ p: "$6", mw: "400px" }} hoverable>
            <Card.Header>
                <img
                    alt="Ceif"
                    src="https://media.discordapp.net/attachments/919643481582993438/983802229943332924/IMG_20220607_203837.jpg?width=663&height=663"
                    width="80px"
                    height="80px"
                    style={{ borderRadius: "10%" }}
                />
                <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                        <Text h2 css={{ lineHeight: "$xs", fontWeight: 'normal' }}>
                            Marouani Ceïf 🌍
                        </Text
                        /*🌃*/
                        >
                    </Grid>

                </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
                <Text>
                    Cours résumé de ma personne et de mes derniers projets
                </Text>
            </Card.Body>
            <Card.Footer style={{ display: 'flex', justifyContent: 'space-between', minWidth: '100%', marginBottom: '-3%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-', minWidth: '100%', marginLeft: '-4%' }}>
                    <StoryButton />
                    <p>&nbsp;</p>
                    <ProjectButton />
                </div>

            </Card.Footer>
        </Card>
    );
}
