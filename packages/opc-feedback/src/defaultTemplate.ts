export const defaultTemplate = {
  title: 'How was your overall experience?',
  subtitle: 'It will help us to improve platform',
  summary: 'Summary',
  summaryPlaceholder: 'How can we do better?',
  errorTitle: 'What is wrong?',
  confirmationTitle: 'Thanks for your feedback. Your experience is important to us!',
  confirmationSubTitle: 'Each time a friend submits a experience, it creates a task for our developer team to resolve it with priority.',
  confirmationEventMessage: 'Submitted the feedback',
  experienceList: [{
    name: 'Excellent',
    assetUrl: './assets/happy.svg',
    errorList: []
  },
  {
    name: 'Good',
    assetUrl: './assets/good.svg',
    errorList: []
  },
  {
    name: 'Sad',
    assetUrl: './assets/sad.svg',
    errorList: [{
      name: 'Slow Loading'
    },
    {
      name: 'App Crashed'
    },
    {
      name: 'Navigation'
    },
    {
      name: 'Not Responsive'
    },
    {
      name: 'Other'
    }]
  }]
} as TemplateView;