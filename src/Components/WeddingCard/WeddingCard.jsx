import card from "../../assets/card.jpg"

const WeddingCard = () => {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div>
                    <img src={card} alt="" srcset="" />
                </div>
                <div className="ml-8 mt-36">
                    <h2 className="text-3xl font-bold mb-9">Card</h2>
                    <p className='text-2xl'>
                        the Wedding Card, there is usually a blank space or pre-printed message area where the sender can write a personal note to the couple. This message may express warm wishes for the couple's future together, recount fond memories, or offer advice for their journey as spouses.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WeddingCard;