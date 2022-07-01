import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup() {
    const list = [1, 2, 3, 4, 5];

    return () => (
      <div>
        <h1>tsx-demo</h1>
        {list.map(s => (
          <li
            onClick={() => {
              console.log(s);
            }}>
            {s}
          </li>
        ))}
      </div>
    );
  }
});
