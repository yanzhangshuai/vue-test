import { mount } from '@vue/test-utils';
import GlobalPropsDemoComponent from '@/component/global-props-demo/index.vue';

describe('config-provider', () => {
  it('component exist', () => {
    expect(GlobalPropsDemoComponent).toBeTruthy();
  });

  it('props', () => {
    const globalProps = {
      APP_NAME: 'APP_NAME',
      DEV: true,
    };

    const wrapper = mount(GlobalPropsDemoComponent, {
      global: {
        mocks: {
          $globalProps: globalProps,
        }
      }
    });
    expect(wrapper).toBeTruthy();
    const li = wrapper.findAll('li');
    expect(li.length).toBe(2);
    expect(li[0].text()).toEqual(`APP_NAME:${globalProps.APP_NAME}`);
    expect(li[1].text()).toEqual(`DEV:${globalProps.APP_NAME}`);
  });
});
