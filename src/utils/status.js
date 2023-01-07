export function getStatusMessage(status) {
  switch (status) {
    case 0:
      return "بررسی اطلاعات اولیه";
    case 1:
      return "تایید شده";
    case 2:
      return "در حال اجرا";
    case 3:
      return "لغو شده";
    default:
      break;
  }
}
