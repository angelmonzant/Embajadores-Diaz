'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const plans = [
  {
    title: "Plan 2 Cuotas",
    subtitle: "Pagos en 14 y 28 días",
    features: [
      "1-24 ventas: 7.50% comisión",
      "25-50 ventas: 7.00% comisión", 
      "51+ ventas: 6.50% comisión",
      "Protección contra impagos",
      "Pagos automáticos",
      "Soporte 24/7"
    ],
    popular: false
  },
  {
    title: "Plan 3 Cuotas",
    subtitle: "Pagos en 14, 28 y 42 días",
    features: [
      "1-24 ventas: 6.50% comisión",
      "25-50 ventas: 6.00% comisión",
      "51+ ventas: 5.50% comisión", 
      "Protección contra impagos",
      "Pagos automáticos",
      "Soporte 24/7",
      
    ],
    popular: true
  }
]

export default function PlansSection() {
  return (
    <section id="plans" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Planes de financiamiento</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tu negocio. Mientras más vendas, 
            menos pagas en comisiones.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.2}
              className="relative"
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Más Popular
                  </div>
                </motion.div>
              )}
              
              <motion.div
                className={`bg-white rounded-3xl p-8 shadow-xl border-2 ${
                  plan.popular 
                    ? 'border-primary shadow-2xl' 
                    : 'border-gray-200'
                } relative overflow-hidden`}
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16" />
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-primary font-semibold text-lg">
                      {plan.subtitle}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + featureIndex * 0.1 }}
                      >
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-primary text-white hover:bg-orange-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.popular ? 'Elegir Plan Popular' : 'Elegir Plan'}
                  </motion.button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* App Download Section */}
        <AnimatedSection className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-orange-600 rounded-2xl p-8 max-w-4xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">
              📱 Descarga la App de Rapikom
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Accede a todas las funcionalidades desde tu dispositivo móvil
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#"
                className="bg-black/20 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-3 flex items-center justify-center space-x-3 hover:bg-black/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-75">GET IT ON</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </motion.a>
              
              <motion.a
                href="#"
                className="bg-black/20 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-3 flex items-center justify-center space-x-3 hover:bg-black/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.81,20.24 16.04,21 13,21C11.5,21 10.26,20.81 9.25,20.45C8.25,20.09 7.5,19.59 7,19C6.5,18.41 6.25,17.66 6.25,16.75C6.25,15.84 6.5,15.09 7,14.5C7.5,13.91 8.25,13.41 9.25,13.05C10.26,12.69 11.5,12.5 13,12.5C16.04,12.5 17.81,13.26 18.71,14C19.61,14.74 20.11,15.5 20.11,16.25C20.11,17 19.61,17.76 18.71,18.5M13,2C16.04,2 17.81,2.76 18.71,3.5C19.61,4.24 20.11,5 20.11,5.75C20.11,6.5 19.61,7.26 18.71,8C17.81,8.74 16.04,9.5 13,9.5C11.5,9.5 10.26,9.31 9.25,8.95C8.25,8.59 7.5,8.09 7,7.5C6.5,6.91 6.25,6.16 6.25,5.25C6.25,4.34 6.5,3.59 7,3C7.5,2.41 8.25,1.91 9.25,1.55C10.26,1.19 11.5,1 13,1M13,3C11.5,3 10.26,3.19 9.25,3.55C8.25,3.91 7.5,4.41 7,5C6.5,5.59 6.25,6.34 6.25,7.25C6.25,8.16 6.5,8.91 7,9.5C7.5,10.09 8.25,10.59 9.25,10.95C10.26,11.31 11.5,11.5 13,11.5C16.04,11.5 17.81,10.74 18.71,10C19.61,9.26 20.11,8.5 20.11,7.75C20.11,7 19.61,6.24 18.71,5.5C17.81,4.76 16.04,4 13,4" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-75">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
} 