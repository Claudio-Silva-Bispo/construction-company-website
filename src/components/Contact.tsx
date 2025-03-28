
export default function Contact() {
    return (

        <section id="contact" className=" bg-primeira text-white h-[100vh] md:h-auto md:pb-10 flex flex-col md:flex-row justify-center items-start md:grid-cols-2 md:divide-x">
            <form className="container w-full max-w-xl p-4 mx-auto space-y-6 rounded-md shadow bg-primeira">
                <h2 className="relative text-5xl md:text-6xl font-bold font-sans md:pt-20 text-white">
                Contact us
                    <span className="absolute left-[calc(50%-50px)] top-full w-[60px] h-[4px] bg-white"></span>
                    <span className="absolute left-[calc(50%-40px)] top-[calc(100%+10px)] w-[80px] h-[4px] bg-white"></span>
                </h2>
                <div>
                    <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                    <input id="name" type="text" placeholder="Your name" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-terceira bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                    <input id="email" type="email" placeholder="Your email" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-terceira bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-1 ml-1">Message</label>
                    <textarea id="message" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-terceira bg-gray-100"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-terceira    focus:ring-terceira hover:ring-terceira text-gray-50">Send</button>
                </div>
            </form>

            <div className="space-y-4 p-5 lg:m-28">
                <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Seattle e Região</span>
                </p>
                <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span>(425) 971-9002</span>
                </p>
                <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span>andrads.pbs@gmail.com</span>
                </p>
            </div>
        </section>

    );
}