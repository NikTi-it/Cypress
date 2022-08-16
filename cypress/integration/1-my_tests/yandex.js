
describe('Тестирование yandex.ru', function () {

    it('Проверка, что поиск Яндекса в ответ на запрос "котята" выдает картинки по запросу "котята"', function () {
        cy.visit('https://yandex.ru/');
        cy.get('#text').type('котята').type('{enter}');
        cy.contains('Картинки по запросу «котята»')
    })
})
