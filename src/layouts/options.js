import React from "react";
import {
  FiAlertCircle, FiEdit, FiMessageCircle, FiTablet
} from "react-icons/fi";

export const CustomerSidebar = [
  {
    title: "ثبت درخواست خدمت",
    to: "/dashboard/make-request",
    htmlBefore: <FiEdit />,
  },
  {
    title: "فهرست درخواست خدمت ها",
    htmlBefore: <FiTablet />,
    to: "/dashboard/request-list",
  },

  {
    title: "پیام ها",
    htmlBefore: <FiMessageCircle />,
    to: "/dashboard/chat",
  },
  {
    title: "اعلانات",
    htmlBefore: <FiAlertCircle />,
    to: "/dashboard/notification",
  },
];
