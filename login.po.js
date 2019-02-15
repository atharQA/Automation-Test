class LoginPO{}

LoginPO.LOGIN={
    userName: browser.driver.findElement(by.id('username')),
    password: browser.driver.findElement(by.id('password')),
    submit: browser.driver.findElement(by.id('_submit'))
} 


module.exports = LoginPO;