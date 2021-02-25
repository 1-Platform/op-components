export const excellentIcon = `data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20,0A20,20,0,1,0,40,20,20.023,20.023,0,0,0,20,0Zm0,37.838A17.835,17.835,0,1,1,37.838,20,17.781,17.781,0,0,1,20,37.838Z'/%3E%3Cpath d='M70.171,100.607a2.119,2.119,0,0,1,2.151,2.151h2.207a4.358,4.358,0,1,0-8.715,0H68.02A2.119,2.119,0,0,1,70.171,100.607Z' transform='translate(-56.969 -85.135)'/%3E%3Cpath d='M171.345,100.607a2.119,2.119,0,0,1,2.151,2.151H175.7a4.358,4.358,0,1,0-8.715,0h2.207A2.119,2.119,0,0,1,171.345,100.607Z' transform='translate(-144.547 -85.135)'/%3E%3Cpath d='M80.892,186.2a12.2,12.2,0,0,0,10.29-5.808L89.4,179.2a10.032,10.032,0,0,1-9.639,4.731,10.138,10.138,0,0,1-7.3-4.731l-1.782,1.2a12.272,12.272,0,0,0,8.841,5.726A11.506,11.506,0,0,0,80.892,186.2Z' transform='translate(-60.93 -155.085)'/%3E%3C/svg%3E%0A`;
export const goodIcon = `data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20,0A20,20,0,1,0,40,20,20.023,20.023,0,0,0,20,0Zm0,38.261A18.261,18.261,0,1,1,38.261,20,18.281,18.281,0,0,1,20,38.261Z'/%3E%3Cpath d='M101.227,130.613a2.613,2.613,0,1,0-2.613,2.613A2.617,2.617,0,0,0,101.227,130.613Zm-3.484,0a.871.871,0,1,1,.871.871A.873.873,0,0,1,97.742,130.613Z' transform='translate(-85.568 -114.091)'/%3E%3Cpath d='M226.613,128a2.613,2.613,0,1,0,2.613,2.613A2.617,2.617,0,0,0,226.613,128Zm0,3.485a.871.871,0,1,1,.871-.871A.873.873,0,0,1,226.613,131.485Z' transform='translate(-199.659 -114.091)'/%3E%3Cpath d='M121.132,224.222a.871.871,0,0,0-1.23.068,9.691,9.691,0,0,1-14.382,0,.871.871,0,0,0-1.3,1.162,11.433,11.433,0,0,0,16.978,0A.872.872,0,0,0,121.132,224.222Z' transform='translate(-92.711 -199.658)'/%3E%3C/svg%3E%0A`;
export const sadIcon = `data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20,0A20,20,0,1,0,40,20,20.023,20.023,0,0,0,20,0Zm0,38.261A18.261,18.261,0,1,1,38.261,20,18.281,18.281,0,0,1,20,38.261Z'/%3E%3Cpath d='M98.592,133.185A2.592,2.592,0,1,0,96,130.592,2.6,2.6,0,0,0,98.592,133.185Zm0-3.457a.864.864,0,1,1-.864.864A.866.866,0,0,1,98.592,129.728Z' transform='translate(-85.555 -114.074)'/%3E%3Cpath d='M226.592,128a2.592,2.592,0,1,0,2.592,2.592A2.6,2.6,0,0,0,226.592,128Zm0,3.457a.864.864,0,1,1,.864-.864A.866.866,0,0,1,226.592,131.457Z' transform='translate(-199.629 -114.074)'/%3E%3Cpath d='M114.147,224H96.864a.864.864,0,0,0,0,1.728h17.283a.864.864,0,0,0,0-1.728Z' transform='translate(-85.505 -199.645)'/%3E%3C/svg%3E%0A`;
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
    assetUrl: excellentIcon,
    errorList: []
  },
  {
    name: 'Good',
    assetUrl: goodIcon,
    errorList: []
  },
  {
    name: 'Sad',
    assetUrl: sadIcon,
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