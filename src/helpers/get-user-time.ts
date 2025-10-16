import type { UserTime } from '../types/user';
export const getUserTime = (): { userTime: UserTime } => {
  const now = new Date();

  // Array con los días de la semana en español
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const dayOfWeek = days[now.getDay()];

  // Obtener la fecha en formato "16 Oct"
  const dayOfMonth = now.getDate();
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const monthName = months[now.getMonth()];
  const fullDate = `${dayOfMonth} ${monthName}`;

  // Convertir a formato de 12 horas
  let hours = now.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // La hora '0' debe ser '12'

  const minutes = String(now.getMinutes()).padStart(2, '0');
  const currentTime = `${hours}:${minutes} ${ampm}`;

  return {
    userTime: { date: `${dayOfWeek}, ${fullDate}`, time: currentTime },
  };
};
