import { mount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import CardItem from "@/components/CardItem.vue";
const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe("CardItem.vue", () => {
  const item = {
    name: "Example",
    url: "www.abc.xyz",
    vote: 5,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = mount(CardItem, {
      localVue,
      stubs: ["router-link", "router-view"],
      propsData: { url: item.url, vote: item.vote, name: item.name },
    });
  });

  it("should render correctly", () => {
    expect(wrapper.exists(".card")).toBeTruthy();
    expect(wrapper.exists(".card-body")).toBeTruthy();
    expect(wrapper.exists("div")).toBe(true);
    expect(wrapper.exists(".card-title")).toBeTruthy();
    expect(wrapper.exists("small")).toBeTruthy();
    expect(parseInt(wrapper.find("span").text())).toBe(item.vote);
    expect(wrapper.find(".card-title").text()).toBe(item.name);
    expect(wrapper.exists("svg")).toBeTruthy();
    expect(wrapper.exists("p")).toBeTruthy();
  });
});
