import ls from "localstorage-ttl";

export const ICELAND_IMG = "https://bootstrap-themes.github.io/application/assets/img/iceland.jpg";

export const AVATAR_DHG = "https://bootstrap-themes.github.io/application/assets/img/avatar-dhg.png";

export const AVATAR_FAT = "https://bootstrap-themes.github.io/application/assets/img/avatar-fat.jpg";

export const AVATAR_MDO = "https://bootstrap-themes.github.io/application/assets/img/avatar-mdo.png";

export const YELLOW_BUILDING_IMG = "https://bootstrap-themes.github.io/application/assets/img/instagram_2.jpg";

export const SUNSET_IMG = "https://bootstrap-themes.github.io/application/assets/img/instagram_3.jpg";

export const LOGO_IMG = "src/assets/images/logo.png";

export let photo_gallery = [
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
    user_img: AVATAR_FAT,
    user_name: "Jacob Thronton",
    time_stamp:"21 min",
    comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    comment_img_url: null
  },
  {
    user_img: AVATAR_MDO,
    user_name: "Mark Otto",
    time_stamp:"1 hour",
    comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    comment_img_url: SUNSET_IMG
  },
  {
    user_img: AVATAR_MDO,
    user_name: "Mark Otto",
    time_stamp:"1 day",
    comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    comment_img_url: null
  }
];

if(!ls.get("allComments")){
    ls.set("allComments", ALL_COMMENTS_DATA);
}
