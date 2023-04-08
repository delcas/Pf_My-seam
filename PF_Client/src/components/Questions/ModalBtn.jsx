import {
  Button,
  Textarea,
  ModalOverlay,
  ModalCloseButton,
  FormControl,
  FormLabel,
  ModalBody,
  useDisclosure,
  Modal,
  ModalContent,
  ModalFooter,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function ModalBtn({ userId, ver, id, name }) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [sndquest, setSndQuest] = useState({});

  useEffect(()=>{
    name === "question" &&
    setSndQuest({
      ...sndquest,
      customerId: userId,
    });}, [])
  

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setSndQuest({ ...sndquest, [property]: value });
  };

  const sendHandler = async (onClose) => {
    if (userId) {
      if (name === "answer") {
      console.log("envío respuesta: ", sndquest);
      await axios
      .put(`/questprod/product/${id}`, sndquest)
      .then(alert('Se ha enviado su respuesta'));
    } else {
      console.log("envío pregunta: ", sndquest);
      await axios
      .post(`/questprod/product/${id}`, sndquest)
      .then(dispatch(getProductQuestions(id)));
    }     
    } else {alert('Debe registrarse para realizar una pregunta');}
  };
  return (
    <>
      <Button onClick={onOpen}>{ver ? "Responder" : "Haz una Pregunta"}</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
        onSubmit={onClose}
        >
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>{ver ? "Respuesta" : "Tu Pregunta"}</FormLabel>
              <Textarea
                ref={initialRef}
                placeholder={ver ? "Respuesta" : "Tu Pregunta"}
                name={name}
                value={sndquest.question}
                onChange={changeHandler}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              colorScheme="blue"
              mr={3}
              onClick={()=>{
                sendHandler()
                onClose()
              }}
            >
              Enviar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
