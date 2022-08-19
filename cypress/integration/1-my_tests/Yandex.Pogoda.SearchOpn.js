
describe('Тестирование Яндекс.Погода на выдачу данных по погоде в Санкт-Петербурге', function () {
    
    it('Открываю страницу Яндекс.Погода', function () {
        cy.visit('https://yandex.ru/pogoda/?via=hl');
        cy.get('.mini-suggest-form__input').type('Санкт-Петербург').type('{enter}');
        cy.get('.grid__cell_pos_1 > .place-list > :nth-child(1) > .link').click()
    })
})