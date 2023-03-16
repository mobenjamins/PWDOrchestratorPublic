export const sectionsList = [
  {
    title: 'Home Entity Manager',
    id: 'homeEntity',
    value: 'Home Entity Manager',
  },
  {
    title: 'Host Entity Manager',
    id: 'hostEntity',
    value: 'Host Entity Manager',
  },
  {
    title: 'Employee',
    id: 'employee',
    value: 'Employee',
  },
]

export const subsectionsList = [
  {
    section: 'homeEntity',
    title: 'Identity of the home company',
    id: 'homeEntityIdentity',
    value: 'Identity of the home company',
  },
  {
    section: 'homeEntity',
    title: 'Registration  form of the home entity',
    value: 'Registration  form of the home entity',
    id: 'homeEntityRegistration',
  },
  {
    section: 'homeEntity',
    title: 'Director of the home entity',
    value: 'Director of the home entity',
    id: 'homeEntityDirector',
  },
  {
    title: 'Identity of the host Company',
    section: 'hostEntity',
    value: 'Identity of the host Company',
    id: 'hostEntityIdentity',
  },
  {
    title: 'Representative in host country',
    section: 'hostEntity',
    value: 'Representative in host country',
    id: 'hostEntityRepresentative',
  },
  {
    title: 'Means for contacting the representative in the host country',
    section: 'hostEntity',
    value: 'Means for contacting the representative in the host country',
    id: 'hostEntityMeans',
  },
  {
    title: 'Personal Information',
    section: 'employee',
    value: 'Personal Information',
    id: 'employeePersonal',
  },
  {
    title: 'Address',
    section: 'employee',
    value: 'Address',
    id: 'employeeAddress'
  }
]

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
]

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
    escalationPoint: 'john@doesnt.com',
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
    escalationPoint: 'john@doesnt.com',
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
    escalationPoint: 'john@doesnt.com',
  },
]