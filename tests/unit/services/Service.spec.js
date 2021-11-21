import { addItem, getItems, deleteItem, updateItem } from "@/services/service";

describe("API", () => {

  test("item should be deleted correctly.", () => {
    addItem({ name: "test", url: "example"});
    expect(getItems().length).toBe(1);
    deleteItem("example");
    expect(getItems().length).toBe(0);
  });



  test("item should be created correctly.", () => {
    const name = "Example";
    const url = "https://abc.xyz";

    return addItem({ name, url }).then((response) => {
      expect(response.name).toBe(name);
      expect(response.url).toBe(url);
    });
  });

  test("should fail when sending existing url.", () => {
    addItem({ name: "name", url: "url" });
    addItem({ name: "name", url: "url" }).catch((e) => {
      expect(e).toBe(false);
    });
  });

  test(" should be update item correctly.", () => {
    addItem({ name: "test", url: "test.com" });
    
    
    updateItem( "test.com", 'upvote');
    const item = getItems().filter((x) => x.url === 'test.com')
    expect(item[0].vote).toBe(1);
  });

});
