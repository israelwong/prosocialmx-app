'use client';
import React from 'react'
import { Fade } from 'react-awesome-reveal';
import { CircleCheck, Clock8, Calendar, User, Camera, Award } from 'lucide-react';


function Nosotros() {
    return (
        <div>

            <div className="px-8 md:max-w-screen-md mx-auto">

                <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4 font-semibold
md:text-2xl ">
                    ¿Por qué nosotros?
                </p>

                <h2 className="font-Bebas-Neue text-4xl md:text-5xl font-bold mb-2">
                    Más de <u>10 años de experiencia</u> cubriendo momentos especiales
                </h2>

                <p className="md:text-3xl text-2xl pb-5 font-light mb-3">
                    Te brindamos un servicio personalizado y profesional en todo momento.
                </p>

                <div className="grid md:grid-cols-2 grid-flow-row gap-3 justify-center align-middle">

                    <Fade>
                        <div className="py-5 bg-zinc-950 p-5 rounded-md border border-violet-900">
                            <h5 className="font-semibold text-violet-400 pb-1">
                                <CircleCheck className='inline-block' /> Compromiso
                            </h5>
                            <p className="text-sm font-light text-gray-300">Resolvemos cualquier eventualidad y te apoyamos en todo momento.</p>
                        </div>
                    </Fade>

                    <Fade>
                        <div className="py-5 bg-zinc-950 p-5 rounded-md border border-violet-900">
                            <h5 className="font-semibold text-violet-400 pb-1">
                                <Clock8 className='inline-block' /> Puntualidad
                            </h5>
                            <p className="text-sm font-light text-gray-300">Nos anticipamos a llegar 40min antes de que inice tu servicio.</p>
                        </div>
                    </Fade>

                    <Fade>
                        <div className="py-5 bg-zinc-950 p-5 rounded-md border border-violet-900">
                            <h5 className="font-semibold text-violet-400 pb-1">
                                <Calendar className='inline-block' /> Planeación y logística
                            </h5>
                            <p className="text-sm font-light text-gray-300">Trabajamos contigo la planificación de sesiones previas y cobertura de evento.</p>
                        </div>
                    </Fade>

                    <Fade>
                        <div className="py-5 bg-zinc-950 p-5 rounded-md border border-violet-900">
                            <h5 className="font-semibold text-violet-400 pb-1">
                                <User className='inline-block' /> Personal calificado
                            </h5>
                            <p className="text-sm font-light text-gray-300">Personal con experiencia garantizará para cubrir tu evento.</p>
                        </div>
                    </Fade>

                    <Fade>
                        <div className="py-5 bg-zinc-950 p-5 rounded-md border border-violet-900">
                            <h5 className="font-semibold text-violet-400 pb-1">
                                <Camera className='inline-block' /> Producción profesional
                            </h5>
                            <p className="text-sm font-light text-gray-300">Utilizamos equipos de gama alta para garantizar resultados de calidad.</p>
                        </div>
                    </Fade>

                    <Fade>
                        <div className="py-5 bg-zinc-950 p-5 rounded-md border border-violet-900">
                            <h5 className="font-semibold text-violet-400 pb-1">
                                <Award className='inline-block' /> Seguimiento post-entrega
                            </h5>
                            <p className="text-sm font-light text-gray-300">Te ofrecemos garantias de post-entrega para garantizar tu satisfacción.</p>
                        </div>
                    </Fade>

                </div>

            </div>

        </div>
    )
}

export default Nosotros
