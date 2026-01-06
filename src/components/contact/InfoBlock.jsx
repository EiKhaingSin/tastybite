// import InfoBlock from './InfoBlock';


const InfoBlock = ({ icon: Icon, title, content }) => (
    <div className="p-5 text-center bg-gray-900 rounded-lg border border-gray-800 transition hover:border-white duration-300">
        <div className="flex justify-center mb-3">
            
            <Icon className="w-7 h-7 text-white stroke-1.5" /> 
        </div>
        <h3 className="text-lg font-serif font-medium mb-1 text-white">
            {title}
        </h3>
        <p className="text-sm text-gray-400 font-serif whitespace-pre-line">
            {content}
        </p>
        <section className="py-12 px-4 bg-gray-900 border-b border-gray-800">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InfoBlock
                        icon={Phone}
                        title="Phone Us 24/7"
                        content={"General Inquiries:\n+1 (555) 123-4567\n\nSupport Line:\n+1 (555) 987-6543"}
                    />
                    <InfoBlock
                        icon={Compass}
                        title="Get Direction"
                        content={"123 Digital Blvd, Suite 400,\nTech City, CA 10118\n\nClick here for detailed map directions."}
                    />
                    <InfoBlock
                        icon={Clock}
                        title="Opening Hours"
                        content={"Mon - Fri: 9:00 AM - 5:00 PM\nSaturday: 10:00 AM - 2:00 PM\nSunday: Closed"}
                    />
                </div>
            </section>
    </div>
    
);

export default InfoBlock;