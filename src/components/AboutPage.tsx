import React from "react";

const AboutPage: React.FC = () => {

  return (
    <section className="bg-gray-100 text-gray-800" id="about-page">
      <div className="container mx-auto flex flex-col p-6">
        <h2 className="py-4 text-3xl font-bold text-center">About Our Company</h2>
        <div className="divide-y divide-gray-300">
          {/* Informações da Empresa */}
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16">
                <path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
                <path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
                <path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
              </svg>
            </div>

            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xl font-bold md:text-2xl">Our History</span>
              <span className="mt-4 text-gray-700">
              We are a company dedicated to construction, renovation, and maintenance of spaces, with years of experience turning dreams into reality. Our commitment is to quality and customer satisfaction.
              </span>
            </div>
          </div>

          {/* Forma de Orçamento */}
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16">
                <path d="M285.177,179l15.513-3.914-7.827-31.028-15.514,3.913a176.937,176.937,0,0,0-129.3,133.557l-3.407,15.633,31.266,6.814,3.406-15.634A145.559,145.559,0,0,1,285.177,179Z"></path>
                <path d="M363.624,147.871C343.733,72.077,274.643,16,192.7,16,95.266,16,16,95.266,16,192.7c0,82.617,57,152.163,133.735,171.4A176.769,176.769,0,0,0,320.7,496c97.431,0,176.7-79.266,176.7-176.695C497.392,238.071,441.64,167.336,363.624,147.871ZM48,192.7C48,112.91,112.91,48,192.7,48s144.7,64.91,144.7,144.7-64.911,144.7-144.7,144.7S48,272.481,48,192.7ZM320.7,464c-60.931,0-115.21-38.854-135.843-94.792,2.6.115,5.214.184,7.843.184a176.862,176.862,0,0,0,32.7-3.047l97.625,97.625C322.247,463.983,321.473,464,320.7,464Zm41.528-6.083L260.26,355.954a176.9,176.9,0,0,0,43.662-26.072L408.37,434.33A144.385,144.385,0,0,1,362.223,457.917Zm69.3-45.692L326.851,307.557a177.082,177.082,0,0,0,27.911-44.5L457.67,365.964A144.661,144.661,0,0,1,431.519,412.225Zm33.594-84.073-99.42-99.42a176.785,176.785,0,0,0,3.7-36.036c0-3.285-.1-6.547-.276-9.787a145.054,145.054,0,0,1,96.276,136.4C465.392,322.276,465.291,325.224,465.113,328.152Z"></path>
              </svg>
            </div>

            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xl font-bold md:text-2xl">Request a Quote</span>
              <span className="mt-4 text-gray-700">
                We make the quoting process easy for you. Request a free consultation through our website or by phone, whether in-person or remote, and receive a personalized quote in just a few steps.
                Once the quote is approved:
                <ul className="list-disc list-inside mt-2">
                  <li>For general services: the service will be performed, and payment will be made upon completion.</li>
                  <li>For construction: a payment of <strong>50%</strong> will be required at the start, <strong>30%</strong> before the completion of the work, and the remaining balance upon finalizing the service.</li>
                </ul>
              </span>
            </div>
          </div>

          {/* Contatos */}
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16">
                <path d="M412.284,294.37l-12.5,15.642c-8.354,10.454-50.027,64.208-50.027,95.883,0,36.451,28.049,66.105,62.526,66.105s62.527-29.654,62.527-66.105c0-31.675-41.673-85.429-50.028-95.883Zm0,145.63c-16.832,0-30.526-15.3-30.526-34.105,0-11.662,15.485-37.883,30.531-59.2,15.043,21.3,30.522,47.509,30.522,59.2C442.811,424.7,429.116,440,412.284,440Z"></path>
                <path d="M122.669,51.492,96.133,124.4,30.092,97.205,17.908,126.8l67.271,27.7L26.9,314.606a48.056,48.056,0,0,0,28.689,61.523l184.719,67.232a48,48,0,0,0,61.523-28.688L397.6,151.56Zm149.1,352.236a16,16,0,0,1-20.508,9.563L66.537,346.059a16,16,0,0,1-9.563-20.507L73.553,280H316.8ZM85.2,248l29.594-81.311,36.333,14.961a32.644,32.644,0,1,0,11.236-29.98l-36.615-15.077,16.046-44.085,214.79,78.177L328,249.219V248Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xl font-bold md:text-2xl">Get in Touch</span>
              <span className="mt-4 text-gray-700">
                We are available to answer your questions and provide support. Contact us via phone, email, or social media. Our team is ready to help!
              </span>
            </div>
          </div>

          {/* Qualidade dos Serviços */}
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16">
                <polygon points="388.632 393.82 495.823 255.94 388.684 118.178 363.424 137.822 455.288 255.944 363.368 374.18 388.632 393.82"></polygon>
                <polygon points="148.579 374.181 56.712 255.999 148.629 137.823 123.371 118.177 16.177 255.993 123.314 393.819 148.579 374.181"></polygon>
                <polygon points="330.529 16 297.559 16 178.441 496 211.412 496 330.529 16"></polygon>
              </svg>
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xl font-bold md:text-2xl">Quality Guaranteed</span>
              <span className="mt-4 text-gray-700">
                We use the best materials and the most advanced practices in the market to ensure high-quality services. Your satisfaction is our priority!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default AboutPage;
