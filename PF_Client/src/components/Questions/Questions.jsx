import questyle from "./Questions.module.css";
import { useSelector } from "react-redux";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Questions() {
  const productQuestions = useSelector((state) => state.productQuestions);

  // const acordionHandler = (productQuestions) => {
  //   if (productQuestions){
  //   return
  //   });}
  // }

  return (
    <div className={questyle.detailTable}>
      <div>
        <label colSpan="2">Preguntas:</label>
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
