import { useState } from "react";
import axios from "axios";

//Self-explanatory - you will only need the endpoint in your API calls
const BASE_URL = "https://nomination-rewardsportal.azurewebsites.net";

//This works in a way that you only import the " import { apiProvider } from "../../../Services/API/Utilities/Provider"; " into your index
//You then have create a const to call it, for example, for a getter, use " const apiGet = apiProvider.GetApi("30f7fdbf-0690-403c-8e93-c34aab34c60b"); "
//For getting, use effect calling " apiGet.request(); " as the request function does the work
//For your mapping if using a getter, you use " apiGet.data?.map "

//There will be a get, post, put, delete that you import a single import and call any of its methods

//Param string endpoint
const GetAllApi = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${BASE_URL}/${endpoint}`);
      setData(result.data);
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};

//Param string endpoint
//Param string id
const GetOneApi = (endpoint, id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${BASE_URL}/${endpoint}/${id}`);
      setData(result.data);
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};

//@Params string endpoint
//@Params object JSON item
const PostApi = (endpoint, item) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    try {
      const result = await axios.post(`${BASE_URL}/${endpoint}`, item, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      setData(result.data);
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};

//@Params string endpoint
//@Params string id
const DeleteOneApi = (endpoint, id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    try {
      const result = await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
      setData(result.data);
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};

//@Params string endpoint
//@Params object JSON item
const PutApi = (endpoint, item) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    try {
      const result = await axios.put(`${BASE_URL}/${endpoint}`, item, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      setData(result.data);
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};

//@Params string endpoint
//@Params object JSON item
const PatchApi = (endpoint, item) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    try {
      const result = await axios.patch(`${BASE_URL}/${endpoint}`, item, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      setData(result.data);
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};

export const apiProvider = {
  GetAllApi,
  GetOneApi,
  PostApi,
  DeleteOneApi,
  PutApi,
  PatchApi,
};
