import { UiDescription } from '@/type/common.types'

export const uiDescription: UiDescription = {
  buttons: {
    mainDescription:
      'Well-designed buttons encourage users to easily tap, considering the touch area regardless of screen size.',
    image: '/img/showcase/Buttons.png',
    content: [
      {
        subTitle: 'Usage',
        description:
          'Multiple semantic button styles, each with its own specific semantic purpose, to achieve better control.',
        demoCode: 'Single'
      },
      {
        subTitle: 'Colors',
        demoCode: 'Basic'
      },
      {
        subTitle: 'Outline',
        description:
          'You can also turn the buttons into border-only style by applying **variant="outline"** attribute',
        demoCode: 'Outline'
      },
      {
        subTitle: 'Disabled',
        description:
          'Prevent user submission to avoid sending incorrect data by simply using **isDisabled**.',
        demoCode: 'Disabled'
      },
      {
        subTitle: 'Sizes',
        description:
          'The default size of button is large. You can change the value of **size** attribute to change to differnet sizes.',
        demoCode: 'Sizes'
      }
    ]
  }
  // tabs: {}
}

// {subTitle:'',
//       description:'',
//       code:'',
//     },
