
describe('Тестирование Яндекс.Погода на выдачу Москвы и московской области во встроенном поисковике', function () {
    
    it('Открываю страницу Яндекс.Погода', function () {
        cy.visit('https://yandex.ru/pogoda/?via=hl');
        cy.get('.mini-suggest-form__input').type('Москва').type('{enter}');
        cy.contains('Москва и москвоская область')
    })
})