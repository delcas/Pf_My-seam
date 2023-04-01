import imstyle from "./DetImages.module.css";

export default function DetImage({ details, setCurrentImg, currentImg }){

return <tr><td>
            <button
              name="leftBtn"
              className={
                currentImg === 0
                  ? imstyle.ArrowButtonDisabled
                  : imstyle.ArrowButton
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
            <td className={imstyle.box} rowSpan="6">
              <img
                className={imstyle.FlagImg}
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
                  ? imstyle.ArrowButtonDisabled
                  : imstyle.ArrowButton
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
</tr>

          }