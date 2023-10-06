import { Link } from "react-router-dom";

const Cards = ({ party }) => {
    const { id, image, price, brief, description, name } = party;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="p-2 w-[30%] rounded text-4xl">{name}</p>
                    <h2 className="card-title font-semibold">{brief}</h2>
                    <h2 className="card-title font-semibold">Price: {price}</h2>
                </div>
                <Link className="ml-32" to={`/details/${id}`}><button class="btn btn-active btn-secondary text-2xl text-white">Details</button></Link>
            </div>
        </div>
    );
};

export default Cards;