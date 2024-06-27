/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1156px",
        "container-large": "1188px",
        "container-md": "768px",
        240: "240px",
        286: "286px",
        294: "294px",
        306: "306px",
        344: "344px",
        347: "347px",
        350: "350px",
        370: "370px",
        420: "420px",
        457: "457px",
        498: "498px",
        525: "525px",
        842: "842px",
        
      },
      minWidth: {
        "420px": "420px",
      },
      fontFamily: {
        'pop': ["Poppins"],
        'inter': ["Inter"],
        'gotham': ["Gotham"],
        'noto': ["Noto Sans"],
      },
      fontSize: {
        13: "13px",
        15: "15px",
        17: "17px",
        18: "18px",
        22: "22px",
        28: "28px",
        25: "25px",
        32: "32px",
        33: "33px",
        38: "38px",
        40: "40px",
        42: "42px",
        54: "54px",
      },
      colors: {
        "primary-dark-blue": "#010C4A",
        "secondary-dark-blue": "#0D1128",
        "tertiary-orange": "#EE6A23",
        "tertiary-sky": "#1294DF",
        "light-orange": "#FF8B42",
        "gray-1": "#686868",
        "gray-2": "#7A7A7A",
        "gray-3": "#333333",
        "gray-4": "#808080",
        "gray-5": "#8B8B8B",
        "light-sky": "#E9F5FC",
        "light-blue": "#71CBFF",
        "blue-2": "#5BC3FF",
        "blue-3": "#D5D5D5",
        "light-cornflower-blue": "#9ED3F2",
        "dark-yellow": "#EECC23",
        "yellow-2": "#FCC211",
        "yellow-3": "#ee9623",
        "light-yellow": "#FCE18E",
        "light-lemon": "#A3E3BE",
        "light-orange": "rgba( 255, 89, 0, 0.27)",
        "lighter-sky": "rgba(18, 148, 223, 0.21)",
        "banner-dark": "#0A0E20",
        "lighter": "#ECECEC",
        "Dark-moderate-blue": "#2A3073",
        "dim-Gray": "#707070",
        "grim-reaper": "#100B33",
        "pink": "#FF9AEE",
        "ghost-white": "#F6F5FB",
      },
      width: {
        "5p": "5%",
        "7p": "7%",
        "8p": "8%",
        "9p": "9px",
        "15p": "15%",
        "20p": "20%",
        "60p": "60%",
        "48p": "48%",
        11: "11px",
        15: "15px",
        26: "26px",
        27: "27px",
        30: "30px",
        35: "35px",
        38: "38px",
        43: "43px",
        45: "45px",
        56: "56px",
        65: "65%",
        70: "70px",
        '72px': "72px",
        74: "74px",
        82: "82px",
        130: "130px",
        134: "134px",
        137: "137px",
        139: "139px",
        167: "167px",
        189: "189px",
        206: "206px",
        212: "212px",
        215: "215px",
        220: "220px",
        232: "232px",
        236: "236px",
        255: "255px",
        286: "286px",
        280: "280px",
        300: "300px",
        313: "313px",
        333: "333px",
        381: "381px",
        424: "424px",
        420: "420px",
        429: "429px",
        454: "454px",
        463: "463px",
        480: "480px",  
        506: "506px",
        572: "572px",
        580: "580px",
        596: "596px",
        768: "768px",
        842: "842px",
        850: "850px",
        895: "895px",
        908: "908px",
        918: "918px",
        961: "961px",
        1017: "1017px",
        1066: "1066px",
      },
      height: {
        "9p": "9px",
        11: "11px",
        15: "15px",
        23: "23px",
        25: "25px",
        26: "26px",
        27: "27px",
        30: "30px",
        35: "35px",
        38: "38px",
        42: "42px",
        43: "43px",
        45: "45px",
        46: "46px",
        74: "74px",
        82: "82px",
        167: "167px",
        179: "179px",
        217: "217px",
        226: "226px",
        232: "232px",
        251: "251px",
        292: "292px",
        318: "318px",
        344: "344px",
        350: "350px",
        379: "379px",
        384: "384px",
        407: "407px",
        470: "470px",
        502: "502px",
        583: "583px",
        669: "669px",
        806: "806px",
        813: "813px",
        908: "908px",
      },
      maxHeight: {
        548: "548px",
      },
      minHeight: {
        141: "141px",
      },
      spacing: {
        p7: "7px",
        15: "15px",
        13: "13px",
        17: "17px",
        18: "18px",
        21: "21px",
        22: "22px",
        25: "25px",
        27: "27px",
        29: "29px",
        30: "30px",
        42: "42px",
        50: "50px",
        51: "51px",
        52: "52px",
        54: "54px",
        60: "60px",
        65: "65px",
        69: "69px",
        71: "71px",
        77: "77px",
        82: "82px",
        85: "85px",
        98: "98px",
        100: "100px",
        102: "102px",
        105: "105px",
        106: "106px",
        108: "108px",
        110: "110px",
        113: "113px",
        117: "117px",
        138: "138px",
        140: "140px",
        150: "150px",
        157: "157px",
        165: "165px",
        170: "170px",
        175: "175px",
        178: "178px",
        182: "182px",
        186: "186px",
        188: "188px",
        194: "194px",
        200: "200px",
        320: "320px",
        374: "374px",
        454: "454px",
        "22p": "22%",
        "24p": "24%",
        "27p": "27%",
        "30p": "30%",
        "40p": "40%",
        "46p": "46%",
        "49p": "49%",
        "55p": "55%",
        "57p": "57%",
        "60p": "60%",
        "64p": "64%",
        "65p": "65%",
        "85p": "85%",
      },
      zIndex: {
        9999: "9999",
        99999: "99999",
        999999: "999999",
      },
      boxShadow: {
        btn: "2px 3px 0px #0D1128;",
        category: "1px 1px 20px #71CBFF40",
        notice: "3.698px 3.698px 3.5px rgba(0,0,0,0.07)",
      },
      filter: {
        'filter-notice': 'drop-shadow(29.698px 29.698px 28.5px rgba(0,0,0,0.16))',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #fff 0%, #51BEFD 100%)',
      },
      borderRadius: {
        11: "11px",
        17: "17px",
        18: "18px",
        20: "20px",
        22: "22px",
        23: "23px",
        30: "30px",
        116: "116px",
        213: "231px",
        452: "452px",
      },
      backdropBrightness: {
        32: '.32',
      },
      lineHeight: {
        15: "15px",
        18: "18px",
        22: "22px",
        25: "25px",
        26: "26px",
        30: "30px",
        33: "33px",
        35: "35px",
        40: "40px",
        42: "42px",
        44: "44px",
        50: "50px",
        53: "53px",
        60: "60px",
        72: "72px",
        
      },

      keyframes: {
        ping: {
          "75%, 100%": {
            transform: "scale(1.35)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],

};
