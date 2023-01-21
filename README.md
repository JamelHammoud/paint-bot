# react-boiler
React template using functional styled components.

Use `yarn start` to start the development server.

## Conventions

* All components live within the `components` folder
  * A component is a reusable 'piece' of the app (ex: button, video player)
* All views live within the `views` folder
  * A view typically denotes a page (ex: sign up, register, feed)
* All types live within the `types` folder
* Each component is within a folder with the same name as the component (use PascalCase!)
* Each component folder contains at least three files:
  * index.ts (used to export the component/styled component)
  * ComponentName.tsx (used for the actual component)
  * ComponentName.Styled.tsx (used for the styled component)
