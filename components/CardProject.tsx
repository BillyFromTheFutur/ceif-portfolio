import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const CardProject = () => (
  <Card cover css={{ w: "100%" }} hoverable>
    <Card.Body>
      <Card.Image
        src="https://media.discordapp.net/attachments/964974538347659324/983459573824364594/01.jpg?width=1260&height=662"
        height={200}
        width="100%"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      blur
      css={{
        position: "absolute",
        bgBlur: "#ffffff",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={15}>
            Mon dernier projet :
          </Text>
          <Text color="#000" size={15}>
            Pic N Share
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto style={{
              backgroundColor: 'white',
              border: 0,
              borderRadius: 5,
              height: 30,
              minWidth: '100%'
            }}
              onPress={() => {
                console.log("clicked"),
                  window.open('https://cdn.discordapp.com/attachments/964974538347659324/983471356588998776/Marouani_Ceif-Edine_CV.pdf', '_blank')
              }}
            >
              <Text
                css={{ color: "black" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Source
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
