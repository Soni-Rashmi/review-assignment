import ls from "localstorage-ttl";
import logoImage from "../assets/images/logo.png";
import favicon from "../assets/images/favicon.ico";

export const ICELAND_IMG = "https://bootstrap-themes.github.io/application/assets/img/iceland.jpg";

export const AVATAR_DHG = "https://bootstrap-themes.github.io/application/assets/img/avatar-dhg.png";

export const AVATAR_FAT = "https://bootstrap-themes.github.io/application/assets/img/avatar-fat.jpg";

export const AVATAR_MDO = "https://bootstrap-themes.github.io/application/assets/img/avatar-mdo.png";

export const YELLOW_BUILDING_IMG = "https://bootstrap-themes.github.io/application/assets/img/instagram_2.jpg";

export const SUNSET_IMG = "https://bootstrap-themes.github.io/application/assets/img/instagram_3.jpg";

export const LOGO_IMG = "src/assets/images/logo.png";

export let photoGallery = [
  {
    left: "https://bootstrap-themes.github.io/application/assets/img/instagram_5.jpg",
    right: "https://bootstrap-themes.github.io/application/assets/img/instagram_6.jpg"
  },
  {
    left: "https://bootstrap-themes.github.io/application/assets/img/instagram_7.jpg",
    right: "https://bootstrap-themes.github.io/application/assets/img/instagram_8.jpg"
  },
  {
    left: "https://bootstrap-themes.github.io/application/assets/img/instagram_9.jpg",
    right: "https://bootstrap-themes.github.io/application/assets/img/instagram_10.jpg"
  }
]

export const ALL_COMMENTS_DATA = [
  {
    userImg: AVATAR_FAT,
    userName: "Jacob Thronton",
    timeStamp: "21 min",
    commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentImageUrl: null
  },
  {
    userImg: AVATAR_MDO,
    userName: "Mark Otto",
    timeStamp: "1 hour",
    commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentImageUrl: SUNSET_IMG
  },
  {
    userImg: AVATAR_MDO,
    userName: "Mark Otto",
    timeStamp: "1 day",
    commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentImageUrl: null
  }
];

if(!ls.get("allComments")){
    ls.set("allComments", ALL_COMMENTS_DATA);
}
