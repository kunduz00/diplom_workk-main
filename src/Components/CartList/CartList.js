import "./CartList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";

export default function CartList() {

  // this.deleteOrder = this.deleteOrder.bind(this)

  // deleteOrder(id){

  // }
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty
    })
  }

  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  const productIds = Object.keys(cart);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="cartItem" key={product.id}>
        <Link to={"/products/" + product.slug}>
          <img src={product.picture} alt={product.name} />
        </Link>
        <Link to={"/products/" + product.slug}>{product.name}</Link>

        <div className="inputs">


        <div className="shadowis flex">
            <button
              onClick={() => onQuantityChange(product, cart[product.id] - 1)}
              className="bg-[#f92e9e] text-white w-8 flex items-center justify-center cursor-pointer rounded-l-md outline-none"
            >
              -
            </button>
            <input
              className=""
              type="text"
              value={cart[product.id]}
              min={1}
              onChange={(event) =>
                onQuantityChange(product, parseInt(event.target.value, 10))
              }
            />
            <button
              onClick={() => onQuantityChange(product, cart[product.id] + 1)}
              className="bg-[#f92e9e] text-white w-8 flex items-center justify-center cursor-pointer rounded-r-md outline-none"
            >
              +
            </button>
          </div>


        <span>${(cart[product.id] * product.price).toFixed(2)}</span>
        <button className="removeButton" onClick={() => onItemRemove(product)}>
        <MdDelete className="delete_icon"/> 
            </button>

          </div>
      </div>
    ));

    const total = products
    .filter(product => productIds.includes(product.id))
    .reduce((sum, product) => sum + (cart[product.id] * product.price), 0);

  return (
    <div className="CartList">
      {output}

      <div className="CartTotal">
        <h2 className="total_tit">Total price :  {total} $</h2>
      </div>
      
    </div>
  )
}