/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode, useRef } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'motion/react';
import { 
  Home, 
  Hospital, 
  BarChart3, 
  CheckSquare, 
  Phone, 
  FileSpreadsheet, 
  Database, 
  Printer, 
  BookOpen, 
  Calendar,
  Laptop,
  Tablet,
  Smartphone,
  Bell,
  Clock,
  Leaf,
  Heart,
  ChevronLeft,
  ChevronRight,
  Play,
  RefreshCw,
  Users,
  Handshake
} from 'lucide-react';

// --- Components ---

const SlideContainer = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <div className={`w-full h-full flex flex-col p-16 relative overflow-hidden slide-aspect-ratio ${className}`}>
    {children}
  </div>
);

const Logo = ({ className = "", size = "original" }: { className?: string, size?: "original" | "small" | "large" }) => {
  const width = size === "small" ? "120" : size === "large" ? "350" : "250";
  const height = size === "small" ? "82" : size === "large" ? "238" : "170";
  
  return (
    <div className={`${className}`}>
      <svg width={width} height={height} viewBox="0 0 250 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m148.4 0c-10.49 0-18.37 4.41-23.67 9.6-6.09-5.69-13.97-9.6-23.67-9.6-19.89 0-36.74 16.96-36.74 39.18 0 10.96 4.35 20.39 11 26.75l43.32 42.03c1.67 1.64 3.9 2.25 6.13 2.21 2.46-0.04 4.27-0.94 5.77-2.65l43.02-42.51c7.31-7.08 11.57-15.63 11.37-26.23-0.39-21.31-16.24-38.78-36.53-38.78zm18.73 58.25-42.36 42.36-42.11-42.4c-6.13-5.8-9.09-12.33-9.09-19.03 0-15.11 11.65-30.46 27.49-30.46 8.47 0 15 4.19 19.93 10.09l3.7 4.57 5.9-6.3c5.77-5.77 11.42-8.36 18.32-8.36 14.59 0 26.66 12.76 26.66 28.44 0 8.05-2.96 15.25-8.44 21.09z" fill="#B2162B"/>
        <path d="m148.6 50.99-5.81-5.15v-10.01c0-1.1-0.66-1.72-1.67-1.72h-4.41c-0.96 0-1.62 0.53-1.62 1.64v3.63l-8.99-8.76c-0.84-0.8-2.06-0.88-2.94-0.04l-22.54 20.25c-1.41 1.3-0.81 2.75 0.72 2.71h4.2v19.17c0 1.04 0.7 1.6 1.74 1.6h11.44c1.01 0 1.29-0.68 1.29-1.68v-12.27c0-0.79 0.24-1.11 1.08-1.11h7.12c0.8 0 1 0.36 1 1.15v12.23c0 0.96 0.66 1.68 1.66 1.68h11.26c1.18 0 1.58-0.64 1.58-1.76v-19.21h4.19c1.74 0 2.06-1.33 0.7-2.35z" fill="#B2162B"/>
        <path d="m4 137.6c0-8.69 6.82-13.18 13.39-13.18 4.8 0 8.62 1.45 10.47 4.37l-3.46 4.02c-1.49-2.55-3.99-3.35-6.53-3.35-4.91 0-7.81 3.91-7.81 8.1 0 5.06 3.63 7.95 7.73 7.95 3.14 0 5.48-1.48 6.93-3.81l3.3 4.1c-2.74 3.3-6.24 4.7-10.79 4.7-7.37 0-13.23-4.82-13.23-12.9z" fill="#3C3C3B"/>
        <path d="m30.96 141.9v-11.63h6.18v11.04c0 3.21 1.17 4.46 3.75 4.46 2.82 0 4.5-2.02 4.5-5.83v-9.67h6.18v19.8h-5.66v-2.29h-0.08c-1.56 1.89-3.77 2.65-6.11 2.65-4.94 0-8.76-2.21-8.76-8.53z" fill="#3C3C3B"/>
        <path d="m56.79 124.8c0-2.41 1.45-3.45 3.54-3.45 2.29 0 3.54 1.24 3.54 3.29 0 2.25-1.29 3.33-3.54 3.33-2.17 0-3.54-1.2-3.54-3.17zm0.4 5.48h6.19v19.8h-6.19v-19.8z" fill="#3C3C3B"/>
        <path d="m66.3 140.4c0-6.96 4.37-10.51 9.51-10.51 2.9 0 5.07 1 6.56 2.8h0.08v-9.89h5.52v27.17h-5.28v-2.37h-0.08c-1.57 1.93-3.58 2.77-6.36 2.77-5.94 0-9.95-3.58-9.95-9.97zm16.31-0.08c0-3.81-2.29-5.67-4.99-5.67-3.02 0-5.15 2.06-5.15 5.95 0 3.62 2.09 5.51 5.07 5.51 2.82 0 5.07-2.05 5.07-5.79z" fill="#3C3C3B"/>
        <path d="m91.71 144.8c0-4.18 2.45-6.07 8.26-6.07h5.56v-0.79c0-2.41-1.6-3.47-4.46-3.47-2.21 0-3.98 0.72-5.35 1.86l-2.97-3.7c1.97-1.8 5.23-2.84 8.97-2.84 5.89 0 8.95 2.88 8.95 8.42v11.74h-5.26v-2.17c-1.28 1.81-3.25 2.57-6.19 2.57-4.5 0-7.51-1.97-7.51-5.55zm13.82-1.89v-0.76h-4.7c-2.09 0-3.1 0.64-3.1 2.17 0 1.37 1.13 2.17 3.02 2.17 2.74 0 4.74-1.37 4.78-3.58z" fill="#3C3C3B"/>
        <path d="m115.6 124.4h12.23c7.32 0 10.52 4.45 10.52 9.67 0 3.55-1.72 6.6-4.88 8.45l5.48 7.48h-7.12l-4.2-6.56c-0.56 0.08-1.04 0.08-1.57 0.08h-4.54v6.44h-5.9v-25.56h-0.02zm11.51 14.38c3.5 0 5.15-2.44 5.15-5.03 0-2.91-1.76-4.62-4.95-4.62h-5.9v9.65h5.7z" fill="#3C3C3B"/>
        <path d="m140.8 140.2c0-6.6 5.02-10.35 10.96-10.35 6.06 0 10.9 3.67 10.9 10.15 0 6.55-5.08 10.29-10.94 10.29-5.98 0.04-10.92-3.58-10.92-10.09zm16.22-0.12c0-3.65-2.37-5.54-5.14-5.54-2.98 0-4.97 2.29-4.97 5.54 0 3.37 2.11 5.51 4.93 5.51 2.89 0 5.18-2.18 5.18-5.51z" fill="#3C3C3B"/>
        <path d="m166.7 130.3h5.48v2.75h0.08c1.6-2.15 3.98-2.99 6.56-2.99 5.18 0 8.16 2.95 8.16 9.27v10.69h-5.71v-10.09c0-3.49-1.37-4.89-4.07-4.89-2.78 0-4.71 1.88-4.71 5.85v9.17h-5.79v-19.76z" fill="#3C3C3B"/>
        <path d="m190.4 144.8c0-4.18 2.46-6.07 8.27-6.07h5.56v-0.79c0-2.41-1.6-3.47-4.46-3.47-2.21 0-3.98 0.72-5.35 1.86l-2.98-3.7c1.97-1.8 5.24-2.84 8.97-2.84 5.9 0 8.96 2.88 8.96 8.42v11.74h-5.26v-2.17c-1.28 1.81-3.25 2.57-6.19 2.57-4.51 0-7.52-1.97-7.52-5.55zm13.83-1.89v-0.76h-4.7c-2.09 0-3.1 0.64-3.1 2.17 0 1.37 1.13 2.17 3.02 2.17 2.74 0 4.74-1.37 4.78-3.58z" fill="#3C3C3B"/>
        <path d="m214.3 122.8h6.26v27.17h-6.26v-27.17z" fill="#3C3C3B"/>
        <path d="m224.2 140.4c0-6.96 4.37-10.51 9.51-10.51 2.9 0 5.07 1 6.56 2.8h0.08v-9.89h5.65v27.17h-5.53v-2.37h-0.08c-1.57 1.93-3.58 2.77-6.36 2.77-5.9 0-9.83-3.58-9.83-9.97zm16.27-0.08c0-3.81-2.29-5.67-4.99-5.67-3.02 0-5.15 2.06-5.15 5.95 0 3.62 2.09 5.51 5.07 5.51 2.82 0 5.07-2.05 5.07-5.79z" fill="#3C3C3B"/>
        <path d="m98.3 169.2c-2.34 0.56-2.5-3.42-0.49-3.86 17.13-3.89 34.9-3.53 53.34 0.76 2.54 0.6 2.46 3.74 0 3.26-17.72-3.7-35.04-4.3-52.85-0.16z" fill="#F8B924"/>
      </svg>
    </div>
  );
};

