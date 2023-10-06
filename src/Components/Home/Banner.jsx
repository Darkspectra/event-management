import bg1 from "../../assets/bg1.jpg"

const Banner = () => {
    return (
        <div>
            <div className="display:relative">
                <h2 className="font-bold text-white text-6xl display: absolute left-[43%] top-[48%]"><span className="text-yellow-200">~Espousal~</span> <br /><span className="text-2xl">-A Neat perfect-<br />-Wedding management- <br />-Enhance Environment-</span></h2>
            </div>
            <img className="rounded-2xl" src={bg1} alt="" />
            <p className="text-6xl font-bold my-7">Our Services</p>
        </div>
    );
};

export default Banner;