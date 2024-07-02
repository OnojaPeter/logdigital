// import { MdSend } from 'react-icons/md';

const Contact = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
                <form className="mt-8 space-y-6">
                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                        <input className="flex-1 px-4 py-2 border rounded-lg" type="text" placeholder="Name" />
                        <input className="flex-1 px-4 py-2 border rounded-lg" type="email" placeholder="Email" />
                    </div>
                    <textarea className="w-full px-4 py-2 border rounded-lg" rows="4" placeholder="Message"></textarea>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center justify-center gap-1">
                        <p>Send</p>
                        {/* <MdSend className="w-5 h-5" /> */}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;