const CountUp = ({ value, duration = 1.2, suffix = "" }: { value: string, duration?: number, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseFloat(value.replace(/,/g, ''));

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(latest),
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, duration]);

  const formatted = numericValue % 1 === 0 
    ? Math.floor(displayValue).toLocaleString() 
    : displayValue.toFixed(1);

  return <span ref={ref}>{formatted}{suffix}</span>;
};

// --- Slides ---

const Slide1 = () => (
  <SlideContainer className="premium-gradient-spotlight justify-center items-center text-center">
    <div className="max-w-[75%]">
      <h1 className="font-nunito font-extrabold text-[58pt] leading-[1.6] tracking-[0.02em] text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="block"
        >
          Hoy, una familia entra a Casa Ronald McDonald
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="block"
        >
          por una llamada telefónica.
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="block text-ronald-red"
        >
          Si nadie contesta, no entra.
        </motion.div>
      </h1>
    </div>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 0.9, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
      className="absolute bottom-[40px] right-[48px]"
    >
      <Logo size="small" />
    </motion.div>
  </SlideContainer>
);

const Slide2 = () => (
  <SlideContainer className="bg-off-white">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="font-nunito font-bold text-[36pt] text-dark-base mt-4 mb-12 ml-16"
    >
      El contexto
    </motion.h2>
    <div className="grid grid-cols-2 gap-[32px] w-[80%] mx-auto flex-1 items-center">
      {[
        { icon: Home, num: "3,829", label: "niños hospedados/año", color: "text-ronald-red" },
        { icon: Hospital, num: "29", label: "hospitales aliados", color: "text-trust-blue" },
        { icon: BarChart3, num: "95", label: "ocupación CDMX", color: "text-orange", suffix: "%" },
        { icon: CheckSquare, num: "6", label: "pasos manuales", color: "text-teal" },
      ].map((card, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white card-shadow-pro rounded-[20px] p-[32px] h-[220px] flex flex-col justify-between items-start transition-all duration-300"
        >
          <card.icon className={`${card.color} w-[36px] h-[36px]`} strokeWidth={2} />
          <div className="flex flex-col gap-2">
            <div className={`font-sora font-bold text-[64pt] leading-none ${card.color}`}>
              <CountUp value={card.num} suffix={card.suffix} duration={1.5} />
            </div>
            <div className="font-dm-sans text-[16pt] text-gray-medium">{card.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="mt-auto text-center font-dm-sans text-[13pt] text-gray-light pb-10"
    >
      Fuente: Casa Ronald McDonald México, dic. 2025
    </motion.div>
  </SlideContainer>
);

const Slide3 = () => (
  <SlideContainer className="bg-off-white">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="font-nunito font-bold text-[36pt] text-dark-base mt-4 mb-16 ml-16"
    >
      El journey problemático
    </motion.h2>
    <div className="flex items-center justify-center relative px-16 mt-12 flex-1">
      <div className="flex justify-between w-full max-w-[85%] relative">
        {[
          { icon: Phone, name: "Llamada", prob: "Puede no contestarse" },
          { icon: FileSpreadsheet, name: "Verificar", prob: "Excel manual" },
          { icon: Database, name: "Avansys", prob: "Duplicidad" },
          { icon: Printer, name: "Impresión", prob: "Se pierde" },
          { icon: RefreshCw, name: "Reglamento", prob: "Difícil de actualizar" },
          { icon: Calendar, name: "Agenda", prob: "Conflictos" },
        ].map((step, i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex flex-col items-center text-center z-10 w-[120px]"
            >
              <div className="w-[90px] h-[90px] rounded-full bg-white border-2 border-gray-border flex items-center justify-center mb-4 card-shadow-pro">
                <step.icon className="w-[32px] h-[32px] text-gray-ink" strokeWidth={1.5} />
              </div>
              <div className="font-dm-sans font-medium text-[15pt] text-gray-ink mb-1">{step.name}</div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.4 + 0.3 }}
                className="font-dm-sans text-[13pt] text-ronald-red leading-tight"
              >
                {step.prob}
              </motion.div>
            </motion.div>
            {i < 5 && (
              <div className="flex-1 px-2 mb-16">
                <motion.div 
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.4 + 0.2, ease: "easeInOut" }}
                  style={{ transformOrigin: "left" }}
                  className="h-[2px] w-full border-t-2 border-dashed border-gray-light"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </SlideContainer>
);

const Slide4 = () => (
  <SlideContainer className="p-0 flex-row bg-off-white">
    {/* Left Side (35%) */}
    <div className="w-[35%] bg-gray-100 p-16 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-16 left-16 font-dm-sans font-bold text-[24pt] text-gray-light">ANTES</div>
      
      <div className="grid grid-cols-3 gap-8 relative">
        {[Phone, FileSpreadsheet, Database, Printer, RefreshCw, Calendar].map((Icon, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center border border-gray-border grayscale"
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        ))}
        {/* Red Cross Line */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[140%] h-[4px] bg-ronald-red/80 rotate-45 absolute" />
        </motion.div>
      </div>
    </div>

    {/* Right Side (65%) */}
    <div className="w-[65%] premium-gradient-solucion p-16 flex flex-col border-l border-dashed border-gray-border">
      <div className="flex justify-between items-start mb-12">
        <div className="font-dm-sans font-bold text-[24pt] text-teal">CON CUIDARONALD</div>
        <Logo size="small" />
      </div>

      <div className="relative flex-1 flex flex-col justify-center items-center gap-10">
        {/* Laptop Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-[320px] h-[200px] bg-gray-200 rounded-lg border-2 border-dashed border-gray-light flex flex-col items-center justify-center text-center p-4 card-shadow-pro"
        >
          <div className="font-dm-sans font-bold text-[14pt] text-gray-medium">PLACEHOLDER #1</div>
          <div className="font-dm-sans text-[12pt] text-gray-light">Portal Trabajador Social</div>
          <div className="font-dm-sans text-[11pt] text-gray-light opacity-50">640 × 400 px</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="h-10 w-[2px] bg-teal/60"
        />

        {/* Tablet Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="w-[240px] h-[160px] bg-gray-200 rounded-lg border-2 border-dashed border-gray-light flex flex-col items-center justify-center text-center p-4 card-shadow-pro"
        >
          <div className="font-dm-sans font-bold text-[14pt] text-gray-medium">PLACEHOLDER #2</div>
          <div className="font-dm-sans text-[12pt] text-gray-light">Alerta Staff</div>
          <div className="font-dm-sans text-[11pt] text-gray-light opacity-50">480 × 320 px</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.3, delay: 1.1 }}
          className="h-10 w-[2px] bg-teal/60"
        />

        {/* Smartphone Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
          className="w-[140px] h-[280px] bg-gray-200 rounded-lg border-2 border-dashed border-gray-light flex flex-col items-center justify-center text-center p-4 card-shadow-pro"
        >
          <motion.div
            animate={{ x: [0, 3, -3, 3, -3, 3, -3, 0] }}
            transition={{ duration: 0.4, delay: 1.8, repeat: 1 }}
            className="flex flex-col items-center"
          >
            <div className="font-dm-sans font-bold text-[14pt] text-gray-medium">PLACE #3</div>
            <div className="font-dm-sans text-[12pt] text-gray-light">SMS</div>
            <div className="font-dm-sans text-[11pt] text-gray-light opacity-50">280 × 560 px</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </SlideContainer>
);

const Slide5 = () => (
  <SlideContainer className="premium-gradient-spotlight items-center justify-center">
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute top-16 left-16"
    >
      <h2 className="font-nunito font-bold text-[42pt] text-white whitespace-nowrap">Una acción, cero fricción.</h2>
    </motion.div>

    {/* iPhone Mockup */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-[320px] h-[640px] bg-dark-base rounded-[40px] border-[6px] border-gray-800 p-3 card-shadow-pro flex flex-col items-center justify-center relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-dark-base rounded-b-xl z-10" />
      <div className="w-full h-full bg-dark-base rounded-[30px] flex flex-col items-center justify-center text-center p-6 border border-gray-700 overflow-hidden">
        <div className="w-[280px] h-[560px] bg-dark-base flex flex-col items-center justify-center">
          <Play className="w-12 h-12 text-white mb-4" />
          <div className="font-dm-sans text-[14pt] text-gray-light">Insertar video de demo</div>
          <div className="font-dm-sans text-[11pt] text-gray-light opacity-50 mt-2">280 × 560 px</div>
        </div>
      </div>
    </motion.div>

    {/* Footer Flow */}
    <div className="absolute bottom-20 left-0 right-0 flex justify-center items-center gap-12">
      {[
        { icon: Laptop, text: "Trabajador social envía" },
        { icon: Smartphone, text: "Familia recibe SMS" },
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 + i * 0.15, ease: "easeOut" }}
          className="flex items-center gap-4"
        >
          {i > 0 && <ChevronRight className="text-mcdonald-yellow w-8 h-8 mr-8" />}
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
            <item.icon className="text-white w-6 h-6" />
          </div>
          <span className="text-white font-dm-sans text-[16pt]">{item.text}</span>
        </motion.div>
      ))}
    </div>
  </SlideContainer>
);

const Slide6 = () => (
  <SlideContainer className="bg-off-white">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="font-nunito font-bold text-[36pt] text-ronald-red mt-4 mb-12 ml-16"
    >
      El impacto real
    </motion.h2>
    <div className="flex gap-[32px] flex-1 px-16">
      {[
        { icon: Clock, num: "1,200", label: "horas liberadas/año", extra: "$96K MXN", note: "200 familias × 6 hrs", color: "text-teal", border: "border-teal" },
        { icon: Leaf, num: "12,000", label: "hojas eliminadas/año", extra: "ODS 12", note: "60 hojas × 200 familias", color: "text-mcdonald-yellow", border: "border-mcdonald-yellow", isBadge: true },
        { icon: Heart, num: "Certeza", label: "digital antes de llegar", extra: "SMS + info completa", note: "", color: "text-ronald-red", border: "border-ronald-red", isTextNum: true },
      ].map((col, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={`flex-1 flex flex-col border-t-[6px] ${col.border} p-[40px] bg-white card-shadow-pro rounded-b-[20px]`}
        >
          <motion.div
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 1, delay: i * 0.15 + 0.5, repeat: 1, repeatDelay: 3 }}
          >
            <col.icon className={`${col.color} w-[60px] h-[60px] mb-6`} strokeWidth={1.5} />
          </motion.div>
          
          <div className={`font-sora font-bold ${col.isTextNum ? 'text-[48pt]' : 'text-[64pt]'} ${col.color} leading-none mb-4`}>
            {col.isTextNum ? col.num : <CountUp value={col.num} duration={1.5} />}
          </div>
          <div className="font-dm-sans text-[20pt] text-gray-ink mb-6 leading-tight">{col.label}</div>
          
          <div className="mt-auto">
            {col.isBadge ? (
              <div className={`inline-block border-2 ${col.border} px-4 py-2 rounded-lg text-[14pt] font-bold ${col.color}`}>
                {col.extra}
              </div>
            ) : (
              <div className={`font-dm-sans font-bold text-[24pt] ${col.color}`}>{col.extra}</div>
            )}
            {col.note && <div className="font-dm-sans text-[14pt] text-gray-light mt-4">{col.note}</div>}
          </div>
        </motion.div>
      ))}
    </div>
  </SlideContainer>
);

const Slide7 = () => (
  <SlideContainer className="bg-off-white p-0">
    <div className="h-[55%] flex flex-col items-center justify-center text-center p-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="font-sora font-bold text-[68pt] text-trust-blue leading-none mb-6">$245 USD/mes</div>
        <div className="font-dm-sans text-[24pt] text-gray-ink mb-4">Plataforma completa para 3 Casas Ronald</div>
        <div className="font-dm-sans text-[18pt] text-gray-medium">$81.60 por Casa</div>
      </motion.div>
    </div>

    <div className="flex justify-center">
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="w-[60%] h-[1px] bg-gray-border" 
      />
    </div>

    <div className="h-[45%] flex flex-col items-center justify-center p-16">
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="font-dm-sans font-medium text-[18pt] text-gray-light mb-12"
      >
        Alineado a Objetivos de Desarrollo Sostenible
      </motion.h3>
      
      <div className="flex gap-[56px]">
        {[
          { id: 3, color: "#4C9F38", name: "Salud y bienestar", impact: "Módulo Respira", icon: Heart },
          { id: 12, color: "#BF8B2E", name: "Producción responsable", impact: "12,000 hojas menos", icon: Leaf },
          { id: 17, color: "#19486A", name: "Alianzas", impact: "Tech + Casa Ronald", icon: Handshake },
        ].map((ods, i) => (
          <motion.div 
            key={ods.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 + i * 0.15, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <motion.div 
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              className="w-[88px] h-[88px] rounded-full bg-white border-[3px] flex items-center justify-center card-shadow-pro mb-6"
              style={{ borderColor: ods.color }}
            >
              <ods.icon className="w-[48px] h-[48px]" style={{ color: ods.color }} strokeWidth={1.5} />
            </motion.div>
            <div className="font-dm-sans font-medium text-[14pt] text-gray-ink mb-2">{ods.name}</div>
            <div className="font-dm-sans text-[12pt] text-gray-light">{ods.impact}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </SlideContainer>
);

const Slide8 = () => (
  <SlideContainer className="premium-gradient-epic justify-center items-center text-center">
    <div className="max-w-[75%] mb-24">
      <h2 className="font-nunito leading-[1.7] tracking-[0.01em]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="block font-bold text-[52pt] text-white"
        >
          Mientras el niño recibe tratamiento,
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="block font-extrabold text-[56pt] text-teal-bright text-glow-teal"
        >
          CuidaRonald cuida a quien cuida.
        </motion.div>
      </h2>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
      className="mb-20"
    >
      <Logo size="large" />
    </motion.div>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      className="absolute bottom-[48px] font-dm-sans font-medium text-[24pt] text-gray-medium tracking-[0.05em]"
    >
      Gonzalez.dev
    </motion.div>
  </SlideContainer>
);

// --- Main App ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slides = [
    <Slide1 />,
    <Slide2 />,
    <Slide3 />,
    <Slide4 />,
    <Slide5 />,
    <Slide6 />,
    <Slide7 />,
    <Slide8 />,
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Slide Viewport */}
      <div className="w-full max-w-[1200px] bg-white shadow-2xl rounded-xl overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Overlay */}
        <div className="absolute inset-y-0 left-0 w-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 w-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <button 
            onClick={nextSlide}
            className="w-12 h-12 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Slide Progress */}
      <div className="mt-8 flex gap-3">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === i ? 'w-8 bg-ronald-red' : 'w-2 bg-gray-700'
            }`}
          />
        ))}
      </div>

      {/* Controls Hint */}
      <div className="mt-4 text-gray-500 text-sm font-dm-sans">
        Usa las flechas del teclado o haz clic en los lados para navegar
      </div>
    </div>
  );
}
