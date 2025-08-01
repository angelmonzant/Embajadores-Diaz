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
      "Línea de crédito $75 inicial"
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

        {/* Additional info */}
        <AnimatedSection className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💡 Información importante
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Con Factura Fiscal o Manual:
                </h4>
                <p className="text-gray-600">
                  El Fee se calcula de la base imponible
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Con Nota de Entrega:
                </h4>
                <p className="text-gray-600">
                  El Fee se calcula del monto total de la venta
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-primary/10 rounded-xl">
              <p className="text-primary font-semibold">
                💰 Tú siempre cobras el 50% del monto de la venta en tu tienda
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
} 