import HomePage from "../pages/HomePage/HomePage.jsx";
import IntroducePage from "../pages/IntroducePage/IntroducePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import AccountPage from "../pages/AccountPage/AccountPage.jsx";
import CartPage from "../pages/CartPage/CartPage.jsx";
import PayPage from "../pages/PayPage/PayPage.jsx";
import SettingPage from "../pages/SettingPage/SettingPage.jsx";
import ProductPage from "../pages/ProductPage/ProductPage.jsx";
export const routes = [
  {
    path: "/",
    page: IntroducePage,  
  },
  {
    path: "/gioi-thieu",
    page: IntroducePage,  
  },
  {
    path: "/thong-tin-ca-nhan",
    page: SettingPage,
    log:true,
    choice:0,
  },
  {
    path: "/doi-mat-khau",
    page: SettingPage,
    log:true,
    choice:1,
  },
  {
    path: "/lich-su-mua-hang",
    page: SettingPage,
    log:true,
    choice:2,
    list:[],
  },
  {
    path: "/dang-nhap",
    page: AccountPage,
    type:0,
  },
  {
    path: "/thanh-toan",
    page: PayPage,
    log:true,
  },
  {
    path: "/dang-ky",
    page: AccountPage,
    type:1,
  },
  {
    path: "/quen-mat-khau",
    page: AccountPage,
    type:2,
  },
  {
    path: "/gio-hang",
    page: CartPage,
    list:[],
  },
  {
    path: "/trang-chu",
    page: HomePage,
    category: undefined,
  },
  {
    path: "/chuyen-muc/cay-canh",
    page: HomePage,
    category: true,
  },
  {
    path: "/chuyen-muc/chau-canh",
    page: HomePage,
    category: false,
  },
  {
    path: "/chuyen-muc/:tenloai/:maloai",
    page: HomePage,
  },
  {
    path: "/san-pham/:tensp/:maloai/:masp",
    page: ProductPage,
  },
  {
    path: "/order",
    page: OrderPage,  
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
