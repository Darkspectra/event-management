import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import SearchBar from "./SearchBar";
import Cards from "./Cards";


const Home = () => {
    const parties = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <SearchBar></SearchBar>
            <h2 className="text-2xl">Total Data: {parties.length}</h2>
            <div className="grid grid-cols-3 gap-20 my-14">
                {
                    parties.map(party => <Cards key={party.id} party={party}></Cards>)
                }
            </div>
        </div>
    );
};

export default Home;