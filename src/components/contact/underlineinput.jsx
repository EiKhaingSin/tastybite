// import UnderlineInput from '../UnderlineInput';

import { Phone, Clock, Compass } from 'lucide-react';
const UnderlineInput = ({ label, name, type = 'text', isTextarea = false, formData, handleChange }) => (
    <div className="pt-6">
        <label htmlFor={name} className="block mb-1 text-sm text-gray-400 font-serif">
            {label}
        </label>
        {isTextarea ? (
            <textarea
                id={name}
                name={name}
                value={formData[name]} 
                onChange={handleChange} 
                rows="3"
                className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-gray-600 focus:border-white text-white py-2 focus:ring-0 focus:outline-none resize-none font-serif text-lg transition duration-300"
                required
            ></textarea>
        ) : (
            <input
                type={type}
                id={name}
                name={name}
                value={formData[name]} 
                onChange={handleChange} 
                className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-gray-600 focus:border-white text-white py-2 focus:ring-0 focus:outline-none font-serif text-lg transition duration-300"
                required
            />
        )}
    </div>
);

export default UnderlineInput;