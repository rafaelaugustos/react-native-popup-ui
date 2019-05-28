# react-native-popup-ui

A simple and fully customizable React Native component that implements a popup UI. 
* Easy to customize, has prop to change background color
* Function to close automatically
* Receives callback prop to set button action

Example One             |  Example Two             |  Example Three
:-------------------------:|:-------------------------:|:-------------------------:
![](assets/popup-ui_1.gif) [examples/App.js](examples/App.js)| ![](assets/popup-ui_2.gif) [examples/App.js](examples/App.js) | ![](assets/popup-ui_3.gif) [examples/App.js](examples/App.js)

## Installation

If using yarn: 

```
yarn add popup-ui
```

If using npm:

```
npm i popup-ui
```

## Usage

```
import { Popup } from 'popup-ui'
```

Simply declare the tag `<Popup />` in its component.

```
<View>
    <Popup Visible={this.state.visible} />
</View>
```

## Documentation

### Popup Component
| Name                      | Description                                     | Default            | Type   |
|---------------------------|-------------------------------------------------|--------------------|--------|
| Title                     | Sets the main popup title                       | Upload complete    | String |
| Type                      | Defines the type (Success, Warning or Error)    | Success            | String |
| TextBody                  | Defines the text body of popup                  |                    | String |
| Button                    | Whether or not to display the                   | true               | Bool   |
| ButtonText                | Defines the text button of popup                | Ok                 | String |
| Callback                  | Defines the function of button                  | Alert()            | Func   |
| Background                | Sets the backgroundColor                        | rgba(0, 0, 0, 0.5) | String |
| Visible                   | Sets if the popup is visible                    | false              | Bool   |
| Timing                    | Sets the time for the popup to close by itself  | 5000               | Number |
| Autoclose                 | sets whether the popup will close automatically | false              | Bool   |

## Contributing
Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

## Author
Rafael Augusto | [https://linkedin.com/in/rafaelaugustos/](https://linkedin.com/in/rafaelaugustos/)

## License
[MIT](./LICENSE)
