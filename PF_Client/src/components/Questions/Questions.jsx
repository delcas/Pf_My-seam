import questyle from "./Questions.module.css";
import { useSelector } from "react-redux";
import {

  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Textarea,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  FormLabel,
  ModalBody,
  useDisclosure,
  Modal,
  ModalContent,
  ModalFooter,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function Questions() {
  const productQuestions = useSelector((state) => state.productQuestions);
  
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const sendQuestHandler = ()=>{
      
    }
  
  return (
    <div className={questyle.detailTable}>
      <div>
        <label colSpan="2">Preguntas:</label>
    <span>
      <Button onClick={onOpen}>Haz una pregunta</Button>
            <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Tu Pregunta</FormLabel>
              <Textarea ref={initialRef} placeholder='question' />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={sendQuestHandler}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </span>

      </div>
      <div>
        {productQuestions.length > 0 ? (
          <Accordion>
            {productQuestions.map((q) => <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {q.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{q.answer}</AccordionPanel>
              </AccordionItem>
            )}
          </Accordion>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
