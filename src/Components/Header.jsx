import banner from '../assets/cook-banner.png'
import profile from '../assets/boy.png'
const Header = () => {
    return (
        <header className="mx-20 mb-24">
            <div className="navbar bg-base-100 flex justify-between mb-10">
                <div className="w-1/3">
                    <a className="font-bold text-4xl">Recipe<span className="text-lime-600">HUB</span></a>
                </div>
                <div className="navbar-center hidden lg:flex justify-between w-1/3">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="text-xl font-semibold">Home</a></li>
                        <li>
                            <details>
                                <summary className="text-xl font-semibold">Recipes</summary>
                                <ul className="p-2">
                                    <li><a>Popular</a></li>
                                    <li><a>Top Sales</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a className="text-xl font-semibold">About</a></li>
                        <li><a className="text-xl font-semibold">Search</a></li>
                    </ul>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={profile} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hero min-h-[600px] rounded-3xl" style={{ backgroundImage: `url(${banner})`,
        }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-2/3 space-y-7">
                        <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">We provides a wide range of cuisines and dishes to choose from so that <br /> every foodie in town has their best experience here.</p>
                        <div className='flex justify-center gap-5'>
                        <button className="btn bg-[#0BE58A] font-semibold text-xl">Explore Now</button>
                        <button className="btn bg-transparent text-white font-semibold text-xl">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;