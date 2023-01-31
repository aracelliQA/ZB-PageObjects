export default class BasePage {
    static pause(ms){
        cy.wait(ms)
    }
    static logInfo(message){
        cy.log(message)
    }

    static setMobileViewport(){
        cy.viewport('iphone-x')
    }

    static setTabletViewport(){
        cy.viewport('ipad-r')
    }

    static setDesktopViewport(){
        cy.viewport('macbook-13')
    }

    static setLargeDesktopViewport() {
        cy.viewport(1980, 1080)
    }
}