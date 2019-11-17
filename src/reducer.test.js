import reducer from "./reducer";

it("adds a new item", () => {
  const state = { items: [] };
  const action = { type: "ADD_ITEM", payload: "Testing" };
  const nextState = reducer(state, action);
  expect(nextState.items).toHaveLength(1);
  expect(nextState.items[0]).toHaveProperty("name", "Testing");
});

it("marks an item as done", () => {
  const state = { items: [{ id: 0, name: "Testing", done: false }] };
  const action = { type: "MARK_AS_DONE", payload: 0 };
  const nextState = reducer(state, action);
  expect(nextState.items[0]).toHaveProperty("done", true);
});

it("throws an error for unrecognized actions", () => {
  let error = false;
  try {
    reducer({}, { type: "__UNKNOWN__" });
  } catch {
    error = true;
  }
  expect(error);
});
