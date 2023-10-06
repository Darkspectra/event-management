import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <h2 className="text-4xl italic font-bold text-red-400 text-center">~Espousal~</h2>
            <p className="text-2xl text-center">A Wedding Management</p>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Login</h2>
                <form className="md: w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account <Link to="/register" className="text-blue-800 font-bold">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;