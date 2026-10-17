export const OFFICIAL_WHATSAPP_NUMBER = '6285743678786';
export const OFFICIAL_WHATSAPP_DISPLAY = '+62 857-4367-8786';

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
