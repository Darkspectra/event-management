

const SearchBar = () => {
    return (
        <div className="ml-[40%] mb-36">
            <div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary text-white font-bold">Search</button>
            </div>
        </div>
    );
};

export default SearchBar;