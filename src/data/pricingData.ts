// Shared pricing data for all pages
export interface ServicePricing {
  title: string;
  price: string;
  startingFrom?: boolean;
  reportOnly?: boolean;
}

export const PRICING_DATA: ServicePricing[] = [
  { title: 'Complete Pest Protection', price: '189', startingFrom: true },
  { title: 'Termite Inspection', price: '145', reportOnly: true, startingFrom: false },
  { title: 'Cockroach Elimination', price: '149', startingFrom: true },
  { title: 'Ant Infestation Control', price: '129', startingFrom: true },
  { title: 'Spider Control', price: '159', startingFrom: true },
  { title: 'Rodent Control', price: '175', startingFrom: true },
  { title: 'Bed Bug Treatment', price: '199', startingFrom: true },
  { title: 'Flea Extermination', price: '169', startingFrom: true },
  { title: 'Wasp & Bee Removal', price: '135', startingFrom: true },
  { title: 'Termite Treatment', price: '299', startingFrom: true },
];
