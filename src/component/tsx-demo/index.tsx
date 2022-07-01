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
        <h1 class="title">tsx-demo</h1>
        <p class="title">tsx-p</p>
        <ul>
          {list.map(s => (<li>{s}</li>))}
        </ul>
      </div>
    );
  }
});
