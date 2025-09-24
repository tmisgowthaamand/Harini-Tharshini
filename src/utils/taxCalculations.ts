export interface CountryTax {
  code: string;
  name: string;
  taxName: string;
  taxRate: number;
  currency: string;
  currencySymbol: string;
}

export const countries: CountryTax[] = [
  { code: 'IN', name: 'India', taxName: 'GST', taxRate: 0.18, currency: 'INR', currencySymbol: '₹' },
  { code: 'US', name: 'United States', taxName: 'Sales Tax', taxRate: 0.08, currency: 'USD', currencySymbol: '$' },
  { code: 'GB', name: 'United Kingdom', taxName: 'VAT', taxRate: 0.20, currency: 'GBP', currencySymbol: '£' },
  { code: 'CA', name: 'Canada', taxName: 'GST/HST', taxRate: 0.13, currency: 'CAD', currencySymbol: 'C$' },
  { code: 'AU', name: 'Australia', taxName: 'GST', taxRate: 0.10, currency: 'AUD', currencySymbol: 'A$' },
  { code: 'DE', name: 'Germany', taxName: 'VAT', taxRate: 0.19, currency: 'EUR', currencySymbol: '€' },
  { code: 'FR', name: 'France', taxName: 'VAT', taxRate: 0.20, currency: 'EUR', currencySymbol: '€' },
  { code: 'IT', name: 'Italy', taxName: 'VAT', taxRate: 0.22, currency: 'EUR', currencySymbol: '€' },
  { code: 'ES', name: 'Spain', taxName: 'VAT', taxRate: 0.21, currency: 'EUR', currencySymbol: '€' },
  { code: 'NL', name: 'Netherlands', taxName: 'VAT', taxRate: 0.21, currency: 'EUR', currencySymbol: '€' },
  { code: 'BE', name: 'Belgium', taxName: 'VAT', taxRate: 0.21, currency: 'EUR', currencySymbol: '€' },
  { code: 'CH', name: 'Switzerland', taxName: 'VAT', taxRate: 0.077, currency: 'CHF', currencySymbol: 'CHF' },
  { code: 'SE', name: 'Sweden', taxName: 'VAT', taxRate: 0.25, currency: 'SEK', currencySymbol: 'kr' },
  { code: 'NO', name: 'Norway', taxName: 'VAT', taxRate: 0.25, currency: 'NOK', currencySymbol: 'kr' },
  { code: 'DK', name: 'Denmark', taxName: 'VAT', taxRate: 0.25, currency: 'DKK', currencySymbol: 'kr' },
  { code: 'JP', name: 'Japan', taxName: 'Consumption Tax', taxRate: 0.10, currency: 'JPY', currencySymbol: '¥' },
  { code: 'SG', name: 'Singapore', taxName: 'GST', taxRate: 0.07, currency: 'SGD', currencySymbol: 'S$' },
  { code: 'NZ', name: 'New Zealand', taxName: 'GST', taxRate: 0.15, currency: 'NZD', currencySymbol: 'NZ$' },
  { code: 'ZA', name: 'South Africa', taxName: 'VAT', taxRate: 0.15, currency: 'ZAR', currencySymbol: 'R' },
  { code: 'BR', name: 'Brazil', taxName: 'ICMS', taxRate: 0.17, currency: 'BRL', currencySymbol: 'R$' },
];

export const getCountryByCode = (code: string): CountryTax | undefined => {
  return countries.find(country => country.code === code);
};

export const calculateTax = (amount: number, countryCode: string): number => {
  const country = getCountryByCode(countryCode);
  if (!country) return 0;
  return amount * country.taxRate;
};

export const formatCurrency = (amount: number, countryCode: string): string => {
  const country = getCountryByCode(countryCode);
  if (!country) return `₹${amount}`;
  
  // For simplicity, we'll just format with the currency symbol
  // In a real app, you'd use proper currency conversion and formatting
  return `${country.currencySymbol}${Math.round(amount)}`;
};

export const getShippingCost = (countryCode: string, subtotal: number): number => {
  if (countryCode === 'IN') {
    return subtotal >= 500 ? 0 : 50; // Free shipping above ₹500 in India
  }
  
  // International shipping rates
  const internationalRates: { [key: string]: number } = {
    'US': 25, 'CA': 30, 'GB': 20, 'AU': 35,
    'DE': 18, 'FR': 18, 'IT': 22, 'ES': 20,
    'NL': 18, 'BE': 18, 'CH': 25, 'SE': 22,
    'NO': 25, 'DK': 22, 'JP': 30, 'SG': 15,
    'NZ': 35, 'ZA': 25, 'BR': 40
  };
  
  return internationalRates[countryCode] || 50;
};
