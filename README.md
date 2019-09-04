React-Catalyst-v2

## Things to log, note or document

The webpack.config.prod.js file has a output.publicPath setting that is super-important to 
react-router and express playing nice together. The long and short of it is, if your bundle is 
being served from ```mysite.com/folder/anotherfolder/yetanotherfolder/index.html``` then your 
publicPath should be set to: ```/folder/anotherfolder/yetanotherfolder/```. This should only be 
changed in ```production``` configs, the dev config requires it to be set to ```/```

## SCSS Modules 

### External Libraries
To import external css/scss libraries you can use the following format:

```
import './public/css/normalize.css'
import './public/css/typography.scss'
import './global.scss'
```
Then use them in your jsx like so:
```
<element className="someClassName">
```

### SCSS Modules
You import your css modules file, which should be named ```something.modules.scss``` like so:
```
import styles from './something.module'
```
You can then utilise this module in your jsx using the following syntax:
```
<element className={styles.someClassName}>
```
