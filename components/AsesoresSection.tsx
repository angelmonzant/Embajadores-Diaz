'use client'

import { motion } from 'framer-motion'
import { Users, Play, Star, Award, MessageCircle } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function AsesoresSection() {
  const handleVideoClick = () => {
    // Handle video play functionality
    console.log('Video clicked')
  }

  const handleContactAsesor = (asesor: string) => {
    const message = encodeURIComponent(
      `¡Hola! Me gustaría obtener más información sobre Rapikom con ${asesor}.`
    )
    
    let whatsappUrl
    if (asesor === 'Kleiver Díaz') {
      whatsappUrl = `https://wa.me/584129854702?text=${message}`
    } else if (asesor === 'Angel Monzant') {
      whatsappUrl = `https://wa.me/584127508045?text=${message}`
    } else {
      whatsappUrl = `https://wa.me/584129854702?text=${message}`
    }
    
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="asesores" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Nuestros Asesores Especializados
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Conoce a los expertos que te guiarán en todo el proceso de afiliación y te ayudarán a maximizar los beneficios de Rapikom
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Video Introduction */}
        <AnimatedSection delay={0.4}>
          <div className="mb-16">
            <div className="bg-black rounded-3xl p-8 text-white text-center">
              <motion.div 
                className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Play className="w-10 h-10" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Video de Introducción</h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Conoce más sobre Rapikom y cómo puede transformar tu negocio a través de nuestros asesores especializados
              </p>
              
              {/* YouTube Video Embed */}
              <div className="relative max-w-4xl mx-auto">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/EPd8POaR08U"
                    title="Video de Introducción Rapikom"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Asesores Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Kleiver Díaz */}
          <AnimatedSection delay={0.6}>
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-8">
                {/* Kleiver Profile Photo */}
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src="/assets/kleiver-profile.jpg" 
                    alt="Kleiver Díaz" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Kleiver Díaz</h3>
                <p className="text-primary font-semibold mb-2">Embajador Comercial</p>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  Especialista en estrategias de crecimiento comercial y optimización de ventas. 
                  Más de 3 años de experiencia ayudando a negocios a maximizar sus beneficios con Rapikom.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">+200 comercios afiliados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Especialista en PostVenta</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Consultoría personalizada</span>
                </div>
              </div>

              <motion.button
                onClick={() => handleContactAsesor('Kleiver Díaz')}
                className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contactar a Kleiver</span>
              </motion.button>
            </motion.div>
          </AnimatedSection>

          {/* Angel Monzant */}
          <AnimatedSection delay={0.8}>
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-8">
                {/* Angel Profile Photo */}
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src="/assets/angel-profile.jpg" 
                    alt="Angel Monzant" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Angel Monzant</h3>
                <p className="text-primary font-semibold mb-2">Asesor Estratégico</p>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  Experto en desarrollo de negocios y estrategias de financiamiento. 
                  Especializado en ayudar a comercios a implementar soluciones de pago innovadoras.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Coordinador de Marketing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Estrategias de Marketing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Desarrollo de Negocios</span>
                </div>
              </div>

              <motion.button
                onClick={() => handleContactAsesor('Angel Monzant')}
                className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contactar a Angel</span>
              </motion.button>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={1.0}>
          <div className="text-center mt-16">
            <motion.div 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg"
              >
                Hablar con un Asesor
              </button>
            </motion.div>
            <p className="text-gray-600 mt-4">
              Nuestros expertos están listos para ayudarte a transformar tu negocio
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
} 