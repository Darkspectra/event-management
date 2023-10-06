import cake from "../../assets/cake.jpg"

const Cake = () => {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div>
                    <img src={cake} alt="" srcset="" />
                </div>
                <div className="ml-8 mt-36">
                    <h2 className="text-3xl font-bold mb-9">Cake</h2>
                    <p className='text-2xl'>
                        The design of a wedding cake can range from elegantly simple to intricately detailed. It may feature smooth fondant icing for a polished finish or textured buttercream for a more rustic look. Some cakes may also incorporate decorative elements like lace patterns, floral motifs, or metallic accents.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cake;