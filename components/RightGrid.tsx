import { Button, Modal, Text, useModal } from "@nextui-org/react";
import React from "react";
import styles from '../styles/RightGrid.module.css'
import stylesleft from '../styles/LeftGrid.module.css'

import { CardProject } from "./CardProject";
import QuotesCard from "./QuotesCard";
import ProjectCard from "./ProjectCard";

const RightGrid = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <QuotesCard />
      <div>
        <br />
        <br />
      </div>
      {/*<div>
        < h2 className={stylesleft.titleTextB} style={{ maxWidth: '42%', borderRadius: 5, backgroundColor: 'white', color: 'black', fontSize: 18 }} >Mon dernier projet : </h2>
        <CardProject />
        <div>
          <Button auto flat onClick={() => setVisible(true)}>
            Open modal
          </Button>
          <Modal
            scroll
            fullScreen
            closeButton
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            {...bindings}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                Modal with a lot of content
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Text id="modal-description">
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              uam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            attat eros. Praesent commodo cursus magna, vel scelerisque
                nisnsectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et.
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button flat auto color="error" onClick={() => setVisible(false)}>
                Close
              </Button>
              <Button onClick={() => setVisible(false)}>Agree</Button>
            </Modal.Footer>
          </Modal>
        </div>
  </div>*/}
      <ProjectCard />
    </div>
  )
}
export default RightGrid;
