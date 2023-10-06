import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <h2 className="text-4xl italic font-bold text-red-400 text-center">~Espousal~</h2>
            <p className="text-2xl text-center">A Wedding Management</p>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Register</h2>
                <form className="md: w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account <Link to="/login" className="text-blue-800 font-bold">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;