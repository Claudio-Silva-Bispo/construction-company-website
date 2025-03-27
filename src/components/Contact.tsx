
export default function Contact() {
    return (

        <section id="contact" className=" bg-primeira text-white h-[100vh] md:h-auto md:pb-10 flex flex-col md:flex-row justify-center items-start md:grid-cols-2 md:divide-x">
            <form className="container w-full max-w-xl p-4 mx-auto space-y-6 rounded-md shadow bg-primeira">
                <h2 className="w-full text-3xl font-bold leading-tight pt-5">Contact us</h2>
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

                <p className="flex items-center">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 sm:mr-6 fill-current">
                        <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path>
                    </svg>
                    <span>andradpbsolutiion.com.br</span>
                </p>
            </div>
        </section>

    );
}