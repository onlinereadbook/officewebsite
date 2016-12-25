

讀書會官方網站製作 v1.0

目前製作項目有

componets中APP.js加入

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

並包一層
<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
在<IntlProvider> 之上

其次修改header 加入一個 import AppBar from 'material-ui/AppBar';

但目前不知道要如何使用state 在components 之中

public 底下建立要使用的images/資料夾 當在 npm start 自動會copy到 build資料夾中

實作一個home 使用 material-ui 的card 成功使用

因為server-render 後端在render的時候會自動補上

須在
// Register server-side rendering middleware
// -----------------------------------------------------------------------------

app.get('*', async (req, res, next) => {
中加入以下兩行

global.navigator = global.navigator || {};
global.navigator.userAgent = req.headers['user-agent'] || 'all';


// 加入nightwatch e2e 功能


//加入除錯 在layout css 中加入這段
span[type=button] {
  appearance: none;
}
npm package 版本衝突 需要加上^

使用:global(）處理 react universal ReactCSSTransitionGroup 的 withStyle 自動加上唯一的問題

history.push('/readbook/'+index); 可以用來轉址用

在model定義後就會自動migration

在types 中定義要回傳的 graphQL 型態

在queries 中則是 撈資料
這邊應該還要定義一個mutation
sequelize 的 datatype
http://docs.sequelizejs.com/en/v3/api/datatypes/


//ORM中這邊一定要用async 


react-flexbox-grid

react-ultimate-pagination-material-ui
https://github.com/AdeleD/react-paginate