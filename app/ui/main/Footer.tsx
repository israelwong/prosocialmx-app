import React from 'react'

function Footer() {
    return (

        <footer className="w-full py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="max-w-3xl mx-auto">
                    <div className="flex space-x-10 justify-center items-center mb-10">

                        <a
                            title="Facebook"
                            href="https://www.facebook.com/prosocialmx" target="_blank"
                            className="block text-gray-600 transition-all duration-500 hover:text-indigo-600"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a
                            title="Instagram"
                            href="https://www.instagram.com/prosocialmx" target="_blank"
                            className="block text-gray-600 transition-all duration-500 hover:text-indigo-600"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a
                            title="YouTube"
                            href="https://www.youtube.com/@prosocial_fifteens" target="_blank"
                            className="block text-gray-600 transition-all duration-500 hover:text-indigo-600"
                        >
                            <i className="fab fa-youtube"></i>
                        </a>

                        <a
                            title="Tiktok"
                            href="https://www.tiktok.com/@prosocialmx" target="_blank"
                            className="block text-gray-600 transition-all duration-500 hover:text-indigo-600"
                        >
                            <i className="fab fa-tiktok"></i>
                        </a>

                    </div>

                    <span className="text-sm text-gray-500 text-center block">
                        ProSocial 2024, Todos los derechos reservados.
                    </span>

                </div>
            </div>
        </footer>

    )
}

export default Footer
