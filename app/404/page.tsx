import React from 'react'
import Link from 'next/link'

function page() {
    return (
        <div className='max-w-screen-sm text-center mx-auto'>

            <div className='py-28'>

                <h1 className='font-Bebas-Neue text-8xl'>Oppsss</h1>
                <p className='text-xl px-24'>
                    La página que buscas no está disponible.
                </p>

                <div className='items-center py-6'>

                    <Link className='bg-purple-600 text-white py-3 px-4 my-6 rounded-full border border-purple-500' href='/'>
                        Volver al inicio
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default page
