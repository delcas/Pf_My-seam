import { Link } from "react-router-dom";
import { useDisclosure,
     Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,} from "@chakra-ui/react";
import st from "./Detail.module.css";

export default function Detail({ userId, handleEdition, handleDelete, details, currentImg, setCurrentImg, InputHandler, SendCange, EditionPDetail, edit }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <div>
        {userId === details.userid ? (
        <div>
          <button onClick={handleEdition}>Habilitar Edición 🖊</button>
          <Button onClick={onOpen}>Eliminar</Button>
          <Modal isOpen={isOpen}>
          <ModalContent>
          <ModalCloseButton/>
          <ModalBody>
            Usted está a punto de eliminar este producto
          </ModalBody>
          <ModalFooter>
          <Button onClick={handleDelete}><Link to='/home' onClick={()=> alert('Producto eliminado con exito')}>Eliminar</Link></Button>
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
          <td>
            <button
              name="leftBtn"
              className={
                currentImg === 0
                  ? st.ArrowButtonDisabled
                  : st.ArrowButton
              }
              onClick={() =>
                currentImg === 0
                  ? setCurrentImg(0)
                  : setCurrentImg(currentImg - 1)
              }
            >
              {"◀"}
            </button>
          </td>
          <tr>
            <td className={st.box} rowSpan="6">
              <img
                className={st.FlagImg}
                src={details.image[currentImg]}
                alt={`imagen del producto ${details.name}`}
              />
            </td>
            {/* <td>{edit.s === "image" ?
          (
            <span>
              <input
                type="text"
                name="image"
                onChange={InputHandler}
              />
              <button onClick={SendCange}>OK</button>
            </span>
          ) : ''}
          </td>
          <td>
                {edit.e ? (
                  <button name="image" onClick={EditionPDetail}>
                    {" "}
                    🖊{" "}
                  </button>
                ) : (
                  ""
                )}
              </td> */}
          </tr>

          <td>
            <button
              name="rightBtn"
              className={
                currentImg === details.image.length - 1
                  ? st.ArrowButtonDisabled
                  : st.ArrowButton
              }
              onClick={() =>
                currentImg === details.image.length - 1
                  ? setCurrentImg(currentImg)
                  : setCurrentImg(currentImg + 1)
              }
            >
              {"▶"}
            </button>
          </td>
          <td className={st.tdLeft}>
            <tr>
              <td>
                Producto:
                {edit.s === "name" ? (
                  <span>
                    <input
                      type="text"
                      name="name"
                      onChange={InputHandler}
                    />
                    <button onClick={SendCange}>OK</button>
                  </span>
                ) : (
                  details.name
                )}
              </td>
              <td>
                {edit.e ? (
                  <button name="name" onClick={EditionPDetail}>
                    {" "}
                    🖊{" "}
                  </button>
                ) : (
                  ""
                )}
              </td>
            </tr>
            <tr>
              <td>
                Descripcion:
                {edit.s === "description" ? (
                  <span>
                    <input
                      type="text"
                      name="description"
                      onChange={InputHandler}
                    />
                    <button onClick={SendCange}>OK</button>
                  </span>
                ) : (
                  details.description
                )}
              </td>
              <td>
                {edit.e ? (
                  <button name="description" onClick={EditionPDetail}>
                    {" "}
                    🖊{" "}
                  </button>
                ) : (
                  ""
                )}
              </td>
            </tr>
            <tr>
              <td>
                Precio:
                {edit.s === "price" ? (
                  <span>
                    <input
                      type="text"
                      name="price"
                      onChange={InputHandler}
                    />
                    <button onClick={SendCange}>OK</button>
                  </span>
                ) : (
                  details.price
                )}
              </td>
              <td>
                {edit.e ? (
                  <button name="price" onClick={EditionPDetail}>
                    {" "}
                    🖊{" "}
                  </button>
                ) : (
                  ""
                )}
              </td>
            </tr>
            <tr>
              <td>
                Stock:
                {edit.s === "stock" ? (
                  <span>
                    <input
                      type="text"
                      name="stock"
                      onChange={InputHandler}
                    />
                    <button onClick={SendCange}>OK</button>
                  </span>
                ) : (
                  details.stock
                )}
              </td>
              <td>
                {edit.e ? (
                  <button name="stock" onClick={EditionPDetail}>
                    {" "}
                    🖊{" "}
                  </button>
                ) : (
                  ""
                )}
              </td>
            </tr>
            <tr>Vendedor: {details.userid}</tr>
            <tr>Disponible: NYI</tr>
          </td>
        </tr>
      </table>
      </div>  

}