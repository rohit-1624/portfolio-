import React from "react";

const openResume = (e) => {
    e.preventDefault()
    window.open("https://drive.google.com/file/d/1-RJ5tog-HSuQPi4NATR61xDiJlg8t8Z4/view?usp=sharing")
}

const Home = () => (
    <div className="bg-[#09101A]">
        <section id="home" className="min-h-screen flex items-center justify-center pt-6 md:pt-30 py-8 px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col p-6 md:p-16 pt-1 gap-6 justify-center">
                    <div className="space-y-1 text-white">
                        <h1 className="text-3xl md:text-4xl font-bold">Hi, I'm Rohit!</h1>
                        <h1 className="text-3xl md:text-4xl font-bold">Frontend Developer</h1>
                    </div>
                    <p className="text-lg text-gray-300 mt-2">A passionate Frontend Developer dedicated to crafting beautiful, interactive, and high-performance web experiences. I specialize in React.js, Tailwind CSS, and converting modern UI/UX designs into build seamless working user-interface. Let’s bring ideas to life with clean, efficient, and user-friendly code!</p>
                    <button onClick={openResume} className="animate__animated w-fit text-4xl text-white font-semibold cursor-pointer hover:shadow-2xl shadow-md hover:shadow-gray-700 flex gap-1 px-8 py-4 justify-center items-center bg-gradient-to-r from-indigo-500 to-teal-400">
                        Resume
                        <i className="ri-arrow-right-wide-fill text-3xl animate__animated group-hover:animate__headShake"></i>
                    </button>
                </div>

                <div className="md:h-[300px] md:w-[260px] h-[200] w-[150px] mx-auto py-15">
                    <img src="/images/profile-pic.jpeg" alt="profile-pic" className="rounded-full border border-2 border-violet-700 shadow-lg shadow-gray-600" />
                </div>
            </div>
        </section>      
    </div>
);

export default Home;
