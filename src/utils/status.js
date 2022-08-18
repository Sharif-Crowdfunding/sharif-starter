export function getStatusMessage(status) {
  switch (status) {
    case 0:
      return "بررسی اطلاعات اولیه";
    case 1:
      return "بررسی اطلاعات ثانویه";
    case 2:
      return "در حال اجرا";
    case 3:
      return "پایان یافته";
    case 4:
      return "لغو شده";
    default:
      break;
  }
}
