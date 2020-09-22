import { Selector} from 'testcafe';

fixture('Testcafe Demo')
.page('https://www.google.com')

test('My-first-test', async t  => {
    await t
    .typeText('[name="q"]', 'testcafe')
    .pressKey('enter')
    .expect(Selector('div [class="r"] > a > h3').innerText).contains('TestCafe')

})