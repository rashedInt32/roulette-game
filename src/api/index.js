import to from "await-to-js";

import { http } from "../http";

/**
 * Api Requests
 * @return [error, response] array with error and response
 */

export const getConfiguration = async () =>
  await to(http.get("/configuration"));

export const getNextGame = async () => await to(http.get("/nextGame"));

export const getGame = async id => await to(http.get(`/game/${id}`));

export const getStats = async limit =>
  await to(http.get(`/stats?limit=${limit}`));
