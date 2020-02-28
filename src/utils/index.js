import _ from "lodash";

/**
 * mutateArray
 * @desc main purpose to get the color property form finguration data
 * based on value and index of the stats
 * @param {item} object item from array iteration
 * @param {arr} array config array to get index of the color
 * @param {compareValue} find index of value
 * @param {addValue} string add new key to item property
 * @return {item} modified item
 */
export const mutateArray = (item, arr, compareValue, addValue) => {
  const indexOfConfig = _.findIndex(arr, { position: compareValue });
  item[addValue] = arr[indexOfConfig].color;

  return item;
};
