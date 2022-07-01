import { mount } from '@vue/test-utils';
import TsxDemoComponent from '@/component/tsx-demo';

describe('tsx-demo', () => {
  it('component exist', () => {
    expect(TsxDemoComponent).toBeTruthy();
  });

  const wrapper = mount(TsxDemoComponent);

  it('h1 exist', () => {
    const h1 = wrapper.find('h1');
    expect(h1.exists()).toBe(true);
    expect(h1.text()).toBe('tsx-demo');
  });

  it('li exist', () => {
    const li = wrapper.findAll('li');
    expect(li.length).toBe(5);

    li.forEach((item, i) => {
      expect(item.text()).toBe(`${i + 1}`);
    })
  });
});
