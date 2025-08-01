'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      '¡Hola! Estoy interesado en convertirme en aliado comercial de Rapikom. Me gustaría obtener más información sobre los beneficios y el proceso de afiliación.'
    )
    const whatsappUrl = `https://wa.me/584141234567?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contact" className="bg-gradient-to-br from-primary to-secondary py-20 text-white">
      <div className="container-custom">
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              ¿Listo para Transformar tu Negocio?
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Únete a más de 900 aliados comerciales que ya están creciendo con Rapikom
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Benefits & Stats */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Beneficios Inmediatos
                </h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Aumento del 60% en el ticket promedio</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Conversión de ventas del 85%</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Nuevos clientes recurrentes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Comisiones atractivas por ventas</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-primary">60%</div>
                  <div className="text-sm text-gray-300">Aumento en ventas</div>
                </div>
                <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-primary">900+</div>
                  <div className="text-sm text-gray-300">Aliados activos</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column - Contact */}
          <AnimatedSection delay={0.6}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <motion.div 
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MessageCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Contacta a Nuestros Embajadores</h3>
                <p className="text-gray-300">
                  Nuestros expertos te guiarán en todo el proceso de afiliación
                </p>
              </div>

              <motion.button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-6 h-6" />
                <span>Contactar por WhatsApp</span>
              </motion.button>

              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5" />
                  <span>+58 414-123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5" />
                  <span>embajadores@rapikom.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span>Caracas, Venezuela</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/5 rounded-lg">
                <p className="text-sm text-gray-300 text-center">
                  <strong>Horario de atención:</strong><br />
                  Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                  Sábados: 9:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.8}>
          <div className="text-center mt-16">
            <motion.div 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                onClick={handleWhatsAppClick}
                className="bg-white text-primary font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                ¡Quiero Ser Aliado Comercial!
              </button>
            </motion.div>
            <p className="text-gray-300 mt-4">
              Únete a la revolución del financiamiento en Venezuela
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
} 