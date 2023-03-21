export const sectionsList = [
   {
      title: 'Home Entity Manager',
      id: 'homeEntity',
      value: 'Home Entity Manager',
      infoPopUp: {
         show: true,
         persona: 'Home Entity Manager',
         reasons:
            "The Home Entity Manager is responsible for the foreign company's operations in their home country, including the decision to move employees within the same group. They have access to the necessary information, such as the company's legal name, address, and contact details."
      },
      // infoPopUp: {
      //    show: true,
      //    description: 'I wanna do this rn',
      //    videoUrl: 'https://www.youtube.com/embed/4NKanx3JEP4?controls=0&modestbranding=1&showinfo=0&iv_load_policy=3'
      // },
      subsectionsList: [
         {
            title: 'Identity of the home company',
            id: 'homeEntityIdentity',
            value: 'Identity of the home company',
            infoPopUp: {
               show: true,
               persona: 'Home Entity Manager',
               reasons:
                  "The Home Entity Manager is responsible for the foreign company's operations in their home country, including the decision to move employees within the same group. They have access to the necessary information, such as the company's legal name, address, and contact details.",
               videoUrl: 'https://www.youtube.com/embed/4NKanx3JEP4?controls=0&modestbranding=1&showinfo=0&iv_load_policy=3'
            }
         },
         {
            title: 'Registration  form of the home entity',
            value: 'Registration  form of the home entity',
            id: 'homeEntityRegistration'
         },
         {
            title: 'Director of the home entity',
            value: 'Director of the home entity',
            id: 'homeEntityDirector'
         }
      ]
   },
   {
      title: 'Host Entity Manager',
      id: 'hostEntity',
      value: 'Host Entity Manager',
      infoPopUp: {
         show: true,
         persona: 'Home Entity Manager',
         reasons:
            "The Home Entity Manager is responsible for the foreign company's operations in their home country, including the decision to move employees within the same group. They have access to the necessary information, such as the company's legal name, address, and contact details.",
         videoUrl: 'https://www.youtube.com/embed/4NKanx3JEP4?controls=0&modestbranding=1&showinfo=0&iv_load_policy=3'
      },
      subsectionsList: [
         {
            title: 'Identity of the host Company',
            value: 'Identity of the host Company',
            id: 'hostEntityIdentity'
         },
         {
            title: 'Registration form of the host entity',
            value: 'Registration form of the host entity',
            id: 'hostEntityRegistration'
         },
         {
            title: 'Representative of the host entity',
            value: 'Representative of the host entity',
            id: 'hostEntityRepresentative'
         },
         {
            title: 'Means for contacting the representative in the host country',
            value: 'Means for contacting the representative in the host country',
            id: 'hostEntityMeans'
         }
      ]
   },
   {
      title: 'Employee sjfhhhjbfsjhbhbsf  fsh jsfjh',
      id: 'employee',
      value: 'Employee in the susdhjbjvhs uvbfshvbshjf',
      infoPopUp: {
         show: true,
         persona: 'Employee',
         reasons:
            'The employee is the best person to provide information about themselves, such as their job title, the start and end dates of their mobility, their salary and benefits, and any relevant qualifications or certifications.'
      },
      subsectionsList: [
         {
            title: 'Personal Information',
            value: 'Personal Information',
            id: 'employeePersonal'
         },
         {
            title: 'Address',
            value: 'Address',
            id: 'employeeAddress'
         }
      ]
   }
];

export const subsectionsList = [
   {
      section: 'homeEntity',
      title: 'Identity of the home company',
      id: 'homeEntityIdentity',
      value: 'Identity of the home company'
   },
   {
      section: 'homeEntity',
      title: 'Registration  form of the home entity',
      value: 'Registration  form of the home entity',
      id: 'homeEntityRegistration'
   },
   {
      section: 'homeEntity',
      title: 'Director of the home entity',
      value: 'Director of the home entity',
      id: 'homeEntityDirector'
   },
   {
      title: 'Identity of the host Company',
      section: 'hostEntity',
      value: 'Identity of the host Company',
      id: 'hostEntityIdentity'
   },
   {
      title: 'Representative in host country',
      section: 'hostEntity',
      value: 'Representative in host country',
      id: 'hostEntityRepresentative'
   },
   {
      title: 'Means for contacting the representative in the host country',
      section: 'hostEntity',
      value: 'Means for contacting the representative in the host country',
      id: 'hostEntityMeans'
   },
   {
      title: 'Personal Information',
      section: 'employee',
      value: 'Personal Information',
      id: 'employeePersonal'
   },
   {
      title: 'Address',
      section: 'employee',
      value: 'Address',
      id: 'employeeAddress'
   }
];

export const booleanOptions = [
   {
      value: 'true',
      label: 'Yes',
      title: 'Yes'
   },
   {
      value: 'false',
      label: 'No',
      title: 'No'
   }
];

export const sampleUserAsignMent = [
   {
      id: 'homeEntity',
      section: 'Home Entity Manager',
      subsection: 'Director of the home entity',
      responsiblePerson: 'John@Doe.com',
      dateIssued: '2020-12-12',
      automatedReminder1: '2020-12-12',
      automatedReminder2: '2020-12-12',
      manualReminder: '2020-12-12',
      escalationPoint: 'john@doesnt.com'
   },
   {
      id: 'homeEntity',
      section: 'Host Entity Manager',
      subsection: 'Representative in host country',
      responsiblePerson: 'John@Doe.com',
      dateIssued: '2020-12-12',
      automatedReminder1: '2020-12-12',
      automatedReminder2: '2020-12-12',
      manualReminder: '2020-12-12',
      escalationPoint: 'john@doesnt.com'
   },
   {
      id: 'homeEntity',
      section: 'Employee',
      subsection: 'Personal Information',
      responsiblePerson: 'John@Doe.com',
      dateIssued: '2020-12-12',
      automatedReminder1: '2020-12-12',
      automatedReminder2: '2020-12-12',
      manualReminder: '2020-12-12',
      escalationPoint: 'john@doesnt.com'
   }
];
