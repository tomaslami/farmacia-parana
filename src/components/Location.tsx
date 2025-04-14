import { MapPin, Clock, Phone, Mail } from "lucide-react"

export default function LocationSection() {
  return (
    <section className="py-12 sm:py-16 px-4 bg-[#F7F7F7]" id="ubicacion">
      <div className="w-full flex justify-center items-center flex-col">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">
          <span className="text-[#0D9488]">¿Dónde</span> estamos?
        </h2>

        {/* Subtitle */}
        <p className="text-center text-sm md:text-base max-w-2xl mx-auto mb-8 sm:mb-10">
          Nuestra Farmacia se encuentra en Paraná 185, CABA. Podés informarte en nuestro local o consultarnos
          por WhatsApp.
        </p>

        <div className="w-full xl:max-w-[1280px] lg:max-w-6xl mx-auto px-4 sm:px-6 lg:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-start">
          {/* Map */}
          <div className="w-full h-full min-h-[250px] sm:min-h-[300px] bg-gray-200 rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.898493846239!2d-58.39230882437772!3d-34.606728197863475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac462092ef7%3A0x334c9355049e5a12!2sFarmacia%20Nueva%20Parana!5e0!3m2!1ses!2sar!4v1744078795451!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "100%", aspectRatio: "4/3" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Farmacia Paraná"
              className="rounded-md shadow"
            ></iframe>
          </div>

          {/* Contact Information - Improved alignment */}
          <div className="w-full flex flex-col justify-center space-y-6 sm:space-y-8 py-2">
            {/* Address */}
            <div className="flex items-center">
              <div className="w-8 flex-shrink-0">
                <MapPin className="h-5 w-5 text-[#0D9488]" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Dirección</h4>
                <p className="text-gray-600 text-sm">Paraná 185, CABA, Argentina</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center">
              <div className="w-8 flex-shrink-0">
                <Clock className="h-5 w-5 text-[#0D9488]" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Horarios</h4>
                <p className="text-gray-600 text-sm">Lunes a Viernes: 8:30 a 19:00</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <div className="w-8 flex-shrink-0">
                <Phone className="h-5 w-5 text-[#0D9488]" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Teléfono</h4>
                <p className="text-gray-600 text-sm">Fijo: 11-4374-9099 </p>
                <p className="text-gray-600 text-sm">WhatsApp: +54 11 3162-9344</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <div className="w-8 flex-shrink-0">
                <Mail className="h-5 w-5 text-[#0D9488]" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Email</h4>
                <p className="text-gray-600 text-sm">farmacianuevaparana@hotmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
