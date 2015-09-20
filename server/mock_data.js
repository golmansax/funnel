export function getMockResult() {
  return {
    displayText: 'Yay!',
    url: 'http://walmart.com',
  };
}

export function getMockResultSet() {
  return {
    parentResult: getMockResult(),
    childResults: [getMockResult(), getMockResult()],
  };
}
