import { mount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";
import App from "@/App.vue";
const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe("App.vue", () => {
  let wrapper;
  beforeEach(() => {
     wrapper = mount(App, { localVue,stubs: ['router-link', 'router-view'] });
  })
  it("renders correctlly ", () => {
    
    expect(wrapper.exists()).toBe(true);
  });

  it("renders card correctly", () => {
    expect(wrapper.exists(".card-body")).toBeTruthy()
  })
});
