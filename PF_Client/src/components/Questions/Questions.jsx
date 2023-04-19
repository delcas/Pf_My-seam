import questyle from "./Questions.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import ModalBtn from "./ModalBtn.jsx";

export default function Questions({ sell, userId, details, ver }) {
  const pId = details.id;
  const productQuestions = useSelector((state) => state.productQuestions);
 console.log(ver);
  
  //       
  return (
    <div className={questyle.detailTable}>
      <div>
        <label colSpan="2">Preguntas:</label>
        <span>
        {ver ? '' : <ModalBtn sell={sell} userId={userId} ver={ver} id={pId} name='question'/>}
        </span>
      </div>
      <div>
        {productQuestions.length > 0 ? (
          <Accordion>
            {productQuestions.map((q) => (
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {q.question}
                    </Box>
                    {ver ? <ModalBtn userId={userId} ver={ver} id={q.id} name='answer'/> : ''}
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{q.answer}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
