interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Fleet Manager', 'Admin'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View all available cars.',
    'Book an available car.',
    'Manage bookings.',
    'View booking history.',
  ],
  ownerAbilities: [
    'Manage company profile',
    'Invite Fleet Managers and Admins to the application',
    'Remove Fleet Managers or Admins from the application',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/71fcfd30-890f-46c9-826e-17636debf461',
};
