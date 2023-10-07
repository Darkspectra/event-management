import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react";

const Register = () => {

    const { createUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, email, password)

        setRegisterError('');
        setSuccess('')

        if(password.length<6){
            setRegisterError("Your Password should be equal or greater than six!");
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError("Your Password should have at least one upper case letter");
            return;
        }
        else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            setRegisterError("Your Password should have at least one special character");
            return;
        }

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess("Registered Successfully")
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message);
            })
    }
    return (
        <div>
            <h2 className="text-4xl italic font-bold text-red-400 text-center">~Espousal~</h2>
            <p className="text-2xl text-center">A Wedding Management</p>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Register</h2>
                <form onSubmit={handleRegister} className="md: w-3/4 lg:w-1/2 mx-auto">
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
            {
                registerError && <p className="text-red-600 font-bold text-center">{registerError}</p>
            }
            {
                success && <p className="text-green-600 font-bold text-center">{success}</p>
            }
        </div>
    );
};

export default Register;