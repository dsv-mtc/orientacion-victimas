/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShieldCheck, 
  HeartPulse, 
  Stethoscope, 
  Gavel, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  AlertTriangle,
  FileText,
  HelpCircle
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Orientación en Seguros",
      description: "Asesoría especializada sobre coberturas del SOAT y AFOCAT para garantizar tus derechos.",
      icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Apoyo Psicológico",
      description: "Acompañamiento emocional especializado para víctimas y familiares en momentos críticos.",
      icon: <HeartPulse className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Acceso a Salud",
      description: "Orientación para el acceso efectivo a servicios médicos y de rehabilitación necesarios.",
      icon: <Stethoscope className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Asesoría Legal",
      description: "Información clara sobre procedimientos legales y normativas vigentes tras un siniestro.",
      icon: <Gavel className="w-8 h-8 text-red-600" />,
    },
  ];

  const steps = [
    {
      step: "Paso 1",
      title: "Realiza la Denuncia",
      image: "/Gemini_Generated_Image_a4040ra4040ra404.png",
      description: "Acude a la comisaría más cercana para reportar el siniestro de tránsito."
    },
    {
      step: "Paso 2",
      title: "Registra tus datos",
      image: "/plataformaRVVST.png",
      description: "Ingresa tu información en nuestro sistema de registro voluntario."
    },
    {
      step: "Paso 3",
      title: "Seguimiento de caso",
      image: "/Gemini_Generated_Image_rd0l92rd0l92rd0l.png",
      description: "Consulta el estado de tu orientación y los avances de tu solicitud."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-6">
              <img src="/logo-mtc.png" alt="Ministerio de Transportes y Comunicaciones" className="h-10 md:h-12 object-contain" />
              <img src="/LOGO-ONSV.png" alt="Observatorio Nacional de Seguridad Vial" className="h-10 md:h-12 object-contain" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {["Inicio", "Servicios", "Guía", "Fondo SOAT", "Contacto"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-slate-600 hover:text-red-600 font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2"
          >
            {["Inicio", "Servicios", "Guía", "Fondo SOAT", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-red-600 hover:bg-slate-50 rounded-md"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-900 leading-tight">
                No estás solo tras un siniestro de tránsito
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
                Brindamos orientación integral gratuita para víctimas y familiares. 
                Estamos aquí para guiarte en cada paso de tu recuperación.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#registro-voluntario"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-200 transition-all transform hover:-translate-y-1"
                >
                  Iniciar Registro Voluntario
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#fondo-soat"
                  className="inline-flex items-center justify-center px-8 py-4 border border-red-200 text-base font-bold rounded-xl text-red-600 bg-white hover:bg-red-50 transition-all"
                >
                  Atropello y Fuga (Fondo SOAT)
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 lg:mt-0 relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/image-(6).png"
                  alt="Apoyo a víctimas"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-red-50">
                <div className="flex items-center gap-4">
                  <div className="bg-red-50 p-3 rounded-full">
                    <ShieldCheck className="text-red-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Orientación Gratuita</p>
                    <p className="text-xs text-slate-500">Respaldo del MTC</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-red-900">Nuestros Servicios</h2>
            <p className="mt-4 text-lg text-slate-600">
              Ofrecemos un soporte multidisciplinario para abordar todas las necesidades que surgen tras un siniestro vial.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-red-100 transition-all border border-transparent hover:border-red-100 group"
              >
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-red-50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-red-900">{service.title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section id="guía" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-900">Proceso de Registro</h2>
            <p className="mt-4 text-lg text-slate-600">Sigue estos pasos para recibir nuestra orientación especializada.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#d32f2f] text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#8b0000]">{step.title}</h3>
                    <p className="mt-2 text-slate-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Access */}
      <section id="registro-voluntario" className="py-24 bg-red-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Accede a Registro Voluntario de Victimas de Siniestro de Transito
              </h2>
              <p className="mt-6 text-lg text-red-100 leading-relaxed">
                Nuestra plataforma web te permite registrar tus datos de manera segura y realizar el seguimiento de tu caso desde cualquier lugar.
              </p>
              <div className="mt-10">
                <a
                  href="https://victimasviales.mtc.gob.pe/Consultar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-red-700 font-bold rounded-xl hover:bg-red-50 transition-all shadow-lg"
                >
                  Ir a la Plataforma Web
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-12 lg:mt-0"
            >
              <div className="bg-red-800 p-4 rounded-3xl shadow-2xl">
                <img
                  src="/plataformaRVVST.png"
                  alt="Plataforma Web"
                  className="rounded-2xl w-full shadow-inner"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legal Framework */}
      <section className="py-12 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm italic">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 opacity-50" />
              <span>Conforme al Decreto Supremo N° 002-2024-MTC</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 opacity-50" />
              <span>Resolución Ministerial RM 0953-2023-MTC/01.02</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fondo SOAT Section */}
      <section id="fondo-soat" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-bold mb-6">
                <AlertTriangle className="w-4 h-4" />
                Fondo SOAT y CAT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-8">¿Qué es el Fondo SOAT?</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <HelpCircle className="text-red-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">¿Cuándo lo uso?</h4>
                    <p className="text-slate-600">Se utiliza en casos de accidentes de tránsito donde el vehículo causante se dio a la fuga y no ha sido identificado (Atropello y Fuga).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <FileText className="text-red-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">¿Cómo aplico a ello?</h4>
                    <p className="text-slate-600">Debes llenar la solicitud oficial y presentar los documentos requeridos (denuncia policial, gastos médicos, etc.) a través del portal oficial.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://fondosoatycat.mtc.gob.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-100"
                >
                  Llenar la solicitud aquí
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </div>
            </motion.div>
            
            <div className="mt-12 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="/fondo soat web-01.png" className="w-full h-auto rounded-2xl shadow-sm hover:shadow-md transition-shadow" alt="Paso 1" />
                <img src="/fondo soat web-02.png" className="w-full h-auto rounded-2xl shadow-sm hover:shadow-md transition-shadow" alt="Paso 2" />
              </div>
              <div className="space-y-4">
                <img src="/fondo soat web-03.png" className="w-full h-auto rounded-2xl shadow-sm hover:shadow-md transition-shadow" alt="Paso 3" />
                <img src="/fondo soat web-04.png" className="w-full h-auto rounded-2xl shadow-sm hover:shadow-md transition-shadow" alt="Paso 4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-900">Canales de Atención</h2>
              <p className="mt-4 text-lg text-slate-600">
                Estamos disponibles a través de múltiples canales para brindarte la ayuda que necesitas.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-red-50 p-4 rounded-xl">
                    <Phone className="text-red-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-red-900">Atención Telefónica</h4>
                    <p className="text-slate-600">(01) 615 7800 / Anexo 1179</p>
                    <p className="text-slate-600">Línea gratuita: 0800-12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-red-50 p-4 rounded-xl">
                    <Mail className="text-red-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-red-900">Canal Virtual</h4>
                    <p className="text-slate-600">orientacionvictimas@mtc.gob.pe</p>
                    <p className="text-slate-600">WhatsApp: +51 905 461 611</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-red-50 p-4 rounded-xl">
                    <MapPin className="text-red-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-red-900">Atención Presencial</h4>
                    <p className="text-slate-600">Jr. Zorritos 1203, Cercado de Lima</p>
                    <p className="text-slate-600">Lunes a Viernes: 8:30 am - 5:30 pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Envíanos un mensaje</h3>
              <form 
                className="space-y-4" 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const nombre = formData.get("nombre");
                  const dni = formData.get("dni");
                  const email = formData.get("email");
                  const mensaje = formData.get("mensaje");
                  
                  const subject = encodeURIComponent(`Consulta SOVOT - ${nombre}`);
                  const body = encodeURIComponent(
                    `Nombre: ${nombre}\nDNI: ${dni}\nCorreo: ${email}\n\nMensaje:\n${mensaje}`
                  );
                  
                  window.location.href = `mailto:orientacionvictimas@mtc.gob.pe?subject=${subject}&body=${body}`;
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                    <input name="nombre" type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none transition-all" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">DNI</label>
                    <input name="dni" type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none transition-all" placeholder="Tu DNI" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
                  <input name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none transition-all" placeholder="tu@correo.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                  <textarea name="mensaje" rows={4} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none transition-all" placeholder="¿Cómo podemos ayudarte?"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-100">
                  Enviar Consulta
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-xs">
            <p>© {new Date().getFullYear()} Servicio de Orientación a Víctimas de Siniestros de Tránsito. Todos los derechos reservados.</p>
            <p className="mt-2 text-slate-600">Ministerio de Transportes y Comunicaciones - Gobierno del Perú</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
