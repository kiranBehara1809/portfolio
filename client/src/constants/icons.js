import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsIcon from "@mui/icons-material/Settings";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import FemaleIcon from "@mui/icons-material/Female";
import { Box } from "@mui/material";
import { BiMaleFemale } from "react-icons/bi";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import CancelIcon from "@mui/icons-material/Cancel";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { FaStethoscope } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaUserInjured } from "react-icons/fa";
import AlbumIcon from "@mui/icons-material/Album";
import { VscTypeHierarchySub } from "react-icons/vsc";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { GrLanguage } from "react-icons/gr";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { BiSolidCity } from "react-icons/bi";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import FlagIcon from "@mui/icons-material/Flag";
import { FaHouseFlag } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa";
import { FaUsersRays } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import { GiByzantinTemple } from "react-icons/gi";
import { GiBank } from "react-icons/gi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import InfoIcon from "@mui/icons-material/Info";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { ImProfile } from "react-icons/im";
import { TbError404 } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { HiUserAdd } from "react-icons/hi";
import { SlGrid } from "react-icons/sl";
import { LuTable } from "react-icons/lu";
import { TbFilterSearch } from "react-icons/tb";
import { IoIosEye } from "react-icons/io";

import { IoPencil } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";
import { FaPalette } from "react-icons/fa6";
import { ImFontSize } from "react-icons/im";
import { FaDev } from "react-icons/fa";
import { TbInfoTriangleFilled } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";

const SETTINGS_ICON = (
  <SettingsIcon fontSize="large" sx={{ color: "primary.main" }} />
);
const HOME_ICON = <HomeIcon fontSize="large" sx={{ color: "primary.main" }} />;
const SEARCH_PRODUCT_FUND_ICON = <FaSearch className="reactIconsColor" />;
const SEARCH_ICON = <FaSearch className="reactIconsColor" />;

const ADMIN_PANEL_ICON = (
  <AdminPanelSettingsIcon fontSize="large" sx={{ color: "primary.main" }} />
);

const BLOOD_GROUP_ICON = (
  <BloodtypeIcon fontSize="large" sx={{ color: "primary.main" }} />
);

const GENDER_ICON = <IoMdFemale className="reactIconsColor" />;
const CURRENCY_ICON = <HiMiniCurrencyRupee className="reactIconsColor" />;
const DOC_DEGREE_ICON = <FaUserGraduate className="reactIconsColor" />;
const CITY_ICON = <BiSolidCity className="reactIconsColor" />;
const LANGUAGE_ICON = <GrLanguage className="reactIconsColor" />;
const NATIONALITY_ICON = <FaHouseFlag className="reactIconsColor" />;
const ID_TYPE_ICON = <FaIdCard className="reactIconsColor" />;
const PATIENT_TYPE_ICON = <FaUsersRays className="reactIconsColor" />;
const RELIGION_ICON = <GiByzantinTemple className="reactIconsColor" />;
const BANK_ICON = <GiBank className="reactIconsColor" />;
const PAYMENT_TYPE_ICON = <FaMoneyBillAlt className="reactIconsColor" />;
const PATIENT_CATEGORY_ICON = <FaCreditCard className="reactIconsColor" />;
const MARITAL_STATUS_ICON = <BiMaleFemale className="reactIconsColor" />;
const STATE_ICON = (
  <HolidayVillageIcon fontSize="large" sx={{ color: "primary.main" }} />
);
const COUNTRY_ICON = (
  <FlagIcon fontSize="large" sx={{ color: "primary.main" }} />
);
const SALUTATION_ICON = <FaHandshake className="reactIconsColor" />;
const CLOSE_ICON = (
  <CancelIcon fontSize="medium" sx={{ color: "error.main" }} />
);
const NEXT_OF_KIN_ICON = (
  <FamilyRestroomIcon fontSize="large" sx={{ color: "primary.main" }} />
);

const DOCTOR_ICON = <FaUserDoctor className="reactIconsColor" />;
const RX_DASHBOARD_ICON = <RxDashboard className="reactIconsColor" />;
const DOC_SPECIALITY_ICON = <FaStethoscope className="reactIconsColor" />;
const DOC_DEPT_ICON = <FaBuildingUser className="reactIconsColor" />;
const DOC_DESIGNATION_ICON = <FaAddressCard className="reactIconsColor" />;
const DOC_ADD_ICON = <IoPersonAdd className="reactIconsColor" />;
const DOC_TYPES_ICON = <VscTypeHierarchySub className="reactIconsColor" />;

const APPOINTMENT_CALENDAR_ICON = (
  <EventAvailableIcon fontSize="large" sx={{ color: "primary.main" }} />
);

