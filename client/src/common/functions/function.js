import Swal from "sweetalert2";
import { BASE_ROUTE_PATH } from "../../constants/project";
import { handleLogout } from "../../http/authRequests";

const addBaseUrl = (url) => {
  return `/${BASE_ROUTE_PATH}/${url}`;
};

const showBasicToast = (icon, text) => {
  if (text === "TVA") {
    showTokenExpiredAndLogout();
    return;
  }
  Swal.fire({
    icon: icon,
    text: text,
    showConfirmButton: true,
    showConfirmButton: true,
    allowOutsideClick: false,
    footer: "Developed by Kiran Behara",
  });
};

const showTokenExpiredAndLogout = () => {
  Swal.fire({
    icon: "error",
    allowEscapeKey: false,
    text: "Token Expired, re-login to continue",
    showConfirmButton: true,
    allowOutsideClick: false,
    footer: "Developed by Kiran Behara",
  }).then(async (res) => {
    if (res.isConfirmed) {
      await handleLogout();
      window.location.href = `${window.location.origin}/login`;
    }
  });
};

const showToastModal = (icon, text) => {
  return Swal.fire({
    icon: icon,
    html: text,
    showConfirmButton: true,
    allowOutsideClick: false,
    footer: "Developed by Kiran Behara",
  });
};

const showConfirmToast = (icon, text) => {
  return Swal.fire({
    icon: icon,
    text: text,
    showConfirmButton: true,
    showCancelButton: true,
    showConfirmButton: true,
    allowOutsideClick: false,
    footer: "Developed by Kiran Behara",
  });
};

const convertCamelCaseToTitleText = (camelCaseText) => {
  const text = camelCaseText;
  const result = text.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};

const convertColumnName = (columnName, str) => {
  if (columnName === "createdAt") {
    const date = new Date(`${str}`);
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() - 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
  }
  if (typeof str === "boolean") {
    if (str) {
      return "✅";
    } else {
      return "❌";
    }
  }
  if (typeof str === "object") {
    if (str) {
      if (Array.isArray(str)) {
        return str
          .map((x) => x.label)
          .join(", ")
          .toString();
      } else {
        return str.label;
      }
    } else {
      return "-";
    }
  }
  return str;
};

const getTableColumnNames = (data) => {
  let tempArr = [];
  if (data && data.length > 0) {
    Object.keys(data[0])?.forEach((col) => {
      if (col !== "_id" && col !== "__v") tempArr.push(col);
    });
  }
  return tempArr;
};

const filterCustomTable = (attributes, rows, searchTerm) => {
  let list = [];
  if (rows?.length > 0) {
    if (searchTerm?.length === 0) {
      list = [...rows];
      return;
    }
    for (const current of rows) {
      let value;
      for (const attribute of attributes) {
        if (attribute === "createdAt") {
          continue;
        }
        value = current[attribute];
        if (
          typeof value === "boolean" ||
          typeof value === "object" ||
          typeof value === "number" ||
          typeof value === "undefined" ||
          value?.length === 0
        ) {
          continue;
        }
        // const value = current[attribute];
        if (value && value.toLowerCase().includes(searchTerm.toLowerCase())) {
          list.push(current);
        }
      }
    }
  }
  return [...new Set(list)];
};

function calculateAgeFromDob(birthdate) {
  var birthDate = new Date(birthdate);
  var currentDate = new Date();
  var age = currentDate.getFullYear() - birthDate.getFullYear();
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  var months = currentDate.getMonth() - birthDate.getMonth();
  if (months < 0) {
    months += 12;
  }
  var days = currentDate.getDate() - birthDate.getDate();
  if (days < 0) {
    var lastMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    days += lastMonthDate;
    months--;
  }
  return {
    age: age,
    months: months,
    days: days,
    currentAgeStr: `${age}Y ${months <= 0 ? 0 : months}M ${days}D`,
  };
}

const calculateAge = (birthdate) => {
  const birthdateObj = new Date(birthdate);
  if (birthdateObj === "Invalid Date") {
    return {
      currentAgeStr: ``,
    };
  }
  const today = new Date();

  let years = today.getFullYear() - birthdateObj.getFullYear();
  let months = today.getMonth() - birthdateObj.getMonth();
  let days = today.getDate() - birthdateObj.getDate();

  // Adjust for negative months or days
  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return {
    currentAgeStr: `${years}Y ${months <= 0 ? 0 : months}M ${days}D`,
  };
};

function calculateBMI(weight, height) {
  // weight in KG
  //console.log(`BMI: ${bmi.toFixed(2)}`);
  // Convert height from centimeters to meters
  const heightInMeters = height / 100;

  // Calculate BMI
  const bmi = weight / (heightInMeters * heightInMeters);
  
  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }
  return {
    bmiScore: bmi.toFixed(2),
    bmiCategory: category,
  };
}
function toTitleCase(str) {
  return str.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
}
export {
  addBaseUrl,
  showBasicToast,
  showConfirmToast,
  showToastModal,
  convertCamelCaseToTitleText,
  convertColumnName,
  getTableColumnNames,
  filterCustomTable,
  showTokenExpiredAndLogout,
  calculateAgeFromDob,
  calculateAge,
  calculateBMI,
  toTitleCase,
};
