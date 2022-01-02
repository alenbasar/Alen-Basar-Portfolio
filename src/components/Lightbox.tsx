import React, { useState } from "react";
import Carousel, { ModalGateway, Modal, ViewType } from "react-images";

type Props = {
  imgClassName?: string;
  views: ViewType[];
};

function Lightbox(props: Props) {
  const { imgClassName, views } = props;
  const [toggle, setToggle] = useState(false);

  return (
    <React.Fragment>
      <img
        alt=""
        className={imgClassName || ""}
        src={views[0].source as string}
        onClick={() => setToggle(!toggle)}
      />
      <ModalGateway>
        {toggle && (
          <Modal onClose={() => setToggle(!toggle)}>
            <Carousel views={views} />
          </Modal>
        )}
      </ModalGateway>
    </React.Fragment>
  );
}

export default Lightbox;
