export const activityLevelOptions = [
   {
      title: 'Level 1 - Accomodation and food service activities',
      isSelected: false
   },
   {
      title: 'Level 2 - Acommod',
      isSelected: false
   },
   {
      title: 'Level 3 - Accounting, bookkeeping  and auditing activities.  Tax consultancy',
      isSelected: false
   },
   {
      title: 'Level 4 - Activities of amusement  parks and theme parks',
      isSelected: false
   }
];

export const countries = [
   { value: 'select', title: 'Select', disabled: true },
   { value: 'austria', title: 'Austria' },
   { value: 'belgium', title: 'Belgium' },
   { value: 'bulgaria', title: 'Bulgaria' },
   { value: 'croatia', title: 'Croatia' },
   { value: 'cyprus', title: 'Cyprus' },
   { value: 'czech republic', title: 'Czech Republic' },
   { value: 'denmark', title: 'Denmark' },
   { value: 'estonia', title: 'Estonia' },
   { value: 'finland', title: 'Finland' },
   { value: 'france', title: 'France' },
   { value: 'germany', title: 'Germany' },
   { value: 'greece', title: 'Greece' },
   { value: 'hungary', title: 'Hungary' },
   { value: 'ireland', title: 'Ireland' },
   { value: 'italy', title: 'Italy' },
   { value: 'latvia', title: 'Latvia' },
   { value: 'lithuania', title: 'Lithuania' },
   { value: 'luxembourg', title: 'Luxembourg' },
   { value: 'malta', title: 'Malta' },
   { value: 'netherlands', title: 'Netherlands' },
   { value: 'poland', title: 'Poland' },
   { value: 'portugal', title: 'Portugal' },
   { value: 'romania', title: 'Romania' },
   { value: 'slovakia', title: 'Slovakia' },
   { value: 'slovenia', title: 'Slovenia' },
   { value: 'spain', title: 'Spain' },
   { value: 'sweden', title: 'Sweden' }
];

export const allRadioOptions = [
   {
      title: 'On the premise of the customer or Recipient of the service?',
      isSelected: false
   },
   {
      title: 'Somewhere else',
      isSelected: false
   },
   {
      title: 'Payment of a lump sum',
      isSelected: false
   },
   {
      title: 'Other payment arrangements',
      isSelected: false
   }
];

export const accomodationExpensesOptions = [
   // first option is disabled and not selectable
   {
      title: 'Select',
      isSelected: false,
      disabled: true
   },
   {
      title: 'Direct payment by the employer',
      isSelected: false
   },
   {
      title: 'Reimbursement of costs paid in advance by the worker',
      isSelected: false
   },
   {
      title: 'Payment of a lump sum',
      isSelected: false
   },
   {
      title: 'Other payment arrangements',
      isSelected: false
   }
];

export const foodExpensesOptions = [
   {
      title: 'Direct payment by the employer',
      isSelected: false
   },
   {
      title: 'Reimbursement of costs paid in advance by the worker',
      isSelected: false
   },
   {
      title: 'Payment of a lump sum',
      isSelected: false
   },
   {
      title: 'Other payment arrangements',
      isSelected: false
   }
];

export const dutiesOfRepresentative = [
   {
      title: "The company's director located in France throughout the service",
      isSelected: false
   },
   {
      title: 'one of the employees located on-site throughout the service',
      isSelected: false
   },
   {
      title: 'The french customer or service recipient',
      isSelected: false
   },
   {
      title: 'A professional mandated for that purpose, located in France and capable of performing this mission',
      isSelected: false
   }
];

export const ActivityLevelOneOptions = [
   { label: 'AGRICULTURE, FORESTRY AND FISHING', value: 1 },
   { label: 'MINING AND QUARRYING', year: 2 },
   { label: 'MANUFACTURING', value: 3 },
   { label: 'ELECTRICITY, GAS, STEAM AND AIR CONDITIONING SUPPLY', value: 4 },
   { label: 'WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION ACTIVITIES', value: 5 },
   { label: 'COONSTRUCTION', value: 6 },
   { label: 'WHOLESALE AND RETAIL TRADE, REPAIR OF MOTOR VEHICLE AND MOTORCYCLES', value: 7 },
   { label: 'TRANSPORTATION AND FOOD SERVICE ACTIVITIES', value: 8 },
   { label: 'ACCOMMODATION AND FOOD SERVICE ACTIVITIES', value: 9 },
   { label: 'INFORMATION AND COMMUNICATION', value: 10 },
   { label: 'FINANCIAL AND INSURANCE ACTIVITIES', value: 11 },
   { label: 'REAL ESTATE ACTIVITES', value: 12 },
   { label: 'PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES', value: 13 },
   { label: 'ADMINISTARTIVE AND SUUPPORT ACTIVITIES', value: 14 },
   { label: 'PUBLIC ADMINISTRATION AND DEFENCE, COMPULSORY SOCIAL SECURITY', value: 15 },
   { label: 'EDUCATION', value: 16 },
   { label: 'HUMAN HEALT AND SOCIAL WORK ACTIVITIES', value: 17 },
   { label: 'ARTS, ENTERTAINMENT AND RECREATION', value: 18 },
   { label: 'ACTIVITIES OF HOUSEHOLDS AS EMPLOYERS, UNDIFFERENTIATED GOODS AND SERVICES PRODUCING ACTIVITES OF HOUSEHOLDS FOR OWN USE', value: 19 },
   { label: 'ACTIVITIES OF EXTRATERRITORIAL ORGANISATIONS AND BODIES', value: 20 }
];

export const occupations = [
   {
      label: 'AGRICULTURE, FORESTRY AND FISHING',
      subCategoryLevel1: [
         {
            label: 'Forestry and logging',
            subCategoryLevel2: [
               {
                  label: 'Logging',
                  subCategoryLevel3: ['Logging']
               },
               {
                  label: 'Silviculture and other forestry activities',
                  subCategoryLevel3: ['Silviculture and other forestry activities']
               }
            ]
         },
         {
            label: 'Fishing and aquaculture',
            subCategoryLevel2: [
               {
                  label: 'Fishing',
                  subCategoryLevel3: ['Freshwater fishing', 'Marine fishing']
               },
               {
                  label: 'Aquaculture',
                  subCategoryLevel3: ['Marine aquaculture', 'Freshwater aquaculture']
               }
            ]
         }
      ]
   },
   {
      label: 'MINING AND QUARRYING',
      subCategoryLevel1: [
         {
            label: 'Mining of coal and lignite',
            subCategoryLevel2: [
               {
                  label: 'Mining of hard coal',
                  subCategoryLevel3: ['Mining of hard coal']
               },
               {
                  label: 'Mining of lignite',
                  subCategoryLevel3: ['Mining of lignite']
               }
            ]
         },
         {
            label: 'Extraction of crude petroleum and natural gas',
            subCategoryLevel2: [
               {
                  label: 'Extraction of crude petroleum',
                  subCategoryLevel3: ['Extraction of crude petroleum']
               },
               {
                  label: 'Extraction of natural gas',
                  subCategoryLevel3: ['Extraction of natural gas']
               }
            ]
         }
      ]
   }
];

export const trueFalseoptions = [
   { value: 'true', title: 'Yes' },
   { value: 'false', title: 'No' }
];
