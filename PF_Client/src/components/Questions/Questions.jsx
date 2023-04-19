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
  const dId = details.id;
  const product = useSelector((state) => state.productQuestions);
  const service = useSelector((state) => state.serviceQuestions);
  let detailQuestions = sell === "product" ? product : service;
  console.log(ver);

  //
  return (
    <div className={questyle.detailTable}>
      <div>
        <label colSpan="2">Preguntas:</label>
        <span>
          {ver ? (
            ""
          ) : (
            <ModalBtn
              sell={sell}
              userId={userId}
              ver={ver}
              id={dId}
              name="question"
            />
          )}
        </span>
      </div>
      <div>
        {detailQuestions.length > 0 ? (
          <Accordion>
            {detailQuestions.map((q) => (
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {q.question}
                    </Box>
                    {ver ? (
                      <ModalBtn
                      sell={sell}
                        userId={userId}
                        ver={ver}
                        q_id={q.id}
                        id={dId}
                        name="answer"
                      />
                    ) : (
                      ""
                    )}
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
