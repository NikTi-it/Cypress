
describe('Тестирование staya на авторизацию с некорректными данными', function () {
    
    it('Открываю страницу входа', function () {
        cy.visit('https://staya.dog/login');
        cy.get('.auth-form > form > [type="email"]').type('12345@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('12345');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными');
    })
})