import { useEffect, useState } from "react";
import http_config from "../../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../../common/helper/axiosInterceptor";
import Validate from "./Validate";
const useCustomer = () => {
  const [formvalue, setformvalue] = useState({
    customerName: "",
    contact_No: "",
    address: "",
    contractor_Name: "",
    contractor_ContactNo: "",
    credit_Limit: "",
    status: "",
    allow_Credit: "",
    remarks: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !errors.customerName &&
      !errors.contact_No &&
      !errors.address &&
      !errors.contractor_Name &&
      !errors.contractor_ContactNo &&
      !errors.status &&
      !errors.remarks
    ) {
      axiosInstance
        .post(http_config.BASE_URL + "/api/addCustomer", formvalue)
        .then((resp) => {
          console.log(resp);
        });
    }
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setformvalue({
      ...formvalue,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      formvalue?.customerName ||
      formvalue?.address ||
      formvalue?.contact_No ||
      formvalue?.contractor_Name ||
      formvalue?.contractor_ContactNo ||
      formvalue?.credit_Limit ||
      formvalue?.remarks ||
      formvalue?.allow_Credit
    ) {
      setErrors(Validate(formvalue));
    }
  }, [formvalue]);

  return {
    handleSubmit,
    handleOnChange,
    formvalue,
    errors,
  };
};

export default useCustomer;