const OUT_PATIENT_ICON = (
  <>
    <AlbumIcon fontSize="large" sx={{ color: "primary.main" }} />
    {/* <FaUserInjured className="reactIconsTwoIcons outPatientIcon" /> */}
  </>
);
const IN_PATIENT_ICON = (
  <>
    <BsFillInfoCircleFill className="reactIconsTwoIcons" />
    {/* <FaUserInjured className="reactIconsTwoIcons" /> */}
  </>
);

const USERS_ICON = <FaUsers className="reactIconsTwoIcons" />;
const ROLES_ICON = <FaUsersCog className="reactIconsTwoIcons" />;
const PAGE_NOT_FOUND_ICON = <TbError404 className="pageNotFoundIcon" />;
const UNDER_DEV_ICON = <TbInfoTriangleFilled className="pageNotFoundIcon" />;

const ACC_POPOVER_PROFILE_ICON = (
  <ImProfile className="reactIconsColorMedium" />
);
const ACC_POPOVER_INFO_ICON = (
  <InfoIcon fontSize="medium" sx={{ color: "primary.main" }} />
);
const ACC_POPOVER_SETTINGS_ICON = (
  <SettingsIcon fontSize="medium" sx={{ color: "primary.main" }} />
);
const ACC_POPOVER_LOGOUT_ICON = (
  <PowerSettingsNewIcon fontSize="medium" sx={{ color: "primary.main" }} />
);

//------------------ common icons ---------------
const ADDRESS_ICON = <FaAddressCard className="reactIconsColor" />;
const USER_ICON = <FaUser className="reactIconsColor" />;
const MONEY_STACK = <GiMoneyStack className="reactIconsColor" />;
const ADD_USER_ICON = <HiUserAdd className="reactIconsColor" />;
const GRID_ICON = <SlGrid className="reactIconsColor" />;
const TABLE_ICON = <LuTable className="reactIconsColor" />;
const FILTER_ICON = <TbFilterSearch className="reactIconsColor" />;
const VIEW_ICON = <IoIosEye className="reactIconsColor" />;
const EDIT_ICON = <IoPencil className="reactIconsColor" />;
const CIRCLE_CHECK_ICON = <FaCheckCircle className="reactIconsColor" />;
const ADD_VITALS_ICON = <MdAssignmentAdd className="reactIconsColor" />;
const PALETTE_ICON = <FaPalette className="reactIconsColor" />;
const FONT_SIZE_ICON = <ImFontSize className="reactIconsColor" />;

//------------------ common icons ---------------

export {
  SETTINGS_ICON,
  HOME_ICON,
  ADMIN_PANEL_ICON,
  BLOOD_GROUP_ICON,
  GENDER_ICON,
  MARITAL_STATUS_ICON,
  SALUTATION_ICON,
  CLOSE_ICON,
  NEXT_OF_KIN_ICON,
  DOCTOR_ICON,
  DOC_SPECIALITY_ICON,
  RX_DASHBOARD_ICON,
  DOC_DEPT_ICON,
  DOC_ADD_ICON,
  DOC_DESIGNATION_ICON,
  OUT_PATIENT_ICON,
  IN_PATIENT_ICON,
  DOC_TYPES_ICON,
  APPOINTMENT_CALENDAR_ICON,
  LANGUAGE_ICON,
  CURRENCY_ICON,
  CITY_ICON,
  STATE_ICON,
  COUNTRY_ICON,
  NATIONALITY_ICON,
  ID_TYPE_ICON,
  PATIENT_TYPE_ICON,
  PATIENT_CATEGORY_ICON,
  RELIGION_ICON,
  BANK_ICON,
  PAYMENT_TYPE_ICON,
  DOC_DEGREE_ICON,
  USERS_ICON,
  ROLES_ICON,
  ACC_POPOVER_PROFILE_ICON,
  ACC_POPOVER_INFO_ICON,
  ACC_POPOVER_LOGOUT_ICON,
  ACC_POPOVER_SETTINGS_ICON,
  PAGE_NOT_FOUND_ICON,
  ADDRESS_ICON,
  USER_ICON,
  MONEY_STACK,
  ADD_USER_ICON,
  GRID_ICON,
  TABLE_ICON,
  FILTER_ICON,
  VIEW_ICON,
  EDIT_ICON,
  CIRCLE_CHECK_ICON,
  ADD_VITALS_ICON,
  PALETTE_ICON,
  FONT_SIZE_ICON,
  UNDER_DEV_ICON,
  SEARCH_PRODUCT_FUND_ICON,
  SEARCH_ICON
};
