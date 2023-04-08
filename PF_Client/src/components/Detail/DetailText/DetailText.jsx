import txtstyle from "./DetailText.module.css";

export default function DetailText({
    details,
    InputHandler,
    SendCange,
    EditionPDetail,
    edit }){
 
    return <td className={txtstyle.tdLeft}>
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
        Ropa de:
        {edit.s === "gender" ? (
          <span>
            <input
              type="text"
              name="gender"
              onChange={InputHandler}
            />
            <button onClick={SendCange}>OK</button>
          </span>
        ) : (
          details.gender
        )}
      </td>
      <td>
        {edit.e ? (
          <button name="gender" onClick={EditionPDetail}>
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
        Categoria:
        {edit.s === "category" ? (
          <span>
            <input
              type="text"
              name="category"
              onChange={InputHandler}
            />
            <button onClick={SendCange}>OK</button>
          </span>
        ) : (
          details.category
        )}
      </td>
      <td>
        {edit.e ? (
          <button name="category" onClick={EditionPDetail}>
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
}