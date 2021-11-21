import { mount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VuePaginate from "vue-paginate";
import List from "@/components/List.vue";
const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(VuePaginate);

describe("List.vue", () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = mount(List, {
      localVue,
      stubs: ["router-link", "router-view"],
      
    });
  });

  it("should render correctly", () => {
    expect(wrapper.exists('div')).toBeTruthy();
    expect(wrapper.exists("li")).toBeTruthy();
  });
});
