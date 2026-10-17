export const enterpriseServices = {
  brand: "HumanOS Enterprise",
  headline: "Enterprise Software, AI Consulting & Engineering",
  positioning: "Consultoría tecnológica empresarial especializada en inteligencia artificial, integración y desarrollo de software.",
  audience: ["CTO", "CIO", "COO", "Dirección de transformación", "Empresas de software"],
  services: [
    { id: "consulting", title: "AI Consulting", description: "Diagnóstico, estrategia, arquitectura y roadmap empresarial." },
    { id: "solutions", title: "Enterprise AI Solutions", description: "Soluciones empresariales personalizadas y despliegues privados." },
    { id: "automation", title: "Intelligent Automation", description: "Automatización de procesos y operaciones." },
    { id: "integration", title: "Enterprise Integration", description: "Integraciones con ERP, CRM, APIs y sistemas existentes." },
    { id: "engineering", title: "AI Engineering Services", description: "Desarrollo, modernización y capacidad de ingeniería especializada." },
    { id: "managed", title: "Managed AI Services", description: "Operación, monitoreo, soporte y mejora continua." }
  ],
  engagementModels: [
    { id: "advisory", title: "Consultoría especializada", pricing: "Por alcance" },
    { id: "hours", title: "Bolsa de ingeniería", referenceHours: 50, referenceUsdPerHour: 100, pricingStatus: "Hipótesis comercial, sujeta a cotización" },
    { id: "projects", title: "Proyectos enterprise", pricing: "Cotización por proyecto" },
    { id: "managed", title: "Servicios administrados", pricing: "Contrato recurrente" }
  ],
  separateOfferings: ["BREAK THE MATRIX Corporate Experience"],
  publicationStatus: "draft",
  notes: "Configuración preliminar para integrar al builder; no publicar precios ni prometer capacidades sin validación."
} as const;
