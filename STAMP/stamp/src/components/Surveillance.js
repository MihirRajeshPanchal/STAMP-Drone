import React, { useState } from 'react';
import { Button, background } from '@chakra-ui/react';
import { ImCross } from 'react-icons/im'
import './surveillance.css';

function Surveillance() {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  // const [isLargerThan48] = useMediaQuery('(min-width: 48em)');
  return (
    <center><div style={{height: '200px', width: '500px', backgroundColor: 'rgba(0, 0, 0, 0.08)', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: '20px', padding: '10px'}}>
      <Button colorScheme="blue" onClick={openModal} className="">
        Click Me!
        {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
              <ImCross
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                />
                <div className="modal__video-align">
                  {videoLoading ? <div className="modal__spinner"></div> : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/4UZrsTqkcW4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </Button>

      <Button colorScheme="blue" className="button">
        Save in Computer
      </Button>

      <Button colorScheme="blue" className="button">
        Upload to cloud
      </Button>
    </div></center>
  );
}

export default Surveillance;
