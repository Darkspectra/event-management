import Marquee from "react-fast-marquee";


const Discount = () => {
    return (
        <div>
            <Marquee pauseOnHover={true} speed={100}>
                <p className="mr-12 text-4xl font-bold">We are thrilled to announce an exclusive discount to make your dream wedding even more spectacular! For a limited time, our premium wedding planning package is available at a <span className="text-4xl font-bold text-green-600">20%</span> </p>
            </Marquee>
        </div>
    );
};

export default Discount;