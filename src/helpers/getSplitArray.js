function getSplitArray(string, spliter) {
    const addressArray = string.split(spliter);
    const trimmedArray = addressArray.map((element) => element.trim());
  
    return trimmedArray;
  }
  
  export default getSplitArray;