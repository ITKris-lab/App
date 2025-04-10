const workTypes = [
  "Climatización", "Eléctrica", "Mecánica", "Electrónica", "Operación",
  "Fontanería", "Albañilería", "Pintura", "Carpintería", "Redes"
];

const activityTypes = [
  "Reparación", "Mantenimiento", "Mejoramiento", "Instalación", "Traslado",
  "Revisión", "Limpieza", "Reemplazo", "Verificación", "Configuración"
];

const mockOrders = [
  {
    id: 1,
    requesterName: "Juan Pérez",
    area: "Administración",
    workType: "Climatización",
    activityType: "Reparación",
    description: "Aire acondicionado no enfría",
    status: "enviado",
    createdAt: "2023-05-15T10:30:00",
    updatedAt: "2023-05-15T10:30:00",
    technician: null,
    completedAt: null,
    signature: null
  },
  {
    id: 2,
    requesterName: "María Gómez",
    area: "Sala de Servidores",
    workType: "Redes",
    activityType: "Instalación",
    description: "Fallo en UPS del rack principal",
    status: "en_proceso",
    createdAt: "2023-05-14T09:15:00",
    updatedAt: "2023-05-15T08:45:00",
    technician: "Carlos Rojas",
    completedAt: null,
    signature: null
  }
];

const mockTechnicians = [
  { id: 1, name: "Carlos Rojas" },
  { id: 2, name: "Ana Mendoza" }
];

export { mockOrders, mockTechnicians, workTypes, activityTypes };