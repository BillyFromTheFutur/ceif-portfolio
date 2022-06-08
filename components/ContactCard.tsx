import { Card, Grid, Text, Link, Popover } from "@nextui-org/react";
//@ts-ignore
import { CopyToClipboard } from "react-copy-to-clipboard";
export default function ContactCard() {
  return (
    <Grid.Container gap={1}>
      <Grid sm={12} md={10}>
        <Card hoverable css={{ mw: "650px", maxWidth: '70%' }}>
          <Text h4 style={{ fontWeight: 'normal', marginBottom: '10px' }} color='black'>Retrouvez-moi sur : </Text>
          <Link
            //@ts-ignore
            color="black"
            target="_blank"
            href="https://github.com/BillyFromTheFutur"
            style={{ marginBottom: '8px' }}
          >
            🖥️ Github
          </Link>

          <CopyToClipboard
            text="marouaniceif@gmail.com"
          // onCopy={() => alert("Copied")}
          >
            <Popover><Popover.Trigger>
              <Link
                //@ts-ignore
                color="black"
                target="_blank"
                href="mailto:marouaniceif@gmail.com"
                style={{ marginBottom: '8px' }}
              >
                📧 Email
              </Link>
            </Popover.Trigger>
              <Popover.Content>
                <Text css={{ p: "$10" }}>Mail copié !</Text>
              </Popover.Content>
            </Popover>
          </CopyToClipboard>


          <Link
            //@ts-ignore
            color="black"
            target="_blank"
            href="https://www.linkedin.com/in/ceif-edine-marouani-9b15191b9/?originalSubdomain=fr"
            style={{ marginBottom: '8px' }}
          >
            🔗 Linked In
          </Link>
          <Popover><Popover.Trigger>
            <Link
              //@ts-ignore
              color="black"
              target="_blank"
              href="https://cdn.discordapp.com/attachments/964974538347659324/983471356588998776/Marouani_Ceif-Edine_CV.pdf"
              style={{ marginBottom: '8px' }}
              onPress={() => {
                console.log("clicked"),
                  window.open('https://cdn.discordapp.com/attachments/964974538347659324/983471356588998776/Marouani_Ceif-Edine_CV.pdf', '_blank')
              }}
            >
              📋 Mon CV
            </Link>

          </Popover.Trigger>
            <Popover.Content>
              <Text css={{ p: "$10" }}>CV télécharger !</Text>
            </Popover.Content>
          </Popover>
        </Card>
      </Grid>
    </Grid.Container>
  );
}
