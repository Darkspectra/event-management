import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const card = cards.find(card => card.id == id)
    console.log(card);
    return (
        <div>
            <img className="w-[60%] mx-auto" src={card.image} />
            <div className="mt-5 mx-auto">
                <h2 className="text-4xl font-bold">{card.name}</h2>
                <p className="mt-9">{card.description}</p>
            </div>
        </div>
    );
};

export default CardDetails;