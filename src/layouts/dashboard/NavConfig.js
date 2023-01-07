// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'داشبورد',
    path: '/dashboard/app',
    icon: getIcon('eva:layout-fill'),
  },
  {
    title: 'حراجی ها',
    path: '/dashboard/auctions',
    icon: getIcon('eva:layers-fill'),
  },
  {
    title: 'پرتفوی من',
    path: '/dashboard/portfolio',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'پروژه ها',
    path: '/dashboard/projects',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'بلاگ',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill'),
  },
];

export default navConfig;
