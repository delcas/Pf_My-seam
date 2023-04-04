import { Link } from "react-router-dom";
import {
  useDisclosure,
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import st from "./Detail.module.css";
import DetImage from "./DetImages/DetImages";
import DetailText from "./DetailText/DetailText";

export default function Detail({
  userId,
  handleEdition,
  handleDelete,
  details,
  currentImg,
  setCurrentImg,
  InputHandler,
  SendCange,
  EditionPDetail,
  edit,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      {userId === details.userid ? (
        <div>
          <button onClick={handleEdition}>Habilitar Edición 🖊</button>
          <Button onClick={onOpen}>Eliminar</Button>
          <Modal isOpen={isOpen}>
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                Usted está a punto de eliminar este producto
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleDelete}>
                  <Link
                    to="/home"
                    onClick={() => alert("Producto eliminado con exito")}
                  >
                    Eliminar
                  </Link>
                </Button>
                <Button onClick={onClose}>Cancelar</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      ) : (
        ""
      )}
      <table className={st.detailTable}>
        <tr>
          <DetImage
            details={details}
            setCurrentImg={setCurrentImg}
            currentImg={currentImg}
          />
          <DetailText
            details={details}
            InputHandler={InputHandler}
            SendCange={SendCange}
            EditionPDetail={EditionPDetail}
            edit={edit}
          />
        </tr>
      </table>
    </div>
  );
}
