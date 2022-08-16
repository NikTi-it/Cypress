
describe('Тестирование staya на авторизацию с корректными данными', function () {
    
    it('Открываю страницу входа', function () {
        cy.visit('https://staya.dog/login');
        cy.get('.auth-form > form > [type="email"]').type('veseg94844@upshopt.com');
        cy.get('.auth-form > form > [type="password"]').type('admin123456');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
    })
})