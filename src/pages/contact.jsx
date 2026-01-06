
import { Mail, MapPin } from 'lucide-react';
import HeroImage from '../assets/r.jpg';
import { useState } from 'react';
import UnderlineInput from '../components/contact/underlineinput';


const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);


        const messageBox = document.getElementById('status-message');
        if (messageBox) {
            messageBox.textContent = 'Thank you for your message! We will get back to you soon.';
            messageBox.classList.remove('hidden');
            messageBox.classList.add('opacity-100');
            setTimeout(() => {
                messageBox.classList.remove('opacity-100');
                messageBox.classList.add('hidden');
            }, 3000);
        }


        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (
        <div className="bg-black min-h-screen text-white">


            <div id="status-message" className="hidden fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-3 rounded-lg shadow-xl z-50 transition duration-300 opacity-0">
                Message sent successfully!
            </div>


            <section
                className="py-16 md:py-24 bg-gray-900 border-b border-gray-800 bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${HeroImage})`,
                }}
            >
                <div className="mx-auto max-w-7xl text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-serif font-light mb-3">
                        Get In Touch
                    </h1>
                    <p className="text-lg text-gray-300 font-serif max-w-3xl mx-auto mb-8">
                        We are ready to start a conversation. Send us a message and we will respond promptly.
                    </p>
                    <div className="text-xs text-gray-500 mt-2 italic">
                        "A successful partnership begins with a simple conversation."
                    </div>
                </div>
            </section>


            

            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-serif font-light mb-2">
                            Contact Form & Location
                        </h2>
                        <p className="text-md text-gray-400 font-serif">
                            Reach out to us directly or find us on the map below.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                        <div>
                            <h3 className="text-xl font-serif font-medium text-gray-300 mb-5 border-b border-gray-700 pb-2 flex items-center">
                                <Mail className="w-5 h-5 mr-2 text-gray-500" /> Send a Message
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4">

                                <UnderlineInput label="Name" name="name" type="text" formData={formData} handleChange={handleChange} />
                                <UnderlineInput label="Email" name="email" type="email" formData={formData} handleChange={handleChange} />
                                <UnderlineInput label="Phone" name="phone" type="tel" formData={formData} handleChange={handleChange} />
                                <UnderlineInput label="Message" name="message" isTextarea={true} formData={formData} handleChange={handleChange} />

                                <div className="pt-8">
                                    <button
                                        type="submit"
                                        className="w-full py-3 text-lg font-medium text-white bg-gray-600 hover:bg-gray-700 transition duration-300 font-serif uppercase tracking-widest rounded-lg shadow-lg"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>


                        <div className="mt-8 lg:mt-0">
                            <h3 className="text-xl font-serif font-medium text-gray-300 mb-5 border-b border-gray-700 pb-2 flex items-center">
                                <MapPin className="w-5 h-5 mr-2 text-gray-500" /> Our Location
                            </h3>
                            <p className="text-gray-400 mb-4 font-serif text-sm">
                                Office Address:123 Digital Blvd, Suite 400, Tech City, 10118
                            </p>

                            <div className="w-full h-120 border border-gray-700 rounded-lg overflow-hidden shadow-xl">
                                <iframe
                                    title="Office Location Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.255909241512!2d144.9630575153213!3d-37.81729097975107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b5c00d41e7%3A0xb35359a9e3e3b3c3!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1628123456789!5m2!1sen!2sau"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>

                            <p className="mt-4 text-xs text-gray-600 font-serif">
                                Note: Please schedule an appointment before visiting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;