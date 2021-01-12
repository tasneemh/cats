const assert = require("chai").assert;
const breedDetails = require("../syncbreeds");
describe("#breedDetails", () => {
  it("returns breed details for Bombay breed", () => {
    const expectedDesc =
      "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
    const bombay = breedDetails("Bombay");
    assert.equal(bombay, expectedDesc);
  });
  it("returns breed details for Balinese breed", () => {
    const expectedDesc =
      "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.";
    const balinese = breedDetails("Balinese");
    assert.equal(balinese, expectedDesc);
  });
  it('returns "" for breed with no description', () => {
    const expectedDesc = undefined;
    const gotham = breedDetails("Gotham");
    assert.equal(gotham, expectedDesc);
  });
});
