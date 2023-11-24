/* eslint-disable no-undef */

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should start at auth screen', async () => {
    await expect(element(by.id('auth-screen'))).toBeVisible();
  });

  it('should show error message if wrond details are typed in', async () => {
    await element(by.id('name-input')).typeText('Bad Input');

    await element(by.id('submit-button')).tap();

    await expect(element(by.text('Wrong details'))).toBeVisible();
  });

  it('should navigate to Dashboard if wrond details are typed in', async () => {
    await element(by.id('name-input')).typeText('Demo');
    await element(by.id('number-input')).typeText('123');

    await element(by.id('submit-button')).tap();

    await expect(element(by.text('In Dashboard screen'))).toBeVisible();
  });
});
