import slide1 from '../../assets/slide1.jpg'
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide3.jpg'
import slide4 from '../../assets/slide4.jpg'


const Photo = () => {

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full duration-700 ease-in-out">
                    <img src={slide1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full duration-700 ease-in-out">
                    <img src={slide2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full duration-700 ease-in-out">
                    <img src={slide3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full duration-700 ease-in-out">
                    <img src={slide4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='mt-20 mb-20'>
                <h2 className="text-3xl font-bold mb-9">Photos</h2>
                <p className='text-2xl'>A well-taken marriage photo encapsulates much more than just a visual representation. It holds within it a narrative, a story that unfolds with every glance. Each photograph freezes a moment in time, preserving the smiles, tears, and gestures that make a wedding day so meaningful. The artistry behind marriage photography lies in the ability to blend technical skill with a keen eye for emotion and aesthetics. A skilled wedding photographer understands the nuances of lighting, composition, and framing, but more importantly, they have an innate sense for capturing candid, unscripted moments of joy, tenderness, and connection.</p>
            </div>
        </div>
    );
};

export default Photo;